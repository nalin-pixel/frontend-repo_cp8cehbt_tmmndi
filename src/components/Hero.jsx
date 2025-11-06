import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white dark:from-[#0b0b12] dark:via-black dark:to-black pt-20">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              Playful interfaces for modern brands
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            >
              I’m a product designer crafting interactive experiences with a tech-forward, curious spirit. Scroll to explore selected work and experiments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-white/80 px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-white/90 dark:bg-white/10 dark:text-white dark:ring-white/20"
              >
                Contact
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:flex items-end justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="backdrop-blur-md bg-white/30 dark:bg-white/10 rounded-3xl p-6 border border-white/50 shadow-xl"
            >
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <p className="font-semibold">Interaction Designer</p>
                <p>Based in Earth • Available for freelance</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
