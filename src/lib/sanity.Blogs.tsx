    
import { pageLayout } from './sanity.HomePage';
import { CLIENT } from './sanity.const';
    
export async function getMainDynamicBlogPage(slug: string) {

    const query = `{
        "layout":  ${pageLayout},
    }`

    return await CLIENT.fetch(query)
}