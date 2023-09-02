"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import useFormValues from "@/app/hooks/useFormValues";

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
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValues({ ...values, ...data });
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 my-10">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <div className="flex justify-between">
          <Button onClick={handlePrevious} disabled={active == 1}>
              Previous
            </Button>{" "} 
            
               <Button onClick={onNext} disabled={active == 3}>
              Next
            </Button>
        </div> */}
        <div className="flex justify-end">
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};
