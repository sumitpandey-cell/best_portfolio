import image from '../assets/image.png';
import Navbar from './navbar';
import MagneticButton from './MagneticButton';
import { scrollToSection } from '../lib/smoothScroll';

const Hero = () => {
  const handleViewWork = () => {
    scrollToSection('work', 1.5);
  };

  const handleDownloadCV = () => {
    const resumePath = 'src/assets/Sumit_pandey_resume.pdf'; // Assuming resume.pdf is directly in the public/assets or handled by bundler

    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Sumit_pandey_resume.pdf'; // Desired file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Download CV clicked');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Central Light Brightening Effect */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(
                ellipse 80% 60% at 50% 30%,
                rgba(0, 255, 255, 0.15) 0%,
                rgba(0, 255, 255, 0.08) 30%,
                rgba(0, 255, 255, 0.03) 50%,
                transparent 70%
              )
            `
          }}
        />
      </div>

      {/* Dark Vignette Effect */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(
                ellipse 120% 100% at 50% 50%,
                transparent 0%,
                transparent 40%,
                rgba(0, 0, 0, 0.3) 70%,
                rgba(0, 0, 0, 0.6) 90%,
                rgba(0, 0, 0, 0.8) 100%
              )
            `
          }}
        />
      </div>

      {/* Diagonal grid lines overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>


      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <Navbar />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">

          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Professional Title */}
            <div className="space-y-2">
              <p className="text-gray-300 text-lg font-medium">AI Engineer</p>
              <p className="text-gray-300 text-lg font-medium">& Full Stack Developer</p>
            </div>

            {/* Large Name Display - Dark theme with gradient */}
            <div className="relative">
              <h1 className="text-[140px] lg:text-[180px] xl:text-[220px] font-black leading-none tracking-tighter hero-title glow-text" style={{ fontFamily: 'Inter, sans-serif' }}>
                SUMIT
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-lg">
              <p className="text-gray-400 text-lg leading-relaxed">
                Building intelligent systems and scalable web applications.
                Third-year CS student passionate about AI and modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <MagneticButton
                onClick={handleViewWork}
                className="bg-linear-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium glow"
              >
                View My Work
              </MagneticButton>
              <MagneticButton
                onClick={handleDownloadCV}
                className="glass-dark border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium"
              >
                Download CV
              </MagneticButton>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Image Container - Dark theme */}
              <div className="w-80 h-96 lg:w-96 lg:h-[480px] glass-dark rounded-2xl overflow-hidden glow relative">
                {/* Actual image */}
                <img
                  src={image}
                  alt="Sumit Pandey - AI Engineer & Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Grid overlay on image */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute top-1/3 left-6 w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"></div>
              </div>

              {/* Background Large Text - Dark theme */}
              <div className="absolute -top-8 -left-16 pointer-events-none">
                <span className="text-[200px] lg:text-[280px] font-black text-white/5 select-none leading-none tracking-tighter" style={{ fontFamily: 'Inter, sans-serif' }}>
                  PANDEY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Dark theme */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 lg:hidden">
        <div className="flex flex-col space-y-3">
          <a href="https://github.com/sumitpandey-cell" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 glass-dark rounded-full glow flex items-center justify-center hover:bg-white/10 transition-all duration-300">
            <span className="text-xs font-bold text-gray-300">GH</span>
          </a>
          <a href="https://www.linkedin.com/in/sumit-pandey-a94a052a1" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 glass-dark rounded-full glow flex items-center justify-center hover:bg-white/10 transition-all duration-300">
            <span className="text-xs font-bold text-gray-300">LI</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Hero;