import "../styles/resume.css";

export default function Resume({ name, email, phone, education }) {
  return (
    <div className="resume">
      <div className="contacts">
        <div className="name">{name}</div>
        <div className="emailPhone">
          {email} | {phone}
        </div>
      </div>
      <hr />
      {education.map((entry) => (
        <div key={entry.id}>
          <div className="education">
            <div className="school">{entry.schoolName}</div>
            <div className="schoolInfo">
              <div className="titleOfStudy">
                {entry.titleOfStudy
                  ? "Title of Study: " + entry.titleOfStudy
                  : null}
              </div>
              <div className="graduationDate">
                {entry.dateOfGraduation
                  ? "Graduation date: " + entry.dateOfGraduation
                  : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
