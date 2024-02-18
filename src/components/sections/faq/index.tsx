import React from "react";
import Image from "next/image";

import Container from "../../molecules/container";
import SectionHeader from "@/components/molecules/secHeader";
// pass proper types to the data so we can get proper intellisense
const FAQSection = ({ data }) => {
  const [open, setOpen] = React.useState(-1);
  return (

    <Container className="bg-white flex flex-col items-center pt-[50px] md:pt-[75px] pb-[50px] md:pb-[60px]">
      <SectionHeader
        title="FAQ"
        subtitle="Frequently asked questions"
        centerLine
      />
      <div className="w-full px-20 max-sm:px-5 mt-[40px] md:mt-12 space-y-5 md:space-y-6">
        {data.map((faq, index) => (
          <div className="flex flex-col gap-5" key={index}>
            <div
              className="flex gap-5 cursor-pointer"
              onClick={() => setOpen(open === index ? -1 : index)}
              role="button"
              aria-expanded={open === index ? 'true' : 'false'}
              aria-controls={`faq-answer-${index}`}
            >
              <Image
                src="/down_icon.svg"
                height={20}
                width={20}
                alt=""
                className={`${open === index ? '' : '-rotate-90'} transition-all`}
              />
              <strong
                className="font-medium font-satoshi text-base text-darkblue md:text-xl leading-normal md:leading-[32px] md:tracking-[-0.6px]"
              >
                {faq?.question}
              </strong>
            </div>

            <div
              id={`faq-answer-${index}`}
              className={`${open === index ? '' : 'hidden'
                } ml-10 max-w-[90%] text-gray text-[12px] leading-5 lg:text-base font-satoshi`}
            >
              <p>{faq?.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FAQSection;
