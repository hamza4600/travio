import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';

const trailorPageQuery = `*[_type == "tailor_your_tour"]`;

const query = `{
    "layout":  ${pageLayout},
    "pageData":  ${trailorPageQuery}
}`

export async function getTailorPage() {
    return await CLIENT.fetch(query)
}

const seoQuery = `*[_type == "tailor_your_tour"][0]{
    meta_data
  }`

export async function getTailorPageSeo() {
    return await CLIENT.fetch(seoQuery)
}
