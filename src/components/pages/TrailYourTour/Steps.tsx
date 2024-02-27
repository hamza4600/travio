import SectionHeader from "@/components/molecules/secHeader";
import { Button } from "@/components/ui/button";
import React, { useState, useTransition } from "react";

export default function Steps({
  disableNext,
  children,
  onSubmit,
  loading,
}: {
  loading: boolean;
  disableNext?: boolean;
  children?: any[];
  onSubmit: () => void;
}) {
  const [step, setStep] = useState(1);
  const [isPending, startTransition] = useTransition()

  return (
    <div className="flex my-8 flex-col gap-5 lg:gap-10 items-center sm:w-[90%] md:mx-auto">
      <SectionHeader
        title={
          step == 1 ? "When will you travel?" : "Tell us about the travelers"
        }
        subtitle={
          step == 1
            ? "Choose the ultimate place to visit"
            : "Choose the ultimate place to visit"
        }
        centerLine
      />
      <div
        className={`${
          step == 1 ? " bg-white" : "bg-primary"
        }  sm:rounded-[20px] md:pt-10 pt-3 flex flex-col gap-4 md:pb-10 pb-6 md:w-auto w-[100%]`}
        style={{ minHeight: '450px' }}
      >
        {children && (
          <>
            {children[step - 1]}
            <div className="w-full flex justify-center md:mt-6 gap-3 items-center md:px-24 mt-4 flex-wrap">
              {step > 1 ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    startTransition(() => {
                      setStep(step - 1);
                    })
                  }}
                  className="px-[30px] py-3 h-12 w-[246px] max-md:max-w-[160px] max-[375px]:max-w-[120px] max-md:h-10"
                >
                  {isPending ? "Loading..." : "Back"}
                </Button>
              ) : (
                <></>
              )}
              {step < children.length ? (
                <Button
                  variant={"sky"}
                  className="h-12 w-[246px] max-md:max-w-[160px] max-[375px]:max-w-[120px] max-md:h-10"
                  onClick={() => {
                    startTransition(() => {
                      setStep(step + 1);
                    })
                  }}
                  disabled={disableNext}
                >
                  {isPending ? "Loading..." : "Next Step"}
                </Button>
              ) : (
                <Button
                  disabled={loading}
                  variant={"sky"}
                  className="h-12 w-[246px] max-md:max-w-[160px] max-[375px]:max-w-[120px] max-md:h-10"
                  onClick={onSubmit}
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
