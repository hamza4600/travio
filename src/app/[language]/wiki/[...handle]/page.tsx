import DynamicTravelWiki from "@/components/pages/DynamicTravelWiki";
import { getWikiPage, getWikiPageSeo } from "@/lib/sanity.WikiPage";
import { urlForImage } from "../../../../../sanity/lib/image";
import { getnewLetterSection } from "@/lib/sanity.NewLetter";

export async function generateMetadata({ params }) {
  const { language, handle } = params;

  const seo = await getWikiPageSeo(handle);
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
  console.log("handle: ", handle);  
  const firstSlug = handle[0];

  const pageData = await getWikiPage(firstSlug);
  const newLetterSection = await getnewLetterSection();

  return (
    <DynamicTravelWiki
      language={language}
      pageData={pageData}
      newLetterSection={newLetterSection}
    />
  );
};

export default Index;
