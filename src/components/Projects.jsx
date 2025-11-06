import { motion } from 'framer-motion';
import { ArrowUpRight, Figma, Code, Palette } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Dashboard',
    tags: ['Product Design', 'Design System', 'Web'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: '3D Interaction Lab',
    tags: ['Prototype', '3D', 'WebGL'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'E-commerce Revamp',
    tags: ['UX Research', 'UI', 'Mobile'],
    color: 'from-rose-500 to-orange-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Selected Work</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">A mix of shipped products and playful experiments.</p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-gray-600 dark:text-gray-300">
            <Figma className="h-5 w-5" />
            <Code className="h-5 w-5" />
            <Palette className="h-5 w-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/70 dark:border-white/10 bg-gradient-to-br p-6 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative min-h-[180px] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center text-indigo-600 font-medium">
                  View case <ArrowUpRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
