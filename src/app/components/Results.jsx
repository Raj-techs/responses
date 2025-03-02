"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Results() {
  const [pollData, setPollData] = useState({});

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "pollResponses"), (snapshot) => {
      const data = {};
      snapshot.docs.forEach((doc) => {
        const answer = doc.data().answer;
        data[answer] = (data[answer] || 0) + 1;
      });
      setPollData(data);
    });

    return () => unsubscribe();
  }, []);

  const chartData = {
    labels: Object.keys(pollData),
    datasets: [
      {
        label: "Responses",
        data: Object.values(pollData),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Live Poll Results</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
}
