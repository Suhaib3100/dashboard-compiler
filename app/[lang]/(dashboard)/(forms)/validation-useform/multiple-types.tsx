"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  author: z
    .string()
    .min(3, { message: "Author name must be at least 3 charecters." })
    .max(8, { message: "The author's name must not exceed 8 characters." }),
  phone: z.string().refine((value) => value.length === 11, {
    message: "Phone number must be exactly 11 characters long.",
  }),
  city: z.string().min(3, { message: "Enter minimum 3 charecters" }),
  web: z.string().url({ message: "Enter valid web address" }),
  inputMessage: z
    .string()
    .max(30, { message: "Message should not be exceed 30 charecters." }),
});

const MultipleTypes = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="author"
            className={cn("", {
              "text-destructive": errors.author,
            })}
          >
            Author Name
          </Label>
          <Input
            type="text"
            {...register("author")}
            placeholder="Author name 3 to 8 charecters"
            className={cn("", {
              "border-destructive focus:border-destructive": errors.author,
            })}
          />
          {errors.author && (
            <p
              className={cn("text-xs", {
                "text-destructive": errors.author,
              })}
            >
              {errors.author.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="phone"
            className={cn("", {
              "text-destructive": errors.phone,
            })}
          >
            Phone Number
          </Label>
          <Input
            type="number"
            placeholder="11 charecters phone number"
            {...register("phone")}
            className={cn("", {
              "border-destructive focus:border-destructive": errors.phone,
            })}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="city"
            className={cn("", {
              "text-destructive": errors.city,
            })}
          >
            City
          </Label>
          <Input
            type="text"
            placeholder="enter minimum 3 charecters"
            {...register("city")}
            className={cn("", {
              "border-destructive": errors.city,
            })}
          />
          {errors.city && (
            <p className="text-xs text-destructive">{errors.city.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="web"
            className={cn("", {
              "text-destructive": errors.web,
            })}
          >
            Web Address
          </Label>
          <Input
            type="text"
            {...register("web")}
            placeholder="enter valid web address"
            className={cn("", {
              "border-destructive focus:border-destructive": errors.web,
            })}
          />
          {errors.web && (
            <p className="text-xs text-destructive">{errors.web.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="inputMessage"
            className={cn("", {
              "text-destructive": errors.inputMessage,
            })}
          >
            Message
          </Label>
          <Textarea
            {...register("inputMessage")}
            placeholder="type here... maximum 30 charecters"
            id="inputMessage"
            className={cn("", {
              "border-destructive focus:border-destructive":
                errors.inputMessage,
            })}
          />
          {errors.inputMessage && (
            <p className="text-xs text-destructive">
              {errors.inputMessage.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-2">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default MultipleTypes;
