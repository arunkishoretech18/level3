// src/components/FormComponent.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";

const FormComponent = () => {
  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <Formik
        initialValues={{ name: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string().email("Invalid email").required("Email is required"),
          message: Yup.string().min(10, "Message should be at least 10 characters").required("Message is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <label htmlFor="name" className="Arun">Name:</label>
            <Field type="text" name="name" className="input-field" />


            

            <button type="submit" disabled={isSubmitting} className="submit-button">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
