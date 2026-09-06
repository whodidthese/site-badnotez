(() => {
  'use strict';
  const translated = [...document.querySelectorAll('[data-zh]')];
  const descriptions = [...document.querySelectorAll('[data-zh-aria], [data-zh-alt]')];
  translated.forEach(element => {
    element.dataset.en = element.tagName === 'META' ? element.content : element.innerHTML;
  });
  descriptions.forEach(element => {
    if (element.hasAttribute('data-zh-aria')) element.dataset.enAria = element.getAttribute('aria-label');
    if (element.hasAttribute('data-zh-alt')) element.dataset.enAlt = element.alt;
  });

  function applyLanguage(language) {
    const chinese = language === 'zh-Hant';
    document.documentElement.lang = language;
    translated.forEach(element => {
      if (element.tagName === 'META') element.content = chinese ? element.dataset.zh : element.dataset.en;
      else if (chinese) element.textContent = element.dataset.zh;
      // Only restore the original, trusted HTML; never insert URL or user input.
      else element.innerHTML = element.dataset.en;
    });
    descriptions.forEach(element => {
      if (element.hasAttribute('data-zh-aria')) element.setAttribute('aria-label', chinese ? element.dataset.zhAria : element.dataset.enAria);
      if (element.hasAttribute('data-zh-alt')) element.alt = chinese ? element.dataset.zhAlt : element.dataset.enAlt;
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    document.querySelectorAll('a[href]').forEach(link => {
      const url = new URL(link.href);
      if (url.origin !== location.origin || !/\/(?:index|privacy)\.html$/.test(url.pathname)) return;
      url.searchParams.set('lang', language);
      link.href = url.href;
    });
  }

  function languageFromURL() {
    const requested = new URL(location.href).searchParams.get('lang');
    if (requested === 'en' || requested === 'zh-Hant') return requested;
    return /^zh(?:-|$)/i.test(navigator.language || '') ? 'zh-Hant' : 'en';
  }

  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => {
      const language = button.dataset.language;
      const url = new URL(location.href);
      url.searchParams.set('lang', language);
      history.replaceState(null, '', url);
      applyLanguage(language);
    });
  });
  window.addEventListener('popstate', () => applyLanguage(languageFromURL()));
  applyLanguage(languageFromURL());
  document.querySelectorAll('.language-switch').forEach(control => { control.hidden = false; });
})();
