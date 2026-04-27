import { motion } from "framer-motion";

export default function Luxury() {
  const brands = [
    "Hermès",
    "Chanel",
    "Cartier",
    "Dior",
    "Rolex",
    "Versace",
    "Bvlgari",
    "Louis Vuitton",
  ];

  return (
    <section
      id="luxury"
      className="min-h-screen bg-neutral-950 text-white px-6 py-24"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto"
      >
        <p className="uppercase tracking-[6px] text-yellow-300 text-sm">
          Prestige & Power
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-bold">
          The Luxury Capital
        </h2>

        <p className="mt-5 text-gray-400 text-lg max-w-3xl mx-auto">
          Where elite shoppers meet the world's most iconic brands in one
          unmatched global destination.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-yellow-400/20 bg-white/5 backdrop-blur-md p-8 text-center hover:scale-105 hover:bg-yellow-400/10 transition duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold">{brand}</h3>
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
          Explore Luxury Leasing
        </button>
      </motion.div>
    </section>
  );
}