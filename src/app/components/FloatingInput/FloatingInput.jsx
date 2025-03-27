import React,{ useState } from "react";

const FloatingInput = ({},ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative w-64 mt-4">
      <input
        type="email"
        id="floatingInput"
        className="peer w-full border-b-2 border-gray-300 bg-transparent tracking-wide font-medium text-white focus:border-blue-500 focus:outline-none p-2 placeholder-transparent"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(inputValue !== "")}
        onChange={(e) => setInputValue(e.target.value)}
        ref={ref}
      />
      <label
        htmlFor="floatingInput"
        className={`absolute left-2 transition-all text-white ${
          isFocused || inputValue
            ? "-top-4 text-xs text-blue-500"
            : "top-2 text-base"
        }`}
      >
        Email
      </label>
    </div>
  );
}
export default React.forwardRef(FloatingInput);