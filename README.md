# Badnotez official website

[Website](https://whodidthese.github.io/site-badnotez/) · [Privacy](https://whodidthese.github.io/site-badnotez/privacy.html) · [Support](https://github.com/whodidthese/site-badnotez/issues)

A quiet, paper-inspired launch page for Badnotez. Warm ivory, dark ink, bronze details, system serif typography, iPad device frames and three illustrated notebook pages. The dark square notebook-and-quill icon is shared with the app. No framework, package install or build step is required.

## Pages and languages

- `index.html`: App Store call to action, features, iPad screenshots, switchable notebook examples, FAQ and support.
- `privacy.html`: local storage, import/export, deletion, diagnostics, App Store purchases, TestFlight, hosting and support.
- `assets/translations.js`: complete English, Traditional Chinese, Simplified Chinese, Japanese, Korean and Spanish text, matching the app's six languages.
- `assets/site.js`: language selection and example switching. English is the default, including when the browser uses another language. `?lang=zh-Hant` and the other supported language codes select a specific language. Unsupported codes fall back to English. Links between pages retain the selected language; switching preserves other URL parameters and the fragment.
- `assets/site.css`: shared responsive layout, local fonts, keyboard focus and reduced-motion support.

No cookies, analytics, browser storage, remote fonts or third-party scripts are added. With JavaScript disabled, both pages remain readable in English and all three illustrated examples are available.

Badnotez is sold on the App Store (app ID `6757456721`, minimum iPadOS 27). Store links use `https://apps.apple.com/app/id6757456721`, which redirects to the visitor's storefront and only resolves once version 1.0 is live, so publish this page together with the release.

## Brand and images

See [asset provenance](design/README.md). The iPad screenshots in `assets/screens/` are labeled SVG placeholders until real captures replace them; see [screenshot specs](design/app-store/screenshot-specs.md). Original illustrations, generation prompts, the original simulator screenshot and resized WebP exports are retained. Illustrations are labeled as examples; the Library image is explicitly identified as the actual app interface. These pages do not promise watercolor brushes, cloud sync or AI features.

`assets/brand/app-icon-512.png`, `assets/app-icon.png`, the favicon and touch icon use the dark artwork. The shared transparent mark and `app-icon-light-512.png` are available for future use on other backgrounds. The app repository owns the master and icon export script.

## Local preview and publishing

Run `python3 -m http.server 8766 --bind 127.0.0.1` in this repository, then open [the local preview](http://127.0.0.1:8766/). Stop the server after reviewing.

GitHub Pages uses **Deploy from a branch → main → / (root)**. `.nojekyll` serves these static files directly. Pushing main publishes the site. No hosting migration or custom Actions workflow is needed.

App Store Connect uses the privacy page as its Privacy Policy URL, the home page as its Marketing URL and `#support` as its Support URL, with `?lang=zh-Hant` for the Traditional Chinese listing. The listing copy is kept in [design/app-store/listing.md](design/app-store/listing.md).

## Content and verification

The October 16, 2026 launch update reflects the Badnotez contract and implementation at app commit `7c9d428` (0.5.0 build 43): pens and highlighter opacity, lasso, photos and text boxes with locking, A4 pages up to 150 with thumbnails, folders, favorites, list/grid, PDF/PNG/JPEG export, editable `.badnotes` backups and Recently Deleted (30 notebooks, not 30 days). The September 30 redesign it builds on was verified at app commit `3e09181`.

Browser verification for the launch update covers both pages at 320, 390, 768 and 1440 pixels with no horizontal overflow, every string present in all six languages, gallery switching, cross-page language links and equal device-frame heights in the screenshot grid. No app tests were run for this task.

External privacy references are linked beside the corresponding paragraphs in the privacy page: [Apple TestFlight](https://www.apple.com/legal/privacy/data/en/test-flight/) and [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection).
