import "../styles/education.css";

export default function Education({
  schoolName,
  setSchoolName,
  titleOfStudy,
  setTitleOfStudy,
  dateOfGraduation,
  setDateOfGraduation,
}) {
  return (
    <div className="education">
      <div className="header">
        <h2>Education</h2>
        <button type="button" className="newEducation">
          +
        </button>
      </div>
      <div className="educationCard">
        <div className="field">
          <label htmlFor="schoolName">School / University: </label>
          <input
            type="text"
            id="schoolName"
            value={schoolName}
            onChange={(e) => {
              setSchoolName(e.target.value);
            }}
            placeholder="Harvard University"
          />
        </div>
        <div className="field">
          <label htmlFor="titleOfStudy">Title of study: </label>
          <input
            type="text"
            id="titleOfStudy"
            value={titleOfStudy}
            onChange={(e) => {
              setTitleOfStudy(e.target.value);
            }}
            placeholder="Environmental Science and Engineering"
          />
        </div>
        <div className="field">
          <label htmlFor="dateOfGraduation">Date of graduation: </label>
          <input
            type="date"
            id="dateOfGraduation"
            value={dateOfGraduation}
            onChange={(e) => {
              setDateOfGraduation(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
