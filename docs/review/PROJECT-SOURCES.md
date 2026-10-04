# 프로젝트 상세의 근거 자료

2026-10-04 확인. 저장소 설명만으로 구현을 추정하지 않고 아래 파일을 함께 읽었습니다. 원천 데이터와 회사 내부 자료는 재게시하지 않습니다.

| 상세 | 읽은 공개 자료 | 본문에 반영한 핵심 |
| --- | --- | --- |
| Flower | [README·server.py·client.py](https://github.com/JihyoKim00/federated-learning) | 데이터베이스 수업 팀, 4개 집계 전략, 정상/라벨 오류 클라이언트, 노름 필터링·클리핑의 미개선 결과 |
| 비상구 인식 | [README·iot_model.ipynb·iot_model_binary.ipynb·iot_convert.ipynb](https://github.com/DDohyeon2941/emergency-exit-detection-for-visual-assistance) | IoT 수업 팀, 2/3 클래스 이미지 분류, MobileNetV2, 검증 AUROC, TFLite 양자화·Edge TPU 변환 |
| 성수동 | [README·analysis/analyze_korean.py·preprocess/preprocess_for_training.py](https://github.com/DDohyeon2941/sungsoo) | 펠로우십 팀, 매출 회귀, 2023 학습/2024 평가, SHAP 집단 비교 |
| 보험 청구 | [README·modules/Modeling/preprocessing.py·models.py](https://github.com/chromatices/2020_mirae_insurance_competition) | 대회 팀, 특징 구성, 질병군별 LightGBM, 층화 5분할 검증 |
| GAN | [README와 연구 범위·시기별 실험 기록](https://github.com/DDohyeon2941/gan-for-imbalanced-image-data) | 2019 대학원 프로젝트와 2023 개인 실험 구분, 생성 모델 차이, 분류 평가와 생성 라벨의 타당성 |
| OOD | [README·Base_experiment.py·IRM_experiment.py·IRM_ver1_experiment.py·IRM_rev_experiment.py](https://github.com/DDohyeon2941/Regularization-Penalty-Optimization-for-Addressing-Data-Quality-Variance-in-Ood-Algorithms) | 사용자 확인: 수업 과제. Colored MNIST, 환경별 라벨 품질, IRM 규제 변경과 입력 민감도 |
| 수요 예측 | [공간 단위 연구](https://github.com/DDohyeon2941/micro-mobility-demand-prediction-framework), [극단 수요 모델](https://github.com/DDohyeon2941/adaboost-rdt-extreme-demand-prediction)의 README·공간 생성 스크립트·models/models_0708_8.py | 공간 집계와 예측 모델의 두 문제 구분, 단계별 방법과 비교 기준 |
| 야구 | [README·get_limit_prob_importance_fastball_0119.py](https://github.com/DDohyeon2941/baseball-ball-strike-count-analysis) | 카운트 전이, 결과 확률, 중요도와 구속 비교, 관측 연구의 한계 |
| 제조 데이터 2건 | 기존 소개·일반화한 블로그와 사용자 지정 공개 범위 | 동일 대상 연결, 시간·의미 정합성, 학습/사용 시점 일치; 내부 구현을 재현하지 않는 설명 |
| 문서 표준화 | 기존 소개의 원천 분석·표준화·구조 설계 기록 | 상세 자료가 없는 항목의 도구·성과·소속을 추정하지 않음 |

실험 기록의 숫자는 해당 저장소 보고값입니다. 이 작업은 사이트 콘텐츠와 동작을 검증하며 연구 모델의 재학습이나 수치 재현은 수행하지 않습니다.

성동구 펠로우십의 상권 정의·선정 과정은 사용자 제공 완료 보고서 4–17쪽에 근거해 보강했습니다. [정의 대조 기록](FELLOWSHIP-SOURCE.md)을 참고합니다.
