import HomePage from "@/components/pages/HomePage";
import { getAllHomePage, getHomePageSeo } from "@/lib/sanity.HomePage";
import { urlForImage } from "../../../sanity/lib/image";

export async function generateMetadata({ params }) {
  const { language } = params

  const seo = await getHomePageSeo();
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
      images: {
        url: imgUrl,
        width: 1200,
        height: 630,
        alt: metaTitle
      },
      type: 'website',
      locale: language
    },
  }
}

export default async function Home() {
  const homePage = await getAllHomePage();

  return (
    <>
      <HomePage
        pageData={homePage}
      />
    </>
  );
}
