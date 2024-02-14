import { useParams } from "next/navigation";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/ui/text";

// import { urlFor } from "../../../../sanity/lib/client";
import { SanityGlobals } from "../../../../sanity/lib/types";

import Footer__links from "./FooterLink";
import Address from "./Address";
import Container from "../container";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/promotravels",
    icon: "/fb_logo.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.facebook.com/promotravels",
    icon: "/insta.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.facebook.com/promotravels",
    icon: "/twitter.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.facebook.com/promotravels",
    icon: "/youtube.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.facebook.com/promotravels",
    icon: "/random.svg",
    alt: "Facebook",
  },
];

const CARDS = [
  "/visa_card.png",
  "/mastercard.png",
  "/amex.png",
  "/discover.png",
  "/paypal.png",
  "/bank-transfer.png",
];

const Addresses = [
  {
    address: "48 Thawra st., Mohandessen, Giza, 12611, Egypt.",
    number: "+2012 2211 5485",
    email: "medhat@promotravel-eg.com",
    heading: "Egypt Address",
  },
  {
    address: "48 Thawra st., Mohandessen, Giza, 12611, Egypt.",
    number: "+2012 2211 5485",
    email: "medhat@promotravel-eg.com",
    heading: "Emirates Address",
  },
  {
    address: "48 Thawra st., Mohandessen, Giza, 12611, Egypt.",
    number: "+2012 2211 5485",
    email: "medhat@promotravel-eg.com",
    heading: "Saudi Arabia",
  },
];

const socailLinks = [
  {
    name: "Company",
    links: [
      {
        url: "#",
        name: "Review",
      },
      {
        url: "#",
        name: "Group Tours",
      },
      {
        url: "#",
        name: "Group Tours",
      },
      {
        url: "#",
        name: "Group Tours",
      },
    ],
  },
  {
    name: "Company",
    links: [
      {
        url: "#",
        name: "Review",
      },
      {
        url: "#",
        name: "Group Tours",
      },
      {
        url: "#",
        name: "Group Tours",
      },
      {
        url: "#",
        name: "Group Tours",
      },
    ],
  },
  {
    name: "Company",
    links: [
      {
        url: "#",
        name: "Review",
      },
      {
        url: "#",
        name: "Group Tours",
      },
      {
        url: "#",
        name: "Group Tours",
      },
      {
        url: "#",
        name: "Group Tours",
      },
    ],
  },
];

const Footer = ({ footer }: { footer: SanityGlobals["footer"] }) => {
  const params = useParams();

  const language = useMemo(() => {
    return Array.isArray(params!.language)
      ? params!.language[0]
      : params!.language;
  }, [params]);

  console.log("language", language);
  return (
    <div className="w-full bg-primary px-20 max-lg:px-5 max-w-[1440px] mx-auto box-border">
      <Container>
        <div className="flex max-lg:flex-wrap justify-between gap-5 lg:gap-[166px] py-5 lg:py-20">
          {/* Left side */}
          <div className="flex flex-col gap-2 mb-0 md:max-w-[364px] w-full">
            <div className="flex flex-col-reverse lg:flex-col justify-start items-start">
              <div className="mt-9 lg:mt-0">
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="relative w-36 flex items-start justify-start md:w-[220px] h-[38px] md:h-[52px]">
                    <Image
                      // src={(footer?.logo && urlFor(footer?.logo)) || ""}
                      src={"/company_logo.svg" || ""}
                      className=""
                      layout="fill"
                      alt="Company logo"
                    ></Image>
                  </div>
                  <Text
                    variant={"gray"}
                    className="font-normal leading-[22px] text-[14px]"
                  >
                    <Link
                      href="/"
                      className="flex gap-1 items-center text-[14px] leading-[22px] md:text-base md:font-normal font-medium text-blue"
                    >
                      A company by
                      <Text className="font-bold">Promo Travel</Text>
                    </Link>
                  </Text>
                  <Text
                    variant={"gray"}
                    className="font-normal text-[14px] leading-6 lg:text-base mt-[18px]"
                  >
                    With 30 years of dedicated experience, our travel agency is
                    here to curate your dream trip, ensuring exceptional service
                    at every step.
                  </Text>
                </div>

                <p className="text-gray text-sm md:text-base font-medium md:font-normal leading-[24px] mt-5"></p>
              </div>
              <div className="flex flex-wrap gap-5 md:gap-6 lg:mt-10 mt-0 w-full justify-center lg:justify-start">
                {SOCIAL_LINKS.map((item, index) => {
                  return (
                    <Link href={item.href} key={index}>
                      <Image
                        width={20}
                        height={20}
                        src={item.icon}
                        alt={item.alt}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="lg:flex hidden  flex-wrap gap-2 px-4 md:px-0 mt-auto">
              {CARDS.map((item, index) => {
                return (
                  <Image
                    width={50}
                    height={32}
                    src={item}
                    alt=""
                    key={index}
                    className="w-[50px]  h-[32px]"
                  />
                );
              })}
            </div>
          </div>
          {/* Right side */}
          <div className="grow flex flex-col gap-4 text-darkblue">
            <div className="grid grid-cols-3 gap-3 justify-between">
              {socailLinks.map((item, index) => {
                return (
                  <Footer__links
                    heading={item.name}
                    items={item.links || []}
                    key={index}
                  />
                );
              })}
            </div>
            <hr className="hidden md:block border-gray opacity-20" />
            <Text
              variant={"darkblue"}
              className="psb-2 font-bold text-base md:text-lg leading-[24px] pt-7"
            >
              Contact Us
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {Addresses.map((item, index) => {
                return (
                  <Address
                    // address={localizedString(item.address)}
                    address={item.address || ""}
                    email={item.email || ""}
                    // heading={localizedString(item.title)}
                    heading={item.heading || ""}
                    // number={localizedString(item.phone_number)}
                    number={item.number || ""}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:hidden  py-5 px-4 md:px-0 gap-2 mt-auto">
          {CARDS.map((item, index) => {
            return (
              <Image
                width={50}
                height={32}
                src={item}
                alt=""
                key={index}
                className="w-[40px] md:w-[50px] h-[26px] md:h-[32px]"
              />
            );
          })}
        </div>
      </Container>
      <hr className="border-blue/20" />
      <Text
        variant={"gray"}
        className="text-xs md:text-base leading-[20px] md:leading-[24px] text-center py-3"
      >
        {/* {localizedString(footer?.copyright_text)} */}
        {"Copyright © Promo Travel | 2017 All Rights Reserved"}
      </Text>
    </div>
  );
};

export default Footer;
