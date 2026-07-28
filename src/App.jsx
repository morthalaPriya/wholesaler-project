import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100">
        {/* Header and other components */}
      </div>
    </div>
  );
}

export default App;