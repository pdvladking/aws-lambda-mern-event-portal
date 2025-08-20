const Agenda = ({ agenda = [] }) => (
  <section>
    <h2>Agenda</h2>
    {agenda.length === 0 ? (
      <p>No agenda items yet.</p>
    ) : (
      agenda.map((item, i) => (
        <div key={i}>
          <strong>{item.time}</strong> — {item.title}
        </div>
      ))
    )}
  </section>
);

export default Agenda;
