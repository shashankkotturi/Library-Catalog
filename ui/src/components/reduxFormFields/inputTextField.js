import React from "react";
import { Box, Input } from "@telusdigital/tds";

const InputTextField = (props) => {
  const {
    type,
    label,
    input,
    pattern,
    meta: { touched, error },
    id
  } = props;

  const inputType = type || "text";

  return (
    <Box between={2}>
      <Input
        {...input}
        id={id}
        type={inputType}
        error={touched && error ? error : ""}
        feedback={touched && error ? "error" : (touched) ? "success" : undefined}
        label={label}
        pattern={pattern}
      />
    </Box>
  );
};

export default InputTextField;