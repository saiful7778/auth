"use client";
import { useState } from "react";
import { Form, Formik } from "formik";
import { registerSchema } from "@/lib/schemas/authentication";
import Input from "@/components/formik/Input";
import Password from "@/components/formik/Password";
import Button from "@/components/utilities/Button";

const RegisterForm = () => {
  const [spinner, setSpinner] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (e) => {
    setSpinner(true);
    console.log(e);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <Form className="my-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <Input
            type="text"
            label="First name"
            name="firstName"
            placeholder="First name"
            disabled={spinner}
            required
          />
          <Input
            type="text"
            label="Last name"
            name="lastName"
            placeholder="Last name"
            disabled={spinner}
          />
        </div>
        <Input
          type="email"
          label="Email address"
          name="email"
          placeholder="Email address"
          disabled={spinner}
          required
        />
        <Password
          name="password"
          placeholder="Password"
          label="Password"
          disabled={spinner}
        />
        <Password
          name="confirmPassword"
          placeholder="Confirm Password"
          label="Confirm Password"
          disabled={spinner}
        />
        <Button
          type="submit"
          className="w-full"
          variant="confirm"
          disabled={spinner}
        >
          {spinner ? <span>Submating....</span> : <span>Register</span>}
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
