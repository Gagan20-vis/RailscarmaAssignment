'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { fetchFromApi } from '@/lib/fetcher'
import { NavbarApiResponse } from '@/types/navbar'

const Navbar = () => {
  const [data, setData] = useState<NavbarApiResponse | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetchFromApi<NavbarApiResponse>(
          '/api/top-nav?populate[Logo][populate]=*&populate[navigations][populate]&populate[demoButton][populate]'
        )
        if (res?.Logo && Array.isArray(res.Logo.Logo)) {
          res.Logo.Logo = res.Logo.Logo[0] || null
        }
        if (res) setData(res)
      } catch (error) {
        console.error('Failed to fetch navbar data:', error)
      }
    })()
  }, [])

  if (!data) {
    return null
  }

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${data.Logo.Logo.hash}.${data.Logo.Logo.ext}`}
            alt={data.Logo.logotext}
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-4">
              {data.navigations.map(link => (
                <NavigationMenuItem key={link.id}>
                  <NavigationMenuLink asChild>
                    <Link href={link.href}>
                      <span className="text-base font-bold text-primary hover:text-button-secondary transition">
                        {link.text}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            className={`text-white bg-button-primary transition ease-in rounded-sm hover:bg-button-secondary mt-2 text-base p-6 font-semibold cursor-pointer`}
          >
            {data.demoButton.buttonText}
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {data.navigations.map(link => (
            <Link
              key={link.id}
              href={link.href}
              className="block text-sm font-medium text-primary hover:text-button-secondary"
            >
              {link.text}
            </Link>
          ))}
          <Button className="w-full text-white bg-button-primary hover:bg-button-secondary mt-2">
            {data.demoButton.buttonText}
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
