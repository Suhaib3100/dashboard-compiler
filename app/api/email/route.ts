import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { mails } from "./data";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    return NextResponse.json({
      status: "success",
      message: "successfully",
      data: mails,
    });
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      message: "Something went wrong",
      data: error,
    });
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    let reqBody = await request.json();
    reqBody.id = mails.length + 1;
    mails.unshift(reqBody);

    return NextResponse.json({
      status: "success",
      message: "Email Send successfully",
      data: reqBody,
    });
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      message: "Something went wrong",
      data: error,
    });
  }
}
