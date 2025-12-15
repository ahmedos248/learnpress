import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import useData from "./components/hooks/useData";

function App() {
  const { filteredArticles } = useData();
  return (
    <div className="flex flex-col min-h-screen w-full relative exo-text">
      <Header />
      <main className="mt-14">
        <Outlet context={{ articles: filteredArticles }} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
