import React from "react";

// import { urlFor } from '../../../../sanity/lib/client'

const ArticleHeroSection = ({ data }: any) => {
  return (
    <div className="mt-[30px]">
      <div className="flex justify-between">
        <div className="md:px-20 px-5">
          <h1 className="md:text-[40px] md:leading-[50px] text-[20xp] leading-[30px] text-darkblue font-bold">
            {data.title?.en}
          </h1>
          <h2 className="my-[18px] md:font-bold font-normal mb-7 md:text-darkblue text-gray md:text-[14px] md:leading-[22px] text-[12px] leading-5">
            By {data?.author?.name?.en} On{" "}
            <span className="text-[#FFBB0B] md:text-[14px] md:leading-[22px] md:font-bold font-medium text-[12px] leading-5">
              {data?.time?.en}
            </span>{" "}
          </h2>
        </div>
        <div className="bg-[#3FA9F5] flex items-center max-w-5 h-[60px] rounded-l-[4px] hover:cursor-pointer md:hidden">
          <DropDown />
        </div>
      </div>

      <div className="flex gap-[18px] items-center pl-[18px]">
        <div className="w-full max-lg:hidden max-w-[44px]">
          <div className="bg-primary py-2.5 flex flex-col gap-[10px] items-center">
            <img src={"/demo/share.png"} alt="share" />
            <p className="text-primary font-bold text-[10px] leading-3">
              Share
            </p>
          </div>
          <div className="p-3 bg-[#2F508D]">
            <img src={"/demo/uim_facebook-f.png"} alt="share" />
          </div>
          <div className="bg-[#2196F3] p-3">
            <img src={"/demo/msngr.png"} alt="share" />
          </div>
          <div className="bg-[#0077B5] p-3">
            <img src={"/demo/lkdn.png"} alt="share" />
          </div>
          <div className="bg-[#33CCFE] p-3">
            <img src={"/demo/mdi_twitter.png"} alt="share" />
          </div>
        </div>
        <img
          src={data.cover_image}
          className="lg:max-w-[896px] lg:min-h-[500px]"
          alt=""
        />
      </div>

      <p className="mt-7 md:px-20 px-5 font-normal md:font-medium leading-7 opacity-70 text-[rgba(20, 13, 49, 0.75)] text-[16px]">
        {" "}
        {data.introduction?.en}{" "}
      </p>
    </div>
  );
};

function DropDown() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.00001 7.5251C4.99944 7.42128 5.01835 7.31837 5.05566 7.22226C5.09296 7.12615 5.14793 7.03873 5.2174 6.96502L9.71509 2.23199C9.85625 2.08345 10.0477 2 10.2473 2C10.4469 2 10.6384 2.08345 10.7795 2.23199C10.9207 2.38053 11 2.582 11 2.79207C11 3.00214 10.9207 3.2036 10.7795 3.35214L6.80658 7.5251L10.772 11.6981C10.8949 11.849 10.959 12.0431 10.9517 12.2416C10.9445 12.4401 10.8662 12.6285 10.7327 12.769C10.5992 12.9094 10.4203 12.9917 10.2316 12.9994C10.043 13.0071 9.85849 12.9396 9.71509 12.8103L5.2174 8.07729C5.07891 7.93036 5.00084 7.73204 5.00001 7.5251Z"
        fill="white"
      />
    </svg>
  );
}

export default ArticleHeroSection;
