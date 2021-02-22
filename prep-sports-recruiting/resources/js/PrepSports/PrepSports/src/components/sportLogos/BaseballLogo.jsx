import React from 'react';
import cn from 'classnames';

const BaseballLogo = ({ isAboutSportPage = false, isHover = false }) => {
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
        fill="#000000"
        stroke="none"
        style={pickStyle()}
      >
        <path
          d="M2305 4114 c-228 -32 -386 -79 -560 -165 -822 -407 -1138 -1429 -689
    -2231 315 -563 941 -888 1575 -818 716 78 1279 595 1421 1305 30 149 32 431 4
    580 -123 664 -625 1175 -1282 1305 -105 21 -389 35 -469 24z m427 -255 c564
    -113 993 -552 1095 -1122 22 -123 21 -342 -1 -467 -76 -424 -348 -795 -724
    -988 -207 -107 -405 -155 -637 -155 -121 0 -307 21 -335 38 -6 4 14 173 22
    181 6 6 217 84 227 84 5 0 -6 -36 -25 -79 -19 -43 -34 -83 -34 -88 0 -9 43
    -33 59 -33 4 0 31 53 60 119 l52 118 71 22 c39 11 73 19 76 17 2 -3 -12 -25
    -32 -49 l-36 -44 23 -21 c13 -12 28 -22 33 -22 5 0 44 42 86 94 70 85 82 96
    135 114 32 11 66 23 76 27 16 7 15 0 -8 -50 -14 -32 -25 -61 -25 -65 0 -7 45
    -30 59 -30 4 0 29 45 54 100 38 80 53 102 79 116 18 9 54 32 81 50 26 19 49
    34 51 34 2 0 -2 -27 -9 -61 -14 -65 -15 -62 37 -73 26 -6 27 -4 38 51 27 131
    39 174 57 196 10 14 34 45 53 70 19 26 38 46 43 47 4 0 7 -15 7 -34 0 -18 3
    -47 6 -62 5 -27 8 -29 45 -26 34 4 38 7 34 26 -2 11 -9 69 -15 127 -11 96 -10
    112 9 175 11 38 23 87 28 109 l9 39 43 -62 44 -62 29 21 c16 12 27 27 25 33
    -3 7 -36 57 -74 112 -66 95 -70 103 -81 183 -6 47 -10 86 -8 88 2 3 21 -11 41
    -29 l37 -32 24 29 c13 17 24 32 23 35 0 3 -40 38 -90 78 -77 62 -94 82 -125
    145 -20 39 -45 85 -56 100 l-20 28 29 -7 c15 -4 38 -11 51 -15 13 -5 25 -9 27
    -9 5 0 28 71 23 74 -1 2 -46 16 -98 32 -94 28 -96 29 -183 116 l-87 88 60 0
    60 0 0 39 0 38 -120 6 c-115 5 -121 6 -178 41 -33 20 -75 42 -93 50 -35 15
    -35 15 17 31 13 4 15 13 10 37 -3 17 -8 34 -11 36 -2 3 -46 -5 -97 -17 -87
    -19 -98 -20 -173 -6 -44 8 -87 15 -95 15 -8 0 4 12 28 27 l42 25 -20 32 c-11
    17 -25 30 -31 28 -6 -1 -50 -29 -98 -61 -57 -39 -102 -61 -131 -66 -25 -4 -62
    -14 -84 -21 -21 -8 -41 -12 -44 -10 -2 3 5 21 16 40 l21 35 -35 20 -34 20 -38
    -67 c-22 -37 -44 -77 -51 -89 -10 -19 -152 -135 -159 -129 -1 2 2 25 7 52 11
    55 9 59 -36 67 l-31 6 -10 -62 c-6 -34 -14 -84 -18 -111 -5 -35 -22 -72 -58
    -127 -28 -43 -54 -78 -57 -78 -4 -1 -9 13 -13 31 -19 97 -24 105 -57 100 -17
    -2 -33 -11 -36 -18 -3 -8 7 -63 22 -123 l27 -108 -45 -89 -45 -89 -36 78 c-20
    42 -41 77 -46 77 -15 0 -60 -23 -60 -30 0 -4 22 -56 49 -115 l49 -108 -36 -73
    c-20 -40 -37 -72 -39 -70 -2 1 -9 31 -16 67 -13 63 -14 64 -42 61 -17 -2 -34
    -7 -38 -11 -5 -5 2 -60 14 -123 l22 -114 -34 -58 -34 -57 -3 61 -3 60 -39 0
    -40 0 0 -120 0 -120 -34 -38 c-19 -20 -37 -35 -39 -32 -10 10 -38 167 -48 268
    -11 123 1 292 31 417 136 577 613 998 1206 1065 108 12 289 3 406 -21z m-163
    -558 l24 -93 35 6 c19 3 36 7 39 9 2 3 -5 39 -15 81 -11 42 -18 76 -16 76 16
    0 175 -65 211 -86 l45 -26 -4 -91 -3 -92 38 -3 37 -3 0 65 c0 37 4 66 10 66
    11 0 116 -92 142 -125 15 -20 15 -26 -10 -113 -14 -50 -23 -94 -20 -98 4 -3
    21 -7 39 -7 31 -2 33 0 48 55 9 31 19 59 22 63 6 6 69 -88 103 -153 l17 -32
    -56 -72 -56 -71 28 -23 c29 -24 43 -29 43 -16 0 4 18 27 39 52 l39 45 16 -55
    c8 -30 19 -81 24 -113 l9 -58 -61 -46 c-34 -25 -64 -49 -69 -53 -4 -3 3 -20
    16 -37 l23 -31 39 29 c48 36 53 36 48 2 -12 -77 -27 -124 -42 -132 -9 -5 -46
    -12 -84 -16 -37 -4 -69 -10 -71 -14 -2 -3 -1 -21 1 -40 l6 -33 58 6 c33 4 59
    4 59 1 0 -13 -73 -117 -85 -121 -7 -3 -50 1 -96 10 -46 8 -85 13 -87 11 -2 -1
    -5 -18 -8 -37 l-6 -35 62 -12 c58 -12 61 -13 46 -30 -9 -10 -40 -34 -69 -54
    l-53 -37 -94 40 c-51 23 -94 39 -95 38 -9 -11 -25 -49 -25 -58 0 -6 25 -22 55
    -36 30 -14 55 -27 55 -29 0 -5 -133 -55 -146 -55 -6 0 -41 23 -77 50 -36 28
    -70 50 -74 50 -4 0 -17 -12 -27 -27 l-19 -26 39 -34 c21 -18 42 -33 47 -33 4
    0 7 -4 7 -8 0 -5 -58 -26 -130 -47 l-130 -38 -77 30 -78 31 -12 -26 c-18 -41
    -16 -49 20 -62 l32 -11 -105 -40 -105 -41 -104 11 c-57 6 -105 10 -106 8 -1
    -1 -5 -19 -8 -39 -6 -37 -5 -38 27 -38 49 0 50 -11 4 -38 -24 -14 -59 -38 -79
    -54 -20 -15 -40 -28 -44 -28 -4 0 -48 28 -98 63 -177 120 -364 337 -451 525
    l-30 62 59 60 59 60 93 0 93 0 0 40 0 40 -60 0 c-33 0 -60 2 -60 4 0 2 15 26
    33 52 18 27 42 65 54 85 20 35 26 38 116 59 l95 21 -10 38 c-10 37 -11 39 -41
    31 -18 -4 -44 -11 -60 -14 l-27 -6 52 104 51 104 80 38 c43 22 81 42 83 46 3
    4 -2 21 -11 38 -16 30 -16 30 -52 15 -20 -8 -37 -14 -39 -13 -1 2 12 30 29 63
    l32 60 89 24 88 24 -6 35 c-3 19 -7 36 -9 38 -1 2 -27 -3 -57 -11 -30 -8 -55
    -13 -56 -12 -1 1 14 26 33 56 l34 53 62 -6 c34 -4 76 -9 93 -12 27 -5 32 -2
    37 18 14 52 11 56 -58 63 -36 4 -65 11 -65 15 0 10 89 90 100 90 3 0 43 -20
    88 -44 l81 -44 20 34 20 33 -67 37 -67 38 60 28 c33 15 74 30 90 33 28 5 33 1
    75 -60 24 -37 48 -69 52 -71 5 -3 22 4 38 16 l30 21 -24 32 c-13 18 -31 45
    -41 60 l-18 28 79 -3 79 -3 24 -94z m-514 -2053 c-4 -29 -8 -54 -9 -55 -4 -5
    -96 29 -100 36 -5 7 90 68 107 70 5 1 6 -23 2 -51z"
        />
      </g>
    </svg>
  );
};

export default BaseballLogo;
