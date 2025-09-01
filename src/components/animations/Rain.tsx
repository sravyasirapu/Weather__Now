export default function Rain() {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-6 bg-white/70 animate-rain"
            style={{
              left: `${(i * 5 + (i % 3) * 2) % 100}%`,
              animationDelay: `${(i % 5) * 0.2}s`,
            }}
          />
        ))}
      </div>
    );
  }
  