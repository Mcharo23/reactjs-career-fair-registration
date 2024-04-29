import { FileInput } from "@mantine/core";
import { IconFileTypePng } from "@tabler/icons-react";
import React from "react";

type SingleImageUploadProps = {
  label: string;
  value: File | null;
  placeholder: string;
  description: string;
  error: React.ReactNode;
  onChange: (value: File | null) => void;
};

const SingleImageUpload: React.FC<SingleImageUploadProps> = ({
  description,
  error,
  label,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <FileInput
      accept=".jpg,.jpeg,.png"
      label={label}
      placeholder={placeholder}
      value={value}
      multiple={false}
      description={description}
      leftSection={<IconFileTypePng />}
      clearable
      onChange={onChange}
      error={error}
    />
  );
};

export default SingleImageUpload;
