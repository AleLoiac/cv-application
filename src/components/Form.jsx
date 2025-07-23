import "../styles/form.css";
import { useState } from "react";
import Contact from "./Contact";
import Resume from "./Resume";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [generatedResume, setResume] = useState(null);
  const [showContactSection, setShowContactSection] = useState(true);
  const [buttonText, setButtonText] = useState("Generate");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResume(<Resume name={name} email={email} phone={phone} />);
    setShowContactSection(!showContactSection);
    setButtonText("Edit");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {showContactSection ? (
          <Contact
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
        ) : null}
        <button type="submit" className="submitBtn">
          {buttonText}
        </button>
      </form>
      {generatedResume}
    </>
  );
}
