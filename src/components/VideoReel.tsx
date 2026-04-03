import { useState, useRef, useEffect, useCallback } from 'react';

interface VideoReelProps {
  clips: string[];
  maxDuration?: number; // max seconds per clip
}

export function VideoReel({ clips, maxDuration = 6 }: VideoReelProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToNextClip = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % clips.length);
  }, [clips.length]);

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const duration = video.duration;

    // If video is longer than maxDuration, set a timeout to cut to next clip
    if (duration > maxDuration) {
      timeoutRef.current = setTimeout(goToNextClip, maxDuration * 1000);
    }
    // Otherwise, let it play to end and onEnded will trigger next
  }, [maxDuration, goToNextClip]);

  const handleEnded = useCallback(() => {
    goToNextClip();
  }, [goToNextClip]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Load and play when src changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    video.play().catch(() => {
      // Autoplay might be blocked, that's ok
    });
  }, [currentIndex]);

  return (
    <video
      ref={videoRef}
      src={clips[currentIndex]}
      autoPlay
      muted
      playsInline
      loop={false}
      onLoadedMetadata={handleLoadedMetadata}
      onEnded={handleEnded}
      className="w-full h-full object-cover rounded-xl"
      style={{ transform: 'scale(1)' }}
    />
  );
}
