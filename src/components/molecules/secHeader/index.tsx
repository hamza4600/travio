import { FC } from "react"
import { Text } from "@/components/ui/text"

interface SectionHeaderProps {
  title: string
  subtitle: string
  centerLine?: boolean
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centerLine,
}) => {
  return (
    <div
      id="section-header"
      className={`flex flex-col 
      ${centerLine ? "items-center text-center" : ""}
      `}
    >
      <div className="flex flex-col">
        <Text className="font-medium uppercase text-[12px] md:text-base md:leading-6 leading-5">
          {title}
        </Text>
        <Text
          variant="darkblue"
          className="font-bold leading-[50px] md:text-[40px] md:mt-3 mt-2 text-2xl"
        >
          {subtitle}
        </Text>
      </div>
      <div className="w-[65px] md:w-[100px] border-[#FFBB0B] text-yellow mt-1 md:mt-3 rounded-full md:rounded-[3px] border-b-[3px]" />
    </div>
  )
}

export default SectionHeader
