export default function Lightning() {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {/* brief screen flashes */}
        <div className="absolute inset-0 bg-white/0 animate-lightning" />
        {/* a zig-zag bolt */}
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-0.5 h-24 bg-white/90 shadow-lg animate-bolt" />
      </div>
    );
  }
  