"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "../contexts/language-context"
import type { Slide } from "../types"
import type { JSX } from "react/jsx-runtime"
import homeImage from "../../assets/images/home-image.png"
export function HomePage(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const { t } = useLanguage()

  const slides: Slide[] = [
    {
      image: `${homeImage}`,
      title: t.home.title,
      subtitle: t.home.subtitle,
    },
  ]

  const handlePrevSlide = (): void => {
    setCurrentSlide((prev: number) => (prev > 0 ? prev - 1 : slides.length - 1))
  }

  const handleNextSlide = (): void => {
    setCurrentSlide((prev: number) => (prev < slides.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
          onClick={handlePrevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
          onClick={handleNextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Content */}
        <div className="absolute inset-0.5 flex items-center justify-center  text-white z-1">
          <div className="max-w-4xl px-4">
            <h1 className="text-6xl md:text-6xl font-bold"
              style={{
                textShadow: "2px 2px 0 #098C81, -2px 2px 0 #098C81, 2px -2px 0 #098C81, -2px -2px 0 #098C81"
              }}>{slides[currentSlide].title}</h1>
            <p className="text-6xl md:text-6xl font-medium" 
            style={{
                textShadow: "2px 2px 0 #098C81, -2px 2px 0 #098C81, 2px -2px 0 #098C81, -2px -2px 0 #098C81"
              }}>{slides[currentSlide].subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
