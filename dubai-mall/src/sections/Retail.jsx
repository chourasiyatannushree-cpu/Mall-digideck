import { motion } from "framer-motion";

export default function Retail() {
  const brands = [
    "Gucci",
    "Louis Vuitton",
    "Zara",
    "Nike",
    "Adidas",
    "Apple",
    "Prada",
    "H&M",
  ];

  return (
    <section
      id="retail"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl md:text-6xl font-bold"
      >
        Global Retail Powerhouse
      </motion.h2>

      <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
        Home to world-leading luxury, fashion, technology and lifestyle brands.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">

        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold">{brand}</h3>
          </motion.div>
        ))}

      </div>
    </section>
  );
}