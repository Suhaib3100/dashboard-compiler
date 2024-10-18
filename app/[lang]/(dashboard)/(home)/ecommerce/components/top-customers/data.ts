import avatar1 from "@/public/images/avatar/avatar-7.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";

export const data = [
  {
    id: 1,
    name: "Alex Brooks",
    email: "bellas@gmail.com",
    score: 90,
    image: avatar1,
    color: "success",
    amount: "8,034"
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    email: "bellas@gmail.com",
    score: 80,
    image: avatar6,
    color: "primary",
    amount: "7,040"
  },
  {
    id: 3,
    name: "Connor Patel",
    email: "bellas@gmail.com",
    score: 70,
    image: avatar3,
    color: "primary",
    amount: "6,000"
  },
  {
    id: 4,
    name: "Monica Bellas",
    email: "bellas@gmail.com",
    score: 65,
    image: avatar4,
    color: "info",
    amount: "5,500"
  },
  {
    id: 5,
    name: "Zoe Thompson",
    email: "bellas@gmail.com",
    score: 60,
    image: avatar5,
    color: "warning",
    amount: "4,800"
  },
  {
    id: 6,
    name: "Olivia Li",
    email: "bellas@gmail.com",
    score: 50,
    image: avatar6,
    color: "warning",
    amount: "4,500"
  },
  {
    id: 7,
    name: "Jackson Kim",
    email: "bellas@gmail.com",
    score: 45,
    image: avatar1,
    color: "destructive",
    amount: "4,000"
  },
];

export type  Data = (typeof data) [number]