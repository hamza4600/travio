import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';

const query = `{
  "layout":  ${pageLayout},
}`

export async function getGuidePage() {
  return await CLIENT.fetch(query)
}
