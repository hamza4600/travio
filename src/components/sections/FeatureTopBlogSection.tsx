import Image from "next/image";
import Link from "next/link";

// import { urlFor } from "../../../sanity/lib/client";

import Container from "../molecules/container";

const FeatureTopBlogSection = (props: any) => {
  const {
    data: { cards },
  } = props;
  console.log("data: ", props);
  return (
    <Container
      className={"mx-auto max-w-[1312px] font-satoshi px-4 md:mt-16 mt-[90px]"}
    >
      <div>
        <div className="mb-[30px] md:mb-12 flex flex-col lg:items-center items-start">
          <p className="text-primary text-xs md:text-base  font-medium uppercase leading-tight md:leading-normal">
            EXPLORE COUNTRIES
          </p>

          <h2 className="text-[24px] flex flex-col relative justify-start md:items-center md:text-[40px] leading-[32px] md:leading-tight  -tracking-[1.2px] mt-2 md:mt-3  w-fit  font-bold">
            Travel Inspiration by Destination
            <div className="w-[85px] md:w-[117px] border-[#FFBB0B] text-yellow mt-1 md:mt-3 rounded-full md:rounded-[3px] md:border-b-[3px] border-b-[2px]" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 lg:gap-7">
          {cards?.map((card, i) => (
            <Link
              key={i}
              href={"/blogs" + card.slug?.current}
              className={
                "bg-red h-[150px] lg:h-[224px] relative rounded-2xl overflow-hidden lg:" +
                ((i + 1) % 3 === Math.floor(i / 3) ? "col-span-2" : "")
              }
            >
              <div
                className={
                  "absolute bottom-2.5 font-bold lg:text-base text-xs text-white left-3 bg-blue rounded-2xl px-4 py-1.5"
                }
              >
                {card?.name?.[props.locale]}
              </div>
              {card.meta_data?.meta_image && (
                <Image
                  src={card.meta_data?.meta_image}
                  className={"w-full h-full object-cover"}
                  height={224}
                  width={300}
                  alt={card.meta_data?.meta_title?.[props.locale]}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeatureTopBlogSection;
