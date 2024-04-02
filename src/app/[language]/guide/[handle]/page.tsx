import { getGuidePage, getGuidePageSeo } from "@/lib/sanity.GuidePage";
import dynamic from "next/dynamic";
import { urlForImage } from "../../../../../sanity/lib/image";
const GuidePage = dynamic(() => import("@/components/pages/Guide-Page"));

export async function generateMetadata({ params }) {
  const { language, handle } = params;

  const seo = await getGuidePageSeo(handle);
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
      ],
      type: "website",
      locale: language,
    },
  };
}

export const revalidate = 3600;

const Index = async ({ params }: any) => {
  const { handle, language } = params;

  const guidePage = await getGuidePage(handle);

  return <GuidePage language={language} pageData={guidePage} />;
};

export default Index;
