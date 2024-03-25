    
import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';
    
export async function getDynamicBlogPage(slug: string) {

  const blogPageQuery =  `*[_type == "article"  && slug.current == "/${slug}"][0]`

    const query = `{
        "layout":  ${pageLayout},
        "data":  ${blogPageQuery}
    }`

    return await CLIENT.fetch(query)
}