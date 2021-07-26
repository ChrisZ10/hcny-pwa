import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import MyTextInput from '../components/form/MyTextInput';

const ContactForm = () => {
  const regex = /\((\d{3})\)(\d{3})-(\d{4})/;
  return (
    <>
      <h1 style = {{marginTop: "200px"}}>聯繫我們</h1>
      <Formik
        initialValues = {{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          //message: ""
        }}
        validationSchema = { Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          phone: Yup.string()
            .matches(regex, "Invalid phone number"),
          //message: Yup.string()
            //.required("Required")
        })}
        onSubmit = {(values, { setSubmitting }) => {
          alert(values.firstName);
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label = "First Name"
            name = "firstName"
            type = "text"
            placeholder = "Your First Name"
          />
          <MyTextInput
            label = "Last Name"
            name = "lastName"
            type = "text"
            placeholder = "Your Last Name"
          />
          <MyTextInput
            label = "Email"
            name = "email"
            type = "text"
            placeholder = "Your Email"
          />
          <MyTextInput
            label = "Phone Number"
            name = "phone"
            type = "text"
            placeholder = "Your Phone Number"
          />
          <button type = "submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;