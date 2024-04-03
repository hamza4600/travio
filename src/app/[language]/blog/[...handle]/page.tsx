import CurrentBlogPage from "@/components/pages/BlogPage";
// import { getArticalBlogPage, getArticalPageSeo } from "@/lib/sanity.DynamicBlog";
import { getArticalBlogPage } from "@/lib/sanity.DynamicBlog";
// import { urlForImage } from "../../../../../sanity/lib/image";

// export async function generateMetadata({ params }) {
//   const { handle, language } = params;
//   const slug = handle[0];

//   const seo = await getArticalPageSeo(slug);

//   const meta = seo?.meta_data || {};
//   const metaTitle = meta?.meta_title[language];
//   const metaDescription = meta?.meta_description[language];
//   const metaImage = meta?.meta_image;
//   const keywords = meta?.meta_keywords[language];
//   const imgUrl = urlForImage(metaImage?.asset?._ref);

//   return {
//     title: metaTitle,
//     description: metaDescription,
//     keywords: keywords,
//     image: imgUrl,
//     language: language,
//     openGraph: {
//       title: metaTitle,
//       description: metaDescription,
//       images: [
//         {
//           url: imgUrl,
//           width: 1200,
//           height: 630,
//           alt: metaTitle,
//         },
//         {
//           url: imgUrl, // Provide a larger image URL here
//           width: 1600, // Adjust the width according to your preference
//           height: 900, // Adjust the height according to your preference
//           alt: metaTitle,
//         },
//       ],
//       type: "website",
//       locale: language,
//     },
//   };
// }
export const revalidate = 3600;

const Index = async ({ params }: { params: any }) => {
  const { handle, language } = params;
  console.log(handle);

  const firstSlug = handle[0];
  const pageData = await getArticalBlogPage(firstSlug);

  return (
    <CurrentBlogPage 
      locale={language} 
      pageData={pageData}
    />
  );
};

export default Index;
