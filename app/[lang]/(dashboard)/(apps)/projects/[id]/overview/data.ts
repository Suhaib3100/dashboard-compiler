import avatar1 from "@/public/images/avatar/avatar-7.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import { faker } from "@faker-js/faker";
export const data = [
  {
    name: "Mark Dsuza",
    progress: 85,
    avatar: avatar1,
  },
  {
    name: "Mark Dsuza",
    progress: 80,
    avatar: avatar2,
  },
  {
    name: "Mark Dsuza",
    progress: 70,
    avatar: avatar3,
  },
  {
    name: "Mark Dsuza",
    progress: 58,
    avatar: avatar4,
  },
  {
    name: "Mark Dsuza",
    progress: 49,
    avatar: avatar5,
  },
  {
    name: "Mark Dsuza",
    progress: 37,
    avatar: avatar6,
  },
];

export const users = [
  {
    id: faker.string.uuid(),
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar1,
  },
  {
    id: faker.string.uuid(),
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar1,
  },
  {
    id: faker.string.uuid(),
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar2,
  },
  {
    id: faker.string.uuid(),
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar3,
  },
  {
    id: faker.string.uuid(),
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar4,
  },
  {
    id: faker.string.uuid(),
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar5,
  },
];

export const upcomingDeadlineData = [
  {
    id: faker.string.uuid(),
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    workload: "50",
    avatar: avatar1,
  },
  {
    id: faker.string.uuid(),
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    workload: "40",
    avatar: avatar1,
  },
  {
    id: faker.string.uuid(),
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    workload: "70",
    avatar: avatar2,
  },
  {
    id: faker.string.uuid(),
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    workload: "80",
    avatar: avatar3,
  },
  {
    id: faker.string.uuid(),
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    workload: "60",
    avatar: avatar4,
  },
  {
    id: faker.string.uuid(),
    name: "Mark Dsuza",
    task: "Admin dashboard template",
    deadline: "21 Jan 2024",
    workload: "90",
    avatar: avatar5,
  },
];


export type  Data = (typeof data)[number];
export type  Users = (typeof users)[number];
export type  UpcomingDeadlineData = (typeof upcomingDeadlineData)[number];