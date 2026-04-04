const REEL_URL = 'https://res.cloudinary.com/dmeaeg0oy/video/upload/v1775293307/reel_nh6q77.mp4';

export function VideoReel() {
  return (
    <video
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