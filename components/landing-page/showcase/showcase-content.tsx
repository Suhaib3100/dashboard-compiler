import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ShowCaseContent = ({ content }: {
  content: {
    title: string
    description: string
    image: any,
    href: string
    showAll: boolean
  }
}) => {
  return (
    <>

      {
        content.showAll ? (
          <Card className="rounded-md overflow-hidden border border-default-300">
            <CardContent
              className="flex justify-center items-center h-full relative p-0 ">
              <Image src={content.image} className="absolute w-full h-full object-cover " alt="image" priority={true} />
              <div className="relative flex flex-col items-center gap-5">
                <div className="text-2xl xl:text-5xl font-semibold text-default-600">+ More</div>
                <Button asChild >
                  <Link href={content.href}>  View All</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )
          :

          (
            <Card className="bg-background border border-default-300">
              <CardHeader className="border-none mb-0">
                <div className="flex items-center">
                  <div className="flex-1 text-base xl:text-xl font-medium text-default-900 capitalize">
                    {content.title}
                  </div>
                  <Button asChild className="flex-none">
                    {content.href && <Link href={content.href}> View Now</Link>}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="mt-1">
                {content.image && <Image src={content.image} className="w-full h-full object-cover" alt="images" priority={true} />}
              </CardContent>
            </Card>
          )
      }

    </>
  );
};

export default ShowCaseContent;
