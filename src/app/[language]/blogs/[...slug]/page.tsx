import BlogPage from "@/components/pages/Dynamic-Blog-Page";
import { getMainDynamicBlogPage } from "@/lib/sanity.Blogs";
export const revalidate = 360;

const Index = async ({ params }: { params: any }) => {
  
  const { language, slug } = params;
  const handle = slug[0];
  const pageData = await getMainDynamicBlogPage(handle);

  return (
      <BlogPage 
        locale={language} 
        pageData={pageData}
      />
  );
};

export default Index;
