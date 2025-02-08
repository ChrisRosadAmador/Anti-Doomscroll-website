import LandingPage from "./Pages/LandingPage/LandingPage";
import { Route, Routes, useLocation } from "react-router";
import Header from "./common/Header/Header";
import PomodoroPage from "./Pages/PomodoroPage/PomodoPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Footer from "./common/Footer/Footer";
import AboutPage from "./Pages/AboutPage/AboutPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow pb-14">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/Pomodoro" element={<PomodoroPage />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/AboutUs" element={<AboutPage />} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
