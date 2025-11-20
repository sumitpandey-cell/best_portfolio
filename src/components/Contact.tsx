import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Globe } from 'lucide-react';

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(formData);


    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  } as const;

  const socialLinks = [
    { icon: Github, href: "https://github.com/sumitpandey-cell", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sumit-pandey-a94a052a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/sumitpa8765832", label: "Twitter" },
    { icon: Globe, href: "https://www.internadda.com/", label: "Startup" }
  ];

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Animated World Map Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 1000 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* Simplified World Map Paths */}
          <motion.path
            d="M158 206L168 196L178 186L188 176L198 166L208 156L218 146L228 136L238 126L248 116"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, delay: 0.5 }}
          />
          <motion.path
            d="M300 180L350 170L400 160L450 155L500 150L550 145L600 140"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.path
            d="M150 250L200 245L250 240L300 235L350 230L400 225"
            stroke="url(#gradient3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, delay: 1.5 }}
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#EF4444', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>

          {/* Animated Dots for Cities */}
          {[
            { x: 200, y: 150, delay: 2 },
            { x: 350, y: 180, delay: 2.3 },
            { x: 500, y: 160, delay: 2.6 },
            { x: 650, y: 170, delay: 2.9 },
            { x: 300, y: 280, delay: 3.2 },
            { x: 450, y: 320, delay: 3.5 }
          ].map((dot, index) => (
            <motion.circle
              key={index}
              cx={dot.x}
              cy={dot.y}
              r="3"
              fill="#60A5FA"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 1],
                opacity: [0, 1, 0.8]
              }}
              transition={{
                duration: 1.5,
                delay: dot.delay,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
            />
          ))}
        </motion.svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 10,
              opacity: 0
            }}
            animate={{
              y: -10,
              opacity: [0, 1, 0],
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Effect */}
      <motion.div
        className="fixed w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192
        }}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 30
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-20 container mx-auto px-6 py-20 min-h-screen flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h1
                className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6"
                variants={itemVariants}
              >
                Let's Connect
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                Ready to bring your ideas to life? I'm always excited to work on innovative projects and collaborate with creative minds.
              </motion.p>
            </div>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="flex items-center space-x-4 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">sumitpandey17370@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium">8920609324</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="p-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">Delhi, India</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <p className="text-gray-400 mb-4">Connect with me</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Project inquiry"
                    required
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </section>
  );
};

export default Contact;