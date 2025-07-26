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
          backgroundImage:
            pdfFieldValues != null && pdfFieldValues[0] != null && typeof pdfFieldValues[0] === "object" && "background" in pdfFieldValues[0]
              ? `url(${(pdfFieldValues[0] as { background: { image: string } }).background.image})`
              : undefined,
          backgroundSize: "cover",
        }}
      >
        <div className="w-full  md:w-1/2">
          <img
            src={
              pdfFieldValues && pdfFieldValues[0] != null && typeof pdfFieldValues[0] === "object" && "top_left_icon_img" in pdfFieldValues[0]
                ? (pdfFieldValues[0] as { top_left_icon_img?: string }).top_left_icon_img
                : undefined
            }
            alt=""
            style={{ height: "40px", width: "auto" }}
            className="mb-4"
          />

          <h2 className="text-xl font-semibold text-white">
            {pdfFieldValues != null && pdfFieldValues[0] != null && typeof pdfFieldValues[0] === "object" && "title" in pdfFieldValues[0]
              ? (pdfFieldValues[0] as { title?: string }).title
              : ""}
          </h2>
          <p className="mt-2 text-gray-400">
            {pdfFieldValues && pdfFieldValues[0] != null && typeof pdfFieldValues[0] === "object" && "description" in pdfFieldValues[0]
              ? (pdfFieldValues[0] as { description?: string }).description
              : ""}
          </p>
          <button className="cta">
            {pdfFieldValues &&
              pdfFieldValues[0] != null &&
              typeof pdfFieldValues[0] === "object" &&
              "cta" in pdfFieldValues[0] &&
              (pdfFieldValues[0] as { cta?: { text?: string } }).cta?.text}
          </button>
        </div>
        <div className="items-center hidden w-1/2 md:flex">
          <Image
            src={
              pdfFieldValues &&
              pdfFieldValues[0] &&
              typeof pdfFieldValues[0] === "object" &&
              "thumbnail" in pdfFieldValues[0] &&
              (pdfFieldValues[0] as { thumbnail?: string }).thumbnail
                ? (pdfFieldValues[0] as { thumbnail?: string }).thumbnail!
                : "/placeholder.png"
            }
            alt="img"
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
    </div>
  );
}
