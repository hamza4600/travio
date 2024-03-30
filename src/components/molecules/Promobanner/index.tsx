import Link from "next/link";

import Container from "../container";
import { usePathname } from "next/navigation";

function PromoBanner({ banner, locale }: { banner?: any; locale: string }) {
  // console.log(banner);
  const pathname = usePathname();

  if (!banner) return null;
  const url = `/${locale}`;

  const isHome = pathname === url;
  // if (!banner.promo_banner) return null;
  return (
    <Container
      className={`max-md:h-[28px] font-satoshi h-[40px] flex flex-col items-center justify-center z-10 text-white bg-darkblue ${
        isHome && "rounded-t-[24px] max-xl:rounded-none relative z-20"
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
    </Container>
  );
}

export default PromoBanner;
