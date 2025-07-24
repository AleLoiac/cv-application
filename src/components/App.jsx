import "../styles/app.css";
import { useState } from "react";
import Contact from "./Contact";
import Resume from "./Resume";
import Education from "./Education";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [education, setEducation] = useState([
    {
      id: Date.now(),
      schoolName: "",
      titleOfStudy: "",
      dateOfGraduation: "",
    },
  ]);

  const [showContactSection, setShowContactSection] = useState(true);
  const [showEducationSection, setShowEducationSection] = useState(true);
  const [buttonText, setButtonText] = useState("Generate");
  const [generatedResume, setResume] = useState(null);

  const handleAddEducation = () => {
    setEducation((previousValue) => [
      ...previousValue,
      {
        id: Date.now(),
        schoolName: "",
        titleOfStudy: "",
        dateOfGraduation: "",
      },
    ]);
  };

  const handleEducationChange = (id, field, value) => {
    setEducation((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResume(<Resume name={name} email={email} education={education} />);
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
          <div className="education">
            <div className="header">
              <h2>Education</h2>
              <button
                type="button"
                className="newEducation"
                onClick={handleAddEducation}
              >
                +
              </button>
            </div>
            {education.map((entry) => (
              <Education
                key={entry.id}
                id={entry.id}
                education={entry}
                onChange={handleEducationChange}
              />
            ))}
          </div>
        ) : null}

        <button type="submit" className="submitBtn">
          {buttonText}
        </button>
      </form>
      {generatedResume}
    </>
  );
}
