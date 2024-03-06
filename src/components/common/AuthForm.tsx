import React, { useState } from "react";
import { AuthFormProps, FormDataTypes } from "../../types";
import Input from "./FormComponents/input";

export default function AuthForm({
  onSubmit,
  buttonText = "Submit",
}: AuthFormProps) {
  const initialFormData: FormDataTypes = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormDataTypes>(initialFormData);

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData);
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <Input
              value={formData.email}
              onChange={handleInputChange}
              label={"email"}
              required
              type="email"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-2">
            <Input
              value={formData.password}
              onChange={handleInputChange}
              label={"password"}
              required
              type="password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}
