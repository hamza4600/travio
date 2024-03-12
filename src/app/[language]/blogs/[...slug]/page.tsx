import BlogPage from "@/components/pages/Dynamic-Blog-Page";
import React from "react";

const Index = ({ params }: { params: any }) => {
  const { language } = params;

  return (
    <div>
      <BlogPage locale={language} />
    </div>
  );
};

export default Index;
