"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const categories = [
  "Pizzas",
  "Combo",
  "Breakfast",
  "Cocktails",
  "Coffee",
  "Drinks",
  "Desserts",
];

export const Categories: React.FC<Props> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map((category, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center rounded-2xl font-bold h-11 p-5",
            className,
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary",
          )}
        >
          <button onClick={() => setActiveIndex(index)}>{category}</button>
        </a>
      ))}
    </div>
  );
};
