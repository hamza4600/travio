import { getTailorPage } from "@/lib/sanity.TailorPage";
import dynamic from "next/dynamic";
const TailorYourTourPage = dynamic(() => import("@/components/pages/TrailYourTour"));

// revalidate: 1 hour
export const revalidate = 3600 

export default async function Index({ params }) {

  const { language } = params;
  const tailorPage = await getTailorPage();

  return (
    <>
      <TailorYourTourPage
        language={language}
        data={tailorPage}
      />
    </>
  );
}