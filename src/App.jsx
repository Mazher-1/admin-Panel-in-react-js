import { useContext, useEffect, useState } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import Onboarding from "./Onboarding Page/Onboarding";
import FinancialHistory from "./components/FinancialHistory/FinancialHistory";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [onboardingComplete, setOnboardingComplete] = useState(() => {
    // Check local storage to determine if onboarding is complete
    const storedValue = localStorage.getItem("onboardingComplete");
    console.log("Stored onboarding value:", storedValue); // Debugging line
    return storedValue === "true"; // Initialize state based on local storage
  });

  // Effect to handle dark mode
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  // Function to mark onboarding as complete and save to local storage
  const completeOnboarding = () => {
    setOnboardingComplete(true);
    localStorage.setItem("onboardingComplete", "true");
    console.log("Onboarding completed and saved to local storage"); // Confirm function call
  };
  

  return (
    <Router>
      <Routes>
        {!onboardingComplete ? (
          <Route path="/" element={<Onboarding completeOnboarding={completeOnboarding} />} />
        ) : (
          <>
            <Route element={<BaseLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/financial-history" element={<FinancialHistory />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>

      <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
        <img className="theme-icon" src={theme === LIGHT_THEME ? SunIcon : MoonIcon} alt="Toggle theme" />
      </button>
    </Router>
  );
}

export default App;
