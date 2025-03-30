import React from "react";
import "./App.css";

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" }
];

const ListComponent = () => {
  return (
    <div className="container">
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li> 
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
