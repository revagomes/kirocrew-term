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
