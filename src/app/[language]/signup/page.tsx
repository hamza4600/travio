import SignUpPage from "@/components/pages/SignUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Travio Sign Up - Explore the World",
    description: "Discover and book unforgettable travel experiences with Traviio Tours. From local city tours to exotic adventures, find the perfect trip curated just for you.",
};

export default async function Index({ params }) {
    const { language } = params;

    return (
        <>
               <SignUpPage
                language={language}
            />
        </>
    );
}
