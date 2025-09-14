import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DamageChart({ impactos }) {
  // Etiquetas: ID o tiempo de impacto
  const labels = impactos.map((imp) => `ID ${imp.id}`);

  const data = {
    labels,
    datasets: [
      {
        label: "Diámetro del Meteorito (m)",
        data: impactos.map((imp) => imp.diametro),
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 6,
      },
      {
        label: "Velocidad (px/frame)",
        data: impactos.map((imp) => imp.velocidad),
        borderColor: "rgba(54,162,235,1)",
        backgroundColor: "rgba(54,162,235,0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Impactos Registrados" },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ marginTop: "20px", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
}
