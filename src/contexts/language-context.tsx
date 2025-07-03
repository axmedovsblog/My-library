"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Language, Translations } from "../types"
import type { JSX } from "react/jsx-runtime"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const translations: Record<Language, Translations> = {
  uzbek: {
    nav: {
      home: "Bosh sahifa",
      news: "Yangiliklar",
      books: "Kitoblar",
      information: "Ma'lumot",
      aboutLibrary: "AKM haqida",
      leadership: "Rahbariyat",
    },
    home: {
      title: "Tuproqqal'a tumani axborot kutubxona markazi",
      subtitle: "Kitob - bizning kuchimiz, kelajagimiz poydevori!",
    },
    news: {
      title: "YANGILIKLAR",
    },
    books: {
      title: "KITOBLAR",
      searchPlaceholder: "Kitob yoki muallif nomi...",
      categoryPlaceholder: "Kategoriya tanlang",
      allCategories: "Barcha kategoriyalar",
      available: "Mavjud",
      borrowed: "Ijarada",
      rent: "Ijaraga olish",
      waitlist: "Kutish ro'yxati",
      noResults: "Qidiruv bo'yicha kitoblar topilmadi.",
    },
    aboutLibrary: {
      title: "AKM HAQIDA",
      history: "Tarix",
      mission: "Missiya",
      vision: "Vizyon",
      services: "Xizmatlar",
    },
    leadership: {
      title: "RAHBARIYAT",
      director: "Direktor",
      staff: "Xodimlar",
    },
    footer: {
      description:
        "Kutubxonamiz so'ngi yillar davomida rivojlanib, zamonaviy kutubxona xizmatlarini taqdim etish maqsadida faoliyat yuritmoqda.",
      contact: "Biz bilan bog'laning",
      social: "Ijtimoiy tarmoqlar",
      rights: "Barcha huquqlar himoyalangan.",
    },
  },
  russian: {
    nav: {
      home: "Главная",
      news: "Новости",
      books: "Книги",
      information: "Информация",
      aboutLibrary: "О ИБЦ",
      leadership: "Руководство",
    },
    home: {
      title: "Информационно-библиотечный центр Турпаккалинского района",
      subtitle: "Книга - наша сила, основа нашего будущего!",
    },
    news: {
      title: "НОВОСТИ",
    },
    books: {
      title: "КНИГИ",
      searchPlaceholder: "Название книги или автор...",
      categoryPlaceholder: "Выберите категорию",
      allCategories: "Все категории",
      available: "Доступно",
      borrowed: "В аренде",
      rent: "Взять в аренду",
      waitlist: "Лист ожидания",
      noResults: "По вашему запросу книги не найдены.",
    },
    aboutLibrary: {
      title: "О ИБЦ",
      history: "История",
      mission: "Миссия",
      vision: "Видение",
      services: "Услуги",
    },
    leadership: {
      title: "РУКОВОДСТВО",
      director: "Директор",
      staff: "Сотрудники",
    },
    footer: {
      description:
        "Наша библиотека развивается в последние годы с целью предоставления современных библиотечных услуг.",
      contact: "Свяжитесь с нами",
      social: "Социальные сети",
      rights: "Все права защищены.",
    },
  },
  english: {
    nav: {
      home: "Home",
      news: "News",
      books: "Books",
      information: "Information",
      aboutLibrary: "About ILC",
      leadership: "Leadership",
    },
    home: {
      title: "Tuproqqala District Information Library Center",
      subtitle: "Books are our strength, the foundation of our future!",
    },
    news: {
      title: "NEWS",
    },
    books: {
      title: "BOOKS",
      searchPlaceholder: "Book title or author...",
      categoryPlaceholder: "Select category",
      allCategories: "All Categories",
      available: "Available",
      borrowed: "Borrowed",
      rent: "Rent Book",
      waitlist: "Waiting List",
      noResults: "No books found for your search.",
    },
    aboutLibrary: {
      title: "ABOUT ILC",
      history: "History",
      mission: "Mission",
      vision: "Vision",
      services: "Services",
    },
    leadership: {
      title: "LEADERSHIP",
      director: "Director",
      staff: "Staff",
    },
    footer: {
      description: "Our library has been developing in recent years with the aim of providing modern library services.",
      contact: "Contact Us",
      social: "Social Networks",
      rights: "All rights reserved.",
    },
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps): JSX.Element {
  const [language, setLanguage] = useState<Language>("uzbek")

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
