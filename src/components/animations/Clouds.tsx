export default function Clouds() {
    return (
      <div className="absolute top-20 left-10 right-10 flex gap-6 pointer-events-none">
        <div className="w-24 h-14 bg-white/80 rounded-full animate-cloud" />
        <div className="w-32 h-16 bg-white/70 rounded-full animate-cloud delay-200" />
        <div className="w-28 h-14 bg-white/75 rounded-full animate-cloud delay-500" />
      </div>
    );
  }
  