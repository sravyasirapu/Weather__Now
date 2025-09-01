interface TempToggleProps {
    unit: "C" | "F";
    onToggle: () => void;
  }
  
  export default function TempToggle({ unit, onToggle }: TempToggleProps) {
    return (
      <button
        onClick={onToggle}
        className="mt-4 px-3 py-1 rounded-lg bg-sky-600 text-white shadow hover:bg-sky-700 transition"
      >
        Show in °{unit === "C" ? "F" : "C"}
      </button>
    );
  }
  