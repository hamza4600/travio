import React from "react";
import Image from "next/image";
import PortableText from "react-portable-text";

import { PropsWithLocale } from "../../../../sanity/lib/client";
import { decodeAssetId, urlFor } from "../../../../sanity/lib/client";
import { SanityContentSection } from "../../../../sanity/lib/types";

import Container from "@/components/molecules/container";
export type ContentSectionProps = {
  data: SanityContentSection;
  locale: string;
};

const ContentSection = (props: PropsWithLocale<ContentSectionProps>) => {
  const {
    data: { title, tagline, content },
    locale,
  } = props;
  const PortableTextSerializer = {
    h3: (props: any) => {
      return (
        <div className="">
          <p
            className="font-bold text-2xl font-satoshi text-darkblue"
            {...props}
          />
          <div className="md:w-[74px] border-b my-2 md:border-b-[3px] border-[#FFBB0B]  rounded-full" />
        </div>
      );
    },

    layout_group: (props: any) => {
      return (
        <div className="flex w-full font-satoshi text-darkblue max-md:flex-col  gap-4 md:gap-12">
          {props.items.map((item: any, index: number) => (
            <PortableText
              key={index}
              className={
                item._type === "content_image"
                  ? `w-full ${
                      index
                        ? `order-first md:order-last`
                        : `order-last md:order-first`
                    }`
                  : ""
              }
              content={item}
              serializers={PortableTextSerializer}
            />
          ))}
        </div>
      );
    },

    layout_stack: (props: any) => {
      return (
        <div
          style={{
            gridTemplateColumns:
              props.items?.[0]?._type === "layout_group" && props.grid
                ? `repeat(${props.items?.[0].items?.length}, minmax(0, auto))`
                : "",
          }}
          className={
            props.grid
              ? "md:grid gap-[10px] md:gap-[18px] flex flex-col"
              : "flex flex-col gap-[18px]"
          }
        >
          {props.items
            .map((item: any) =>
              props.grid && item?._type === "layout_group" ? (
                item.items?.map((item: any, i: number) => (
                  <PortableText
                    // className="flex-1"
                    key={i}
                    content={item}
                    serializers={PortableTextSerializer}
                  />
                ))
              ) : (
                <PortableText
                  key={Math.random()}
                  // className="flex-1"
                  content={item}
                  serializers={PortableTextSerializer}
                />
              )
            )
            .flat()}
        </div>
      );
    },
    content_text: (props: any) => {
      return <p style={{ color: props.styles?.color }}>{props.text}</p>;
    },
    content_image: (props: any) => {
      const { dimensions } = decodeAssetId(props.image.asset._ref);

      return (
        <figure className="shrink-0 w-full  lg:w-[400px]  box-border">
          {/* <p>
            JSALKDJ:LSAKD:LSAKD:LKSA:LDKSA:LDK:LSAKD:LSAKD:LSAKD:LKSD:LKSA:LDK
          </p> */}
          <Image
            alt=""
            src={urlFor(props.image)}
            width={dimensions?.width}
            height={dimensions?.height}
            className=" object-fill w-full h-auto"
          />
          {/* <div className="">
            <LocalizedString text={props.image.alt} />
          </div> */}
          <figcaption className="text-center mt-2 font-satoshi text-darkblue text-opacity-75 text-xs md:text-sm font-normal md:font-medium leading-tight md:leading-snug">
            {props.alt}
          </figcaption>
        </figure>
      );
    },
  };

  return (
    <Container
      id="overview"
      className="mt-[60px] mx-auto max-w-[1312px] px-4 mb-20 font-satoshi text-darkblue"
    >
      <div className="mb-[30px] md:mb-12 flex flex-col items-center font-satoshi">
        <p className="text-primary text-xs md:text-base  font-medium uppercase leading-tight md:leading-normal">
          {tagline?.[locale]}
        </p>

        <h2 className="text-[24px] md:text-[40px] leading-[32px] md:leading-tight text-darkblue -tracking-[1.2px] mt-2 md:mt-3  w-fit  font-bold">
          {title?.[locale]}
          <div className="w-1/2 mx-auto border-b-[3px] border-[#FFBB0B] rounded-full mt-2.5" />
        </h2>
      </div>

      <div className="text-sm md:text-base mt-[48px] text-darkblue  leading-[24px] font-normal">
        {content[locale] && (
          <PortableText
            content={content[locale]}
            className="flex flex-col gap-[10px] font-[500] md:gap-6 leading-normal md:leading-7 md:tracking-wide"
            serializers={PortableTextSerializer}
          />
        )}
      </div>
    </Container>
  );
};

export default ContentSection;
