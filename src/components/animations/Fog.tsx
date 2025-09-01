export default function Fog() {
    // two translucent layers drifting horizontally
    return (
      <>
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gray-200/30 dark:bg-gray-100/10 animate-fog pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-200/25 dark:bg-gray-100/10 animate-fog-slow pointer-events-none" />
      </>
    );
  }
  