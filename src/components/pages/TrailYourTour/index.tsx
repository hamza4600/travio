"use client";
import Layout from "@/components/layout";
import FAQSection from "@/components/sections/faq";
import styled from "styled-components";
import { data } from "../HomePage/data";
import SectionHeader from "@/components/molecules/secHeader";
import { tailorArray } from "./data";
import { Button } from "@/components/ui/button";

const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;

    .img-wraper {
        display: grid;
        grid-template-columns: repeat(4,minmax(0,1fr));
        gap: 20px;
        margin-top: 50px;
        padding: 0 20px;
    }

    .name {
        position: absolute;
        bottom: 10px;
        left: 10px;
        right: 0;
        padding: 6px 16px;
        width: fit-content;
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.40);
        backdrop-filter: blur(5px);
        color: white;
        font-weight: 600;
    }

    #qwa {
        // onclick change bg color of name to blue 

        &:hover {
            .name {
                background: #3FA9F5;
            }
        }
    }
    @media (max-width: 1024px) {
        .img-wraper {
            grid-template-columns: repeat(2,minmax(0,1fr));
        }
    }

    @media (max-width: 768px) {
        .img-wraper {
            grid-template-columns: repeat(2,minmax(0,1fr));
        }

        #qwa {
            height: 150px;
        }

        .name {
            bottom: 5px;
            left: 5px;
            padding: 6px 16px;
            font-size: 12px;
            font-weight: 400;
        }
    }
`;

const TailorYourTour = () => {
    return (
        <Layout locale="en" breadcrumbs={[]}>
            <Root>
                <div>
                    <SectionHeader
                        title="Tailor your tour"
                        subtitle="Choose the ultimate place to visit"
                        centerLine
                    />
                    <div className="img-wraper">
                        {
                            tailorArray.map((item, index) => {
                                return (
                                    <div key={index}
                                        id="qwa"
                                        className={`relative w-full h-[224px] rounded-xl overflow-hidden cursor-pointer 
                                        ${item.size === 'lg' ? 'lg:col-span-2' : 'col-span-1'}`}
                                    >
                                        <img src={item.imgUrl}
                                            className="object-cover object-center w-full h-full"
                                            alt={item.title} />
                                        <h1 className="name">{item.title}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <center>
                        <Button
                            variant={'sky'}
                            className="mt-10 w-40 h-12"
                        >
                            Next Step
                        </Button>
                    </center>
                </div>

                <FAQSection data={data} />
            </Root>
        </Layout>
    )
}

export default TailorYourTour;