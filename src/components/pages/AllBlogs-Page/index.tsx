"use client";

import Layout from "@/components/layout";

import Slicer from "../../../../sanity/slicer";
import { BlogPageSectionsMap } from "@/components/sections";

const MainBlogPage = ({ language, pageData }) => {
  const { layout, data, allBlogs } = pageData || {};
  console.log("MainBlogPage -> pageData", allBlogs);
  return (
    <Layout
      breadcrumbs={[{ label: "Blog", value: "BLog" }]}
      locale={language}
      globals={layout}
      promo_banner={layout?.banner}
    >
      {/* MainBlog Page */}
      <Slicer
        locale={language}
        components={BlogPageSectionsMap}
        sections={
          data?.sections?.map((sec) =>
            sec?._type === 'all_blogs_section' ? { ...sec, blogs: allBlogs } : sec
          ) as any
        }
      />
    </Layout>
  );
};

export default MainBlogPage;
