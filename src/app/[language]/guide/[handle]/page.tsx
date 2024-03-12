import { getGuidePage } from "@/lib/sanity.GuidePage";
import dynamic from "next/dynamic";
const GuidePage = dynamic(() => import("@/components/pages/Guide-Page"));

export const revalidate = 360;

const Index = async ({ params }: any) => {
  const { handle, language } = params;

  console.log(handle, language);

  const guidePage = await getGuidePage(handle);

  return (
    <GuidePage
      language={language}
      pageData={guidePage}
    />
  );
};

export default Index;
