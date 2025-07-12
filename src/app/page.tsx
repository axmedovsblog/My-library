import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import type { JSX } from "react" // Declaring JSX variable
import { Navbar } from '../components/layout/navbar'
import { LanguageProvider } from '../contexts/language-context'
import { HomePage } from '../components/homePage/home-page'
import { Footer } from '../components/layout/footer-section'
import { ContactPage } from '../components/layout/contact-page'
import BooksPage from '../components/books/book-page'

export default function Pages(): JSX.Element {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-background ">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* /* <Route path="/yangiliklar" element={<NewsPage />} /> */}
            <Route path="/kitoblar" element={<BooksPage />} />
            {/* <Route path="/biz-haqimizda" element={<AboutPage />} /> */}
            </Routes>
          </main>
          <ContactPage />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}
