import Image from 'next/image'
import Link from 'next/link'

import { localizedString, PropsWithLocale } from '../../../sanity/lib/client'
import { urlFor } from '../../../sanity/lib/client'
import { SanityInterestsSection } from '../../../sanity/lib/types'
export type InterestSectionProps = {
  data: SanityInterestsSection
}

const InterestSection = (props: PropsWithLocale<InterestSectionProps>) => {
  const {
    data: { title, tagline, interests },
  } = props as any
  return (
    <div className="my-16 flex flex-col justify-center items-center">
      <h2 className="text-blue text-sm lg:text-base font-medium text-center">{tagline?.en}</h2>
      <h4 className="lg:text-4xl text-2xl  mt-3 font-[700] text-center">{title?.en}</h4>
      <hr className="lg:w-1/12 w-1/5 my-3 text-yellow m-auto  bg-yellow  rounded-full border-2" />

      <div className="shadow-lg shadow-[#f5f5f5] rounded-sm max-w-6xl w-full px-2 lg:px-10 lg:pt-14 pb-10    my-10">
        {interests
          ? interests.map((item: any, index: any) => {
              if (index % 3 == 0) {
                return (
                  <div key={index}>
                    <div className="grid  grid-flow-row gap-3 grid-cols-3">
                      {interests[index] ? (
                        <Link
                          href={'/blogs/' + item.slug?.current}
                          key={index}
                          className={
                            (index + 1) % 3
                              ? 'justify-center items-center text-center border-r-[1px] border-opacity-25 border-gray flex-col'
                              : 'justify-center items-center text-center  flex-col'
                          }
                        >
                          <Image
                            style={{ margin: 'auto' }}
                            src={urlFor(interests[index]?.icon)}
                            width={100}
                            height={80}
                            alt=""
                          />
                          <h3 className="text-center lg:text-base text-sm my-5 font-semibold text-blue">
                            {localizedString(interests[index]?.name, props.locale)}
                          </h3>
                        </Link>
                      ) : null}

                      {interests[index + 1] ? (
                        <Link
                          href={'/blogs/' + interests[index + 1].slug?.current}
                          key={index}
                          className={
                            (index + 1) % 3
                              ? 'justify-center items-center text-center border-r-[1px] border-opacity-25 border-gray flex-col'
                              : 'justify-center items-center text-center  flex-col'
                          }
                        >
                          <Image
                            style={{ margin: 'auto' }}
                            src={urlFor(interests[index + 1]?.icon)}
                            width={100}
                            height={80}
                            alt=""
                          />
                          <h3 className="text-center lg:text-base text-sm my-5 font-semibold text-blue">
                            {localizedString(interests[index + 1]?.name, props.locale)}
                          </h3>
                        </Link>
                      ) : null}

                      {interests[index + 2] ? (
                        <Link
                          href={'/blogs/' + interests[index + 2].slug?.current}
                          key={index}
                          className={
                            'justify-center items-center text-center  border-opacity- flex-col'
                          }
                        >
                          <Image
                            style={{ margin: 'auto' }}
                            src={urlFor(interests[index + 2]?.icon)}
                            width={100}
                            height={80}
                            alt=""
                          />
                          <h3 className="text-center lg:text-base text-sm my-5 font-semibold text-blue">
                            {localizedString(interests[index + 2]?.name, props.locale)}
                          </h3>
                        </Link>
                      ) : null}
                    </div>
                    <hr
                      className={
                        index != (interests.length / 3) * 3 - 3
                          ? 'my-5 border-opacity-25 border-gray'
                          : 'hidden'
                      }
                    />
                  </div>
                )
              }
            })
          : null}
      </div>
    </div>
  )
}

export default InterestSection
