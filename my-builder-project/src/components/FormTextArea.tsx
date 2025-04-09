"use client";

import * as React from "react";

interface FormTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <textarea
      className={`gap-2 px-2 pt-2 w-full border border-solid border-[#ABB2BF] bg-transparent text-gray-400 focus:outline-none focus:border-[#C778DD] ${className}`}
      placeholder={label}
      aria-label={label}
      {...props}
    />
  );
};
