import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';

const aboutPageQuery = ` *[_type == "page"  && slug.current == "/about-us"][0]`;

const query = `{
    "layout":  ${pageLayout},
    "pageData":  ${aboutPageQuery}
}`

// page seto 
const aboutSeoQuery = ` *[_type == "page"  && slug.current == "/about-us"][0]{
    meta_data
}`

export async function getAboutPage() {
    return await CLIENT.fetch(query)
}

export async function getAboutPageSeo() {
    return await CLIENT.fetch(aboutSeoQuery)
}