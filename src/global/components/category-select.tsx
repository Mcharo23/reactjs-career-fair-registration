import React from "react";
import { CATEGORY } from "../../lib/enum";
import { Select } from "@mantine/core";

type SelectCategoryProps = {
  value: CATEGORY | null;
  label: string;
  variant: string;
  error: React.ReactNode;
  placeholder: string;
  onChange: (value: CATEGORY) => void;
};

const SelectCategory: React.FC<SelectCategoryProps> = ({
  label,
  onChange,
  value,
  variant,
  error,
  placeholder,
}) => {
  return (
    <Select
      label={label}
      value={value}
      data={[CATEGORY.NORMAL, CATEGORY.VIP]}
      variant={variant}
      placeholder={placeholder}
      onChange={(value: string | null) => {
        if (Object.values(CATEGORY).includes(value as CATEGORY)) {
          onChange(value as CATEGORY);
        }
      }}
      error={error}
    />
  );
};

export default SelectCategory;
