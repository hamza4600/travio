"use client";
import Input from "@/components/pages/TrailYourTour/Input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = ({ language }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = usePathname();
  const isSignPage = router === `/${language}/signup`;

  function onSubmit(data: { email: string; password: string }) {
    // login(data.email, data.password).then(() => {
    //   router.push('/account')
    // })
  }

  return (
    <main className="relative min-h-screen">
      <Image
        fill
        src={"/authBackground.png"}
        alt=""
        className="object-contain h-full w-full object-bottom bg-white -z-10"
      />
      <div className="flex flex-col gap-12 max-w-[506px] w-[90%] mx-auto pt-24 pb-64 z-10">
        <div className="flex flex-col gap-5 items-center">
          <Image
            src={"/company_logo.svg"}
            alt="traviio"
            height={47}
            width={203}
          />
          <p className="text-center font-satoshi text-darkblue text-base font-medium">
            Login
          </p>
        </div>
        <div className="rounded-2xl font-satoshi overflow-hidden border border-darkblue/10">
          <div className="grid grid-cols-2 h-12 text-darkblue text-base font-bold divide-x-[1px]">
            <Link href={`/${language}/login`}>
              <div
                className={`flex items-center justify-center h-full ${
                  !isSignPage
                    ? "border-b-2 border-yellow-500 bg-white"
                    : "border-b border-darkblue/10 bg-darkblue/[0.02]"
                }`}
              >
                Login
              </div>
            </Link>

            <Link href={`/${language}/signup`}>
              <div
                className={`flex items-center justify-center h-full ${
                  isSignPage
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
            className="p-7 font-satoshi flex flex-col gap-5"
          >
            <Input
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
            <div className="flex font-satoshi justify-between items-center">
              <div className="flex items-center gap-1 text-gray font-medium text-sm">
                <Input type="checkbox" control={control} name="rememberMe" />
                <p>Remember me</p>
              </div>
              <Link
                href={"/reset_password"}
                className="text-gray font-medium text-sm hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Button className="py-3" variant={"sky"}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
