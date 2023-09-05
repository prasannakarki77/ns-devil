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
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  institution: z.string(),
  module: z.string(),
});

const institutionOptions = [{ label: "Institute a", value: "institute A" }];

interface AdditionalDetailsFormProps {
  onFinalSubmit: VoidFunction;
  onPrevious: VoidFunction;
}

export const AdditionalDetailsForm: React.FC<AdditionalDetailsFormProps> = ({
  onFinalSubmit,
  onPrevious,
}) => {
  const { values, setValues } = useFormValues();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institution: values.institution || "",
      module: values.module || "",
    },
  });

  const { handleSubmit, control, clearErrors, getValues } = form;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setSubmitting(true);
    setValues({ ...values, ...data });
    onFinalSubmit();
    setSubmitting(false);
    router.push("/");
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
        <RHFSelect
          name="institution"
          control={control}
          label="Institution"
          options={institutionOptions}
          defaultValue={values.institution}
        />
        <RHFTextField
          name="module"
          control={control}
          label="Module"
          placeholder="Module"
        />
        <div className="flex justify-between">
          <Button onClick={handlePrevClick}>Previous</Button>
          <Button type="submit" disabled={submitting}>
            {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
