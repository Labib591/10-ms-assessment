import React from "react";
import { FaStar } from "react-icons/fa";

export default function Ratings() {
  return (
    <div className="mb-2">
      <p className="flex flex-row flex-wrap gap-2 text-white">
        <span className="text-yellow-300 flex gap-1">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </span>
        <span className="inline-block text-sm md:text-base">
          (82.6% of students gave a 5 rating at the end of the course)
        </span>
      </p>
    </div>
  );
}
