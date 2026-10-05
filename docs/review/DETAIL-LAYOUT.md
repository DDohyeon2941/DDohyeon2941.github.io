# Readable research and project detail pages

Research details (8) and active project details (9) now use an editorial layout that distinguishes context, methods, evidence, and limitations. All existing English content, numerical results, formulas, source figures, links, section IDs, and expandable material are retained.

- The overview pairs an introduction with a larger representative figure. Existing key facts appear as labeled information rows rather than bullets.
- Desktop sections place the section title in a narrow left column and the body in a readable right column. Ordinary paragraphs have a restrained line length; figures and tables use the available content width.
- Genuine method sequences appear as numbered steps with separate labels and explanations. Complexity measures use definition rows, and alternative methods use parallel comparison areas.
- Doctoral strategies remain complementary approaches. GAN’s class-aware and Dual-Critic methods are compared separately from their common edge/evaluation method. Neither layout turns these alternatives into a claimed integrated pipeline.
- Evidence tables, interpretation notes, and limitations have separate visual roles. Long technical material stays expandable.
- Mobile sections stack naturally. Wide tables retain whole words, allow keyboard/horizontal scrolling, and show a scroll cue.
- The baseball opening illustration remains immediately after its paper information. The manufacturing overview uses the existing compact generalized diagram for legibility; its full-size link still opens the original complete diagram. No figure asset or attached source document was edited in this layout change.

## Verification

| Check | Result |
| --- | --- |
| Full content, equations, table cells, figures, and expandable text | Preserved in all 17 details |
| Existing IDs and links | Preserved; only the documented manufacturing thumbnail source changed |
| Internal file/fragment references | 725 checked, no missing target |
| Detail layouts | 17 × 3 viewports: 1440×1000, 390×844, 320×740 |
| Images, contents links, and expanded sections | Passed; no page overflow or JavaScript errors |
| Home, indexes, writing, CV, and menus | 15 page/viewport checks |
| Wide-table keyboard scrolling and full-size diagram link | Passed |
| Previews and linked detail navigation | 51 preview and 51 detail/viewport checks passed; direct navigation also works without JavaScript |

Evidence: [content preservation](detail-layout-static-results.json), [detail browser checks](detail-layout-browser-results.json), [navigation regression](detail-layout-regression-results.json), [desktop research](desktop-research-detail.png), [desktop project](desktop-project-detail.png), [mobile research](mobile-research-detail.png), and [mobile project](mobile-project-detail.png).

The original three research groups, project context classifications, professional disclosure restrictions, draft labels, and existing source-document languages are retained. Changes are submitted on `portfolio/information-architecture` for [PR #1](https://github.com/DDohyeon2941/DDohyeon2941.github.io/pull/1), without merging or deploying.
