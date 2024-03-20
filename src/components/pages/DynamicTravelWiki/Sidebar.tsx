import React from "react";
import { useState } from "react";
import {
  // useRouter
  usePathname,
} from "next/navigation";

const Sidebar = ({ sections }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSubSection, setSelectedSubSection] = useState(null);
  const [nestedSlugSection, setNestedSection] = useState(null);

  console.log("nestedSection: ", nestedSlugSection);

  //   const router = useRouter();
  const pathname = usePathname();

  const handleSectionClick = (sectionKey) => {
    setSelectedSection(sectionKey === selectedSection ? null : sectionKey);
  };

  const handleSubSectionClick = (subSectionSlug) => {
    setSelectedSubSection(
      subSectionSlug === selectedSubSection ? null : subSectionSlug
    );
    // router.push(subSectionSlug);
    window.history.pushState({}, "", `?slug=${subSectionSlug}`);
  };

  const handleNestedSection = (subSectionSlug) => {
    setNestedSection(
      subSectionSlug === nestedSlugSection ? null : subSectionSlug
    );
    // router.push(subSectionSlug);
    window.history.pushState({}, "", `?slug=${subSectionSlug}`);
  };

  return (
    <div className="sidebar w-full max-w-[390px] flex flex-col gap-3">
      {sections.map((section: any, index: number) => (
        <div
          key={section._key}
          className={`flex flex-col ${
            selectedSection === section._key && " rounded-b-2xl shadow-md"
          }`}
        >
          <button
            onClick={() => handleSectionClick(section._key)}
            className="font-satoshi md:text-lg text-[14px] leading-6 py-3 px-4 bg-primary rounded-t-2xl flex justify-between items-start"
          >
            <p className={`tree-title`}>{section.tree_title.en}</p>
            <img
              src="/down_icon.svg"
              height={20}
              width={20}
              alt=""
              className={`${
                selectedSection === section._key ? "-rotate-180" : ""
              } transition-all`}
            />
          </button>
          {selectedSection === section._key && (
            <div className="sections flex flex-col gap-[30px] py-4">
              {section.sections.map((subSection) => (
                <div key={subSection._key}>
                  <button
                    className={`sub-section-title md:text-[14px] md:leading-[22px] px-6 font-satoshi text-[12px] leading-5 ${
                      !selectedSubSection === subSection?.slug?.current
                        ? "text-gray"
                        : " text-primary font-medium"
                    }`}
                    onClick={() =>
                      handleSubSectionClick(subSection.slug.current)
                    }
                    title={subSection.slug.current}
                  >
                    {subSection.title.en}
                  </button>
                  {/* {selectedSubSection === subSection.slug.current && ( */}
                  <div className="second-nested-section px-9 pt-4">
                    {subSection.second_nested_section.map((nestedSection) => (
                      <div key={nestedSection._key} className="flex gap-2">
                        {nestedSlugSection === nestedSection?.slug?.current ? (
                          <img
                            src={"/minus_icon_blue.svg"}
                            width={20}
                            height={20}
                            alt="Minus Icon"
                          />
                        ) : (
                          <img
                            src={"/minus_icon.svg"}
                            width={20}
                            height={20}
                            alt="Minus Icon"
                          />
                        )}
                        <button
                          id={`${pathname}/${subSection.slug.current}${nestedSection.slug.current}`}
                          className={`text-gray font-satoshi md:text-[14px] text-[12px] leading-5 ${
                            selectedSubSection === subSection?.slug?.current &&
                            " text-primary"
                          }`}
                          onClick={() =>
                            handleNestedSection(nestedSection?.slug?.current)
                          }
                        >
                          {nestedSection.title.en}
                        </button>
                      </div>
                    ))}
                  </div>
                  {/* )} */}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
