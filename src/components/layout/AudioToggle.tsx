'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Howl } from 'howler';

export const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Howl | null>(null);

  useEffect(() => {
    const ambient = new Howl({
      src: ['https://assets.mixkit.co/music/preview/mixkit-ethereal-fairy-bells-1073.mp3'],
      loop: true,
      volume: 0.3,
    });
    setSound(ambient);

    return () => {
      ambient.unload();
    };
  }, []);

  const toggle = () => {
    if (!sound) return;
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-8 right-8 z-50 p-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white/50 hover:text-accent transition-all"
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
};
