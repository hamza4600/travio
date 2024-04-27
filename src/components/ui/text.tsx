import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-primary",
      destructive: "text-destructive",
      darkblue: "text-darkblue",
      tertiary: "text-tertiary",
      gray: "text-gray",
      paragraph: "text-topic",
    },

    font: {
      default: "font-satoshi",
      montserrat: "font-montserrat",
      nova: "font-nova",
      secondary: "font-outfit",
    },
    fontWeight: {
      "100": "font-thin",
      "200": "font-extralight",
      "300": "font-light",
      default: "font-normal",
      "500": "font-medium",
      "600": "font-semibold",
      "700": "font-bold",
      "800": "font-extrabold",
      "900": "font-black",
    },
  },
  defaultVariants: {
    variant: "default",
    font: "default",
    fontWeight: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
  component?: string;
  as?: React.ElementType; // prop for the HTML element type
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      font,
      fontWeight,
      variant,
      asChild = false,
      as = "p",
      component = "p",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : component;

    const filteredProps: React.HTMLAttributes<HTMLParagraphElement> =
      Object.fromEntries(
        Object.entries({ ...props, className, ref }).filter(
          ([_, value]) => value !== undefined && value !== null
        )
      );

    return (
      <Comp
        className={cn(textVariants({ variant, font, fontWeight }), className)}
        ref={ref}
        {...filteredProps}
      />
    );
  }
);

Text.displayName = "Text";

export { Text, textVariants };
