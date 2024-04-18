    
import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';
    
export async function getArticalBlogPage(slug: string) {

  const blogPageQuery =  `*[_type == "article"  && slug.current == "/egypt-blog"][0] {
    ...,
  auther->{
    ...
  },

  suggested_tour {
      ...,
      tour_cards[] {
        badge_content,
        "content": content->{
          slug,
          hero_section,
          overview_card,
          price_overrides,
          timeline
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


export async function getArticalPageSeo(slug:string) {
  const seoQuery = `*[_type == "article"  && slug.current == "/${slug}"][0]{
    meta_data
  }`

  return await CLIENT.fetch(seoQuery)
}

// return slug of all the blogs
export async function getAllArticalBlogSlugs() {
  const query = `*[_type == "article"]{
    "slug": slug.current
  }`

  return await CLIENT.fetch(query)
}

// testimonials sect
export async function getTestimonials() {
  
  const query = `*[_type == "page"  && slug.current == "/"][0]{
    sections[_type == "testimonial_section" && defined(title)] {
          ...
    },
  }`

  return await CLIENT.fetch(query)
}