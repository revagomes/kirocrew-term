# Kiro Crew Term (v3) 👻

A Kiro Crew dashboard theme that mirrors the look of **kiro-cli v3** (the
refreshed `--tui` terminal experience): a near-black terminal canvas, the Kiro
violet accent (`#c6a0ff`), ANSI-styled status and diff colors, and a
mono-forward type system.

- **Level:** 1 (colors + fonts + scoped structural CSS)
- **Fonts:** [Inter](https://github.com/rsms/inter) (sans) and
  [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono) (mono + code),
  both SIL Open Font License 1.1.
- **Palettes:** `dark` (the v3 dark terminal) and `light` (the v3 light/safe
  variant).

## Design direction

The image below is the **target aesthetic** for the theme across the main
dashboard screens — flat fills, 0px radius, hard 1px borders, ANSI accents, a
`❯` prompt and block caret.

![Kiro Crew Term (v3) — design direction across the dashboard screens](assets/preview.png)

> **What this pack delivers today vs. the target.** This is a Kiro Crew *theme
> pack*, so it can only change the **palette and fonts**, plus limited
> structural CSS on a small set of runtime-allowlisted surfaces. The dashboard's
> components (session cards, file tree, tab strips, status pills, the icon rail)
> use framework-generated class names a theme pack cannot target, so their
> **shape, radius, and layout stay as the dashboard draws them — only recolored
> and re-fonted.** The flat/sharp terminal *structure* shown above is the
> design goal; reaching it fully would require native shape/layout theming
> support in the dashboard that does not exist yet. Install this for the v3
> **color + type** experience; treat the mockup as the roadmap.

## Install

Settings → Display → Install theme, then paste either:

- this repo URL (`https://github.com/revagomes/kirocrew-term`), or
- the local folder path if you have it checked out.

Re-installing overwrites the previous copy — that is the update path.

## What it themes

- Full 56-var palette (only the three required vars are mandatory; the rest are
  tuned so surfaces, borders, JSON syntax, terminal hues, and diffs read like
  the v3 TUI rather than being auto-derived).
- Sans face → Sans option; Mono face → Mono option **and** all code surfaces.
- `styles/overrides.css` adds a faint terminal grain on `body`, a hairline
  accent underline on the topbar, blockier code panels, an accent focus rail on
  the input, and crisp primary buttons — all on runtime-allowlisted surfaces.

## Notes

- The System font option always stays the OS font; a theme pack cannot change
  it, by design.
- Fonts are declared only through the role system in `theme.json`; none are set
  in CSS (the runtime rejects that).

## License

Theme sources: MIT. Bundled fonts: SIL OFL 1.1. See `LICENSE.txt`.
