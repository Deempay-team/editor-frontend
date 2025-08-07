const TextControl = ({ label, value, onChange }) => (
  <div className="mb-3">
    <label className="block text-xs mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border px-2 py-1 w-full text-sm"
    />
  </div>
);

const NumberControl = ({ label, value, onChange }) => (
  <div className="mb-3">
    <label className="block text-xs mb-1">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border px-2 py-1 w-full text-sm"
    />
  </div>
);
