import { Text } from "@/components/ui/text";

const HeroSection = ({ data }) => {
  return (
    <div className="">
      <div>
        <div className="md:h-[420px] h-[200px] sm:relative max-sm:text-center">
          <img
            src={data.img}
            style={{ width: "100%", height: "100%" }}
            alt=""
            className="object-cover"
          />
          <div
            style={{
              background:
                "linear-gradient(343deg, #000 -20.24%, rgba(0, 0, 0, 0.00) 88.74%)",
            }}
            className="absolute max-sm:hidden inset-0 w-full h-full pointer-events-none"
          />
          <Text className="max-sm:mt-4 sm:absolute bottom-16 inset-x-0 text-xl sm:text-6xl text-black sm:text-white font-extrabold text-center">
            {data.title}
          </Text>
          <div className="w-10 mx-auto sm:hidden border-b-2 border-[#FFBB0B] h-[1.5px] mt-1 rounded-full md:rounded-[3px] " />
          <Text
            variant={"darkblue"}
            className="sm:hidden px-6 text-sm font-normal pt-6 leading-6"
          >
            Egypt, a captivating land of ancient wonders, beckons travelers with
            its rich history and timeless allure. From the towering pyramids of
            Giza to the magnificent temples of Luxor and the vibrant streets of
            Cairo, Egypt offers a tapestry of experiences that transport you to
            a bygone era.
          </Text>
        </div>
      </div>
      <div className="px-10 text-sm opacity-80">{""}</div>
    </div>
  );
};

export default HeroSection;
