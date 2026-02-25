"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { myPics } from "@/images/photos";

const possibleRotations = [1.3, -1.3, 1.3, -1.3, 1.3, -1.3];

const Photo = ({ img, title, alt, idx }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ scale: 1, rotate: possibleRotations[idx % possibleRotations.length], opacity: 0 }}
      whileHover={{ scale: 1.1, rotate: 0, transition: { duration: 0.2 } }}
      whileInView={{ opacity: 1, transition: { delay: idx / 100 } }}
      viewport={{ once: true }}
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
      className={clsx(
        "relative aspect-[16/9] w-[20rem] flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-[28rem] sm:rounded-2xl"
      )}
    >
      <Image
        src={img}
        alt={alt}
        sizes="(min-width: 640px) 18rem, 11rem"
        className="absolute inset-0 h-full w-full object-fill"
        placeholder="blur"
      />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex w-full items-end bg-gradient-to-t from-black/75 via-black/0"
          >
            <h3 className="px-3 py-2 text-xs font-bold text-white">{title}</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Photos = () => {
  const containerRef = useRef(null);
  const loopedPhotos = [...myPics, ...myPics, ...myPics];

  const scrollPhotos = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollLeft = container.scrollWidth / 3;

    const handleScroll = () => {
      const segmentWidth = container.scrollWidth / 3;
      if (container.scrollLeft < segmentWidth * 0.5) {
        container.scrollLeft += segmentWidth;
      } else if (container.scrollLeft > segmentWidth * 1.5) {
        container.scrollLeft -= segmentWidth;
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative left-1/2 right-1/2 my-8 w-screen -translate-x-1/2">
      <button
        type="button"
        aria-label="Scroll media highlights left"
        onClick={() => scrollPhotos(-1)}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/35 p-2 text-white/90 backdrop-blur-sm transition hover:bg-black/50"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        type="button"
        aria-label="Scroll media highlights right"
        onClick={() => scrollPhotos(1)}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/35 p-2 text-white/90 backdrop-blur-sm transition hover:bg-black/50"
      >
        <ChevronRight size={18} />
      </button>

      <div ref={containerRef} className="hide-scrollbar -my-4 flex gap-6 overflow-x-auto py-4 px-4 sm:px-6">
        {loopedPhotos.map((myPic, index) => (
          <Photo
            key={`${myPic.img.src}-${index}`}
            img={myPic.img}
            title={myPic.title}
            alt={myPic.alt}
            idx={index}
          />
        ))}
      </div>
    </div>
  );
};
