"use client"

import { Link } from "react-router-dom"
import { Instagram, Send, Youtube, Twitter, Facebook } from "lucide-react"
import { useLanguage } from "../../contexts/language-context"
import type { JSX } from "react"

export function Footer(): JSX.Element {
  const { t } = useLanguage()

  const footerLinks = [
    { path: "/yangiliklar", label: t.nav.news },
    { path: "/kitoblar", label: t.nav.books },
  ]

  return (
    <footer className="bg-[#3B4F9A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Library Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tuproqqal'a TAKM</h3>
            <p className="text-blue-200 text-sm leading-relaxed">{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.nav.home}</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
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

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.social}</h3>
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

        <div className="border-t border-blue-400/20 mt-8 pt-8 text-center text-sm text-blue-200">
          <p>&copy; 2024 Tuproqqal'a tumani axborot kutubxona markazi. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
