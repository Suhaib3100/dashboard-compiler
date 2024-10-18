import { NextResponse, NextRequest } from "next/server";
import { user } from "../data";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
export async function POST(request: NextRequest, response: any) {
  try {
    let reqBody = await request.json();

    const foundUser = user.find((u) => u.email === reqBody.email);

    if (foundUser) {
      return NextResponse.json({
        status: "fail",
        message: "User already exists",
      });
    }

    reqBody.id = user.length + 1;

    reqBody.image = avatar3;
    user.push(reqBody);
    return NextResponse.json({
      status: "success",
      message: "User created successfully",
      data: reqBody,
    });
  } catch (e) {
    console.log("An error occurred:", e);
    return NextResponse.json({
      status: "fail",
      message: "Something went wrong",
      data: e,
    });
  }
}
