import avatar1 from "@/public/images/avatar/avatar-1.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
import avatar9 from "@/public/images/avatar/avatar-9.jpg";
import avatar10 from "@/public/images/avatar/avatar-10.jpg";
import avatar11 from "@/public/images/avatar/avatar-11.jpg";
import avatar12 from "@/public/images/avatar/avatar-12.jpg";
import avatar13 from "@/public/images/avatar/avatar-13.jpg";

import ass from "@/public/images/projects/ass.jpg";
import productify from "@/public/images/projects/productify.jpg";
import uradvisor from "@/public/images/projects/uradvisor.jpg";
import konst from "@/public/images/projects/konst.jpg";
import { faker } from "@faker-js/faker";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Timer,
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import { format } from "date-fns";
export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CheckCircle2,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ChevronDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ChevronRight,
  },
  {
    label: "High",
    value: "high",
    icon: ChevronUp,
  },
];

function getRandomDate(startDate: Date, endDate: Date) {
  const start = startDate.getTime();
  const end = endDate.getTime();
  const randomTime = start + Math.random() * (end - start);
  return new Date(randomTime);
}

export function generateAssignments(numAssign: number) {
  const assignObjects = [];

  for (let j = 0; j < numAssign; j++) {
    assignObjects.push({
      image: faker.image.avatarLegacy(),
      label: faker.person.firstName(),
      value: faker.internet.userName(),
    });
  }

  return assignObjects;
}





export const projects = [
  {
    id: "76b99e8a-4d5e-4818-92cb-7932a5b8f42a",
    title: "Acculance – A POS Application.",
    subtitle:
      "Acculance stands out as a web application crafted for point of sale, inventory management, & etc.",
    status: "in progress",
    label: "bug",
    priority: "low",
    description:
      "Acculance stands out as a web application crafted for point of sale, inventory management, & etc.",
    percentage: 32,
    assign: [
      { image: avatar1, label: "John Doe", value: "john.doe" },
      { image: avatar2, label: "Jane Smith", value: "jane.smith" },
      { image: avatar3, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar4, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate:  formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),

    isFavorite: true,
  },

  {
    id: "a91b39a7-0c96-4e7c-8fb1-2204d3d26d64",
    title: "Productify - Production System.",
    subtitle:
      "Productify is a secure, and high-speed production management system constructed by Laravel.",
    status: "review",
    label: "bug",
    priority: "medium",
    description:
      "Productify is a secure, and high-speed production management system constructed by Laravel.",
    percentage: 90,
    assign: [
      { image: avatar5, label: "John Doe", value: "john.doe" },
      { image: avatar6, label: "Jane Smith", value: "jane.smith" },
      { image: avatar7, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar8, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: "02 Feb 2023",
    dueDate: "02 Apr 2023",
    logo: productify,
    isFavorite: false,
  },
  {
    id: "f3696e32-70f4-492f-8dc3-135e7c2e0f78",
    title: "UR-Advisor - Online Advisor Tool.",
    subtitle:
      "UR-Advisor stands as a lightweight quiz/survey web application built on PHP.",
    status: "in progress",
    label: "bug",
    priority: "low",
    description:
      "UR-Advisor stands as a lightweight quiz/survey web application built on PHP.",
    percentage: 61,
    assign: [
      { image: avatar9, label: "John Doe", value: "john.doe" },
      { image: avatar10, label: "Jane Smith", value: "jane.smith" },
    ],
  assignDate:  formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),
    logo: uradvisor,
    isFavorite: false,
  },
  {
    id: "4fb0b5e1-d6db-4e2e-a296-08dc5476d5b8",
    title: "Konst - Construction Website.",
    subtitle:
      "Konst professional, clean, creative, corporate, modern, and easy-to-use xd template designed.",
    status: "completed",
    label: "bug",
    priority: "high",
    description:
      "Konst professional, clean, creative, corporate, modern, and easy-to-use xd template designed.",
    percentage: 100,
    assign: [
      { image: avatar11, label: "John Doe", value: "john.doe" },
      { image: avatar12, label: "Jane Smith", value: "jane.smith" },
      { image: avatar13, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar1, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: "09 Dec 2022",
    dueDate: "14 Jan 2024",
    logo: konst,
    isFavorite: false,
  },
  {
    id: "e31b77ab-3151-41d0-858f-1f33c4dcf131",
    title: "DashCode - Admin Dashboard.",
    subtitle:
      "DashCode stands out as the fastest and extensive customizable admin dashboard template.",
    status: "review",
    label: "bug",
    priority: "medium",
    description:
      "DashCode stands out as the fastest and extensive customizable admin dashboard template.",
    percentage: 84,
    assign: [
      { image: avatar2, label: "John Doe", value: "john.doe" },
      { image: avatar3, label: "Jane Smith", value: "jane.smith" },
      { image: avatar4, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar5, label: "Alice Lee", value: "alice.lee" },
    ],
     assignDate:  formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),

    isFavorite: false,
  },
  {
    id: "9d41eae4-5c96-4a7f-a70e-0ed9c4c5f5a1",
    title: "Acculance SaaS - POS System.",
    subtitle:
      "Create a Brand logo design for a DashTail Admin. Total 21/25 tasks logo design for completed.",
    status: "completed",
    label: "bug",
    priority: "high",
    description:
      "Create a Brand logo design for a DashTail Admin. Total 21/25 tasks logo design for completed.",
    percentage: 100,
    assign: [
      { image: avatar6, label: "John Doe", value: "john.doe" },
      { image: avatar7, label: "Jane Smith", value: "jane.smith" },
      { image: avatar8, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar9, label: "Alice Lee", value: "alice.lee" },
    ],
     assignDate:  formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),
    logo: ass,
    isFavorite: false,
  },
];


export  type Project =  ( typeof projects)[number];