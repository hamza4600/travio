import React from "react";
import Link from "next/link";

import Container from "@/components/molecules/container";

// export type IndexSectionProps = {
//   data: SanityIndexSection
// }
const OtherTours = (props) => {
  //   const [data, setData] = useState<PageData[]>([])
  //   useEffect(() => {
  //     const getdata = async () => {
  //       const result = await getAllPages()
  //       setData(result)
  //     }
  //     getdata()
  //   }, [getAllPages])

  const {
    data: { title, tours },
  } = props;

  return (
    <Container className="my-8 font-satoshi md:my-12 ">
      <h2 className="font-[700] text-darkblue text-[24px] tracking-[-0.72px]">
        {title}
      </h2>
      <hr className="text-yellow bg-yellow w-[85px] md:w-1/12 rounded-full border-b-[3px] border-b-[#FFBB0B] mt-2" />
      <div className="md:py-12 py-8 mds:mt-10 flex flex-wrap text-gray ">
        {tours?.map((item: any, index: any) => {
          return (
            <div
              key={index}
              className="text-xs md:text-sm leading-[20px] md:leading-[22px] font-medium flex space-x-2 pr-2"
            >
              <Link key={index} href={item?.url ? item?.url : "/#"}>
                {item?.text ? item?.text : "page"}
              </Link>
              <span className="text-gray ">|</span>
            </div>
          );
        })}
      </div>
      {title?.en === "Popular Tours" && (
        <hr className="text-[#F2FAFF] w-full rounded-full border-2 max-w-[1280px]" />
      )}
    </Container>
  );
};

export default OtherTours;
