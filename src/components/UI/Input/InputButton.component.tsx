"use client";
import { Button, ButtonProps } from "@mui/material";

interface Props extends Omit<ButtonProps, ""> {
  text: string;
}

export const InputButton: React.FC<Props> = ({ text, ...rest }) => {
  return <Button {...rest}>{text}</Button>;
};
