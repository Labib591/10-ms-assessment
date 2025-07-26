import React from "react";
import Title from "../components/Title";
import Ratings from "../components/Ratings";
import Description from "../components/Description";
import Trailer from "../components/Trailer";
import { Product } from "../types/product";
import Instructor from "../components/Instructor";
import CourseLayout from "../components/CourseLayout";
import CTA from "../components/CTA";
import PDF from "../components/PDF";
import LearningPoints from "../components/LearningPoints";
import CourseDetails from "../components/CourseDetails";
import ExclusiveFeatures from "../components/ExclusiveFeatures";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Checklist from "../components/Checklist";
import LanguageToggle from "../components/ToogleButton";
import { Metadata } from "next";



export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params ?? { lang: "en" };

  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      cache: "no-store",
    }
  );

  const json = await res.json();
  const seo = json.data?.seo;

  const meta: Record<string, string> = {};
  seo?.defaultMeta?.forEach((item: { value: string; content: string }) => {
    meta[item.value] = item.content;
  });

  return {
    title: seo.title ?? "IELTS Course",
    description: seo.description ?? meta["og:description"],
    keywords: seo.keywords?.join(", "),
    twitter: {
      card: "summary_large_image",
      title: meta["og:title"],
      description: meta["og:description"],
      images: [meta["og:image"]],
    },
  };
}



export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {

   const { lang } = await params ?? { lang: "en" };

  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      cache: "no-store",
    }
  );

  const json = await res.json();
  const product: Product = json.data;

  // console.log(product);

  if (!product) return null;

  return (
    <main className="font-inter">
      <div className="flex justify-end p-4">
        <LanguageToggle />
      </div>
      <section className='bg-[url("/ui_(1)_1716445506383.jpeg")] bg-cover bg-center md:min-h-[300px] min-h-[300px] lg:px-20 py-10 px-10'>
        <div className="max-w-[1440px] mx-auto container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
          <div className="order-1 flex flex-col justify-center flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
            {/* Mobile-only Trailer */}
            <div className="md:hidden block mb-4">
              <Trailer product={product.media} />
            </div>

            <Title title={product.title} />
            <Ratings />
            <Description description={product.description} />
          </div>
          <section className="hidden md:block w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
            <div className="md:sticky md:top-[112px] ">
              <div className="md:border border-gray-200">
                <div className="p-1">
                  <Trailer product={product.media}></Trailer>
                </div>
                <div>
                  <CTA cta={product.cta_text}></CTA>
                </div>
                <div>
                  <Checklist checklist={product.checklist}></Checklist>
                </div>
              </div>
              <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
                <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
                <span className="flex items-center text-[#1cab55]">
                  <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                    <span className="ml-1">ফোন করুন (16910)</span>
                  </span>
                </span>
              </p>
            </div>
          </section>
        </div>
      </section>
      <div className="md:hidden mt-4 w-full p-4 max-w-[1440px] mx-auto">
              <CTA cta={product.cta_text} />
              <Checklist checklist={product.checklist} />
            </div>
      <section className="max-w-[1440px] order-2 lg:px-20 py-10 px-10 flex flex-col justify-center flex-1 md:order-2  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
        <div>
          <Instructor instructor={product.sections}></Instructor>
        </div>
        <div>
          <CourseLayout course={product.sections}></CourseLayout>
        </div>
        <div>
          <PDF pdf_section={product.sections}></PDF>
        </div>
        <div>
          <LearningPoints pointers={product.sections}></LearningPoints>
        </div>
        <div>
          <CourseDetails data={product.sections}></CourseDetails>
        </div>
        <div>
          <ExclusiveFeatures features={product.sections}></ExclusiveFeatures>
        </div>
        <div>
          <Testimonials data={product.sections}></Testimonials>
        </div>
        <div>
          <FAQ data={product.sections}></FAQ>
        </div>
      </section>
    </main>
  );
}

