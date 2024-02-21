import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import imageUrlBuilder from "@sanity/image-url";
import { SanityIcon, SanityImage, SanityPhoto, SanityLocaleText, SanityLocaleString, SanityLocale, SanityLocaleNumber } from "./types";

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
});

export function urlFor(source: SanityPhoto | SanityIcon | SanityImage): string {
    if (!source) return "";
    return imageUrlBuilder(client).image(source).url();
}
const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;
export const decodeAssetId = (id: string) => {
    const patternExec = pattern.exec(id);
    if (!patternExec) {
        return {};
    }
    const [, assetId, dimensions, format] = patternExec;
    const [width, height] = dimensions.split("x").map((v) => parseInt(v, 10));

    return {
        assetId,
        dimensions: { width, height },
        format,
    };
};

export function localizedString(
  text?: SanityLocaleString | SanityLocaleText,
  locale?: SanityLocale
) {
  if (!text) return ''
  return text?.[locale ?? 'en'] || ''
}

export type PropsWithLocale<T> = T & { locale: SanityLocale }

export function localizedNumber(text?: SanityLocaleNumber, locale?: SanityLocale) {
  if (!text) return 0
  return text?.[locale ?? 'en'] || 0
}