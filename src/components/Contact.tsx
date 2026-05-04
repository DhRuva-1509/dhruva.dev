import type { PortfolioData } from '../data';

export const Contact: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const Icon = window.UIIcons;
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact reveal">
          <div className="contact-eyebrow">05 — contact</div>
          <h2 className="contact-title">Let's build something.</h2>
          <p style={{ color: 'var(--fg-dim)', maxWidth: 520, margin: '0 auto', position: 'relative' }}>
            I'm currently exploring software engineer roles and interesting freelance work. The fastest way to reach me is email.
          </p>
          <a href={`mailto:${data.email}`} className="contact-mail">
            <Icon.mail/> {data.email}
          </a>
          <div className="contact-socials">
            <a className="icon-btn" href={`https://${data.github}`} aria-label="github"><Icon.github/></a>
            <a className="icon-btn" href={`https://${data.linkedin}`} aria-label="linkedin"><Icon.linkedin/></a>
            <a className="icon-btn" href={`mailto:${data.email}`} aria-label="email"><Icon.mail/></a>
          </div>
        </div>
        <div className="footer">
          <span>© 2026 {data.name} — handcrafted with care.</span>
        </div>
      </div>
    </section>
  );
};

window.Contact = Contact;
