"use client";

import { useId } from "react";

export default function Grain({ opacity = 0.06 }) {
  const id = useId();
  const filterId = `grain-${id.replace(/:/g, "")}`;

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity,
        mixBlendMode: "overlay",
      }}
      aria-hidden="true"
    >
      <filter id={filterId}>
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix values="0 0 0 0 1, 0 0 0 0 1, 0 0 0 0 1, 0 0 0 1 0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${filterId})`} />
    </svg>
  );
}
