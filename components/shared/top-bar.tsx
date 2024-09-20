import React from "react";
import { Categories } from "@/components/shared/categories";
import { SortPopup } from "@/components/shared/sort-popup";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        " sticky top-0 bg-white shadow-lg shadow-black/5 z-10 py-5",
        className,
      )}
    >
      <Container className="flex justify-between items-center">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
