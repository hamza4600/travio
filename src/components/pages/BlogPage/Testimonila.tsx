import TravlerReviews from "@/components/sections/HappyTravelers";
import { getTestimonials } from "@/lib/sanity.DynamicBlog";
import useSWR from "swr";

const ArticalTestinomial = ({ locale }: { locale: string }) => {
  const { data, isLoading } = useSWR("getTestimonials", getTestimonials);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {/* {JSON.stringify(data.sections)} */}
      <div className="md:mb-[140px] mb-[50px]">
        <TravlerReviews data={data?.sections[0]} locale={locale} />
      </div>
    </>
  );
};

export default ArticalTestinomial;
