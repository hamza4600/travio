"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Text } from "@/components/ui/text";

const StyleGuide = () => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="container mx-auto min-h-28">
      <h1 className="text-4xl font-bold mb-4">Style Guide</h1>

      <Text as={"h1"} variant={"secondary"} fontWeight={"500"}>
        Extra Small Golden Button
      </Text>
      <Button className="mt-2" size={"xs"} variant={"golden"}>
        Golden small button
      </Button>

      <Text as={"h1"} variant={"secondary"} fontWeight={"500"}>
        Small Secondary Button
      </Text>
      <Button className="mt-2" size={"xs"} variant="secondary">
        Small Secondary Button
      </Button>

      <Text className="mt-2" as={"h1"} variant={"secondary"} fontWeight={"500"}>
        Base Desctructive Button
      </Text>
      <Button className="mt-2" size={"base"} variant="destructive">
        Base Destructive Button
      </Button>

      <Text className="mt-2" as={"h1"} variant={"secondary"} fontWeight={"500"}>
        Default Primary Button
      </Text>
      <Button className="mt-2" size={"default"} variant="primary">
        Primary Default Button
      </Button>

      <Text className="mt-2" as={"h1"} variant={"secondary"} fontWeight={"500"}>
        Medium Sky Button
      </Text>
      <Button className="mt-2" size={"xs"} variant="sky">
        Primary Default Button
      </Button>

      <Text className="mt-2" as={"h1"} variant={"secondary"} fontWeight={"500"}>
        Large Outline Button
      </Text>
      <Button className="mt-2" size={"lg"} variant="outline">
        Primary Default Button
      </Button>

      <Text className="mt-2" as={"h1"} variant={"secondary"} fontWeight={"500"}>
        Rounded Outline Button
      </Text>
      <Button className="mt-2" size={"lg"} variant="roundedOutline">
        Rounded Outline Button
      </Button>

      <Text className="mt-2" as={"h1"} variant={"secondary"} fontWeight={"500"}>
        Rounded Sky blue
      </Text>
      <Button className="mt-2" size={"lg"} variant="roundedSky">
        Rounded Sky Button
      </Button>

      {/* <p className="font-bold text-4xl">Navbar Text</p>
      <Text
        className="mt-2 text-[16px] leading-6"
        as={"h1"}
        variant={"secondary"}
        fontWeight={"500"}
      >
        Destinations
      </Text> */}

      <p className="font-bold text-4xl">Line 1 B</p>
      <Text
        className="mt-2 text-[16px] leading-6"
        as={"h1"}
        variant={"secondary"}
        fontWeight={"900"}
      >
        Guided tours tailored by local experts
      </Text>

      <p className="font-bold text-4xl">below nav text</p>
      <Text
        className="mt-2 text-[14px] leading-6"
        as={"h1"}
        variant={"secondary"}
        fontWeight={"500"}
      >
        More summer for less. Save up to 20% off selected trips*.{" "}
        <Text variant={"tertiary"} fontWeight={"700"}>
          Book now
        </Text>
      </Text>

      <p className="font-bold text-4xl">Hero Section Text</p>
      <Text
        className="mt-2 text-[50px] leading-[76px]"
        as={"h1"}
        variant={"secondary"}
        fontWeight={"900"}
      >
        Guided tours tailored by local experts
      </Text>

      <p className="font-bold text-4xl">Hero Section Description</p>
      <Text
        className="mt-2 text-[20px] leading-[32px]"
        as={"h1"}
        variant={"secondary"}
        fontWeight={"700"}
      >
        Guided tours tailored
      </Text>

      <p className="font-bold text-4xl">Heading 2 B</p>
      <Text
        className="mt-2 text-[40px] leading-[50px]"
        as={"h1"}
        variant={"secondary"}
        fontWeight={"700"}
      >
        Guided tours tailored
      </Text>

      <p className="font-bold text-4xl">Line 2 M</p>

      <Text
        className="mt-2 text-[16px] leading-[24px]"
        as={"h1"}
        variant={"secondary"}
        fontWeight={"500"}
      >
        Guided tours tailored
      </Text>

      <p className="font-bold text-4xl">Card Heading</p>
      <Text
        className="mt-2 text-xl"
        as={"h1"}
        variant={"secondary"}
        fontWeight={"700"}
      >
        Guided tours tailored
      </Text>

      <p className="font-bold text-4xl">Short Text 2 M</p>
      <Text
        className="mt-2 text-[14px] leading-[22px]"
        as={"h1"}
        variant={"secondary"}
        fontWeight={"500"}
      >
        Country
      </Text>

      <p className="font-bold text-4xl">Sub Title 3 B</p>
      <Text
        className="mt-2 text-[14px] leading-[22px]"
        as={"h1"}
        variant={"secondary"}
        fontWeight={"700"}
      >
        Country
      </Text>

      <p className="font-bold text-4xl">Sub Title 3 B</p>
      <Text
        className="mt-2 text-lg"
        as={"h1"}
        variant="gray"
        fontWeight={"700"}
      >
        Country
      </Text>

      <p className="mt-3 font-bold text-4xl">Card Travel Price text</p>
      <Text
        className="mt-2 text-lg"
        as={"h1"}
        variant="secondary"
        fontWeight={"900"}
      >
        Country
      </Text>

      <p className="mt-3 font-bold text-4xl">Card Travel Save Price text</p>
      <Text
        className="mt-2 text-[12px] leading-4"
        as={"h1"}
        variant="destructive"
        fontWeight={"700"}
      >
        You Save
      </Text>

      <p className="mt-3 font-bold text-4xl">Heading 2 text</p>
      <Text
        className="mt-2 text-[20px] leading-8"
        as={"h1"}
        variant="secondary"
        fontWeight={"700"}
      >
        Alignment
      </Text>

      <p className="mt-3 font-bold text-4xl">Sub Title 5 R</p>
      <Text
        className="mt-2 text-lg"
        as={"h1"}
        variant="gray"
        // fontWeight={"400"}
      >
        Alignment
      </Text>

      <p className="mt-3 font-bold text-4xl">Line 3 R</p>
      <Text
        className="mt-2 text-[16px] leading-6"
        as={"h1"}
        variant="gray"
        // fontWeight={"400"}
      >
        Alignment
      </Text>

      <p className="mt-3 font-bold text-4xl">Short Text 5 M</p>
      <Text
        className="mt-2 text-[12px] leading-5"
        as={"h1"}
        variant="gray"
        fontWeight={"500"}
      >
        Alignment
      </Text>

      <p className="mt-3 font-bold text-4xl">Short Text 6 R</p>
      <Text
        className="mt-2 text-[12px] leading-5"
        as={"h1"}
        variant="gray"
        // fontWeight={""}
      >
        Alignment
      </Text>

      <p className="mt-3 font-bold text-4xl">Title 5 M</p>
      <Text
        className="mt-2 text-[20px] leading-8"
        as={"h1"}
        variant="gray"
        fontWeight={"500"}
      >
        Alignment
      </Text>

      <Form {...form}>
        <form className="space-y-8 mt-10 max-w-md">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default StyleGuide;
