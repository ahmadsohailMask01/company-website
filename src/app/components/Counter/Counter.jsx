import React, { useState, useEffect } from "react";

export default function Counter({ start = 0, end = 100, duration = 2000 }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);

  return (
    <span className="text-3xl font-bold text-blue-500">{count}</span>
  );
}
