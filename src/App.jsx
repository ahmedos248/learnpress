import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import useData from "./components/hooks/useData";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const {
    filteredCourses,
    filteredArticles,
    courses,
    articles,
    searchQuery,
    setSearchQuery,
  } = useData();

  return (
    <div className="flex flex-col min-h-screen w-full relative exo-text">
      <ScrollToTop />

      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="mt-14">
        <Outlet
          context={{
            filteredCourses,
            filteredArticles,
            courses,
            articles,
          }}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
