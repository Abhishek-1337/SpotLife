"use client";

import { createContext, useContext, useState } from "react";

type AppContextType = {
  score: number | null;
  setScore: (score: number | null) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState<number | null>(null);

  return (
    <AppContext.Provider value={{ score, setScore }}>
      {children}
    </AppContext.Provider>
  );
};
