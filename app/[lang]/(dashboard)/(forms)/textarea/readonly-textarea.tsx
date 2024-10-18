"use client";
import { Textarea } from "@/components/ui/textarea";

const ReadonlyTextarea = () => {
  return (
    <>
      <Textarea rows={3} readOnly >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quos, necessitatibus est quis minima illum. Ullam expedita quo explicabo sapiente.
      </Textarea>
    </>
  );
};

export default ReadonlyTextarea;
