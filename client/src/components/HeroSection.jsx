const HeroSection = ({ title, date, banner }) => (
  <section className="hero">
    <img src={banner} alt="Event Banner" />
    <h1>{title}</h1>
    <p>{date}</p>
  </section>
);

export default HeroSection;
