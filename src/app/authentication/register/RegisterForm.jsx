"use client";
import { useState } from "react";
import { Form, Formik } from "formik";
import { registerSchema } from "@/lib/schemas/authentication";
import Input from "@/components/formik/Input";
import Password from "@/components/formik/Password";
import Button from "@/components/utilities/Button";
import createUser from "@/lib/actions/user/createUser";
import SuccessInline from "@/components/status/SuccessInline";
import ErrorInline from "@/components/status/ErrorInline";

const RegisterForm = () => {
  const [spinner, setSpinner] = useState(false);

  const [successStatus, setSuccessStatus] = useState("");
  const [errorStatus, setErrorStatus] = useState("");

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSpinner = () => setSpinner((l) => !l);

  const handleSubmit = async (e, { resetForm }) => {
    handleSpinner();
    setSuccessStatus("");
    setErrorStatus("");
    try {
      const res = await createUser(e);
      if (!res.success) {
        throw res.message;
      }
      setSuccessStatus(res.message);
    } catch (err) {
      setErrorStatus(err);
    }
    resetForm();
    handleSpinner();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <Form className="my-4 space-y-2">
        <Input
          type="text"
          label="Full name"
          name="fullName"
          placeholder="Full name"
          disabled={spinner}
          required
        />
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
        <SuccessInline message={successStatus} />
        <ErrorInline message={errorStatus} />
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
