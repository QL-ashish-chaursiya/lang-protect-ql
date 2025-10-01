import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-100 rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:bg-gray-200 transition-colors duration-300">
            <div className="flex items-center space-x-3 text-gray-600 group-hover:text-gray-700 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Play className="h-6 w-6 text-primary ml-1" />
              </div>
              <span className="text-lg font-medium">Product Video</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

// import React, { useRef, useState } from "react";

// export default function VideoSection() {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [playing, setPlaying] = useState(false);

//   const handlePlay = () => {
//     if (!videoRef.current) return;
//     videoRef.current.currentTime = 0;
//     videoRef.current.play();
//     setPlaying(true);
//   };

//   const handleStop = () => {
//     if (!videoRef.current) return;
//     videoRef.current.pause();
//     videoRef.current.currentTime = 0;
//     setPlaying(false);
//   };

//   return (
//     <section id="product-video" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
//       <div className="mx-auto max-w-4xl">
//         <div className="rounded-2xl bg-transparent p-0">
//           <div className="relative mx-auto max-w-3xl">
//             {!playing && (
//               <div className="relative">
//                 <img id="videoPoster" src="https://cdn.builder.io/api/v1/image/assets%2Fa79882cf441d4bb3869d38d63921fab9%2Fed19eab7f1d141e1af91f5a506fcd179?format=webp&width=1200" alt="Product video poster" className="mx-auto w-full object-cover rounded-lg" />
//                 <div id="posterOverlay" className="absolute inset-0 flex items-center justify-center">
//                   <button onClick={handlePlay} id="playBtn" aria-label="Play video" className="flex items-center justify-center gap-3 rounded-full bg-white shadow-md px-6 py-3">
//                     <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
//                     </span>
//                     <span className="text-sm font-medium text-foreground">Product Video</span>
//                   </button>
//                 </div>
//               </div>
//             )}

//             <video ref={videoRef} id="productVideo" className={`${playing ? "block" : "hidden"} w-full rounded-lg`} playsInline preload="metadata" onClick={() => {
//               if (videoRef.current) {
//                 if (!videoRef.current.paused) videoRef.current.pause(); else videoRef.current.play();
//               }
//             }}>
//               <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             {playing && (
//               <div id="videoControls" className="absolute right-4 top-4">
//                 <button onClick={handleStop} id="stopBtn" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow">⏹</button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }