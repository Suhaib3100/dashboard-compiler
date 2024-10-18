import avatar3 from "@/public/images/avatar/avatar-3.jpg";
export const user = [
  {
    id: 1,
    name: "dashtail",
    image: avatar3,
    password: "password",
    email: "dashtail@codeshaper.net",
    resetToken: null,
    resetTokenExpiry: null,
    profile: null,
  },
];

export type User = (typeof user)[number];
