import { ScrollArea } from "@/components/ui/scroll-area";
import CommentFooter from "./comment-footer";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check } from "lucide-react";
import { type Task as TaskType } from "@/app/api/tasks/data";
import { type Comment as CommentType } from "@/app/api/comments/data";

const Comments = ({ className, comments, taskId }: {
  className?: string;
  comments?: CommentType[];
  taskId?: TaskType["id"];
}) => {
  const filteredComments =
    comments?.filter((cm) => cm.subTaskId === taskId) || [];

  const totalComments = filteredComments ? filteredComments.length : 0;
  let content = "comments";
  if (totalComments < 2) {
    content = "comment";
  }

  return (
    <div className="flex flex-col justify-between">
      <div className="border-none mb-0 flex-none py-3.5 px-2">
        <div className="flex items-center gap-2">
          <Icon
            icon="heroicons:chat-bubble-bottom-center"
            className="h-4 w-4 text-default-500"
          />
          <div className="text-base font-medium text-default-800">
            {totalComments}
            <span className="ml-1 capitalize">{content}</span>
          </div>
        </div>
      </div>
      <div className="flex-1 pb-0">
        <div className="relative before:absolute before:top-1/2 -translate-y-1/2 before:left-0 before:w-full before:h-[1px] before:bg-default-300 text-center">
          <span className="relative bg-card   px-3">Today</span>
        </div>
        {/* jodi comments thake */}
        <div className={className}>
          <ScrollArea className="h-full">
            <div className="space-y-3.5 px-5">
              {filteredComments?.length > 0 ? (
                filteredComments.map((comment) => (
                  <div className="flex gap-2" key={`comment-key-${comment.id}`}>
                    <div className="felx-none">
                      <Avatar>
                        <AvatarImage src={comment.avatar} />
                        <AvatarFallback>CS</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-default-900 capitalize">
                          {comment.name}
                        </div>
                        <div className="text-xs text-default-400">
                          {comment.date}
                        </div>
                        <div className="text-xs text-default-400">
                          <Check className="w-3 h-3" />
                        </div>
                      </div>
                      <div className="mt-1 text-default-600 font-medium ">
                        {comment.text}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <div className="flex items-center gap-2 hover:bg-default-50 rounded-md group py-3 px-2">
                    <div>
                      <span className="h-10 w-10 rounded-full bg-default-50 group-hover:bg-default-100 block"></span>
                    </div>
                    <div className="text-sm font-medium text-default-500">
                      Don’t let it go unsaid! Post a comment to start a
                      discussion. @Mention someone to notify them.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="flex-none">
        <CommentFooter taskId={taskId} />
      </div>
    </div>
  );
};

export default Comments;
