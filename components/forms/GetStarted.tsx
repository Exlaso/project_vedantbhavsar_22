"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AtSign, ChevronLeft, ChevronRight, Loader } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { StepIndicator } from "@/components/shared/StepIndicator";
import { SuccessAnimation } from "@/components/shared/SuccessAnimation";
import SelectCommand from "../custom/select-command";
import type { MagicField } from "@/utils/types";
import CustomDatePicker from "../custom/date-picker";
import PhoneNumberInput from "../custom/phone-input";
import CustomTextArea from "../custom/textarea";
import { CustomMultiSelect } from "../custom/multiselect";
import CustomSelect from "../custom/select";
import CustomInput from "../custom/input";
import { useAuth, useSession } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const steps = [
  {
    id: "step-1",
    name: "Personal Details",
    fields: ["firstname", "lastname", "birthday", "phone"],
  },
  {
    id: "step-2",
    name: "General Profile",
    fields: ["weight", "height", "gender"],
  },
];

const personalDetails: MagicField[] = [
  {
    type: "input",
    RenderComponent: CustomInput,
    config: {
      type: "text",
      name: "firstname",
      label: "First Name",
      className: "w-full",
      placeholder: "Steve",
      validation: z.string().min(2, "Please enter your first name"),
      defaultValue: "",
    },
  },
  {
    type: "input",
    RenderComponent: CustomInput,
    config: {
      type: "text",
      name: "lastname",
      label: "Last Name",
      className: "w-full",
      placeholder: "Jobs",
      validation: z.string().min(2, "Please enter your last name"),
      defaultValue: "",
    },
  },
  {
    type: "input",
    RenderComponent: CustomDatePicker,
    config: {
      type: "input",
      name: "birthday",
      label: "Birthday",
      placeholder: "Select your birthday",
      className: "cursor-pointer",
      validation: z.string().min(2, "Please select your birthday"),
      defaultValue: "",
    },
  },
  {
    type: "input",
    RenderComponent: PhoneNumberInput,
    config: {
      type: "phone",
      name: "phone",
      label: "Phone (Optional)",
      className: "",
      placeholder: "+1 (555) 000-0000",
      validation: z
        .string()
        .min(10, "Number must be at least 10 characters")
        .optional(),
      defaultValue: "",
    },
  },
];

const generalProfile: MagicField[] = [
  {
    type: "input",
    RenderComponent: CustomInput,
    config: {
      type: "number",
      name: "weight",
      label: "Weight (kg)",
      className: "w-full",
      placeholder: "70",
      validation: z.coerce.number().min(1, "Please enter your weight"),
      defaultValue: "",
    },
  },
  {
    type: "input",
    RenderComponent: CustomInput,
    config: {
      type: "number",
      name: "height",
      label: "Height (cm)",
      className: "w-full",
      placeholder: "175",
      validation: z.string().min(1, "Please enter your height"),
      defaultValue: "",
    },
  },
  {
    type: "select",
    RenderComponent: CustomSelect,
    config: {
      name: "gender",
      label: "Gender",
      className: "w-full",
      placeholder: "Select your gender",
      validation: z.coerce.number().min(1, "Please enter your height"),
      options: () => [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
        { label: "Prefer not to say", value: "prefer_not_to_say" },
      ],
    },
  },
];

const formSchema = z.object({
  firstname: z.string().min(2, "Please enter your first name"),
  lastname: z.string().min(2, "Please enter your last name"),
  birthday: z.date(),
  phone: z
    .string()
    .min(10, "Number must be at least 10 characters")
    .regex(
      /^[0-9+\-\s]+$/,
      "Phone number can only contain numbers, +, -, and spaces"
    )
    .optional(),
  weight: z.coerce.number().min(1, "Please enter your weight"),
  height: z.coerce.number().min(1, "Please enter your height"),
  gender: z.string().min(1, "Please select your gender"),

  // Additional fields can remain for future use
});

