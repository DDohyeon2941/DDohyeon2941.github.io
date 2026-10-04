# Visual previews for company ML sessions

The session list now previews the diagrams and charts already present in the full materials. All nine sessions and both supplementary examples have previews, using 20 existing figures. A preview gives priority to the figure and its caption, with previous/next controls where two figures are available, a full-size image link, and a link to the complete session.

## Content and sources

| Material | Selected visuals |
| --- | --- |
| Round 1, session 1 | Random and U-shaped residual patterns |
| Round 1, session 2 | Axis-aligned partitioning and regression-tree leaf predictions |
| Round 1, session 3 | Temporal context and Euclidean/DTW comparison |
| Round 1, session 4 | PR target feasibility and an ROC example |
| Round 1, session 5 | Educational train/test-gap comparison |
| Round 1, session 6 | Lag/rolling timeline and training-window curves |
| Round 2, session 1 | Function input/output and the loss calculation |
| Round 2, session 2 | Residual comparison and variable-vector collinearity |
| Round 2, session 3 | Worked impurity examples and bagging/boosting comparison |
| Feature-importance supplement | Existing SHAP waterfall and summary |
| Scaling supplement | Default original/min–max/standardized scatter plots |

Existing SVG figures are extracted as standalone assets. Their drawing elements, values, and labels are retained; inherited presentation and case-sensitive SVG viewport/marker attributes are made explicit. Where a meaningful figure includes HTML labels, a screenshot captures the existing visual with its context. The scaling figure captures the example's unchanged default generated data. No new experimental results or data are introduced.

The session HTML, scripts, charts, full explanations, original links, round order, and three draft labels are preserved. Preview draft metadata comes from the existing session list. Company branding remains absent from visitor-facing labels; legacy URLs remain intact. The model-reliability preview uses the generic educational comparison, excluding the internal company case.

## Behavior

- Mouse hover or keyboard focus previews the linked material. Each main session and supplement also has its own Preview button for touch and explicit activation.
- The home-page session link also has an inline Preview button. This closes a mobile entry-point gap: the initial implementation attached hover/focus handlers there but only created buttons in list layouts.
- Previous/next controls browse the actual source figures. The caption and full-size link update together; controls stop at the first and last figure.
- Explicitly opened previews remain on the chosen material while interacting with figures. Image resizing cannot trigger an unrelated hover preview; hover-only exploration still switches between links.
- Close, Escape, and outside click dismiss the preview. Close returns focus to the associated button.
- Titles continue to open the complete materials directly. Without JavaScript, the original list and links still work.
- Existing research/project previews retain their text, data, and interaction. The wider image-focused presentation applies to the new session previews.

## Verification

See [browser and preservation results](session-preview-results.json) and [figure source mapping](session-preview-sources.json).

- 11 session/example previews at 1440×1000, 390×844, and 320×740: 33 preview checks and 60 individual figure checks.
- 17 existing research/project previews at the same sizes: 51 regression checks.
- Image decoding, previous/next boundaries, captions, full-size URLs, viewport bounds, direct session navigation, mouse hover, keyboard focus, Escape, Close/focus return, outside dismissal, and navigation without JavaScript checked.
- All 11 session source files compared with the previous commit without body changes. Existing writing text and links, three draft labels, and 17 pre-existing preview entries preserved.
- Standalone SVG XML, viewport attributes, rendered text bounds, and desktop/mobile screenshots checked. No runtime dependencies are added.
- Final figure/session link spacing and viewport bounds: 9 additional checks passed. Existing Chart.js resources loaded during the complete navigation validation; no JavaScript errors were reported.
- Follow-up entry-point validation: home and writing list at three viewport sizes, both over local HTTP and as directly opened files, passed all 12 checks. Actual mobile taps, figure switching, image decoding, viewport bounds, Close/focus return, and navigation to the complete session were checked with no errors. See [entry-point results](session-preview-entrypoint-results.json).

## Screenshots

- [Evaluation curves, desktop](session-preview-metrics-1440.png)
- [Evaluation curves, mobile](session-preview-metrics-390.png)
- [Regression diagram, desktop](session-preview-regression-1440.png)
- [Feature-importance example, small mobile](session-preview-importance-320.png)
- [Home-page session preview, mobile](session-preview-home-390.png)

The changes are submitted on `portfolio/information-architecture` for PR review. Main is not merged or deployed.

The preview feature is available in this branch's home and writing-list pages. The live GitHub Pages site does not receive these PR changes before merge/deployment. Individual session bodies remain the complete materials rather than the list-preview interface.
