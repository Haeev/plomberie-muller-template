"use client"

import { useState } from "react"
import Image from "next/image"
import { isColorDark, getInitials } from "@/lib/utils"
import type { Realisation } from "@/lib/content/realisations"

type RealisationCardProps = {
  item: Realisation
}

const RealisationCard = ({ item }: RealisationCardProps) => {
  const [imgError, setImgError] = useState(false)
  const dark = isColorDark(item.color)
  const textClass = dark ? "text-white" : "text-gray-900"
  const initials = getInitials(item.title)

  return (
    <article
      className="group overflow-hidden rounded-2xl border border-border bg-bg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      aria-labelledby={`real-${item.id}-title`}
    >
      {/* Image / Fallback zone */}
      <div className="relative h-52 overflow-hidden">
        {imgError ? (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${item.color}cc 0%, ${item.color} 100%)`,
            }}
            aria-hidden="true"
          >
            <span
              className={`select-none text-5xl font-extrabold tracking-tight opacity-80 ${textClass}`}
            >
              {initials}
            </span>
          </div>
        ) : (
          <Image
            src={item.imageUrl}
            alt={`Réalisation : ${item.title} à ${item.city}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-fg/60 to-transparent pointer-events-none" />
        <span className="absolute top-3 left-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3
            id={`real-${item.id}-title`}
            className="font-bold text-fg"
          >
            {item.title}
          </h3>
          <span className="text-xs text-fg-muted">{item.city}</span>
        </div>
        <p className="mb-3 text-sm text-fg-muted">{item.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2 py-0.5 text-xs text-fg-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default RealisationCard
