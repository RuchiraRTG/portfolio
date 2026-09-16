import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PageTransitionContext = createContext(null);

export const PageTransitionProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [transitionState, setTransitionState] = useState({
    active: false,
    phase: "idle", // 'idle' | 'expanding' | 'fading'
    x: 0,
    y: 0,
  });

  const startTransition = useCallback(
    ({ x, y, targetUrl }) => {
      // Prevent double triggers
      if (transitionState.active) return;

      const clickX = typeof x === "number" && !isNaN(x) ? x : window.innerWidth / 2;
      const clickY = typeof y === "number" && !isNaN(y) ? y : window.innerHeight / 2;

      setTransitionState({
        active: true,
        phase: "expanding",
        x: clickX,
        y: clickY,
      });

      // Wait until the white arrow has completely scaled up and covered the screen (~550ms)
      setTimeout(() => {
        navigate(targetUrl);
        window.scrollTo({ top: 0, behavior: "instant" });

        // Once new page mounts, fade out the white screen cover
        setTimeout(() => {
          setTransitionState((prev) => ({ ...prev, phase: "fading" }));

          setTimeout(() => {
            setTransitionState({ active: false, phase: "idle", x: 0, y: 0 });
          }, 450);
        }, 80);
      }, 550);
    },
    [navigate, transitionState.active]
  );

  useEffect(() => {
    if (!transitionState.active) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, transitionState.active]);

  return (
    <PageTransitionContext.Provider value={{ startTransition, transitionState }}>
      {children}
      <ClickSpawnedArrowOverlay state={transitionState} />
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error("usePageTransition must be used within a PageTransitionProvider");
  }
  return ctx;
};

// Click-Spawned Icon Scale Transition Overlay
const ClickSpawnedArrowOverlay = ({ state }) => {
  const { active, phase, x, y } = state;

  return (
    <AnimatePresence>
      {active && (
        <div
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 999999, overflow: "hidden" }}
        >
          {/* Centered exactly on the user's initial click position */}
          <div
            className="fixed pointer-events-none"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              transformOrigin: "center center",
            }}
          >
            {/* White solid core expanding outward with the arrow to guarantee 100% white screen coverage */}
            <motion.div
              className="absolute rounded-full bg-white"
              style={{
                width: 60,
                height: 60,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                transformOrigin: "center center",
                willChange: "transform, opacity",
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={
                phase === "expanding"
                  ? { scale: 160, opacity: 1 }
                  : { scale: 160, opacity: 0 }
              }
              transition={
                phase === "expanding"
                  ? { duration: 0.65, ease: [0.76, 0, 0.24, 1] }
                  : { duration: 0.45, ease: "easeOut" }
              }
            />

            {/* Massive White SVG Arrow Icon (↗) scaling up directly from click position */}
            <motion.div
              className="relative flex items-center justify-center"
              style={{
                width: 64,
                height: 64,
                transformOrigin: "center center",
                willChange: "transform, opacity",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={
                phase === "expanding"
                  ? {
                    scale: [0, 1.25, 140],
                    opacity: 1,
                  }
                  : {
                    scale: 140,
                    opacity: 0,
                  }
              }
              transition={
                phase === "expanding"
                  ? {
                    scale: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
                    opacity: { duration: 0.12 },
                  }
                  : { duration: 0.45, ease: "easeOut" }
              }
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
              >
                <path
                  d="M18 46L46 18M46 18H24M46 18V40"
                  stroke="#ffffff"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
