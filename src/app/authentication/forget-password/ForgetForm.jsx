"use client";
import Input from "@/components/formik/Input";
import Button from "@/components/utilities/Button";
import { forgetPasswordSchema } from "@/lib/schemas/authentication";
import { Form, Formik } from "formik";
import { useState } from "react";

const ForgetForm = () => {
  const [spinner, setSpinner] = useState(false);

  const initialValues = {
    email: "",
  };

  const handleSubmit = async (e) => {
    setSpinner(true);
    console.log(e);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={forgetPasswordSchema}
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
        <Button
          type="submit"
          className="w-full"
          variant="confirm"
          disabled={spinner}
        >
          {spinner ? <span>Submating....</span> : <span>Forget password</span>}
        </Button>
      </Form>
    </Formik>
  );
};

export default ForgetForm;
