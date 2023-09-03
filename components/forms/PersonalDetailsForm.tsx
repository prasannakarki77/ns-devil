"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useFormValues from "@/app/hooks/useFormValues";

import RHFTextField from "../react-hook-form/RHFTextField";
import RHFSelect from "../react-hook-form/RHFSelect";
import RHFDatePicker from "../react-hook-form/RHFDatePicker";

const formSchema = z.object({
  firstname: z.string().min(1, { message: "Firstname is required" }),
  lastname: z.string().min(1, { message: "Lastname is required" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  dateOfBirth: z.date(),
  address: z.string().min(1, { message: "Address is required" }),
});

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

interface PersonalDetailsFormProps {
  onNext: VoidFunction;
  onPrevious: VoidFunction;
}

export const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  onNext,
  onPrevious,
}) => {
  const { values, setValues } = useFormValues();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: values.firstname || "",
      lastname: values.lastname || "",
      address: values.address || "",
      gender: values.gender || "",
      dateOfBirth: values.dateOfBirth || undefined,
    },
  });

  const {
    handleSubmit,
    control,
    clearErrors,
    getValues,
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValues({ ...values, ...data });
    onNext();
  };
  const handlePrevClick = () => {
    clearErrors();

    setValues({
      ...values,
      ...getValues(),
    });
    onPrevious();
  };
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
        <div className=" grid grid-cols-2 gap-4 ">
          <RHFTextField
            name="firstname"
            control={control}
            label="Firstname"
            placeholder="Firstname"
          />
          <RHFTextField
            name="lastname"
            control={control}
            label="Lastname"
            placeholder="Lastname"
          />
          <RHFSelect
            name="gender"
            control={control}
            label="Gender"
            options={genderOptions}
            defaultValue={values.gender}
          />
          <RHFDatePicker
            name="dateOfBirth"
            control={control}
            label="Date of Birth"
          />
        </div>
        <RHFTextField
          name="address"
          control={control}
          label="Address"
          placeholder="Address"
        />
        <div className="flex justify-between">
          <Button onClick={handlePrevClick}>Previous</Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};
