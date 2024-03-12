import DynamicTravelWiki from "@/components/pages/DynamicTravelWiki";
import { getWikiPage } from "@/lib/sanity.WikiPage";

export const revalidate = 3600;

const Index = async ({ params }: any) => {
  const { hanlde, language } = params;

  console.log("params: ", params);

  console.log("hanlde: ", hanlde);

  const pageData = await getWikiPage(hanlde);

  return <DynamicTravelWiki language={language} pageData={pageData} />;
};

export default Index;
