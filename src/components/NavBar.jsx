import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { config } from "../config";

function NavBar({ className }) {
  const [active, setActive] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActive(null);
      }
    }
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setActive(null);
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 z-50 px-4",
        className
      )}
    >
      <Menu setActive={setActive} className="w-full">
        {/* Logo - positioned on the left */}
        <Link to="/" className="flex items-center">
          {config.LOGO_URL && !config.LOGO_URL.startsWith("{{") ? (
            <img
              src={config.LOGO_URL}
              alt={`${config.BUSINESS_NAME} logo`}
              className="h-8 w-auto"
            />
          ) : (
            <span className="text-base font-bold text-white">
              {config.BUSINESS_NAME}
            </span>
          )}
        </Link>

        {/* Menu items - positioned in the center */}
        <div className="flex items-center space-x-4">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="text-sm grid grid-cols-2 gap-6 p-4">
              <ProductItem
                title="General Dentistry"
                href="/general-dentistry"
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=200&h=120&fit=crop"
                description="Comprehensive dental care for the whole family"
                onClick={() => handleLinkClick("/general-dentistry")}
              />
              <ProductItem
                title="Cosmetic & Whitening"
                href="/cosmetic-whitening"
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=200&h=120&fit=crop"
                description="Transform your smile with professional treatments"
                onClick={() => handleLinkClick("/cosmetic-whitening")}
              />
              <ProductItem
                title="Specialized Care"
                href="/specialized-care"
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=200&h=120&fit=crop"
                description="Advanced treatments and specialized services"
                onClick={() => handleLinkClick("/specialized-care")}
              />
              <ProductItem
                title="Dental Implants"
                href="/specialized-care"
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&h=120&fit=crop"
                description="Permanent solution for missing teeth"
                onClick={() => handleLinkClick("/specialized-care")}
              />
              <ProductItem
                title="Emergency Care"
                href="/specialized-care"
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=200&h=120&fit=crop"
                description="Same-day emergency appointments available"
                onClick={() => handleLinkClick("/specialized-care")}
              />
              <ProductItem
                title="Orthodontics"
                href="/specialized-care"
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=200&h=120&fit=crop"
                description="Straighten teeth with modern options"
                onClick={() => handleLinkClick("/specialized-care")}
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="About">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Our Practice"
                href="#home"
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=280&h=140&fit=crop"
                description="Modern dental care with a friendly, professional team"
                onClick={() => scrollToSection("#home")}
              />
              <ProductItem
                title="Patient Reviews"
                href="#reviews"
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=280&h=140&fit=crop"
                description="See what our patients say about their experience"
                onClick={() => scrollToSection("#reviews")}
              />
              <ProductItem
                title="Location"
                href="#contact"
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=280&h=140&fit=crop"
                description="Visit us at our convenient location in the city"
                onClick={() => scrollToSection("#contact")}
              />
              <ProductItem
                title="FAQ"
                href="#faq"
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=280&h=140&fit=crop"
                description="Common questions about our services and policies"
                onClick={() => scrollToSection("#faq")}
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink
                href="#contact"
                onClick={() => scrollToSection("#contact")}
              >
                Book Appointment
              </HoveredLink>
              <HoveredLink
                href={`tel:${config.PHONE}`}
              >
                Call Us: {config.PHONE}
              </HoveredLink>
              <HoveredLink
                href={`mailto:${config.EMAIL}`}
              >
                Email: {config.EMAIL}
              </HoveredLink>
              <HoveredLink
                href="#contact"
                onClick={() => scrollToSection("#contact")}
              >
                Visit Our Office
              </HoveredLink>
            </div>
          </MenuItem>
        </div>

        {/* Book Now Button - positioned on the right */}
        <div className="flex items-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="bg-primary text-white px-4 py-1.5 rounded-full font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap text-sm"
          >
            Book Now
          </a>
        </div>
      </Menu>
    </div>
  );
}

export default NavBar;
