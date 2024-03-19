"use client";

import Layout from "@/components/layout";
import BlogHeroSection from "@/components/sections/BlogHeroSection";
import { hrData } from "../Dynamic-Blog-Page/data";
import FeatureBlogs from "./FeatureBlogs";
import FeatureTopBlogSection from "@/components/sections/FeatureTopBlogSection";
import { featureBlogSection, intesetData } from "./data";
import InterestSection from "@/components/sections/InterestSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

// import Slicer from "../../../../sanity/slicer";
// import { BlogPageSectionsMap } from "@/components/sections";

const news = {
  title: { en: "Subscribe now for Multiple Tours & Latest blogs!" },
  subtitle: {
    en: "Be the first to know about our latest travel deals, special promotions, and insider tips",
  },
};

const MainBlogPage = ({ language, pageData }) => {
  const { layout } = pageData || {};

  console.log("blogPageData: ", pageData);

  return (
    <Layout
      breadcrumbs={[{ label: "Blog", value: "BLog" }]}
      locale={language}
      globals={layout}
      promo_banner={layout?.banner}
    >
      {/* MainBlog Page */}
      <BlogHeroSection data={hrData} />
      <FeatureBlogs />
      <FeatureTopBlogSection data={featureBlogSection} locale={language} />
      <InterestSection data={intesetData} locale={language} />
      <NewsletterSection data={news} locale={language} />

      {/* <Slicer
        locale={language}
        sections={
            data?.sections?.map((sec) =>
              sec?._type === 'all_blogs_section' ? { ...sec, blogs: allBlogs } : sec
            ) as any
        }
        sections={pageData?.sections}
        components={BlogPageSectionsMap}
      /> */}
    </Layout>
  );
};

export default MainBlogPage;
