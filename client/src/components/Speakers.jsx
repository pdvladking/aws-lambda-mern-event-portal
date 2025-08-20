const Speakers = ({ speakers = [] }) => (
  <section>
    <h2>Speakers</h2>
    {speakers.length === 0 ? (
      <p>No speakers added yet.</p>
    ) : (
      speakers.map((s, i) => (
        <div key={i}>
          <h3>{s.name}</h3>
          <p>{s.designation}</p>
          {s.image && <img src={s.image} alt={s.name} />}
        </div>
      ))
    )}
  </section>
);

export default Speakers;
