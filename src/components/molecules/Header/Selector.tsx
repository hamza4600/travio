function Selector(props: {
  title: string;
  items: string[];
  selectedItem: number;
  selectedItemToggle: (item: number) => void;
}) {
  const { title, items, selectedItem, selectedItemToggle } = props;
  return (
    <div className="flex flex-col gap-3 font-satoshi">
      <p className="font-semibold mb-2">{title}</p>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              index === selectedItem ? "text-blue font-semibold " : ""
            } cursor-pointer hover:underline transition-all font-satoshi text-sm`}
            onClick={() => {
              selectedItemToggle(index);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Selector;
