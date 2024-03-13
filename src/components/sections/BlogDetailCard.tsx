import React from "react";

import Link from "next/link";
// import PortableText from 'react-portable-text'

// import { LocalizedString, localizedString } from '@/contexts/LocaleProvider'

// const PortableTextSerializer = {
//   locale_rich_text: (props: any) => {
//     return <p>{props.en[0].children[0].text}</p>
//   },
// }

function BlogDetailCard(props: {
  country: string;
  title: string;
  date: string;
  image: string;
  link: string;
  excerpt: string;
  author: string;
  className?: string;
}) {
  const { country, title, date, image, excerpt, link, author } = props;
  return (
    <div className="max-w-[410px] min-h-[30pxpx] rounded-xl mb-6 text-darkblue font-satoshi overflow-hidden shadow-xl shadow-[#f5f5f5]">
      <img src={image} alt="img" className="max-w-[410px] min-h-[300px]" />
      <div className="pt-3 px-[18px] pb-[18px] flex flex-col gap-3">
        <div>
          <p className="uppercase md:text-[14px] md:leading-[22px] text-primary font-bold">
            {country}
          </p>
          <h3 className="text-xll min-h-[64px] mt-1 max-w-[340px] font-[700] capitalize">
            {title}
          </h3>
        </div>
        <div className="min-h-[66px]">
          <span className="text-[14px] leading-[22px] text-gray font-medium">
            {excerpt}
          </span>
          <Link href={link} className="underline text-primary ml-1">
            Read More
          </Link>
        </div>
        <p className="text-gray text-xs">
          By {author} On {date}
        </p>
      </div>
    </div>
    // <Link
    //   href={link}
    //   className="max-w-[410px] mb-6 rounded-xl text-darkblue font-satoshi overflow-hidden shadow-xl shadow-[#f5f5f5]"
    // >
    //   <div
    //     className={`rounded-xl shadow-md w-full min-h-[530px] flex flex-col ${className}`}
    //   >
    //     <div className="min-h-[300px]">
    //       <img
    //         src={image}
    //         className="w-full h-full relative object-cover"
    //         alt="image"
    //       />
    //     </div>
    //     <div className="px-5 pt-3 text-sm  flex flex-col gap-1 h-fit">
    // <p className="uppercase md:text-[14px] md:leading-[22px] text-primary font-bold">
    //   {country}
    // </p>
    // <h3 className="text-xll -tracking-[1.3px] font-[700] capitalize">
    //   {title}
    // </h3>
    //       <div className="flex flex-col mb-3">
    //         <span className="text-[14px] leading-[22px] text-gray mt-3 font-medium gap-1 line-clamp-2">
    //           {excerpt}
    //         </span>
    //         <span className="underline text-primary">Read More</span>
    //       </div>
    // <p className="text-gray text-xs">
    //   By {author} On {date}
    // </p>
    //     </div>
    //   </div>
    // </Link>
  );
}

export default BlogDetailCard;
