import "../../css/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h1>Contact Form</h1>
      <form
        className="contact-form"
        action="http://localhost:3000/submit-form"
        method="post"
      >
        <div className="inputElement">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="inputElement">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>

        <div className="inputElement">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />
        </div>

        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
