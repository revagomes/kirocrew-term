// Kiro Crew Term (v3) — flat/sharp injection for the DESKTOP APP (Electron).
//
// The desktop app has no custom-CSS setting, so a Stylus userstyle can't auto-load.
// Paste this into the app's DevTools Console (DevTools must be enabled) to apply the
// flat/sharp terminal SHAPE on top of the installed theme pack's palette + fonts.
//
// It injects a <style> that zeroes the dashboard's own --radius-* vars (which the
// rounded-* utilities resolve through) and squares every surface. Shape only — the
// palette still comes from the theme pack, so the two layers compose.
//
// NOT persistent across app restarts. For set-and-forget, save it as a DevTools
// Snippet (Sources → Snippets), or run the dashboard in a browser with Stylus and
// the userstyle in userstyle/kirocrew-term.user.css.

(() => {
  const css = `
    :root{--radius-sm:0px;--radius-md:0px;--radius-lg:0px;--radius-xl:0px;--radius-2xl:0px;--radius-3xl:0px;}
    *,*::before,*::after{border-radius:0 !important;}
    .btn-sweep,button[class*="bg-accent"]{border:1px solid var(--accent) !important;box-shadow:none !important;}
    textarea{border-radius:0 !important;}
    body::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:0;
      background:
        radial-gradient(120% 60% at 50% 0%, color-mix(in srgb, var(--accent) 7%, transparent) 0%, transparent 55%),
        repeating-linear-gradient(0deg, color-mix(in srgb, var(--text) 3%, transparent) 0 1px, transparent 1px 3px);
      opacity:.5;}
  `;
  let s = document.getElementById('kirocrew-term-flat');
  if (!s) { s = document.createElement('style'); s.id = 'kirocrew-term-flat'; document.head.appendChild(s); }
  s.textContent = css;
  console.log('kirocrew-term: flat/sharp applied');
})();
