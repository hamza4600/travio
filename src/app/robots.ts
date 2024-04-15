import {MetadataRoute} from 'next'


export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://travio-seven.vercel.app';

    return {
        rules : {
            userAgent : '*',
            allow : ['/', '/about-us', '/blogs', '/tailor_your_tour', '/login', '/signup'],
            disallow : ['/admin'],
        },
        sitemap : `${baseUrl}/sitemap.xml`
    }
}