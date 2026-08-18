// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  const base = '_ds/pulsar-media-design-system-2a6ee655-c4a3-40dd-a8e9-c101c3623bc0';
  // Sufixo de versão: invalida caches antigos do bundle/estilos (um deploy
  // inicial saiu com Cache-Control de 7 dias; sem trocar a URL, navegadores
  // daquela janela não buscariam a versão corrigida).
  const v = '?v=2';
  for (const p of ["tokens/fonts.css","tokens/colors.css","tokens/typography.css","tokens/spacing.css","tokens/base.css","styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p + v;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js' + v;
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
  document.head.appendChild(s);
})();
