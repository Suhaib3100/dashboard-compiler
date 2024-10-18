"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import avatar from "@/public/images/avatar/avatar-13.jpg";
import TeamHeader from "./team-header";
import TeamCard from "./team-card";
import { Button } from "@/components/ui/button";
const members = [
  {
    id: 1,
    name: "Prantik Chakraborty",
    designation: "UX/UI Designer",
    company: "codeshaper",
    stats: [
      {
        name: "Total Task",
        count: "223",
        color: "primary",
      },
      {
        name: "completed",
        count: "123",
        color: "success",
      },
      {
        name: "incomplete",
        count: "143",
        color: "info",
      },
      {
        name: "overdue task",
        count: "123",
        color: "destructive",
      },
    ],
    avatar: avatar,
  },
  {
    id: 2,
    name: "Prantik Chakraborty",
    designation: "UX/UI Designer",
    company: "codeshaper",
    stats: [
      {
        name: "Total Task",
        count: "223",
        color: "primary",
      },
      {
        name: "completed",
        count: "123",
        color: "success",
      },
      {
        name: "incomplete",
        count: "143",
        color: "info",
      },
      {
        name: "overdue task",
        count: "123",
        color: "destructive",
      },
    ],
    avatar: avatar,
  },
  {
    id: 3,
    name: "Prantik Chakraborty",
    designation: "UX/UI Designer",
    company: "codeshaper",
    stats: [
      {
        name: "Total Task",
        count: "223",
        color: "primary",
      },
      {
        name: "completed",
        count: "123",
        color: "success",
      },
      {
        name: "incomplete",
        count: "143",
        color: "info",
      },
      {
        name: "overdue task",
        count: "123",
        color: "destructive",
      },
    ],
    avatar: avatar,
  },
  {
    id: 4,
    name: "Prantik Chakraborty",
    designation: "UX/UI Designer",
    company: "codeshaper",
    stats: [
      {
        name: "Total Task",
        count: "223",
        color: "primary",
      },
      {
        name: "completed",
        count: "123",
        color: "success",
      },
      {
        name: "incomplete",
        count: "143",
        color: "info",
      },
      {
        name: "overdue task",
        count: "123",
        color: "destructive",
      },
    ],
    avatar: avatar,
  },
];

export type Member = (typeof members)[number];
const Team = () => {

  return (
    <Card>
      <CardHeader className="lg:flex-row">
        <TeamHeader />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {members.map((item, index) => (
            <TeamCard key={`team` + index} item={item} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-center mt-5">
        <Button
          type="button"
          className="bg-default-200 text-default-500 hover:bg-default-300 hover:text-default-900"
        >
          Load More...
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Team;
