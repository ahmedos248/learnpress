import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full relative bg-blue-50">
      <Header />
      <main className="mt-14">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
