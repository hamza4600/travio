import { CLIENT } from "./sanity.const";

export async function getPromoCodes() {
  const query = `*[_type == "promo"]`;

  return await CLIENT.fetch(query);
}