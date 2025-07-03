"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import homeImage from "../../assets/images/home-image.png"
import { useLanguage } from "../../contexts/language-context"
import type { Slide } from "../../types"
import { Button } from "../ui/button"


export function Hero() {
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
    <div className="container relative ">
      {/* Hero Section */}
      <div className="relative h-[840px] overflow-hidden">
        <div
          className="absolute inset-0 bg-repeat-round"
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
          className="absolute left-12 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
          onClick={handlePrevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="!h-15 !w-15" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-12 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
          onClick={handleNextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="!h-15 !w-15" />
        </Button>

        {/* Content */}
        <div className="absolute top-68 left-[130px] right-0 flex items-center justify-start  text-white z-1">
          <div className="">
            <h1 className="text-[48px] md:text-[48px] font-bold pb-[40px] -tracking-tight"
              style={{
                textShadow: "2px 2px 0 #098C81, -2px 2px 0 #098C81, 2px -2px 0 #098C81, -2px -2px 0 #098C81"
              }}>{slides[currentSlide].title}</h1>
            <p className="text-[48px] md:text-[48px] font-bold tracking-wide pr-[500px]"
              style={{
                textShadow: "2px 2px 0 #098C81, -2px 2px 0 #098C81, 2px -2px 0 #098C81, -2px -2px 0 #098C81"
              }}>{slides[currentSlide].subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
