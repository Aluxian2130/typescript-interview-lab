# TypeScript Interview Lab — Project Guidelines

## Project Purpose

TypeScript Interview Lab is a personal React and TypeScript reference application for technical interview preparation.

The application will contain working examples and explanations covering:

- React
- TypeScript
- JavaScript
- Node.js
- SQL
- Palantir Foundry
- Algorithms
- System design

The immediate goal is to build a clean application shell with navigation and then begin adding React and TypeScript examples.

---

## Technology Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS v4
- Lucide React
- clsx
- ESLint
- Prettier

---

## Current Project Status

### Completed

- Vite React TypeScript project initialized
- Git repository initialized and pushed to GitHub
- Tailwind CSS v4 configured
- React Router configured
- ESLint configured
- Prettier configured
- `@/` path alias configured
- Main application layout created
- Home dashboard created
- Reusable `Card` component created
- Reusable `CategoryCard` component created
- Reusable `IconLabel` component created
- Category data model created
- Topic data model created
- Navigation item data model created
- Navigation group data model created
- Category dashboard rendered using `.map()`
- Lucide icons added to category data
- Grouped navigation data created
- Grouped desktop sidebar created
- Desktop sidebar integrated into `MainLayout`
- Temporary category routes created
- GitHub Pages deployment configured

### Current Task

Make category cards navigate to their corresponding category routes.

---

## Expected Source Structure

```text
src/
├── app/
│   └── App.tsx
├── components/
│   ├── common/
│   │   ├── CategoryCard/
│   │   │   ├── CategoryCard.tsx
│   │   │   └── index.ts
│   │   └── IconLabel/
│   │       ├── IconLabel.tsx
│   │       └── index.ts
│   ├── layout/
│   │   └── Sidebar/
│   │       ├── Sidebar.tsx
│   │       ├── SidebarGroup.tsx
│   │       ├── SidebarItem.tsx
│   │       └── index.ts
│   └── ui/
│       └── Card/
│           ├── Card.tsx
│           └── index.ts
├── data/
│   ├── categories.ts
│   └── navigation.ts
├── layouts/
│   └── MainLayout.tsx
├── pages/
│   └── Home/
│       └── Home.tsx
├── router/
│   └── index.tsx
├── shared/
│   ├── constants/
│   ├── hooks/
│   ├── types/
│   │   ├── Category.ts
│   │   ├── NavigationGroup.ts
│   │   ├── NavigationItem.ts
│   │   ├── Topic.ts
│   │   └── index.ts
│   └── utils/
├── topics/
├── index.css
└── main.tsx
```

---

## Architecture Principles

### Separate domain data from navigation data

`Category` represents an interview subject displayed on the dashboard.

`NavigationItem` represents a link displayed in the application navigation.

Do not use `Category` as the sidebar navigation model.

### Keep components focused

Each component should have one clear responsibility.

Examples:

- `Card` provides reusable visual card styling.
- `CategoryCard` renders one category.
- `IconLabel` renders an icon next to a label.
- `SidebarItem` renders one navigation link.
- `SidebarGroup` renders one group of navigation items.
- `Sidebar` renders all navigation groups.

### Prefer composition

Build larger interfaces by combining smaller components.

Expected sidebar hierarchy:

```text
Sidebar
└── SidebarGroup
    └── SidebarItem
        └── IconLabel
```

### Render repeated UI from data

Use `.map()` for categories, navigation groups, navigation items, topic lists, questions, and examples.

Do not manually duplicate equivalent JSX.

### Avoid premature abstraction

Do not add components, utilities, state libraries, or features until the application has a real use for them.

Do not create badges, buttons, state stores, mobile menus, notes, favorites, or search behavior unless explicitly requested.

---

## TypeScript Standards

- Use strict TypeScript.
- Do not use `any`.
- Prefer interfaces for object-shaped component props and data models.
- Use union types for constrained values.
- Use `import type` for type-only imports.
- Type component props explicitly.
- Keep shared models under `src/shared/types`.
- Use `ReactNode` when a prop should accept flexible renderable content.
- Use `LucideIcon` when storing Lucide components in data.
- Do not weaken existing compiler settings to suppress errors.

Example:

```ts
import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  id: string;
  title: string;
  path: string;
  icon: LucideIcon;
}
```

---

## React Standards

- Use function components.
- Use default exports for components.
- Use PascalCase for component names.
- Use camelCase for variables and functions.
- Keep one primary component per file.
- Use stable IDs for React `key` props.
- Do not use array indexes as keys when stable IDs exist.
- Use component composition instead of duplicating markup.
- Use `NavLink` for sidebar links that require active styling.
- Use `end` on the `/` navigation link so Home is not active on every route.
- Do not add state when props or derived data are sufficient.

---

## Styling Standards

- Use Tailwind CSS v4.
- Use `clsx` to combine classes.
- Do not manually concatenate growing conditional class strings.
- Keep the current slate and sky dark-theme palette unless explicitly changed.
- Components should accept `className` when a reasonable styling override is useful.
- Preserve visible keyboard focus styles.
- Use semantic HTML where practical.

Example:

```tsx
className={({ isActive }) =>
  clsx(
    "rounded-lg px-3 py-2 transition-colors",
    isActive
      ? "bg-sky-500/15 text-sky-300"
      : "text-slate-400 hover:bg-slate-800 hover:text-slate-100",
  )
}
```

---

## Import Standards

Use the configured `@/` alias for imports outside the current component folder.

Preferred:

```ts
import IconLabel from "@/components/common/IconLabel";
import type { NavigationItem } from "@/shared/types";
```

Local imports inside the same component folder are acceptable:

```ts
import SidebarItem from "./SidebarItem";
```

Use barrel exports for component folders:

```ts
export { default } from "./IconLabel";
```

Do not create large global barrel files that introduce circular dependencies.

---

## Formatting Standards

- Use Prettier.
- Use two-space indentation.
- Use double quotes.
- Use semicolons.
- Use trailing commas where supported.
- Run formatting before committing.

---

## Validation

After modifying the project, run:

```bash
npm run build
npm run lint
npm run format:check
```

Do not report completion while any of these commands fail.

Do not modify unrelated files solely to silence errors.

---

## Git Practices

Use small, clear commits that leave the application runnable.

Example:

```bash
git add .
git commit -m "feat(navigation): add grouped sidebar"
git push
```

GitHub Issues are not being used for this project.

---

## Near-Term Roadmap

1. Make category cards navigate to category routes.
2. Add the application header.
3. Build the reusable topic-rendering model.
4. Begin the React examples section.
5. Add TypeScript examples.
6. Add JavaScript and asynchronous programming examples.
7. Add Node.js, SQL, and Palantir Foundry material.

---

## Scope Protection

This is a solo personal project.

Do not introduce:

- GitHub Issues
- Scrum artifacts
- Sprint documents
- Husky
- lint-staged
- Redux
- Zustand
- a database
- authentication
- a back end
- automated deployment
- additional UI frameworks

unless explicitly requested.

Prioritize a clear, useful interview-reference application over enterprise process simulation.
