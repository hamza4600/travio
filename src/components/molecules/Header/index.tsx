import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { SanityGlobals } from '../../../../sanity/lib/types'

import ButtonTwo from './ButtonTwo'

import LanguageDropdown from './LanguageDropdown'
import Container from '../container'
import { urlFor } from '../../../../sanity/lib/client'
import HeaderLink from './HeaderLink'
import { OpenSvg } from './style'

const Header = ({ navbar }: { navbar: SanityGlobals['navbar'] }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [openDropDown, setOpenDropDown] = useState(false)
  
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  //   const { locale } = useContext(LocaleContext)

  // The Dropdownlist

  const dropdownList = ['Egypt', 'Dubai', 'Isreal']

  return (
    <div>
      <div className="w-full z-50 hidden bg-white lg:block h-[100px] relative">
        <div className={'bg-primary h-[30px]'}>
          <Container className="py-1">
            <div className="main-content-wrapper">
              <a target={'_blank'} href={'whatsapp://+919456679268'}>
                <div className="flex justify-end gap-1">
                  <Image src="/whatsapp_logo.svg" height={18} width={18} alt="Whatsapp logo" />
                  <p className={'text-sm font-medium leading-[22px]'}>+1 0000 000 000</p>
                </div>
              </a>
            </div>
          </Container>
        </div>
        <div className="bg-white h-[70px] flex flex-col items-center justify-center">
          <Container className="main-content-wrapper flex gap-[138px] items-center">
            <Link href={'/'}>
              <Image
                className={'h-10 w-[172px]'}
                src="/company_logo.svg"
                height={40}
                width={172}
                alt="Company logo"
              />
            </Link>
            <div className="flex gap-[38px] justify-evenly text-darkblue">
              {navbar?.links?.map((item, index) => {
                return <HeaderLink item={item} key={index} />
              })}
            </div>
            <div className="flex flex-none gap-3 items-stretch ml-auto">
              <Link href={navbar?.cta?.url || '/'}>
                <ButtonTwo className="flex gap-2.5 items-center">
                  {navbar?.cta?.icon && (
                    <Image
                      height={24}
                      width={24}
                      src={urlFor(navbar?.cta?.icon)}
                      alt=''
                    //   alt={localizedString(navbar.cta.icon.alt, locale)}
                    />
                  )}
                  {/* <LocalizedString text={navbar?.cta?.label} /> */}
                </ButtonTwo>
              </Link>
              <LanguageDropdown />
            </div>
          </Container>
        </div>
      </div>
      <div className="w-full lg:hidden z-50 lg:h-[80px] h-[60px] p-base">
        <div className="px-5 flex justify-between items-center w-full bg-white relative h-full  py-[16px] md:py-5 z-[50]">
          <Image src="/company_logo.svg" height={24} width={103} alt="Company logo" />
          <div className="flex gap-3 h-[24px]  items-center">
            <Image src="/whatsapp_logo.svg" height={24} width={24} alt="Whatsapp logo" />
            {/* Language selector */}
            <LanguageDropdown />
            <button onClick={() => setOpen(!open)}>
             <OpenSvg />
            </button>
            {/* <Image
              src="/menu_icon.svg"
              height={24}
              width={24}
              alt="Menu Icon"
              onClick={() => }
            /> */}
          </div>
        </div>

        {/* Menu For Mobile */}
        <div className="flex flex-col justify-end pr-3  items-end">
          <div
            className={`relative rounded-[16px] shadow-md text-base transition-all p-5  text-darkblue lg:first-letter:text-xl ease-in-out duration-700  bg-white w-[70%]  flex flex-col gap-2 justify-start items-start z-[15] ${
              open ? 'translate-y-1 ' : '-translate-y-full opacity-0'
            }`}
          >
            {navbar?.links?.map((item, index) => (
              <div className="w-full" key={index}>
                {item?._type === 'link' && (
                  <div
                    onClick={() => {
                      setOpen(false)
                    }}
                    className=" p-[12px] font-[500] text-[16px] px-[18px] "
                  >
                    <Link
                      href={item.url || '/'}
                      className={
                        'font-medium ' +
                        ((item.url || '/') === router.asPath ? 'text-blue' : 'text-darkblue')
                      }
                    >
                      {/* <LocalizedString text={item.text} /> */}
                    </Link>
                  </div>
                )}
                {item?._type === 'tour_dropdown' && (
                  <div>
                    <span
                      onClick={() => setOpenDropDown(!openDropDown)}
                      className="flex hover:bg-primary rounded-[8px] text-blue  p-[12px] text-[16px] px-[18px] items-center justify-between cursor-pointer"
                    >
                      <p className={'font-medium text-darkblue'}>Destinations</p>
                      <Image
                        src="/down_icon.svg"
                        height="16"
                        width="16"
                        alt=""
                        className={`ml-1 ${openDropDown && '-rotate-180'} transition-all`}
                      ></Image>
                    </span>
                    {openDropDown && (
                      <div>
                        {dropdownList.map((item, index) => (
                          <div
                              key = {index}
>
                            <label
                              className="flex items-center gap-3  text-[#726E83] p-[10px] px-[24px]"
                              htmlFor={'nav-sub-item' + index}
                            >
                              <input type="radio" name="nav-sub-item" id={'nav-sub-item' + index} />
                              <Link key={index} href={'/'}>
                                {' '}
                                {item}
                              </Link>
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Menu for Desktop */}
        <div className="hidden lg:block">
          {navbar?.links?.map((item, index) => {
            return <HeaderLink item={item} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
