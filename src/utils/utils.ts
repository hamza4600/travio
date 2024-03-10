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

export function getFirstDayOfMonth(month: number) {
  const firstDay = new Date();
  firstDay.setMonth(month);
  firstDay.setDate(1);
  return firstDay;
}

// export function getSanitySlugFromSlugs(
//   slugs: string | string[] | undefined
// ): string {
//   if (slugs === undefined) {
//     return "/";
//   }
//   const sanitizedSlugs = Array.isArray(slugs) ? slugs : [slugs];
//   return "/" + sanitizedSlugs.map(sanitizeSlug).join("/");
// }
// function sanitizeSlug(value: string, index: number, array: string[]): unknown {
//   throw new Error("Function not implemented.");
// }
