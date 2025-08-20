const ContactForm = ({ organizer }) => (
  <section>
    <h2>Contact Organizer</h2>
    <p>
      <strong>Name:</strong> {organizer.name}
    </p>
    <p>
      <strong>Email:</strong> {organizer.email}
    </p>
    <p>
      <strong>WhatsApp:</strong> {organizer.whatsapp}
    </p>
    <p>
      <strong>Message:</strong> {organizer.message}
    </p>
  </section>
);

export default ContactForm;
