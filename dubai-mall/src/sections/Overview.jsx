// ========================================
// src/sections/Overview.jsx
// FINAL ERROR-FREE VERSION (NO COUNTUP)
// ========================================

import { motion } from "framer-motion";

export default function Overview() {
  const stats = [
    {
      number: "100M+",
      label: "Annual Visitors",
    },
    {
      number: "1200+",
      label: "Retail Stores",
    },
    {
      number: "5.9M sq ft",
      label: "Retail Space",
    },
  ];

  return (
    <section
      id="overview"
      className="min-h-screen bg-gradient-to-b from-black to-neutral-950 text-white px-6 py-24"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <p className="text-yellow-300 uppercase tracking-[6px] text-sm">
          Global Opportunity
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
          Why Dubai Mall?
        </h2>

        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
          A world-renowned retail, lifestyle and entertainment destination
          attracting premium consumers, tourists, brands and investors from
          across the globe.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 text-center hover:scale-105 transition duration-300"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-300">
              {item.number}
            </h3>

            <p className="mt-4 text-gray-300 text-lg">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Highlight */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-24 max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 text-center"
      >
        <h3 className="text-2xl md:text-4xl font-bold">
          Gateway to High-Value Consumers
        </h3>

        <p className="mt-5 text-gray-400 text-lg leading-relaxed">
          Positioned in one of the world’s most dynamic cities, Dubai Mall
          combines unmatched footfall, luxury spending power, tourism demand,
          and global visibility into one extraordinary commercial platform.
        </p>
      </motion.div>
    </section>
  );
}