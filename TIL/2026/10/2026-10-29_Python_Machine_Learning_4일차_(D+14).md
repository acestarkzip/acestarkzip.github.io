# Python : Machine Learning 4일차 (D+14)

> 📚 **3주차 Python Machine Learning**  
> 📅 2026.10.26 Mon ~ 2026.10.30 Fri | Total: 5 days

## 📕 D. Ensemble, Boosting (2026.10.29 Thu)

## 📑 목차

- [a. Ensemble (앙상블)](#-a-ensemble-앙상블)
- [b. Boosting (부스팅)](#-b-boosting-부스팅)
- [c. Project (프로젝트)](#-c-project-프로젝트)
- [핵심 요약](#-핵심-요약)
- [학습 체크리스트](#-학습-체크리스트)

---

## 📃 a. Ensemble (앙상블)

### 1. 앙상블이란?

**앙상블(Ensemble)** 은 여러 머신러닝 모델의 예측을 결합하여 하나의 모델보다 더 안정적이거나 정확한 결과를 얻으려는 방법이다.

쉽게 말해, 한 사람의 판단에만 의존하지 않고 여러 사람의 의견을 종합하는 것과 비슷하다.

예를 들어 서버의 고장 여부를 예측한다고 가정하자.

- 모델 A: 정상
- 모델 B: 고장
- 모델 C: 정상

다수결 방식을 사용한다면 최종 결과는 `정상`이 된다.

물론 여러 모델을 결합한다고 해서 항상 성능이 좋아지는 것은 아니다. 모델의 종류, 예측 결과의 다양성, 데이터의 특성에 따라 결과가 달라질 수 있다.

### 2. 대표적인 앙상블 기법

| 기법 | 핵심 원리 | 대표 알고리즘 |
|---|---|---|
| Voting | 여러 모델의 예측을 투표나 확률 결합으로 종합 | `VotingClassifier` |
| Bagging | 여러 모델을 서로 다른 데이터 표본으로 학습한 뒤 결과를 결합 | `BaggingClassifier` |
| Random Forest | 여러 결정 트리를 학습하고 예측을 결합 | `RandomForestClassifier` |
| Boosting | 모델을 순차적으로 학습하면서 이전 단계의 부족한 점을 보완 | AdaBoost, Gradient Boosting, XGBoost |

**핵심 구분**

- Voting: 여러 모델의 예측을 결합한다.
- Bagging: 여러 모델을 독립적으로 학습하여 결합한다.
- Random Forest: 결정 트리를 활용하는 대표적인 배깅 계열 알고리즘이다.
- Boosting: 여러 모델을 순차적으로 학습하며 성능을 개선한다.

### 3. Voting (보팅)

**Voting** 은 여러 모델의 예측을 결합하여 최종 결과를 결정하는 방법이다.

대표적으로 Hard Voting과 Soft Voting이 있다.

#### ① Hard Voting

각 모델이 예측한 클래스 중에서 **가장 많은 표를 얻은 클래스**를 최종 결과로 선택한다.

예를 들어 다음과 같이 예측했다고 가정하자.

| 모델 | 예측 결과 |
|---|---|
| Logistic Regression | 정상 |
| Decision Tree | 고장 |
| KNN | 정상 |

2개 모델이 `정상`이라고 예측했으므로 최종 결과는 `정상`이다.

#### ② Soft Voting

각 모델이 예측한 클래스별 확률을 평균 내어 최종 클래스를 결정한다.

예를 들어 세 모델이 다음과 같은 고장 확률을 예측했다고 가정하자.

| 모델 | 고장 확률 |
|---|---:|
| 모델 A | 80% |
| 모델 B | 30% |
| 모델 C | 40% |
| 평균 | 50% |

Soft Voting은 각 모델의 확률을 결합하여 최종 클래스를 결정한다.

**주의:** Soft Voting을 사용하려면 일반적으로 각 모델이 `predict_proba()`를 지원해야 한다.

#### ③ 기본 코드

```python
from sklearn.ensemble import VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier

model = VotingClassifier(
    estimators=[
        ('lr', LogisticRegression(max_iter=1000)),
        ('dt', DecisionTreeClassifier(random_state=42)),
        ('knn', KNeighborsClassifier(n_neighbors=5))
    ],
    voting='hard'
)

# 모델 학습
model.fit(X_train, y_train)

# 예측
y_pred = model.predict(X_test)
```

`voting='hard'`를 `voting='soft'`로 변경하면 Soft Voting을 사용할 수 있다. 다만 Soft Voting에서는 구성 모델들이 확률 예측을 지원해야 한다.

### 4. Bagging (배깅)

**Bagging(Bootstrap Aggregating)** 은 원본 데이터에서 복원 추출로 여러 학습용 표본을 만들고, 각 모델을 독립적으로 학습한 뒤 예측을 결합하는 방식이다.

쉽게 말해, 같은 문제를 서로 조금씩 다른 데이터로 학습한 여러 모델에게 맡긴 다음 결과를 종합하는 방법이다.

#### 주요 특징

- 원본 데이터에서 복원 추출로 여러 학습용 표본을 만든다.
- 여러 모델을 독립적으로 학습할 수 있다.
- 모델 간 학습을 병렬로 처리하기 비교적 쉽다.
- 예측의 변동을 줄이는 데 도움이 된다.
- 결정 트리처럼 학습 데이터 변화에 민감한 모델에 유용하다.

#### 예시

100개의 학습 데이터가 있다고 가정하자.

1. 원본 데이터에서 복원 추출하여 첫 번째 학습용 표본을 만든다.
2. 같은 방법으로 두 번째 학습용 표본을 만든다.
3. 여러 표본으로 각각 모델을 학습한다.
4. 각 모델의 예측을 결합한다.

복원 추출이므로 같은 데이터가 한 표본에 여러 번 포함될 수 있고, 일부 데이터는 해당 표본에서 선택되지 않을 수 있다.

### 5. Random Forest (랜덤 포레스트)

**Random Forest** 는 여러 결정 트리를 학습한 뒤 예측을 결합하는 앙상블 알고리즘이다.

랜덤 포레스트는 일반적으로 배깅 방식과 무작위 특성 선택을 활용하여 트리 간 다양성을 높인다.

#### 주요 원리

1. 학습 데이터에서 복원 추출로 여러 표본을 만든다.
2. 각 표본을 이용해 결정 트리를 학습한다.
3. 트리를 학습할 때 분할 후보 특성 중 일부만 고려한다.
4. 여러 트리의 예측을 결합하여 최종 결과를 결정한다.

#### 분류와 회귀의 차이

| 작업 | 예측 결합 방식 |
|---|---|
| 분류(Classification) | 여러 트리의 예측 클래스 또는 클래스별 확률을 결합 |
| 회귀(Regression) | 여러 트리의 예측값을 평균 내는 방식이 일반적 |

#### 기본 코드

```python
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(
    n_estimators=100,
    max_depth=None,
    random_state=42
)

# 모델 학습
model.fit(X_train, y_train)

# 예측
y_pred = model.predict(X_test)
```

#### 주요 하이퍼파라미터

| 파라미터 | 의미 |
|---|---|
| `n_estimators` | 생성할 결정 트리의 개수 |
| `max_depth` | 각 트리의 최대 깊이 |
| `min_samples_split` | 노드를 분할하는 데 필요한 최소 샘플 수 |
| `max_features` | 분할할 때 고려할 특성의 수 또는 비율 |
| `random_state` | 난수 설정을 고정하여 결과를 재현하기 쉽게 만드는 값 |

**하이퍼파라미터 설정 예시**

- `n_estimators=100`: 결정 트리 100개를 사용한다.
- `max_depth=None`: 트리의 최대 깊이를 별도로 제한하지 않는다.
- `max_features`: 분할 후보 특성의 범위를 조절하여 트리 간 다양성에 영향을 준다.

#### 랜덤 포레스트의 장점과 주의점

**장점**
- 단일 결정 트리보다 과적합을 줄이는 데 도움이 될 수 있다.
- 다양한 특성 간 관계를 학습할 수 있다.
- 여러 트리의 예측을 결합하므로 결과가 비교적 안정적일 수 있다.
- 특성 중요도를 확인하는 데 활용할 수 있다.

**주의점**
- 트리 수가 많아지면 학습과 예측에 필요한 자원이 증가할 수 있다.
- 단일 결정 트리보다 전체 예측 과정을 해석하기 어렵다.
- 항상 단일 결정 트리보다 높은 성능을 보장하지는 않는다.

---

## 📃 b. Boosting (부스팅)

### 1. 부스팅이란?

**부스팅(Boosting)** 은 여러 약한 학습기(Weak Learner)를 순차적으로 학습하여, 이전 단계의 모델이 잘 처리하지 못한 부분을 보완하는 앙상블 기법이다.

쉽게 말해, 문제를 풀고 틀린 부분을 분석한 뒤 다음 학습기가 그 부분을 더 잘 처리하도록 학습하는 방식이다.

**약한 학습기(Weak Learner)** 는 단독으로는 강력하지 않을 수 있지만, 여러 학습기를 적절하게 결합하면 강력한 예측 모델을 구성할 수 있는 학습기를 의미한다.

#### 부스팅의 기본 흐름

1. 첫 번째 모델을 학습한다.
2. 모델의 예측 결과와 실제 정답의 차이를 확인한다.
3. 이전 모델의 부족한 점을 보완하도록 다음 모델을 학습한다.
4. 여러 모델의 결과를 결합하여 최종 예측을 수행한다.

부스팅 알고리즘마다 이전 모델의 오류를 처리하고 다음 모델을 학습하는 구체적인 방식은 다르다.

### 2. 대표적인 부스팅 알고리즘

| 알고리즘 | 핵심 원리 | 특징 |
|---|---|---|
| AdaBoost | 이전 단계에서 잘못 분류한 데이터에 더 큰 가중치를 부여 | 오분류된 데이터에 집중 |
| Gradient Boosting | 손실 함수를 줄이는 방향으로 다음 모델을 학습 | 순차적으로 예측 성능 개선 |
| XGBoost | Gradient Boosting을 효율적으로 구현하고 정규화 등을 지원 | 성능과 계산 효율을 고려 |
| LightGBM | 효율적인 학습과 빠른 처리를 목표로 설계된 부스팅 프레임워크 | 대규모 데이터에 활용 가능 |
| CatBoost | 범주형 특성 처리를 지원하는 부스팅 프레임워크 | 범주형 데이터가 있는 문제에 활용 가능 |

XGBoost, LightGBM, CatBoost는 각각 별도의 라이브러리이며, 기본적인 scikit-learn의 `GradientBoostingClassifier`와 사용 방식이나 지원 기능이 다를 수 있다.

### 3. Bagging과 Boosting 비교

| 구분 | Bagging | Boosting |
|---|---|---|
| 학습 방식 | 여러 모델을 독립적으로 학습 | 모델을 순차적으로 학습 |
| 핵심 목적 | 예측 변동 감소 | 이전 모델의 부족한 점 보완 |
| 대표 알고리즘 | Random Forest | AdaBoost, Gradient Boosting, XGBoost |
| 병렬 처리 | 모델 간 병렬 학습이 비교적 쉬움 | 단계 간 의존성 때문에 기본적으로 순차 학습 |
| 주의점 | 모델 수가 많으면 계산 비용 증가 | 설정에 따라 과적합이 발생할 수 있음 |

**핵심 차이**

- Bagging은 여러 모델을 독립적으로 학습하고 결과를 결합한다.
- Boosting은 이전 모델의 결과를 바탕으로 다음 모델을 순차적으로 학습한다.

### 4. Gradient Boosting

**Gradient Boosting** 은 손실 함수(Loss Function)를 줄이는 방향으로 모델을 순차적으로 추가하는 부스팅 알고리즘이다.

쉽게 말해, 현재 모델이 예측에서 발생시킨 오차를 줄이는 방향으로 다음 학습기를 추가하는 방법이다.

#### 기본 코드

```python
from sklearn.ensemble import GradientBoostingClassifier

model = GradientBoostingClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=3,
    random_state=42
)

# 모델 학습
model.fit(X_train, y_train)

# 예측
y_pred = model.predict(X_test)
```

#### 주요 하이퍼파라미터

| 파라미터 | 의미 |
|---|---|
| `n_estimators` | 학습할 약한 학습기의 개수 |
| `learning_rate` | 각 학습기가 최종 예측에 기여하는 정도를 조절 |
| `max_depth` | 개별 트리의 최대 깊이 |
| `random_state` | 난수 설정을 고정하여 결과를 재현하기 쉽게 만드는 값 |

#### 주요 설정의 영향

- `n_estimators`가 증가하면 더 많은 학습기를 사용한다.
- `learning_rate`가 낮으면 충분한 성능을 얻기 위해 더 많은 학습기가 필요할 수 있다.
- `max_depth`가 커지면 개별 트리가 더 복잡해질 수 있다.
- 학습기가 너무 많거나 트리가 지나치게 복잡하면 과적합이 발생할 수 있다.

최적 설정은 데이터와 평가 지표에 따라 달라지므로 실제 검증 결과를 바탕으로 선택해야 한다.

---

## 📃 c. Project (프로젝트)

### 1. 프로젝트 목표

Random Forest와 Gradient Boosting 모델을 학습하고, 평가 지표를 이용하여 두 모델의 성능을 비교한다.

필요하다면 하이퍼파라미터를 조정하여 성능 변화를 확인한다.

### 2. 기본 진행 순서

1. 데이터 불러오기 및 구조 확인
2. 결측치와 이상치 확인 및 처리
3. 입력 특성 `X`와 타깃 `y` 분리
4. 학습 데이터와 테스트 데이터 분리
5. Random Forest 모델 학습
6. Gradient Boosting 모델 학습
7. Accuracy, Precision, Recall, F1-score 등으로 평가
8. 모델별 성능 비교
9. 필요하면 하이퍼파라미터 튜닝
10. 튜닝 후 최종 테스트 성능 확인

### 3. 모델 비교 코드

```python
from sklearn.ensemble import (
    RandomForestClassifier,
    GradientBoostingClassifier
)
from sklearn.metrics import accuracy_score, f1_score

# 비교할 모델 정의
models = {
    'Random Forest': RandomForestClassifier(
        n_estimators=100,
        random_state=42
    ),
    'Gradient Boosting': GradientBoostingClassifier(
        n_estimators=100,
        learning_rate=0.1,
        random_state=42
    )
}

# 모델별 학습 및 평가
for name, model in models.items():
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)

    print(f'[{name}]')
    print('Accuracy:', accuracy_score(y_test, y_pred))
    print('F1-score:', f1_score(y_test, y_pred))
```

**코드 해설**

- `models`: 비교할 모델을 이름과 함께 저장한다.
- `fit()`: 학습 데이터를 이용해 모델을 학습한다.
- `predict()`: 테스트 데이터의 클래스를 예측한다.
- `accuracy_score()`: 전체 예측 중 정답의 비율을 계산한다.
- `f1_score()`: Precision과 Recall의 조화평균을 계산한다.

※ 위 코드는 이진 분류를 기준으로 한다. 다중 클래스 분류에서는 `f1_score()`의 `average` 옵션을 데이터에 맞게 지정해야 한다. 예를 들어 `average='weighted'`를 사용하면 클래스별 F1-score를 각 클래스의 표본 수에 따라 가중 평균한다.

### 4. 평가 지표 이해하기

| 지표 | 의미 | 확인할 내용 |
|---|---|---|
| Accuracy | 전체 예측 중 정답의 비율 | 전체적인 정답률 |
| Precision | 양성으로 예측한 데이터 중 실제 양성의 비율 | 양성이라고 예측한 결과의 정확성 |
| Recall | 실제 양성 데이터 중 양성으로 찾아낸 비율 | 양성 데이터를 얼마나 놓치지 않았는지 |
| F1-score | Precision과 Recall의 조화평균 | 두 지표의 균형 |

예를 들어 서버 고장 탐지에서는 실제 고장 서버를 놓치지 않는 것이 중요할 수 있다. 이런 경우 Accuracy만 보지 않고 Recall도 함께 확인해야 한다.

### 5. 프로젝트 결과 비교 시 확인할 점

- 어떤 모델이 가장 높은 평가 점수를 얻었는가?
- 학습 데이터와 테스트 데이터의 성능 차이가 큰가?
- 모델의 성능과 학습 시간을 함께 고려했는가?
- 클래스 불균형이 있다면 Accuracy 외에 F1-score나 Recall도 확인했는가?
- 하이퍼파라미터를 변경했을 때 성능이 어떻게 달라졌는가?

**주의:** 테스트 데이터는 최종 성능을 확인하기 위한 데이터다. 여러 모델과 하이퍼파라미터를 비교하는 과정에서는 학습 데이터 내부의 교차 검증을 활용하고, 최종 선택 이후 테스트 데이터로 평가하는 것이 바람직하다.

---

## ✅ 핵심 요약

- **Ensemble**: 여러 모델의 예측을 결합하여 성능이나 안정성을 개선하려는 방법이다.
- **Voting**: 여러 모델의 예측을 투표 또는 확률 결합으로 종합한다.
- **Bagging**: 여러 모델을 독립적으로 학습하고 결과를 결합한다.
- **Random Forest**: 여러 결정 트리를 결합한 대표적인 배깅 계열 알고리즘이다.
- **Boosting**: 모델을 순차적으로 학습하며 이전 모델의 부족한 점을 보완한다.
- **Gradient Boosting**: 손실 함수를 줄이는 방향으로 학습기를 순차적으로 추가한다.
- **XGBoost, LightGBM, CatBoost**: 대표적인 부스팅 계열 라이브러리다.
- **`n_estimators`**: 사용하는 학습기의 개수와 관련된 하이퍼파라미터다.
- **`learning_rate`**: 각 학습기가 최종 예측에 기여하는 정도를 조절한다.
- **모델 평가**: Accuracy뿐 아니라 Precision, Recall, F1-score 등을 함께 고려할 수 있다.

---

## 🎯 학습 목표

- [ ] 앙상블 학습의 개념과 목적을 설명할 수 있다.
- [ ] Voting의 Hard Voting과 Soft Voting의 차이를 설명할 수 있다.
- [ ] Bagging과 Boosting의 학습 방식 차이를 이해할 수 있다.
- [ ] Random Forest가 여러 결정 트리를 결합하는 원리를 이해할 수 있다.
- [ ] Gradient Boosting의 기본적인 학습 원리를 설명할 수 있다.
- [ ] `n_estimators`, `learning_rate`, `max_depth`의 역할을 이해할 수 있다.
- [ ] Random Forest와 Gradient Boosting을 코드로 학습할 수 있다.
- [ ] Accuracy, Precision, Recall, F1-score를 이용해 분류 모델의 성능을 비교할 수 있다.

**📌 한 줄 정리:** Bagging은 여러 모델을 독립적으로 학습해 예측을 결합하고, Boosting은 모델을 순차적으로 학습하며 부족한 점을 보완한다. Random Forest와 Gradient Boosting은 각각 대표적인 앙상블 알고리즘이다.
