
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

import dribble from "@/public/images/social/dribble.png"
import seo from "@/public/images/social/seo.png"
import laravel from "@/public/images/social/laravel.png"
import figma from "@/public/images/social/figma.png"
import wordpress from "@/public/images/social/wordpress.png"
import react from "@/public/images/social/react.png"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface TeamData {
  name: string;
  image: StaticImageData;
  count: number;
  category: string;
  color?: "default" | "destructive" | "success" | "info" | "warning" | "dark" | "secondary";
}

const Teams = () => {
  const data: TeamData[] = [
    {
      name: "Social Media Support",
      image: dribble,
      count: 15,
      category: "social media",
      color: "destructive"
    },
    {
      name: "SEO & Product Marketing ",
      image: seo,
      count: 26,
      category: "Marketing",
      color: "destructive"
    },
    {
      name: "Laravel Developer",
      image: laravel,
      count: 27,
      category: "Backend",
      color: "warning"
    },
    {
      name: "UX/UI Designer",
      image: figma,
      count: 28,
      category: "Designer",
      color: "success"
    },
    {
      name: "WordPress Developer",
      image: wordpress,
      count: 29,
      category: "Designer",
      color: "info"
    },
    {
      name: "React Developer",
      image: react,
      count: 30,
      category: "Reactjs",
      color: "default"
    }
  ]
  return (
    <Card>
      <CardHeader className="flex-row items-center border-none mb-2">
        <CardTitle className="flex-1"> All Teams </CardTitle>
        <Button
          size="icon"
          className="flex-none bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100 rounded h-6 w-6 -mt-1"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-5 mb-6">
          {
            data.map((item, index) => (
              <div
                key={`connection-${index}`}
                className="flex flex-col sm:flex-row lg:flex-col 2xl:flex-row 2xl:items-center gap-3"
              >
                <div className="flex-1 flex items-center gap-3">
                  <div className="flex-none">
                    <Image src={item.image} className="h-12 w-12 rounded" alt={item.name} priority={true} />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium text-default-700 mb-1">{item.name}</div>
                    <div className="text-sm text-default-500">{item.count} members</div>
                  </div>
                </div>
                <div>
                  <Badge
                    color={item.color}
                    variant="soft"
                    className="text-sm font-medium capitalize whitespace-nowrap"
                  >
                    {item.category}
                  </Badge>
                </div>
              </div>
            ))
          }
        </div>
        <div className="flex justify-center">
          <Link href="/" className="text-sm font-semibold text-primary">View All Connections</Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Teams;