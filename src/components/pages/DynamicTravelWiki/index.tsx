"use client";
import Layout from "@/components/layout";
import { filterWikiData, wikiData } from "./data";
import WikiSection from "./WikiSection";
import HeroSection from "../DynamicDestinations/HeroSection";
// import PortableText from "react-portable-text";

import NewsletterSection from "@/components/sections/NewsletterSection";
import FeatureTourSection from "@/components/sections/featureTour/FeatureTour";
// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter, usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";

// const Sidebar = ({ sections }) => {
//   const [selectedSection, setSelectedSection] = useState(null);
//   const [selectedSubSection, setSelectedSubSection] = useState(null);
//   const router = useRouter();
//   const pathname = usePathname();

//   const handleSectionClick = (sectionKey) => {
//     setSelectedSection(sectionKey === selectedSection ? null : sectionKey);
//   };

//   const handleSubSectionClick = (subSectionSlug) => {
//     setSelectedSubSection(subSectionSlug === selectedSubSection ? null : subSectionSlug);
//     // router.push(subSectionSlug);
//     window.history.pushState({}, "", `?slug=${subSectionSlug}`);
//   };

//   return (
//     <div className="sidebar ">
//       {sections.map((section) => (
//         <div key={section._key} className="flex flex-col">
//           <Button className="tree-title" onClick={() => handleSectionClick(section._key)}>
//             {section.tree_title.en}
//           </Button>
//           {selectedSection === section._key && (
//             <div className="sections flex flex-col">
//               {section.sections.map((subSection) => (
//                 <div key={subSection._key}>
//                   <Button
//                     variant={selectedSubSection === subSection.slug.current ? 'primary' : 'secondary'}
//                     className="sub-section-title"
//                     onClick={() => handleSubSectionClick(subSection.slug.current)}
//                     title={subSection.slug.current}
//                   >
//                     {subSection.title.en}
//                   </Button>
//                   {selectedSubSection === subSection.slug.current && (
//                     <div className="second-nested-section">
//                       {subSection.second_nested_section.map((nestedSection) => (
//                         <Button
//                           variant="secondary"
//                           key={nestedSection._key}
//                           id={`${pathname}/${subSection.slug.current}${nestedSection.slug.current}`}
//                           onClick={() => handleSubSectionClick(nestedSection.slug.current)}
//                         >
//                           {nestedSection.title.en}
//                         </Button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// const Content = ({ sections }) => {

//   const router = useSearchParams();
//   const slug = router?.get("slug");
//   console.log("slug: ", router?.get("slug"));

//   const [editorValue, setEditorValue] = useState(null);

//   const findContent = (sections, slug) => {
//     for (let section of sections) {
//       for (let subSection of section.sections) {
//         for (let nestedSection of subSection.second_nested_section) {
//           if (nestedSection.slug.current === slug) {
//             return nestedSection.content.en;
//           }
//         }
//       }
//     }
//   };

//   const content = findContent(sections, slug);
//   console.log("content: ", content);

//   useEffect(() => {
//     if (content) {
//       setEditorValue(content);
//     }
//   }, [content, slug])

//   return (
//     <div className="content">
//       {editorValue ?
//         <PortableText
//           content={editorValue}
//           className="text-darkblue md:text-[16px] md:leading-7 text-[12px] leading-5"
//           serializers={{}}
//         /> : null}
//     </div>
//   );
// };

const DynamicTravelWiki = ({
  language,
  pageData,
  newLetterSection,
}: {
  language: string;
  pageData: any;
  newLetterSection: any;
}) => {
  const { layout, data } = pageData || {};
  const { sections, suggested_tour } = data || {};

  console.log("dataTravelwiki555: ", sections);

  return (
    <Layout
      locale={language}
      globals={layout}
      promo_banner={layout?.banner}
      breadcrumbs={[]}
    >
      <HeroSection data={data?.image_hero?.header_section} locale={language} />

      <WikiSection wikiData={wikiData} filterWiki={filterWikiData} />
      {/* <div className="flex flex-row justify-between gap-10">
        <Sidebar sections={sections} />
        <Content sections={sections} />
      </div> */}
      <FeatureTourSection data={suggested_tour} locale={language} />

      <div className="mt-20 md:mb-[68px] mb-[52px]">
        <NewsletterSection data={newLetterSection} locale={language} />
      </div>
    </Layout>
  );
};

export default DynamicTravelWiki;
