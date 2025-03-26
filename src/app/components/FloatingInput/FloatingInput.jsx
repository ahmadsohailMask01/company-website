import { useState } from "react";

export default function FloatingInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative w-64 mt-4">
      <input
        type="text"
        id="floatingInput"
        className="peer w-full border-b-2 border-gray-300 bg-transparent tracking-wide font-medium text-white focus:border-blue-500 focus:outline-none p-2 placeholder-transparent"
        placeholder="Enter text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(inputValue !== "")}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <label
        htmlFor="floatingInput"
        className={`absolute left-2 transition-all text-white ${
          isFocused || inputValue
            ? "-top-4 text-xs text-blue-500"
            : "top-2 text-base"
        }`}
      >
        Enter text
      </label>
    </div>
  );
}
