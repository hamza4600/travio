import { ComponentClass, FunctionComponent } from 'react'
import dynamic from 'next/dynamic'

import {
    SanityBlogPageSectionNames,
} from '../../../sanity/lib/types'

const BlogHeroSection = dynamic(() => import('./BlogHeroSection'))
const NewsletterSection = dynamic(() => import('./NewsletterSection'))
const InterestSection = dynamic(() => import('./InterestSection'))
const FeatureTopBlogSection = dynamic(() => import('./FeatureTopBlogSection'))
const BlogSection = dynamic(() => import('./BlogSection'))
const AllBlogsSection = dynamic(() => import('./AllBlogsSection'))

export const BlogPageSectionsMap: {
    [name in SanityBlogPageSectionNames]?: FunctionComponent<any> | ComponentClass<any, any>
} = {
    image_header_section: BlogHeroSection,
    newsletter_section: NewsletterSection,
    interests_section: InterestSection,
    featured_place_blogs_section: FeatureTopBlogSection,
    featured_blogs_section: BlogSection,
    all_blogs_section: AllBlogsSection,
}
