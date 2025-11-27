"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { PageLoader } from "./PageLoader";
import { usePathname } from "next/navigation";

interface RouteLoaderContextValue {
  loading: boolean;
}

const RouteLoaderContext = createContext<RouteLoaderContextValue>({
  loading: false,
});

export const useRouteLoader = () => useContext(RouteLoaderContext);

export const RouteLoaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    // Show loader only on first visit and only if it's not a 404 path
    if (!hasVisited && pathname !== "/not-found") {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 500); // duration of loader

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <RouteLoaderContext.Provider value={{ loading }}>
      {loading ? <PageLoader /> : children}
    </RouteLoaderContext.Provider>
  );
};
