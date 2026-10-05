# Do Hyeon Lee’s portfolio

A static personal website served directly from HTML, CSS, and JavaScript. All visitor-facing pages are in English; no build step or new runtime dependency is required.

| Path | Contents |
| --- | --- |
| `index.html` | Introduction, contact details, three strengths, selected work, and section summaries |
| `about.html` | Compatibility route to the introduction on the home page; previous body retained in English |
| `research.html`, `research/` | Research grouped into imbalanced data, micromobility, and sports; eight detail pages |
| `projects.html`, `projects/` | Nine projects grouped by context, plus two compatibility routes for research items |
| `writing.html` | Blog posts, company ML sessions, and research presentations |
| `posts/` | Three full blog posts |
| `sessions/aiguru/` | Nine full sessions and two interactive supplementary examples; existing paths retained |
| `resume.html` | Education, funded research participation, peer review, and awards |
| `assets/`, `images/` | Shared styles, previews, figures, and compatibility navigation |

Run `python -m http.server 8765 --bind 127.0.0.1` from the repository root, then open `http://127.0.0.1:8765/`.

The [detail layout review](docs/review/DETAIL-LAYOUT.md) records the current reading layout and visual checks. The [English conversion review](docs/review/ENGLISH-CONVERSION.md) records translation scope and preservation checks. The [original implementation review](docs/review/REVIEW.md) retains the earlier source audit and disclosure decisions.

Changes are submitted on `portfolio/information-architecture` for pull request review. Merging and deployment are separate steps.
