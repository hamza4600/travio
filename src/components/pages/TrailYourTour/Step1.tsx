import OptionSelectButton from "@/components/atom/OptionSelectButton";
import { approxTn, exactTripTn, selectMonthTn, diffDatesTn } from "@/lib/utils";
import React, { useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const CalenderWrapper = styled.div`
  .react-calendar,
  .react-calendar--selectRange {
    border: none;
    max-width: 302px;
    padding: 18px;
    /* font-family: ${(props) => props.theme.fontSatoshi}; */
  }

  .react-calendar__month-view__weekdays__weekday,
  .react-calendar__month-view__weekdays__weekday--weekend {
    abbr {
      text-decoration: none;
    }
  }

  button {
    &:hover {
      background: #ffbb0b;
      border-radius: 9999px;
    }

    &:active {
      background-color: #ffbb0b;
    }
  }

  abbr {
    /* font-family: ${({ theme }) => theme.fontSatoshi}; */
    font-family: var(--font-satoshi);
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: medium;
    font-size: 10px;
    line-height: 13px;
    color: #726e83;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontSatoshi};
  }

  .react-calendar__navigation__label__labelText,
  .react-calendar__navigation__label__labelText--from {
    font-size: 14px;
    line-height: 17px;
    font-weight: normal;
    /* font-family: ${(props) => props.theme.fontSatoshi}; */
    font-family: var(--font-satoshi);
  }

  .react-calendar__tile--active:enabled:focus {
    background-color: #ffdd85;
    color: black;
    border-radius: 9999px;
  }

  .react-calendar__tile--now {
    background-color: white;
    abbr {
      color: #d10002;
    }
  }

  .react-calendar__tile {
    color: #140d31;
    font-weight: 500;
  }

  .react-calendar__tile--active {
    background-color: white;
    color: #ffbb0b;

    .react-calendar {
      border: none;
      max-width: 302px;
      padding: 18px;
    }
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: white;
    color: #ffbb0b;
  }

  & .react-calendar__tile--rangeStart:not(.react-calendar__tile--rangeEnd),
  & .react-calendar__tile--rangeEnd:not(.react-calendar__tile--rangeStart) {
    background-color: #ffdd85;

    color: black;
    border-radius: 9999px;
  }
`;

const durationTn = {
  less: {
    en: "Less than 1 Week",
    es: "Menos de 1 seman",
    por: "Menos de 1 semana"
  },

  week: {
    en: "Week",
    es: "Semana",
    por: "Semana"
  },

  months: {
    en: "More than 1 Months",
    es: "Más de 1 mes",
    por: "Mais de 1 mês"
  }
}

const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Step1({
  onChange,
  locale,
}: {
  onChange: (date: string) => void;
  locale: string;
}) {
  const [mode, setMode] = React.useState("exactDates");
  const [duration, setDuration] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [date, setDate] = React.useState<Date[]>();

  const Durations = [
    { name: durationTn?.less?.[locale], gridSpan: "col-span-2" },
    { name: `1 ${durationTn?.week?.[locale]}`, gridSpan: "col-span-1" },
    { name: `2 ${durationTn?.week?.[locale]}`, gridSpan: "col-span-1" },
    { name: `3 ${durationTn?.week?.[locale]}`, gridSpan: "col-span-1" },
    { name: `4 ${durationTn?.week?.[locale]}`, gridSpan: "col-span-1" },
    { name: durationTn.months?.[locale], gridSpan: "col-span-2" },
  ];
  

  useEffect(() => {
    if (date)
      onChange(
        `From - ${date[0]?.toDateString()} To - ${date[1]?.toDateString()}`
      );
    else if (!month || !duration) onChange("");
    else onChange(`Month - ${month}, Duration - ${duration}`);
  }, [duration, month, date, onChange]);

  return (
    <div className={`flex flex-col gap-10 lg:px-9`}>
      <div className="flex max-lg:flex-col justify-center items-start gap-4 px-12 lg:gap-12">
        <div
          className="md:text-lg font-medium text-darkblue flex gap-[6px] items-center flex-nowrap whitespace-nowrap font-satoshi"
          onClick={() => {
            setMode("exactDates");
          }}
        >
          <OptionSelectButton value={mode == "exactDates"} />{" "}
          {exactTripTn?.[locale]}
        </div>
        <div
          className="md:text-lg font-medium text-darkblue flex gap-[6px] items-center flex-nowrap whitespace-nowrap font-satoshi"
          onClick={() => {
            setMode("approxDates");
          }}
        >
          <OptionSelectButton value={mode == "approxDates"} />{" "}
          {diffDatesTn?.[locale]}
        </div>
      </div>
      <CalenderWrapper>
        {mode == "exactDates" && (
          <div className={"flex justify-center md:px-1 px-4"}>
            <Calendar
              onChange={(value: any) => setDate(value)}
              selectRange={true}
              className={
                "font-satoshi bg-white shadow-md rounded-lg p-4 border-none"
              }
            />
          </div>
        )}
        {mode == "approxDates" && (
          <div className="flex justify-center items-center flex-col md:flex-row gap-4 md:px-1 px-4 md:gap-12">
            <div className="flex flex-col gap-3 w-full ml-auto text-base text-gray ">
              <p className="font-normal font-satoshi max-md:hidden text-base">
                (1) {selectMonthTn?.[locale]}
              </p>
              <div className="p-4 max-w-[300px] max-lg:min-w-[300px] max-md:max-w-full min-h-[300px] grid grid-cols-3 gap-x-1 bg-white rounded shadow-md">
                {Months.map((item: any, index) => (
                  <>
                    {index != 0 && index % 3 == 0 && (
                      <>
                        <div className="w-[48px] my-[18px] mx-auto text-darkblue/10" />
                        <div className="w-[48px] my-[18px] mx-auto text-darkblue/10" />
                        <div className="w-[48px] my-[18px] mx-auto text-darkblue/10" />
                      </>
                    )}
                    <div
                      key={index}
                      onClick={() => {
                        setMonth(item);
                      }}
                      className={`text-center font-satoshi cursor-pointer py-[7px] rounded text-sm ${
                        month == item
                          ? "font-bold bg-[#3FA9F5] text-white"
                          : "font-normal text-darkblue"
                      }`}
                    >
                      {item}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 text-base text-gray ">
              <p className="font-satoshi max-md:hidden">
                (2) {approxTn?.[locale]}
              </p>
              <div className="p-5 grid grid-cols-2 w-full bg-white gap-4 rounded shadow-md  min-h-[300px]">
                {Durations.map((item: any) => (
                  <div
                    key={item?.name}
                    onClick={() => {
                      setDuration(item?.name);
                    }}
                    className={`rounded font-satoshi border border-darkblue/10 py-[14px] text-center text-sm cursor-pointer ${
                      duration == item?.name
                        ? "bg-[#3FA9F5] text-white"
                        : "text-darkblue"
                    } ${item.gridSpan}`}
                  >
                    {item?.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CalenderWrapper>
    </div>
  );
}
