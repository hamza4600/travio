import { Text } from "@/components/ui/text";

export type ImageHeaderSectionProps = {
  data: any;
};

const HeroSection = (props: ImageHeaderSectionProps) => {
  const {
    data: { header, image },
  } = props;
  const linearGradient =
    "linear-gradient(75.52deg, #000000 1.5%, rgba(0, 0, 0, 0.8) 9.18%, rgba(0, 0, 0, 0.7) 15.93%, rgba(0, 0, 0, 0.6) 37.5%, rgba(0, 0, 0, 0) 63.68%)";
  return (
    <>
      <div style={{ boxShadow: linearGradient }} className="w-full relative">
        <img
          className="lg:w-full min-h-[420px] max-md:hidden max-w-[1440px]"
          src={image}
          loading="lazy"
          alt={"img"}
        />
        <img
          className="w-full md:hidden min-h-[200px] object-cover"
          src={image}
          loading="lazy"
          alt={"img"}
        />
        <h1 className="font-satoshi lg:w-full text-white max-lg:hidden font-black absolute z-50 bottom-12 text-center text-[56px] leading-[72px]">
          {header}
        </h1>
      </div>
      <div className="md:px-20 px-5 md:mt-12 mt-[18px] items-center flex flex-col">
        <div className="lg:hidden flex flex-col gap-1 items-center mb-[10px]">
          <Text
            variant={"darkblue"}
            className="font-bold text-[20px] leading-[30px]"
          >
            {header}
          </Text>
          <div className="border-b border-[#FFBB0B] w-10" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
