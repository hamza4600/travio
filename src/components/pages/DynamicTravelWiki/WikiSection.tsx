import { Text } from "@/components/ui/text";
import { wikiTabs } from "./data";
import FilterCountry from "./FilterCountry";
import SectionHeader from "@/components/molecules/secHeader";
import styled from "styled-components";
import CustomAccordion from "./Accordian";

const Root = styled.div`
    @media (max-width: 768px) {
        #section-header {
          padding : 0px 20px;
        }
    }
`;

export const WikiSectionHeader = ({ wikiData }) => {
  return (
    <Root>
      <SectionHeader
        title={wikiData.tagline}
        subtitle={wikiData.title}
        centerLine
      />
      <div className="md:mt-12 mt-[50px]">
        <FilterCountry tabs={wikiTabs} />
      </div>
    </Root>
  )
};
const WikiSection = ({ wikiData, filterWiki }) => {

  // for testing later it will change to the exact logic
  return (
    <section className="md:mt-[48px] mt-[277px]">
      <WikiSectionHeader wikiData={wikiData} />
      <div className="flex gap-[80px] md:px-20 px-5 md:mt-[68px] mt-[50px] max-lg:flex-col max-lg:items-center">
        <CustomAccordion
          data={wikiData.accr}
        />
        {/* Filter Country Wiki will be here */}
        {/* it will have portable compoent also will have differnt stucture */}
        <div>
          <Text
            className="font-bold text-[24px] leading-[34px] -tracking-[1.3px]"
            variant={"darkblue"}
          >
            {filterWiki.location.title}
          </Text>
          <hr className="w-[138px] border-b-[#FFBB0B] border-b-[3px]" />
          <div className="mt-[28px] flex flex-col gap-5">
            <div>
              <Text className="text-base font-bold" variant={"darkblue"}>
                {filterWiki.location.location.title}
              </Text>
              <Text variant={"darkblue"} className="md:text-[16px] text-[12px] md:leading-[28px] leading-[20px]">
                {filterWiki.location.location.desc}
              </Text>
            </div>

            <div>
              <Text className="text-base font-bold" variant={"darkblue"}>
                {filterWiki.location.reachUs.title}
              </Text>
              <Text variant={"darkblue"} className="md:text-[16px] text-[12px] md:leading-[28px] leading-[20px]">
                {filterWiki.location.reachUs.desc}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WikiSection;
