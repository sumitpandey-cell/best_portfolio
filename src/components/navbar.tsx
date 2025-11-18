
import { scrollToSection } from '../lib/smoothScroll';

const Navbar = () => {
  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(sectionId, 1.5);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="relative z-50 glass-dark">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center glow">
                <span className="text-white font-bold text-lg">SP</span>
              </div>
              <span className="font-bold text-xl tracking-wide text-white glow-text">SUMIT PANDEY</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button 
                onClick={handleNavClick('about')} 
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide bg-transparent border-none cursor-pointer"
              >
                ABOUT
              </button>
              <button 
                onClick={handleNavClick('work')} 
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide bg-transparent border-none cursor-pointer"
              >
                WORK
              </button>
              <button 
                onClick={handleNavClick('contact')} 
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide bg-transparent border-none cursor-pointer"
              >
                CONTACT
              </button>
            </div>

            <button className="glass-dark border border-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 font-medium text-sm tracking-wide glow">
              HIRE ME
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;