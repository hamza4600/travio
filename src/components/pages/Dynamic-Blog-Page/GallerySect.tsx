import React from "react";

const GallerySect = () => {
  console.log("I Am here");
  return (
    <div className="mt-[67px] md:px-20 px-5 flex max-xl:flex-col max-xl:items-center gap-2.5 xl:gap-[30px]">
      <div className="">
        <img
          className="md:max-w-[647px] max-w-[335px] rounded-[16px]"
          src="/demo/img/img1.png"
          alt=""
        />
      </div>
      <div className="flex xl:flex-col gap-2.5 xl:gap-[30px]">
        <img
          src="/demo/img/img2.png"
          className="md:max-w-[300px] md:min-h-[200px] min-h-[108px] max-w-[162px] md:rounded-[16px] rounded-[8px]"
          alt=""
        />
        <img
          src="/demo/img/img2.png"
          className="md:max-w-[300px] md:min-h-[200px] min-h-[108px] max-w-[162px] md:rounded-[16px] rounded-[8px]"
          alt=""
        />
      </div>
      <div className="flex xl:flex-col gap-2.5 xl:gap-[30px]">
        <img
          src="/demo/img/img2.png"
          className="md:max-w-[300px] md:min-h-[200px] min-h-[108px] max-w-[162px] md:rounded-[16px] rounded-[8px]"
          alt=""
        />
        <img
          src="/demo/img/img2.png"
          className="md:max-w-[300px] md:min-h-[200px] min-h-[108px] max-w-[162px] md:rounded-[16px] rounded-[8px]]"
          alt=""
        />
      </div>
    </div>
  );
};

export default GallerySect;
