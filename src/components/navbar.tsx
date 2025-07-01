"use client"

import { Link, useLocation } from "react-router-dom"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { useLanguage } from "../contexts/language-context"
import type { Language } from "../types"
import logo from "../assets/icons/logo.png"
import { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { IoPersonSharp } from "react-icons/io5";

const languageOptions: Record<Language, { flag: string; label: string }> = {
  uzbek: { flag: "🇺🇿", label: "O'zbekcha" },
  russian: { flag: "🇷🇺", label: "Русский" },
  english: { flag: "🇬🇧", label: "English" },
}

export function Navbar() {
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()
  const [isInfoDropdownOpen, setIsInfoDropdownOpen] = useState(false)

  const isActive = (path: string): boolean => location.pathname === path

  const handleLanguageChange = (value: string): void => {
    setLanguage(value as Language)
  }

  const navItems = [
    { path: "/", label: t.nav.home },
    { path: "/yangiliklar", label: t.nav.news },
    { path: "/kitoblar", label: t.nav.books },
  ]

  const infoDropdownItems = [
    { path: "/akm-haqida", label: t.nav.aboutLibrary },
    { path: "/rahbariyat", label: t.nav.leadership },
  ]

  return (
    <nav className="bg-[#1E3A8A] text-white ">
      <div className="container mx-auto">
       <div className='flex items-center justify-between px-[100px] py-[20px]'>
       <div className="flex items-center">
          <div className="pt-3">
            <img src={logo} alt="" />
          </div>
          <div className="font-bold text-2xl ml-2">
            Tuproqqal'a tumani <br />  Axborot kutubxona <br /> markazi
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-[20px]">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-2xl font-bold transition-colors hover:text-green-400 ${isActive(item.path) ? "text-green-400 border-b-2 border-green-400" : ""}`}
            >
              {item.label}
            </Link>
          ))}
           <DropdownMenu open={isInfoDropdownOpen} onOpenChange={setIsInfoDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`text-2xl font-bold  transition-colors hover:text-green-400  ${
                    infoDropdownItems.some((item) => isActive(item.path))
                      ? "text-[#FFFFFF] border-none border-green-400 "
                      : ""
                  }`}
                >
                  {t.nav.information}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48  bg-[#1E3A8A] text-[#FFFFFF]">
                {infoDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className={`w-full px-3 py-2 font-bold text-2xl hover:bg-gray-100 border-none ${
                        isActive(item.path) ? " text-[#FFFFFF]" : ""
                      }`}
                      onClick={() => setIsInfoDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
        </div>

        <div className="flex items-center space-x-[20px]">
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="!bg-[#1E3A8A] text-white w-[212px] font-bold text-2xl px-2 py-5 rounded-[10px]">
              <SelectValue placeholder="Tilni tanlang" />
            </SelectTrigger>
            <SelectContent className="bg-[#1E3A8A] text-[#FFFFFF] rounded-[10px]">
              {Object.entries(languageOptions).map(([key, { flag,  label   }]) => (
                <SelectItem key={key} value={key} className="font-bold text-2xl">
                  {flag} {label}
                </SelectItem>
              ))}	
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon" className="cursor-pointer text-white">
              <IoPersonSharp className='!w-[40px] !h-[40px] border-[1px] p-[10px] rounded-[10px]'/>
            </Button>
        </div>
       </div>
      </div>
    </nav>
  )
}
