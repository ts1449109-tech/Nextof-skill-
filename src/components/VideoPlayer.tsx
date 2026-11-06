import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Volume2,
  VolumeX,
  FastForward,
  Subtitles,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { Language, ChapterLesson } from '../types';

interface VideoPlayerProps {
  lesson: ChapterLesson;
  language: Language;
  onOpenNotes?: () => void;
  onOpenQuiz?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  lesson,
  language,
  onOpenNotes,
  onOpenQuiz,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(1935); // Approx ~32 mins
  const [speed, setSpeed] = useState(1);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [activeSubtitle, setActiveSubtitle] = useState('');
  const [isMuted, setIsMuted] = useState(false);

  // Sync video time updates
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const curr = videoRef.current.currentTime;
      setCurrentTime(curr);

      // Find active subtitle
      const subs = language === 'hi' ? lesson.subtitles.hi : lesson.subtitles.en;
      const found = subs.find((s) => curr >= s.start && curr <= s.end);
      setActiveSubtitle(found ? found.text : '');
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 1935);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const changeSpeed = () => {
    const speeds = [0.75, 1, 1.25, 1.5, 2];
    const nextIndex = (speeds.indexOf(speed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIndex];
    setSpeed(nextSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = nextSpeed;
    }
  };

  const seekTo = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      setCurrentTime(seconds);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    const container = document.getElementById('nextof-video-container');
    if (container) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        container.requestFullscreen();
      }
    }
  };

  return (
    <div className="space-y-4">
      {/* Video Container (Strictly Protected Streaming - No Download Options) */}
      <div
        id="nextof-video-container"
        className="relative rounded-2xl overflow-hidden bg-black shadow-lg border border-slate-800 aspect-video group"
        onContextMenu={(e) => e.preventDefault()} // Disable right-click save video
      >
        <video
          ref={videoRef}
          src={lesson.videoUrl}
          playsInline
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className="w-full h-full object-cover"
        />

        {/* Video Subtitle Overlay */}
        {showSubtitles && activeSubtitle && (
          <div className="absolute bottom-16 left-0 right-0 px-6 text-center pointer-events-none">
            <span className="inline-block px-4 py-1.5 rounded-lg bg-black/80 text-white text-xs sm:text-sm font-medium backdrop-blur-sm shadow-md">
              {activeSubtitle}
            </span>
          </div>
        )}

        {/* Big Center Play Trigger when paused */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-indigo-600/90 text-white flex items-center justify-center pl-1 shadow-xl hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current" />
            </div>
          </div>
        )}

        {/* Bottom Control Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 opacity-95 group-hover:opacity-100 transition-opacity">
          {/* Progress Slider */}
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={(e) => seekTo(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <span className="text-[11px] font-mono text-slate-300 whitespace-nowrap">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="p-1.5 hover:text-indigo-400 transition-colors"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
              </button>

              <button
                onClick={() => seekTo(Math.max(0, currentTime - 10))}
                className="p-1.5 hover:text-indigo-400 transition-colors text-xs flex items-center gap-1"
                title="Rewind 10s"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="text-[10px]">10s</span>
              </button>

              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="p-1.5 hover:text-indigo-400 transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center gap-3">
              {/* Speed Switch */}
              <button
                onClick={changeSpeed}
                className="px-2 py-1 text-xs font-mono font-semibold rounded bg-white/10 hover:bg-white/20 transition-colors"
              >
                {speed}x
              </button>

              {/* Subtitles Toggle */}
              <button
                onClick={() => setShowSubtitles(!showSubtitles)}
                className={`p-1.5 rounded transition-colors ${
                  showSubtitles ? 'text-indigo-400 bg-white/10' : 'text-slate-400 hover:text-white'
                }`}
                title="Subtitles"
              >
                <Subtitles className="w-4 h-4" />
              </button>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="p-1.5 hover:text-indigo-400 transition-colors"
                title="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Protection Watermark & Policy Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] text-slate-300 border border-slate-700/50">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>NEXTOF Protected Stream</span>
        </div>
      </div>

      {/* Chapters & Associated Actions */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'अध्याय नेविगेशन (Chapter Timestamps)' : 'Chapter Navigation'}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'hi'
                ? 'किसी भी टॉपिक पर सीधे जाने के लिए क्लिक करें'
                : 'Click any section to jump directly in the lecture'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {onOpenNotes && (
              <button
                onClick={onOpenNotes}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors"
              >
                {language === 'hi' ? 'रिवीजन नोट्स' : 'Study Notes'}
              </button>
            )}
            {onOpenQuiz && (
              <button
                onClick={onOpenQuiz}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                {language === 'hi' ? 'प्रैक्टिस टेस्ट' : 'Practice Test'}
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {lesson.videoChapters.map((ch, idx) => (
            <button
              key={idx}
              onClick={() => seekTo(ch.time)}
              className="text-left p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-indigo-50/40 dark:hover:bg-slate-800 transition-all text-xs flex items-center justify-between group"
            >
              <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate">
                {language === 'hi' ? ch.labelHi : ch.labelEn}
              </span>
              <span className="font-mono text-[10px] text-slate-400 ml-2 shrink-0">
                {formatTime(ch.time)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
