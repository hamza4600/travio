import CurrentBlogPage from "@/components/pages/BlogPage";
import { getDynamicBlogPage } from "@/lib/sanity.Blog";

export const revalidate = 3600;

const Index = async ({ params }: { params: any }) => {
  const { handle, language } = params;
  console.log(handle);
  
  const pageData = await getDynamicBlogPage(handle);

  return (
    <CurrentBlogPage 
      locale={language} 
      pageData={pageData}
    />
  );
};

export default Index;
