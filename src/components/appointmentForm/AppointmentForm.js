import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label> Name:
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
     />
     </label>
     <label> Date:
      <input
        value={date}
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
      />
      </label>
      <label>Time:
      <input value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <ContactPicker contacts={contacts} />
      <button type="submit">Add Appointment</button>
    </form>
  );
};
