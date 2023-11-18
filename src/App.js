import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainpage/index.js";
import DetailPage from "./pages/detailpage/index.js";
import SearchPage from "./pages/searchpage";

const Layout = () => {
  return(
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
