    
import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';
    
export async function getDynamicBlogPage(slug: string) {

    // const wikiPageQuery =  `*[_type == "travel_wiki"  && slug.current == "/${slug}"][0]{
    //     ...,
    //     suggested_tours[]->
    //   }`


    const query = `{
        "layout":  ${pageLayout},
    }`

    return await CLIENT.fetch(query)
}