import React from 'react';
import cn from 'classnames';

const TennisLogo = ({ isAboutSportPage = false, isHover = false }) => {
  const pickStyle = () => {
    if (isAboutSportPage) {
      if (isHover) {
        return {
          fill: '#fff',
        };
      } else {
        return { fill: '#282828' };
      }
    } else return null;
  };

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="500.000000pt"
      height="500.000000pt"
      viewBox="0 0 500.000000 500.000000"
      preserveAspectRatio="xMidYMid meet"
      className={cn('tiles__svg', {
        'about-sport-page': isAboutSportPage,
      })}
    >
      <g
        transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        style={pickStyle()}
        stroke="none"
      >
        <path
          d="M2523 4116 c-157 -51 -260 -186 -271 -353 l-5 -83 -56 8 c-108 14
-280 6 -376 -17 -188 -45 -378 -167 -492 -316 -65 -84 -144 -241 -174 -345
-33 -116 -38 -355 -10 -473 51 -215 159 -390 339 -550 283 -250 660 -341 998
-241 49 15 100 26 114 25 48 -2 141 -31 217 -66 l76 -35 -23 -25 -23 -25 24
-27 c82 -90 669 -704 674 -704 11 -1 345 322 345 332 0 5 -156 174 -347 374
-313 328 -349 362 -364 349 -15 -13 -19 -8 -46 53 -38 85 -67 211 -60 261 3
20 18 80 32 132 45 158 38 336 -17 510 -43 134 -160 333 -255 431 l-34 36 50
32 c218 140 251 440 67 619 -79 78 -142 105 -251 109 -57 2 -106 -2 -132 -11z
m224 -222 c21 -17 48 -50 61 -75 43 -82 13 -192 -67 -244 -74 -49 -160 -42
-228 18 -45 39 -63 82 -63 147 0 117 80 193 197 187 52 -2 69 -8 100 -33z
m-529 -416 c28 -6 52 -14 52 -17 0 -3 -24 -32 -53 -64 l-52 -58 -80 82 -80 81
80 -6 c44 -3 104 -11 133 -18z m-203 -88 l100 -100 -143 -143 -142 -142 -147
147 -147 147 39 36 c63 56 254 144 335 154 3 1 50 -44 105 -99z m398 14 c70
-36 132 -79 190 -133 l48 -45 -93 -93 -93 -93 -127 127 -128 128 67 67 c37 38
71 68 76 68 4 0 31 -12 60 -26z m-633 -449 c0 -6 -59 -69 -130 -140 l-130
-130 -99 100 -99 100 18 67 c21 80 75 196 120 257 l32 44 144 -144 c79 -79
144 -148 144 -154z m517 163 l122 -123 -138 -145 -138 -145 -131 124 -131 124
136 143 c75 79 141 144 147 144 6 0 66 -55 133 -122z m443 1 c49 -62 102 -155
136 -239 l25 -63 -53 -54 -53 -53 -137 137 c-76 76 -138 140 -138 143 0 10
161 180 171 180 5 0 27 -23 49 -51z m-125 -319 l139 -139 -55 -58 c-30 -32
-92 -98 -137 -147 l-84 -89 -146 146 -147 147 140 140 c77 77 142 140 145 140
3 0 68 -63 145 -140z m-653 -275 c-70 -71 -130 -130 -133 -130 -4 0 -63 55
-133 123 l-127 123 132 135 133 135 128 -128 127 -127 -127 -131z m-547 55
c-32 -33 -63 -56 -67 -52 -13 13 -38 158 -38 220 l0 57 82 -82 83 -83 -60 -60z
m1509 119 c3 -17 6 -50 6 -72 l0 -41 -40 39 -39 38 27 33 c15 18 30 33 33 33
4 1 9 -13 13 -30z m-531 -423 c-20 -23 -78 -85 -128 -138 l-91 -98 -149 150
-149 149 130 134 129 134 147 -145 147 -146 -36 -40z m471 275 l59 -59 -26
-84 c-28 -87 -74 -173 -134 -246 l-36 -44 -98 98 c-55 54 -98 102 -97 105 4
11 262 289 268 289 3 0 32 -27 64 -59z m-1176 -308 l-92 -93 -54 53 c-52 51
-128 155 -153 210 -12 27 -10 30 61 103 l75 74 127 -127 128 -128 -92 -92z
m438 -248 c1 0 -13 -18 -31 -40 l-34 -39 -73 17 c-81 19 -254 101 -307 146
l-34 28 88 92 89 92 150 -148 c83 -81 151 -148 152 -148z m463 171 l93 -94
-46 -31 c-72 -50 -185 -100 -261 -116 l-70 -14 -42 42 -42 42 126 133 c69 72
130 132 137 132 6 0 53 -42 105 -94z m385 -153 c10 -32 32 -84 48 -117 l30
-59 -37 -37 -37 -38 -54 33 c-29 18 -80 42 -112 54 l-58 22 96 98 c52 54 98
99 101 100 3 1 13 -25 23 -56z m-774 -88 c11 -13 8 -15 -20 -15 -28 0 -31 2
-20 15 7 8 16 15 20 15 4 0 13 -7 20 -15z m1141 -417 c85 -90 179 -189 209
-221 l54 -58 -33 -32 -33 -32 -61 67 c-34 36 -129 137 -211 223 l-149 156 28
29 c16 17 32 30 35 30 3 0 76 -73 161 -162z"
        />
      </g>
    </svg>
  );
};

export default TennisLogo;
