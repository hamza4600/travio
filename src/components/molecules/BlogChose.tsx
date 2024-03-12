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

  console.log("pathname: ", pathname);

  const { items } = props;
  return (
    <div className="flex gap-4 my-12 flex-nowrap overflow-auto">
      {items
        .filter((item) => item.link === pathname?.slug[0])
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
        .filter((item) => item.link !== pathname?.slug[0])
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
      className={`min-w-[200px] flex items-cente font-satoshi justify-center gap-2 py-3 px-4 rounded-md border-gray ${
        selected
          ? " bg-[#3FA9F5] "
          : " bg-transparent border-2 border-opacity-10"
      }`}
    >
      {images.map((image, index) => {
        return (
          <Image src={image} height={18} width={18} alt={title} key={index} />
        );
      })}
      <p
        className={`text-sm font-medium whitespace-nowrap ${
          selected ? "text-white" : "text-gray"
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default BlogChoose;
