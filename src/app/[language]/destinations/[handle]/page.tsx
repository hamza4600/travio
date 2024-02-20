import dynamic from "next/dynamic";

const DynamicDestionations = dynamic(
  () => import("@/components/pages/DynamicDestinations")
);

const Index = async ({ params }: any) => {
  const { handle, language } = params;

  console.log(handle, language);

  return (
    <>
      <div>
        <DynamicDestionations language={language} />
      </div>
    </>
  );
};

export default Index;
