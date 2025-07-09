"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Language, Translations } from "../types"
import type { JSX } from "react/jsx-runtime"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  getNewsData: () => any[]
}

// Static news data with translations
const newsData = {
  uzbek: [
    {
      id: 1,
      title:
        "Tuproqqal'a tumani axborot-kutubxona markazi hodimlarining 'Kitobxon ona – ziyoli avlod tarbiyachisi' mavzusida me'naviy-ma'rifiy tadbirlar uyushtirildi.",
      date: "18.06.2023",
      image: "src/assets/images/rasm.png",
      excerpt: "Kutubxona markazi tomonidan oilalar uchun maxsus tadbir tashkil etildi.",
    },
    {
      id: 2,
      title:
        "Tuproqqal'a tumani Axborot kutubxona markazi hodimlarining 'Nilufar' nomidagi bo'lib 'Kitob bilim bulogi o'quvchining o'rtogi' mavzusida kitobli ko'rgazma tashkil qilindi.",
      date: "18.06.2023",
      image: "src/assets/images/rasm.png",
      excerpt: "Bolalar uchun maxsus kitob ko'rgazmasi tashkil etildi.",
    },
    {
      id: 3,
      title: "Kutubxona markazi yangi kitoblar bilan boyitildi",
      date: "15.06.2023",
      image: "src/assets/images/rasm.png",
      excerpt: "500 dan ortiq yangi kitob kutubxona fondiga qo'shildi.",
    },
    {
      id: 4,
      title: "Yoshlar uchun kompyuter kurslari boshlandi",
      date: "12.06.2023",
      image: "src/assets/images/rasm.png",
      excerpt: "16-25 yoshdagi yoshlar uchun bepul kompyuter kurslari tashkil etildi.",
    },
    {
      id: 5,
      title: "Adabiy kecha 'Navoi asarlari' mavzusida o'tkazildi",
      date: "10.06.2023",
      image: "src/assets/images/rasm.png",
      excerpt: "Alisher Navoi ijodiga bag'ishlangan adabiy kecha muvaffaqiyatli o'tdi.",
    },
    {
      id: 6,
      title: "Bolalar uchun ertak o'qish kuni tashkil etildi",
      date: "08.06.2023",
      image: "src/assets/images/rasm.png",
      excerpt: "3-7 yoshdagi bolalar uchun interaktiv ertak o'qish dasturi.",
    },
    {
      id: 7,
      title: "Kutubxona xodimlariga malaka oshirish kurslari",
      date: "05.06.2023",
      image: "src/assets/images/rasm.png",
      excerpt: "Zamonaviy kutubxona xizmatlari bo'yicha treninglar o'tkazildi.",
    },
    {
      id: 8,
      title: "Yozgi o'qish dasturi e'lon qilindi",
      date: "01.06.2023",
      image: "src/assets/images/rasm.png",
      excerpt: "Yoz faslida bolalar uchun maxsus o'qish dasturi ishga tushirildi.",
    },
  ],
  russian: [
    {
      id: 1,
      title:
        "Сотрудники информационно-библиотечного центра Турпаккалинского района организовали духовно-просветительские мероприятия на тему 'Читающая мать - воспитатель просвещенного поколения'.",
      date: "18.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Библиотечный центр организовал специальное мероприятие для семей.",
    },
    {
      id: 2,
      title:
        "Сотрудники информационно-библиотечного центра Турпаккалинского района организовали книжную выставку в отделе 'Нилуфар' на тему 'Книга - источник знаний, спутник ученика'.",
      date: "18.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Организована специальная книжная выставка для детей.",
    },
    {
      id: 3,
      title: "Библиотечный центр пополнился новыми книгами",
      date: "15.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Более 500 новых книг добавлено в библиотечный фонд.",
    },
    {
      id: 4,
      title: "Начались компьютерные курсы для молодежи",
      date: "12.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Организованы бесплатные компьютерные курсы для молодежи 16-25 лет.",
    },
    {
      id: 5,
      title: "Литературный вечер на тему 'Произведения Навои' прошел успешно",
      date: "10.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Литературный вечер, посвященный творчеству Алишера Навои, прошел успешно.",
    },
    {
      id: 6,
      title: "Организован день чтения сказок для детей",
      date: "08.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Интерактивная программа чтения сказок для детей 3-7 лет.",
    },
    {
      id: 7,
      title: "Курсы повышения квалификации для сотрудников библиотеки",
      date: "05.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Проведены тренинги по современным библиотечным услугам.",
    },
    {
      id: 8,
      title: "Объявлена летняя программа чтения",
      date: "01.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Запущена специальная программа чтения для детей на летний период.",
    },
  ],
  english: [
    {
      id: 1,
      title:
        "Staff of Tuproqqala district information library center organized spiritual and educational events on the theme 'Reading mother - educator of enlightened generation'.",
      date: "18.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "The library center organized a special event for families.",
    },
    {
      id: 2,
      title:
        "Staff of Tuproqqala district Information library center organized a book exhibition in the 'Nilufar' department on the theme 'Book is a source of knowledge, student's companion'.",
      date: "18.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "A special book exhibition was organized for children.",
    },
    {
      id: 3,
      title: "Library center enriched with new books",
      date: "15.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "More than 500 new books added to the library collection.",
    },
    {
      id: 4,
      title: "Computer courses for youth started",
      date: "12.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Free computer courses organized for youth aged 16-25.",
    },
    {
      id: 5,
      title: "Literary evening on 'Navoi's Works' held successfully",
      date: "10.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Literary evening dedicated to Alisher Navoi's works was held successfully.",
    },
    {
      id: 6,
      title: "Fairy tale reading day organized for children",
      date: "08.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Interactive fairy tale reading program for children aged 3-7.",
    },
    {
      id: 7,
      title: "Professional development courses for library staff",
      date: "05.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Training sessions on modern library services were conducted.",
    },
    {
      id: 8,
      title: "Summer reading program announced",
      date: "01.06.2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Special reading program for children launched for summer season.",
    },
  ],
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
      about: ''
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
      description: "Kutubxonamiz so'ngi yillar davomida rivojlanib, zamonaviy kutubxona xizmatlarini taqdim etish maqsadida faoliyat yuritmoqda.",
      contact: "Biz bilan bog'laning",
      social: "Ijtimoiy tarmoqlar",
      rights: "Barcha huquqlar himoyalangan.",
    },
    about: {
      location: 'Bizning joylashgan joyimiz',
      contactForm: {
        title: `Savollaringiz bo'lsa qoldiring`,
        subtitle: `Biz siz bilan bog'lanamiz`,
        submit: `Jo'natish`,
        namePlaceholder: 'Ismingizni kiriting',
        phonePlaceholder: '+998-(99)-013-32-82',
        messagePlaceholder: 'Savollaringizni kiriting'
      },
      schedule: ''
    }
  },
  russian: {
    nav: {
      home: "Главная",
      news: "Новости",
      books: "Книги",
      information: "Информация",
      aboutLibrary: "О ИБЦ",
      leadership: "Руководство",
      about: ''
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
      description: "Наша библиотека развивается в последние годы с целью предоставления современных библиотечных услуг.",
      contact: "Свяжитесь с нами",
      social: "Социальные сети",
      rights: "Все права защищены.",
    },
    about: {
      location: '',
      contactForm: {
        title: '',
        subtitle: '',
        submit: '',
        namePlaceholder: '',
        phonePlaceholder: '',
        messagePlaceholder: ''
      },
      schedule: ''
    }
  },
  english: {
    nav: {
      home: "Home",
      news: "News",
      books: "Books",
      information: "Information",
      aboutLibrary: "About ILC",
      leadership: "Leadership",
      about: ''
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
    about: {
      location: '',
      contactForm: {
        title: '',
        subtitle: '',
        submit: '',
        namePlaceholder: '',
        phonePlaceholder: '',
        messagePlaceholder: ''
      },
      schedule: ''
    }
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps): JSX.Element {
  const [language, setLanguage] = useState<Language>("uzbek")

  const getNewsData = () => {
    return newsData[language] || newsData.uzbek
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    getNewsData,
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
