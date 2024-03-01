    
import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';
    
const query = `{
    "layout":  ${pageLayout},
}`

export async function getWikiPage() {
    return await CLIENT.fetch(query)
}

    