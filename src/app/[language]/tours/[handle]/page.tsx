import { getTourPage } from "@/lib/sanity.TourePage";
import dynamic from "next/dynamic";

const DynamicTourPage = dynamic(() => import("@/components/pages/DynamicTourPage"));

const Index = async ({ params }: any) => {
  const { handle, language } = params;
  
  const tourPage = await getTourPage();
  
  console.log('tourPage', handle)
  
  return (
    <>
      <DynamicTourPage language={language} pageData={tourPage} />
    </>
  );
};

export default Index;
