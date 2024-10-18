import avatar from "@/public/images/avatar/avatar-7.jpg";
import img1 from "@/public/images/all-img/headphone-2.png";
import { faker } from "@faker-js/faker";
import { formatDate } from "@/lib/utils";
import { statuses, generateAssignments, priorities } from "../projects/data";
import { demoBoards } from "@/app/api/boards/data";
export const tasks = [
  {
    boardId: demoBoards[0].id,
    id: "2e09c2fc-9d92-4df1-a3cc-bd8c8c51d85c",
    title: "the dashtail template",
    desc: "Create a Brand logo design for a DashTail Admin.",
    status: "inprogress",
    tags: ["design", "planning"],
    priority: "high",
    assign: [
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rakib",
        image: avatar,
      },
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rahad",
        image: avatar,
      },
    ],
    image: img1,
    category: "ui & ux",
    pages: "0/7",
    messageCount: "05",
    link: "02",
    date: "31 Jan,2024",
    time: "5:19pm",
    list: [
      {
        id: "item-1",
        title: "Collect Data",
      },
      {
        id: "item-2",
        title: "Collect Icons",
      },
      {
        id: "item-1",
        title: "Make Project Layout",
      },
    ],
  },
  {
    boardId: demoBoards[1].id,
    id: "8613e1d1-2046-4f0e-bacb-dca57db5b1a9",
    title: "the dashtail template",
    desc: "Create a Brand logo design for a DashTail Admin.",
    status: "completed",
    tags: ["development", "planning"],
    priority: "low",
    assign: [
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rakib",
        image: avatar,
      },
    ],
    image: img1,
    category: "ui & ux",
    pages: "0/7",
    messageCount: "05",
    link: "02",
    date: "31 Jan,2024",
    time: "5:19pm",
    list: [
      {
        id: "item-1",
        title: "Collect Data",
      },
      {
        id: "item-2",
        title: "Collect Icons",
      },
      {
        id: "item-1",
        title: "Make Project Layout",
      },
    ],
  },
  {
    boardId: demoBoards[2].id,
    id: "5d4818ef-9f51-48f2-80bc-2df7e50a1f64",
    title: "the dashtail template",
    desc: "Create a Brand logo design for a DashTail Admin.",
    status: "inprogress",
    tags: ["development", "planning"],
    priority: "medium",
    assign: [
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rakib",
        image: avatar,
      },
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rahad",
        image: avatar,
      },
    ],
    image: "",
    category: "ui & ux",
    pages: "0/7",
    messageCount: "05",
    link: "02",
    date: "31 Jan,2024",
    time: "5:19pm",
    list: [
      {
        id: "item-1",
        title: "Collect Data",
      },
      {
        id: "item-2",
        title: "Collect Icons",
      },
      {
        id: "item-1",
        title: "Make Project Layout",
      },
    ],
  },
  {
    boardId: demoBoards[2].id,
    id: "e0e88989-0876-4f1f-9e07-3b69e7e6e05c",
    title: "New template",
    desc: "Create a Brand logo design for a DashTail Admin.",
    status: "inprogress",
    tags: ["development", "planning"],
    priority: "medium",
    assign: [
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rakib",
        image: avatar,
      },
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rahad",
        image: avatar,
      },
    ],
    image: img1,
    category: "ui & ux",
    pages: "0/7",
    messageCount: "05",
    link: "02",
    date: "31 Jan,2024",
    time: "5:19pm",
    list: [
      {
        id: "item-1",
        title: "Collect Data",
      },
      {
        id: "item-2",
        title: "Collect Icons",
      },
      {
        id: "item-1",
        title: "Make Project Layout",
      },
    ],
  },
];

export type Task = (typeof tasks)[number];

function generateSubTasks(numItems: number) {
  const data = [];

  for (let i = 1; i <= numItems; i++) {
    const numAssign = faker.number.int({ min: 1, max: 10 });
    const assignObjects = generateAssignments(numAssign);

   
    const newItem = {
      id: `78032cb9-2170-4e6f-bd3b-33f1480b3fd-${i}`,
      title: faker.hacker.ingverb(),
      status: faker.helpers.arrayElement(statuses).value,
      priority: faker.helpers.arrayElement(priorities).value,
      assign: assignObjects,
      assignDate: formatDate(new Date()),
      dueDate: formatDate(new Date()),
      completed: faker.datatype.boolean(),
      logo: null,
      taskId: tasks[0].id,
    };
    data.push(newItem);
  }

  return data;
}

export const subTasks = generateSubTasks(6);


export type SubTask = (typeof subTasks)[number];