export default function GetStarted() {
  const {  isLoaded } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      // birthday: new Date(),
      phone: "",
      gender: "",
    },
  });

  const processForm = async (data: z.infer<typeof formSchema>) => {
    console.log("Form data submitted:", data);

    const formData = new FormData();

    // Append form fields with proper Date handling
    Object.entries({
      ...data,
    }).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => formData.append(key, v));
      } else if (value instanceof File) {
        formData.append(key, value);
      } else if (value instanceof Date) {
        formData.append(key, value.toISOString()); // Convert Date to ISO string
      } else if (value !== null && value !== undefined) {
        formData.append(key, value.toString());
      }
    });

    try {
      // Uncomment when action is available
      // const response = await onBoardDetails(formData);
      // if (response.error) throw new Error(response.error);

      setShowSuccess(true);
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Form submission failed"
      );

      console.error("Form submission error:", error);
    }
  };

  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < step) return "done";
    if (stepIndex === step) return "ongoing";
    return "pending";
  };

  const next = async () => {
    const fields = steps[step].fields;
    const output = await form.trigger(
      fields as Array<keyof z.infer<typeof formSchema>>,
      { shouldFocus: true }
    );

    if (!output) return;

    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const prev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="animate-spin h-5 w-5" />
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="mx-auto flex items-center min-h-screen justify-center w-full px-4 md:px-8">
        <div className="rounded-lg flex items-center justify-center w-full ">
          <SuccessAnimation />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-screen items-center justify-center max-w-6xl px-4 md:px-8">
      <div className="rounded-lg w-full border h-full shadow-sm">
        <div className="grid md:grid-cols-[300px_1fr] h-full w-full bg-primary-foreground rounded-lg">
          {/* Left sidebar */}
          <div className="w-full p-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Complete Your Profile</h1>
              <p className="text-sm text-muted-foreground">
                Make your profile complete by filling out all the necessary
                information. Please verify all details before proceeding.
              </p>
            </div>

            <div className="mt-8 space-y-2">
              {steps.map((s, i) => (
                <div
                  key={s.id}
                  className={cn(
                    "flex items-center gap-3 rounded-md p-3 transition-colors",
                    step === i && "bg-secondary"
                  )}
                >
                  <StepIndicator status={getStepStatus(i)} />
                  <div className="text-sm font-medium">
                    <p className="align-middle">{s.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="bg-white border  m-3 rounded-md">
            <div className="">
              <div className="flex items-center justify-between border-b p-6 pb-4">
                <h2 className="text-lg font-medium">{steps[step].name}</h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {step + 1}/{steps.length} completed
                  </span>
                  <Progress
                    value={((step + 1) / steps.length) * 100}
                    className="w-[100px]"
                  />
                </div>
              </div>

              <div className="w-full p-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(processForm)}
                    className="space-y-6 pt-6"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {step === 0 && (
                          <div className="grid grid-cols-2 gap-6">
                            {personalDetails.map(
                              ({ config, RenderComponent }, i) => (
                                <RenderComponent
                                  key={i}
                                  {...config}
                                  control={form.control}
                                />
                              )
                            )}
                          </div>
                        )}

                        {step === 1 && (
                          <div className="grid grid-cols-2 gap-6">
                            {generalProfile.map(
                              ({ config, RenderComponent }, i) => (
                                <RenderComponent
                                  key={i}
                                  {...config}
                                  control={form.control}
                                />
                              )
                            )}
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex gap-2 pt-4">
                      {step > 0 && (
                        <Button type="button" onClick={prev} variant="outline">
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                      )}
                      {step < steps.length - 1 && (
                        <Button
                          type="button"
                          onClick={next}
                          className="ml-auto"
                        >
                          Next Step
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                      {step === steps.length - 1 && (
                        <Button
                          type="submit"
                          className="ml-auto"
                        >
                          Complete
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
