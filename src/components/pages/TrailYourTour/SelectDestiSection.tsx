import Image from "next/image";
import { tailorArray } from "./data";
import styled from "styled-components";

const Root = styled.div`
  .img-wraper {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
    padding: 0 20px;
  }

  .name-85 {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 0;
    padding: 6px 16px;
    width: fit-content;
    border-radius: 30px;
    backdrop-filter: blur(5px);
    color: white;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    .img-wraper {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .img-wraper {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    #qwa {
      height: 150px;
    }

    .name-85 {
      bottom: 5px;
      left: 5px;
      padding: 6px 16px;
      font-size: 12px;
      font-weight: 400;
    }

    @media (max-width: 375px) {
      .img-wraper {
        padding: 0px;
      }
    }
  }
`;
const SelectDestinationSection = ({
  setSelectedDestination,
  selectedDestination,
}) => {
  return (
    <Root>
      <div className="img-wraper">
        {tailorArray.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelectedDestination(item.title)}
              id="qwa"
              className={`relative w-full h-[224px] rounded-xl overflow-hidden cursor-pointer 
                                        ${
                                          item.size === "lg"
                                            ? "lg:col-span-2"
                                            : "col-span-1"
                                        }`}
            >
              <Image
                src={item.imgUrl}
                width={item.size === "lg" ? 500 : 250}
                height={item.size === "lg" ? 300 : 150}
                className="object-cover object-center w-full h-full"
                alt={item.title}
              />
              <h1
                className={`name-85 
                                        ${
                                          selectedDestination.includes(
                                            item.title
                                          )
                                            ? "bg-[#3FA9F5]"
                                            : "bg-[rgba(255, 255, 255, 0.40)]"
                                        }`}
              >
                {item.title}
              </h1>
            </div>
          );
        })}
      </div>
    </Root>
  );
};

export default SelectDestinationSection;
