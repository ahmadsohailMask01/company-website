import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CircularProgress = ({ value = 0, size = 120, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    controls.start({ strokeDashoffset: circumference - progress, transition: { duration: 2 } });
    
    let start = 0;
    const duration = 2000; // 1 second animation
    const intervalTime = duration / value;
    
    const interval = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start >= value) {
        clearInterval(interval);
      }
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, [value, controls, circumference, progress]);

  return (
    <div className="relative w-fit h-fit font-poppins">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2f7af7"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={controls}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-500">
        {displayValue}%
      </div>
    </div>
  );
};

export default CircularProgress;
