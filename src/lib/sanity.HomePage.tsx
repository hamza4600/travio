import { CLIENT } from './sanity.const';

export const pageLayout = `*[_type == "globals"][0]{
  ...,
  navbar {
...,
    links[] {
      ...,
      _type == "tour_dropdown" => {
        ...,
        destinations[] {
          ...,
          destination->,
          tours[]-> {
            slug,
            overview_card,
            hero_section,
          },
          blogs[]-> {
            slug,
            title
          },
        }
      }
    }
}
}`

const homePageQuery = `*[_type == "page"  && slug.current == "/"][0]{
  ...,
  sections[]{
    ...,
    _type == "featured_blogs_section" => {
      ...,
      featured_blogs[]->
    },
    _type == "deals_section" => {
      ...,
      deals[] {
        ...,
        tour->
      }
    },
    _type == "destinations_section" => {
      ...,
      destinations[] {
        ...,
        'destination': {
          '_ref': destination._ref,
          'count': (*[_type == "tour_page" && document._ref == ^._id && !(_id in path("drafts.*"))]),
          ...destination->
        }
      }
    },
  }
}`;

const query = `{
  "layout":  ${pageLayout},
  "pageData":  ${homePageQuery},
}`

// run on Srver
export async function getAllHomePage() {
  return await CLIENT.fetch(query)
}

// Home Page SEO 

const seoQuery = `*[_type == "page"  && slug.current == "/"][0]{
  meta_data
}`

export async function getHomePageSeo() {
  return await CLIENT.fetch(seoQuery)
}
