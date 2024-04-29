import React from "react";
import { GENDER } from "../../lib/enum";
import { Select } from "@mantine/core";

type SelectGenderProps = {
  value: GENDER | null;
  label: string;
  variant: string;
  error: React.ReactNode;
  placeholder: string;
  onChange: (value: GENDER) => void;
};

const SelectGender: React.FC<SelectGenderProps> = ({
  error,
  label,
  onChange,
  placeholder,
  value,
  variant,
}) => {
  return (
    <Select
      label={label}
      value={value}
      placeholder={placeholder}
      data={[GENDER.MALE, GENDER.FEMALE]}
      onChange={(value: string | null) => {
        if (Object.values(GENDER).includes(value as GENDER)) {
          onChange(value as GENDER);
        }
      }}
      variant={variant}
      error={error}
    />
  );
};

export default SelectGender;
