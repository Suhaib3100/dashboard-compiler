import { faker } from "@faker-js/faker";

export const demoBoards = [
  {
    id: "d0f5f951-89b1-4310-8c67-d38a4a44c94e",
    name: "todo",
    status: "primary",
  },
  {
    id: "a4d54aae-6f86-49e3-8724-882ab139f5b2",
    name: "Working",
    status: "warning",
  },
  {
    id: "6a1a8b36-0861-45f1-9eb4-4a6d9b6ebe13",
    name: "Completed Task",
    status: "success",
  },
];

export type Board = (typeof demoBoards)[number];

// board data
