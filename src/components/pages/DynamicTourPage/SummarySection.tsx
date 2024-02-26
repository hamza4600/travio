import SectionHeader from "@/components/molecules/secHeader";
import { Text } from "@/components/ui/text";
import React from "react";
import Image from "next/image";

const SummarySection = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="max-lg:hidden">
        <SectionHeader title="overview" subtitle="Brief Summary" centerLine />
      </div>

      <div className="bg-[#3FA9F5] lg:hidden">
        <div className="flex justify-between min-h-[70px] px-[32px] py-3">
          <div className="flex flex-col items-center gap-1">
            <Image src={"/demo/msg.svg"} alt="svg" width={20} height={20} />
            <Text variant={"tertiary"} className="text-[14px] leading-6">
              Inquire Now
            </Text>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Image src={"/demo/dst.svg"} alt="svg" width={20} height={20} />
            <Text variant={"tertiary"} className="text-[14px] leading-6">
              Tailor Your Tour
            </Text>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Image src={"/demo/wtsp.svg"} alt="svg" width={20} height={20} />
            <Text variant={"tertiary"} className="text-[14px] leading-6">
              Contact Us
            </Text>
          </div>
        </div>
      </div>

      <div className="flex max-lg:px-5 flex-col gap-[30px]">
        <div className="flex max-lg:flex-col max-md:gap-5 items-center justify-between gap-[30px]">
          <div className="">
            <Text
              variant={"darkblue"}
              className="md:leading-[34px] text-[20px] leading-[30px] font-bold md:text-[24px]"
            >
              Cairo City Of Egypt
            </Text>
            <hr className="border-b-[#FFBB0B] mt-[10px] border-b-[3px] w-[74px]" />
            <div className="flex flex-col mt-[28px] gap-[18px] font-normal text-[14px] max-md:leading-5 md:text-base">
              <Text variant={"darkblue"}>
                The main city of Egypt is Cairo. As the capital and largest city
                of the country, Cairo is a bustling metropolis that serves as
                the cultural, political, and economic hub of Egypt. It is
                located along the banks of the Nile River and is home to iconic
                landmarks such as the Great Pyramids of Giza and the Sphinx.
                Cairo boasts a vibrant atmosphere with its bustling markets,
                fascinating museums, and architectural wonders like the Citadel
                of Saladin and the Egyptian Museum. It is a city where ancient
                history seamlessly blends with modern urban life, offering a
                unique and captivating experience for visitors.
              </Text>

              <Text variant={"darkblue"} className="max-lg:hidden ">
                {" "}
                The main city of Egypt is Cairo. As the capital and largest city
                of the country, Cairo is a bustling metropolis that serves
              </Text>
            </div>
          </div>
          <img
            src="/demo/tourimage.png"
            alt="asd"
            className="max-w-[400px] px-5 min-h-[310px] max-lg:min-w-full"
          />
          <Text
            variant={"darkblue"}
            className="lg:hidden font-normal text-[14px] max-md:leading-5 md:text-base"
          >
            {" "}
            The main city of Egypt is Cairo. As the capital and largest city of
            the country, Cairo is a bustling metropolis that serves
          </Text>
        </div>

        <div className="flex flex-col gap-[28px]">
          <div>
            <Text
              variant={"darkblue"}
              className="md:leading-[34px] font-bold md:text-[24px]"
            >
              Why youll love this trip
            </Text>
            <hr className="border-b-[#FFBB0B] mt-[10px] border-b-[3px] w-[74px]" />
          </div>

          <ol>
            <li>
              <Text
                variant={"darkblue"}
                className="font-normal text-[14px] max-md:leading-5 md:text-base"
              >
                Brush shoulders with the locals and meet some of the many store
                owners as you stroll through the famous bazaars of Aswan, Luxor
                and Khan al-Khalili in Egypts capital, Cairo.
              </Text>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
