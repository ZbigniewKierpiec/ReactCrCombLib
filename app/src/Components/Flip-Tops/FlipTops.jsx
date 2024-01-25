import React, { useEffect, useRef, useState } from "react";
import styles from "./FlipTops.module.scss";
import "animate.css";
import { useItemContext } from "../../Hooks/ItemProvider";
export default function FlipTops() {
  const { clickedItem } = useItemContext();
  let active = true;
 




  return (
    <div
      className={`${styles.container}  ${
        active ? "animate__animated animate__fadeIn animate__slower 2s " : ""
      }`}
    >
      <div         className={styles.box}>
        {/*----------------------------- nowy-----------------------------------------------  */}

        <svg
        className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox='0 0 1920 1080'
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          stroke="inherit"
          fill="inherit"
        >
          <rect
            width="1700"
            height="500"
            rx="10"
            ry="10"
            transform="matrix(1.05882 0 0 1 50 20)"
            fill="none"
            strokeWidth="10"
            strokeLinejoin="round"
          />
          <rect
            width="1700"
            height="500"
            rx="10"
            ry="10"
            transform="matrix(1.05882 0 0 1 50 550)"
            fill="none"
            strokeWidth="10"
            strokeLinejoin="round"
          />
          <path
            transform="matrix(1.05882 0 0 1 950 600)"
            fill="none"
            strokeWidth="36"
            d="M-850 0H850"
          />
          <path
            transform="matrix(1.05882 0 0 1 950 647.534)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H850"
          />
          <path
            transform="matrix(1.05882 0 0 1 950 997.534)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H850"
          />
          <path
            transform="matrix(0 .2 1 0 500 817.534)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H900"
          />
          <path
            transform="matrix(0 .2 1 0 300 817.534)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H900"
          />
          <path
            transform="matrix(0 .2 1 0 1250 817.534)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H900"
          />
          <path
            transform="matrix(0 .2 1 0 1450 817.534)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H900"
          />
          <path
            transform="matrix(1.05882 0 0 1 950 470)"
            fill="none"
            strokeWidth="36"
            d="M-850 0H850"
          />
          <path
            transform="matrix(1.05882 0 0 1 950 70)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H850"
          />
          <path
            transform="matrix(.35294 0 0 1 350 170)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H850"
          />
          <path
            transform="matrix(1.05882 0 0 1 950 420)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H850"
          />
          <path
            transform="matrix(0 .2 1 0 650 240)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H900"
          />
          <path
            transform="matrix(0 .2 1 0 850 240)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H900"
          />
          <path
            transform="matrix(0 .2 1 0 450 240)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H900"
          />
          <path
            transform="matrix(0 .2 1 0 1250 240)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H900"
          />
          <path
            transform="matrix(0 .2 1 0 1450 240)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H900"
          />
          <path
            transform="matrix(.22941 0 0 1 1645 170)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H893.588"
          />
          <path
            transform="matrix(.24118 0 0 1 1655 900)"
            fill="none"
            strokeWidth="4"
            d="M-850 0H808.533"
          />
          <g fill="none">
            <circle
              transform="translate(1050.001 250)"
              strokeWidth="4"
              r="150"
            />
            <rect
              width="140.726"
              height="110"
              rx="0"
              ry="0"
              transform="matrix(.49742 0 0 .18182 950 240)"
              strokeWidth="5"
            />
            <rect
              width="130"
              height="54.999"
              rx="0"
              ry="0"
              transform="matrix(0 .46154 -.54546 0 1120 155)"
              strokeWidth="5"
            />
            <rect
              width="112.9"
              height="54.999"
              rx="0"
              ry="0"
              transform="matrix(0 .53145 -.54546 0 1120 285)"
              strokeWidth="5"
            />
          </g>
          <g transform="translate(0 575)" fill="none">
            <circle
              transform="translate(1050.001 250)"
              strokeWidth="4"
              r="150"
            />
            <rect
              width="140.726"
              height="110"
              rx="0"
              ry="0"
              transform="matrix(.49742 0 0 .18182 950 240)"
              strokeWidth="5"
            />
            <rect
              width="130"
              height="54.999"
              rx="0"
              ry="0"
              transform="matrix(0 .46154 -.54546 0 1120 155)"
              strokeWidth="5"
            />
            <rect
              width="112.9"
              height="54.999"
              rx="0"
              ry="0"
              transform="matrix(0 .53145 -.54546 0 1120 285)"
              strokeWidth="5"
            />
          </g>
          <g transform="rotate(180 870 536.267)" fill="none">
            <circle
              transform="translate(1050.001 250)"
              strokeWidth="4"
              r="150"
            />
            <rect
              width="140.726"
              height="110"
              rx="0"
              ry="0"
              transform="matrix(.49742 0 0 .18182 950 240)"
              strokeWidth="5"
            />
            <rect
              width="130"
              height="54.999"
              rx="0"
              ry="0"
              transform="matrix(0 .46154 -.54546 0 1120 155)"
              strokeWidth="5"
            />
            <rect
              width="112.9"
              height="54.999"
              rx="0"
              ry="0"
              transform="matrix(0 .53145 -.54546 0 1120 285)"
              strokeWidth="5"
            />
          </g>
          <rect
            width="140"
            height="54.999"
            rx="5"
            ry="5"
            transform="translate(180 94)"
            fill="none"
            strokeWidth="4"
          />
          <rect
            width="140"
            height="54.999"
            rx="5"
            ry="5"
            transform="translate(1580 94)"
            fill="none"
            strokeWidth="4"
          />
          <rect
            width="140"
            height="54.999"
            rx="5"
            ry="5"
            transform="translate(680 94)"
            fill="none"
            strokeWidth="4"
          />
          <rect
            width="140"
            height="54.999"
            rx="5"
            ry="5"
            transform="translate(1280 920)"
            fill="none"
            strokeWidth="4"
          />
          <rect
            width="140"
            height="54.999"
            rx="5"
            ry="5"
            transform="translate(1580 920)"
            fill="none"
            strokeWidth="4"
          />
          <path
            fill="none"
            strokeWidth="4"
            d="M900 20v50M1000 20v50M1000 997.534v50M900 997.534v50"
          />
          <rect
            width="150"
            height="180"
            rx="5"
            ry="5"
            transform="translate(475 205)"
            fill="none"
            strokeWidth="5"
          />
          <rect
            width="35"
            height="50"
            rx="0"
            ry="0"
            transform="translate(475 270)"
            stroke="none"
          />
          <rect
            width="120.001"
            height="140"
            rx="0"
            ry="0"
            transform="matrix(.83333 0 0 .85714 510 235)"
            fill="none"
            strokeWidth="4"
          />
          <rect
            width="20"
            height="100"
            rx="0"
            ry="0"
            transform="matrix(1 0 0 .9 580 250)"
            stroke="none"
          />
          <rect
            width="20"
            height="100"
            rx="0"
            ry="0"
            transform="matrix(1 0 0 .9 780.001 250)"
            stroke="none"
          />
          <rect
            width="120"
            height="150"
            rx="5"
            ry="5"
            transform="translate(690 220)"
            fill="none"
            strokeWidth="5"
          />
          <rect
            width="40"
            height="40"
            rx="0"
            ry="0"
            transform="translate(690 220)"
            fill="none"
            strokeWidth="4"
          />
          <rect
            width="40"
            height="40"
            rx="0"
            ry="0"
            transform="translate(690 330)"
            fill="none"
            strokeWidth="4"
          />
          <rect
            width="60"
            height="120"
            rx="5"
            ry="5"
            transform="translate(1320 680)"
            fill="none"
            strokeWidth="5"
          />
          <rect
            width="30"
            height="60"
            rx="5"
            ry="5"
            transform="translate(1335 825)"
            fill="none"
            strokeWidth="5"
          />
          <rect
            width="10"
            height="40"
            rx="5"
            ry="5"
            transform="translate(1345 835)"
            fill="none"
            strokeWidth="5"
          />
          <rect
            width="30"
            height="120"
            rx="5"
            ry="5"
            transform="translate(1350 680)"
            stroke="none"
          />
        </svg>
      </div>
    </div>
  );
}
