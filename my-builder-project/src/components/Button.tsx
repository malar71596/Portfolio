"use client";

import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`gap-2.5 px-4 py-2 font-medium text-white border border-solid border-[#C778DD] hover:bg-[#C778DD]/10 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
