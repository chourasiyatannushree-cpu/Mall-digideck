// ==============================
// src/components/Navbar.jsx
// ==============================
export default function Navbar() {
  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Overview", id: "overview" },
    { label: "Retail", id: "retail" },
    { label: "Luxury", id: "luxury" },
    { label: "Events", id: "events" },
    { label: "Entertainment", id: "entertainment" },
    { label: "Dining", id: "dining" },
    { label: "Contact", id: "footer" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex flex-wrap gap-3 px-6 py-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-white text-sm hover:text-yellow-300 transition"
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}