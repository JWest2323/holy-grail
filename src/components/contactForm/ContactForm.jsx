import submitForm from "./submitForm";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h1>Contact Form</h1>
      <form
        action="https://www.greatfrontend.com/api/questions/contact-form"
        onSubmit={submitForm}
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
