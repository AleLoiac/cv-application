import "../styles/education.css";

export default function Education({ education, id, onChange }) {
  return (
    <div className="educationCard">
      <div className="field">
        <label htmlFor={`schoolName-${id}`}>School / University: </label>
        <input
          type="text"
          id={`schoolName-${id}`}
          value={education.schoolName}
          onChange={(e) => onChange(id, "schoolName", e.target.value)}
          placeholder="Harvard University"
        />
      </div>

      <div className="field">
        <label htmlFor={`titleOfStudy-${id}`}>Title of study: </label>
        <input
          type="text"
          id={`titleOfStudy-${id}`}
          value={education.titleOfStudy}
          onChange={(e) => onChange(id, "titleOfStudy", e.target.value)}
          placeholder="Environmental Science and Engineering"
        />
      </div>

      <div className="field">
        <label htmlFor={`dateOfGraduation-${id}`}>Date of graduation: </label>
        <input
          type="date"
          id={`dateOfGraduation-${id}`}
          value={education.dateOfGraduation}
          onChange={(e) => onChange(id, "dateOfGraduation", e.target.value)}
        />
      </div>
    </div>
  );
}
