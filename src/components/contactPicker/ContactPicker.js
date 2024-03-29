import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <>
      <select onChange={onChange} value={value} name={name}>
        <option value="">No Contact Selected</option>
        {contacts.map((item) => (
          <option key={name}>{item.name}</option>
        ))}
      </select>
    </>
  );
};
