import React, { useState } from "react";
import PortableText from "react-portable-text";

const InfoSection = ({ data, locale }: any) => {
  const [head, sethead] = useState(0);
  return (
    <div className="md:py-20 py-10 font-satoshi">
      <div className="lg:flex lg:flex-row  lg:gap-x-20 px-5 lg:px-20 justify-between">
        <div className="lg:w-1/5 hidden lg:flex w-full  flex-1 flex-col gap-y-2">
          {data?.map((item: any, index: any) => {
            return (
              <a
                key={index}
                href={"#" + item.title?.[locale]}
                onClick={() => {
                  sethead(index);
                }}
              >
                <div
                  className={
                    head == index
                      ? "bg-[#3FA9F5] cursor-pointer  text-white font-medium   border-none rounded-lg px-3 py-2"
                      : "border-[1px] cursor-pointer text-darkblue text-base border-gray border-opacity-40 rounded-lg px-3 py-2"
                  }
                >
                  {item.title?.[locale]}
                </div>
              </a>
            );
          })}
        </div>

        {/* Mocile List  */}
        {data?.map((item: any, index: any) => {
          return (
            <a
              key={index}
              href={"#" + item.title?.[locale]}
              onClick={() => {
                sethead(index);
              }}
              className={` flex flex-row lg:hidden  font-[500] justify-start items-center ${
                head == index ? "text-primary" : " text-darkblue"
              } `}
            >
              <p>{index + 1}</p>
              <div
                className={`${
                  head == index
                    ? "underline cursor-pointer  text-blue font-[500]   border-none rounded-lg px-3 py-2"
                    : " cursor-pointer text-darkblue font-[500]  border-opacity-40 rounded-lg px-3 py-2"
                }
                    'text-sm'
                    `}
              >
                {item.title?.[locale]}
              </div>
            </a>
          );
        })}
        <div className="lg:w-2/3 md:mt-20 mt-10 lg:mt-0 w-full">
          {data?.map((item: any, index: any) => {
            return (
              <div key={index} id={item.title?.[locale]} className="mb-10">
                <h2 className="md:text-2xl text-[20px] leading-[30px] font-semibold">
                  {item.title?.[locale]}
                </h2>
                <div className="md:w-[89px] border-[#FFBB0B] border-b md:border-b-[3px] w-[75px] mt-1 md:mt-2.5 my-3 rounded-full" />
                {item.content?.en && (
                  <PortableText
                    className="text-darkblue md:text-[16px] md:leading-7 text-[12px] leading-5"
                    content={item.content?.[locale]}
                    serializers={{}}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
