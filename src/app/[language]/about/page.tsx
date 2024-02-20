import AboutUsPage from "@/components/pages/About-Us";
import { getAboutPage } from "@/lib/sanity.AboutPage";

export default async function Index({ params }) {
  const { language } = params;
  const aboutPage = await getAboutPage();

  return (
    <>
      <AboutUsPage
        language={language}
        pageData={aboutPage}
      />
    </>
  );
}
