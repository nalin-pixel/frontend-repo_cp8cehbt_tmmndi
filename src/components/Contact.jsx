import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-black dark:to-indigo-950/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Let’s build something fun</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl">
              Have a project in mind or want to collaborate? I’m open to freelance, consulting, and creative experiments.
            </p>

            <div className="mt-8 flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Mail className="h-5 w-5" />
              <a href="mailto:hello@desainer.studio" className="underline decoration-indigo-400/50 hover:decoration-indigo-500">hello@desainer.studio</a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input id="name" type="text" required className="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white/90 dark:bg-white/10 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your name" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input id="email" type="email" required className="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white/90 dark:bg-white/10 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="you@company.com" />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea id="message" rows={5} required className="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white/90 dark:bg-white/10 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Send message <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
