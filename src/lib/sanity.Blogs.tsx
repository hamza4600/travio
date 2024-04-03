    
import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';
    
export async function getMainDynamicBlogPage(slug: string) {

    const blogPageQuery = `*[_type == "blog_page" && slug.current == "/${slug}"][0]{
        ...,
        sections[] {
          ...,
          _type == "featured_blogs_section" => {
            ...,
            featured_blogs[]->{
              ...,
              tags[]->,
              destination-> {
                name,
              }
            }
          },
          _type == "featured_place_blogs_section" => {
            ...,
            cards[]->
          },
          _type == "interests_section" => {
            ...,
            interests[]->{
              name,
              icon,
              slug
            }
          },
          _type == "blogs_section" => {
            ...,
            blogs[]->{
              ...,
              tags[]->
            }
          }
        }
    }`

    const query = `{
        "layout":  ${pageLayout},
        "data":  ${blogPageQuery}
    }`

    return await CLIENT.fetch(query)
}


export async function getDynamicBlogPageSeo(slug:string) {
  const seoQuery = `*[_type == "blog_page"  && slug.current == "/${slug}"][0]{
    meta_data
  }`

  return await CLIENT.fetch(seoQuery)
}