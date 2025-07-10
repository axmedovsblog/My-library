"use client"
import { Instagram, Send, Youtube, XIcon, Facebook, Phone, Home,   Mail } from "lucide-react"
import { useLanguage } from "../../contexts/language-context"
import type { JSX } from "react"

export function Footer(): JSX.Element {
  const { t } = useLanguage()

  return (
    <footer className="container rounded-tl-[50px] rounded-tr-[50px]  bg-[#3B4F9A] text-white">
      <div className="container mx-auto">
        <div className="flex  gap-[152px] px-[100px] py-[50px]">
          {/* Library Info */}
          <div className='text-[#FFFFFF]'>
            <h3 className="text-2xl font-bold mb-[10px]">{t.footer.title}</h3>
            <p className=" text-lg">{t.footer.description}</p>
            {/* Social Media */}
            <div className='pt-[54px]'>
              <div className="flex space-x-5">
                <a
                  href="https://instagram.com"
                  className="w-12 h-12 bg-none border-[1px] rounded-[10px] flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7" />
                </a>
                <a
                  href="https://facebook.com"
                  className="w-12 h-12 bg-none border-[1px] rounded-[10px] flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-7 h-7" />
                </a>
                <a
                  href="https://twitter.com"
                  className="w-12 h-12 bg-none border-[1px] rounded-[10px] flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Twitter"
                >
                  <XIcon className="w-7 h-7" />
                </a>
                <a
                  href="https://youtube.com"
                  className="w-12 h-12 bg-none border-[1px] rounded-[10px] flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-7 h-7" />
                </a>
                <a
                  href="mailto:tuproqqalatumanixaxborotkutubxona@gmail.com"
                  className="w-12 h-12 bg-none border-[1px] rounded-[10px] flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Send Email"
                >
                  <Send className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <ul className="space-y-8 text-2xl text-[#FFFFFF]">
              <li>
                <a href="/" className="whitespace-nowrap hover:text-white transition-colors">
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
          <div className=''>
            <h3 className="text-[#FFFFFF] text-[18px] font-normal">{t.footer.contact}</h3>
            <div className="text-[18px] font-normal space-y-5 pt-[28px]">
              <p className='flex items-center gap-[20px]'>
                <a href="" className="w-8 h-8 bg-none border-[1px] rounded-[10px] flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Home  className='w-5 h-5'/>
                </a>

                Xorazm viloyati, Tuproqqal'a <br /> tumani, Pitnak, Mustaqillik <br /> ko'chasi, 1-uy </p>
              <p className='flex items-center gap-[20px]'>
                <a href="" className="w-8 h-8 bg-none border-[1px] rounded-[10px] flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Phone className='w-5 h-5'/>
                </a>


                +998 77 317 14 05</p>
              <p className='flex items-center gap-[20px]'>
                <a href="" className="w-8 h-8 bg-none border-[1px] rounded-[10px] flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Mail className='w-5 h-5'/>
                </a>

                tuproqqalatumaniaxborotkutubxo@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
