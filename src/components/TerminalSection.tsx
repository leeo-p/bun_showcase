export function TerminalSection() {
  return (
    <section id="terminal-section">
      <div className="section-tag reveal">Ligne de commande</div>
      <h2 className="section-title reveal">Remplacez npm<br />aujourd'hui</h2>
      <p className="reveal" style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '1rem', maxWidth: 500 }}>
        Même syntaxe, performance dramatiquement supérieure. La migration est instantanée.
      </p>

      <div className="terminal-compare reveal">
        <div className="terminal-window npm-terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" style={{ background: '#FF5F57' }}></div>
            <div className="terminal-dot" style={{ background: '#FEBC2E' }}></div>
            <div className="terminal-dot" style={{ background: '#28C840' }}></div>
            <div className="terminal-title">npm — Terminal</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line"><span className="t-prompt">$</span><span className="t-cmd">npm install</span></div>
            <div className="terminal-line t-output">npm WARN deprecated...</div>
            <div className="terminal-line t-warn">npm WARN peer deps...</div>
            <div className="terminal-line t-output">added 1847 packages from 923 contributors</div>
            <div className="terminal-line t-output">audited 1847 packages</div>
            <div className="terminal-line t-output">found 3 vulnerabilities</div>
            <div className="terminal-line" style={{ marginTop: '0.5rem' }}><span className="t-slow">✗ 14.9s</span></div>
            <div className="terminal-line" style={{ marginTop: '1.5rem' }}><span className="t-prompt">$</span><span className="t-cmd">npm run build</span></div>
            <div className="terminal-line t-output">&gt; project@1.0.0 build</div>
            <div className="terminal-line t-output">&gt; webpack --mode production</div>
            <div className="terminal-line t-output">Hash: a3f8c219e...</div>
            <div className="terminal-line" style={{ marginTop: '0.5rem' }}><span className="t-slow">✗ 28.3s</span></div>
          </div>
        </div>

        <div className="terminal-window bun-terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" style={{ background: '#FF5F57' }}></div>
            <div className="terminal-dot" style={{ background: '#FEBC2E' }}></div>
            <div className="terminal-dot" style={{ background: '#28C840' }}></div>
            <div className="terminal-title">bun — Terminal</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line"><span className="t-prompt" style={{ color: 'var(--bun-gold)' }}>$</span><span className="t-cmd">bun install</span></div>
            <div className="terminal-line t-success">✓ 1847 packages installed</div>
            <div className="terminal-line" style={{ marginTop: '0.5rem' }}><span className="t-time">✓ 0.6s</span> <span style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>(25× faster)</span></div>
            <div className="terminal-line" style={{ marginTop: '1.5rem' }}><span className="t-prompt" style={{ color: 'var(--bun-gold)' }}>$</span><span className="t-cmd">bun build ./src/index.ts</span></div>
            <div className="terminal-line t-success">✓ Bundle: dist/index.js (142kb)</div>
            <div className="terminal-line t-success">✓ Minified: 47kb</div>
            <div className="terminal-line" style={{ marginTop: '0.5rem' }}><span className="t-time">✓ 0.18s</span> <span style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>(157× faster)</span></div>
            <div className="terminal-line" style={{ marginTop: '1.5rem' }}><span className="t-prompt" style={{ color: 'var(--bun-gold)' }}>$</span><span className="t-cmd">bun test</span></div>
            <div className="terminal-line t-success">✓ 247 tests passed in 0.4s</div>
          </div>
        </div>
      </div>
    </section>
  );
}
