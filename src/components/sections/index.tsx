import { ComponentClass, FunctionComponent } from 'react'
import dynamic from 'next/dynamic'

import {
    SanityBlogPageSectionNames,
} from '../../../sanity/lib/types'

const BlogHeroSection = dynamic(() => import('./BlogHeroSection'), {ssr: false })
const NewsletterSection = dynamic(() => import('./NewsletterSection'), { ssr: false })
const InterestSection = dynamic(() => import('./InterestSection'), { ssr: false })
const FeatureTopBlogSection = dynamic(() => import('./FeatureTopBlogSection'), { ssr: false })
const BlogSection = dynamic(() => import('./BlogSection'), { loading: () => <p>Loading...</p>, ssr: false })
const AllBlogsSection = dynamic(() => import('./AllBlogsSection'), { loading: () => <p>Loading...</p>, ssr: false })

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
