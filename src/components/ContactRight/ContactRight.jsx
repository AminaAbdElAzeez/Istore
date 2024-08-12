import "./ContactRight.css";

function ContactRight() {
  return (
    <form className="contact-form">
      <div className="contact-input">
        <input type="text" placeholder="Your Name*" />
        <input type="email" placeholder="Your Email*" />
        <input type="text" placeholder="Your Phone*" />
      </div>
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactRight;
