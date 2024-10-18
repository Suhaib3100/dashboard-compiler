"use client";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TextareaWithDescription = () => {
  return (
    <div>
      <div>
        <Label className="mb-2" htmlFor="post">
          Post
        </Label>
        <Textarea placeholder="what's on your mind..." id="post" rows={3} />
      </div>
      <p className="text-sm mt-3">Write anything what's on your mind</p>
    </div>
  );
};

export default TextareaWithDescription;
