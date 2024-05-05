import { getDestinationPage, getDestinationPageSeo } from "@/lib/sanity.DestPage";
import dynamic from "next/dynamic";
import { urlForImage } from "../../../../../sanity/lib/image";

const DynamicDestionations = dynamic(() => import("@/components/pages/DynamicDestinations"));

const extractTags = (pageData) => {
  const sections = pageData?.data?.sections || [];
  const latestPosts = sections.find((section) => section?._type === "tour_selection_section");
  const tags = latestPosts?.tags || [];
  const destinationTags = latestPosts?.destination_tags || [];
  const priceTags = latestPosts?.price_tags || [];
  const durationTags = latestPosts?.duration_tags || [];
  // retun all array of tags
  return tags.concat(destinationTags, priceTags, durationTags).map((tag) => tag?.slug?.current);
};

export async function generateMetadata({ params }) {
  const { handle, language } = params;

  const seo = await getDestinationPageSeo(handle);
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

export const revalidate = 360;

const Index = async ({ params }: any) => {
  const { handle, language } = params;

  const destinationPage = await getDestinationPage(handle);
  const tagsData = extractTags(destinationPage);

  return (
    <DynamicDestionations 
      language={language}
      pageData={destinationPage}
      tags = {tagsData}
    />
  );
};

export default Index;
