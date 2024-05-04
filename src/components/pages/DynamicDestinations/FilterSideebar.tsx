import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { filterItems } from "./data";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



export default function FilterSidebar({ locale, data }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
  
    const isSelected = (item: string) => searchParams?.getAll("tag").includes(item?.toLowerCase());
  
    const handleTagClick = (item: string) => {
      const existingTags = searchParams?.getAll("tag");
      const newTags = Array.isArray(existingTags) ? existingTags : [];
      const tag = item.toLowerCase();
      if (newTags.includes(tag)) {
        newTags.splice(newTags.indexOf(tag), 1);
      } else {
        newTags.push(tag);
      }
      if (pathname) {
        router.push(`${pathname}?${newTags.map((t) => `tag=${t}`).join("&")}`, {
          scroll: false,
        });
      }
    };
    
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-3 font-satoshi shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] rounded-t-[16px] max-md:p-4 max-md:rounded-b-[16px]"
      >
        {filterItems.map((item: any, index: number) => (
          <AccordionItem key={index} value={item.name}>
            <AccordionTrigger
              className={`text-darkblue md:text-lg font-medium p-[18px] bg-[#F2FAFF] ${
                index == 0 && " md:rounded-t-[16px]"
              } max-md:rounded-[8px\]`}
            >
              {item.name?.[locale]}
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 gap-y-2.5 justify-between items-center">
              {data.map((country: any, index: number) => (
                <div key={index} className="flex gap-2 px-6 items-center py-2.5">
                  <input
                    type="radio"
                    className="w-3.5 h-3.5 hover:cursor-pointer"
                    id={country.slug.current}
                    checked={isSelected(country.slug.current) ? true : false}
                    onClick={() => {
                      handleTagClick(country.slug.current)
                      isSelected(country.slug.current ? "true" : "false")
                    } 
                  }
                  />
                  <label
                    className="text-xs text-gray font-medium hover:cursor-pointer"
                    htmlFor={country.slug.current}
                  >
                    {country?.name?.[locale]}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }