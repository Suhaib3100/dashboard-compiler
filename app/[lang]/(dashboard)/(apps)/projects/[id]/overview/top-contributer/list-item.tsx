import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { type Data } from "./data"
const ListItem = ({ item, index }: { item: Data, index: number }) => {
  const { name, email, score, image, count } = item;
  return (
    <div className="col-span-3 mb-4 sm:mb-0">
      <div className="flex flex-col md:flex-row gap-4  w-full p-2 px-6 col-span-3 hover:bg-default-50 rounded-lg">
        <div className="flex-1 flex items-center gap-3">
          <div className="relative inline-block">
            <Avatar>
              <AvatarImage src={image.src} />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <Badge
              className="w-[18px] h-[18px] bg-yellow-400 text-[10px] font-semibold p-0  items-center justify-center   absolute left-[calc(100%-14px)] top-[calc(100%-16px)]">
              {index + 1}
            </Badge>
          </div>
          <div>
            <div className="text-sm font-medium text-default-800 mb-1">{name}</div>
            <div className="text-xs text-default-600">{email}</div>
          </div>
          <div className="flex-1 flex justify-center">
            <Badge
              variant="soft"
              className="rounded-full h-8  "
            >
              {count} <span className="ml-1 text-xs font-medium">Contributed</span>
            </Badge>
          </div>
        </div>
        <div className="flex-none">
          <div className="w-[170px]">
            <div className="flex justify-between items-center gap-2 mb-1">
              <span className="text-xs font-medium text-default-800">Score</span>
              <span className="text-xs font-medium text-default-800">{score}%</span>
            </div>
            <Progress value={score as number} size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;