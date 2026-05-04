import React from 'react';
import type { PortfolioData } from '../data';
import profilePic from '../assets/pic1.jpeg';
interface TypewriterProps { roles: string[]; }
type Phase = 'typing' | 'deleting';

const TypewriterRoles: React.FC<TypewriterProps> = ({ roles }) => {
  const [idx, setIdx] = React.useState<number>(0);
  const [text, setText] = React.useState<string>('');
  const [phase, setPhase] = React.useState<Phase>('typing');

  React.useEffect(() => {
    const current = roles[idx];
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'typing') {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), 70);
      } else {
        t = setTimeout(() => setPhase('deleting'), 1600);
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(current.slice(0, text.length - 1)), 40);
      } else {
        setIdx((idx + 1) % roles.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx, roles]);

  return <span>{text}<span className="cursor-blink"/></span>;
};

interface DataProps { data: PortfolioData; }

interface TLine { type: 'cmd' | 'out'; text: string; strong?: boolean; last?: boolean; }

export const Terminal: React.FC<DataProps> = ({ data }) => {
  const lines: TLine[] = [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: data.handle, strong: true },
    { type: 'cmd', text: 'cat ./role.txt' },
    { type: 'out', text: data.role, strong: true },
    { type: 'cmd', text: 'pwd' },
    { type: 'out', text: `~/${data.handle}/portfolio` }
  ];

  const [step, setStep] = React.useState<number>(0);
  React.useEffect(() => {
    if (step >= lines.length) return;
    const t = setTimeout(() => setStep(s => s + 1), step === 0 ? 400 : 280);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="dot"/><span className="dot"/><span className="dot"/>
        <span className="title">~ <span className="accent">{data.handle}</span>@portfolio — zsh</span>
      </div>
      <div className="terminal-body">
        {lines.slice(0, step).map((l, i) => (
          l.type === 'cmd' ? (
            <div className="tline" key={i}>
              <span className="tprompt">❯</span>
              <span className="tcommand">{l.text}{i === step - 1 && !l.last && <span className="cursor-blink"/>}</span>
            </div>
          ) : (
            <div className={`tout ${l.strong ? 'tout-strong' : ''}`} key={i}>{l.text}</div>
          )
        ))}
        {step >= lines.length && (
          <>
            <div className="tline">
              <span className="tprompt">❯</span>
              <span className="tcommand">./introduce --self</span>
            </div>
            <div className="tspace"/>
            <h1 className="hero-name">
              {data.name.split(' ')[0]} <span className="accent">{data.name.split(' ').slice(1).join(' ')}</span>.
            </h1>
            <div className="hero-role">
              <TypewriterRoles roles={data.roles || [data.role]}/>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ProfileCard: React.FC<DataProps> = ({ data }) => (
  <div className="hero-photo">
    <div className="photo-frame">
      <img
        src={profilePic}
        alt={data.name}
        className="photo-img"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
      <div className="photo-tag">
        <span className="dot"/>
        <span>online</span>
      </div>
    </div>
  </div>
);

export const Hero: React.FC<DataProps> = ({ data }) => (
  <section id="top" className="hero">
    <div className="wrap hero-inner">
      <div className="hero-grid">
        <ProfileCard data={data}/>
        <div className="hero-term-col">
          <Terminal data={data}/>
        </div>
      </div>
      <div className="hero-meta">
        <span><b>STATUS</b> · {data.status}</span>
        <span><b>BASED</b> · {data.location}</span>
        <span><b>OPEN TO RELOCATE</b> · {data.relocateStatus}</span>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
