import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';

export async function getGuidePage(slug: string) {
  
  const guidePageQuery = `*[_type == "travel_guide" && slug.current == "/${slug}"][0]`;

  const query = `{
    "layout":  ${pageLayout},
    "data": ${guidePageQuery}
  }`;

  return await CLIENT.fetch(query);
}
