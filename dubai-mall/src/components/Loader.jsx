import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => setHide(true), 2200);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 animate-pulse">
          Dubai Mall
        </h1>
        <p className="text-gray-400 mt-3">Loading Experience...</p>
      </div>
    </div>
  );
}