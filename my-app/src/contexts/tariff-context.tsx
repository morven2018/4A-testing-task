"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface TariffContextType {
  selectedTariffPeriod: string | null;
  setSelectedTariffPeriod: (period: string | null) => void;
}

const TariffContext = createContext<TariffContextType | undefined>(undefined);

export function TariffProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [selectedTariffPeriod, setSelectedTariffPeriod] = useState<
    string | null
  >(null);

  return (
    <TariffContext.Provider
      value={{ selectedTariffPeriod, setSelectedTariffPeriod }}
    >
      {children}
    </TariffContext.Provider>
  );
}

export function useTariff() {
  const context = useContext(TariffContext);
  if (context === undefined) {
    throw new Error("useTariff must be used within a TariffProvider");
  }
  return context;
}
