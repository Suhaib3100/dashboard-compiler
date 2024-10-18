import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Github from "@/public/images/social/github-circle.png"
import Dribble from "@/public/images/social/dribble-1.png"
import Behance from "@/public/images/social/behance-1.png"
import Pinterest from "@/public/images/social/pinterest-circle.png"
import Web from "@/public/images/social/web.png"
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface PortfolioData {
  name: string;
  image: StaticImageData;
  link: string;

}

const Portfolio = () => {

  const data: PortfolioData[] = [
    {
      name: "Github",
      image: Github,
      link: "#",
    },
    {
      name: "Dribble",
      image: Dribble,
      link: "#",
    },
    {
      name: "Behance",
      image: Behance,
      link: "#",
    },
    {
      name: "Pinterest",
      image: Pinterest,
      link: "#",
    },
    {
      name: "Web",
      image: Web,
      link: "#",
    },
  ]
  return (
    <Card>
      <CardHeader className="flex-row items-center border-none mb-2">
        <CardTitle className="flex-1"> Portfolio </CardTitle>
        <Button
          size="icon"
          className="flex-none bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100 rounded h-6 w-6 -mt-1"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 items-center">
          {
            data.map((item, index) => (
              <Link key={`portfolio-${index}`} href={item.link}>
                <Image src={item.image} alt="image" className="h-9 w-9 rounded-full" priority={true} />
              </Link>
            ))
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default Portfolio;