import { Control } from "react-hook-form";
import {
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
// Replace with the actual import for your select library

interface RHFSelectProps {
  name: string;
  control: Control<any>;
  label: string;
  options: { label: string; value: string }[];
  defaultValue?: string;
}

const RHFSelect: React.FC<RHFSelectProps> = ({
  name,
  control,
  label,
  options,
  defaultValue,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={defaultValue || undefined}
          >
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select ${label}`} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFSelect;
