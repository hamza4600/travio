import React from "react";
// import PortableText from "react-portable-text";

const BlogContentSection = ({ data }: any) => {
  return (
    <div className="my-10 flex flex-col md:gap-[68px] gap-[50px] md:px-20 px-5">
      {data.map((item: any, index: any) => {
        return (
          <div key={index} className="text-black gap-[18px] flex flex-col ">
            {/* {item.title?.en && (
              <PortableText content={item.title?.en} serializers={{}} />
            )}
            {item.content?.en && (
              <PortableText content={item.content?.en} serializers={{}} />
            )} */}

            {item.title?.en && (
              <div className="flex flex-col gap-[10px] md:text-[14px] md:leading-[34px] font-bold text-[20px] leading-[30px]">
                <p className="text-[24px] leading-[34px] font-bold text-darkblue">
                  {item.title?.en}
                </p>
                <div className="border md:border-b-[3px] border-b border-[#FFBB0B] md:w-[88px} w-[101px]" />
                <p className="text-darkblue md:text-[16px] md:leading-7 text-[12px] font-normal leading-5">
                  {item.desc}
                </p>
                <div className="">
                  <div className="md:mt-[60px] mt-[50px]">
                    <p className="text-[24px] leading-[34px] font-bold text-darkblue">
                      {item.imageTitle}
                    </p>
                    <div className="border md:border-b-[3px] border-b border-[#FFBB0B] mt-2.5 md:w-[88px} w-[101px]" />
                  </div>
                  <img
                    src={item.img}
                    className="xl:max-w-[896px] xl:min-h-[567px] max-sm:w-full mt-[18px]"
                    alt=""
                  />
                  <p className="text-center text-[14px] leading-[22px] text-[rgba(20, 13, 49, 0.75)] mt-2 font-medium">
                    {item.imgAlt}
                  </p>
                </div>
              </div>
            )}
            {item.content?.en && (
              <p className="text-darkblue md:text-[16px] md:leading-7 text-[12px] leading-5">
                {item.content?.en}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BlogContentSection;
