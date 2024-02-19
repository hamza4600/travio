import SectionHeader from '@/components/molecules/secHeader'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export default function Steps({
  disableNext,
  children,
  onSubmit,
  loading,
}: {
  loading: boolean
  disableNext?: boolean
  children?: any[]
  onSubmit: () => void
}) {
  const [step, setStep] = useState(1)
  return (
    <div className="flex my-8 flex-col gap-5 lg:gap-10 items-center sm:w-[90%] mx-auto px-3">
      <SectionHeader
        title={step == 1 ? 'When will you travel?' : 'Tell us about the travelers'}
        subtitle={step == 1 ? 'Choose the ultimate place to visit' : 'Choose the ultimate place to visit'}
        centerLine
        />
      <div
        className={`${
          step == 1 ? ' bg-white' : 'bg-primary'
        }  sm:rounded-[20px] py-10 flex flex-col gap-4 `}
      >
        {children && (
          <>
            {children[step - 1]}
            <div className=" flex justify-center mt-10 gap-3 items-center px-24 flex-wrap">
              {step > 1 ? (
                <Button
                variant="outline"
                  onClick={() => {
                    setStep(step - 1)
                  }}
                  className="px-[30px] py-3 w-[246px] "
                >
                    {'Back'}
                </Button>
              ) : (
                <div></div>
              )}
              {step < children.length ? (
                <Button
                variant={'sky'}
                className="w-40 h-12"
                  onClick={() => {
                    setStep(step + 1)
                  }}
                  disabled={disableNext}
                >
                    {'Next Step'}
                </Button>
              ) : (
                <Button
                  disabled={loading}
                  variant={'sky'}
                  className="w-40 h-12"
                  onClick={onSubmit}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
