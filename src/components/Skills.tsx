import type { PortfolioData } from '../data';

interface SkillRowProps { skill: { name: string; lvl: number }; }

const SkillRow: React.FC<SkillRowProps> = ({ skill }) => {
  const icon = window.SkillIcons?.[skill.name];
  return (
    <div className="skill-row in-view">
      <span className="skill-icon">{icon || <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/></svg>}</span>
      <span className="skill-name-text">{skill.name}</span>
    </div>
  );
};

export const Skills: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const cats = Object.entries(data.skills);
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-eyebrow">03 — skills</div>
          <h2 className="section-title">Technologies <span className="dim">I reach for daily.</span></h2>
        </div>
        <div className="skills-grid">
          {cats.map(([cat, skills], i) => (
            <div className="skill-cat reveal" key={cat}>
              <div className="skill-cat-head">
                <span style={{ color: 'var(--accent)' }}>0{i+1}/</span>
                <span className="label">{cat}</span>
              </div>
              <div className="skill-list">
                {skills.map((s, j) => <SkillRow key={j} skill={s}/>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Skills = Skills;
