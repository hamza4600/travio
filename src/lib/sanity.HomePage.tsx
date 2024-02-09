import groq from 'groq'
import { CLIENT } from './sanity.const';

const serverQuery = groq`*[_type == 'home_page'] {
    _id,
    name,
    pageSEO,
    Home_Page_Section_One,
    Home_Page_Section_Two,
    Home_Page_Section_Three {
      subtitle,
      title,
      "popularCountries": popularCountries[] | order(order asc) {
        ...,
        "country": country-> {
          name,
          slug
        },
        order
      }
    },
    Home_Page_Section_Four,
    Home_Page_Section_Five,
    Home_Page_Section_Six
  }`;

// run on server
export async function getHomePageSeo() {
    return await CLIENT.fetch(serverQuery)
}