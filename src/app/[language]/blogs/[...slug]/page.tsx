import BlogPage from "@/components/pages/Dynamic-Blog-Page";
import { getMainDynamicBlogPage } from "@/lib/sanity.Blogs";
export const revalidate = 360;

const Index = async ({ params }: { params: any }) => {
  
  const { language, handle } = params;

  const pageData = await getMainDynamicBlogPage(handle);

  return (
      <BlogPage 
        locale={language} 
        pageData={pageData}
      />
  );
};

export default Index;
