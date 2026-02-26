"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-2xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-80 md:h-96 w-full transition-all duration-300 ease-out group",
        hovered !== null && hovered !== index && "blur-[2px] scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" />
      
      {/* Hover Content */}
      <div
        className={cn(
          "absolute inset-0 bg-black/80 flex flex-col justify-end py-8 px-6 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        {card.badge && (
          <div className="mb-3">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
              {card.badge}
            </span>
          </div>
        )}
        <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-200 mb-2">
          {card.title}
        </div>
        <div className="text-sm text-emerald-400 font-medium mb-3">
          {card.subtitle}
        </div>
        <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
          {card.description}
        </p>
      </div>
      
      {/* Default View (when not hovered) */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300",
          hovered === index ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="text-xl md:text-2xl font-bold text-white mb-1">
          {card.title}
        </div>
        {card.subtitle && (
          <div className="text-sm text-emerald-400 font-medium">
            {card.subtitle}
          </div>
        )}
      </div>
    </div>
  )
);

Card.displayName = "Card";

export type CardType = {
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
  src: string;
};

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}