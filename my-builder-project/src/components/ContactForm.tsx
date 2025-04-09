"use client";

import * as React from "react";
import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";
import { Button } from "./Button";

const ContactForm: React.FC = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email before submission
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));

      // Scroll to email field
      emailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Add a small delay before focusing to ensure smooth scroll completes
      setTimeout(() => {
        emailRef.current?.focus();
      }, 500);

      return;
    }

    // Clear any existing errors
    setErrors({ email: "" });

    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear email error when user starts typing
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-8 text-base text-gray-400 whitespace-nowrap bg-gray-800 max-w-[569px] max-md:px-5"
    >
      <div className="flex flex-wrap gap-4 items-start w-full max-w-[505px] max-md:max-w-full">
        <FormInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          ref={emailRef}
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <div className="mt-4 w-full">
        <FormInput
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full"
          required
        />
      </div>

      <div className="mt-4 w-full">
        <FormTextArea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="pb-24 min-h-[119px]"
          required
        />
      </div>

      <div className="mt-4">
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};

export default ContactForm;
