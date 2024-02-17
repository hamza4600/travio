import { i18n } from '@/language'
import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!
export const token = process.env.SANITY_API_READ_TOKEN

export const COMMON_PARAMS = {
  defaultLocale: i18n.base,
}

export const baseConfig = {
  projectId,
  dataset,
  apiVersion : "2023-02-20",
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published' as const,
}

// used in Preview for App Directory
export const CLIENT = createClient(baseConfig)