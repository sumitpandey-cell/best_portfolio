import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, ExternalLink, Github, ArrowRight } from "lucide-react";
import {
    Autoplay,
    EffectCoverflow,
    Navigation,
    Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { FlickeringGrid } from "./ui/shadcn-io/flickering-grid";


// Project data structure
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    liveDemo?: string;
    github?: string;
    features: string[];
}

const projectData: Project[] = [
    {
        id: 1,
        title: "AI Chat Application",
        description: "A modern chat application with AI integration, real-time messaging, and smart responses. Built with Next.js and OpenAI API for seamless user interactions.",
        image: "src/assets/image2.png",
        techStack: ["Next.js", "OpenAI", "WebSocket", "Prisma", "TailwindCSS"],
        liveDemo: "https://example.com",
        github: "https://github.com/example",
        features: ["Real-time messaging", "AI-powered responses", "User authentication", "Message history"]
    },
    {
        id: 2,
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Scalable architecture with microservices.",
        image: "src/assets/image.png",
        techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
        liveDemo: "https://example.com",
        github: "https://github.com/example",
        features: ["Payment processing", "Inventory management", "Admin dashboard", "Order tracking"]
    },
    {
        id: 3,
        title: "Task Management System",
        description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
        image: "src/assets/image.png",
        techStack: ["React", "TypeScript", "GraphQL", "PostgreSQL", "Docker"],
        liveDemo: "https://example.com",
        github: "https://github.com/example",
        features: ["Team collaboration", "Real-time updates", "Analytics dashboard", "Task automation"]
    },
    {
        id: 4,
        title: "Social Media Analytics",
        description: "Advanced analytics platform for social media insights with machine learning algorithms for trend prediction and engagement optimization.",
        image: "src/assets/image.png",
        techStack: ["Python", "React", "TensorFlow", "FastAPI", "PostgreSQL"],
        liveDemo: "https://example.com",
        github: "https://github.com/example",
        features: ["ML predictions", "Real-time analytics", "Data visualization", "API integration"]
    },
    {
        id: 5,
        title: "Blockchain Voting App",
        description: "Decentralized voting application built on Ethereum blockchain ensuring transparency, security, and immutable voting records.",
        image: "src/assets/image2.png",
        techStack: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS"],
        liveDemo: "https://example.com",
        github: "https://github.com/example",
        features: ["Blockchain security", "Transparent voting", "Smart contracts", "Decentralized storage"]
    }
];

// Using the carousel component with custom project cards
const CustomCarousel = () => {
    return (
        <div id="work" className="min-h-screen w-full relative overflow-hidden bg-black ">
            {/* Animated gradient background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-purple-950/30"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse' }}
                />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -80, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative z-10 flex items-center justify-center px-6 lg:px-8 py-20">
                <div className="relative w-full flex flex-col items-center justify-center">
                    {/* Section Title */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h1
                            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white/90 mb-4"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                PROJECTS
                            </span>
                        </h1>
                        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                            Explore my latest work and creative solutions
                        </p>
                    </motion.div>

                    <div className="relative z-10 w-full flex justify-center">
                        <ProjectCarousel_003
                            projects={projectData}
                            showPagination={true}
                            showNavigation={true}
                            loop={true}
                            autoplay={false}
                            spaceBetween={30}
                        />
                    </div>
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
            `}</style>
        </div>
    );
};

// Enhanced carousel component with project details and buttons
const ProjectCarousel_003 = ({
    projects,
    className,
    showPagination = false,
    showNavigation = false,
    loop = true,
    autoplay = false,
    spaceBetween = 0,
}: {
    projects: Project[];
    className?: string;
    showPagination?: boolean;
    showNavigation?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    spaceBetween?: number;
}) => {
    const css = `
            .Enhanced_Carousel_003 {
                width: 100%;
            height: 500px;
            padding-bottom: 50px !important;
  }

            .Enhanced_Carousel_003 .swiper-slide {
                background - position: center;
            background-size: cover;
            width: 400px;
            height: 450px;
  }

            .swiper-pagination-bullet {
                background - color: #8B5CF6 !important;
  }

            .swiper-pagination-bullet-active {
                background - color: #A855F7 !important;
  }

            .swiper-button-next,
            .swiper-button-prev {
                color: #8B5CF6 !important;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            border-radius: 50%;
            width: 50px !important;
            height: 50px !important;
            border: 1px solid rgba(139, 92, 246, 0.3);
  }

            .swiper-button-next:hover,
            .swiper-button-prev:hover {
                background: rgba(139, 92, 246, 0.2);
  }
            `;

    return (
        <motion.div
            id="work"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                duration: 0.3,
                delay: 0.5,
            }}
            className={`relative w-full max-w-6xl px-5 ${className || ''}`}
        >
            <style>{css}</style>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full"
            >
                <Swiper
                    spaceBetween={spaceBetween}
                    autoplay={
                        autoplay
                            ? {
                                delay: 1500,
                                disableOnInteraction: true,
                            }
                            : false
                    }
                    effect="coverflow"
                    grabCursor={true}
                    slidesPerView="auto"
                    centeredSlides={true}
                    loop={loop}
                    coverflowEffect={{
                        rotate: 40,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={
                        showPagination
                            ? {
                                clickable: true,
                            }
                            : false
                    }
                    navigation={
                        showNavigation
                            ? {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }
                            : false
                    }
                    className="Enhanced_Carousel_003"
                    modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="relative h-full w-full group cursor-pointer">
                                {/* Project Image */}
                                <img
                                    className="h-full w-full object-cover rounded-xl shadow-2xl"
                                    src={project.image}
                                    alt={project.title}
                                />

                                {/* Overlay with project details - Always visible on mobile, hover on desktop */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                                        {/* Project Title */}
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white glow-text">
                                            {project.title}
                                        </h3>

                                        {/* Project Description */}
                                        <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                            {project.techStack.slice(0, 3).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-purple-600/30 backdrop-blur-sm border border-white/20 rounded-md text-[10px] sm:text-xs text-purple-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 3 && (
                                                <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-600/30 backdrop-blur-sm border border-white/20 rounded-md text-[10px] sm:text-xs text-gray-300">
                                                    +{project.techStack.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 sm:gap-3 justify-center">
                                            {project.liveDemo && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(project.liveDemo, '_blank');
                                                    }}
                                                    className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105"
                                                >
                                                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                                                    Demo
                                                </button>
                                            )}
                                            {project.github && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(project.github, '_blank');
                                                    }}
                                                    className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105"
                                                >
                                                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                                                    Code
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Project title overlay (always visible) */}
                                <div className="absolute top-4 left-4 right-4">
                                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                                        <h4 className="text-white font-semibold text-lg">{project.title}</h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {showNavigation && (
                        <div>
                            <div className="swiper-button-next after:hidden">
                                <ChevronRightIcon className="h-6 w-6 text-white" />
                            </div>
                            <div className="swiper-button-prev after:hidden">
                                <ChevronLeftIcon className="h-6 w-6 text-white" />
                            </div>
                        </div>
                    )}
                </Swiper>
            </motion.div>
        </motion.div>
    );
};

export default CustomCarousel;
