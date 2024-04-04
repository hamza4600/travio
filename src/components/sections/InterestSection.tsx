import Link from "next/link";
import { urlFor } from "../../../sanity/lib/client";

const InterestSection = (props) => {
  const {
    data: { title, tagline, interests },
    locale,
  } = props as any;

  console.log("interestSection: ", props);

  return (
    <div className="md:my-[68px] my-[50px] flex flex-col justify-center items-center font-satoshi">
      <h2 className="text-primary text-sm lg:text-base font-medium text-center">
        {tagline?.[locale]}
      </h2>
      <h4 className="lg:text-4xl text-2xl mt-3 font-[700] text-darkblue text-center">
        {title?.[locale]}
      </h4>
      <div className="w-[85px] md:w-[117px] border-[#FFBB0B] mt-1 md:mt-3 rounded-full md:rounded-[3px] md:border-b-[3px] border-b-[2px]" />

      <div
        style={{
          boxShadow: "0px 4px 20px 0px #0000000F",
        }}
        className="grid grid-flow-row gap-3 md:grid-cols-3 grid-cols-2 rounded-[16px] max-w-6xl w-full px-2 lg:px-10 lg:pt-12 pb-12 mt-10"
      >
        {interests &&
          interests.map((item: any, index: any) => (
            <div key={index} className="font-satoshi text-darkblue">
              <div
                className={
                  index % 3 === 2
                    ? ""
                    : "md:border-r md:border-opacity-25 md:border-gray"
                }
              >
                <Link
                  href={"/blogs/" + item.slug?.current}
                  className="justify-center items-center text-center flex flex-col"
                >
                  {/* <div className=""> */}
                  <img
                    // style={{ margin: "auto" }}
                    src={urlFor(item.icon)}
                    className="w-full md:max-w-[104px] md:min-h-[104px] max-w-10 min-h-10 rounded-[8px] bg-[#F2FAFF] padding-[18px]"
                    alt=""
                  />
                  {/* </div> */}
                  <h3 className="text-center text-base max-md:text-[14px] max-md:leading-5 my-5 font-medium text-primary">
                    {item.name?.[props.locale]}
                  </h3>
                </Link>
              </div>
              {index <= 2 && (
                <div className="md:block hidden mt-12 border-opacity-25 border-b border-[rgba(20, 13, 49, 0.1)]" />
              )}
              {(index + 1) % 3 === 0 && (
                <div
                  className={
                    index !== interests.length - 1
                      ? "mt-12 border-opacity-25 border-gray"
                      : "hidden"
                  }
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default InterestSection;
