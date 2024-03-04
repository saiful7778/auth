"use client";
import { useState } from "react";
import { Form, Formik } from "formik";
import { loginSchema } from "@/lib/schemas/authentication";
import Input from "@/components/formik/Input";
import Password from "@/components/formik/Password";
import Button from "@/components/utilities/Button";

const LoginForm = () => {
  const [spinner, setSpinner] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (e) => {
    setSpinner(true);
    console.log(e);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form className="my-4 space-y-2">
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
        <Button
          type="submit"
          className="w-full"
          variant="confirm"
          disabled={spinner}
        >
          {spinner ? <span>Submating....</span> : <span>Login</span>}
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
