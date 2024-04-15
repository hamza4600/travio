import { getAllDynamicBlogSlugs } from "@/lib/sanity.Blogs";
import { getAllDestinationSlugs } from "@/lib/sanity.DestPage";
import { getAllArticalBlogSlugs } from "@/lib/sanity.DynamicBlog";
import { getAllGuideSlugs } from "@/lib/sanity.GuidePage";
import { getAllTourSlugs } from "@/lib/sanity.TourPage";
import { getAllWikiSlugs } from "@/lib/sanity.WikiPage";

const languages = ['en', 'es', 'por'];

const staticPaths = [
    '/',
    '/about-us',
    '/blogs',
    '/tailor_your_tour',
    '/login',
    '/signup',
];

// add dynamic (tour , deestinations , blogs, blog, guide, wiki) paths
// function that return array of the slugs of all the tours

const rootUrl = 'https://travio-seven.vercel.app';

// Generate the sitemap
export default async function generateSitemap(req: Request, res: Response) {

    // each static path will have all languages
    const staticPathsSitemap = staticPaths.map((path) => {
        return languages.map((lang) => {
            return {
                url: `${rootUrl}/${lang}${path}`,
                changefreq: 'monthly',
                priority: 0.8
            }
        })
    }).flat();

    // get all tour slugs
    const tourSlugs = await getAllTourSlugs();
    const tourPaths = tourSlugs.map((slug) => {
        return languages.map((lang) => {
            return {
                url: `${rootUrl}/${lang}/tours${slug?.slug?.current}`,
                changefreq: 'monthly',
                priority: 0.8
            }
        })
    }).flat();

    // get all destination slugs
    const destinationSlugs = await getAllDestinationSlugs();
    const destinationPaths = destinationSlugs.map((slug) => {
        return languages.map((lang) => {
            return {
                url: `${rootUrl}/${lang}/destinations${slug?.slug}`,
                changefreq: 'monthly',
                priority: 0.8
            }
        })
    }).flat();

    // get all wiki slugs
    const wikiSlugs = await getAllWikiSlugs();
    const wikiPaths = wikiSlugs.map((slug) => {
        return languages.map((lang) => {
            return {
                url: `${rootUrl}/${lang}/wiki${slug?.slug}`,
                changefreq: 'monthly',
                priority: 0.8
            }
        })
    }).flat();

    // get All guide slugs
    const guideSlugs = await getAllGuideSlugs();
    const guidePaths = guideSlugs.map((slug) => {
        return languages.map((lang) => {
            return {
                url: `${rootUrl}/${lang}/guide${slug?.slug}`,
                changefreq: 'monthly',
                priority: 0.8
            }
        })
    }).flat();

    // get all blog slugs
    const blogSlugs = await getAllArticalBlogSlugs();
    const blogPaths = blogSlugs.map((slug) => {
        return languages.map((lang) => {
            return {
                url: `${rootUrl}/${lang}/blog${slug?.slug}`,
                changefreq: 'monthly',
                priority: 0.8
            }
        })
    }).flat();

    // return all blogs slugs
    const dynamicBlogSlugs = await getAllDynamicBlogSlugs();
    const dynamicBlogPaths = dynamicBlogSlugs.map((slug) => {
        return languages.map((lang) => {
            return {
                url: `${rootUrl}/${lang}/blogs${slug.slug}`,
                changefreq: 'monthly',
                priority: 0.8
            }
        })
    }).flat();

    return [
        {
            url: `${rootUrl}`,
            changefreq: 'monthly',
            priority: 1
        },
        ...staticPathsSitemap,
        ...tourPaths,
        ...destinationPaths,
        ...wikiPaths,
        ...guidePaths,
        ...blogPaths,
        ...dynamicBlogPaths
    ]
}