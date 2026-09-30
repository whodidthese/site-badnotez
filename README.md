# Badnotes official website

[Website](https://whodidthese.github.io/site-badnotes/) · [Privacy](https://whodidthese.github.io/site-badnotes/privacy.html) · [Support](https://github.com/whodidthese/site-badnotes/issues)

A quiet, paper-inspired introduction to Badnotes. Warm ivory, dark ink, bronze details, system serif typography and three illustrated notebook pages. The dark square notebook-and-quill icon is shared with the app. No framework, package install or build step is required.

## Pages and languages

- `index.html`: product introduction, switchable notebook examples, real Library screenshot and support.
- `privacy.html`: local storage, import/export, deletion, diagnostics, TestFlight, hosting and support.
- `assets/translations.js`: complete English, Traditional Chinese, Simplified Chinese, Japanese, Korean and Spanish text, matching the app's six languages.
- `assets/site.js`: language selection and example switching. English is the default, including when the browser uses another language. `?lang=zh-Hant` and the other supported language codes select a specific language. Unsupported codes fall back to English. Links between pages retain the selected language; switching preserves other URL parameters and the fragment.
- `assets/site.css`: shared responsive layout, local fonts, keyboard focus and reduced-motion support.

No cookies, analytics, browser storage, remote fonts or third-party scripts are added. With JavaScript disabled, both pages remain readable in English and all three illustrated examples are available.

The app is in private testing, with a minimum of iPadOS 27. There is no inactive App Store download button. Update the availability text and add a verified download URL when the app launches.

## Brand and images

See [asset provenance](design/README.md). Original illustrations, generation prompts, the original simulator screenshot and resized WebP exports are retained. Illustrations are labeled as examples; the Library image is explicitly identified as the actual app interface. These pages do not promise watercolor brushes, cloud sync or AI features.

`assets/brand/app-icon-512.png`, `assets/app-icon.png`, the favicon and touch icon use the dark artwork. The shared transparent mark and `app-icon-light-512.png` are available for future use on other backgrounds. The app repository owns the master and icon export script.

## Local preview and publishing

Run `python3 -m http.server 8766 --bind 127.0.0.1` in this repository, then open [the local preview](http://127.0.0.1:8766/). Stop the server after reviewing.

GitHub Pages uses **Deploy from a branch → main → / (root)**. `.nojekyll` serves these static files directly. Pushing main publishes the site. No hosting migration or custom Actions workflow is needed.

App Store Connect may use the privacy page as its Privacy Policy URL and the home page's `#support` as its Support URL. This repository does not change App Store Connect fields.

## Content and verification

The September 30, 2026 redesign reflects the current Badnotes contract and implementation at app commit `3e09181`: Pencil handwriting and highlighter settings, imported images, paper colors, favorites, page management, PDF/image exports, editable backups, local diagnostics and Recently Deleted (30 notebooks, not 30 days).

Browser verification covers both pages, all six languages and widths of 320, 390, 768 and 1440 pixels, plus gallery switching, cross-page language, URL preservation, default/fallback English, readable pages without JavaScript and resource loading. Small receipts and desktop/mobile previews are retained in the maintainer's reviewed artifacts directory at `/Users/ken/whodidthese/apple-badnotes/reviewed-artifacts/dark-icon-direct-install/website/`. No app tests were run for this task.

External privacy references are linked beside the corresponding paragraphs in the privacy page: [Apple TestFlight](https://www.apple.com/legal/privacy/data/en/test-flight/) and [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection).
