"use client";
import Input from "@/components/pages/TrailYourTour/Input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface LoginPageProps {
  email: string;
  language: string;
}

const SignUpPage: FC<LoginPageProps> = ({ email, language }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: email || "",
      password: "",
      name: "",
    },
  });

  const router = usePathname();
  const isLogin = router === `/${language}/login`;

  function onSubmit(data: { email: string; password: string; name: string }) {}
  //   if (user) router.push('/account')
  //   if (user === null)
  return (
    <main className="relative">
      <Image
        fill
        src={"/authBackground.png"}
        alt=""
        className="object-contain object-bottom bg-white -z-10"
      />
      <div className="flex flex-col gap-12 max-w-[506px] w-[90%] mx-auto pt-24 pb-64 z-10">
        <div className="flex flex-col gap-5 items-center">
          <Image
            src={"/company_logo.svg"}
            alt="traviio"
            height={47}
            width={203}
          />
          <p className="text-center font-satoshi text-darkblue md:text-base md:font-medium font-normal text-[14px] leading-5">
            Booking found Enter your password and you can login to your
            dashboard.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-darkblue/10">
          <div className="grid grid-cols-2 h-12 text-darkblue text-base font-bold divide-x-[1px]">
            <Link href={`/${language}/login`}>
              <div
                className={`flex font-satoshi items-center justify-center h-full ${
                  isLogin
                    ? "border-b-2 border-yellow-500 bg-white"
                    : "border-b border-darkblue/10 bg-darkblue/[0.02]"
                }`}
              >
                Login
              </div>
            </Link>
            <Link href={`/${language}/signup`}>
              <div
                className={`flex items-center font-satoshi justify-center h-full ${
                  !isLogin
                    ? "border-b-2 border-yellow-500 bg-white"
                    : "border-b border-darkblue/10 bg-darkblue/[0.02]"
                }`}
              >
                Sign Up
              </div>
            </Link>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-7 flex flex-col gap-5 font-satoshi"
          >
            <Input
              rules={{ required: true }}
              control={control}
              type="text"
              name="name"
              label={"Name*"}
            />
            <Input
              disabled={!!email}
              rules={{ required: true }}
              control={control}
              type="text"
              name="email"
              label={"Email*"}
            />
            <Input
              rules={{ required: true }}
              control={control}
              type="password"
              name="password"
              label={"Password*"}
            />
            <Input
              control={control}
              type="password"
              name="re_password"
              label={"Re enter password**"}
            />
            <div className="flex font-satoshi items-center gap-1 text-gray font-medium text-sm">
              <Input type="checkbox" control={control} name="readTAndC" />
              <p>
                I agree to the{" "}
                <Link href={"#"} className="text-blue underline">
                  terms and conditions
                </Link>{" "}
                and{" "}
                <Link href={"#"} className="text-blue underline">
                  privacy policy
                </Link>
              </p>
            </div>

            <Button variant={"sky"} className="py-3 " type="submit">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default SignUpPage;
