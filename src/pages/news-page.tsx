"use client"

import { Card, CardContent } from "../components/ui/card"
import { useLanguage } from "../contexts/language-context"
import type { JSX } from "react"

export function NewsPage(): JSX.Element {
  const { t, getNewsData } = useLanguage()

  const newsItems = getNewsData()
	console.log(newsItems);
	

  return (
    <div className="py-16 min-h-screen">
      <div className="container mx-auto px-[105px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.news.title}</h1>
          <div className="w-24 h-1 bg-[#3B4F9A] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item: any) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer p-[15px]">
              <div className="aspect-[4/3] relative">
                <img src={item.image} className="object-cover w-full h-full" />
              </div>
              <CardContent className="flex flex-col justify-between h-full !px-0">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-7 leading-relaxed">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 self-end">{item.date}</p>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
