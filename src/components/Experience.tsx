import type { PortfolioData } from '../data';

export const Experience: React.FC<{ data: PortfolioData }> = ({ data }) => (
  <section id="experience">
    <div className="wrap">
      <div className="section-head reveal">
        <div className="section-eyebrow">02 — experience</div>
        <h2 className="section-title">Where I've spent <span className="dim">my engineering hours.</span></h2>
      </div>
      <div className="timeline">
        {data.experience.map((e, i) => (
          <div className={`exp-item reveal ${e.isNow ? 'active' : ''}`} key={i}>
            <div className="exp-year">
              {e.isNow ? <span className="now">NOW</span> : e.year}
            </div>
            <div className="exp-card">
              <h3 className="exp-role">{e.role}</h3>
              <div className="exp-company">
                <span>{e.company}</span>
                <span className="sep">/</span>
                <span>{e.type}</span>
              </div>
              <p className="exp-desc">{e.desc}</p>
              <div className="exp-tags">
                {e.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
              </div>
              {(e.androidUrl || e.iosUrl) && (
                <div className="exp-store-links">
                  {e.androidUrl && (
                    <a href={e.androidUrl} target="_blank" rel="noopener noreferrer" className="store-btn store-btn--android">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.523 15.341 5.477 8.66A1 1 0 0 0 4 9.52v4.96a1 1 0 0 0 1.477.86l12.046-6.68a1 1 0 0 0 0-1.72z" opacity=".4"/><path d="M3 5.5a1 1 0 0 1 .477-.86L14.5 11 3.477 17.36A1 1 0 0 1 3 16.5v-11zM15.5 11l3.523 1.952a1 1 0 0 1 0 1.72L15.5 16.5 11 13l4.5-2z" opacity=".4"/><path d="M3.477 4.64A1 1 0 0 1 5 5.5v13a1 1 0 0 1-1.523.86l-.954-.53A1 1 0 0 1 2 17.97V6.03a1 1 0 0 1 .523-.86l.954-.53z" opacity=".6"/><path d="M3.477 4.64 14.5 11 3.477 17.36A1 1 0 0 1 2 16.5v-13a1 1 0 0 1 1.477-.86z"/></svg>
                      Google Play
                    </a>
                  )}
                  {e.iosUrl && (
                    <a href={e.iosUrl} target="_blank" rel="noopener noreferrer" className="store-btn store-btn--ios">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                      App Store
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

window.Experience = Experience;

