(function () {
  'use strict';

  // Build pt-BR fica em <raiz>/pt-BR/; o inglês na raiz.
  var LANGS = [
    { code: 'en', label: 'EN', dir: '', title: 'Switch to English' },
    { code: 'pt-BR', label: 'PT', dir: 'pt-BR/', title: 'Mudar para Português' },
  ];

  var current = document.documentElement.lang === 'pt-BR' ? 'pt-BR' : 'en';
  var root = new URL((typeof path_to_root === 'string' && path_to_root) || './', window.location.href);
  var langRoot = root.href;
  var baseRoot = current === 'pt-BR' ? new URL('../', root).href : langRoot;
  var page = window.location.href.split('#')[0].split('?')[0].slice(langRoot.length);

  function addLanguageSwitch() {
    var bar = document.querySelector('#mdbook-menu-bar .right-buttons');
    if (!bar) return;
    var wrap = document.createElement('span');
    wrap.className = 'cv-lang-switch';
    LANGS.forEach(function (lang) {
      var a = document.createElement('a');
      a.textContent = lang.label;
      a.title = lang.title;
      a.href = baseRoot + lang.dir + page + window.location.hash;
      if (lang.code === current) a.className = 'active';
      wrap.appendChild(a);
    });
    bar.insertBefore(wrap, bar.firstChild);
  }

  // Impressão sempre em tema claro, independente do tema escolhido.
  var DARK = ['coal', 'navy', 'ayu', 'rust'];
  var saved = null;

  window.addEventListener('beforeprint', function () {
    var html = document.documentElement;
    saved = DARK.filter(function (t) { return html.classList.contains(t); });
    saved.forEach(function (t) { html.classList.remove(t); });
    if (saved.length) html.classList.add('light');
  });

  window.addEventListener('afterprint', function () {
    if (!saved || !saved.length) return;
    var html = document.documentElement;
    html.classList.remove('light');
    saved.forEach(function (t) { html.classList.add(t); });
    saved = null;
  });

  // Links externos abrem em nova aba para o leitor não sair do CV.
  function openExternalLinksInNewTab() {
    document.querySelectorAll('a[href^="http"]').forEach(function (a) {
      if (a.hostname === window.location.hostname) return;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    });
  }

  function init() {
    addLanguageSwitch();
    openExternalLinksInNewTab();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
