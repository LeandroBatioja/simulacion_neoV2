import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

const meteorIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

export default function Meteorito({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 5, { duration: 2 });
  }, [lat, lng, map]);

  return (
    <Marker position={[lat, lng]} icon={meteorIcon}>
      <Popup>💥 Impacto detectado en ({lat}, {lng})</Popup>
    </Marker>
  );
}
