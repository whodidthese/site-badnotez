# Image and brand provenance

Created September 30, 2026 for the Badnotes official website.

## Shared icon

The app's square dark notebook and bronze quill are used without redrawing. App source commit: `3e09181`. The authoritative transparent master and deterministic export script live in the app repository at `design/app-icon/square-notebook/notebook-quill-source.png` and `scripts/generate-app-icon.swift`.

Website assets:

- `assets/app-icon.png`: opaque dark Any artwork, 1024 × 1024.
- `assets/brand/app-icon-512.png`: dark 512-pixel icon displayed on the site.
- `assets/brand/app-icon-light-512.png`: light version retained for future contexts.
- `assets/brand/brand-mark.png`: transparent notebook-and-quill mark.
- `assets/brand/favicon.png`: dark 32-pixel icon.
- `assets/brand/apple-touch-icon.png`: dark 180-pixel export.

## Illustrated notebook pages

`design/notebook-pages/*-source.png` are AI-generated illustrations made with the built-in imagegen tool. They are notebook content examples, rather than screenshots, real user notes, or proof of a brush or text tool in Badnotes. Similar images can be imported into the app. Website captions and alt text identify them as illustrated examples.

- `field-notes`: botanical observations, olive branch and a tiny landscape.
- `everyday-ideas`: architectural sketch, coffee cup and an idea diagram.
- `study-notes`: short notes, restrained highlights and a mind map.

Full prompts, mode and style-reference relationships are in [prompts.json](notebook-pages/prompts.json). Original tool outputs were retained in the calling chat's generated-images directory. Repository source copies support future website work. The two later pages use the first page as a style reference.

`assets/images/*.webp` and `*-small.webp` are resized/compressed exports produced with Sharp, without creative edits. Full page exports are 1055 × 1491; small versions are 550 × 777. Only WebP variants are loaded by the site.

## Interface screenshots

`assets/screens/*.svg` are generated placeholders at the final iPad 13-inch sizes (2752 × 2064 landscape, 2064 × 2752 portrait). Each is labeled "placeholder" and shows no fictional interface. Replace them with real captures as described in [screenshot specs](app-store/screenshot-specs.md).

The earlier empty-Library simulator screenshot, `design/notebook-pages/app-library.png` with its export `assets/images/app-library.webp`, is retained for reference but no longer shown on the site.
