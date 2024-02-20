import { FC } from "react";
import { Text } from "@/components/ui/text";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centerLine?: boolean;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centerLine,
}) => {
  return (
    <div
      className={`flex flex-col 
      ${
        centerLine
          ? "md:gap-2 gap-2 items-center text-center"
          : "md:gap-2 gap-2"
      }
      `}
    >
      <div className="flex flex-col md:gap-2 gap-2">
        <Text
          as={"h6"}
          className="font-medium uppercase text-base max-sm:text-[12px] md:leading-6 leading-5"
        >
          {title}
        </Text>
        <Text
          as={"h2"}
          variant="darkblue"
          className="font-bold leading-[50px] text-[40px] max-sm:text-2xl"
        >
          {subtitle}
        </Text>
      </div>
      <hr
        aria-hidden="true"
        className="w-[85px] md:w-[117px] border-[#FFBB0B] text-yellow rounded-full md:rounded-[3px] md:border-b-[3px] border-b-[2px]"
      />
    </div>
  );
};

export default SectionHeader;
