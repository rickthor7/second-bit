import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  label?: string;
}

export default function CountdownTimer({
  targetDate,
  label = "Berakhir dalam",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 13,
          color: "var(--muted)",
        }}
      >
        <span style={{ fontWeight: 600 }}>Deal telah berakhir</span>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
      }}
    >
      <span style={{ color: "var(--foreground)", fontWeight: 500 }}>
        {label}
      </span>
      <div className="countdown">
        <span className="countdown-block">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="countdown-separator">:</span>
        <span className="countdown-block">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="countdown-separator">:</span>
        <span className="countdown-block">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

function getTimeLeft(targetDate: string) {
  const total = Math.max(0, new Date(targetDate).getTime() - Date.now());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor(total / (1000 * 60 * 60));
  return { total, hours, minutes, seconds };
}
