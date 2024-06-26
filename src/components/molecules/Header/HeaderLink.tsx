import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Card from "./Card";
import Selector from "./Selector";
import { urlFor } from "../../../../sanity/lib/client";

function HeaderLink({ locale, data, open, setOpen }) {
  // const [open, setOpen] = React.useState(false);
  const [dest, setDest] = React.useState(0);

  const pathname = usePathname();
  const isHome = pathname === `/${locale}`;

  React.useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef?.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data.map((item: any, index: any) => {
        return (
          <>
            <Link
              href={`/${locale}${item.url}`}
              title={item.text && item.text[locale]}
              className={`leading-[24px] flex-none font-satoshi 
                ${
                  (index === 0 && isHome) ||
                  (!isHome && pathname === `/${locale}${item.url}`)
                    ? "text-[#3FA9F5] font-bold"
                    : "font-medium text-darkblue"
                }`}
            >
              {item.text && item.text[locale]}
            </Link>

            {item?._type === "tour_dropdown" && (
              <>
                <div ref={dropdownRef} className={"hidden lg:flex items-center"}>
                  <span
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      setOpen(!open)
                      setDest(0)
                    } 
                  }
                  >
                    <p className={"font-medium font-satoshi leading-[24px]"}>
                      Destinations
                    </p>
                    <Image
                      src="/down_icon.svg"
                      height="16"
                      width="16"
                      alt=""
                      className={`ml-1 ${open && "-rotate-180"} transition-all`}
                    ></Image>
                  </span>

                  <div
                    className={
                      "w-full h-fit   overflow-scroll bg-white transition-all shadow-md absolute top-[100%] left-0 lg:top-[100px] -z-[1]" +
                      (open ? " translate-y-0" : " -translate-y-[100%]")
                    }
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex justify-center  flex-wrap w-full lg:gap-[100px] gap-5 my-[52px] mx-10 h-fit min-h-[260px]">
                      <div className="flex flex-wrap lg:gap-[85px] gap-5">
                        <Selector
                          title={item.destinations_title?.[locale]}
                          locale={locale}
                          items={
                            item.destinations?.map((item, index) => {
                              return {
                                name: item.destination?.name?.[locale],
                                slug: item?.destination?.slug?.current
                              }
                            }) as any[]
                          }
                          selectedItem={dest}
                          selectedItemToggle={setDest}
                        />
                        <div className="flex flex-col gap-3 max-w-[223px]">
                          <p className="font-semibold  mb-2 font-satoshi">
                            {item.tours_title?.[locale]}
                          </p>
                          {(item.destinations as any[])
                            ?.filter((item, index) => {
                              return index === dest;
                            })[0]
                            .text_tours?.map((item: any, index: any) => {
                              return (
                                <Link
                                  key={index}
                                  className="font-satoshi text-gray hover:text-primary"
                                  href={`/${locale}/tours${item.slug}`}
                                >
                                  <p>{item.title[locale]}</p>
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-[18px]">
                        {item.destinations
                          ?.filter((item, index) => {
                            return index === dest;
                          })[0]
                          .tours?.slice(0, 3)
                          .map((item: any, index) => {
                            if (item) {
                              return (
                                <Card
                                  link={`/${locale}/tours${item.slug.current}`}
                                  key={index}
                                  excerpt={
                                    item?.overview_card?.about &&
                                    item?.overview_card?.about[locale]
                                  }
                                  image={urlFor(item?.hero_section?.image)}
                                  title={
                                    item?.hero_section?.title &&
                                    item?.hero_section?.title[locale]
                                  }
                                />
                              );
                            }
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        );
      })}
    </>
  );
}

export default HeaderLink;
