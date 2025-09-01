export default function Snow() {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-xl animate-snow"
            style={{
              left: `${(i * 7) % 100}%`,
              animationDelay: `${(i % 7) * 0.4}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>
    );
  }
  