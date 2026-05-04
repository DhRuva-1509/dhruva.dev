import type { PortfolioData } from '../data';

export const About: React.FC<{ data: PortfolioData }> = ({ data }) => (
  <section id="about">
    <div className="wrap">
      <div className="section-head reveal">
        <div className="section-eyebrow">01 — about</div>
        <h2 className="section-title">A few words <span className="dim">on who I am and what I build.</span></h2>
      </div>
      <div className="about-grid">
        <div className="about-text reveal">
          {data.about.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}/>
          ))}
        </div>
        <div className="reveal">
          <div className="stat-card">
            {data.stats.map((s, i) => (
              <div key={i}>
                <div className="stat-num" dangerouslySetInnerHTML={{ __html: s.num.replace(/(\+|∞)/g, '<span class="accent">$1</span>') }}/>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="facts">
            {data.facts.map((f, i) => (
              <div className="facts-row" key={i}>
                <div className="facts-key">{f.k}</div>
                <div className="facts-val">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.About = About;
