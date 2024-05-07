import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";

interface Props extends Omit<TextFieldProps, ""> {
  id: string;
  label?: string;
}

const InputText: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, id, error, ...rest },
  ref
) => {
  return (
    <>
      <TextField id={id} label={label || ""} inputRef={ref} {...rest} />
    </>
  );
};

export default forwardRef(InputText);
