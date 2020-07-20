import React from "react";

const Searchbox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      placeholder="Search..."
      value={value}
      className="form-control my-3"
      onChange={(e) => onChange(e.currentTarget.value)}
    ></input>
  );
};

export default Searchbox;
