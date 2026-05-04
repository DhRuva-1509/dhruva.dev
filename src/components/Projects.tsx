import React from 'react';
import type { PortfolioData } from '../data';

interface ProjectCardProps {
  p: { num: string; title: string; desc: string; tags: string[]; year: string; githubUrl?: string };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ p }) => {
  const ref = React.useRef<HTMLElement | null>(null);
  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    ref.current.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  };
  return (
    <article className="project reveal" ref={ref as any} onMouseMove={onMove}>
      <div className="project-num">PROJECT · {p.num}</div>
      <h3 className="project-title">{p.title}</h3>
      <p className="project-desc">{p.desc}</p>
      <div className="project-tags">
        {p.tags.map((t, i) => <span className="tag" key={i}>{t}</span>)}
      </div>
      <div className="project-foot">
        <span>{p.year}</span>
        <span className="links">
          <a href={p.githubUrl ?? '#'} target={p.githubUrl ? '_blank' : undefined} rel="noopener noreferrer" aria-label="github">{window.UIIcons.github()}</a>
          <a href="#" aria-label="open">{window.UIIcons.ext()}</a>
        </span>
      </div>
    </article>
  );
};

export const Projects: React.FC<{ data: PortfolioData }> = ({ data }) => (
  <section id="projects">
    <div className="wrap">
      <div className="section-head reveal">
        <div className="section-eyebrow">04 — projects</div>
        <h2 className="section-title">Things I've shippedd</h2>
      </div>
      <div className="projects">
        {data.projects.map((p, i) => <ProjectCard p={p} key={i}/>)}
      </div>
    </div>
  </section>
);

window.Projects = Projects;
