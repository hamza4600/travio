import React from "react";
import LatestArticle from "../pages/BlogPage/LatestArticles";
import { Button } from "../ui/button";
import Container from "../molecules/container";

const Search = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.197266"
      width="31.8025"
      height="32"
      rx="15.9012"
      fill="#3FA9F5"
    />
    <path
      d="M15.4889 9.28711C12.1831 9.28711 9.49023 11.98 9.49023 15.2858C9.49023 18.5916 12.1831 21.2898 15.4889 21.2898C16.9009 21.2898 18.1996 20.7949 19.2259 19.9733L21.7246 22.4707C21.8507 22.5916 22.0191 22.6583 22.1938 22.6565C22.3685 22.6547 22.5355 22.5846 22.6591 22.4612C22.7827 22.3377 22.853 22.1708 22.855 21.9962C22.8571 21.8215 22.7906 21.653 22.6699 21.5267L20.1712 19.0281C20.9935 18.0001 21.4889 16.6995 21.4889 15.2858C21.4889 11.98 18.7947 9.28711 15.4889 9.28711ZM15.4889 10.6205C18.0742 10.6205 20.1543 12.7006 20.1543 15.2858C20.1543 17.871 18.0742 19.9564 15.4889 19.9564C12.9037 19.9564 10.8236 17.871 10.8236 15.2858C10.8236 12.7006 12.9037 10.6205 15.4889 10.6205Z"
      fill="white"
    />
  </svg>
);

function BlogSidebar() {
  const latestArticles = [
    {
      title: "Luxor and Karnak Temples Exploration",
      link: "/",
      image:
        "https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&q=60",
    },
    {
      title: "Luxor and Karnak Temples Exploration",
      link: "/",
      image:
        "https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&q=60",
    },
    {
      title: "Luxor and Karnak Temples Exploration",
      link: "/",
      image:
        "https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&q=60",
    },
  ];
  const relatedTours: any = [
    {
      title:
        "Luxor and Karnak Temples Exploration Luxor and Karnak Temples Exploration",
      link: "/",
      image:
        "https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&q=60",
      tourDetails: {
        days: 8,
        countries: 3,
        price: {
          initial_price: 1000,
          discounted_price: 800,
          currency_symbol: "$",
        },
      },
    },
    {
      title: "Luxor and Karnak Temples Exploration",
      link: "/",
      image:
        "https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&q=60",
      tourDetails: {
        days: 8,
        countries: 3,
        price: {
          initial_price: 1000,
          discounted_price: 800,
          currency_symbol: "$",
        },
      },
    },
    {
      title: "Luxor and Karnak Temples Exploration",
      link: "/",
      image:
        "https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&q=60",
      tourDetails: {
        days: 8,
        countries: 3,
        price: {
          initial_price: 1000,
          discounted_price: 800,
          currency_symbol: "$",
        },
      },
    },
  ];
  const tags = ["India", "Jaipur", "Rajasthan", "Monuments"];
  return (
    <Container>
      <div className="bg-primary w-[346px] mt-36 px-3 py-10 rounded-md">
        {/* Search */}
        <h4 className="font-semibold text-xl">Search articles</h4>
        <div className="border-[#FFBB0B] rounded-full my-1 w-[66px] md:border-b-[3px] border-b-2" />
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full my-2 rounded-2xl px-3 py-2"
          />
          <div className="absolute top-3 right-2">
            <Search />
          </div>
        </div>
        <hr className="my-5 opacity-40 text-gray" />
        {/* Latest Articles */}
        <h4 className="font-semibold text-xl">Latest articles</h4>
        <div className="border-[#FFBB0B] rounded-full my-1 w-[66px] md:border-b-[3px] border-b-2" />
        <div className="flex flex-col gap-3 py-5">
          {latestArticles.map((article, index) => {
            return <LatestArticle {...article} key={index} />;
          })}
        </div>
        <hr className="my-5 opacity-40 text-gray" />
        {/* Related Tours */}
        <h4 className="font-semibold text-xl">Related Tours</h4>
        <div className="border-[#FFBB0B] rounded-full my-1 w-[66px] md:border-b-[3px] border-b-2" />
        <div className="flex flex-col gap-3 py-5">
          {relatedTours.map((article: any, index: number) => {
            return <LatestArticle {...article} key={index} />;
          })}
        </div>
        <hr className="my-5 opacity-40 text-gray" />
        {/* Own tour */}
        <h4 className="font-semibold text-xl">Want to create your own tour</h4>
        <div className="border md:border-b-[3px] w-[66px] border-b-2 rounded-full my-1 border-[#FFBB0B]" />
        <Button variant={"sky"} className="my-5 py-3 w-full">
          Tailor your tour
        </Button>
        <hr className="my-5 opacity-40 text-gray" />
        {/* Tagd */}
        <h4 className="font-semibold text-xl">Tags</h4>
        <div className="border md:border-b-[3px] w-[66px] border-b-2 rounded-full my-1 border-[#FFBB0B]" />
        <div className="flex flex-wrap gap-2 py-5">
          {tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="rounded-md border border-darkblue border-opacity-10 bg-white p-2 text-gray font-medium"
              >
                {tag}
              </div>
            );
          })}
        </div>
        <hr className="my-5 opacity-40 text-gray" />
        <div className="flex flex-col items-center gap-6">
          <img
            src="/Traviio.png"
            className="max-w-[138px] min-h-[30px]"
            alt="logo"
          />
          <p className="md:text-darkblue text-gray text-[12px] leading-5 md:text-[16px] md:leading-7 text-center">
            Promo Trend Travel is a Travel Agency that was established 15 years
            ago in Egypt. Our aim is to ensure and provide a full service to our
            customers with professionalism, quality and creativity.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default BlogSidebar;
