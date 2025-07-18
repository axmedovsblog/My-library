// Faqat tarjimalar uchun emas, haqiqiy kitoblar ro'yxati uchun interfeys
export interface Book {
  id: number
  title: string
  author: string
  category: string
  year: number
  available: boolean
  cover: string
  format: string
  pages: number
}

// Tarjimalar uchun interfeys (frontend UI matnlari)
export interface Translations {
  nav: {
    home: string
    news: string
    books: string
    about: string
    information: string
    aboutLibrary: string
    leadership: string
  }
  home: {
    title: string
    subtitle: string
  }
  news: {
    title: string
  }
  books: {
    title: string
    searchPlaceholder: string
    sortPlaceholder: string
    languagePlaceholder: string
    allCategories: string
    categories: {
      fiction: string
      russian: string
      uzbek: string
      president: string
      stories: string
    }
    languages: {
      all: string
      uzbek: string
      russian: string
      english: string
    }
    bookInfo: {
      format: string
      pages: string
      download: string
    }
  }
  about: {
    location: string
    contactForm: {
      title: string
      subtitle: string
      submit: string
      namePlaceholder: string
      phonePlaceholder: string
      messagePlaceholder: string
    }
    schedule: string
  }
  aboutLibrary: {
    title: string
    history: string
    mission: string
    vision: string
    services: string
  }
  leadership: {
    title: string
    director: string
    staff: string
  }
  footer: {
    title: string
    description: string
    contact: string
    rights: string
  }
}

export interface NewsItem {
  id: number
  title: string
  date: string
  image: string
  content?: string
}

export interface BorrowRecord {
  borrower: string
  borrowDate: string
  returnDate: string
}

export interface BookDetail extends Book {
  borrowHistory: BorrowRecord[]
}

export interface ContactForm {
  name: string
  phone: string
  message: string
}

export interface NavItem {
  path: string
  label: string
}

export interface DropdownNavItem {
  label: string
  items: NavItem[]
}

export interface Slide {
  image: string
  title: string
  subtitle: string
}

export interface ServiceItem {
  icon: string
  title: string
  description: string
}

export interface StatItem {
  value: string
  label: string
}

export interface LeadershipMember {
  id: number
  name: string
  position: string
  image: string
  bio?: string
  email?: string
  phone?: string
}

export type Language = "uzbek" | "russian" | "english"
