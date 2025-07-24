import "../styles/experience.css";

export default function Experience({ experience, id, onChange }) {
  return (
    <div className="experienceCard">
      <div className="field">
        <label htmlFor={`companyName-${id}`}>Company: </label>
        <input
          type="text"
          id={`companyName-${id}`}
          value={experience.companyName}
          onChange={(e) => onChange(id, "companyName", e.target.value)}
          placeholder="Microsoft Corporation"
        />
      </div>

      <div className="field">
        <label htmlFor={`positionTitle-${id}`}>Position: </label>
        <input
          type="text"
          id={`positionTitle-${id}`}
          value={experience.positionTitle}
          onChange={(e) => onChange(id, "positionTitle", e.target.value)}
          placeholder="Team Lead"
        />
      </div>

      <div className="field">
        <label htmlFor={`mainResponsibilities-${id}`}>Responsibilities: </label>
        <textarea
          id={`mainResponsibilities-${id}`}
          value={experience.mainResponsibilities}
          rows="4"
          cols="25"
          onChange={(e) => onChange(id, "mainResponsibilities", e.target.value)}
          placeholder="Mentor and support engineers, driving technical excellence and fostering a culture of collaboration and innovation."
        />
      </div>

      <div className="field">
        <label htmlFor={`startingDate-${id}`}>Starting date: </label>
        <input
          type="date"
          id={`startingDate-${id}`}
          value={experience.startingDate}
          onChange={(e) => onChange(id, "startingDate", e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor={`endDate-${id}`}>End date: </label>
        <input
          type="date"
          id={`endDate-${id}`}
          value={experience.endDate}
          onChange={(e) => onChange(id, "endDate", e.target.value)}
        />
      </div>
    </div>
  );
}
