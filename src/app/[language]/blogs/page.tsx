import MainBlogPage from "@/components/pages/AllBlogs-Page";
import { getBlogPage } from "@/lib/sanity.BlogPage";
import { getnewLetterSection } from "@/lib/sanity.NewLetter";

export const revalidate = 3600;

export default async function Index({ params }) {
  const { language } = params;
  const blogPage = await getBlogPage();
  const newsLetterSection = getnewLetterSection();

  console.log("NewsLetterSection:", newsLetterSection);

  return (
    <>
      <MainBlogPage
        language={language}
        pageData={blogPage}
        newsLetterSection={newsLetterSection}
      />
    </>
  );
}
