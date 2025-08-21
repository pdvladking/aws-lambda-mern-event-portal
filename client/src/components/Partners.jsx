import { useState } from 'react';

const PartnerForm = () => {
  const [partners, setPartners] = useState([{ name: '', logo: '' }]);

  const addPartner = () => {
    setPartners((prev) => [...prev, { name: '', logo: '' }]);
  };

  const handlePartnerChange = (index, field, value) => {
    const updated = [...partners];
    updated[index] = { ...updated[index], [field]: value };
    setPartners(updated);
  };

  return (
    <section>
      <h2>Partners</h2>

      {partners.map((p, i) => (
        <div key={i} style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            value={p?.name ?? ''}
            onChange={(e) => handlePartnerChange(i, 'name', e.target.value)}
            placeholder={`Partner ${i + 1} Name`}
            style={{ marginRight: '0.5rem' }}
          />
          <input
            type="text"
            value={p?.logo ?? ''}
            onChange={(e) => handlePartnerChange(i, 'logo', e.target.value)}
            placeholder={`Partner ${i + 1} Logo URL`}
          />
        </div>
      ))}

      <button type="button" onClick={addPartner}>
        Add Partner
      </button>
    </section>
  );
};

export default PartnerForm;
