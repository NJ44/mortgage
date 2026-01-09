import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu as MenuIcon, X, ChevronDown } from "lucide-react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { scrollToElement } from "../hooks/useLenis";
import { cn } from "../lib/utils";
import { config } from "../config";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

function NavBar({ className }) {
  const [active, setActive] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const languageDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      scrollToElement(href, { offset: -100 });
      setActive(null);
    }
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setActive(null);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleMobileLinkClick = (action) => {
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed inset-x-0 z-50 px-4 transition-all duration-500 ease-in-out",
        isScrolled ? "top-[15px]" : "top-[52px]",
        className
      )}
    >
      <Menu setActive={setActive} className="w-full justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          {config.LOGO_URL && !config.LOGO_URL.startsWith("{{") ? (
            <img
              src={config.LOGO_URL}
              alt={`${config.BUSINESS_NAME} logo`}
              className="h-8 w-auto"
            />
          ) : (
            <span className="text-base font-bold text-black">
              {config.BUSINESS_NAME}
            </span>
          )}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 flex-1 justify-center mx-auto">

          <MenuItem setActive={setActive} active={active} item={t.nav.services}>
            <div className="text-sm grid grid-cols-2 gap-6 p-4">
              <ProductItem
                title="Residential Loans"
                href="/residential-loans"
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=120&fit=crop"
                description="Conventional, FHA, VA, and USDA loans"
                onClick={() => handleLinkClick("/residential-loans")}
              />
              <ProductItem
                title="Refinancing"
                href="/refinancing"
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&h=120&fit=crop"
                description="Lower your rate or cash out equity"
                onClick={() => handleLinkClick("/refinancing")}
              />
              <ProductItem
                title="Niche Products"
                href="/niche-loans"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=120&fit=crop"
                description="Jumbo, Investment, and Bank Statement loans"
                onClick={() => handleLinkClick("/niche-loans")}
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item={t.nav.aboutUs}>
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Our Company"
                href="/about-us"
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=280&h=140&fit=crop"
                description="Meet our experienced loan officers"
                onClick={() => handleLinkClick("/about-us")}
              />
              <ProductItem
                title="Client Reviews"
                href="/reviews"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=280&h=140&fit=crop"
                description="See what our homeowners say"
                onClick={() => handleLinkClick("/reviews")}
              />
              <ProductItem
                title="Resources"
                href="/resources"
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=280&h=140&fit=crop"
                description="Mortgage guides and news"
                onClick={() => handleLinkClick("/resources")}
              />
            </div>
          </MenuItem>

          <Link
            to="/contact"
            onClick={() => handleLinkClick("/contact")}
            className="cursor-pointer text-black hover:text-primary font-medium text-sm transition-colors duration-200"
          >
            {t.nav.contact}
          </Link>
        </div>

        {/* Desktop Language & CTA */}
        <div className="hidden md:flex items-center ml-auto gap-3" style={{ transform: 'translateX(20px)' }}>
          {/* Language Switcher (Optional) */}
          <div
            ref={languageDropdownRef}
            className="relative"
            onMouseEnter={() => setIsLanguageDropdownOpen(true)}
            onMouseLeave={() => setIsLanguageDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm text-black hover:bg-gray-100 transition-colors"
              aria-label="Language selector"
            >
              <span>{language === 'en' ? 'EN' : 'ES'}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isLanguageDropdownOpen && (
              <div
                className="absolute top-full right-0 pt-1 bg-transparent"
                onMouseEnter={() => setIsLanguageDropdownOpen(true)}
                onMouseLeave={() => setIsLanguageDropdownOpen(false)}
              >
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 min-w-[120px] z-50">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg",
                      language === 'en' && "bg-gray-50 font-semibold"
                    )}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('es');
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg",
                      language === 'es' && "bg-gray-50 font-semibold"
                    )}
                  >
                    ES
                  </button>
                </div>
              </div>
            )}
          </div>
          <a
            href="#appointment-form"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#appointment-form");
            }}
            className="bg-primary text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap text-sm"
          >
            {t.nav.bookNow}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors ml-auto"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </Menu>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={cn(
          "md:hidden fixed inset-0 bg-white z-40 overflow-y-auto transition-all duration-500 ease-in-out",
          isScrolled ? "top-[63px]" : "top-[100px]"
        )}>
          <div className="px-4 py-6 space-y-4">
            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">{t.nav.services}</h3>
              <div className="space-y-2">
                <Link to="/residential-loans" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-black hover:text-primary">Residential Loans</Link>
                <Link to="/refinancing" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-black hover:text-primary">Refinancing</Link>
                <Link to="/niche-loans" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-black hover:text-primary">Niche Loans</Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">{t.nav.aboutUs}</h3>
              <div className="space-y-2">
                <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-black hover:text-primary">Our Company</Link>
                <Link to="/reviews" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-black hover:text-primary">Client Reviews</Link>
                <Link to="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-black hover:text-primary">Resources</Link>
              </div>
            </div>

            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 font-semibold text-black hover:text-primary">{t.nav.contact}</Link>

            {/* Mobile Book Now */}
            <div className="pt-4">
              <a
                href="#appointment-form"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  scrollToSection("#appointment-form");
                }}
                className="block w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-colors"
              >
                {t.nav.bookNow}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-all duration-500 ease-in-out",
            isScrolled ? "top-[63px]" : "top-[100px]"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default NavBar;
