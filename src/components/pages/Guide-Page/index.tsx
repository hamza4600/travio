import Layout from '@/components/layout';
import { FC } from 'react'

interface GuidePageProps {
    language: string;
    pageData: any;
}

const GuidePage:FC<GuidePageProps> = ({language, pageData}) => {
    
    const { layout } = pageData || {};

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
            promo_banner={layout?.navbar?.info_banner}
        >
            <h1>Guide Page</h1>
        </Layout>
    );
}

export default GuidePage;