import React from "react";
import { Title } from "@/components/shared/title";
import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import { Input } from "@/components/ui";
import CheckboxFiltersGroup from "@/components/shared/checkbox-filters-group";
import { RangeSlider } from "@/components/shared/range-slider";

export const Filters = () => {
  return (
    <div>
      <Title text="Filters" className="font-extrabold pb-4" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Combo" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price range:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="text"
            placeholder="0"
            min={0}
            max={10}
            defaultValue={0}
          />
          <Input
            type="text"
            placeholder="100"
            min={10}
            max={100}
            defaultValue={15}
          />
          <RangeSlider min={0} max={100} step={1} value={[0, 100]} />
        </div>
      </div>
      <CheckboxFiltersGroup
        title="Ingridients"
        className="mt-5"
        defaultItems={[
          {
            text: "Cheese sous",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Cucumber",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Cheese sous",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Cucumber",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
      />
    </div>
  );
};
