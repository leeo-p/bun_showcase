export function FeaturesSection() {
  return (
    <section id="features">
      <div className="section-tag reveal">Tout-en-un</div>
      <h2 className="section-title reveal">Un seul outil<br />pour tout faire</h2>

      <div className="features-grid reveal">
        <div className="feature-card">
          <div className="feature-number">01</div>
          <svg className="feature-icon" viewBox="0 0 42 42" fill="none">
            <circle cx="21" cy="21" r="20" stroke="var(--bun-orange)" strokeWidth="1.5" />
            <path d="M14 21l5 5 9-9" stroke="var(--bun-orange)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="feature-title">Package Manager</div>
          <div className="feature-text">
            Compatible avec npm, yarn et pnpm. Utilise le même fichier <code>package.json</code>.
            Aucune migration nécessaire — bun install fonctionne là où npm install fonctionnait.
          </div>
          <div className="feature-tag">Drop-in Replacement</div>
        </div>

        <div className="feature-card">
          <div className="feature-number">02</div>
          <svg className="feature-icon" viewBox="0 0 42 42" fill="none">
            <rect x="6" y="10" width="30" height="22" rx="2" stroke="var(--bun-gold)" strokeWidth="1.5" />
            <path d="M14 16l6 5-6 5M22 26h6" stroke="var(--bun-gold)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="feature-title">Runtime JavaScript</div>
          <div className="feature-text">
            Basé sur JavaScriptCore (WebKit), pas V8. Démarre 4× plus vite que Node.js.
            Supporte nativement TypeScript, JSX, ESM et CommonJS sans transpilation.
          </div>
          <div className="feature-tag">TypeScript Natif</div>
        </div>

        <div className="feature-card">
          <div className="feature-number">03</div>
          <svg className="feature-icon" viewBox="0 0 42 42" fill="none">
            <path d="M6 36L21 6l15 30H6z" stroke="var(--bun-orange)" strokeWidth="1.5" />
            <path d="M14 28h14" stroke="var(--bun-orange)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="feature-title">Bundler Intégré</div>
          <div className="feature-text">
            Remplace webpack, esbuild et rollup. Bundle votre code avec tree-shaking et
            code splitting. 1.75× plus rapide qu'esbuild, 150× plus rapide que webpack.
          </div>
          <div className="feature-tag">Zero Config</div>
        </div>

        <div className="feature-card">
          <div className="feature-number">04</div>
          <svg className="feature-icon" viewBox="0 0 42 42" fill="none">
            <path d="M21 6v30M6 21h30" stroke="var(--bun-gold)" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="21" cy="21" r="6" stroke="var(--bun-gold)" strokeWidth="1.5" />
          </svg>
          <div className="feature-title">Test Runner</div>
          <div className="feature-text">
            Compatible avec l'API Jest. Supporte les mocks, les snapshots et la couverture de code.
            Jusqu'à 13× plus rapide que Jest. Aucune configuration nécessaire.
          </div>
          <div className="feature-tag">Compatible Jest</div>
        </div>

        <div className="feature-card">
          <div className="feature-number">05</div>
          <svg className="feature-icon" viewBox="0 0 42 42" fill="none">
            <path d="M10 32L32 10M10 10l22 22" stroke="var(--bun-orange)" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="6" y="6" width="30" height="30" rx="2" stroke="var(--bun-orange)" strokeWidth="1.5" />
          </svg>
          <div className="feature-title">Hot Reloading</div>
          <div className="feature-text">
            <code>bun --hot</code> recharge votre code sans redémarrer le process.
            L'état mémoire est préservé entre les rechargements. Idéal pour le développement.
          </div>
          <div className="feature-tag">Dev Experience</div>
        </div>

        <div className="feature-card">
          <div className="feature-number">06</div>
          <svg className="feature-icon" viewBox="0 0 42 42" fill="none">
            <path d="M21 8a13 13 0 1 1 0 26A13 13 0 0 1 21 8z" stroke="var(--bun-gold)" strokeWidth="1.5" />
            <path d="M15 21h12M21 15v12" stroke="var(--bun-gold)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="feature-title">APIs Web Natives</div>
          <div className="feature-text">
            fetch, WebSocket, ReadableStream, FormData — toutes les APIs Web modernes
            intégrées nativement. Écrit en Zig pour une performance maximale.
          </div>
          <div className="feature-tag">WinterCG Compliant</div>
        </div>
      </div>
    </section>
  );
}
