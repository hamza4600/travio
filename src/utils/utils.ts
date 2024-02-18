import { vercelStegaSplit } from "@vercel/stega";

export function displayNumber(
  count: number | undefined,
  singular: string,
  plural: string = singular + "s"
): string {
  return count !== undefined
    ? `${count} ${count === 1 ? singular : plural}`
    : `No ${plural}`;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];

const shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function DateFormat(date: Date, short: boolean = false) {
  if (short)
    return (
      date.getDate() +
      " " +
      shortMonths[date.getMonth()] +
      " " +
      date.getFullYear()
    );
  return (
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
  );
}

export function clean(value?: string | null): string {
  return value ? vercelStegaSplit(value).cleaned : ``;
}
