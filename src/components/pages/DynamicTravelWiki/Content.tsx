import React, { useEffect, useState } from "react";
import PortableText from "react-portable-text";
import { useSearchParams } from "next/navigation";
// import styled from "styled-components";

// const Wrapper = styled.div`
//   & h1 {
//     font-size: 24px;
//     line-height: 34px;
//     font-weight: bold;
//   }
// `;

const serializers = {
  normal: (props: any) => <p className=""> {props.children}</p>,
  h1: (props: any) => (
    <h1 className="text-[24px] leading-[34px] font-bold">
      {props.children}
      <div className="border-b-[3px] border-b-[#FFBB0B] w-[138px] max-md:border-b-[1px]" />
    </h1>
  ),
  h2: (props: any) => (
    <h2 className="md:text-base text-[14px] leading-6 font-bold md:mt-7 mt-5">
      {" "}
      {props.children}
    </h2>
  ),

  p: ({ children }: any) => {
    const sanitizedText = children.replace(/\n\n/g, " ").replace(/\n/g, " ");
  
    <p className="md:text-[16px] md:leading-[28px] text-[12px] leading-5">
      {sanitizedText}
    </p>;
  },
  link: ({ href, children }: any) => (
    <a href={href} className="text-blue-500 hover:underline">
      {children}
    </a>
  ),
};

const Content = ({ sections, locale }) => {
  const router = useSearchParams();
  const slug = router?.get("slug");

  const [editorValue, setEditorValue] = useState(null);

  const findContent = (sections, slug) => {
    for (let section of sections) {
      for (let subSection of section.sections) {
        for (let nestedSection of subSection.second_nested_section) {
          if (nestedSection.slug.current === slug) {
            return nestedSection?.content?.[locale];
          }
        }
      }
    }
  };

  const content = findContent(sections, slug);

  useEffect(() => {
    if (content) {
      setEditorValue(content);
    }
  }, [content, slug]);

  return (
    <div className="content font-satoshi text-darkblue">
      {/* <Wrapper> */}
      {editorValue ? (
        <PortableText content={editorValue} serializers={serializers} />
      ) : null}
      {/* </Wrapper> */}
    </div>
  );
};

export default Content;
