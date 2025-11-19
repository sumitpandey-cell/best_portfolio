import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import {
    VideoPlayer,
    VideoPlayerContent,
    VideoPlayerControlBar,
    VideoPlayerPlayButton,
    VideoPlayerTimeRange,
    VideoPlayerMuteButton,
} from "./ui/skiper-ui/skiper67";

interface AboutProps {
    onVideoClick: () => void;
}

const About = ({ onVideoClick }: AboutProps) => {

    return (
        <div id="about" className="min-h-screen relative overflow-hidden bg-black">
            {/* Animated gradient background */}
            <div className="absolute inset-0">

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20 min-h-screen flex flex-col justify-center">
                {/* Main Typography Section */}
                <div className="space-y-16">
                    {/* Large Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h1
                            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter will-change-transform"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                            <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                                I BUILD
                            </span>
                            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mt-4">
                                INTELLIGENT
                            </span>
                            <span className="block text-white/90 mt-4">
                                SYSTEMS
                            </span>
                        </h1>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent origin-left"
                    />

                    {/* Description with unique styling */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-4xl"
                    >
                        <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-400">
                            <span className="text-white">Computer Science student</span> passionate about{' '}
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                AI
                            </span>
                            ,{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                modern web
                            </span>
                            , and{' '}
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                scalable systems
                            </span>
                        </p>
                    </motion.div>

                    {/* Small Video Player Thumbnail */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative max-w-sm sm:max-w-md mx-auto"
                    >
                        <motion.div
                            onClick={onVideoClick}
                            whileHover={{ scale: 1.05 }}
                            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20 cursor-pointer group"
                        >
                            <VideoPlayer style={{ width: "100%", height: "100%" }}>
                                <VideoPlayerContent
                                    src="/showreel/skiper-ui-showreel.mp4"
                                    autoPlay
                                    slot="media"
                                    className="w-full object-cover"
                                />
                                <VideoPlayerControlBar className="absolute bottom-0 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-center px-5">
                                    <VideoPlayerPlayButton className="h-4 bg-transparent" />
                                    <VideoPlayerTimeRange className="bg-transparent" />
                                    <VideoPlayerMuteButton className="size-4 bg-transparent" />
                                </VideoPlayerControlBar>
                            </VideoPlayer>
                            {/* Play button overlay */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>
                            </div>
                        </motion.div>
                        {/* Glow effect behind video */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 blur-3xl -z-10" />
                    </motion.div>

                    {/* Tech Stack - Large Typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-500 uppercase tracking-widest">
                            Tech Stack
                        </h2>
                        <div className="flex flex-wrap gap-4 sm:gap-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                            {['REACT', 'NODE', 'AI/ML', 'NEXT', 'KAFKA'].map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{
                                        scale: 1.1,
                                        textShadow: '0 0 30px rgba(168, 85, 247, 0.8)',
                                    }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="text-white/20 hover:text-white/90 cursor-pointer transition-all duration-300"
                                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats - Minimal Bold */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
                    >
                        {[
                            { num: '50+', label: 'PROJECTS' },
                            { num: '20+', label: 'TECH' },
                            { num: '3', label: 'YEARS' },
                            { num: '∞', label: 'LEARNING' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="text-center"
                            >
                                <div className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-br from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                    {stat.num}
                                </div>
                                <div className="text-sm text-gray-500 mt-2 tracking-widest">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom Statement */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="pt-16"
                    >
                        <p className="text-lg sm:text-xl md:text-3xl font-bold text-gray-600 max-w-3xl">
                            Building the future, one line of code at a time.
                        </p>
                    </motion.div>
                </div>

                {/* Large background text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full">
                    <motion.div
                        animate={{
                            x: ['-10%', '10%'],
                        }}
                        transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
                        className="text-[20vw] font-black text-white/[0.02] whitespace-nowrap"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        DEVELOPER • CREATOR • INNOVATOR •
                    </motion.div>
                </div>
            </div>

            <style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Ensure smooth scrolling compatibility */
#about {
    will - change: transform;
}
`}</style>
        </div>
    );
};

export default About;
