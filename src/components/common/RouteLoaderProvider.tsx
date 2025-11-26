"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
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

export function RouteLoaderProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    // Trigger loader on route + query changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);

    const timeout = window.setTimeout(() => {
      setIsLoading(false);
    }, 500); // adjust duration if you want

    return () => {
      window.clearTimeout(timeout);
    };
  }, [pathname, searchParams?.toString()]);

  return (
    <RouteLoaderContext.Provider value={{ isLoading }}>
      {isLoading && <PageLoader />}
      {children}
    </RouteLoaderContext.Provider>
  );
}
