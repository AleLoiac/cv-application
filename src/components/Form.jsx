import "../styles/form.css";
import { use, useState } from "react";
import Contact from "./Contact";
import Resume from "./Resume";
import Education from "./Education";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfGraduation, setDateOfGraduation] = useState("");
  const [showContactSection, setShowContactSection] = useState(true);
  const [showEducationSection, setShowEducationSection] = useState(true);
  const [buttonText, setButtonText] = useState("Generate");
  const [generatedResume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResume(
      <Resume
        name={name}
        email={email}
        phone={phone}
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}
        dateOfGraduation={dateOfGraduation}
      />
    );
    setShowContactSection(!showContactSection);
    setShowEducationSection(!showEducationSection);
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
        {showEducationSection ? (
          <Education
            schoolName={schoolName}
            setSchoolName={setSchoolName}
            titleOfStudy={titleOfStudy}
            setTitleOfStudy={setTitleOfStudy}
            dateOfGraduation={dateOfGraduation}
            setDateOfGraduation={setDateOfGraduation}
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
