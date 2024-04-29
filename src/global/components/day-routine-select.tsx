import { Select } from "@mantine/core";
import React from "react";
import { DAY_ROUTINE } from "../../lib/enum";

type SelectDayRoutineProps = {
  value: DAY_ROUTINE | null;
  label: string;
  variant: string;
  error: React.ReactNode;
  placeholder: string;
  onChange: (value: DAY_ROUTINE) => void;
};

const SelectDayRoutine: React.FC<SelectDayRoutineProps> = ({
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
      placeholder={placeholder}
      data={[DAY_ROUTINE.MORNING, DAY_ROUTINE.AFTERNOON, DAY_ROUTINE.NIGHT]}
      variant={variant}
      error={error}
      onChange={(value: string | null) => {
        if (Object.values(DAY_ROUTINE).includes(value as DAY_ROUTINE)) {
          onChange(value as DAY_ROUTINE);
        }
      }}
    />
  );
};

export default SelectDayRoutine;
