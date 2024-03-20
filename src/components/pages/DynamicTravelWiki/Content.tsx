import React, { useEffect, useState } from "react";
import PortableText from "react-portable-text";
import { useSearchParams } from "next/navigation";

const Content = ({ sections }) => {
  const router = useSearchParams();
  const slug = router?.get("slug");
  console.log("slug: ", router?.get("slug"));

  const [editorValue, setEditorValue] = useState(null);

  const findContent = (sections, slug) => {
    for (let section of sections) {
      for (let subSection of section.sections) {
        for (let nestedSection of subSection.second_nested_section) {
          if (nestedSection.slug.current === slug) {
            return nestedSection.content.en;
          }
        }
      }
    }
  };

  const content = findContent(sections, slug);
  console.log("content: ", content);

  useEffect(() => {
    if (content) {
      setEditorValue(content);
    }
  }, [content, slug]);

  return (
    <div className="content">
      {editorValue ? (
        <PortableText
          content={editorValue}
          className="text-darkblue md:text-[16px] md:leading-7 text-[12px] leading-5"
          serializers={{}}
        />
      ) : null}
    </div>
  );
};

export default Content;
