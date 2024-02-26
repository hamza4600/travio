import React, { useEffect, useRef, useState } from "react";

type TabsProp = {
  tabs: Array<{ name: string; href: string }>;
};

function AppTabs({ tabs }: TabsProp) {
  const [isFixed, setIsFixed] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const tabsRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    setIsFixed(scrollPosition > window.innerHeight / 0.5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function cNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="max-w-full  relative">
      <div
        style={{
          position: isFixed ? "fixed" : "absolute",
          top: 0,
          zIndex: 1000,
          marginTop: isFixed ? "0" : "10px",
          backgroundColor: "white", // Optional: set a background color
        }}
        className=" w-full border-b border-[rgba(20,13,49,0.10)]"
        ref={tabsRef}
      >
        <div className="w-full overflow-x-scroll">
          <div className="px-5">
            <nav
              className="flex lg:gap-16 gap-10 lg:justify-center lg:items-center justify-start items-start"
              aria-label="Tabs"
            >
              {tabs.map((tab, index) => (
                <a
                  key={tab?.name}
                  href={tab?.href}
                  onClick={() => setCurrentTab(index)}
                  className={cNames(
                    currentTab === index
                      ? "border-[#FFBB0B] text-darkblue"
                      : "border-transparent text-gray-500 hover:border-gray-200 text-gray hover:text-gray-700",
                    "whitespace-nowrap border-b-4 font-satoshi border-gray-100 py-4 px-6 lg:text-base text-xs font-medium"
                  )}
                  aria-current={currentTab ? "page" : undefined}
                >
                  {tab?.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppTabs;
