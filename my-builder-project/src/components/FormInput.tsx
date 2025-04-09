"use client";

import * as React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex-1 min-w-60">
        <input
          className={`w-full gap-2 p-2 border border-solid basis-0 ${
            error ? "border-red-500" : "border-[#ABB2BF]"
          } min-w-60 bg-transparent text-gray-400 focus:outline-none focus:border-[#C778DD] transition-all duration-300 focus:ring-2 focus:ring-[#C778DD]/20 ${className}`}
          placeholder={label}
          aria-label={label}
          aria-invalid={error ? "true" : "false"}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

export { FormInput };
