import React from "react";
import Title from "./components/Title";
import Ratings from "./components/Ratings";
import Description from "./components/Description";
import Image from "next/image";
import Trailer from "./components/Trailer";
import { Product } from "./types/product";

export default async function Page() {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course",
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      cache: "no-store",
    }
  );

  const json = await res.json();
  const product : Product = json.data;

  return (
    <main>
      <section className='bg-[url("/ui_(1)_1716445506383.jpeg")] bg-cover bg-center md:min-h-[300px] min-h-[300px] lg:px-20 py-10 px-10'>
        <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
          <div className="order-1 flex flex-col justify-center flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
            <Title title={product.title}></Title>
            <Ratings></Ratings>
            <Description description={product.description}></Description>
          </div>
          <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
            <div className="md:sticky md:top-[112px] ">
              <div className=" md:border">
                  <div><Trailer product={product.media}></Trailer></div>
                  <div></div>
                  <div></div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
