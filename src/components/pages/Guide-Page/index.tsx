'use client';
import Layout from '@/components/layout';
import { FC } from 'react'
import { heroData, wikiData } from '../DynamicTravelWiki/data';
import HeroSection from '../DynamicTravelWiki/HeroSection';
import { WikiSectionHeader } from '../DynamicTravelWiki/WikiSection';

interface GuidePageProps {
    language: string;
    pageData: any;
}

const GuidePage: FC<GuidePageProps> = ({ language, pageData }) => {
    const { layout, data } = pageData || {};
    console.log(data , "pageData555");

    return (
        <Layout
            globals={layout}
            locale={language}
            breadcrumbs={[
                {
                    label: "Destinations",
                    value: "/",
                },
                {
                    label: "Egypt",
                    value: "/egypt",
                },
                {
                    label: "Explore Ancient Wonders",
                    value: "/#",
                },
            ]}
            promo_banner={layout?.banner}
        >
            <HeroSection data={heroData} />
            <div className="md:px-20 px-5 md:mt-[68px] mt-[50px]">
                <WikiSectionHeader wikiData={wikiData} />
            </div>
        </Layout>
    );
}

export default GuidePage;