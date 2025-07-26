"use client";
import React, { useState } from "react";
import { Section } from "../types/product";
import Accordion from "./Accordion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FAQ({ data }: { data: Section[] }) {
  const [showAll, setShowAll] = useState(false);

  const faq = data.filter((item) => item.type === "faq");
  const faqValues = faq[0]?.values || [];

  const visibleFaqs = showAll ? faqValues : faqValues.slice(0, 5);

  return (
    <div id="faq">
      <div className="mb-0 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">
        <div className="pb-1 bg-white md:pb-0">
          <h2 className="mb-4 text-base font-semibold md:text-2xl">
            {faq[0]?.name}
          </h2>
          <div className="mb-20 relative">
            <div className="text-black rounded-lg py-2 md:border md:px-5 border-gray-200">
              {visibleFaqs.map((item, index) =>
                typeof item === "object" && item !== null && "question" in item && "answer" in item ? (
                  <Accordion
                    key={index}
                    heading={String(item.question)}
                    content={String(item.answer)}
                  />
                ) : null
              )}
            </div>

            {faqValues.length > 5 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700"
              >
                {showAll ? "See less" : "See more"}
                {showAll ? (
                  <IoIosArrowUp className="text-xl" />
                ) : (
                  <IoIosArrowDown className="text-xl" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
