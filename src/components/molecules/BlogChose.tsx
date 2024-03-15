import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";

interface BlogChooseProps {
  items: {
    title: string;
    link: string;
    images: string[];
  }[];
}

function BlogChoose(props: BlogChooseProps) {
  const pathname = useParams();

  const isMatch = `/blogs/${pathname?.slug[0]}`;

  console.log("pathname: ", isMatch);

  const { items } = props;
  return (
    <div className="flex gap-4 my-12 flex-wrap">
      {items
        ?.filter((item) => item.link === isMatch)
        .map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <BlogButton
                title={item.title}
                images={item.images}
                selected={true}
              ></BlogButton>
            </Link>
          );
        })}
      {items
        ?.filter((item) => item.link !== isMatch)
        .map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <BlogButton title={item.title} images={item.images}></BlogButton>
            </Link>
          );
        })}
    </div>
  );
}

export interface BlogButtonProps {
  title: string;
  images: string[];
  selected?: boolean;
}

function BlogButton(props: BlogButtonProps) {
  const { title, images, selected } = props;
  return (
    <div
      className={`w-fit flex items-center font-satoshi md:h-[42px] h-[28px] justify-center gap-2 md:py-3 md:px-4 px-3 rounded-md border-gray ${
        selected
          ? " bg-[#3FA9F5] "
          : " bg-transparent border-2 border-opacity-10"
      }`}
    >
      a
      {images?.map((image, index) => {
        return (
          <Image src={image} height={18} width={18} alt={title} key={index} />
        );
      })}
      <p
        className={`md:text-[14px] md:leading-[18px] text-[12px] leading-5 md:font-medium font-normal whitespace-nowrap ${
          selected ? "text-white" : "text-gray"
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default BlogChoose;
