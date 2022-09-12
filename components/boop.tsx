// on hover image animation

import Image from "next/image";
import { useState } from "react";

function Boop() {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div className="relative w-48 h-48">
      <Image
        src="/images/boop.png"
        alt="boop"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        style={{
          filter: hovered ? "brightness(0.5)" : "brightness(1)",
          transition: "filter 0.5s",
        }}
      />
    </div>
  );
}

export default Boop;