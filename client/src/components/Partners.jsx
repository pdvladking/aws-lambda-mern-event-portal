const Partners = ({ partners = [] }) => (
  <section>
    <h2>Partners</h2>
    {partners.length === 0 ? (
      <p>No partners listed.</p>
    ) : (
      partners.map((p, i) => (
        <div key={i}>
          <p>{p.name}</p>
          {p.logo && <img src={p.logo} alt={p.name} />}
        </div>
      ))
    )}
  </section>
);

export default Partners;
