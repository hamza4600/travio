import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReactStars from "react-stars";
import Image from "next/image";
import { Text } from "@/components/ui/text";

// import { useRouter } from "next/navigation";

const OverViewCard = ({ data, slug }: { data: any; slug?: string }) => {
  //   const router = useRouter();
  const price: any = data?.price;
  return (
    <div className="relative font-satoshi lg:h-[80px] bg-primary lg:bg-transparent pb-5 h-fit ">
      <div className="lg:absolute grid p-[26px] max-xl:grid-cols-2 gap-3 lg:flex items-center max-w-[1280px]  inset-x-0 lg:divide-x-2 top-[-34px] mx-auto bg-primary rounded-2xl">
        <div className="flex gap-2 items-center bg-white lg:bg-transparent justify-start lg:justify-center lg:px-5 shadow-lg lg:shadow-none shadow-[rgba(200,200,200,0.2)] lg:rounded-none rounded-xl p-[10px] lg:w-fit">
          <div className="relative lg:h-12 w-8 h-8 lg:w-12">
            <Image
              alt=""
              src={"/ColoredCalender.svg"}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="lg:text-base text-[12px] max-lg:leading-5 font-medium text-gray whitespace-nowrap">
              Duration
            </p>
            <p className="lg:text-xl max-lg:leading-5 font-bold text-darkblue">
              {data?.duration?.en}
            </p>
          </div>
        </div>

        <div className="flex gap-2 bg-white lg:bg-transparent justify-start items-center lg:justify-center lg:px-5 shadow-lg lg:shadow-none shadow-[rgba(200,200,200,0.2)] lg:rounded-none rounded-xl p-[10px] w-full lg:w-fit">
          <div className="relative lg:h-12 w-8 h-8 lg:w-12">
            <Image
              alt=""
              src={"/ColoredLocation.svg"}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="lg:text-base text-[12px] max-lg:leading-5 font-medium text-gray whitespace-nowrap">
              {data?.countries} Countries
            </p>
            <p className="lg:text-xl max-lg:leading-5 font-bold text-darkblue">
              {data?.cities} Cities
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white lg:bg-transparent justify-start lg:justify-center lg:px-5 shadow-lg lg:shadow-none shadow-[rgba(200,200,200,0.2)] lg:rounded-none rounded-xl p-2 w-full lg:w-fit">
          {/* <div className="relative h-12 w-12">
              <Image alt="" src={'/calendar.svg'} fill className="object-contain" />
            </div> */}
          <div className="flex flex-col gap-1">
            <p className="lg:text-base text-[12px] max-lg:leading-5 font-medium text-gray whitespace-nowrap">
              Trip Rating
            </p>
            <div className="flex items-center gap-1 flex-nowrap">
              {/*@ts-ignore*/}
              <ReactStars
                count={5}
                onChange={() => {}}
                edit={false}
                className="flex flex-nowrap"
                value={data?.rating}
                size={16}
                color2={"#ffd700"}
              />
              <p className="lg:text-xl max-lg:leading-5 font-bold text-darkblue">
                {data?.rating}
              </p>
            </div>
          </div>
        </div>

        <div className=" gap-2 hidden lg:flex justify-center px-7  w-full">
          <div className="relative h-12 w-12">
            <Image
              alt=""
              src={"/add-user 1.svg"}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="lg:text-base text-[12px] max-lg:leading-5 font-medium text-gray whitespace-nowrap">
              About This Tour
            </p>
            <p className="lg:text-xl max-lg:leading-5 font-bold text-darkblue">
              {data?.about?.en}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white lg:bg-transparent justify-start lg:justify-center lg:px-5 shadow-lg lg:shadow-none shadow-[rgba(200,200,200,0.2)] lg:rounded-none rounded-xl p-[10px] w-full lg:w-fit">
          <div className="relative lg:h-12 w-8 h-8 lg:w-12">
            <Image
              alt=""
              src={"/credit-card (2) 1.svg"}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="lg:text-base text-[12px] max-lg:leading-5 font-medium text-gray whitespace-nowrap">
              Price From
            </p>
            <p className="lg:text-xl text-[14px] max-lg:leading-5 font-bold text-darkblue whitespace-nowrap">
              {price?.en}
            </p>
          </div>
        </div>

        {/* desktop CTA */}
        <div className="lg:flex hidden font-satoshi flex-col w-full justify-between items-center  px-7">
          <Link href={`#price-list`}>
            <Button variant={"sky"} className="h-12 text-base font-bold">
              Book Now
            </Button>
          </Link>
          <Text
            variant={"destructive"}
            className="text-[12px] leading-5  font-medium "
          >
            {data?.cta_helper_text?.en}
          </Text>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="flex lg:hidden font-satoshi flex-col w-full justify-between items-center  px-7">
        <Link href={`#price-list`}>
          <Button
            variant={"sky"}
            className="w-[185px] font-bold h-10 text-[14px] leading-6"
          >
            Book Now
          </Button>
        </Link>
        <Text
          variant={"destructive"}
          className="text-[12px] leading-3 font-medium mt-3"
        >
          {data?.cta_helper_text?.en}
        </Text>
      </div>
    </div>
  );
};

export default OverViewCard;