import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./styles.css";



const MultiFieldForm = () => {
  return (
    <div className="form-container">
      <h2>Multi-Field Form</h2>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", phone: "", address: "" }}
       
        onSubmit={(values, { setSubmitting, resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field type="text" name="firstName" id="firstName" />
           
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name="lastName" id="lastName" />
           
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
            
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <Field type="text" name="phone" id="phone" />
              
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <Field as="textarea" name="address" id="address" />
            
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiFieldForm;