"use client"
import { CircularProgress } from "@/components/ui/progress";

const Loading = () => {
  return <div>
    <div className="fixed  top-0 left-0 w-full min-h-screen flex justify-center items-center bg-default-50">
      <CircularProgress
        value={50}
        color="primary"
        loading
        size="xs"
      />
    </div>
  </div>
};

export default Loading;
