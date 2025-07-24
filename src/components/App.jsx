import "../styles/app.css";
import { useState } from "react";
import Contact from "./Contact";
import Resume from "./Resume";
import Education from "./Education";
import Experience from "./Experience";

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

  const [experience, setExperience] = useState([
    {
      id: Date.now(),
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      startingDate: "",
      endDate: "",
    },
  ]);

  const [showContactSection, setShowContactSection] = useState(true);
  const [showEducationSection, setShowEducationSection] = useState(true);
  const [showExperienceSection, setShowExperienceSection] = useState(true);

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

  const handleAddExperience = () => {
    setExperience((previousValue) => [
      ...previousValue,
      {
        id: Date.now(),
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        startingDate: "",
        endDate: "",
      },
    ]);
  };

  const handleExperienceChange = (id, field, value) => {
    setExperience((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setResume(
      <Resume
        name={name}
        email={email}
        phone={phone}
        education={education}
        experience={experience}
      />
    );

    setShowContactSection(!showContactSection);
    setShowEducationSection(!showEducationSection);
    setShowExperienceSection(!showExperienceSection);
    setButtonText("Edit");
  };

  return (
    <>
      {showContactSection ? <h1>Generate your resume</h1> : null}

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
                className="newSectionBtn"
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

        {showExperienceSection ? (
          <div className="experience">
            <div className="header">
              <h2>Experience</h2>
              <button
                type="button"
                className="newSectionBtn"
                onClick={handleAddExperience}
              >
                +
              </button>
            </div>
            {experience.map((entry) => (
              <Experience
                key={entry.id}
                id={entry.id}
                experience={entry}
                onChange={handleExperienceChange}
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
