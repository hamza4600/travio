import { getDynamicBlogPageSeo, getMainDynamicBlogPage } from "@/lib/sanity.Blogs";
import { urlForImage } from "../../../../../sanity/lib/image";
import dynamic from "next/dynamic";
const BlogPage =  dynamic(() => import("@/components/pages/Dynamic-Blog-Page"));

export async function generateMetadata({ params }) {
  const { language, slug } = params;
  const handle = slug[0];

  const seo = await getDynamicBlogPageSeo(handle);
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

export const revalidate = 36;

const Index = async ({ params }: { params: any }) => {
  
  const { language, slug } = params;
  const handle = slug[0];
  const pageData = await getMainDynamicBlogPage(handle);

  return (
      <BlogPage 
        locale={language} 
        pageData={pageData}
      />
  );
};

export default Index;
