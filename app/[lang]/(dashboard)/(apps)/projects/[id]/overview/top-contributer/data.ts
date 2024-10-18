import avatar1 from "@/public/images/avatar/avatar-7.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import { faker } from "@faker-js/faker";

export const data = [
  {
    id: faker.string.uuid(),
    name: "Monica Bellas",
    email: "bellas@gmail.com",
    score: 90,
    image: avatar1,
    count: 23,
  },
  {
    id: faker.string.uuid(),
    name: "Monica Bellas",
    email: "bellas@gmail.com",
    score: 90,
    image: avatar6,
    count: 256,
  },
  {
    id:faker.string.uuid(),
    name: "Monica Bellas",
    email: "bellas@gmail.com",
    score: 80,
    image: avatar3,
    count: 33453,
  },
  {
    id: faker.string.uuid(),
    name: "Monica Bellas",
    email: "bellas@gmail.com",
    score: "70",
    image: avatar4,
    count: 1234,
  },
  {
    id:faker.string.uuid(),
    name: "Monica Bellas",
    email: "bellas@gmail.com",
    score: 65,
    image: avatar5,
    count: 2235,
  },
  {
    id: faker.string.uuid(),
    name: "Monica Bellas",
    email: "bellas@gmail.com",
    score: 60,
    image: avatar6,
    count: 134,
  },
  {
    id: faker.string.uuid(),
    name: "Monica Bellas",
    email: "bellas@gmail.com",
    score: 55,
    image: avatar1,
    count: 3354,
  },
];

export type Data = (typeof data)[number];
