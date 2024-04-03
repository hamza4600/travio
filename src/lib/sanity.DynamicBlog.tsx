    
import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';
    
export async function getArticalBlogPage(slug: string) {

  const blogPageQuery =  `*[_type == "article"  && slug.current == "/${slug}"][0]`

    const query = `{
        "layout":  ${pageLayout},
        "data":  ${blogPageQuery}
    }`

    return await CLIENT.fetch(query)
}


export async function getArticalPageSeo(slug:string) {
  const seoQuery = `*[_type == "article"  && slug.current == "/${slug}"][0]{
    meta_data
  }`

  return await CLIENT.fetch(seoQuery)
}