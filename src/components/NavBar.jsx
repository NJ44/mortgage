import React, { useState, useEffect, useRef } from 'react'
import { config } from '../config'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const firstFocusableRef = useRef(null)
  const lastFocusableRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableRef.current) {
            e.preventDefault()
            lastFocusableRef.current?.focus()
          }
        } else {
          if (document.activeElement === lastFocusableRef.current) {
            e.preventDefault()
            firstFocusableRef.current?.focus()
          }
        }
      }
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    firstFocusableRef.current?.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {config.LOGO_URL && !config.LOGO_URL.startsWith('{{') ? (
            <img
              src={config.LOGO_URL}
              alt={`${config.BUSINESS_NAME} logo`}
              className="h-10 w-auto"
            />
          ) : (
            <span className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              {config.BUSINESS_NAME}
            </span>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#contact')
            }}
            className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={firstFocusableRef}
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all ${isScrolled ? 'text-gray-700' : 'text-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current mt-1.5 transition-all ${isScrolled ? 'text-gray-700' : 'text-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current mt-1.5 transition-all ${isScrolled ? 'text-gray-700' : 'text-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden bg-white shadow-lg"
          role="menu"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="block text-gray-700 font-medium hover:text-primary py-2"
                role="menuitem"
                ref={index === navLinks.length - 1 ? lastFocusableRef : null}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#contact')
              }}
              className="block bg-primary text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-opacity-90"
              role="menuitem"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar

