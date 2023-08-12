import React from "react";
import { Form, Formik } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Wrapper } from "../components/wrapper";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  // The below import defines which components come from formik
  // import { Field, Form, Formik } from 'formik';
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange }) => (
        <Wrapper variant="small">
        <Form>
          <FormControl>
            <FormLabel htmlFor="username"> Username </FormLabel>
            <Input
              value={values.username}
              onChange={handleChange}
              id="username"
              placeholder="username"
            />
            {/* <FormErrorMessage> {form.errors.username}</FormErrorMessage> */}
          </FormControl>
        </Form>
        </Wrapper>
      )}
    </Formik>
  );
};

export default Register;

