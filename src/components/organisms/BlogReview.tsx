import React from "react";
import Image from "next/image";
import Link from "next/link";

// import { urlFor } from '../../../sanity/lib/client'

import Container from "../molecules/container";
import { urlFor } from "../../../sanity/lib/client";

interface BlogReviewProps {
  data: any;
  locale
}

function BlogReview(props: BlogReviewProps) {
  const { data, locale } = props;
  return (
    <Container className="rounded-xl mx-auto max-w-[1312px] px-4 my-10 bg-primary md:py-12 py-[30px]">
      <div className="flex gap-7 max-md:flex-col mx-auto justify-center items-center">
        {/* left side */}
        <div className="flex md:flex-col gap-2 items-center">
          <Image
            src={ urlFor(data?.avatar?.asset?._ref)}
            height={60}
            width={60}
            quality={100}
            alt={data?.avatar?.alt}
            className="rounded-full border-2 border-blue aspect-square"
          />

          <div className="flex flex-col gap-3">
            <p className="text-lg md:font-medium font-bold underline underline-offset-2 md:decoration-[3px] decoration-[2px] decoration-[#FFBB0B] whitespace-nowrap">
              {data.name?.[locale]}
            </p>

            {data.socials.map((it: any, ind: any) => {
              return (
                <Link
                  key={ind}
                  href={it.link}
                  target="_blank"
                  className="flex items-center justify-center"
                >
                  <Image
                    src={urlFor(it?.icon?.asset?._ref)}
                    height={20}
                    
                    width={20}
                    quality={100}
                    className="rounded-full"
                    alt={it.name}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        {/* right side */}
        <div className="grow max-w-[560px] max-md:text-center text-darkblue md:text-base text-[12px] leading-5">
          {data.bio?.[locale]}
        </div>
      </div>
    </Container>
  );
}

export default BlogReview;
