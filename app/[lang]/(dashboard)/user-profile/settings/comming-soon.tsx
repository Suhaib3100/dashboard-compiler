import { Card, CardContent } from "@/components/ui/card";
import CommingSoonImage from "@/public/images/all-img/comming-soon.png"
import Image from "next/image";
const CommingSoon = () => {
  return (
    <Card className="rounded-t-none">
      <CardContent className="min-h-[545px] flex flex-col justify-center items-center">
        <Image src={CommingSoonImage} alt="comming soon" priority={true} />
        <div className="mt-10 text-3xl lg:text-5xl font-medium text-default-700">Coming Soon!</div>
      </CardContent>
    </Card>
  );
};

export default CommingSoon;