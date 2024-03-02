import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';
  
const trailorPageQuery = `*[_type == "tailor_your_tour"]`;

const query = `{
    "layout":  ${pageLayout},
    "pageData":  ${trailorPageQuery}
}`

export async function getTailorPage() {
    return await CLIENT.fetch(query)
}
