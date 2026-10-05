# Employment history and expanded skills

The home now identifies the current role first: AI Data & Knowledge Architect at Necton, with previous employment at Amber Road and AI Guru immediately below. Each employer links to its CV entry. The degree and existing research/award/review highlights remain in the introduction.

## Employment evidence and scope

The user confirmed the two previous employers and current Necton employment. Pages 1–2 of the supplied portfolio (`이도현_포트폴리오_260924.pdf`) establish the roles and employment periods:

| Employer | Role | Period |
| --- | --- | --- |
| Necton | AI Data & Knowledge Architect | Jul 2026–Present |
| AI Guru | Senior Consultant | Jan 2026–Jul 2026 |
| Amber Road | Data Scientist | May 2025–Dec 2025 |

The source supports document standardization/data architecture at Necton, manufacturing data validation/linkage at AI Guru, and time-series prediction work at Amber Road. The CV uses generalized descriptions and links to the existing project details. Employment dates are not presented as independently verified project start/end dates. Necton's English spelling is consistent with its [official website](https://www.necton.co.kr/).

The document-standardization project now belongs to Industry projects. Its earlier unconfirmed affiliation is resolved by the supplied portfolio and user confirmation. The former `projects.html#context-review` fragment remains on the moved entry. All three employers appear consistently in the corresponding project list, detail, and preview. Session titles remain company ML training; their existing content and URLs are unchanged.

Internal processes, products, schemas/fields, file names, screenshots, processing scales, and unapproved company code remain excluded. No source financial/performance figures were added. Team-role and deployment claims have not been expanded beyond the supported public descriptions.

## Added skills and sources

| Area | Additions | Basis |
| --- | --- | --- |
| Data preparation | Fiona, Shapely, GeoPandas | User confirmation plus authored spatial preprocessing and visualization code |
| Modeling and evaluation | smote_variants, imbalanced-learn, Optuna | User confirmation; authored oversampling/metric calls; Optuna explicitly listed in the supplied portfolio, page 2 |
| Statistical analysis and visualization | SciPy, Matplotlib, seaborn | Authored statistical comparisons and research visualization code |
| Data architecture | Document standardization, data modeling, data validation | Current work described in supplied portfolio, page 1 |
| Additional course team experience | Flower | Existing team federated-learning project, kept separate from individual professional expertise |

Direct code references:

- [Fiona and Shapely preprocessing](https://github.com/DDohyeon2941/micro-mobility-demand-prediction-framework/blob/82773afca7f75b48ec564697f958efa7931f020b/minneapolis/spatial_units/scripts/make_roughly_input_500m_0530.py): reads spatial boundaries and constructs grids/polygon relationships.
- [GeoPandas visualization](https://github.com/DDohyeon2941/micro-mobility-demand-prediction-framework/blob/82773afca7f75b48ec564697f958efa7931f020b/minneapolis/analysis/Figure5/minneapolis_draw_heatmap_0731.py): GeoDataFrames and spatial overlays.
- [Oversampling experiments](https://github.com/DDohyeon2941/informative-pair-selection-smote/blob/8f642b6270819431ce89fed09b51c7522ff4ce10/experiments/bins/simple_experiment_oversampling_smote_variants_20241113.py): smote_variants sampling and imbalanced-learn evaluation metrics.
- [Statistical comparisons](https://github.com/DDohyeon2941/informative-pair-selection-smote/blob/8f642b6270819431ce89fed09b51c7522ff4ce10/analysis/rank_analysis.py): SciPy Friedman tests and method rankings.
- [Research figures](https://github.com/DDohyeon2941/micro-mobility-demand-prediction-framework/blob/82773afca7f75b48ec564697f958efa7931f020b/Kansas/analysis/Figure6/kansas_compare_maup_with_prop_0820.py): Matplotlib and seaborn distribution plots.
- [Flower team implementation](https://github.com/JihyoKim00/federated-learning/blob/main/client.py): Flower client and PyTorch training loop, within the documented coursework scope.

Statsmodels was not added because the reviewed source only imports it without a verified call. Proficiency scores, personal weaknesses, and unrelated infrastructure technologies were not added.

## Verification

Browser validation passed for the home, CV, project list, and document detail at desktop and mobile widths (1440, 390, 320px): 54 CV/skill navigation checks, 9 professional previews, the preserved project fragment, award expand/collapse, and image decoding. Current role, previous employers, degree, CV highlights, and identity are visible in the first viewport. No horizontal overflow or JavaScript errors were found.

Existing links, IDs, and images on edited content pages are preserved against the previous commit. The site-wide check resolves 760 local file/fragment/source references. Desktop/mobile screenshots were visually inspected and `git diff --check` passed.

See [results](career-skills-results.json), [desktop introduction](career-skills-desktop.png), [mobile introduction](career-skills-mobile.png), and [expanded skills](career-skills-technologies.png).
