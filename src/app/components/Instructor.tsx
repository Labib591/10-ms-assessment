import React from "react";
import { Section } from "../types/product";
import Image from "next/image";

export default function Instructor({ instructor }: { instructor: Section[] }) {
  const instructorField = instructor.filter(
    (field) => field.type === "instructors"
  );

  if (!instructorField) return null;

  const instructorValues = instructorField[0]?.values;

  if (!instructorValues || !instructorValues[0]?.description) return null;


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
                  src={instructorValues[0]?.image || "/placeholder.png"}
                  alt="img"
                  style={{ color: "transparent" }}
                  className="rounded-full"
                  width={73}
                  height={73}
                ></Image>
              </div>
              <div className="flex-1 ml-4">
                <h3 className="text-lg">{instructorValues[0]?.name}</h3>
                <p
                  className="text-sm"
                  dangerouslySetInnerHTML={{
                    __html: instructorValues[0]?.description ?? " ",
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
