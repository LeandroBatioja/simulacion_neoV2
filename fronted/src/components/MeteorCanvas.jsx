import { useEffect, useRef } from "react";
import { LatLng, Map } from "leaflet";

export default function MeteorCanvas({ impacto }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!impacto) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const mapDiv = document.querySelector(".leaflet-container");
    const mapRect = mapDiv.getBoundingClientRect();

    // Convertir lat/lng a pixeles del canvas
    const map = mapDiv._leaflet_map; // acceder a instancia Leaflet
    if (!map) return;

    const targetPoint = map.latLngToContainerPoint([impacto.lat, impacto.lng]);
    let x = targetPoint.x;
    let y = 0; // empieza desde arriba

    let animationFrame;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar meteorito
      ctx.beginPath();
      ctx.arc(x, y, impacto.diametro / 20, 0, Math.PI * 2);
      ctx.fillStyle = "orange";
      ctx.fill();
      ctx.closePath();

      // Caída
      y += impacto.velocidad / 1000;

      if (y < targetPoint.y) {
        animationFrame = requestAnimationFrame(draw);
      } else {
        // Explosión
        ctx.beginPath();
        ctx.arc(x, y, impacto.diametro / 5, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
      }
    };

    draw();

    return () => cancelAnimationFrame(animationFrame);
  }, [impacto]);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth - 300}
      height={window.innerHeight}
      style={{
        position: "absolute",
        top: 0,
        left: 300,
        pointerEvents: "none",
        zIndex: 100,
      }}
    />
  );
}
