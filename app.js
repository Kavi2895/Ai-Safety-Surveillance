
export default function App() {
  const alerts = [
    { id: 1, message: 'Worker without helmet detected', time: '10:30 AM' },
    { id: 2, message: 'Restricted zone breach detected', time: '11:05 AM' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">AI SAFETY SURVEILLANCE DASHBOARD</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">LIVE CAMERA FEED</h2>
          <img
            src="https://via.placeholder.com/600x350?text=Live+Camera+Feed"
            alt="Camera Feed"
            className="w-full rounded-lg"
          />
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">SYSTEM STATUS</h2>
          <div className="space-y-3">
            <div className="p-3 bg-green-100 rounded">AI Model: Running</div>
            <div className="p-3 bg-blue-100 rounded">Cameras Online: 4</div>
            <div className="p-3 bg-yellow-100 rounded">Active Alerts: 2</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-4 mt-6">
        <h2 className="text-xl font-semibold mb-3">RECENT ALERTS</h2>
        <ul className="space-y-2">
          {alerts.map((alert) => (
            <li key={alert.id} className="p-3 bg-red-100 rounded flex justify-between">
              <span>{alert.message}</span>
              <span>{alert.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


