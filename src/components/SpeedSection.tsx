export function SpeedSection() {
  return (
    <section id="speed">
      <div className="section-tag">Performances</div>
      <h2 className="section-title reveal">
        <em style={{ fontStyle: 'normal' }}>25×</em> plus rapide<br />que npm install
      </h2>

      <div className="speed-hero reveal">
        <div className="speed-stat">
          <div className="speed-number" data-target="25">0</div>
          <div className="speed-desc">plus rapide que npm pour l'installation</div>
        </div>
        <div className="speed-stat">
          <div className="speed-number" data-target="3">0</div>
          <div className="speed-desc">plus rapide que Node.js à l'exécution</div>
        </div>
        <div className="speed-stat">
          <div className="speed-number" data-target="14">0</div>
          <div className="speed-desc">pour démarrer un serveur HTTP</div>
        </div>
      </div>

      <div className="section-tag reveal" style={{ marginTop: '3rem' }}>Installation — react + 1800 dépendances</div>

      <div className="benchmark-wrapper reveal">
        <div className="bench-item">
          <div className="bench-label" style={{ color: 'var(--bun-orange)' }}>BUN</div>
          <div className="bench-bar-track">
            <div className="bench-bar-fill bun-bar" data-width="6"></div>
          </div>
          <div className="bench-value highlight">0.6s</div>
        </div>
        <div className="bench-item">
          <div className="bench-label" style={{ color: '#F69220' }}>PNPM</div>
          <div className="bench-bar-track">
            <div className="bench-bar-fill pnpm-bar" data-width="30"></div>
          </div>
          <div className="bench-value">3.1s</div>
        </div>
        <div className="bench-item">
          <div className="bench-label" style={{ color: '#2C8EBB' }}>YARN</div>
          <div className="bench-bar-track">
            <div className="bench-bar-fill yarn-bar" data-width="55"></div>
          </div>
          <div className="bench-value">5.4s</div>
        </div>
        <div className="bench-item">
          <div className="bench-label" style={{ color: 'var(--npm-red)' }}>NPM</div>
          <div className="bench-bar-track">
            <div className="bench-bar-fill npm-bar" data-width="100"></div>
          </div>
          <div className="bench-value">14.9s</div>
        </div>
      </div>

      <div className="section-tag reveal" style={{ marginTop: '4rem' }}>HTTP Requests/sec (Hello World server)</div>
      <div className="benchmark-wrapper reveal">
        <div className="bench-item">
          <div className="bench-label" style={{ color: 'var(--bun-orange)' }}>BUN</div>
          <div className="bench-bar-track">
            <div className="bench-bar-fill bun-bar" data-width="100"></div>
          </div>
          <div className="bench-value highlight">216k/s</div>
        </div>
        <div className="bench-item">
          <div className="bench-label" style={{ color: '#68A063' }}>NODE</div>
          <div className="bench-bar-track">
            <div className="bench-bar-fill" style={{ background: '#68A063' }} data-width="32"></div>
          </div>
          <div className="bench-value">68k/s</div>
        </div>
        <div className="bench-item">
          <div className="bench-label" style={{ color: '#FF2D20' }}>DENO</div>
          <div className="bench-bar-track">
            <div className="bench-bar-fill" style={{ background: '#FF2D20' }} data-width="42"></div>
          </div>
          <div className="bench-value">91k/s</div>
        </div>
      </div>
    </section>
  );
}
