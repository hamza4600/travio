import dynamic from "next/dynamic";
const TailorYourTourPage = dynamic(() => import("@/components/pages/TrailYourTour"));

export default async function Index() {

  return (
    <>
      <TailorYourTourPage />
    </>
  );
}