import React from "react";
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalHomePage from "./pages/PersonalHomePage";
import BusinessHomepage from "./pages/BusinessHomepage";
import HomepageLayout from "./layout/HomepageLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <HomepageLayout>
                <PersonalHomePage />
              </HomepageLayout>
            }
          />
          <Route
            path="/businessHomepage"
            element={
              <HomepageLayout>
                <BusinessHomepage />
              </HomepageLayout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
