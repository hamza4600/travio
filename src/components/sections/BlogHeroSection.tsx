import Container from "../molecules/container";
// import { urlFor } from "../../../sanity/lib/client";

const BlogHeroSection = (props: any) => {
  const {
    data: { header, image, content },
  } = props;
  return (
    <div className="relative md:mb-12 mb-[50px]">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img
          className="lg:w-full min-h-[420px] max-md:hidden max-w-[1440px]"
          src={image}
          loading="lazy"
          alt={"img"}
        />
        <img
          className="w-full md:hidden min-h-[200px] object-cover"
          src={image}
          loading="lazy"
          alt={"img"}
        />
        <h2 className="lg:text-[56px] font-satoshi text-[28px] absolute  md:bottom-10 bottom-2 text-white   font-extrabold text-center ">
          {header}
        </h2>
      </div>
      <Container className="px-10 mx-auto max-w-[1312px] text-[16px] -translate-y-9  font-[400] opacity-80 leading-6 ">
        {/* {content?content} */}
        {/* <LocalizedString text={content} /> */}
        {content?.en}
      </Container>
    </div>
  );
};

export default BlogHeroSection;
