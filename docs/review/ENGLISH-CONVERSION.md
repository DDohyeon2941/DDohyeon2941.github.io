# English portfolio conversion

This records the English conversion at commit `6073223`. Subsequent detail-page markup and layout changes are documented in [DETAIL-LAYOUT.md](DETAIL-LAYOUT.md); refer there for the latest preservation and visual checks.

All visitor-facing content is now presented in English: the home introduction, research and project indexes/details, CV, blog posts, full company ML sessions, supplementary examples, previews, navigation, captions, chart labels, page metadata, and accessibility text. The name follows the dissertation’s English form, **Do Hyeon Lee**.

The existing static HTML structure and URLs are retained. Long session and blog bodies were translated in full rather than replaced by summaries. Research remains grouped into **Imbalanced data**, **Micromobility**, and **Sports**. Professional projects, coursework/independent work, and competition/regional analysis remain distinct; the document-standardization context remains unclassified pending confirmation. Company ML session rounds, session order, draft labels, and supplementary links remain available.

## Figures and responsive layout

- Translated 13 existing native SVG diagrams, including their accessible titles/descriptions, and fitted longer English labels.
- Added an English native SVG of the generalized same-entity 1:1 data relationship for the professional data-linkage page.
- Reconstructed the two GAN diagrams as English native SVGs, retaining their stages, arrows, implementation notes, and exploratory boundary-generation hypothesis. Original PNG files remain available at their existing paths.
- Kept the original fellowship scatterplots, axes, points, group boundaries, and map geometry unchanged inside SVG figures. English vector annotations replace the visible Korean group labels. Original PNG files remain unchanged.
- Translated inline session SVGs and interactive chart/output labels. Adjusted the mobile navigation, function input/output layout, wide case table, and scaling statistics to accommodate longer English text.
- Corrected missing English spaces at inline emphasis boundaries without changing the document structure.

No new website framework or runtime dependency was added. The original profile photograph and paper figures were retained.

## Disclosure exception

During the full translation, an additional professional example in `sessions/aiguru/round1-05-model-reliability.html#s4` was found to contain internal identifiers. It now uses a generalized changed-operating-conditions example: monitor distribution/error changes, separate data collected under changed and previous conditions until their effects are understood, then reassess or rebuild using relevant data. The teaching logic and section structure remain; internal names are omitted under the existing disclosure instructions.

Professional pages and previews continue to explain same-target linkage, metadata consistency, alignment, normalization, and prediction-time information availability at a general level. The previously withheld professional repository link remains withheld.

## Preservation and validation

| Check | Result |
| --- | --- |
| Public HTML pages | 39, all with `lang="en"` |
| Full element sequence and existing IDs | Preserved across all 39 pages |
| Existing page routes and external URLs | Preserved; 39 external URLs compared against the pre-translation branch |
| Internal file/fragment references | 725 checked |
| Numeric-only table cells | 160 preserved |
| Formula blocks | 37 checked for unchanged mathematical symbols and quantities |
| Nonempty rendered text nodes | 8,212 retained; 247 quantity-representation differences manually reviewed for equivalent meaning |
| Inline executable JavaScript | Preserved; user-facing strings translated |
| Visitor-facing Korean and old session branding | None found in rendered text, accessibility metadata, preview data, JS labels, or native SVG labels |

Chrome verification passed at **1440×1000, 390×844, and 320×740**: all **117 page/viewport checks** had no page overflow or JavaScript errors. Images decoded successfully and collapsible sections toggled. Menu/detail navigation, project contents links, list return links, old fragment routes, and keyboard toggles passed. Existing Chart.js resources were loaded during the final checks.

All **51 preview checks** and **51 detail/viewport checks** passed. These cover image loading, viewport boundaries, hover, keyboard focus, Escape, touch buttons, and preview-to-detail navigation. Direct research navigation also works with JavaScript disabled. Session examples were separately exercised through scaling regeneration/outlier controls and regression sliders, with English output.

Evidence: [static preservation](english-static-results.json), [browser checks](english-browser-results.json), [previews](english-preview-results.json), [navigation and preserved categories](english-navigation-results.json), [desktop home](desktop-home.png), [mobile home](mobile-home.png), and [mobile English preview](mobile-preview.png). These checks cover the branch’s own pages and assets; linked original papers and external repositories retain their original content.

## Items still requiring confirmation

- The affiliation/context of document data standardization and the individual division of work in team projects remain unverified. No additional claims were inferred during translation.
- Professional disclosure approval, exact employment/project dates, and operational deployment scope remain open items from the earlier review.
- Existing draft sessions retain their draft status. The translation preserves their original technical claims and examples. A separate technical review could address original ambiguities in metric interpretation, limiting behavior, and orthogonality/independence; those mathematical claims were not silently rewritten during translation.

Changes are on `portfolio/information-architecture` for [PR #1](https://github.com/DDohyeon2941/DDohyeon2941.github.io/pull/1). No merge to `main` or deployment was performed.
