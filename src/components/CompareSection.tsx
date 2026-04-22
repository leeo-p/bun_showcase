export function CompareSection() {
  return (
    <section id="compare">
      <div className="section-tag reveal">Comparaison</div>
      <h2 className="section-title reveal">Bun vs. Tout<br />le monde</h2>

      <table className="compare-table reveal">
        <thead>
          <tr>
            <th>Fonctionnalité</th>
            <th className="bun-col">BUN</th>
            <th className="npm-col">NPM</th>
            <th style={{ color: '#F69220' }}>PNPM</th>
            <th style={{ color: '#2C8EBB' }}>YARN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vitesse d'installation</td>
            <td><span className="check">●</span> 0.6s</td>
            <td><span className="cross">●</span> 14.9s</td>
            <td><span className="partial">●</span> 3.1s</td>
            <td><span className="partial">●</span> 5.4s</td>
          </tr>
          <tr>
            <td>Runtime JS intégré</td>
            <td><span className="check">✓</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
          </tr>
          <tr>
            <td>Bundler intégré</td>
            <td><span className="check">✓</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
          </tr>
          <tr>
            <td>Test runner intégré</td>
            <td><span className="check">✓</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
          </tr>
          <tr>
            <td>TypeScript natif (sans transpile)</td>
            <td><span className="check">✓</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
          </tr>
          <tr>
            <td>Compatibilité package.json</td>
            <td><span className="check">✓</span></td>
            <td><span className="check">✓</span></td>
            <td><span className="check">✓</span></td>
            <td><span className="check">✓</span></td>
          </tr>
          <tr>
            <td>Hot reload sans restart</td>
            <td><span className="check">✓</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
          </tr>
          <tr>
            <td>APIs Web natives (fetch, etc.)</td>
            <td><span className="check">✓</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
          </tr>
          <tr>
            <td>Single binary</td>
            <td><span className="check">✓</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
          </tr>
          <tr>
            <td>SQLite intégré</td>
            <td><span className="check">✓</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
            <td><span className="cross">✗</span></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
