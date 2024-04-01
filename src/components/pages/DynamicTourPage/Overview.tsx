import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReactStars from "react-stars";
import Image from "next/image";
import { Text } from "@/components/ui/text";

const DownArrow = () => (
  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.57085 17.3052C5.57109 17.305 5.57137 17.3049 5.57161 17.3046L9.76516 13.8348C10.0793 13.5748 10.0781 13.1544 9.76242 12.8956C9.44674 12.6369 8.93613 12.6379 8.62194 12.8978L5.80645 15.2275L5.80645 1.16406C5.80645 0.7973 5.4454 0.5 5 0.5C4.5546 0.5 4.19355 0.7973 4.19355 1.16406L4.19355 15.2275L1.37806 12.8979C1.06387 12.6379 0.553264 12.6369 0.237578 12.8957C-0.0781885 13.1544 -0.0792767 13.5749 0.234836 13.8348L4.42839 17.3047C4.42863 17.3049 4.42891 17.305 4.42915 17.3053C4.74439 17.5653 5.25665 17.5645 5.57085 17.3052Z" fill="white"/>
</svg>
)

const OverViewCard = ({
  data,
  slug,
  locale,
}: {
  data: any;
  slug?: string;
  locale: string;
}) => {

  const price: any = data?.price;

  return (
    <div className="relative font-satoshi lg:h-[80px] bg-primary lg:bg-transparent pb-5 h-fit ">
      <div className="lg:absolute grid p-[26px] max-xl:grid-cols-2 gap-3 lg:flex items-center max-w-[1280px]  inset-x-0 lg:divide-x-2 top-[-34px] mx-auto bg-primary rounded-2xl max-md:p-[20px]">
        <div className="flex gap-2 items-center bg-white lg:bg-transparent justify-start lg:justify-center lg:px-5 shadow-lg lg:shadow-none shadow-[rgba(200,200,200,0.2)] lg:rounded-none rounded-xl p-[10px] lg:w-fit max-md:py-[4px]">
          <div className="relative lg:h-12 w-8 h-8 lg:w-12">
            <img
              alt=""
              src={"/ColoredCalender.svg"}
              className="object-contain max-md:w-[30px] max-md:h-[30px]"
            />
          </div>
          <div className="flex flex-col gap-1 max-md:gap-0">
            <p className="lg:text-base text-[12px] max-lg:leading-5 font-medium text-gray whitespace-nowrap">
              Duration
            </p>
            <p className="lg:text-xl max-lg:leading-5 whitespace-nowrap font-bold text-darkblue">
              {data?.duration?.[locale]}
            </p>
          </div>
        </div>

        <div className="flex gap-2 bg-white lg:bg-transparent justify-start items-center lg:justify-center lg:px-5 shadow-lg lg:shadow-none shadow-[rgba(200,200,200,0.2)] lg:rounded-none rounded-xl p-[10px] w-full lg:w-fit max-md:py-[4px]">
          <div className="relative lg:h-12 w-8 h-8 lg:w-12">
            <Image
              alt=""
              src={"/ColoredLocation.svg"}
              fill
              className="object-contain max-md:w-[30px] max-md:h-[30px]"
            />
          </div>
          <div className="flex flex-col gap-1 max-md:gap-0">
            <p className="lg:text-base text-[12px] max-lg:leading-5 font-medium text-gray whitespace-nowrap">
              {data?.countries} Countries
            </p>
            <p className="lg:text-xl max-lg:leading-5 font-bold text-darkblue">
              {data?.cities} Cities
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white lg:bg-transparent justify-start lg:justify-center lg:px-5 shadow-lg lg:shadow-none shadow-[rgba(200,200,200,0.2)] lg:rounded-none rounded-xl p-2 w-full lg:w-fit max-md:py-[4px]">
          {/* <div className="relative h-12 w-12">
              <Image alt="" src={'/calendar.svg'} fill className="object-contain" />
            </div> */}
          <div className="flex flex-col gap-1 max-md:gap-0">
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
          <div className="flex flex-col gap-1 max-md:gap-0">
            <p className="lg:text-base text-[12px] max-lg:leading-5 font-medium text-gray whitespace-nowrap">
              About This Tour
            </p>
            <p className="lg:text-xl max-lg:leading-5 font-bold text-darkblue">
              {data?.about?.en}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white lg:bg-transparent justify-start lg:justify-center lg:px-5 shadow-lg lg:shadow-none shadow-[rgba(200,200,200,0.2)] lg:rounded-none rounded-xl p-[10px] w-full lg:w-fit max-md:py-[4px]">
          <div className="relative lg:h-12 w-8 h-8 lg:w-12">
            <img
              alt=""
              src={"/credit-card (2) 1.svg"}
              className="object-contain max-md:w-[30px] max-md:h-[30px]"
            />
          </div>
          <div className="flex flex-col gap-1 max-md:gap-0">
            <p className="lg:text-base text-[12px] max-lg:leading-5 font-medium text-gray whitespace-nowrap">
              Price From
            </p>
            <p className="lg:text-xl text-[14px] max-lg:leading-5 font-bold text-darkblue whitespace-nowrap">
              $ {price?.initial_price?.[locale]}
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
            className="w-[185px] font-bold h-10 text-[14px] leading-6 flex gap-3"
          >
           <span>Book Now</span>
            <DownArrow />
          </Button>
        </Link>
        <Text
          variant={"destructive"}
          className="text-[12px] leading-3 font-medium mt-3 max-md:mt-1"
        >
          {data?.cta_helper_text?.en}
        </Text>
      </div>
    </div>
  );
};

export default OverViewCard;
