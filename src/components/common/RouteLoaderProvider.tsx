"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { PageLoader } from "./PageLoader";

type RouteLoaderContextValue = {
  isLoading: boolean;
};

const RouteLoaderContext = createContext<RouteLoaderContextValue>({
  isLoading: false,
});

export function useRouteLoader() {
  return useContext(RouteLoaderContext);
}

export function RouteLoaderProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    // We *want* to trigger loading on route change.
    // This is safe, so we disable the lint rule for this line.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);

    const timeout = window.setTimeout(() => {
      setIsLoading(false);
    }, 500); // adjust duration if needed

    return () => {
      window.clearTimeout(timeout);
    };
    // include search params so loader also triggers on query changes
  }, [pathname, searchParams?.toString()]);

  return (
    <RouteLoaderContext.Provider value={{ isLoading }}>
      {isLoading && <PageLoader />}
      {children}
    </RouteLoaderContext.Provider>
  );
}
