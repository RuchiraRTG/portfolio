import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import { PortfolioHome } from "./pages/PortfolioHome";
import { ProjectDetail } from "./pages/ProjectDetail";
import { PageTransitionProvider } from "./context/PageTransitionContext";

function App() {
  const location = useLocation();

  return (
    <PageTransitionProvider>
      <div className="App">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  key="home-page"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.25 } }}
                >
                  <PortfolioHome />
                </motion.div>
              }
            />
            <Route
              path="/project/:projectId"
              element={
                <motion.div
                  key="project-detail-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.35, delay: 0.1 } }}
                  exit={{ opacity: 0, transition: { duration: 0.25 } }}
                >
                  <ProjectDetail />
                </motion.div>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </PageTransitionProvider>
  );
}

export default App;
