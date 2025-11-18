import ScrollReveal from "./ui/scrollReveal";
import ScrollFloat from './ScrollFloat';
import image from '../assets/image2.png';
import PixelBlast from './PixelBlast';
const About = () => {
    return (
        <div id="about" className="min-h-screen relative overflow-hidden">
            {/* PixelBlast Background */}
            <div className="absolute inset-0 opacity-60">
                <PixelBlast
                    variant="circle"
                    pixelSize={6}
                    color="#B19EEF"
                    patternScale={3}
                    patternDensity={1.2}
                    pixelSizeJitter={0.5}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.6}
                    edgeFade={0.25}
                    transparent
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
                <div className="container mx-auto px-2 py-5">
                    {/* Section Title */}
                    <div className="text-center mb-20">
                        <h2 className="text-8xl lg:text-9xl font-black text-white/90  from-purple-500/20 to-blue-500/20 rounded-2xl inline-block px-12 py-6 glow-text">
                            ABOUT
                        </h2>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content - Text */}
                        <div className="space-y-8 order-2 lg:order-1">
                            
                            <div className="backdrop-blur-lg bg-black/30 rounded-3xl p-6 border border-white/10 glow">
                                <ScrollFloat
                                    textClassName="text-2xl"
                                >
                                        I am a Computer Science student passionate about building intelligent systems, 
                                        modern web applications, and scalable backend architectures. I love designing 
                                        real-world applications using MERN, Next.js, Node.js, Kafka, Redis, Prisma, 
                                        and modern AI tools. I aim to become an AI Engineer and build products that 
                                        solve real problems.
                                </ScrollFloat>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-3">
                                {['React', 'Node.js', 'AI/ML', 'Next.js', 'Prisma', 'Kafka', 'Redis'].map((tech, index) => (
                                    <span 
                                        key={tech}
                                        className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full text-white border border-white/20 text-sm font-medium glow"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Image */}
                        <div className="relative order-1 lg:order-2 flex justify-center">
                            <div className="relative group">
                                {/* Image with Natural Background Integration */}
                                <div className="relative w-80 h-96 lg:w-96 lg:h-[480px]">
                                    <img
                                        src={image}
                                        alt="Sumit Pandey - AI Engineer & Full Stack Developer"
                                        className="w-full h-full object-cover object-center rounded-3xl filter brightness-110 contrast-105"
                                        style={{
                                            maskImage: 'radial-gradient(ellipse 80% 90% at 50% 50%, black 40%, transparent 80%)',
                                            WebkitMaskImage: 'radial-gradient(ellipse 80% 90% at 50% 50%, black 40%, transparent 80%)'
                                        }}
                                    />
                                    
                                    {/* Subtle glow behind image */}
                                    
                                   
                                </div>

                                {/* Floating Background Elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Background Quote */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <span className="text-[200px] lg:text-[300px] font-black text-white/5 select-none leading-none tracking-tighter">
                            INNOVATE
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;