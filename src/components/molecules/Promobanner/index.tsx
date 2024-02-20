import React from "react";
import Link from "next/link";

import Container from "../container";

function PromoBanner({ banner, locale }: { banner?: any; locale: string }) {
  if (!banner) return null;
  return (
    <div className="w-full font-satoshi h-[40px] flex flex-col items-center justify-center z-10 text-white bg-darkblue">
      <Container className="pl-[18px] pr-[19px]">
        <div
          className={
            "font-medium text-[11px] md:text-sm leading-5 md:leading-[24px] text-center "
          }
        >
          {banner.text?.[locale]}
          <Link href={"#"} className="underline cursor-pointer font-bold">
            {banner.cta?.label?.[locale]}
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default PromoBanner;
