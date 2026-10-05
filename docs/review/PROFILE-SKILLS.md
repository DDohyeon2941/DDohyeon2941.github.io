# CV highlights and evidenced skills on the home page

The introduction now places the PhD degree/date and three linked CV highlights directly below the name: 3 research projects, 7 awards, and 5 peer reviews. Each count links to its supporting CV section. The portrait, identity statement, research-to-practice narrative, contact links, and full CV access remain together at the top.

Technical skills are grouped by what the work involves, with links to relevant projects:

| Area | Technologies shown | Experience scope |
| --- | --- | --- |
| Data preparation | Python, pandas, NumPy | Cleaning and analysis, record linkage, and time alignment |
| Modeling and evaluation | scikit-learn, XGBoost, LightGBM, SHAP | Classification, regression, model comparison, and interpretation in team analysis/competition projects |
| Deep learning | PyTorch | Custom architectures/losses, training loops, and classification experiments in the personal GAN follow-up |
| Additional course team experience | TensorFlow/Keras, TensorFlow Lite | Image classification and model conversion in the exit-sign project |

The following section describes strengths through supported work: learning design, data/evaluation design, and technical explanation. No personal weaknesses, proficiency scores, or unsupported technology claims are included, following the user's explicit preference to show only verified experience. Coursework and team experience are distinguished from the personal follow-up; the page does not imply production deployment or verified GAN improvement.

## Evidence

- The existing CV supplies the degree/date, three funded-research participation records, seven awards, and five certified reviews.
- The [Seongsu analysis code](https://github.com/DDohyeon2941/sungsoo/blob/b923856b4fbd70f67b53898958a909fcc85a8ec5/analysis/analyze_korean.py) credits the author and uses pandas, NumPy, scikit-learn, XGBoost, LightGBM, and SHAP.
- The jointly authored [insurance modeling code](https://github.com/chromatices/2020_mirae_insurance_competition/blob/e337f04a292fb79be3e5d85225c99023cfdbc7ae/modules/Modeling/models.py) supports classification, LightGBM, and cross-validation experience.
- The supplied portfolio and existing GAN detail distinguish the 2019 team project from the 2023 personal PyTorch follow-up. Existing exit-sign documentation supports the TensorFlow/Keras/TFLite course team scope.
- Professional project descriptions support linkage, validation, and prediction-time alignment. Their existing disclosure boundaries remain in place.

## Verification

Chrome checks passed at 1440×1000, 390×844, and 320×740. The degree, CV highlights, and identity statement are visible in the first viewport. All 33 CV/skill link checks passed, as did award expand/collapse and desktop skill-link previews. There were no JavaScript errors or horizontal overflow.

Comparison with the previous home page confirms preservation of all existing link targets, IDs, and source images. The old CV fragment IDs remain available after moving the summary. Styles are limited to the new home elements; no framework or dependency was added.

See [machine-readable results](profile-skills-results.json), [desktop introduction](profile-skills-desktop.png), [mobile introduction](profile-skills-mobile.png), and [full home layout](profile-skills-home.png). Screenshots were visually inspected and `git diff --check` passed.
