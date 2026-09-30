(() => {
  'use strict';
  const messages = window.BadnotesTranslations;
  if (!messages) return;
  const supported = Object.keys(messages);
  const selector = document.querySelector('#language');
  const gallery = document.querySelector('#gallery-image');
  const choices = [...document.querySelectorAll('[data-page]')];
  const examples = {
    'field-notes': { number: '01', alt: 'fieldAlt' },
    'everyday-ideas': { number: '02', alt: 'ideasAlt' },
    'study-notes': { number: '03', alt: 'studyAlt' }
  };
  let language = 'en';
  let activePage = 'field-notes';
  let imageChange = 0;
  const text = key => messages[language][key] ?? messages.en[key] ?? '';
  function languageFromURL() {
    const value = new URL(location.href).searchParams.get('lang');
    return supported.includes(value) ? value : 'en';
  }
  function applyLanguage(next) {
    language = supported.includes(next) ? next : 'en';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = text(element.dataset.i18n);
      if (element.tagName === 'META') element.content = value;
      else if (value.includes('\n')) {
        element.replaceChildren(...value.split('\n').flatMap((line, index) => index ? [document.createElement('br'), document.createTextNode(line)] : [document.createTextNode(line)]));
      } else element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(element => { element.alt = text(element.dataset.i18nAlt); });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => { element.setAttribute('aria-label', text(element.dataset.i18nAria)); });
    document.querySelectorAll('[data-local-link]').forEach(element => {
      const url = new URL(element.getAttribute('href'), location.href);
      url.searchParams.set('lang', language);
      element.href = url.href;
    });
    if (selector) selector.value = language;
    if (gallery) gallery.alt = text(examples[activePage].alt);
  }
  selector?.addEventListener('change', () => {
    const url = new URL(location.href);
    url.searchParams.set('lang', selector.value);
    history.replaceState(null, '', url);
    applyLanguage(selector.value);
  });
  window.addEventListener('popstate', () => applyLanguage(languageFromURL()));
  choices.forEach(button => button.addEventListener('click', () => {
    const name = button.dataset.page;
    if (name === activePage || !examples[name]) return;
    activePage = name;
    const ticket = ++imageChange;
    const image = new Image();
    image.src = `assets/images/${name}.webp`;
    const show = () => {
      if (ticket !== imageChange) return;
      gallery.srcset = `assets/images/${name}-small.webp 550w, assets/images/${name}.webp 1055w`;
      gallery.src = image.src;
      gallery.dataset.i18nAlt = examples[name].alt;
      gallery.alt = text(examples[name].alt);
      document.querySelector('#page-number').textContent = examples[name].number;
      choices.forEach(choice => {
        const selected = choice.dataset.page === name;
        choice.classList.toggle('is-active', selected);
        choice.setAttribute('aria-pressed', String(selected));
      });
    };
    image.onload = show;
    image.onerror = () => {
      if (ticket === imageChange) activePage = choices.find(choice => choice.classList.contains('is-active')).dataset.page;
    };
    if (image.complete && image.naturalWidth) show();
  }));
  applyLanguage(languageFromURL());
  document.querySelectorAll('.language-control, .page-choices').forEach(element => { element.hidden = false; });
})();
