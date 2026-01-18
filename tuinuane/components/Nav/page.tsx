// components/Navbar.tsx
'use client'; // Needed for useState + usePathname

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Menu } from 'lucide-react'; // Optional: install lucide-react → npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/categories', label: 'Categories' },
    { href: '/products', label: 'Products' },
    { href: '/cart', label: 'Cart' },
    { href: '/quote', label: 'Get Quote' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-sm">
      {/* Main navbar bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-2xl md:text-3xl font-bold text-primary">Tuinuane</span>
 
          </Link>


          <div className="hidden md:flex items-center gap-6 lg:gap-10">

            <div className="relative w-64 lg:w-80">
              <input
                type="search"
                placeholder="Search cement, steel, roofing, tools..."
                className="w-full bg-gray-800 border border-gray-700 rounded-full px-4 py-2.5 pl-10 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition"
              />
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>


            <div className="flex items-center gap-6 lg:gap-8">
              {navLinks.slice(0, -1).map((link) => ( // Exclude "Get Quote" from regular links
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-gray-300 hover:text-primary transition-colors text-sm font-medium ${
                    isActive(link.href) ? 'text-primary' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>


            <Link
              href="/quote"
              className={`px-6 py-2.5 rounded-lg font-medium transition-colors text-sm ${
                isActive('/quote')
                  ? 'bg-primary-dark text-white'
                  : 'bg-primary hover:bg-primary-dark text-white'
              }`}
            >
              Get Quote
            </Link>


            <a
              href="https://wa.me/255712345678?text=Hello%20Tuinuane%2C%20I%20need%20a%20quote%20for..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>


          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-7 w-7 text-gray-300" />
            ) : (
              <Menu className="h-7 w-7 text-gray-300" />
            )}
          </button>
        </div>
      </div>


      <div
        className={`md:hidden fixed inset-0 bg-gray-950/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)} // Close on outside click
      >
        <div
          className={`absolute top-0 right-0 bottom-0 w-4/5 max-w-xs bg-gray-900 border-l border-gray-800 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
        >
          <div className="flex flex-col h-full p-6">

            <button
              className="self-end p-2 -mr-2 -mt-2 text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>


            <div className="mt-8 flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 px-4 rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'bg-primary/20 text-primary font-medium'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>


            <div className="mt-auto pt-8 border-t border-gray-800 space-y-4">
              <a
                href="tel:+255712345678"
                className="flex items-center gap-3 text-green-400 hover:text-green-300"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
                </svg>
                Call Us
              </a>

              <a
                href="https://wa.me/255712345678?text=Hello%20Tuinuane..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-500 hover:text-green-400"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">

                  <path d="M17.472 ... z" /> {/* truncated */}
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}