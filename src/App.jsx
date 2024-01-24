import Footer from "./components/Footer";
import Header from "./components/header-section/Header";
import MovieList from "./components/movie-section/MovieList";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
