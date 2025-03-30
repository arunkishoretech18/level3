import React from "react";
import { useFormik } from "formik";
import "./App.css";

const SimpleForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      regno: "",
      department: "",
      city: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="container">
      <h2>Multiple Inputs</h2>
      <form onSubmit={formik.handleSubmit}>    
        <label class="run">Name:</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label class="run">Reg No:</label>
        <input
          type="text"
          name="regno"
          onChange={formik.handleChange}
          value={formik.values.regno}
        />

        <label class="run">Department:</label>
        <input
          type="text"
          name="department"
          onChange={formik.handleChange}
          value={formik.values.department}
        />

        <label class="run">City:</label>
        <input
          type="text"
          name="city"
          onChange={formik.handleChange}
          value={formik.values.city}
        />

        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
};

export default SimpleForm;

