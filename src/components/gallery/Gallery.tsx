import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

const Gallery: React.FC = () => {
  const images = [
    "/miko.png",
    "/miko1.png",
    "/mar-art.png",
    "/noss2.png",
    "/miko.png",
    "/miko1.png",
    "/mar-art.png",
    "/noss2.png",
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: 0 });

  useEffect(() => {
    const updateDragConstraints = () => {
      setDragConstraints({
        right: 0,
        left: -(images.length * 204) + window.innerWidth - 100,
      });
    };

    // Initial calculation
    updateDragConstraints();

    // Update on window resize
    window.addEventListener("resize", updateDragConstraints);

    return () => {
      window.removeEventListener("resize", updateDragConstraints);
    };
  }, [images.length]);

  return (
    <section className="flex flex-col py-8my-2">
      <div className="overflow-hidden">
        <motion.div
          ref={carouselRef}
          style={{ x }}
          drag="x"
          dragDirectionLock
          dragElastic={0.1}
          className="flex cursor-grab active:cursor-grabbing gap-2"
          dragConstraints={dragConstraints}
          whileTap={{ cursor: "grabbing" }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative py-4"
              style={{}}
              initial={false}
            >
              <div className="min-w-[200px] h-[280px]">
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                    draggable="false"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
