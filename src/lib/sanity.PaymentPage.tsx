import { pageLayout } from "./sanity.HomePage"
import { CLIENT } from "./sanity.const"

export async function getPaymentPage(slug: string) {
  const tourData = `*[_type == "tour_page"  && slug.current == "/${slug}"][0]{
    ...,
    destination->,
    sections[] {
      ...,
      _type == "featured_tours_section" => {
        ...,
        tour_cards[] {
          ...,
          content->
        }
      },
      _type == "tour_selection_section" => {
        ...,
        tags[]->
      },
      _type == "pricing_section" => {
        ...,
        "weekly_schedule": ^.timeline.timeline,
        "disabled": ^.timeline.disabled,
        "price_overrides": ^.price_overrides,
        "price": ^.overview_card.price,
      }
    }
  }`

  const query = `{
        "layout":  ${pageLayout},
        "data" : ${tourData}
    }`

  return await CLIENT.fetch(query)
}

// for Page SEO
export async function getTourPaymentPageSeo(slug: string) {
  const query = `*[_type == "tour_page" && slug.current == "/${slug}"][0]{
  meta_data
}`

  return await CLIENT.fetch(query)
}
