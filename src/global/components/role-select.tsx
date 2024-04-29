import React from "react";
import { ROLE } from "../../lib/enum";
import { Select } from "@mantine/core";

type SelectRoleProps = {
  value: ROLE | null;
  label: string;
  variant: string;
  error: React.ReactNode;
  placeholder: string;
  onChange: (value: ROLE) => void;
};

const SelectRole: React.FC<SelectRoleProps> = ({
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
      data={[ROLE.CASHIER]}
      onChange={(value: string | null) => {
        if (Object.values(ROLE).includes(value as ROLE)) {
          onChange(value as ROLE);
        }
      }}
      variant={variant}
      error={error}
    />
  );
};

export default SelectRole;
