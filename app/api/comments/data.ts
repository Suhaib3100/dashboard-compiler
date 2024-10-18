import { faker } from "@faker-js/faker";
import { formatDate } from "@/lib/utils";
import { subTasks } from "../tasks/data";

function generateComments(numItems: number) {
  const data = [];
  
  for (let i = 1; i <= numItems; i++) {
    const newItem = {
      id: faker.string.uuid(),
      avatar: faker.image.avatarLegacy(),
      name: faker.person.fullName({ sex: "male" }),
      text: faker.lorem.paragraph(2),
      date: formatDate(new Date()),
      subTaskId: subTasks[0].id,
    };
    data.push(newItem);
  }

  return data;
}

export const comments = generateComments(6);

export type Comment = ( typeof comments )[number];