"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    img: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [direction, speed]); // Include `direction` and `speed` if they are used inside `addAnimation`

  const getDirection = () => {
    if (containerRef.current) {
      const animationDirection = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", animationDirection);
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const animationDuration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", animationDuration);
    }
  };

  useEffect(() => {
    addAnimation();
  }, [addAnimation]); // Add `addAnimation` as a dependency

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full bg-gray-200 shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-220 h-100 relative rounded-xl flex-shrink-0 p-5 md:p-10 md:w-[20vw]"
            style={{ background: "white" }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>

              <span className="relative items-center z-20 text-sm md:text-lg leading-[1.6] text-gray-800 font-bold">
                {item.title}
              </span>
              <div className="relative mt-6">
                <Link href="/all-products">
                  <div className="flex items-center justify-center gap-4">
                    <Image width={180} height={90} src={item.img} alt={item.title} />
                  </div>
                </Link>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
