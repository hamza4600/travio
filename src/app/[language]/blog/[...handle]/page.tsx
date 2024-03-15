import CurrentBlogPage from "@/components/pages/BlogPage";
import React from "react";

const Index = ({ params }: { params: any }) => {
  const { handle, language } = params;
  console.log(handle);
  return (
    <div>
      <CurrentBlogPage locale={language} />
    </div>
  );
};

export default Index;
