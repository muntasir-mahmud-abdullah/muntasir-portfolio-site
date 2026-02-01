"use client";

export default function HexagonProfile() {
  return (
    <div className="relative flex items-center justify-center w-[300px] h-[340px] sm:w-[400px] sm:h-[480px]">
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4FD1C5" />
            <stop offset="100%" stopColor="#4FD1C5" />
          </linearGradient>
          
          <path 
            id="hexPath"
            d="M 94 3.5
               Q 100 0 106 3.5
               L 181 46.5
               Q 186.6 50 186.6 57
               L 186.6 143
               Q 186.6 150 181 153.5
               L 106 196.5
               Q 100 200 94 196.5
               L 19 153.5
               Q 13.4 150 13.4 143
               L 13.4 57
               Q 13.4 50 19 46.5
               Z"
          />
          
          <clipPath id="hexClip">
            <use href="#hexPath" />
          </clipPath>
        </defs>

        {/* 1. Background Shape */}
        <use href="#hexPath" fill="url(#hexGradient)" />

        {/* 2. Image: Bottom Aligned, Centered, Contained */}
        <image
          href="/images/about/profile.png" 
          x="0" 
          y="0" 
          width="200" 
          height="200" 
          clipPath="url(#hexClip)"
          preserveAspectRatio="xMidYMax meet" 
        />
      </svg>
    </div>
  );
}
