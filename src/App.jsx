import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full relative bg-white">
      <main className="mt-14">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
