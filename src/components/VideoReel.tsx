import { useRef, useEffect, useCallback } from 'react';

const REEL_URL = 'https://res.cloudinary.com/dmeaeg0oy/video/upload/v1775293307/reel_nh6q77.mp4';

export function VideoReel() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVisibilityChange = useCallback(() => {
    const video = videoRef.current;
    if (document.visibilityState === 'visible' && video) {
      video.play().catch(console.error);
    } else if (video) {
      video.pause();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [handleVisibilityChange]);

  return (
    <video
      ref={videoRef}
      src={REEL_URL}
      autoPlay
      muted
      playsInline
      loop
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover rounded-xl"
      style={{ display: 'block' }}
    />
  );
}
