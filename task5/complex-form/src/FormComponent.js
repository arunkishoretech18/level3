import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";

const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Must be at least 3 characters").required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required")
    }),
    onSubmit: (values) => {
      alert("Form Submitted Successfully!\n" + JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="container">
      <h2>Complex Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label className="nn">Name:</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Arun"
        />
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}

        <label className="nn">Email:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="arunkishoremuthu@gmail.com"
        />
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

        <label className="nn">Password:</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="********"
        />
        {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

        <label className="nn">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          placeholder="*********"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
