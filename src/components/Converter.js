import React, { useState } from 'react';

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
}

export default function Converter() {
  const [form, setForm] = useState({
    hex: '',
    rgb: ''
  });

  const handleHexChange = (evt) => {
    setForm(prevForm => ({ ...prevForm, hex: evt.target.value, rgb: hexToRgb(evt.target.value) }));
  }

  return (
    <div className="container" style={form.hex.length === 7 ? { backgroundColor: form.hex } : null}>
      <div className="form" >
        <input className="form-hex" type="text" value={form.hex} onChange={handleHexChange} />
        <div className="result-rgb">{form.hex.length === 7 ? form.rgb ? 'rgb(' + form.rgb + ')' : 'Ошибка!' : null}</div>
      </div>
    </div>
  )
}
