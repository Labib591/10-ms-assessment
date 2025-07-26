import React from "react";
import { Section } from "../types/product";
import Image from "next/image";

export default function Instructor({ instructor }: { instructor: Section[] }) {
  const instructorField = instructor.filter(
    (field) => field.type === "instructors"
  );

  if (!instructorField) return null;

  const instructorValues = instructorField[0]?.values;

  if (
    !instructorValues ||
    typeof instructorValues[0] !== "object" ||
    instructorValues[0] === null ||
    !("description" in instructorValues[0])
  )
    return null;


  return (
    <div>
      <div id="instructor">
        <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2 ">
          <div className="pt-4 pb-2 bg-white">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {instructorField[0]?.name}
            </h2>
            <div className="flex items-center md:rounded-md md:border md:p-5 md:border-gray-200">
              <div>
                <Image
                  src={
                    typeof instructorValues[0] === "object" && instructorValues[0] !== null && "image" in instructorValues[0]
                      ? (instructorValues[0] as { image?: string; name?: string; description?: string }).image || "/placeholder.png"
                      : "/placeholder.png"
                  }
                  alt="img"
                  style={{ color: "transparent" }}
                  className="rounded-full"
                  width={73}
                  height={73}
                ></Image>
              </div>
              <div className="flex-1 ml-4">
                <h3 className="text-lg">
                  {typeof instructorValues[0] === "object" && instructorValues[0] !== null && "name" in instructorValues[0]
                    ? (instructorValues[0] as { name?: string }).name
                    : ""}
                </h3>
                <p
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    __html:
                      typeof instructorValues[0] === "object" &&
                      instructorValues[0] !== null &&
                      "description" in instructorValues[0]
                        ? (instructorValues[0] as { description?: string }).description || ''
                        : " ",
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
