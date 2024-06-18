import { useState } from "react";

const keys = [
  "AC",
  "del",
  "%",
  "/",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "",
  "0",
  ".",
  "=",
];

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (key: any) => {
    // Regular expression to match consecutive operators
    const consecutiveOperators = /[/*\-+]$/;

    if (key === "AC") {
      setDisplay("");
    } else if (key === "del") {
      setDisplay(display.slice(0, -1));
    } else if (key === "=") {
      try {
        const result = eval(display.replace(/x/g, "*"));
        setDisplay(String(result));
      } catch (error) {
        setDisplay("Error");
      }
    } else if (key === "." && display.includes(".")) {
      // Prevent multiple decimal points
      return;
    } else if (
      key.match(consecutiveOperators) &&
      display.match(consecutiveOperators)
    ) {
      // Prevent consecutive operators
      return;
    } else {
      setDisplay(display + key);
    }
  };

  return (
    <section>
      <div className="border overflow-hidden rounded text-3xl font-medium text-right px-5 py-4 bg-zinc-300">
        {Number(display).toFixed(8) || "0"}
      </div>
      <div className="grid gap-1 grid-cols-4 place-items-center">
        {keys.map((item, i) => (
          <div
            className="border rounded w-full h-14 grid place-items-center text-lg font-medium cursor-pointer"
            key={i}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
