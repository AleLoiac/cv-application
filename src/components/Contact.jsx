import "../styles/contact.css";

export default function Contact({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <div className="field">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Mario Red"
          autoComplete="on"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Redmario@gmail.com"
          autoComplete="on"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone number: </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          placeholder="333 4445555"
          autoComplete="on"
          required
        />
      </div>
    </div>
  );
}
