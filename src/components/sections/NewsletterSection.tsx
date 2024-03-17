import Image from "next/image";
import Container from "../molecules/container";
import useWindowSize from "@/hooks/useWindows";
import { Button } from "../ui/button";

const NewsletterSection = ({ data, locale }) => {
  const window = useWindowSize();
  const isMobile = window.width < 768;

  const { subtitle, title } = data || {};

  return (
    <Container className="md:px-20 px-0 md:pb-[60px] pb-[50px] flex justify-center items-center bg-white text-white">
      <div className="pt-[30px] md:pt-[55px] pb-[45px] px-[60px] h-[300px] md:h-full w-screen md:w-full bg-blue md:rounded-3xl overflow-hidden relative">
        <Image
          width={640}
          height={222}
          src={
            isMobile ? "/demo/form-bg-mobile.png" : "/demo/formbg-desktop.png"
          }
          alt={""}
          sizes={`
              100vw
            `}
          className={"absolute w-full h-full top-0 left-0 object-cover"}
        />
        <div className="flex relative font-satoshi z-10 flex-col justify-center md:justify-start items-center md:items-start ">
          <header>
            <h2 className="text-center -tracking-[1.2px] max-w-3xl md:text-start text-[24px] md:text-[40px] font-bold leading-[32px] md:leading-[50px] w-[335px] md:w-full">
              {title?.[locale]}
            </h2>

            <p className="w-[335px] md:w-full  text-center max-w-[610px] -tracking-[0.6px] mt-2.5 mb-[30px] md:text-start text-[14px] md:text-[20px] font-[500] md:font-normal leading-[20px] md:leading-[32px]">
              {subtitle?.[locale]}
            </p>
          </header>
          <div className="relative shadow-sm flex items-center  ">
            <input
              className=" text-black w-[335px]  md:w-[420px] h-10 md:h-12 rounded-full px-3 md:px-4 placeholder:text-gray text-xs   md:text-base leading-[22px] md:leading-normal "
              type="text"
              placeholder={"Enter your email"}
            />
            <Button variant={'golden'}
              className="absolute right-[5px] top-1/2 -translate-y-1/2 py-[4px] md:py-[7px] px-[18px] font-bold rounded-full"
            >
              {"Sign Up"}
            </Button>
          </div>

          <footer className="flex md:flex-col w-[335px] items-center md:items-start gap-1.5 mt-2 md:mt-[30px]">
            <strong className="text-[12px] md:text-[20px] font-bold leading-[20px] md:leading-[32px] ">
              Have any questions?
            </strong>
            <div className="flex items-center gap-0.5 md:gap-1">
              <svg
                className="h-[18px] w-[18px] md:h-[24px] md:w-[24px]"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
                  fill="#BFC8D0"
                />
                <path
                  d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
                  fill="url(#paint0_linear_87_7264)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
                  fill="white"
                />
                <path
                  d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_87_7264"
                    x1="26.5"
                    y1="7"
                    x2="4"
                    y2="28"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5BD066" />
                    <stop offset="1" stop-color="#27B43E" />
                  </linearGradient>
                </defs>
              </svg>

              <p className="text-[10px] md:text-base font-bold md:font-medium leading-[14px] md:leading-normal ">
                +1 0000 000 000
              </p>
            </div>
          </footer>
        </div>
      </div>
    </Container>
  );
};

export default NewsletterSection;
