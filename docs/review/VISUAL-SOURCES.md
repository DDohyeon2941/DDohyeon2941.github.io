# 연구 본문과 그림의 근거

사용자 제공 PDF 네 건을 받은 뒤 공간 단위·AdaBoost.RDT·오버샘플링·노이즈 필터링의 대표 그림과 본문을 원문 기준으로 갱신했습니다. 아래 저장소 그림은 보존된 초기 자료 목록이며, 최신 연구 그림과 표의 근거는 [제공 논문 대조](PAPER-SOURCES.md)에 있습니다.

2026-10-04 확인. 학술지 연구의 공개 저장소와 실제 구현은 [프로젝트 근거 목록](PROJECT-SOURCES.md)의 관련 항목과 동일합니다. 추가로 분류 복잡도 연구의 `cal_cluster_complexity.py`·`simple_experiment_with_complexity.py`, 노이즈 필터링의 `noise_filtering.py`를 확인했습니다. 국제 방문객 연구는 [학술지 원문](https://jkiie.org/xml/30761/30761.pdf)의 방법을 요약했습니다.

## 기존 공개 그림

| 로컬 파일 | 원본 출처 | 사용 범위 |
| --- | --- | --- |
| `images/research/mobility-heatmap.png` | [Kansas City 히트맵](https://github.com/DDohyeon2941/micro-mobility-demand-prediction-framework/blob/main/Kansas/analysis/Figure5/Kansas_heatmap_0824.png) | 해당 도시의 기존 공간 분석 그림; 색상 의미나 개선율을 추정하지 않음 |
| `images/research/adaboost-comparison.png` | [서울 평일 Group 3 파라미터별 MAPE](https://github.com/DDohyeon2941/adaboost-rdt-extreme-demand-prediction/blob/main/analysis/original/Seoul_Weekdays_Group3_MAPE_20240908.png) | α·β 설정 분석; 대용량 원본을 1400px 안으로 축소, 내용·수치 유지 |
| `images/research/flower-accuracy.png` | [MNIST 테스트 정확도](https://github.com/JihyoKim00/federated-learning/blob/main/assets/topic1-acc.png) | 팀의 기존 실험 곡선; 새로 수행한 실험으로 표시하지 않음 |
| `images/research/exit-architecture.png` | [모델 변환 도식](https://github.com/DDohyeon2941/emergency-exit-detection-for-visual-assistance/blob/main/images/image.png) | 공개 수업 프로젝트의 학습·변환 흐름; 실제 배포 완료를 뜻하지 않음 |

각 그림은 직접 열어 내용을 확인했습니다. 회사 자료는 포함하지 않습니다. 회사 내부 도식은 기존에 교체한 일반적인 1:1 관계 그림만 사용합니다.

## 개념도

노이즈 필터링, 오버샘플링, 야구 카운트 분석, 리뷰 분석, GAN, OOD, 성수동 분석, 보험 분류, 시계열 데이터와 문서 표준화는 확인된 문제·구현 흐름을 SVG로 표현했습니다. 학위논문 2건은 제목에서 확인되는 문제 범위를 표현합니다. 좌표·표본·성능을 합성하지 않았으며 모든 캡션에 실험 결과가 아닌 개념도임을 표시했습니다.

학위논문 원문 2건은 기존 dCollection·RISS 주소로 접근이 되지 않아 관련 학술지 내용과 동일하다고 가정하지 않았습니다. 논문 메타데이터와 기존 링크는 유지합니다.
