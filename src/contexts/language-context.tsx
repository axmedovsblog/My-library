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
      welcome: "Kutubxonamizga xush kelibsiz!",
      welcomeText:
        "Tuproqqal'a tumani axborot kutubxona markazi - bu bilim va ma'rifat maskani. Bizning kutubxonamizda minglab kitoblar, zamonaviy texnologiyalar va professional xodimlar sizni kutmoqda. Biz har bir tashrif buyuruvchiga sifatli xizmat ko'rsatishga intilamiz.",
      services: "Bizning xizmatlarimiz",
      stats: {
        books: "Kitoblar soni",
        readers: "Faol o'quvchilar",
        experience: "Yillik tajriba",
      },
      serviceItems: {
        bookRental: {
          title: "Kitob ijara",
          description: "Minglab kitoblardan tanlang va uyga olib keting",
        },
        internet: {
          title: "Internet xizmati",
          description: "Tezkor internet va kompyuter xizmatlari",
        },
        events: {
          title: "Tadbirlar",
          description: "Adabiy kechalar va madaniy tadbirlar",
        },
        education: {
          title: "Ta'lim",
          description: "Darslar va seminarlar tashkil etish",
        },
      },
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
      welcome: "Добро пожаловать в нашу библиотеку!",
      welcomeText:
        "Информационно-библиотечный центр Турпаккалинского района - это дом знаний и просвещения. В нашей библиотеке вас ждут тысячи книг, современные технологии и профессиональные сотрудники. Мы стремимся предоставить качественные услуги каждому посетителю.",
      services: "Наши услуги",
      stats: {
        books: "Количество книг",
        readers: "Активные читатели",
        experience: "Лет опыта",
      },
      serviceItems: {
        bookRental: {
          title: "Аренда книг",
          description: "Выбирайте из тысяч книг и берите домой",
        },
        internet: {
          title: "Интернет-услуги",
          description: "Быстрый интернет и компьютерные услуги",
        },
        events: {
          title: "Мероприятия",
          description: "Литературные вечера и культурные мероприятия",
        },
        education: {
          title: "Образование",
          description: "Организация уроков и семинаров",
        },
      },
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
      welcome: "Welcome to our library!",
      welcomeText:
        "Tuproqqala District Information Library Center is a home of knowledge and enlightenment. Our library offers thousands of books, modern technologies, and professional staff waiting for you. We strive to provide quality services to every visitor.",
      services: "Our Services",
      stats: {
        books: "Number of Books",
        readers: "Active Readers",
        experience: "Years of Experience",
      },
      serviceItems: {
        bookRental: {
          title: "Book Rental",
          description: "Choose from thousands of books and take them home",
        },
        internet: {
          title: "Internet Service",
          description: "Fast internet and computer services",
        },
        events: {
          title: "Events",
          description: "Literary evenings and cultural events",
        },
        education: {
          title: "Education",
          description: "Organizing lessons and seminars",
        },
      },
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
