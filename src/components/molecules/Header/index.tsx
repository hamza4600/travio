"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

const LanguageDropdown = dynamic(() => import("./LanguageDropdown"))

import HeaderLink from "./HeaderLink"
import { OpenSvg } from "./style"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BookingIcon } from "@/components/icons"
import { Text } from "@/components/ui/text"
import { SanityGlobals } from "../../../../sanity/lib/types"
import styled from "styled-components"
import { bookingBtn } from "@/lib/utils"

const Root = styled.div`
  a:empty {
    display: none;
  }
`

const Header = ({
  navbar,
  locale,
  banner,
}: {
  navbar: SanityGlobals["navbar"]
  locale: string
  banner: any
}) => {
  const [isOppen, setIsOpen] = useState(false)
  const [openDropDown, setOpenDropDown] = useState(false)

  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  function setDropDown() {
    setOpenDropDown(!openDropDown)
  }

  useEffect(() => {
    if (isOppen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOppen])

  // destination dropdown for mobile
  const destinations = navbar?.links
    ?.filter((item: any) => item?._type === "tour_dropdown")[0]
    //@ts-ignore
    ?.destinations?.map((item: any) => item?.destination)

  return (
    <Root>
      <div
        className={`w-full hidden bg-white lg:block h-[100px] ${
          open && " relative z-50 "
        } `}
      >
        <div className="bg-primary py-2">
          <div className="px-20 max-xl:px-5">
            {banner?.watts_banner?.show && (
              <a
                target={"_blank"}
                href={`whatsapp://${banner?.watts_banner?.contact_number}`}
              >
                <div className="flex justify-end gap-1 w-full ">
                  <Image
                    src="/whatsapp_logo.svg"
                    height={18}
                    width={18}
                    alt="Whatsapp logo"
                  />
                  <p
                    className={
                      "text-[14px] font-satoshi font-medium leading-[22px]"
                    }
                  >
                    {banner?.watts_banner?.contact_number}
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>

        <div className=" h-[60px] flex items-center justify-between px-20 max-xl:px-5 ">
          {/* <Container className="main-content-wrapper flex gap-[138px] items-center justify-between"> */}
          <div>
            <Link href={`/${locale}`}>
              <Image
                className={"h-10 w-[172px]"}
                src="/company_logo.svg"
                height={40}
                width={172}
                alt="Company logo"
              />
            </Link>
          </div>
          <div className="flex gap-[38px] justify-evenly text-darkblue">
            <HeaderLink
              data={navbar?.links}
              locale={locale}
              open={open}
              setOpen={setOpen}
            />
          </div>
          <div>
            <div className="flex gap-3">
              <Button className="flex gap-[10px]" variant={"sky"}>
                <BookingIcon />{" "}
                <Text
                  variant={"tertiary"}
                  className="font-bold text-[16px] leading-6"
                >
                  {bookingBtn?.[locale]}
                </Text>{" "}
              </Button>

              <LanguageDropdown locale={locale} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:hidden z-50 lg:h-[80px] h-[60px] p-base">
        <div className="px-5 flex justify-between items-center w-full relative h-full  py-[16px] md:py-5 z-[50]">
          <button
            onClick={() => setIsOpen(!isOppen)}
            className="bg-primary/80 rounded-full p-1"
          >
            <OpenSvg />
          </button>
          <Link href={`/${locale}`}>
            <Image
              src="/company_logo.svg"
              height={24}
              width={103}
              alt="Company logo"
            />
          </Link>
          <div className="flex gap-3 h-[24px]  items-center">
            {banner?.watts_banner?.show && (
              <a href={`whatsapp://${banner?.watts_banner?.contact_number}`}>
                <Image
                  src="/whatsapp_logo.svg"
                  height={24}
                  width={24}
                  alt="Whatsapp logo"
                />
              </a>
            )}
          </div>
        </div>
        {/* Menu For Mobile */}
        <div className="flex flex-col justify-end pr-3  items-end">
          <div
            className={`relative rounded-[16px] overflow-auto text-base transition-all p-5  text-darkblue lg:first-letter:text-xl ease-in-out duration-700  bg-white w-[70%]  flex flex-col  justify-start items-start z-[15] ${
              isOppen ? "translate-y-1 " : "-translate-y-full opacity-0"
            }`}
            style={{ top: "30px" }}
          >
            <div className="ml-auto">
              <LanguageDropdown locale={locale} />
            </div>

            {navbar?.links?.map((item, index) => (
              <div className="w-full" key={index}>
                {item?._type === "link" && (
                  <div
                    onClick={() => {
                      setIsOpen(false)
                    }}
                    className=" p-[12px] border-b border-b-[#F2FAFF] rounded-b-[8px] font-satoshi text-[16px] px-[18px] "
                  >
                    <Link
                      href={`/${locale}${item.url}`}
                      title={item?.text?.[locale]}
                      className={
                        "font-satoshi " +
                        (pathname == `/${locale}${item.url}`
                          ? " text-blue-500 font-bold "
                          : " text-darkblue font-medium ")
                      }
                    >
                      {item?.text?.[locale]}
                    </Link>
                  </div>
                )}
                {item?._type === "tour_dropdown" && (
                  <div>
                    <span
                      onClick={() => {
                        setDropDown()
                        setOpen(!open)
                      }}
                      className="flex hover:bg-primary rounded-[8px] text-blue  p-[12px] text-[16px] px-[18px] items-center justify-between cursor-pointer"
                    >
                      <p
                        className={`font-medium font-satoshi text-darkblue ${
                          openDropDown && "text-primary"
                        }`}
                      >
                        Destinations
                      </p>
                      <Image
                        src="/down_icon.svg"
                        height="16"
                        width="16"
                        alt=""
                        className={`ml-1 ${
                          openDropDown && "-rotate-180"
                        } transition-all`}
                      ></Image>
                    </span>
                    {openDropDown && (
                      <div className="">
                        {destinations.map((item, index) => (
                          <div className="" key={index}>
                            <div className="flex font-satoshi items-center gap-3 text-[#726E83] p-[10px] px-[24px]">
                              <Link
                                className="font-satoshi font-medium"
                                key={index}
                                href={`/${locale}/destinations${item?.slug?.current}`}
                              >
                                {" "}
                                {item?.name?.[locale]}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <Button className="flex gap-2 w-full" variant={"sky"}>
              <BookingIcon />{" "}
              <Text
                variant={"tertiary"}
                className="font-bold text-[16px] leading-6"
              >
                {bookingBtn?.[locale]}
              </Text>{" "}
            </Button>
          </div>
        </div>
        {/* Menu for Desktop */}
        {/* <div className="hidden lg:block">
          {navbar?.links?.map((item, index) => {
            return <HeaderLink key={index} />;
          })}
        </div> */}
        {/* P */}
        {/* </div> */}
      </div>
    </Root>
  )
}

export default Header
