import { useState } from "react";
import MeteoriteForm from "./components/MeteoriteForm";
import MeteorCanvas from "./components/MeteorCanvas";
import DamageChart from "./components/DamageChart";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Icono meteorito
const meteorIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

function App() {
  const [impactos, setImpactos] = useState([]);

  const handleSimulate = (nuevoImpacto) => {
    setImpactos([...impactos, nuevoImpacto]);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <MeteoriteForm onSimulate={handleSimulate} />
        <DamageChart impactos={impactos} />
      </div>

      {/* Mapa */}
      <div className="map-area">
        <div className="title-bar">Simulación de Impacto de Meteoritos</div>
        <MapContainer center={[0, 0]} zoom={2} style={{ width: "100%", height: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {impactos.map((imp) => (
            <Marker key={imp.id} position={[imp.lat, imp.lng]} icon={meteorIcon}>
              <Popup>💥 Impacto detectado ({imp.lat}, {imp.lng})</Popup>
            </Marker>
          ))}
        </MapContainer>

        {impactos.map((imp) => (
          <MeteorCanvas key={imp.id} impacto={imp} />
        ))}
      </div>
    </div>
  );
}

export default App;
