import React from "react";
import Image from "next/image";

import Container from "../container";

{
  /* <Schema
data={{
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs?.map((faq) => ({
      '@type': 'Question',
      name: localizedString(faq?.question, locale),
      acceptedAnswer: {
        '@type': 'Answer',
        text: localizedString(faq?.answer, locale),
      },
    })),
  }}
/> */
}
const FAQSection = ({ data }) => {
  const [open, setOpen] = React.useState(-1);
  return (
    <>
      <Container className="bg-white flex flex-col items-center pt-[50px] md:pt-[75px] pb-[50px] md:pb-[60px]">
        <header className="flex flex-col items-center gap-3">
          <h2 className="text-[#3FA9F5] text-base font-medium leading-[20px]">
            FAQ
          </h2>
          <p className="text-darkblue text-[24px] md:text-[40px] font-bold leading-[32px] md:leading-[50px] md:tracking-[-1.2px] ">
            Frequently asked questions
          </p>
          <hr className="w-[85px] md:w-[117px] bg-[#FFBB0B] text-yellow h-1 rounded-full md:rounded-[3px] " />
        </header>
        <div className="w-full px-20 max-sm:px-5 mt-[40px] md:mt-12 space-y-5 md:space-y-6">
          {data.map((faq, index) => (
            <div className="flex flex-col gap-5" key={index}>
              <div
                className="flex gap-5 cursor-pointer"
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                <Image
                  src="/down_icon.svg"
                  height={20}
                  width={20}
                  alt=""
                  className={`${
                    open === index ? "" : "-rotate-90"
                  } transition-all`}
                />

                <strong className="font-medium font-satoshi text-base text-darkblue md:text-xl leading-normal md:leading-[32px] md:tracking-[-0.6px]">
                  {faq?.question}
                </strong>
              </div>

              <div
                className={`${
                  open === index ? "" : "hidden"
                } ml-10 max-w-[90%] text-gray
              text-xs lg:text-base font-satoshi
              `}
              >
                <p>{faq?.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default FAQSection;
