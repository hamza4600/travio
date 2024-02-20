import MainBlogPage from "@/components/pages/Blogs-Page";
import { getBlogPage } from "@/lib/sanity.BlogPage";

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
  