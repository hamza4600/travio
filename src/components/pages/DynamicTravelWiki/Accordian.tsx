import { useState } from "react";

const CustomAccordion = ({ data }) => {
  const [open, setOpen] = useState(-1);
  const [isShadow, setShadow] = useState<number>(-1);
  const [selected, setSelected] = useState<number>(999);

  // for testing later it will change to the exact logic
  const [filteredItems, setFilteredItems] = useState(-1);

  return (
    <div className="flex flex-col md:gap-[18px] gap-[15px]">
      {data.map((data: any, index: number) => (
        <div
          className={`md:w-[390px] w-[335px] ${
            isShadow === index && "rounded-b-2xl shadow-md"
          }`}
          key={index}
        >
          <div>
            <button
              key={index}
              className={`font-satoshi md:text-lg text-[14px] leading-6 py-3 px-4 bg-primary rounded-t-2xl w-full flex justify-between items-start ${
                isShadow === index && "font-medium"
              }`}
              aria-expanded={isShadow === index}
              aria-controls={`accordion-panal-${index}`}
              id={`accordion-button-${index}`}
              onClick={() => {
                setShadow(isShadow === index ? -1 : index);
                setSelected(index);
                setOpen(-1);
              }}
            >
              {data.title}
              <img
                src="/down_icon.svg"
                height={20}
                width={20}
                alt=""
                className={`${
                  isShadow === index ? "-rotate-180" : ""
                } transition-all`}
              />
            </button>

            {data.accrData.map(
              (accData: any, idx: number) =>
                selected === index && (
                  <div
                    key={idx}
                    className="font-satoshi md:px-6 px-[18px] py-[10px] flex-col gap-5 cursor-pointer"
                    id={`accordion-panal-${index}`}
                    aria-labelledby={`accordion-button-${index}`}
                    role="region"
                    aria-hidden={isShadow === index}
                  >
                    <div
                      className="flex gap-5"
                      onClick={() =>
                        setOpen((prev) => (prev === idx ? -1 : idx))
                      }
                    >
                      <img
                        src="/down_icon.svg"
                        height={20}
                        width={20}
                        alt=""
                        className={`${
                          open === idx ? "-rotate-180" : ""
                        } transition-all`}
                      />

                      <p
                        className={`md:text-[14px] md:leading-[22px] text-[12px] leading-5 ${
                          open === idx
                            ? " text-primary font-medium"
                            : "text-gray"
                        }`}
                      >
                        {accData.name}
                      </p>
                    </div>

                    {accData.data.map((acData: any, i: number) => (
                      <div
                        onClick={() =>
                          setFilteredItems((prev) => (prev === i ? -1 : i))
                        }
                        key={i}
                        className={`${open === idx ? "" : "hidden"} text-gray
                            font-satoshi flex items-center gap-2 pl-10 mt-4
                            `}
                      >
                        {filteredItems === i ? (
                          <img
                            src={"/minus_icon_blue.svg"}
                            width={20}
                            height={20}
                            alt="Minus Icon"
                          />
                        ) : (
                          <img
                            src={"/minus_icon.svg"}
                            width={20}
                            height={20}
                            alt="Minus Icon"
                          />
                        )}
                        <p
                          className={`md:text-[14px] md:leading-[22px] text-[12px] leading-5 ${
                            filteredItems === i ? "text-primary" : "text-gray"
                          }`}
                        >
                          {acData.toShow}
                        </p>
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
