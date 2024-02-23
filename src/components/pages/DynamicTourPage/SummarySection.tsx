import SectionHeader from "@/components/molecules/secHeader";
import { Text } from "@/components/ui/text";
import React from "react";

const SummarySection = () => {
  return (
    <div className="flex flex-col gap-12">
      <SectionHeader title="overview" subtitle="Brief Summary" centerLine />

      <div className="flex flex-col gap-[30px]">
        <div className="flex max-md:flex-col max-md:gap-5 items-center justify-between gap-[30px]">
          <div className="">
            <Text
              variant={"darkblue"}
              className="md:leading-[34px] font-bold md:text-[24px]"
            >
              Cairo City Of Egypt
            </Text>
            <hr className="border-b-[#FFBB0B] mt-[10px] border-b-[3px] w-[74px]" />
            <div className="flex flex-col gap-[18px]">
              <Text variant={"darkblue"} className="font-normal md:text-base">
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

              <Text variant={"darkblue"} className="font-normal md:text-base">
                {" "}
                The main city of Egypt is Cairo. As the capital and largest city
                of the country, Cairo is a bustling metropolis that serves
              </Text>
            </div>
          </div>
          <img
            src="/demo/tourimage.png"
            alt="asd"
            className="max-w-[400px] min-h-[310px]"
          />
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
              <Text variant={"darkblue"} className="font-normal md:text-base">
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
