import { CLIENT } from './sanity.const';

export async function getnewLetterSection () {
    const query = `*[_type == "newsletter_section"][0]`;
    return await CLIENT.fetch(query);
}