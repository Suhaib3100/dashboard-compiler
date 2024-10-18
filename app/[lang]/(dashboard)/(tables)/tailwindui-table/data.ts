export interface DataRows {
  id: number;
  name?: string;
  title?: string;
  email?: string;
  role?: string;
  avatar?: string;
  details: {
    city?: string;
    experience?: string;
    post?: string;
  };
}


export const users = [
  {
    id: 1,
    name: "Mark Dsuza",
    title: "UX/UI Designer",
    email: "markdsuza@gmail.com",
    role: "admin",
    avatar: "/images/avatar/avatar-9.jpg",
    details: {
      city: "dhaka",
      experience: "2 years",
      post: "software engineer",
    },
  },
  {
    id: 2,
    name: "Josef Jennyfer",
    title: "Laravel Developer",
    email: "josefjennyfer@gmail.com",
    role: "member",
    avatar: "/images/avatar/avatar-10.jpg",
    details: {
      city: "Rajshahi",
      experience: "2 years",
      post: "Laravel Developer",
    },
  },
  {
    id: 3,
    name: "Romeo D custa",
    title: "Front-end Developer",
    email: "romeodcusta@gmail.com",
    role: "editor",
    avatar: "/images/avatar/avatar-1.jpg",
    details: {
      city: "Rajshahi",
      experience: "2 years",
      post: "Full Stack Developer",
    },
  },
  {
    id: 4,
    name: "Anald Donald",
    title: "Back-end Developer",
    email: "janalddonald@gmail.com",
    role: "editor",
    avatar: "/images/avatar/avatar-12.jpg",
    details: {
      city: "Barisal",
      experience: "2 years",
      post: "Mern Stack Developer",
    },
  },
  {
    id: 5,
    name: "Vicky Patel",
    title: "WordPress Developer",
    email: "vickypatel@gmail.com",
    role: "member",
    avatar: "/images/avatar/avatar-13.jpg",
    details: {
      city: "Dhaka",
      experience: "2 years",
      post: "Software Engineer",
    },
  },
];

// import { faker } from "@faker-js/faker";

// export const users1 = [
//   {
//     id: 1,
//     user: {
//       name: "Lindsay Walton",
//       avatar: faker.image.avatarLegacy(),
//       title: "Front-end Developer",
//       email: "lindsay.walton@example.com",
//     },
//     title: "Front-end Developer",
//     email: "lindsay.walton@example.com",
//     role: "member",
//     action: null,
//     details: {
//       city: faker.location.cardinalDirection(),
//       experience: " 2 Years",
//       post: faker.company.buzzAdjective(),
//     },
//   },
//   {
//     id: 2,
//     user: {
//       name: "Courtney Henry	",
//       avatar: faker.image.avatarLegacy(),
//       title: "Designer",
//       email: "courtney.henry@example.com",
//     },
//     title: "Designer",
//     email: "courtney.henry@example.com",
//     role: "admin",
//     action: null,
//     details: {
//       city: faker.location.cardinalDirection(),
//       experience: " 2 Years",
//       post: faker.company.buzzAdjective(),
//     },
//   },
//   {
//     id: 3,
//     user: {
//       name: "Tom Cook	",
//       avatar: faker.image.avatarLegacy(),
//       title: "Director of Product	",
//       email: "tom.cook@example.com	",
//     },
//     title: "Director of Product",
//     email: "tom.cook@example.com	",
//     role: "member",
//     action: null,
//     details: {
//       city: faker.location.cardinalDirection(),
//       experience: " 2 Years",
//       post: faker.company.buzzAdjective(),
//     },
//   },
//   {
//     id: 4,
//     user: {
//       name: "Whitney Francis",
//       avatar: faker.image.avatarLegacy(),
//       title: "Copywriter	",
//       email: "whitney.francis@example.com	",
//     },
//     title: "Copywriter",
//     email: "whitney.francis@example.com	",
//     role: "admin",
//     action: null,
//     details: {
//       city: faker.location.cardinalDirection(),
//       experience: " 2 Years",
//       post: faker.company.buzzAdjective(),
//     },
//   },
//   {
//     id: 5,
//     user: {
//       name: "Leonard Krasner",
//       avatar: faker.image.avatarLegacy(),
//       title: "Senior Designer		",
//       email: "leonard.krasner@example.com	",
//     },
//     title: "Senior Designer	",
//     email: "leonard.krasner@example.com	",
//     role: "owner",
//     action: null,
//     details: {
//       city: faker.location.cardinalDirection(),
//       experience: " 2 Years",
//       post: faker.company.buzzAdjective(),
//     },
//   },
//   {
//     id: 6,
//     user: {
//       name: "Floyd Miles	",
//       avatar: faker.image.avatarLegacy(),
//       title: "Principal Designer		",
//       email: "floyd.miles@example.com		",
//     },
//     title: "Principal Designer	",
//     email: "floyd.miles@example.com	",
//     role: "member",
//     action: null,
//     details: {
//       city: faker.location.cardinalDirection(),
//       experience: " 2 Years",
//       post: faker.company.buzzAdjective(),
//     },
//   },
// ];
