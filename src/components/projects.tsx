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

            <div className=" min-h-screen w-full h-full flex items-center justify-center">
                <div className="relative py-10">
                    <div className="text-center mb-16">
                        <h1 className="text-6xl md:text-9xl font-black text-white/90 glow-text mb-4">
                            Projects
                        </h1>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                            Explore my latest work and creative solutions
                        </p>
                    </div>
                    <FlickeringGrid
                        className="absolute inset-0"
                        squareSize={4}
                        gridGap={6}
                        flickerChance={0.3}
                        color="rgb(100, 100, 100)"
                        maxOpacity={0.2}
                    />
                    <div className="relative z-10">
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
    background-position: center;
    background-size: cover;
    width: 400px;
    height: 450px;
  }

  .swiper-pagination-bullet {
    background-color: #8B5CF6 !important;
  }

  .swiper-pagination-bullet-active {
    background-color: #A855F7 !important;
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
                    {projects.map((project, index) => (
                        <SwiperSlide key={project.id}>
                            <div className="relative h-full w-full group cursor-pointer">
                                {/* Project Image */}
                                <img
                                    className="h-full w-full object-cover rounded-xl shadow-2xl"
                                    src={project.image}
                                    alt={project.title}
                                />

                                {/* Overlay with project details */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        {/* Project Title */}
                                        <h3 className="text-2xl font-bold mb-2 text-white glow-text">
                                            {project.title}
                                        </h3>

                                        {/* Project Description */}
                                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.techStack.slice(0, 3).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-purple-600/30 backdrop-blur-sm border border-purple-500/30 rounded-md text-xs text-purple-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-600/30 backdrop-blur-sm border border-gray-500/30 rounded-md text-xs text-gray-300">
                                                    +{project.techStack.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            {project.liveDemo && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(project.liveDemo, '_blank');
                                                    }}
                                                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                                                >
                                                    <ExternalLink size={16} />
                                                    Demo
                                                </button>
                                            )}
                                            {project.github && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(project.github, '_blank');
                                                    }}
                                                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                                                >
                                                    <Github size={16} />
                                                    Code
                                                </button>
                                            )}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Add your details modal/navigation logic here
                                                    console.log('View details for:', project.title);
                                                }}
                                                className="flex items-center gap-2 px-4 py-2 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                                            >
                                                <ArrowRight size={16} />
                                                Details
                                            </button>
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
