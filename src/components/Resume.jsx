import "../styles/resume.css";

export default function Resume({ name, email, phone }) {
  return (
    <div className="resume">
      <div className="contacts">
        <div className="name">{name}</div>
        <div className="emailPhone">
          {email} | {phone}
        </div>
      </div>
    </div>
  );
}
