import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
interface ListItemProps {
  item: {
    name: string;
    email: string;
    score: number;
    image: {
      src: string;
    };
    color: "primary" | "success" | "warning" | "info" | "destructive"; 
    amount: string;
  };
  index: number;
}
const ListItem = ({ item, index }: ListItemProps) => {
  const { name, email, score, image, color, amount } = item;
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-7 sm:gap-4 w-full p-2 px-4  hover:bg-default-50 rounded-lg">

      <div className="flex-none flex flex-wrap items-center gap-3">
        <div className="relative inline-block">
          <Avatar>
            <AvatarImage src={image.src} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          <Badge
            className="w-[18px] h-[18px] bg-warning/90 text-[10px] font-semibold p-0  items-center justify-center   absolute left-[calc(100%-14px)] top-[calc(100%-16px)] bg-yellow-400">
            {index}
          </Badge>
        </div>
        <div>
          <div className="text-sm font-medium text-default-800 mb-1 whitespace-nowrap">{name}</div>
          <div className="text-xs text-default-600 whitespace-nowrap">{email}</div>
        </div>
      </div>

      <div className="flex-1 flex sm:justify-center items-center">
        <Badge className="rounded-2xl px-8 h-8 whitespace-nowrap" variant="soft">{amount}</Badge>
      </div>

      <div className="flex-none">
        <div className="w-full sm:w-[170px]">
          <div className="flex  justify-between items-center gap-2 mb-1">
            <span className="text-xs font-medium text-default-800">Score</span>
            <span className="text-xs font-medium text-default-800">{score}%</span>
          </div>
          <Progress value={score} size="sm" color={color} />
        </div>
      </div>
    </div>
  );
};

export default ListItem;