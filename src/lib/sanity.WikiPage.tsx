    
import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';
    
export async function getWikiPage(slug: string) {
    const wikiPageQuery =  `*[_type == "travel_wiki"  && slug.current == "/${slug}"][0]{
        ...,
        suggested_tours[]->
      }`


    const query = `{
        "layout":  ${pageLayout},
        "data": ${wikiPageQuery}
    }`

    return await CLIENT.fetch(query)
}