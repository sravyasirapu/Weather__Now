export default function MoonStars() {
    return (
      <div className="absolute top-10 right-10">
        <div className="w-16 h-16 rounded-full bg-yellow-200 shadow-md relative z-10" />
        <div className="absolute inset-0">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${(i % 6) * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  