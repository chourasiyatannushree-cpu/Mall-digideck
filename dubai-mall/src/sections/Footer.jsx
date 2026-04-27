import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section
      id="footer"
      className="min-h-screen bg-neutral-950 text-white px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[6px] text-yellow-300 text-sm">
            Join The Future
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Be Part of the World’s Biggest Opportunity
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
            Retail leasing, luxury partnerships, global sponsorships, and
            unforgettable event bookings — all in one destination.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col md:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl">
            Book A Meeting
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition duration-300">
            Download Deck
          </button>
        </motion.div>

        {/* Bottom line */}
        <div className="mt-16 border-t border-white/10 pt-8 text-gray-500 text-sm">
          Dubai Mall Interactive Sales Deck © 2026
        </div>
      </div>
    </section>
  );
}