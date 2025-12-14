import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full relative exo-text">
      <Header />
      <main className="mt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
