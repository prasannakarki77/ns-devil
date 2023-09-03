import React from "react";
import { Control } from "react-hook-form";
import {
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "../ui/input";

interface RHFTextFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  type?: string;
}

const RHFTextField: React.FC<RHFTextFieldProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  control,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFTextField;
