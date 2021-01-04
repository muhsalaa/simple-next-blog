import React from "react";
import clsx from "clsx";

const TAGS_COLOR = {
  tech: "bg-red-100 text-red-600",
  opiny: "bg-yellow-100 text-yellow-600",
  feature: "bg-green-100 text-green-600",
  story: "bg-blue-100 text-blue-600",
  programming: "bg-indigo-100 text-indigo-600",
  research: "bg-gray-100 text-gray-600",
};

export default function Tags({ tags }) {
  return (
    <div className="flex flex-wrap mb-1">
      {tags.map((tag) => (
        <div
          key={tag}
          className={clsx(
            "p-1 capitalize rounded text-xs mr-1 mb-1",
            TAGS_COLOR[tag]
          )}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
