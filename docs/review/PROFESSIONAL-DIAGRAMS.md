# Visible diagrams for professional experience

The earlier disclosure pass replaced the original detailed ETL image with a very simple general relationship. The time-series detail likewise used a three-box concept diagram. Both routes worked, but the meaningful visual distinction between correspondence validation and time alignment was missing.

## Changes

- Restore the supplied portfolio's page 9 evaluation/validation diagram in the manufacturing-data overview and its list preview. The diagram region is rendered directly from the PDF; its labels and arrows are unchanged. It describes general evaluation reasoning and contains no identifying or restricted operational information. Its English caption and alternative text explain the original Korean labels; attached source materials retain their original language.
- Add a larger general correspondence diagram to the manufacturing-data approach: earlier output and later input for the same target, verified one-to-one pairs, consistency checks, alignment/normalization, and dataset preparation. The shapes illustrate relationships rather than actual records.
- Add a larger time-alignment diagram to the time-series approach and preview: differing recording patterns, a shared prediction point, available information, alignment/quality review, and consistent training/use/evaluation criteria. No actual time values or collection intervals are shown.
- Supply dedicated mobile SVG layouts through `picture`, so diagram text remains readable without scrolling the page horizontally. The compact time-series overview links directly to the larger diagram.
- Retain previous general diagram files and full-size links as supplementary views. Existing section IDs, paragraphs, methods, source links, and other preview entries are preserved.

These figures do not establish employer-specific implementation or performance claims. Named affiliation, dates, operational scale, and unconfirmed outcomes have not been added.

## Disclosure review

The two detailed work images were recovered from the previous source cache and compared visually. Their originals contain information excluded by the user's disclosure instructions and remain outside tracked public assets. The new diagrams preserve only general relationships; they do not reproduce the actual production process or implementation. Source image filenames and raw repository links are not added to the site.

The page 9 diagram was reviewed separately before reuse. It depicts evaluation criteria, validity conditions, data integration, comparison, and error discovery. The full page 10 slide contains information outside the allowed public scope and is not included. Source diagrams and new figures were reviewed for names, products/components, data fields/schema, filenames, screens, scale, private code, and implementation details.

## Verification

- 39 public HTML pages and 734 local file/fragment/source references: no missing targets, including mobile `srcset` resources.
- Both updated details at 1440×1000, 390×844, and 320×740: 6 checks for loaded images, responsive source selection, contents navigation, diagram jumps, full-size links, and absence of page overflow or JavaScript errors.
- Both list previews at the same 3 sizes: 6 checks for updated images, viewport boundaries, and navigation to the corresponding details.
- All 4 new SVGs: valid XML, rendered correctly, and text within their viewBoxes.
- Existing text, IDs, and links in both details are preserved; other preview entries are unchanged. The extracted source diagram matches a fresh rendering of the same PDF region.
- Public HTML, preview data, new SVG source, and selected PDF text checked for restricted terminology. A shared acronym in an unchanged educational decision-tree example was reviewed as a generic operating procedure, rather than a private file category.
- Desktop and mobile screenshots were inspected directly. `git diff --check` passed.

[Machine-readable verification](professional-diagram-results.json).

## Screenshots

- [Manufacturing overview with original source diagram, desktop](professional-manufacturing-overview-1440.png)
- [Manufacturing linkage diagram, mobile](professional-manufacturing-workflow-390.png)
- [Time-alignment diagram, desktop](professional-time-workflow-1440.png)
- [Time-alignment diagram, small mobile](professional-time-workflow-320.png)

Work remains on `portfolio/information-architecture` for PR review. No main merge or deployment is performed.
