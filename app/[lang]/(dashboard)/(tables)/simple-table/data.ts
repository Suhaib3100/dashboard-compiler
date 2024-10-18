export interface ColumnProps {
  key: string;
  label: string;
}
export const columns: ColumnProps[] = [
  {
    key: "id",
    label: "id",
  },
  {
    key: "name",
    label: "name",
  },
  {
    key: "email",
    label: "email",
  },
  {
    key: "age",
    label: "age",
  },
  {
    key: "point",
    label: "point",
  },
];
export interface UserProps {
  id: number;
  name?: string;
  email?: string;
  age?: number;
  point?: number;
  project?: string;
  nested?: {
    id: string;
    project_name?: string;
    topic?: string;
    days?: string
  }[]
}
export const users: UserProps[] = [
  {
    id: 1,
    name: "Mark Dsuza",
    email: "markdsuza@gmail.com",
    project: "designing",
    age: 25,
    point: 8.03,
  },
  {
    id: 2,
    name: "Josef Jennyfer",
    email: "josefjennyfer@gmail.com",
    project: "marketting",
    age: 19,
    point: 7.12,
    nested: [
      {
        id: "I",
        project_name: "UX/UI Design",
        topic: "Full course",
        days: "32 days ago",
      },
      {
        id: "II",
        project_name: "Laravel Development",
        topic: "1/2 Course Point",
        days: "23 days ago",
      },
      {
        id: "III",
        project_name: "Frontend Development",
        topic: "Full Course",
        days: "29 days ago",
      },
    ],
  },
  {
    id: 3,
    name: "Romeo D custa",
    email: "romeodcusta@gmail.com",
    project: "marketting",
    age: 32,
    point: 9.0,
  },
  {
    id: 4,
    name: "Anald Donald",
    email: "analddonald@gmail.com",
    project: "development",
    age: 24,
    point: 9.39,
  },
  {
    id: 5,
    name: "Vicky Patel",
    email: "vickypatel@gamil.com",
    project: "marketting",
    age: 45,
    point: 7.45,
  },
  {
    id: 6,
    name: "John Doe",
    email: "johndoe50@gamil.com",
    project: "designing",
    age: 25,
    point: 8.45,
  },
  {
    id: 7,
    name: "Anald Donald",
    email: "analddonald@gmail.com",
    project: "development",
    age: 24,
    point: 9.39,
  },
  {
    id: 8,
    name: "Vicky Patel",
    email: "vickypatel@gamil.com",
    project: "marketting",
    age: 45,
    point: 7.45,
  },
  {
    id: 9,
    name: "John Doe",
    email: "johndoe50@gamil.com",
    project: "designing",
    age: 25,
    point: 8.45,
  },
  {
    id: 10,
    name: "Anald Donald",
    email: "analddonald@gmail.com",
    project: "development",
    age: 24,
    point: 9.39,
  },
  {
    id: 11,
    name: "Vicky Patel",
    email: "vickypatel@gamil.com",
    project: "marketting",
    age: 45,
    point: 7.45,
  },
  {
    id: 12,
    name: "John Doe",
    email: "johndoe50@gamil.com",
    project: "designing",
    age: 25,
    point: 8.45,
  },
];
