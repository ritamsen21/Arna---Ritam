"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Volume2 } from "lucide-react";

const VIDEO_ID = "A7b5QotTngQ";

type YouTubePlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  setVolume: (volume: number) => void;
  destroy: () => void;
};

type YouTubeNamespace = {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string;
      playerVars?: Record<string, number | string>;
      events?: { onReady?: () => void };
    }
  ) => YouTubePlayer;
};

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: YouTubeNamespace;
  }
}

/**
 * A quiet, opt-in background score. The player is visually hidden and
 * starts muted (browser autoplay policy + accessibility best practice —
 * audio should never start unannounced). A single floating control lets
 * guests turn the music on or off at any time.
 */
export function BackgroundMusic() {
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    function createPlayer() {
      if (!mountRef.current || !window.YT) return;
      playerRef.current = new window.YT.Player(mountRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          modestbranding: 1,
          playlist: VIDEO_ID,
          playsinline: 1,
        },
        events: {
          onReady: () => setIsReady(true),
        },
      });
    }

    if (window.YT?.Player) {
      createPlayer();
    } else {
      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previousCallback?.();
        createPlayer();
      };

      if (!document.getElementById("youtube-iframe-api")) {
        const script = document.createElement("script");
        script.id = "youtube-iframe-api";
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    }

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    const player = playerRef.current;
    if (!player || !isReady) return;

    if (isPlaying) {
      player.pauseVideo();
      setIsPlaying(false);
      return;
    }

    player.unMute();
    player.setVolume(55);
    player.playVideo();
    setIsPlaying(true);
  };

  return (
    <>
      <div ref={mountRef} aria-hidden="true" className="pointer-events-none fixed h-0 w-0 overflow-hidden opacity-0" />
      <button
        type="button"
        onClick={toggleMusic}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-pearl/90 text-maroon shadow-[0_15px_35px_-15px_rgba(58,42,32,0.5)] backdrop-blur transition-transform duration-300 hover:scale-105 hover:border-gold"
      >
        {isPlaying ? (
          <Volume2 size={18} className="animate-pulse" aria-hidden="true" />
        ) : (
          <Music size={18} aria-hidden="true" />
        )}
      </button>
    </>
  );
}
