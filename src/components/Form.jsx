import "../styles/form.css";
import { useState } from "react";
import Contact from "./Contact";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    renderForm(name, email, phone);
  };

  const renderForm = (name, email, phone) => {
    console.log(name, email, phone);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <Contact
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
      />
      <button type="submit" className="submitBtn">
        Generate
      </button>
    </form>
  );
}
