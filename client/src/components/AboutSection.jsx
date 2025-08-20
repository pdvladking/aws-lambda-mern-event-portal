const AboutSection = ({ description, purpose }) => (
  <section>
    <h2>About</h2>
    <p>{description}</p>
    <p>
      <strong>Purpose:</strong> {purpose}
    </p>
  </section>
);

export default AboutSection;
