import "../styles/form.css";
import { useState } from "react";
import Contact from "./Contact";
import Resume from "./Resume";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [generatedResume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResume(<Resume name={name} email={email} phone={phone} />);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
      {generatedResume}
    </>
  );
}
