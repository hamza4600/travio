import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

const FilterCountry = ({
  tabs,
}: {
  tabs: Array<{ name: string; href: string }>;
}) => {
  const [isFixed, setIsFixed] = useState(false);

  const params = useParams();

  const tabsRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsFixed(scrollPosition > window.innerHeight / 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function cNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="max-w-full relative">
      <div
        style={{
          position: isFixed ? "fixed" : "relative",
          top: 0,
          zIndex: 1000,
          marginTop: isFixed ? "0" : "0",
          backgroundColor: "white",
        }}
        className=" w-full border-b border-[rgba(20,13,49,0.10)]"
        ref={tabsRef}
      >
        <div className="w-full overflow-x-scroll">
          <div className="px-5">
            <nav
              className="flex lg:gap-[120px] gap-[50px] md:px-[120px] lg:items-center md:justify-center justify-start items-start"
              aria-label="Tabs"
            >
              {tabs.map((tab, index) => (
                <Link
                  key={tab?.name}
                  scroll={false}
                  href={`/wiki/${tab.href}`}
                  // onClick={() => setCurrentTab(index)}
                  className={cNames(
                    `/${params?.handle[0]}` === tab?.href
                      ? "border-[#FFBB0B] text-darkblue"
                      : "border-transparent text-gray-500 hover:border-gray-200 text-gray hover:text-gray-700",
                    "whitespace-nowrap border-b-4 font-satoshi border-gray-100 py-4 px-2 lg:text-base text-xs font-medium"
                  )}
                >
                  {tab?.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCountry;
