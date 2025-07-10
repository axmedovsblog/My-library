"use client"
import { Instagram, Send, Youtube, Twitter, Facebook } from "lucide-react"
import { useLanguage } from "../../contexts/language-context"
import type { JSX } from "react"

export function Footer(): JSX.Element {
  const { t } = useLanguage()

  return (
    <footer className="container rounded-tl-[50px] rounded-tr-[50px]  bg-[#3B4F9A] text-white">
      <div className="container mx-auto px-[100px] py-[50px]">
        <div className="grid md:grid-cols-4 gap-[152px]">
          {/* Library Info */}
          <div className='text-[#FFFFFF]'>
            <h3 className="text-2xl font-bold mb-[10px]">{t.footer.title}</h3>
            <p className=" text-lg">{t.footer.description}</p>
            {/* Social Media */}
            <div className='pt-[54px]'>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com"
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="mailto:tuproqqalatumanixaxborotkutubxona@gmail.com"
                  className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Send Email"
                >
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <ul className="space-y-7 text-2xl text-[#FFFFFF]">
            <li>
                <a href="/" className=" hover:text-white transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="/yangiliklar" className=" hover:text-white transition-colors">
                  {t.nav.news}
                </a>
              </li>
              <li>
                <a href="/kitoblar" className=" hover:text-white transition-colors">
                  {t.nav.books}
                </a>
              </li>
              <li>
                <a href="/information" className=" hover:text-white transition-colors">
                  {t.nav.information}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
            <div className="space-y-2 text-sm text-blue-200">
              <p>Xorazm viloyati, Tuproqqal'a tumani, Markaz, Mustaqillik ko'chasi, 1-uy</p>
              <p>+998 77 317 14 05</p>
              <p>tuproqqalatumanixaxborotkutubxona@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
