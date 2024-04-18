export const priceForWeek = (startDate: Date, endDate: Date, data: any) => {
  const price = data.filter((value: any) => {
    const from = new Date(value.from);
    from.setHours(0, 0, 0, 0);

    const to = new Date(value.to);
    to.setHours(0, 0, 0, 0);

    const startD = new Date(startDate);
    startD.setHours(0, 0, 0, 0);
    const endD = new Date(endDate);
    endD.setHours(0, 0, 0, 0);

    return (
      from.getTime() === startD.getTime() && to.getTime() === endD.getTime()
    );
  });
  return price[0];
};
