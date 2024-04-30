import Link from "next/link";

function Selector(props: {
  title: string;
  items: Array<{ name: string; slug: string }>;
  selectedItem: number;
  locale: string;
  selectedItemToggle: (item: number) => void;
}) {
  const { title, items, selectedItem, locale, selectedItemToggle } = props;
  
  return (
    <div className="flex flex-col gap-3 font-satoshi">
      <p className="font-semibold mb-2">{title}</p>
      {items.map((item, index) => {
        return (
          <Link
            href={`${locale}/destinations${item?.slug}`}
            key={index}
            className={`${
              index === selectedItem ? " text-primary font-medium " : " text-gray  "
            } cursor-pointer hover:underline transition-all font-satoshi text-base `}
            onMouseEnter={() => {
              selectedItemToggle(index);
            }}
          >
            {item?.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Selector;
