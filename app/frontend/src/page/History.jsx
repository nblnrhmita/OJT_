import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/assessment/history", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Riwayat Assessment</h1>

      {history.length === 0 && (
        <p className="text-gray-600">Belum ada riwayat assessment.</p>
      )}

      <div className="space-y-4">
        {history.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
            <p className="text-sm text-gray-500">
              Tanggal: {new Date(item.created_at).toLocaleString()}
            </p>
            <p className="mt-2 font-medium">
              Total Jawaban: {Object.keys(JSON.parse(item.answers)).length}
            </p>

            <button
              className="mt-3 px-4 py-2 bg-primary text-white rounded-lg"
              onClick={() => navigate(`/results?id=${item.id}`)}
            >
              Lihat Hasil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
