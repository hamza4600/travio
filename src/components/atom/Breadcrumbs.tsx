import Link from "next/link";
import Container from "../molecules/container";

export interface Breadcrumb {
  label: string;
  value: string;
}

const Breadcrumbs = ({
  paths,
  locale,
}: {
  paths: Breadcrumb[];
  locale: string;
}) => {

  if (!paths?.length) return null;
  const lastIndex = paths.length - 1;
  
  return (
    <Container className="w-full font-satoshi my-2 md:my-5  mx-auto max-w-[1312px] px-4  tracking-tight flex md:items-center gap-1 text-[12px] max-md:leading-5  md:text-base  font-normal leading-tight md:leading-normal">
      <Link href={`/${locale}`} className="">
        Home
      </Link>
      {paths.map((path, i) => (
        <div
          key = {i + path.label}
          aria-label={path.label}
          className="flex items-center gap-1"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="max-md:h-4 max-md:w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3 10.5754C12.3006 10.6773 12.2807 10.7783 12.2416 10.8727C12.2024 10.9671 12.1447 11.0529 12.0717 11.1252L7.34915 15.7722C7.20094 15.9181 6.99992 16 6.79032 16C6.58071 16 6.37969 15.9181 6.23148 15.7722C6.08327 15.6264 6 15.4286 6 15.2223C6 15.0161 6.08327 14.8183 6.23148 14.6724L10.4031 10.5754L6.23935 6.47827C6.1104 6.33011 6.04302 6.13953 6.05067 5.9446C6.05832 5.74968 6.14044 5.56478 6.28062 5.42684C6.4208 5.28891 6.60871 5.20811 6.8068 5.20058C7.0049 5.19305 7.19858 5.25935 7.34915 5.38623L12.0717 10.0332C12.2171 10.1775 12.2991 10.3722 12.3 10.5754Z"
              className={i === lastIndex ? "fill-[#3FA9F5]" : "fill-darkblue"}
            />
          </svg>

          <Link
            className={
              i === lastIndex
                ? "text-[#3FA9F5] md:font-bold font-medium max-md:text-[12px] max-md:leading-5"
                : "text-darkblue"
            }
            href={`/${locale}${path.value}`}
          >
            {path.label}
          </Link>
        </div>
      ))}
    </Container>
  );
};

export default Breadcrumbs;
