import Layout from "@/components/layout";

const AboutUsPage = ({language, pageData}) => {
    
    const { layout } = pageData || {};

    return (
        <Layout
            breadcrumbs={[]}
            locale={`${language}`}
            globals={layout}
        >
            About Us Page
        </Layout>
    )
}

export default AboutUsPage;
