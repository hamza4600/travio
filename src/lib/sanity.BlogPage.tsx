import { pageLayout } from "./sanity.HomePage";
import { CLIENT } from "./sanity.const";

const blogPageQuery = `*[_type == "blog_page" && slug.current == "/"][0]{
  ...,
  sections[] {
    ...,
    _type == "featured_blogs_section" => {
      ...,
      featured_blogs[]->{
        ...,
        auther->{
          name
        },
        tags[]->,
        destination-> {
          name,
        }
      }
    },
    _type == "featured_place_blogs_section" => {
      ...,
      cards[] {
        ...,
        name,
        link->{
          slug,
          sections[_type == "image_header_section" && defined(header)] {
        ...
      }
        }
      }
    },
    _type == "interests_section" => {
      ...,
      interests[]{
        name,
        icon,
        link->{
          slug
        }
      }
    },
    _type == "blogs_section" => {
      ...,
      blogs[]->{
        ...,
        tags[]->
      }
    }
  }
  }`;

const allBlogsQuery = `*[_type=="article"]{
  destination->{
    name
  },
  introduction,
  time,
  cover_image,
  title,
  slug,
  auther->{
    name
  }
  }`;

const query = `{
    "layout":  ${pageLayout},
    "data":  ${blogPageQuery},
    'allBlogs' : ${allBlogsQuery}
}`;

export async function getBlogPage() {
  return await CLIENT.fetch(query);
}

const seoQuery = `*[_type == "blog_page"  && slug.current == "/"][0]{
  meta_data
}`;

export async function getBlogPageSeo() {
  return await CLIENT.fetch(seoQuery);
}
