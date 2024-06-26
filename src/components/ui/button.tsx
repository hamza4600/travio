import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-satoshi ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#140D31] text-white rounded-[30px] hover:bg-black-700",
        destructive:
          "bg-destructive rounded-[30px] text-destructive-foreground hover:bg-red-600",
        golden:
          "border rounded-[30px] border-input bg-golden text-golden-foreground hover:bg-accent hover:bg-yellow-500",
        secondary:
          "bg-secondary rounded-[30px] text-secondary-foreground hover:bg-sky-900",
        sky: "bg-sky rounded-[30px] text-sky-foreground  eground hover:bg-sky-500",
        ghost:
          "bg-ghost text-ghost-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        outline:
          "border border-[#726E83] rounded-[30px] text-[#726E83] hover:bg-primary/90",
        roundedSky:
          "border border-[#3b99e1] text-sky-foreground bg-sky rounded-[4px] hover:bg-sky-500",
        roundedOutline: "border rounded-[4px] border-input bg-outline",
      },
      size: {
        default: "h-10 px-[18px] py-[7px]", // 40px height
        xs: "h-[26px] px-5 py-4",
        sm: "h-[36px] px-5 py-4",
        md: "h-[38px] px-[18px] py-[7px]",
        base: "h-[42px] px-4 py-2",
        lg: "h-12 px-8", // 48px height
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
