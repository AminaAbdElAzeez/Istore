import ContactLeft from "../../components/ContactLeft/ContactLeft";
import ContactRight from "../../components/ContactRight/ContactRight";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <ContactLeft />
          </div>
          <div className="col-lg-8">
            <ContactRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
