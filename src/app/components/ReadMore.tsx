"use client";
import React, { useState } from 'react'

export default function ReadMore({ text, maxChars = 100 }: { text: string; maxChars?: number }) {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= maxChars) {
    return <p className="text-sm text-gray-700">{text}</p>;
  }

  return (
    <p className="text-sm text-gray-700">
      {expanded ? text : text.slice(0, maxChars) + "..."}
      <button
        onClick={() => setExpanded(!expanded)}
        className="ml-1 text-green-600 underline"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
}

