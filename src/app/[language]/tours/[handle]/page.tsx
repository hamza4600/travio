import dynamic from "next/dynamic";

const DynamicTourPage = dynamic(
  () => import("@/components/pages/DynamicTourPage")
);

const Index = async ({ params }: any) => {
  const { handle, language } = params;

  console.log(handle);

  return (
    <>
      <DynamicTourPage language={language} />
    </>
  );
};

export default Index;
