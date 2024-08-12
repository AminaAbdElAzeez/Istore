import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactLeft.css";

function ContactLeft() {
  return (
    <>
      <ul className="left-contact">
        <li>
          <FontAwesomeIcon icon={faPhone} className="contact-left-icon" />
          Call To Us
        </li>
        <li>We are available 24/7, 7 days a week.</li>
        <li>
          <strong>Phone:</strong> +8801611112222
        </li>
      </ul>
      <hr />
      <ul className="left-contact">
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="contact-left-icon" />
          Write To US
        </li>
        <li>Fill out our form and we will contact you within 24 hours.</li>
        <li>
          <strong> Emails:</strong> customer@exclusive.com
        </li>
        <li>
          <strong> Emails:</strong> support@exclusive.com
        </li>
      </ul>
    </>
  );
}

export default ContactLeft;
