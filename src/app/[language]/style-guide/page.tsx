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
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const StyleGuide = () => {
    const formSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    })
    const form = useForm({
        resolver: zodResolver(formSchema),
    })

    return (
        <div className="container mx-auto min-h-28">
            <h1 className="text-4xl font-bold mb-4">Style Guide</h1>

            <h2 className="text-2xl font-bold mb-2">Typography</h2>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <h2 className="text-2xl font-bold mb-2">Buttons</h2>
            <div className="space-x-4">
                <Button>Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="default">DEFAULT</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
            </div>
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