import PaymentPage from "@/components/pages/Payment";
import {
  getPaymentPage,
  getTourPaymentPageSeo,
} from "@/lib/sanity.PaymentPage";
import { urlForImage } from "../../../../../../sanity/lib/image";
import { getPromoCodes } from "@/lib/sanity.Promo";

export async function generateMetadata({ params }) {
  const { handle, language } = params;

  const seo = await getTourPaymentPageSeo(handle);
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
      type: "website",
      locale: language,
    },
  };
}

export const revalidate = 3600;

const Index = async ({ params }: any) => {
  const { handle, language } = params;
  const pageData = await getPaymentPage(handle);
  const promocodes = await getPromoCodes();
  return (
    <PaymentPage
      slug={handle}
      globals={pageData.layout}
      promo={promocodes}
      locale={language}
      data={pageData.data}
    />
  );
};

export default Index;
