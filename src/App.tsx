import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/pages/UserPage";
import { ThemeProvider, createTheme } from "@mui/material";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/atom/LoadingSpinner";

const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
  },
});

const LazyDashboard = lazy(() => import("./components/molecules/Dashboard"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route
            path="/Dashboard"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <LazyDashboard />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
