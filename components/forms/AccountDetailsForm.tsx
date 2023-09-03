"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useFormValues from "@/app/hooks/useFormValues";
import RHFTextField from "../react-hook-form/RHFTextField";

const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const AccountDetailsForm: React.FC<{ onNext: VoidFunction }> = ({
  onNext,
}) => {
  const { values, setValues } = useFormValues();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: values.email || "",
      password: values.password || "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValues({ ...values, ...data });
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
        <RHFTextField
          name="email"
          control={control}
          type="email"
          label="Email"
          placeholder="Email address"
        />
        <RHFTextField
          name="password"
          control={control}
          type="password"
          label="Password"
          placeholder="Enter password"
        />
        <div className="flex justify-end">
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};
