"use client";

import Layout from "@/components/layout";

import Slicer from "../../../../sanity/slicer";
import { BlogPageSectionsMap } from "@/components/sections";

const MainBlogPage = ({ language, pageData }) => {
  const { layout, data } = pageData || {};
  console.log("MainBlogPage -> pageData", data);
  return (
    <Layout
      // 
      breadcrumbs={[{ label: "Blog", value: "BLog" }]}
      locale={language}
      globals={layout}
      promo_banner={layout?.banner}
    >
      {/* MainBlog Page */}
      <Slicer
        locale={language}
        components={BlogPageSectionsMap}
        sections={data?.sections?.map((sec) => sec) as any}
      />
    </Layout>
  );
};

export default MainBlogPage;
