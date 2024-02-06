import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={ContactForm}>
      <label htmlFor="nameInput">
        Name:
        <input id="nameInput" 
        value={name} 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        required/>
      </label>

      <label htmlFor="phoneInput">
        Phone Number:
      <input id="phoneInput"
      value={phone} 
      type="tel" 
      pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$" 
      onChange={(e) => setPhone(e.target.value)} 
      required />
      </label>

      <label htmlFor="emailInput">
        Email:
      <input id="emailInput"
      value={email} 
      type="email" 
      onChange={(e) => setEmail(e.target.value)} 
      required/>
      </label>

      <label>
        Add Contact
        <input type="submit" value="Submit" />
      </label>

      
    </form>
  );
};

