# dhruva.dev

Personal portfolio site for Dhruva Patil — Software Engineer, AI Engineer, and Mobile App Developer based in Halifax, Canada.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build tool**: Vite 8
- **Styling**: Plain CSS with CSS custom properties (no UI library)
- **Compiler**: Babel with React Compiler plugin

## Project Structure

```
src/
├── main.tsx                  # App entry point, layout, scroll/cursor effects
├── data.ts                   # All portfolio content (experience, skills, projects)
├── index.css                 # Global styles and design tokens
└── components/
    ├── Nav.tsx               # Navigation bar with theme toggle and resume link
    ├── Hero.tsx              # Landing section
    ├── About.tsx             # About section
    ├── Experience.tsx        # Work and education timeline
    ├── Skills.tsx            # Skills grid by category
    ├── Projects.tsx          # Project cards
    ├── Contact.tsx           # Contact section
    ├── skill-icons.tsx       # SVG icons for every skill (simple-icons paths)
    └── ui-icons.tsx          # General UI icons (github, mail, arrow, etc.)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Customisation

All content lives in `src/data.ts` — edit the `PORTFOLIO_DATA` object to update:

- **Personal info**: name, email, GitHub, LinkedIn
- **Experience**: roles, companies, descriptions, tags, app store links
- **Skills**: categories and individual skills (icons are matched by name in `skill-icons.tsx`)
- **Projects**: title, description, tags, GitHub URL

To add a skill icon, add an entry to the `SkillIcons` record in `src/components/skill-icons.tsx` with the key matching the skill name in `data.ts`.

## License

MIT
