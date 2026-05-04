interface NavProps { theme: string; setTheme: (t: string) => void; }

export const Nav: React.FC<NavProps> = ({ theme, setTheme }) => {
  const Icon = window.UIIcons;
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">d</span>
          <span>dhruva.dev</span>
        </a>
        <div className="nav-links">
          <a href="#about" className="nav-link"><span className="num">01.</span>about</a>
          <a href="#experience" className="nav-link"><span className="num">02.</span>experience</a>
          <a href="#skills" className="nav-link"><span className="num">03.</span>skills</a>
          <a href="#projects" className="nav-link"><span className="num">04.</span>projects</a>
          <a href="#contact" className="nav-link"><span className="num">05.</span>contact</a>
        </div>
        <div className="nav-spacer" />
        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="toggle theme">
            {theme === 'dark' ? <Icon.sun/> : <Icon.moon/>}
          </button>
          <a className="btn-cv" href="https://drive.google.com/file/d/1Jf_-529joc6sfwlH4q_PlBXAAj9GRiYx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Icon.ext/> Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

