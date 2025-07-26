"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

type Props = {
  heading: string;
  content: string;
};

export default function Accordion({ heading, content }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="mb-0 border-b border-gray-200 border-dashed last:border-0">
        <div className="py-4 cursor-pointer transition ease-in-out duration-300">
            <h2
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between cursor-pointer"
        >
          <div
            className="max-w-[90%] font-medium md:text-base mx-lg:text-smd"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <span>{isOpen ? <IoIosArrowUp/> : <IoIosArrowDown />}</span>
        </h2>
        </div>
        {isOpen && (
            <div className="px-0 pb-2 text-gray-500">
            <div dangerouslySetInnerHTML={{ __html: content }}>
            </div>
        </div>
        )}
      </div>
      <hr className="my-0 opacity-0"/>
      </div>
  );
}
