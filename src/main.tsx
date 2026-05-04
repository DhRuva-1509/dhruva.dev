import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import './tweaks-panel';
import './components/ui-icons';
import './components/skill-icons';
import { PORTFOLIO_DATA } from './data';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

interface TweakState { accentHue: number; typography: string; }

declare const useTweaks: <T>(d: T) => [T, (k: any, v?: any) => void];
declare const TweaksPanel: React.FC<{ title: string; children?: React.ReactNode }>;
declare const TweakSection: React.FC<{ title: string; children?: React.ReactNode }>;
declare const TweakSlider: React.FC<{ label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void; valueLabel?: string }>;
declare const TweakRadio: React.FC<{ value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }>;

const App: React.FC = () => {
  const data = PORTFOLIO_DATA;

  const TWEAK_DEFAULTS: TweakState = /*EDITMODE-BEGIN*/{
    "accentHue": 35,
    "typography": "default"
  }/*EDITMODE-END*/;

  const [tweaks, setTweak] = useTweaks<TweakState>(TWEAK_DEFAULTS);
  const [theme, setTheme] = React.useState<string>(() => localStorage.getItem('theme') || 'dark');
  const [editMode, setEditMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent-h', String(tweaks.accentHue));
  }, [tweaks.accentHue]);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-typo', tweaks.typography);
  }, [tweaks.typography]);

  React.useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === '__activate_edit_mode') setEditMode(true);
      if (e.data?.type === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('in'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const dotRef = React.useRef<HTMLDivElement | null>(null);
  const ringRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    let rx = 0, ry = 0, dx = 0, dy = 0;
    const onMove = (e: MouseEvent) => {
      dx = e.clientX; dy = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`;
    };
    const tick = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove);
    const f = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(f); };
  }, []);

  const orbRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const onScroll = () => {
      if (!orbRef.current) return;
      const y = window.scrollY * 0.15;
      orbRef.current.style.transform = `translate(${Math.sin(y * 0.005) * 100}px, ${y}px)`;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="bg-grid"/>
      <div className="bg-orb" ref={orbRef} style={{ top: '5%', left: '60%' }}/>
      <div className="cursor-dot" ref={dotRef}/>
      <div className="cursor-ring" ref={ringRef}/>

      <Nav theme={theme} setTheme={setTheme}/>
      <Hero data={data}/>
      <About data={data}/>
      <Experience data={data}/>
      <Skills data={data}/>
      <Projects data={data}/>
      <Contact data={data}/>

      {editMode && (
        <TweaksPanel title="Tweaks">
          <TweakSection title="Accent">
            <TweakSlider
              label="Hue"
              value={tweaks.accentHue}
              min={15} max={75} step={1}
              onChange={(v: number) => setTweak('accentHue', v)}
              valueLabel={`${tweaks.accentHue}°`}
            />
            <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
              {[20, 30, 40, 55, 70].map(h => (
                <button key={h} onClick={() => setTweak('accentHue', h)}
                  style={{
                    width: 28, height: 28, borderRadius: 8,
                    background: `oklch(0.72 0.16 ${h})`,
                    border: tweaks.accentHue === h ? '2px solid white' : '1px solid rgba(255,255,255,0.2)',
                    cursor: 'pointer'
                  }} aria-label={`hue ${h}`}/>
              ))}
            </div>
          </TweakSection>
          <TweakSection title="Typography">
            <TweakRadio
              value={tweaks.typography}
              onChange={(v: string) => setTweak('typography', v)}
              options={[
                { value: 'default', label: 'Inter' },
                { value: 'grotesk', label: 'Grotesk' },
                { value: 'mono', label: 'Mono' }
              ]}
            />
          </TweakSection>
        </TweaksPanel>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App/>);
