import DynamicTravelWiki from "@/components/pages/DynamicTravelWiki";
import { getWikiPage } from "@/lib/sanity.WikiPage";

export const revalidate = 3600;

const Index = async ({ params }: any) => {
  const { handle, language } = params;
  console.log("params: ", handle);
  
  const firstSlug = handle[0];

  const pageData = await getWikiPage(firstSlug);

  return <DynamicTravelWiki language={language} pageData={pageData} />;
};

export default Index;
