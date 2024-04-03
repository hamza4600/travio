import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';

const blogPageQuery = `*[_type == "blog_page" && slug.current == "/"][0]{
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

export async function getBlogPage() {
    return await CLIENT.fetch(query)
}

const seoQuery = `*[_type == "blog_page"  && slug.current == "/"][0]{
  meta_data
}`

export async function getBlogPageSeo() {
  return await CLIENT.fetch(seoQuery)
}
