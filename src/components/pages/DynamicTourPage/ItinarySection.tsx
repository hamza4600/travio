import { useEffect, useState } from "react";
import Image from "next/image";
import { Country } from "country-state-city";

import { CaretDown, Dot, Minus, Plus } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import Container from "@/components/molecules/container";
import SectionHeader from "@/components/molecules/secHeader";

export default function ItinerarySection({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) {
  console.log("ItinerarySection-> ", data);
  return (
    <Container className="mx-auto max-w-[1312px] px-4 flex flex-col lg:py-20 py-[50px] gap-10">
      <SectionHeader
        title={data?.tagline?.[locale]}
        subtitle={data?.title?.[locale]}
        centerLine
      />

      <div className="flex lggap-7 gap-[30px] max-lg:flex-col-reverse">
        {/* Travel Schedule */}
        <TravelSchedule data={data?.itinerary_day_cards} />
        {/* Enquire Tab */}

        <EnquireTab />
      </div>
    </Container>
  );
}

const TravelSchedule = ({ data }: { data?: any }) => {
  const [openStatus, setOpenStatus] = useState<boolean[]>(
    Object.assign({}, Array(data?.length ?? 0).fill(false))
  );

  useEffect(() => {
    setOpenStatus({ ...openStatus, "0": true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex flex-1 flex-col gap-5">
      <div className="flex justify-end w-full">
        <button
          className="text-[#3FA9F5] font-satoshi text-[16px] flex gap-2 font-bold lg:mr-8"
          onClick={() => {
            setOpenStatus(
              Object.assign({}, Array(data?.length ?? 0).fill(true))
            );
          }}
        >
          Expand All <div className="hidden lg:block">{<CaretDown />}</div>
        </button>
      </div>
      <div className="flex  flex-col gap-5">
        {data?.map((day: any, index: number) => (
          <Expandable
            isOpen={openStatus[index]}
            toggleOpen={() => {
              setOpenStatus({ ...openStatus, [index]: !openStatus[index] });
            }}
            key={index}
            {...day}
            data={day}
          />
        ))}
      </div>
    </div>
  );
};

const EnquireTab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nationality: "",
    phone: "+1",
    from: "",
    to: "",
    members: "1",
    details: "",
  });
  const [mobileNumber, setMobileNumber] = useState({
    mobileCode: "+1",
    mobileNumber: "",
  });
  const setValue = (value: string, key: string) => {
    setFormData({ ...formData, [key]: value });
  };
  return (
    <div className="w-[282px] max-lg:hidden max-lg:min-w-full font-satoshi h-fit rounded-2xl border text-white overflow-hidden bg-primary lg:mt-12">
      <div className="py-2 px-5 bg-[#1A4767]">
        <div className="flex justify-between">
          <div className="">
            <p className="font-bold text-xl">Enquire</p>
            <hr className="lg:w-1/2 w-1/3 my-2 text-yellow border-b-[#FFBB0B]  rounded-full border-2" />
          </div>
          <div className="relative w-7 h-7">
            <Image src={"/contact_mail_icon.svg"} alt="" fill />
          </div>
        </div>
        <div className="flex gap-1">
          <Image
            src="/whatsapp_logo.svg"
            height={12}
            width={12}
            alt="Whatsapp logo"
          />
          <p className="font-bold text-[10px]">+1 0000 000 000</p>
        </div>
      </div>
      <div className="p-[18px] flex flex-col gap-[18px]">
        <div className="flex  font-medium text-base text-black flex-col gap-2">
          <label htmlFor="name">Name*</label>
          <input
            id="name"
            type="text"
            className="border border-darkblue/10 text-black rounded p-1 focus:outline-secondary"
            value={formData["name"]}
            onChange={(e) => {
              setValue(e.target.value, "name");
            }}
          />
        </div>
        <div className="flex  font-medium text-base text-black flex-col gap-2 ">
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            type="text"
            className="border border-darkblue/10 text-black rounded p-1 focus:outline-secondary"
            value={formData["email"]}
            onChange={(e) => {
              setValue(e.target.value, "email");
            }}
          />
        </div>
        <div className="flex font-medium text-base text-black flex-col gap-2">
          <label htmlFor="nationality">Nationality*</label>
          <select
            id="nationality"
            className="border bg-white border-darkblue/10 text-black rounded p-1 py-2 focus:outline-secondary"
            value={formData["nationality"]}
            // placeholder="Select"
            onChange={(e) => {
              setValue(e.target.value, "nationality");
            }}
          >
            <option value="" disabled>
              Select Nationality
            </option>
            {Country.getAllCountries().map((item: any, index: any) => {
              return (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              );
            })}
            <option value="Nepal">Nepal</option>
            <option value="India">India</option>
          </select>
        </div>
        <div className="flex  font-medium text-base text-black flex-col gap-2">
          <label htmlFor="mobileNumber">Mobile</label>
          <div className="border bg-white text-base border-darkblue/10 text-black rounded p-1 grid grid-cols-[1fr_7fr] gap-1 divide-x-2 divide-darkblue/10 py-2">
            <input
              className="min-w-0 w-full flex focus:outline-secondary items-center justify-center h-full overflow-hidden focus:outline-none"
              id="mobileCode"
              value={mobileNumber["mobileCode"]}
              onChange={(e) => {
                setMobileNumber({
                  ...mobileNumber,
                  mobileCode: e.target.value || "+",
                });
                setValue(
                  mobileNumber["mobileCode"] + mobileNumber["mobileNumber"],
                  "phone"
                );
                // console.log(mobileNumber)
              }}
            />
            <input
              className="h-full min-w-0 w-full focus:outline-secondary overflow-hidden focus:outline-none px-2"
              id="mobileNumber"
              value={mobileNumber["mobileNumber"]}
              placeholder="Mobile Number"
              onChange={(e) => {
                setMobileNumber({
                  ...mobileNumber,
                  mobileNumber: e.target.value,
                });
                setValue(
                  mobileNumber["mobileCode"] + mobileNumber["mobileNumber"],
                  "phone"
                );
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          <div className="flex min-w-0 w-full font-medium text-base text-black flex-col gap-2">
            <label htmlFor="from">From</label>
            <input
              id="from"
              type="date"
              className="border border-darkblue/10 focus:outline-secondary text-black rounded p-1"
              value={formData["from"]}
              onChange={(e) => {
                setValue(e.target.value, "from");
              }}
            />
          </div>
          <div className="flex min-w-0 w-full font-medium text-base text-black flex-col gap-2">
            <label htmlFor="to">To</label>
            <input
              id="to"
              type="date"
              className="border border-darkblue/10 text-black rounded p-1 focus:outline-secondary"
              value={formData["to"]}
              onChange={(e) => {
                setValue(e.target.value, "to");
              }}
            />
          </div>
        </div>
        <div className="flex font-medium text-base text-black flex-col gap-2">
          <p>Member&apos;s</p>
          <div className="border border-darkblue/10 flex gap-2 bg-white p-2 justify-between">
            <div className="font-normal text-sm">Adults (+ 12 year)</div>
            <div className="flex">
              <div
                className="w-[22px] h-[22px] bg-yellow flex items-center justify-center"
                onClick={() => {
                  setValue(
                    Math.max(parseInt(formData["members"]) - 1, 1).toString(),
                    "members"
                  );
                }}
              >
                {
                  <Minus
                    className="bg-[#FFBB0B]  w-[22px] h-[22px]"
                    color="white"
                    width={"8px"}
                  />
                }
              </div>
              <div className="w-[22px] h-[22px] bg-darkblue/10 text-black flex items-center justify-center select-none">
                {formData.members}
              </div>

              <div
                className="w-[22px] h-[22px] bg-yellow flex items-center justify-center"
                onClick={() => {
                  setValue(
                    Math.min(parseInt(formData["members"]) + 1, 30).toString(),
                    "members"
                  );
                }}
              >
                {
                  <Plus
                    className="bg-[#FFBB0B]  w-[22px] h-[22px]"
                    color="white"
                    width={"8px"}
                  />
                }
              </div>
            </div>
          </div>
        </div>
        <div className="flex  font-medium text-base text-black flex-col gap-2">
          <label htmlFor="details">More Details</label>
          <textarea
            id="details"
            rows={3}
            className="border border-darkblue/10 text-black focus:outline-secondary rounded p-1"
            value={formData["details"]}
            onChange={(e) => {
              setValue(e.target.value, "details");
            }}
          />
        </div>
        <Button
          //   onClick={() => {
          //     fetch("/api/email", {
          //       method: "POST",
          //       body: JSON.stringify({
          //         subject: "New Enquiry Request",
          //         text: `You received a new "Enquiry" request by ${formData?.name}! Following are the details:

          //             Duration: From - ${formData.from}, To - ${formData.to}
          //             Email: ${formData?.email}
          //             Nationality: ${formData?.nationality}
          //             Adults: ${formData?.members}
          //             Phone: ${formData?.phone}
          //             More info : ${formData?.details}
          //           `,
          //       }),
          //     }).then(() => {
          //       alert(
          //         `Request successfully submitted. You shall hear from us soon!`
          //       );
          //     });
          //   }}
          variant="golden"
          className="md:h-12 h-10 text-[14px] leading-5"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

const Expandable = ({
  data,
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean;
  toggleOpen: any;
  data: any;
}) => {
  return (
    <div>
      <div
        className={`flex flex-nowrap transition-all justify-between ${
          isOpen
            ? "bg-[#3FA9F5] text-white"
            : "bg-darkblue/[0.02] text-dimSecondary"
        }  items-center px-7 py-4 ${
          isOpen ? "rounded-t-2xl  " : "rounded-2xl"
        }`}
        onClick={() => {
          toggleOpen();
        }}
      >
        <p className="w-5 font-bold lg:text-[20px] lg:leading-8 flex-1 font-satoshi">
          {data.title?.en}
        </p>
        <CaretDown
          width={"24px"}
          height={"24px"}
          className={`${isOpen && "rotate-180"}`}
        />
      </div>
      <div
        className={`flex flex-col gap-6 transition-all  rounded-b-2xl ${
          !isOpen ? "overflow-hidden h-0" : "p-5"
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="relative w-full h-[200px] overflow-hidden max-md:w-[295px] max-md:h-[160px] md:max-w-[914px] md:min-h-[382px] rounded-2xl ">
            <Image
              alt=""
              src={data?.image}
              fill
              quality={100}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="flex-1 text-darkblue text-[14px] leading-6 md:text-base font-satoshi">
            {data.description?.en}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {data.itinerary_details_lists?.map((list, index) => (
            <ExpandableList
              key={index}
              title={list.title?.en ?? ""}
              icon={list.icon}
              itinerary_details_list_items={list?.itinerary_details_list_items}
            />
          ))}
          <ExpandableList
            key={data.itinerary_details_lists?.length}
            title="Special Information"
            icon={data.special_information?.icon}
            content={data.special_information?.description}
          />
        </div>
      </div>
    </div>
  );
};
const ExpandableList = ({
  title,
  icon,
  itinerary_details_list_items,
  content,
}: {
  title: string;
  icon: string;
  itinerary_details_list_items?: (any | undefined)[] | undefined;
  content?: any;
}) => {
  return (
    <div className="font-satoshi">
      <div className="flex gap-2">
        <div className="relative w-7 h-7">
          <img alt="" src={icon} className="object-center" />
        </div>
        <div className="flex flex-col">
          <p className="flex-1 md:text-xl text-base font-medium text-darkblue tracking-tight font-satoshi">
            {title}
          </p>
          <hr className="w-20 my-2 text-yellow  border-b-[#FFBB0B]  rounded-full border-b-[3px]" />
        </div>
      </div>
      <div className="flex flex-col pl-7 gap-2">
        {itinerary_details_list_items?.map((item, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-nowrap items-center text-base font-normal"
            >
              {<Dot size={"30"} />} {item?.en}
            </div>
          );
        })}
        {content && (
          <p className="md:text-base text-[14px] leading-6 font-normal text-darkblue font-satoshi">
            {content}
          </p>
        )}
      </div>
    </div>
  );
};
