import Credentials from "next-auth/providers/credentials";

import {User as UserType, user} from "@/app/api/user/data";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import avatar3 from "@/public/images/avatar/avatar-3.jpg";


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
        async authorize(credentials) {
             const {email, password} = credentials as {
          email: string,
          password: string,
        };
          
        const foundUser = user.find((u) => u.email === email)

        if (!foundUser) {
          return null;
        }

        const valid = password === foundUser.password  

        if (!valid) {
          
          return null;
        }

        if (foundUser) {
          return foundUser as any
          
        }
        return null;
      }
      
    }),
  ],
  secret: process.env.AUTH_SECRET,

  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
};
