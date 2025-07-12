"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Heart, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "../contexts/language-context"
import type { Book } from "../types"

const books: Book[] = [
  {
    id: 1,
    title: "Ernest Jemingway, To'g'rilik va yo'g'chilik",
    author: "Ernest Hemingway",
    category: "fiction",
    year: 2020,
    available: true,
    cover: "src/assets/images/yuqchilik.png",
    format: "PDF",
    pages: 123,
  },
  {
    id: 2,
    title: "Ernest Jemingway, To'g'rilik va yo'g'chilik",
    author: "Ernest Hemingway",
    category: "fiction",
    year: 2020,
    available: true,
    cover: "src/assets/images/yuqchilik.png",
    format: "PDF",
    pages: 123,
  },
  {
    id: 3,
    title: "Otabek Mahkamov, Yuqsaklik sari tasodifli bo'lmagan",
    author: "Otabek Mahkamov",
    category: "philosophy",
    year: 2021,
    available: true,
    cover: "src/assets/images/yuksalish.png",
    format: "PDF",
    pages: 123,
  },
  {
    id: 4,
    title: "Ernest Jemingway, To'g'rilik va yo'g'chilik",
    author: "Ernest Hemingway",
    category: "fiction",
    year: 2020,
    available: true,
    cover: "src/assets/images/yuqchilik.png",
    format: "PDF",
    pages: 123,
  },
  {
    id: 5,
    title: "Ernest Jemingway, To'g'rilik va yo'g'chilik",
    author: "Ernest Hemingway",
    category: "fiction",
    year: 2020,
    available: true,
    cover: "src/assets/images/yuqchilik.png",
    format: "PDF",
    pages: 123,
  },
  {
    id: 6,
    title: "Ernest Jemingway, To'g'rilik va yo'g'chilik",
    author: "Ernest Hemingway",
    category: "fiction",
    year: 2020,
    available: true,
    cover: "src/assets/images/yuqchilik.png",
    format: "PDF",
    pages: 123,
  },
  {
    id: 7,
    title: "Ernest Jemingway, To'g'rilik va yo'g'chilik",
    author: "Ernest Hemingway",
    category: "fiction",
    year: 2020,
    available: true,
    cover: "src/assets/images/yuqchilik.png",
    format: "PDF",
    pages: 123,
  },
  {
    id: 8,
    title: "Ernest Jemingway, To'g'rilik va yo'g'chilik",
    author: "Ernest Hemingway",
    category: "fiction",
    year: 2020,
    available: true,
    cover: "src/assets/images/yuqchilik.png",
    format: "PDF",
    pages: 123,
  },
  {
    id: 9,
    title: "Ernest Jemingway, To'g'rilik va yo'g'chilik",
    author: "Ernest Hemingway",
    category: "fiction",
    year: 2020,
    available: true,
    cover: "src/assets/images/yuqchilik.png",
    format: "PDF",
    pages: 123,
  },
  {
    id: 10,
    title: "Ernest Jemingway, To'g'rilik va yo'g'chilik",
    author: "Ernest Hemingway",
    category: "fiction",
    year: 2020,
    available: true,
    cover: "src/assets/images/yuqchilik.png",
    format: "PDF",
    pages: 123,
  },
  {
    id: 11,
    title: "Ernest Jemingway, To'g'rilik va yo'g'chilik",
    author: "Ernest Hemingway",
    category: "fiction",
    year: 2020,
    available: true,
    cover: "src/assets/images/yuqchilik.png",
    format: "PDF",
    pages: 123,
  },
  {
    id: 12,
    title: "Ernest Jemingway, To'g'rilik va yo'g'chilik",
    author: "Ernest Hemingway",
    category: "fiction",
    year: 2020,
    available: true,
    cover: "src/assets/images/yuqchilik.png",
    format: "PDF",
    pages: 123,
  },
  {
    id: 13,
    title: "Ernest Jemingway, To'g'rilik va yo'g'chilik",
    author: "Ernest Hemingway",
    category: "fiction",
    year: 2020,
    available: true,
    cover: "src/assets/images/yuqchilik.png",
    format: "PDF",
    pages: 123,
  },
]

