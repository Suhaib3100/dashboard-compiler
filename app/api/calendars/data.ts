import { faker } from "@faker-js/faker";

const date = new Date();
const prevDay = new Date().getDate() - 1;
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

// prettier-ignore
const nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1)
// prettier-ignore
const prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1)
export const calendarEvents = [
  {
    id: faker.string.uuid() ,
    title: "All Day Event",
    start: date,
    end: nextDay,
    allDay: false,
    //className: "warning",
    extendedProps: {
      calendar: "business",
    },
  },
  {
    id: faker.string.uuid(),
    title: "Meeting With Client",
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    //className: "success",
    extendedProps: {
      calendar: "personal",
    },
  },
  {
    id: faker.string.uuid(),
    title: "Lunch",
    allDay: true,
    start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
    // className: "info",
    extendedProps: {
      calendar: "family",
    },
  },
  {
    id: faker.string.uuid(),
    title: "Birthday Party",
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    //className: "primary",
    extendedProps: {
      calendar: "meeting",
    },
  },
  {
    id: faker.string.uuid(),
    title: "Birthday Party",
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    // className: "danger",
    extendedProps: {
      calendar: "holiday",
    },
  },
  {
    id: faker.string.uuid(),
    title: "Monthly Meeting",
    start: nextMonth,
    end: nextMonth,
    allDay: true,
    //className: "primary",
    extendedProps: {
      calendar: "business",
    },
  },
];

export const calendarCategories  = [
  {
    label: "Business",
    value: "business",
    activeClass: "ring-primary-500 bg-primary-500",
    className: " group-hover:border-blue-500",
  },
  {
    label: "Personal",
    value: "personal",

    activeClass: "ring-success-500 bg-success-500",
    className: " group-hover:border-green-500",
  },
  {
    label: "Holiday",
    value: "holiday",
    activeClass: "ring-danger-500 bg-danger-500",
    className: " group-hover:border-red-500",
  },
  {
    label: "Family",
    value: "family",
    activeClass: "ring-info-500 bg-info-500",
    className: " group-hover:border-cyan-500",
  },
  {
    label: "Meeting",
    value: "meeting",
    activeClass: "ring-warning-500 bg-warning-500",
    className: " group-hover:border-yellow-500",
  },
  {
    label: "Etc",
    value: "etc",
    activeClass: "ring-info-500 bg-info-500",
    className: " group-hover:border-cyan-500",
  },
];

export const categories = [
  {
    label: "Business",
    value: "business",
    className: "data-[state=checked]:bg-primary border-primary",
  },
  {
    label: "Personal",
    value: "personal",

    className: "data-[state=checked]:bg-success border-success",
  },
  {
    label: "Holiday",
    value: "holiday",
    className: "data-[state=checked]:bg-destructive  border-destructive",
  },
  {
    label: "Family",
    value: "family",
    className: "data-[state=checked]:bg-info border-info",
  },
  {
    label: "Meeting",
    value: "meeting",
    className: "data-[state=checked]:bg-warning border-warning",
  },
  {
    label: "Etc",
    value: "etc",
    className: "data-[state=checked]:bg-info border-info",
  },
];

export type CalendarEvent = (typeof  calendarEvents)[number]
export type CalendarCategory = (typeof  calendarCategories)[number]
export type Category = (typeof  categories)[number]