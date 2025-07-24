import "../styles/resume.css";

export default function Resume({ name, email, phone, education, experience }) {
  return (
    <div className="resume">
      <div className="contacts">
        <div className="name">{name}</div>
        <div className="emailPhone">
          {email} | {phone}
        </div>
      </div>
      {education ? <hr /> : null}
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
      {experience ? <hr /> : null}
      {experience.map((entry) => (
        <div key={entry.id}>
          <div className="experience">
            <div className="company">{entry.companyName}</div>
            <div className="dates">
              <div className="startingDate">
                {entry.startingDate
                  ? "Starting date: " + entry.startingDate
                  : null}
              </div>
              <div className="endDate">
                {entry.endDate ? "End Date: " + entry.endDate : null}
              </div>
            </div>
            <div className="jobTitle">
              {entry.positionTitle ? "Position : " + entry.positionTitle : null}
            </div>
            <div className="responsibilities">
              {entry.mainResponsibilities ? entry.mainResponsibilities : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
