"use client";

import Layout from "@/components/layout";

import Slicer from "../../../../sanity/slicer";
import { BlogPageSectionsMap } from "@/components/sections";
// import NewsletterSection from "@/components/sections/NewsletterSection";

const MainBlogPage = ({ language, pageData, newsLetterSection }) => {
  const { layout, data } = pageData || {};

  console.log("blogPageData: ", data);

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
            sec?._type === "all_blogs_section" ? { ...sec, blogs: sec } : sec
          ) as any
        }
      />
      {/* <NewsletterSection data={newsLetterSection} locale={language} /> */}
    </Layout>
  );
};

export default MainBlogPage;
