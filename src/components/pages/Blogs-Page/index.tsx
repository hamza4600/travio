'use client';

import Layout from "@/components/layout";

const MainBlogPage = ({language, pageData}) => {
    
    const { layout } = pageData || {};
    
    return (
        <Layout
            breadcrumbs={[]}
            locale={language}
            globals={layout}
        >
            MainBlog Page
        </Layout>
    )
}

export default MainBlogPage;
