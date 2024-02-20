import { getTailorPage } from "@/lib/sanity.TailorPage";
import dynamic from "next/dynamic";
const TailorYourTourPage = dynamic(() => import("@/components/pages/TrailYourTour"));

export default async function Index({ params }) {

  const { language } = params;
  const tailorPage = await getTailorPage();

  return (
    <>
      <TailorYourTourPage
        language={language}
        pageData={tailorPage}
      />
    </>
  );
}