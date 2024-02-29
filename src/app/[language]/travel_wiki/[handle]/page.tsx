import DynamicTravelWiki from "@/components/pages/DynamicTravelWiki";
import React from "react";

const Index = ({ params }: any) => {
  const { hanlde, language } = params;
  console.log(hanlde);

  return (
    <div>
      <DynamicTravelWiki language={language} />
    </div>
  );
};

export default Index;
