"use client";

import React from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  UseFormRegister,
  FieldErrors,
  DefaultValues,
  Resolver,
  FormProvider,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormModalProps<T extends FieldValues> = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: T) => void;
  schema: yup.ObjectSchema<T>;
  defaultValues: DefaultValues<T>;
  title?: string;
  children: (
    register: UseFormRegister<T>,
    errors: FieldErrors<T>,
    etValue: UseFormSetValue<T>,
    watch: UseFormWatch<T>,
  ) => React.ReactNode;
};

export function FormModal<T extends FieldValues>({
  isOpen,
  onClose,
  onSubmit,
  schema,
  defaultValues,
  title,
  children,
}: FormModalProps<T>) {
  
  const methods = useForm<T>({
    resolver: yupResolver(schema) as Resolver<T>,
    defaultValues,
  });

  const submitHandler = async (data: any) => {
    try {
      await onSubmit(data); // API / parent logic
  
      methods.reset();      // reset only on success
      onClose();            // close modal
    } catch (e) {
      // keep modal open on error
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50">
  <div className="relative w-full max-w-md">

    {/* Glow layer (subtle depth) */}
    <div className="absolute -inset-1 rounded-3xl bg-[var(--secondary)] opacity-20 blur-xl"></div>

    <div className="relative bg-[var(--surface)] rounded-3xl p-6 shadow-lg border border-[var(--button-primary-border)]">

      {title && (
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-5 tracking-tight">
          {title}
        </h2>
      )}

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitHandler)} 
          className="space-y-5"
        >
          {children(
            methods.register,
            methods.formState.errors,
            methods.setValue,
            methods.watch
          )}

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-[var(--foreground)] bg-[var(--accent)] hover:bg-[var(--secondary)] transition-all duration-200 border-secondary border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[var(--primary)] text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  </div>
</div>
  );
}