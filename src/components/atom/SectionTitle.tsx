import React from "react";
import { Text } from "../ui/text";

type Props = {
  tag: string;
  title: string;
};

const SectionTitle: React.FC<Props> = ({ tag, title }) => {
  return (
    <div className="flex flex-col gap-2">
      <Text className="font-medium text-base maxs-sm:text[12px] leading-5">
        {tag}
      </Text>
      <Text
        variant={"darkblue"}
        className="font-bold leading-[50px] text-[40px] max-sm:text-2xl"
      >
        {title}
      </Text>
      <div
        className="border-b-[#FFBB0B] border-b-[3px] max-w-[117px] border-t-0" />
    </div>
  );
};

export default SectionTitle;
