// import TravlerReviews from "@/components/sections/HappyTravelers";
import { getTestimonials } from "@/lib/sanity.DynamicBlog";
import useSWR from "swr";


const ArticalTestinomial = () => {
    const { data, isLoading } = useSWR('getTestimonials', getTestimonials)

    if(isLoading) return <div>Loading...</div>
    
    return (
        <>
        {JSON.stringify(data)}
        {/* <TravlerReviews 
            data={data}
            locale='en'
        /> */}
        </>
    )
}

export default ArticalTestinomial;