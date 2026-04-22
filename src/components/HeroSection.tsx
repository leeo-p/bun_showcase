export function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-eyebrow">Le runtime JavaScript du futur — Disponible maintenant</div>
      <h1 className="hero-title">
        <span className="glitch" data-text="BUN">BUN</span>
      </h1>
      <p className="hero-sub">
        Oublie npm. Oublie les temps d'attente infinis. Bun est un runtime JavaScript ultra-rapide, un gestionnaire de paquets, un bundler et un test runner — tout en un seul binaire.
      </p>
      <div className="hero-cta">
        <a href="#speed" className="btn-primary">Voir les benchmarks</a>
        <a href="#features" className="btn-ghost">Explorer les features</a>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        Scroller pour explorer
      </div>
    </section>
  );
}
