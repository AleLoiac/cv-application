import "../styles/resume.css";

export default function Resume({
  name,
  email,
  phone,
  schoolName,
  titleOfStudy,
  dateOfGraduation,
}) {
  return (
    <div className="resume">
      <div className="contacts">
        <div className="name">{name}</div>
        <div className="emailPhone">
          {email} | {phone}
        </div>
      </div>
      <hr />
      <div className="education">
        <div className="school">{schoolName}</div>
        <div className="schoolInfo">
          <div className="titleOfStudy">
            {titleOfStudy ? "Title of Study: " + titleOfStudy : null}
          </div>
          <div className="graduationDate">
            {dateOfGraduation ? "Graduation date: " + dateOfGraduation : null}
          </div>
        </div>
      </div>
    </div>
  );
}
