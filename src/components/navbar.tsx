
import { useState, useEffect, useRef } from 'react';
import { scrollToSection } from '../lib/smoothScroll';
import HyperText from '../components/hyper-text';
import HireMeModal from './HireMeModal';
import MagneticButton from './MagneticButton';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(sectionId, 1.5);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
      />

      {/* Navigation */}
      <nav className="relative z-50  rounded-4xl mt-3 mx-5 border">
        <div className="container mx-auto px-6 lg:px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 relative z-50">
              <span className=" font-bold text-xl tracking-wide text-white glow-text">
                <HyperText>SUMIT PANDEY</HyperText>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={handleNavClick('about')}
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide bg-transparent border-none cursor-pointer relative group"
              >
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={handleNavClick('work')}
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide bg-transparent border-none cursor-pointer relative group"
              >
                WORK
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={handleNavClick('contact')}
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide bg-transparent border-none cursor-pointer relative group"
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>

              <MagneticButton
                onClick={() => {
                  console.log('Hire Me button clicked');
                  setIsHireMeOpen(true);
                }}
                className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 font-bold glow"
              >
                Hire Me
              </MagneticButton>
            </div>

            {/* Hamburger Menu Button */}
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-27 right-5 z-40 md:hidden transition-all duration-500 ${isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Menu Card */}
        <div
          ref={menuRef}
          className={`w-72 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-4 opacity-0 scale-95'
            }`}
        >
          <div className="flex flex-col items-center py-6 px-5 space-y-5">
            <button
              onClick={handleNavClick('about')}
              className="text-white text-xl font-bold tracking-wide hover:scale-105 transition-all duration-300 bg-transparent border-none cursor-pointer relative group w-full text-center"
            >
              ABOUT
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </button>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <button
              onClick={handleNavClick('work')}
              className="text-white text-xl font-bold tracking-wide hover:scale-105 transition-all duration-300 bg-transparent border-none cursor-pointer relative group w-full text-center"
            >
              WORK
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </button>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <button
              onClick={handleNavClick('contact')}
              className="text-white text-xl font-bold tracking-wide hover:scale-105 transition-all duration-300 bg-transparent border-none cursor-pointer relative group w-full text-center"
            >
              CONTACT
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </button>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <button
              onClick={() => {
                console.log('Hire Me button clicked (mobile)');
                setIsHireMeOpen(true);
                setIsMenuOpen(false);
              }}
              className="glass-dark border border-white/20 text-white px-6 py-2.5 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 font-bold text-base tracking-wide glow relative overflow-hidden group w-full"
            >
              <span className="relative z-10">HIRE ME</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-pink-500/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;