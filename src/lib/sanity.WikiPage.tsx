    
import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';
    
export async function getWikiPage(slug: string) {
    console.log("slug: ", slug);
    // const wikiPageQuery =  `*[_type == "travel_wiki"  && slug.current == "/${slug}"][0]{
        const wikiPageQuery =  `*[_type == "travel_wiki"  && slug.current == "/pyramids-of-giza"][0]{
        ...,
        suggested_tours[]->
      }`


    const query = `{
        "layout":  ${pageLayout},
        "data": ${wikiPageQuery}
    }`

    return await CLIENT.fetch(query)
}