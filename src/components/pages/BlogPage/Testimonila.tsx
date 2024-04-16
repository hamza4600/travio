import TravlerReviews from "@/components/sections/HappyTravelers";
import { getTestimonials } from "@/lib/sanity.DynamicBlog";
import useSWR from "swr";

const ArticalTestinomial = () => {
  const { data, isLoading } = useSWR("getTestimonials", getTestimonials);

  if (isLoading) return <div>Loading...</div>;
  // console.log("Testi: ", data.sections[0])

  return (
    <>
      {/* {JSON.stringify(data.sections)} */}
      <div className="mb-[140px]">
        <TravlerReviews data={data?.sections[0]} locale="en" />
      </div>
    </>
  );
};

export default ArticalTestinomial;