export function Books() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedSort, setSelectedSort] = useState<string>("all")
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [favorites, setFavorites] = useState<Set<number>>(new Set())
  const { t } = useLanguage()

  const itemsPerPage = 12
  const totalPages = Math.ceil(books.length / itemsPerPage)

  const filteredBooks = useMemo<Book[]>(() => {
    return books.filter((book: Book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedSort === "all" || book.category === selectedSort

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedSort])

  const paginatedBooks = useMemo<Book[]>(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredBooks.slice(startIndex, endIndex)
  }, [filteredBooks, currentPage])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const handleSortChange = (value: string): void => {
    setSelectedSort(value)
    setCurrentPage(1)
  }

  const handleLanguageChange = (value: string): void => {
    setSelectedLanguage(value)
    setCurrentPage(1)
  }

  const toggleFavorite = (bookId: number): void => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(bookId)) {
        newFavorites.delete(bookId)
      } else {
        newFavorites.add(bookId)
      }
      return newFavorites
    })
  }

  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }

  return (
    <div className="container py-8 min-h-screen">
      <div className="container mx-auto pl-[120px] pr-[100px] max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.books.title}</h1>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={t.books.searchPlaceholder}
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 h-10 border-gray-300"
            />
          </div>

          <Select value={selectedSort} onValueChange={handleSortChange}>
            <SelectTrigger className="w-full md:w-48 h-10 !bg-red">
              <SelectValue placeholder={t.books.allCategories} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.books.allCategories}</SelectItem>
              <SelectItem value="fiction">{t.books.categories.fiction}</SelectItem>
              <SelectItem value="russian">{t.books.categories.russian}</SelectItem>
              <SelectItem value="uzbek">{t.books.categories.uzbek}</SelectItem>
              <SelectItem value="president">{t.books.categories.president}</SelectItem>
              <SelectItem value="stories">{t.books.categories.stories}</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-full md:w-48 h-10 border-gray-300">
              <SelectValue placeholder={t.books.languagePlaceholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.books.languages.all}</SelectItem>
              <SelectItem value="uzbek">{t.books.languages.uzbek}</SelectItem>
              <SelectItem value="russian">{t.books.languages.russian}</SelectItem>
              <SelectItem value="english">{t.books.languages.english}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {paginatedBooks.map((book: Book) => (
            <Card
              key={book.id}
              className=" bg-white border border-gray-200 rounded-[16px] !p-0 !py-[10px] !px-[15px]"
            >
              <div className="aspect-[4/4] relative">
                <img src={book.cover || "/placeholder.svg"} alt={book.title} className="object-cover w-full h-full" />
                <button
                  onClick={() => toggleFavorite(book.id)}
                  className="absolute top-[330px] right-0  bg-none rounded-full "
                >
                  <Heart
                    className={`h-6 w-6 ${
                      favorites.has(book.id) ? "fill-red-500 text-red-500" : "text-gray-600 hover:text-red-500"
                    }`}
                  />
                </button>
              </div>
              <CardContent className="!p-0">
                <h3 className="font-medium text-gray-900 mb-3 text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
                  {book.title}
                </h3>
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between items-center text-xs text-gray-600">
                    <span>
                      {t.books.bookInfo.format}: {book.format || "PDF"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-600">
                    <span>
                      {t.books.bookInfo.pages}: {book.pages || 123}
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-[#16A085] hover:bg-[#138D75] text-white text-sm font-medium h-9" size="sm">
                  {t.books.bookInfo.download}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: Math.min(6, totalPages) }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "ghost"}
              size="sm"
              onClick={() => handlePageChange(page)}
              className={`h-8 w-8 p-0 text-sm ${
                currentPage === page ? "bg-[#16A085] hover:bg-[#138D75] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

