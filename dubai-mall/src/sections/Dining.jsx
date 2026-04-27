import { motion } from "framer-motion";

export default function Dining() {
  const dining = [
    "Fine Dining",
    "Celebrity Restaurants",
    "Luxury Cafés",
    "Global Cuisine",
    "Family Dining",
    "Dessert Lounges",
    "Food Halls",
    "Skyline Views",
  ];

  return (
    <section
      id="dining"
      className="min-h-screen bg-gradient-to-b from-black to-neutral-900 text-white px-6 py-24"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto"
      >
        <p className="uppercase tracking-[6px] text-yellow-300 text-sm">
          Lifestyle & Taste
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-bold">
          Dining As A Destination
        </h2>

        <p className="mt-5 text-gray-400 text-lg max-w-3xl mx-auto">
          Culinary experiences that extend stay time, increase spend, and turn
          visits into memorable lifestyle moments.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
        {dining.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center hover:scale-105 hover:bg-white/10 transition duration-300"
          >
            <h3 className="text-lg md:text-xl font-semibold text-yellow-300">
              {item}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-16"
      >
        <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl">
          Explore Dining Opportunities
        </button>
      </motion.div>
    </section>
  );
} 