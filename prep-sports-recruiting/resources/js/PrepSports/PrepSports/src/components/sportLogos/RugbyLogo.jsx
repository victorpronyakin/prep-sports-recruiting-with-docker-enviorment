import React from 'react';
import cn from 'classnames';

const RugbyLogo = ({ isAboutSportPage = false, isHover = false }) => {
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
          d="M2831 4109 c-910 -137 -1693 -851 -1911 -1741 -79 -324 -79 -676 1
-993 35 -142 68 -229 100 -264 62 -68 341 -177 564 -221 155 -30 409 -38 572
-16 475 63 920 296 1284 674 333 345 555 770 647 1237 35 176 45 312 39 533
-5 207 -18 313 -58 485 -18 77 -26 94 -63 132 -36 37 -57 47 -166 83 -252 83
-439 112 -708 111 -118 0 -218 -7 -301 -20z m684 -283 c102 -21 289 -76 300
-88 16 -16 48 -258 52 -400 10 -285 -23 -519 -109 -773 -211 -629 -726 -1155
-1320 -1349 -195 -64 -307 -81 -523 -80 -251 2 -397 32 -620 127 l-80 34 -18
59 c-64 207 -88 441 -68 677 69 819 738 1573 1576 1776 178 43 258 51 480 46
177 -3 229 -7 330 -29z"
        />
        <path
          d="M3475 3704 c-331 -59 -689 -228 -995 -470 -117 -93 -348 -327 -453
-459 -275 -345 -512 -785 -697 -1293 -37 -101 -17 -81 25 26 166 419 415 853
692 1203 128 162 401 436 538 540 323 246 631 386 990 448 109 19 110 19 45
19 -36 0 -101 -6 -145 -14z"
        />
        <path
          d="M3826 3349 c-2 -8 -17 -70 -33 -139 -69 -285 -197 -548 -397 -815
-113 -150 -351 -390 -518 -523 -305 -242 -689 -463 -1058 -611 -69 -28 -118
-50 -109 -51 25 0 301 96 433 151 224 95 442 211 631 339 204 138 459 372 596
550 196 252 340 536 414 813 26 96 58 287 50 295 -2 3 -6 -1 -9 -9z"
        />
      </g>
    </svg>
  );
};

export default RugbyLogo;
