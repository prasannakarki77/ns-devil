import { z } from "zod";
import { create } from "zustand";

interface FormValuesStore {
  values: any;
  setValues: (values: any) => void;
}

const useFormValues = create<FormValuesStore>((set) => ({
  values: {},
  setValues: (values: any) => set({ values: values }),
}));

export default useFormValues;
