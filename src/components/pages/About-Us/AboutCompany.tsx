// import { PortableText } from "@portabletext/react";
import React from "react";
import styled from "styled-components";
// import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../../sanity/lib/client";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  @media (max-width: 578px) {
    gap: 40px;
    margin-top: 50px;
  }
`;

const TextConatiner = styled.div`
  text-align: center;
`;

const Text1 = styled.p`
  font-family: var(--font-satoshi);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-transform: uppercase;
  color: #3fa9f5;

  @media (max-width: 578px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

const Text2 = styled.p`
  font-family: var(--font-satoshi);
  font-size: 40px;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: 0px;
  color: #140d31;

  @media (max-width: 578px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const MissionConatiner = styled.div`
  display: flex;
  gap: 28px;
  flex-direction: column;
`;

const TextImageContainer = styled.div`
  display: flex;
  gap: 28px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  img {
    object-fit: contain;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      height: 250px;
      border-radius: none;
    }
  }

  @media (max-width: 578px) {
    img {
      width: 100%;
      height: 200px;
      border-radius: none;
    }
  }
`;

// const TextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 18px;
// `;

// const MissionText = styled.div`
//   color: #140d31;
//   font-size: 16px;
//   font-family: var(--font-satoshi);
//   font-weight: 400;
//   line-height: 28px;
//   letter-spacing: 0.32px;
//   word-wrap: break-word;
//   display: flex;
//   flex-direction: column;
//   gap: 18px;

//   p {
//     margin-bottom: 6px;
//   }

//   @media (max-width: 578px) {
//     font-size: 14px;
//     line-height: 24px;
//   }
// `;

const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const TitleDescWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 28px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 14px;
  }

  @media (max-width: 578px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const Title = styled.p`
  color: #3fa9f5;
  font-size: 16px;
  font-family: var(--font-satoshi);
  font-weight: 500;
  line-height: 28px;
  word-wrap: break-word;
  width: 300px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Desc = styled.div`
  flex-grow: 1;
  font-family: var(--font-satoshi);
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #140d31;

  @media (max-width: 578px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const AboutComapny = ({ data, locale }) => {
  return (
    <Wrapper>
      <TextConatiner>
        <Text1>{data.tagline?.[locale]}</Text1>
        <Text2>{data.title?.[locale]}</Text2>
      </TextConatiner>
      <MissionConatiner>
        <TextImageContainer>
          <img
            src={urlFor(data.content?.[locale][0]?.items[0].image?.asset?._ref)}
            // width={data.img.width}
            // height={data.img.height}
            alt={data.content?.[locale][0]?.items[0].alt}
          />
          {/* <TextWrapper>
            <MissionText>{data.data.firstLine}</MissionText>
            <MissionText>{data.data.secondLine}</MissionText>
          </TextWrapper> */}
        </TextImageContainer>
        <BenefitsWrapper>
          {/* <PortableText value={data.content} /> */}
          {data.content?.[locale][1]?.items.map((data: any, index: number) => (
            <TitleDescWrapper key={index}>
              <Title>{data.items[0].text || ""}</Title>
              <Desc>{data.items[1].text}</Desc>
            </TitleDescWrapper>
          ))}
        </BenefitsWrapper>
      </MissionConatiner>
    </Wrapper>
  );
};

export default AboutComapny;
