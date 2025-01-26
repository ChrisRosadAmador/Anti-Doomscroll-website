import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./common/Header/Header";
import PomodoroPage from "./Pages/PomodoroPage/PomodoPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Footer from "./common/Footer/Footer";
import AboutPage from "./Pages/AboutPage/AboutPage";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow pb-14">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Pomodoro" element={<PomodoroPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/AboutUs" element={<AboutPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
