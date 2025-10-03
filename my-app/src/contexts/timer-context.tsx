"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const TIMER_DURATION = 2 * 60;

interface TimerContextType {
  timeLeft: number;
  isTimerFinished: boolean;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <TimerContext.Provider
      value={{
        timeLeft,
        isTimerFinished: timeLeft === 0,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
}
