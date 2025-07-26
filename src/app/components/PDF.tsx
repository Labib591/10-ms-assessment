import React from "react";
import { Section } from "../types/product";
import Image from "next/image";

export default function PDF({ pdf_section }: { pdf_section: Section[] }) {
  const pdfField = pdf_section.filter(
    (field) => field.type === "group_join_engagement"
  );
  const pdfFieldValues = pdfField[0]?.values;

  return (
    <div>
      <div
        className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12"
        style={{
          backgroundImage: `url(${pdfFieldValues[0]?.background.image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-full md:w-1/2">
          <img
            src={pdfFieldValues[0]?.top_left_icon_img}
            alt=""
            style={{ height: "40px" }}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold text-white">{pdfFieldValues[0]?.title}</h2>
          <p className="mt-2 text-gray-400">{pdfFieldValues[0]?.description}</p>
          <button className="cta">{pdfFieldValues[0]?.cta.text}</button>
        </div>
        <div className="items-center hidden w-1/2 md:flex">
            <Image src={pdfFieldValues[0]?.thumbnail || "/placeholder.png"} alt="img" width={400} height={400}></Image>
        </div>
      </div>
    </div>
  );
}
