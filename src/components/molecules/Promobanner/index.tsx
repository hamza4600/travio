import Link from "next/link";
import { usePathname } from "next/navigation";

function PromoBanner({ banner, locale }: { banner?: any; locale: string }) {
  // console.log(banner);
  const pathname = usePathname();

  if (!banner) return null;
  const url = `/${locale}`;

  const isHome = pathname === url;
  // if (!banner.promo_banner) return null;
  return (
    <div
      className={`max-md:min-h-[32px] font-satoshi min-h-[40px] flex flex-col items-center justify-center z-10 text-white bg-darkblue ${
        isHome &&
        "rounded-t-[24px] max-xl:rounded-none relative z-20 max-w-[1280px] mx-auto"
      }`}
    >
      <div>
        <div
          className={
            "font-medium text-[11px] md:text-sm leading-5 md:leading-[24px] text-center "
          }
        >
          {banner.promo_banner.text?.[locale]}
          <Link
            href={banner.promo_banner.link.url}
            className="underline cursor-pointer font-bold"
          >
            {banner.promo_banner.link?.text?.[locale]}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PromoBanner;
