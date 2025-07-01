import { BrowserRouter as Router,Routes, Route} from "react-router-dom"
// import { NewsPage } from "@/components/news-page"
// import { BooksPage } from "@/components/books-page"
// import { AboutPage } from "@/components/about-page"
// import { Footer } from "@/components/footer"
import type { JSX } from "react" // Declaring JSX variable
import { Navbar } from '../components/navbar'
import { HomePage } from '../components/home-page'
import { LanguageProvider } from '../contexts/language-context'



export default function Pages(): JSX.Element {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-background ">
          <Navbar />
          <main>
             <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/yangiliklar" element={<NewsPage />} />
            <Route path="/kitoblar" element={<BooksPage />} />
            <Route path="/biz-haqimizda" element={<AboutPage />} /> */}
          </Routes> 
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </LanguageProvider>
  )
}
