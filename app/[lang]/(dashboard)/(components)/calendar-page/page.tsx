"use client";

import Card from "@/components/ui/card-snippet";
import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
const CalendarPage = () => {
  const [date, setDate] = React.useState<Date>(new Date());
  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };
  return (
    <div className=" space-y-5">
      <Card title="Calendar">
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> mode</code> prop demonstrate
          single calender.{" "}
          <code className="text-primary"> selected and onSelect</code> props
          deliver the selected date and which date anyone want sto choose.
        </p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          className="rounded-md border"
        />
      </Card>
    </div>
  );
};

export default CalendarPage;
