import CurrentBlogPage from "@/components/pages/BlogPage";
import { getDynamicBlogPage } from "@/lib/sanity.DynamicBlog";

export const revalidate = 3600;

const Index = async ({ params }: { params: any }) => {
  const { handle, language } = params;
  console.log(handle);

  const firstSlug = handle[0];
  const pageData = await getDynamicBlogPage(firstSlug);

  return (
    <CurrentBlogPage 
      locale={language} 
      pageData={pageData}
    />
  );
};

export default Index;
