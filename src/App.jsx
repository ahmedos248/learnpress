import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full relative ">
      <Header />
      <main className="mt-14 min-h-[1500px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
