import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { type Member } from "./page";
const TeamCard = ({ item }: { item: Member }) => {
  const { name, designation, company, avatar, stats } = item;
  return (
    <Card className="p-6 bg-background">
      <CardContent className="p-0">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full">
            <Image
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center text-lg font-medium text-default-800 mt-3">
          {name}
        </div>
        <div className="text-center text-sm  text-default-600">
          {designation} at <span className="text-primary">{company}</span>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <Button
            asChild
            color="secondary"
            className="bg-default-100 text-default-500"
          >
            <Link href="/dashboard" className="whitespace-nowrap">
              View Profile
            </Link>
          </Button>
          <Button>Message</Button>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {stats.map((listItem, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-3 rounded bg-${listItem.color}/10`}
            >
              <div className="text-sm font-medium text-default-600 capitalize whitespace-nowrap">
                {listItem.name}:
              </div>
              <div className={`text-sm font-semibold text-${listItem.color}`}>
                {listItem.count}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
