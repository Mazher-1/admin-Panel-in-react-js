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
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem("onboardingComplete");
    console.log("Stored onboarding value:", storedValue);

    // Enhanced condition to set onboardingComplete
    if (storedValue === null) {
      // Default to false if key is not found
      setOnboardingComplete(false);
    } else {
      // Set onboardingComplete based on stored value
      setOnboardingComplete(storedValue === "true");
    }
  }, []);

  // Function to mark onboarding as complete
  const completeOnboarding = () => {
    localStorage.setItem("onboardingComplete", "true");
    setOnboardingComplete(true);
  };
  return (
    <Router>
      <Routes>
        {/* If onboarding is not complete, show the onboarding page */}
        {!onboardingComplete ? (
          <Route path="/" element={<Onboarding completeOnboarding={completeOnboarding} />} />
        ) : (
          <>
            <Route element={<BaseLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/financial-history" element={<FinancialHistory />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            {/* Redirect to dashboard after onboarding completion */}
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
