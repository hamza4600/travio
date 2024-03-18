import Link from "next/link";

// import { urlFor } from "../../../sanity/lib/client";

const InterestSection = (props) => {
  const {
    data: { title, tagline, interests },
  } = props as any;
  return (
    <div className="my-16 flex flex-col justify-center items-center font-satoshi">
      <h2 className="text-primary text-sm lg:text-base font-medium text-center">
        {tagline?.en}
      </h2>
      <h4 className="lg:text-4xl text-2xl  mt-3 font-[700] text-darkblue text-center">
        {title?.en}
      </h4>
      <div className="w-[85px] md:w-[117px] border-[#FFBB0B] text-yellow mt-1 md:mt-3 rounded-full md:rounded-[3px] md:border-b-[3px] border-b-[2px]" />

      <div className="shadow-lg shadow-[#f5f5f5] rounded-sm max-w-6xl w-full px-2 lg:px-10 lg:pt-14 pb-10    my-10">
        {interests
          ? interests.map((item: any, index: any) => {
              if (index % 3 == 0) {
                return (
                  <div key={index} className="font-satoshi text-darkblue">
                    <div className="grid  grid-flow-row gap-3 grid-cols-3">
                      {interests[index] ? (
                        <Link
                          href={"/blogs/" + item.slug?.current}
                          key={index}
                          className={
                            (index + 1) % 3
                              ? "justify-center items-center text-center border-r-[1px] border-opacity-25 border-gray flex-col"
                              : "justify-center items-center text-center  flex-col"
                          }
                        >
                          <img
                            style={{ margin: "auto" }}
                            src={interests[index + 1]?.icon}
                            className="md:max-w-[68px] md:min-h-[68px] max-w-10 min-h-10"
                            alt=""
                          />
                          <h3 className="text-center lg:text-base text-sm my-5 font-semibold text-blue">
                            {interests[index]?.name?.[props.locale]}
                          </h3>
                        </Link>
                      ) : null}

                      {interests[index + 1] ? (
                        <Link
                          href={"/blogs/" + interests[index + 1].slug?.current}
                          key={index}
                          className={
                            (index + 1) % 3
                              ? " justify-center items-center text-center border-r-[1px] border-opacity-25 border-gray flex-col"
                              : "justify-center items-center text-center  flex-col"
                          }
                        >
                          <img
                            style={{ margin: "auto" }}
                            src={interests[index + 1]?.icon}
                            className="md:max-w-[68px] md:min-h-[68px] max-w-10 min-h-10"
                            alt=""
                          />
                          <h3 className="text-center lg:text-base text-sm my-5 font-semibold text-blue">
                            {interests[index + 1]?.name?.[props.locale]}
                          </h3>
                        </Link>
                      ) : null}

                      {interests[index + 2] ? (
                        <Link
                          href={"/blogs/" + interests[index + 2].slug?.current}
                          key={index}
                          className={
                            "justify-center items-center text-center  border-opacity- flex-col"
                          }
                        >
                          <img
                            style={{ margin: "auto" }}
                            src={interests[index + 1]?.icon}
                            className="md:max-w-[68px] md:min-h-[68px] max-w-10 min-h-10"
                            alt=""
                          />
                          <h3 className="text-center lg:text-base text-sm my-5 font-semibold text-blue">
                            {interests[index + 2]?.name?.[props.locale]}
                          </h3>
                        </Link>
                      ) : null}
                    </div>
                    <div
                      className={
                        index != (interests.length / 3) * 3 - 3
                          ? "my-5 border-opacity-25 border-gray"
                          : "hidden"
                      }
                    />
                  </div>
                );
              }
            })
          : null}
      </div>
    </div>
  );
};

export default InterestSection;
