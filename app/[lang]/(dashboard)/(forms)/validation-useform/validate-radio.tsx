"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const schema = z.object({
  message: z
    .string()
    .min(1, { message: "Please select a subject to display." }),
});

const ValidateRadio = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: z.infer<typeof schema>) {
    toast.message(JSON.stringify(data, null, 2));
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <p className="text-sm mb-1 font-medium text-default-600">
        Notify me about...
      </p>
      <RadioGroup {...register("message")} className="rtl:justify-end">
        <RadioGroupItem value="rad_1" id="rad_1">
          All new messages
        </RadioGroupItem>
        <RadioGroupItem value="rad_2" id="rad_2">
          Direct messages and mentions
        </RadioGroupItem>
        <RadioGroupItem value="rad_3" id="rad_3">
          Nothing
        </RadioGroupItem>
      </RadioGroup>
      {errors.message && <p>{errors.message.message}</p>}
      <div className="mt-2">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default ValidateRadio;
