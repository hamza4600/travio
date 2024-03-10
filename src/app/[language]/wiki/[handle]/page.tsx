import DynamicTravelWiki from "@/components/pages/DynamicTravelWiki";
import { getWikiPage } from "@/lib/sanity.WikiPage";

export const revalidate = 3600;

const Index  = async ({ params }: any) => {
  const { hanlde, language } = params;
  console.log(hanlde);

  const pageData = await getWikiPage();

  return (
    <DynamicTravelWiki 
      language={language} 
      pageData = {pageData}
    />
  );
};

export default Index;
