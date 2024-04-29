import { Select } from "@mantine/core";
import React from "react";
import { TIME_RANGE } from "../../lib/enum";

type SelectTimeRangeProps = {
  value: TIME_RANGE | null;
  label: string;
  onChange: (value: TIME_RANGE) => void;
};

const SelectTimeRange: React.FC<SelectTimeRangeProps> = ({
  label,
  onChange,
  value,
}) => {
  return (
    <Select
      label={label}
      value={value}
      data={[
        TIME_RANGE.TODAY,
        TIME_RANGE.YESTERDAY,
        TIME_RANGE.THIS_WEEK,
        TIME_RANGE.THIS_MONTH,
        TIME_RANGE.LAST_MONTH,
        TIME_RANGE.LAST_YEAR,
      ]}
      variant="filled"
      onChange={(value: string | null) => {
        if (Object.values(TIME_RANGE).includes(value as TIME_RANGE)) {
          onChange(value as TIME_RANGE);
        }
      }}
    />
  );
};

export default SelectTimeRange;
