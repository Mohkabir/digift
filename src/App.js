import React, { useState } from "react";
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalHomePage from "./pages/PersonalHomePage";
import BusinessHomepage from "./pages/BusinessHomepage";
import HomepageLayout from "./layout/HomepageLayout";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <BrowserRouter>
      <div className={theme ? "theme" : ""}>
        <div className="wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <HomepageLayout setTheme={setTheme} theme={theme}>
                  <PersonalHomePage theme={theme} />
                </HomepageLayout>
              }
            />
            <Route
              path="/businessHomepage"
              element={
                <HomepageLayout setTheme={setTheme} theme={theme}>
                  <BusinessHomepage theme={theme} />
                </HomepageLayout>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
