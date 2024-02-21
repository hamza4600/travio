import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import PortableText from 'react-portable-text'

// import { LocalizedString, localizedString } from '@/contexts/LocaleProvider'

// const PortableTextSerializer = {
//   locale_rich_text: (props: any) => {
//     return <p>{props.en[0].children[0].text}</p>
//   },
// }

function BlogDetailCard(props: {
  country: string
  title: string
  date: string
  image: string
  link: string
  excerpt: string
  author: string
  className?: string
}) {
  const { country, title, date, image, excerpt, link, author, className } = props
  return (
    <Link
      href={link}
      className="lg:w-[350px] w-[320px] rounded-xl overflow-hidden shadow-xl shadow-[#f5f5f5] h-fit"
    >
      {/* {JSON.stringify({props})} */}
      <div className={`rounded-xl shadow-md w-full h-full min-h-fit flex flex-col ${className}`}>
        <div className="min-h-[250px] grow w-full relative">
          <Image src={image} className="w-full h-full object-cover" fill alt="image" />
        </div>
        <div className="px-5 pt-3 text-sm  pb-5 flex flex-col gap-1 h-fit">
          <p className="uppercase text-blue text-lg font-semibold">{country}</p>
          <h3 className=" text-xl font-[700] capitalize">{title}</h3>
          <div className="flex flex-col mb-3">
            <span className="text-md text-gray mt-3 font-semibold gap-1 line-clamp-2">
              {excerpt}
            </span>
            <span className="underline text-blue">Read More</span>
          </div>
          <p className="text-gray text-xs">
            By {author} On {date}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default BlogDetailCard
