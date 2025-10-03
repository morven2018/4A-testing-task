"use client";
import { useEffect, useState } from "react";

const TIMER_DURATION = 2 * 60;
const FLASHING_TIME = 30;

const StarIcon = ({ color }: { color: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.33399 0.799865C5.56277 0.1816 6.43723 0.181601 6.66601 0.799866L7.77732 3.80312C7.84924 3.9975 8.0025 4.15076 8.19688 4.22268L11.2001 5.33399C11.8184 5.56277 11.8184 6.43723 11.2001 6.66601L8.19688 7.77732C8.0025 7.84924 7.84924 8.0025 7.77732 8.19688L6.66601 11.2001C6.43723 11.8184 5.56277 11.8184 5.33399 11.2001L4.22268 8.19688C4.15076 8.0025 3.9975 7.84924 3.80312 7.77732L0.799865 6.66601C0.1816 6.43723 0.181601 5.56277 0.799866 5.33399L3.80312 4.22268C3.9975 4.15076 4.15076 3.9975 4.22268 3.80312L5.33399 0.799865Z"
      fill={color}
    />
  </svg>
);

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    setIsBlinking(timeLeft <= FLASHING_TIME && timeLeft > 0);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const getTimerClass = () => {
    if (timeLeft === 0) {
      return "text-white";
    }
    if (timeLeft <= FLASHING_TIME) {
      return `text-red-500 ${isBlinking ? "animate-pulse" : ""}`;
    }
    return "text-[#FDB056]";
  };

  const getSvgColor = () => {
    if (timeLeft === 0) {
      return "#FFFFFF";
    }
    if (timeLeft <= FLASHING_TIME) {
      return "#EF4444";
    }
    return "#FDB056";
  };

  const svgColor = getSvgColor();

  return (
    <div className="flex flex-row items-center gap-1.75  tracking-wider">
      <StarIcon color={svgColor} />
      <div className={`text-[40px] font-bold ${getTimerClass()}`}>
        {formatTime(timeLeft)}
      </div>
      <StarIcon color={svgColor} />
    </div>
  );
}
