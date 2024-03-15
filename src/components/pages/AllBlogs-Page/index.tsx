"use client";

import Layout from "@/components/layout";
import Slicer from "../../../../sanity/slicer";
import { BlogPageSectionsMap } from "@/components/sections";

const MainBlogPage = ({ language, pageData }) => {
  const { layout } = pageData || {};

  console.log("blogPageData: ", pageData);

  return (
    <Layout
      breadcrumbs={[{ label: "Blog", value: "BLog" }]}
      locale={language}
      globals={layout}
    >
      MainBlog Page
      <Slicer
        locale={language}
        // sections={
        //     data?.sections?.map((sec) =>
        //       sec?._type === 'all_blogs_section' ? { ...sec, blogs: allBlogs } : sec
        //     ) as any
        // }
        sections={pageData?.sections}
        components={BlogPageSectionsMap}
      />
    </Layout>
  );
};

export default MainBlogPage;
