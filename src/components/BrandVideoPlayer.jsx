import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

export default function BrandVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const controlsTimeout = useRef(null);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
    } else {
      video.play();
      setIsPlaying(true);
      // Auto-hide controls after 3s
      scheduleHideControls();
    }
  };

  const handleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  const scheduleHideControls = () => {
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    setShowControls(true);
    controlsTimeout.current = setTimeout(() => {
      if (isPlaying || videoRef.current?.paused === false) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  return (
    <div 
      className="relative w-full rounded-3xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-800/50 cursor-pointer group"
      onClick={handlePlay}
      onMouseMove={scheduleHideControls}
      onTouchStart={scheduleHideControls}
    >
      {/* Aspect Ratio Container */}
      <div className="relative w-full" style={{ paddingBottom: '56.6%' }}>
        
        {/* Video Element - visible as poster before play */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
          playsInline
          muted
          onEnded={handleVideoEnd}
        >
          <source src="/beinsured-ad.mp4" type="video/mp4" />
        </video>

        {/* Poster Overlay (before play) */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/50 flex items-center justify-center"
            >
              {/* Center Play Button */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FEBD19] flex items-center justify-center shadow-xl shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 text-[#0F172A] ml-1" fill="#0F172A" />
                </div>
                <span className="text-white/90 text-xs sm:text-sm font-bold tracking-wide">Watch Our Story</span>
              </motion.div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#FEBD19]">Brand Film</div>
                  <div className="text-white text-xs sm:text-sm font-semibold">BeINsured Motor Insurance</div>
                </div>
                <div className="text-white/60 text-[11px] font-mono">2:17</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Playback Controls Overlay (while playing) */}
        <AnimatePresence>
          {isPlaying && showControls && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end"
            >
              <div className="w-full px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handlePlay}
                    className="p-2 rounded-full bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 transition-colors"
                  >
                    <Pause className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleMute}
                    className="p-2 rounded-full bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
                <button 
                  onClick={handleFullscreen}
                  className="p-2 rounded-full bg-white/15 backdrop-blur-sm text-white hover:bg-white/25 transition-colors"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
