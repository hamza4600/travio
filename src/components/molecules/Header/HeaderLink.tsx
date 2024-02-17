import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Card from "./Card";
import Selector from "./Selector";
import { localizedString, urlFor } from "../../../../sanity/lib/client";
// import { link } from "fs";

function HeaderLink({ item }) {
  const [open, setOpen] = React.useState(false);
  const [dest, setDest] = React.useState(0);

  const pathname = usePathname();

  const active = pathname === item.path;

  console.log(active);

  React.useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <>
      <Link
        href={item.path || "/"}
        className={
          "leading-[24px] flex-none font-medium font-satoshi " +
          (active ? "text-[#3FA9F5] font-bold" : "font-medium text-darkblue")
        }
      >
        {item.name}
      </Link>

      {item?._type === "tour_dropdown" && (
        <>
          <div className={"hidden lg:flex items-center"}>
            <span
              className="flex items-center cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <p className={"font-medium leading-[24px]"}>Destinations</p>
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
              <div className="flex  flex-wrap w-full lg:gap-[100px] gap-5 my-[52px] mx-20 h-fit min-h-[260px]">
                <div className="flex flex-wrap lg:gap-[85px] gap-5">
                  <Selector
                    title={localizedString(item.destinations_title)}
                    items={
                      item.destinations?.map((item, index) => {
                        return localizedString((item.destination as any)?.name);
                      }) as any[]
                    }
                    selectedItem={dest}
                    selectedItemToggle={setDest}
                  />
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold  mb-2">
                      {localizedString(item.tours_title)}
                    </p>
                    {(item.destinations as any[])
                      ?.filter((item, index) => {
                        return index === dest;
                      })[0]
                      .blogs?.map((item: any, index: any) => {
                        return (
                          <Link key={index} href={`/blogs${item.slug.current}`}>
                            <p>{localizedString(item.title)}</p>
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
                      return (
                        <Card
                          link={`/tours${item.slug.current}`}
                          key={index}
                          excerpt={localizedString(item?.overview_card?.about)}
                          image={urlFor(item?.hero_section?.image)}
                          title={localizedString(item?.hero_section?.title)}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HeaderLink;
