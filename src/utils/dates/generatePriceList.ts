import { getFirstDayOfMonth } from "../utils";

function getDay(day: any): 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined {
  switch (day) {
    case "mon":
      return 1;
    case "tue":
      return 2;
    case "wed":
      return 3;
    case "thu":
      return 4;
    case "fri":
      return 5;
    case "sat":
      return 6;
    case "sun":
      return 7;
    default:
      return undefined; // handle the case where 'day' is undefined or not one of the expected values
  }
}

export function generatePriceList(
  data: any,
  n: number = 5,
  startMonth: number = new Date().getMonth()
) {
  // The day of the week on which the tour starts
  const startDay = Array.isArray(data.weekly_schedule?.start_day)
    ? data.weekly_schedule?.start_day
    : [data.weekly_schedule?.start_day ?? "mon", "wed"];
  // The duration of the tour in days
  const duration = data.weekly_schedule?.duration ?? 3;
  // The default price of the tour
  const price = (data as any)?.price;

  // Prices to override the default price
  const priceOverrides = (data as any).price_overrides ?? [];
  // Generate the next 5 weeks for the tour on the basis of the start day and duration
  const next5WeekPrices: {
    from: Date;
    to: Date;
    currentPrice?: any;
    actualPrice?: any;
  }[] = [];

  const fixedDays = [
    {
      from: new Date("2024-04-22"),
      to: new Date("2024-04-29"),
      initial_price: {
        _type: "locale_number",
        en: "8000",
        es: "8000",
        por: "8000",
      },
      discounted_price: {
        por: "6000",
        _type: "locale_number",
        en: "6000",
        es: "6000",
      },
    }, // Example of a fixed day (Monday of the first week)
    // Add more fixed days as needed
    {
      from: new Date("2024-04-10"),
      to: new Date("2024-04-15"),
      initial_price: {
        _type: "locale_number",
        en: "9000",
        es: "9000",
        por: "9000",
      },
      discounted_price: {
        por: "7000",
        _type: "locale_number",
        en: "7000",
        es: "7000",
      },
    },
  ];

  for (let i = 0; i < n; i++) {
    for (const day of startDay) {
      const startDate = getFirstDayOfMonth(
        !Number.isNaN(startMonth) ? startMonth : new Date().getMonth()
      );
      startDate.setHours(0, 0, 0, 0);

      startDate.setDate(
        startDate.getDate() + (i + 1) * 7 + getDay(day)! - startDate.getDay()
      );
      const endDate = new Date(startDate);
      endDate.setHours(0, 0, 0, 0);

      endDate.setDate(endDate.getDate() + duration);

      // Check if the price is overridden for this week
      const res = priceOverrides.filter((override: any) => {
        const overrideStartDate = new Date(override.timeline?.start_date ?? "");
        const overrideEndDate = new Date(override.timeline?.end_date ?? "");

        overrideStartDate.setHours(0, 0, 0, 0);
        overrideEndDate.setHours(0, 0, 0, 0);
        return (
          startDate.getTime() >= overrideStartDate.getTime() &&
          endDate.getTime() <= overrideEndDate.getTime()
        );
      });
      console.log("Price:", price);

      next5WeekPrices.push({
        from: startDate,
        to: endDate,
        currentPrice:
          res.length > 0
            ? res[0].price?.discounted_price
            : price?.discounted_price,
        actualPrice:
          res.length > 0 ? res[0].price?.initial_price : price?.initial_price,
      });
    }
  }
  // remove the dates that are colliding with the fixed days (not the days that are fixed)
  let next5WeekPricess = next5WeekPrices.filter((day) => {
    day.from.setHours(0, 0, 0, 0);
    day.to.setHours(0, 0, 0, 0);

    for (const fixedDay of fixedDays) {
      fixedDay.from.setHours(0, 0, 0, 0);
      fixedDay.to.setHours(0, 0, 0, 0);
      if (
        // falls within the fixed day
        (day.from.getTime() >= fixedDay.from.getTime() &&
          day.from.getTime() <= fixedDay.to.getTime()) ||
        (day.to.getTime() >= fixedDay.from.getTime() &&
          day.to.getTime() <= fixedDay.to.getTime())
      ) {
        return false;
      }
    }
    return true;
  });

  // add the fixed days to the list
  next5WeekPricess = next5WeekPricess.concat(
    fixedDays.map((day) => {
      day.from.setHours(0, 0, 0, 0);
      day.to.setHours(0, 0, 0, 0);
      return {
        from: day.from,
        to: day.to,
        currentPrice: day.discounted_price,
        actualPrice: day.initial_price,
      };
    })
  );

  // sort the list by date

  next5WeekPricess.sort((a, b) => {
    return a.from.getTime() - b.from.getTime();
  });
  console.log("PriceList: ", next5WeekPricess);

  return next5WeekPricess;
}
