import { useState } from "react";

export default function MeteoriteForm({ onSimulate }) {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [diametro, setDiametro] = useState(100);
  const [velocidad, setVelocidad] = useState(200);
  const [angulo, setAngulo] = useState(45);

  const handleSimulate = () => {
    onSimulate({ lat, lng, diametro, velocidad, angulo, id: Date.now() });
  };

  return (
    <div>
      <h2>⚙️ Configuración del Meteorito</h2>
      <label>Latitud</label>
      <input type="number" value={lat} onChange={e => setLat(parseFloat(e.target.value))} />
      <label>Longitud</label>
      <input type="number" value={lng} onChange={e => setLng(parseFloat(e.target.value))} />
      <label>Diámetro (m)</label>
      <input type="number" value={diametro} onChange={e => setDiametro(parseFloat(e.target.value))} />
      <label>Velocidad (px/frame)</label>
      <input type="number" value={velocidad} onChange={e => setVelocidad(parseFloat(e.target.value))} />
      <label>Ángulo (°)</label>
      <input type="number" value={angulo} onChange={e => setAngulo(parseFloat(e.target.value))} />
      <button onClick={handleSimulate}>🚀 Simular impacto</button>
    </div>
  );
}
