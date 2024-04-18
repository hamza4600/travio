import dynamic from "next/dynamic";
import { getBlogPage, getBlogPageSeo } from "@/lib/sanity.BlogPage";
import { urlForImage } from "../../../../sanity/lib/image";
const MainBlogPage = dynamic(() => import("@/components/pages/AllBlogs-Page")) ;

export async function generateMetadata({ params }) {
  const { language } = params;

  const seo = await getBlogPageSeo();
  const meta = seo?.meta_data || {};
  const metaTitle = meta?.meta_title[language];
  const metaDescription = meta?.meta_description[language];
  const metaImage = meta?.meta_image;
  const keywords = meta?.meta_keywords[language];
  const imgUrl = urlForImage(metaImage?.asset?._ref);

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords,
    image: imgUrl,
    language: language,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: imgUrl,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
        {
          url: imgUrl, // Provide a larger image URL here
          width: 1600, // Adjust the width according to your preference
          height: 900, // Adjust the height according to your preference
          alt: metaTitle,
        },
      ],
      type: "website",
      locale: language,
    },
  };
}

export const revalidate = 3600;

export default async function Index({ params }) {
  const { language } = params;
  const blogPage = await getBlogPage();

  return (
    <>
      <MainBlogPage
        language={language}
        pageData={blogPage}
      />
    </>
  );
}
