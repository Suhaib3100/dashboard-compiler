import { NextResponse } from "next/server";
import { calendarEvents } from "../data";

export async function DELETE(request, response) {
  try {
    const { id } = response.params;
    console.log(id, "ami id");

    const index = calendarEvents.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
      // Remove the item from the array
      calendarEvents.splice(index, 1);
      return NextResponse.json({
        status: "success",
        message: "Event deleted successfully",
      });
    } else {
      return NextResponse.json({
        status: "fail",
        message: "Event not found",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      message: "Something went wrong",
      data: error,
    });
  }
}

export async function PUT(request, response) {
  try {
    const { id } = response.params;
    const updatedEventData = await request.json();

    const index = calendarEvents.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
      // Update the event data
      calendarEvents[index] = {
        ...calendarEvents[index],
        ...updatedEventData,
      };

      return NextResponse.json({
        status: "success",
        message: "Event updated successfully",
        data: calendarEvents[index],
      });
    } else {
      return NextResponse.json({
        status: "fail",
        message: "Event not found",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      message: "Something went wrong",
      data: error,
    });
  }
}
