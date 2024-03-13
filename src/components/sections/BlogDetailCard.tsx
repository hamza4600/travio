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
  const { country, title, date, image, excerpt, link, author, className } =
    props;
  return (
    <Link
      href={link}
      className="max-w-[410px] mb-6 min-h-[530px] rounded-xl text-darkblue font-satoshi overflow-hidden shadow-xl shadow-[#f5f5f5]"
    >
      {/* {JSON.stringify({props})} */}
      <div
        className={`rounded-xl shadow-md w-full h-full min-h-fit flex flex-col ${className}`}
      >
        <div className="min-h-[300px]">
          <img src={image} className="w-full h-full object-cover" alt="image" />
        </div>
        <div className="px-5 pt-3 text-sm  flex flex-col gap-1 h-fit">
          <p className="uppercase md:text-[14px] md:leading-[22px] text-primary font-bold">
            {country}
          </p>
          <h3 className="text-xll -tracking-[1.3px] font-[700] capitalize">
            {title}
          </h3>
          <div className="flex flex-col mb-3">
            <span className="text-[14px] leading-[22px] text-gray mt-3 font-medium gap-1 line-clamp-2">
              {excerpt}
            </span>
            <span className="underline text-primary">Read More</span>
          </div>
          <p className="text-gray text-xs">
            By {author} On {date}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogDetailCard;
