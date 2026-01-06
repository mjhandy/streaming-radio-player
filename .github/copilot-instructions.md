## Purpose

This repo is a small web-based streaming audio player (PHP served). These instructions help AI coding agents get productive quickly by explaining the architecture, developer workflows, and repository-specific conventions.

## Big Picture

- **Architecture:** Static front-end (HTML/CSS, no app JS present) served by PHP via `index.php`. Styles are authored in `scss/` and compiled into `css/main.css`.
- **Why structured this way:** The project is intended to be dropped into an Apache `htdocs` directory (XAMPP) and served as a simple web page; SCSS is used for maintainable styles but output is plain CSS for runtime.

## Key Files

- `index.php`: Page entry point and DOM structure (player container, controls, stations area).
- `scss/main.scss` and `scss/_*.scss`: Source styles. Edit these for visual changes.
- `css/main.css`: Compiled stylesheet referenced by `index.php`.
- `gruntfile.js`: Grunt tasks used to compile SCSS and to watch for changes.
- `package.json`: Declared dev dependencies (`grunt`, `grunt-sass`, `sass`, etc.).

## Build / Dev Commands (Windows / XAMPP)

- Compile SCSS once: `npx grunt sass` — reads `scss/main.scss` -> writes `css/main.css` (with source map).
- Start continuous compilation (watch): `npx grunt` — runs `watch` task defined as default in `gruntfile.js`.
- Alternatively use the `sass` binary directly: `npx sass scss/main.scss css/main.css --source-map` for a single compile.
- Serve: place repository under XAMPP `htdocs` and open `http://localhost/streaming-radio-player/index.php`.

## Project-Specific Conventions & Patterns

- SCSS layout: partials are named with a leading underscore (for example `_player.scss`, `_buttons.scss`); `main.scss` composes them. Keep component-specific styles in their matching partials.
- CSS output: `css/main.css` includes CSS variables at `:root` (color tokens, spacing). Prefer adding new tokens in `scss/_root.scss`.
- Icons: Material Symbols loaded via Google Fonts in `index.php`. Icons are controlled by the `.material-symbols-rounded` font-variation-settings.
- Minimal JS: There is currently no project JS; DOM has hooks (`.radio_controls`, `#radioStatons`) — add a small `js/` module if you introduce interactive behavior.

## What an agent should do first

1. Run `npx grunt sass` and open `index.php` in a local browser to verify current styles and layout.
2. Edit `scss/main.scss` or a relevant `_*.scss` partial and re-run the compile to confirm changes.
3. If adding features that require runtime code, create a `js/` folder and reference it from `index.php` (keep scripts minimal; no bundler configured).

## Integration Points & External Dependencies

- Google Fonts (Material Symbols): network dependency in `index.php` — modifying icon usage should account for remote loading.
- Build-time: `grunt` + `sass` packages are used for SCSS compilation — prefer `npx` to avoid global installs.

## Do / Don't (Concrete)

- Do: Edit SCSS partials and use `npx grunt sass` to compile. Test via local XAMPP server.
- Do: Preserve the existing DOM IDs/classes (`#streamingRadio`, `.radio_controls`, `#radioStatons`) if adding JS that targets elements.
- Don't: Introduce a complex build system or bundler without explicit tasking — this project is intentionally minimal.

## When merging or refactoring

- Keep `css/main.css` as generated output; commit only if you intend to ship a changed compiled asset. Prefer committing SCSS changes and regenerating CSS as part of release steps.

---

If anything above is unclear or you want the agent to follow stricter rules (for example, where to place new JS, how to name SCSS partials, or CI expectations), tell me what to add and I will update this file.
