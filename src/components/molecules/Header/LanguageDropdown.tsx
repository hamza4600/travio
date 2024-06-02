import React, { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { i18n } from "@/language"
import { clean } from "@/utils/utils"

type Translation = {
  title: string
  path: string
  language: string
}

const LanguageDropdown = ({ locale }) => {
  const [open, setOpen] = React.useState(false)

  const pathname = usePathname()
  const languageCodes = ["en", "es", "por"]
  const destinationPath = languageCodes.reduce(
    (path, code) => (path ? path.replace(`/${code}`, "") : path),
    pathname
  )

  const translations = i18n.languages.map((lang) => {
    return {
      language: lang.id,
      path: `/${lang.id}${destinationPath}`,
      title: lang.title?.[locale],
    }
  })

  const params = useParams()

  const language = Array.isArray(params!.language)
    ? params!.language[0]
    : params!.language

  const availableTranslations = useMemo<Translation[]>(
    () =>
      i18n.languages.reduce<Translation[]>((acc, cur) => {
        const availableTranslation = translations.find(
          (translation) => translation.language === cur.id
        )
        return availableTranslation ? [...acc, availableTranslation] : acc
      }, []),
    [translations]
  )

  const selectedLanguage = availableTranslations.find(
    (version) => version.language === language
  )

  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        dropdownRef.current &&
        !dropdownRef?.current?.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={dropdownRef} className="relative" style={{ zIndex: "1000" }}>
      <div
        className="rounded-full bg-opacity-5 bg-[#325EFB] border-[#325EFB] border border-opacity-10 py-2 md:py-[8px] px-2 md:px-[10px] flex items-center cursor-pointer gap-1 md:gap-2.5 max-sm:h-[30px]"
        onClick={() => setOpen(!open)}
      >
        <img
          className="h-6 w-6 max-md:w-4 max-md:h-4"
          alt={"country_flag"}
          src={
            selectedLanguage && selectedLanguage.language === "en"
              ? "/en_icon.svg"
              : selectedLanguage?.language === "es"
              ? "/spain.png"
              : "/por.png"
          }
        />

        <img
          className="md:h-4 md:w-4 h-3 w-3"
          height={12}
          width={12}
          alt=""
          src="/down_icon.svg"
        />
      </div>
      {open && (
        <div className="absolute p-2 bg-white border-blue rounded-lg flex flex-col min-w-max right-0 mt-2">
          {availableTranslations.map((version, index) => {
            return (
              <Link
                href={clean(version.path)}
                locale={version.language}
                className="flex font-satoshi font-normal cursor-pointer rounded-md hover:bg-orange-300 p-2 mb-3 gap-2"
                key={index}
              >
                <Image
                  height={32}
                  width={32}
                  alt={version.title}
                  src={
                    version.language === "en"
                      ? "/en_icon.svg"
                      : version.language === "es"
                      ? "/spain.png"
                      : "/por.png"
                  }
                />
                <p>{version.title}</p>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default LanguageDropdown
