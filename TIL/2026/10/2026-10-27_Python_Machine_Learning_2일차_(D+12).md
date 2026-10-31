# Python : Machine Learning 2일차 (D+12)

> 📚 **3주차 Python Machine Learning**  
> 📅 2026.10.26 Mon ~ 2026.10.30 Fri | Total: 5 days

## 📕 B. Logistic Regression, KNN (2026.10.27 Tue)

## 📑 목차

- [a. Classification (분류 알고리즘)](#-a-classification-분류-알고리즘)
- [b. Logistic Regression (로지스틱 회귀)](#-b-logistic-regression-로지스틱-회귀)
- [c. Evaluation (분류 평가 지표)](#-c-evaluation-분류-평가-지표)
- [d. K-Nearest Neighbors (K-최근접 이웃)](#-d-k-nearest-neighbors-k-최근접-이웃)
- [e. Feature Scaling (특성 스케일링)](#-e-feature-scaling-표준화-정규화)
- [f. Project (프로젝트)](#-f-project-프로젝트)
- [핵심 요약](#-핵심-요약)
- [학습 체크리스트](#-학습-체크리스트)

---

## 📃 a. Classification (분류 알고리즘)

### 1. 분류란?

**분류(Classification)** 는 데이터를 학습하여 새로운 데이터가 어떤 범주(Class)에 속하는지 예측하는 머신러닝 방법이다.

예를 들어, 서버의 CPU 사용률, 메모리 사용량, 온도 등의 정보를 학습하여 새로운 서버 상태가 정상인지 고장인지 예측할 수 있다.

**주요 예시**

- 이메일이 스팸인지 아닌지 분류
- 서버 상태가 정상인지 고장인지 분류
- 이미지에 어떤 물체가 있는지 분류
- 고객이 상품을 구매할지 구매하지 않을지 예측

### 2. 분류의 종류

| 유형 | 영어 | 의미 | 예시 |
|---|---|---|---|
| 이진 분류 | Binary Classification | 두 가지 범주 중 하나를 예측 | 정상 / 고장 |
| 다중 클래스 분류 | Multiclass Classification | 세 가지 이상의 범주 중 하나를 예측 | 자동차 / 사람 / 자전거 |
| 다중 레이블 분류 | Multilabel Classification | 하나의 데이터에 여러 범주를 동시에 부여 | 이미지에 사람과 자동차가 함께 존재 |

**주의:** 다중 클래스 분류와 다중 레이블 분류는 다르다.

- 다중 클래스 분류: 여러 클래스 중 하나를 선택한다.
- 다중 레이블 분류: 하나의 데이터에 여러 클래스를 동시에 부여할 수 있다.

### 3. 분류와 회귀의 차이

| 구분 | 분류 (Classification) | 회귀 (Regression) |
|---|---|---|
| 예측 결과 | 범주 또는 클래스 | 연속적인 숫자 |
| 예시 | 서버의 고장 여부 예측 | 서버의 온도 예측 |
| 대표 알고리즘 | Logistic Regression, KNN Classifier | Linear Regression |
| 주요 평가 지표 | Accuracy, Precision, Recall, F1-score | MAE, MSE, RMSE, R² Score |

**핵심:** 예측하려는 결과가 범주인지 연속적인 숫자인지에 따라 문제 유형을 구분한다.

※ 로지스틱 회귀(Logistic Regression)는 이름에 '회귀'가 들어가지만, 일반적으로 분류 문제에 사용한다.

---

## 📃 b. Logistic Regression (로지스틱 회귀)

### 1. 로지스틱 회귀란?

**로지스틱 회귀(Logistic Regression)** 는 입력 데이터를 바탕으로 특정 클래스에 속할 확률을 계산하고, 이를 이용하여 클래스를 예측하는 알고리즘이다.

예를 들어 서버의 CPU 사용률, 메모리 사용량, 온도 등을 이용하여 서버가 고장 날 가능성을 예측할 수 있다.

### 2. 핵심 개념

| 용어 | 영어 | 의미 |
|---|---|---|
| 입력 특성 | Feature | 예측에 사용하는 데이터 |
| 확률 | Probability | 특정 클래스에 속할 가능성 |
| 임계값 | Threshold | 확률을 실제 클래스로 변환하는 기준 |
| 시그모이드 함수 | Sigmoid Function | 입력값을 0과 1 사이의 값으로 변환하는 함수 |

로지스틱 회귀는 시그모이드 함수를 사용하여 특정 클래스에 속할 확률을 계산한다.

시그모이드 함수의 수식은 다음과 같다.

`σ(z) = 1 / (1 + e⁻ᶻ)`

여기서 `z`는 입력 특성의 가중합과 절편으로 계산되는 값이다.

시그모이드 함수의 출력은 0과 1 사이에 위치하므로 확률로 해석할 수 있다.

### 3. 임계값을 이용한 분류

이진 분류에서는 예측 확률을 임계값과 비교하여 클래스를 결정할 수 있다.

예를 들어 임계값이 0.5라면 다음과 같이 분류할 수 있다.

| 예측 확률 | 예측 결과 |
|---|---|
| 0.2 | 정상 |
| 0.5 | 설정한 분류 기준에 따라 결정 |
| 0.8 | 고장 |

실제 구현에서는 사용하는 라이브러리의 클래스 순서와 분류 규칙을 따른다.

일반적인 이진 로지스틱 회귀에서는 양성 클래스의 확률이 0.5 이상이면 양성 클래스로 분류한다.

다만 임계값은 문제의 특성에 따라 조정할 수 있다.

예를 들어 실제 고장을 놓치는 것이 위험하다면 고장 탐지의 Recall을 높이기 위해 임계값을 낮추는 방법을 고려할 수 있다. 단, 이 경우 정상 서버를 고장으로 잘못 판단하는 경우가 늘어날 수 있다.

### 4. 기본 코드

```python
from sklearn.linear_model import LogisticRegression

# 모델 생성
model = LogisticRegression()

# 모델 학습
model.fit(X_train, y_train)

# 클래스 예측
y_pred = model.predict(X_test)

# 클래스별 확률 예측
y_proba = model.predict_proba(X_test)
```

**주요 메서드**

| 메서드 | 역할 |
|---|---|
| `fit()` | 학습 데이터로 모델 학습 |
| `predict()` | 예측 클래스 반환 |
| `predict_proba()` | 각 클래스에 속할 확률 반환 |

예를 들어 이진 분류의 `predict_proba()` 결과는 다음과 같은 형태일 수 있다.

```python
[[0.8, 0.2],
 [0.3, 0.7],
 [0.1, 0.9]]
```

각 행은 하나의 데이터에 대한 예측 확률을 나타낸다.

두 개의 클래스가 있다면 각 열은 해당 클래스에 속할 확률을 의미한다. 열의 순서는 `model.classes_`로 확인할 수 있다.

```python
print(model.classes_)
print(model.predict_proba(X_test))
```

**핵심:** `predict()`는 클래스를 예측하고, `predict_proba()`는 클래스별 확률을 반환한다.

---

## 📃 c. Evaluation (분류 평가 지표)

### 1. 분류 평가란?

분류 모델의 성능을 평가할 때는 실제 정답과 모델의 예측 결과를 비교한다.

대표적인 평가 방법으로는 혼동 행렬(Confusion Matrix), 정확도(Accuracy), 정밀도(Precision), 재현율(Recall), F1-score, ROC-AUC 등이 있다.

### 2. 혼동 행렬 (Confusion Matrix)

혼동 행렬은 실제 클래스와 모델이 예측한 클래스를 비교하여 결과를 정리한 표다.

이진 분류에서는 일반적으로 양성(Positive)과 음성(Negative)을 기준으로 네 가지 결과를 구분한다.

| 구분 | 영어 | 의미 | 서버 고장 예측 예시 |
|---|---|---|---|
| TP | True Positive | 실제 양성을 양성으로 예측 | 실제 고장 서버를 고장으로 예측 |
| TN | True Negative | 실제 음성을 음성으로 예측 | 정상 서버를 정상으로 예측 |
| FP | False Positive | 실제 음성을 양성으로 잘못 예측 | 정상 서버를 고장으로 예측 |
| FN | False Negative | 실제 양성을 음성으로 잘못 예측 | 고장 서버를 정상으로 예측 |

**서버 고장 예측에서 특히 중요한 점**

- FP: 정상 서버에 불필요한 점검이나 경보가 발생할 수 있다.
- FN: 실제 고장 서버를 놓쳐 서비스 장애로 이어질 수 있다.

따라서 어떤 오류를 더 줄여야 하는지는 실제 운영 환경과 비용을 고려하여 결정해야 한다.

### 3. 주요 분류 평가 지표

| 지표 | 의미 | 특징 |
|---|---|---|
| Accuracy (정확도) | 전체 예측 중 정답의 비율 | 클래스 불균형이 심하면 오해를 부를 수 있음 |
| Precision (정밀도) | 양성으로 예측한 것 중 실제 양성의 비율 | 거짓 양성(FP)을 줄이는 데 중요 |
| Recall (재현율) | 실제 양성 중 양성으로 찾아낸 비율 | 거짓 음성(FN)을 줄이는 데 중요 |
| F1-score | Precision과 Recall의 조화평균 | 두 지표를 함께 고려 |
| ROC-AUC | 다양한 임계값에서 두 클래스를 구분하는 능력을 나타내는 지표 | 일반적으로 1에 가까울수록 좋음 |

#### ① Accuracy (정확도)

전체 예측 중 실제 정답과 일치한 비율이다.

`Accuracy = (TP + TN) / (TP + TN + FP + FN)`

예를 들어 100개의 데이터를 예측하여 90개를 맞혔다면 정확도는 90%다.

단, 정상 데이터가 99개이고 고장 데이터가 1개인 상황에서 모든 데이터를 정상으로 예측해도 정확도는 99%가 된다.

따라서 클래스 불균형이 심한 경우 정확도만으로 모델 성능을 판단해서는 안 된다.

#### ② Precision (정밀도)

모델이 양성이라고 예측한 데이터 중 실제로 양성인 비율이다.

`Precision = TP / (TP + FP)`

정밀도가 높으면 양성으로 예측한 결과 중 잘못된 양성 예측이 상대적으로 적다는 의미다.

예를 들어 고장이라고 예측한 서버 10대 중 실제 고장이 9대라면 정밀도는 90%다.

#### ③ Recall (재현율)

실제로 양성인 데이터 중 모델이 양성으로 찾아낸 비율이다.

`Recall = TP / (TP + FN)`

재현율이 높으면 실제 양성을 놓치는 경우가 상대적으로 적다는 의미다.

예를 들어 실제 고장 서버 10대 중 9대를 고장으로 찾아냈다면 재현율은 90%다.

#### ④ F1-score

정밀도와 재현율의 조화평균이다.

`F1 = 2 × (Precision × Recall) / (Precision + Recall)`

정밀도와 재현율을 함께 고려해야 할 때 유용하다.

다만 F1-score 하나만으로 모델의 모든 성능을 판단할 수는 없으므로 실제 문제의 목적에 맞는 지표를 함께 확인해야 한다.

#### ⑤ ROC-AUC

ROC-AUC는 모델이 양성과 음성 데이터를 얼마나 잘 구분하는지 평가하는 지표다.

- `AUC = 1.0`: 완벽한 구분
- `AUC = 0.5`: 일반적으로 무작위 수준의 구분 능력
- `AUC < 0.5`: 양성과 음성의 점수 방향이 반대로 작용하는 등의 상황을 의심할 수 있음

ROC-AUC는 특정 임계값 하나에만 의존하지 않고 다양한 임계값에서의 분류 성능을 평가한다.

### 4. 평가 지표 코드

```python
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix,
    classification_report
)

print("Accuracy:", accuracy_score(y_test, y_pred))
print("Precision:", precision_score(y_test, y_pred))
print("Recall:", recall_score(y_test, y_pred))
print("F1-score:", f1_score(y_test, y_pred))

# 혼동 행렬
print(confusion_matrix(y_test, y_pred))

# 종합 평가 보고서
print(classification_report(y_test, y_pred))
```

**각 함수의 역할**

| 함수 | 역할 |
|---|---|
| `accuracy_score()` | 정확도 계산 |
| `precision_score()` | 정밀도 계산 |
| `recall_score()` | 재현율 계산 |
| `f1_score()` | F1-score 계산 |
| `confusion_matrix()` | 혼동 행렬 생성 |
| `classification_report()` | 클래스별 주요 평가 지표 출력 |

※ 위 코드는 기본적으로 이진 분류를 가정한다. 다중 클래스 분류에서는 `average` 설정 등을 문제의 목적에 맞게 지정해야 할 수 있다.

### 5. 어떤 평가 지표가 중요할까?

| 상황 | 중요하게 고려할 지표 | 이유 |
|---|---|---|
| 실제 고장을 최대한 놓치지 않아야 함 | Recall | FN을 줄이는 데 중요 |
| 고장이라고 잘못 판단하는 경우를 줄여야 함 | Precision | FP를 줄이는 데 중요 |
| 정밀도와 재현율을 함께 고려해야 함 | F1-score | 두 지표를 함께 반영 |
| 전체 예측의 정답 비율을 확인하고 싶음 | Accuracy | 전체적인 정답 비율 확인 |
| 다양한 임계값에서 구분 능력을 비교하고 싶음 | ROC-AUC | 임계값에 따른 분류 성능 평가 |

**핵심:** 어떤 평가 지표가 가장 중요한지는 문제의 목적과 오류의 비용에 따라 달라진다.

---

## 📃 d. K-Nearest Neighbors (K-최근접 이웃)

### 1. KNN이란?

**KNN(K-Nearest Neighbors)** 은 새로운 데이터와 가까운 K개의 학습 데이터를 찾고, 주변 이웃의 정보를 이용해 결과를 예측하는 알고리즘이다.

분류 문제에서는 주변 이웃 중 가장 많이 나타나는 클래스를 예측하는 방식을 일반적으로 사용한다.

예를 들어 새로운 서버의 상태와 비슷한 과거 서버 사례 5개를 찾아 고장 여부를 예측할 수 있다.

### 2. K의 의미

K는 예측할 때 참고하는 이웃의 개수를 의미한다.

| K 값 | 특징 |
|---|---|
| K = 1 | 가장 가까운 데이터 하나를 기준으로 예측하므로 노이즈에 민감할 수 있음 |
| K가 작음 | 가까운 데이터의 영향을 크게 받음 |
| K가 큼 | 더 많은 데이터를 고려하지만, 서로 다른 클래스가 섞일 수 있음 |

K가 너무 작거나 너무 크면 예측 성능이 떨어질 수 있으므로 적절한 값을 선택해야 한다.

### 3. KNN의 예측 과정

1. 새로운 데이터가 입력된다.
2. 새로운 데이터와 학습 데이터 사이의 거리를 계산한다.
3. 거리가 가까운 K개의 이웃을 찾는다.
4. 이웃들의 클래스를 확인한다.
5. 다수결 등을 이용하여 예측 클래스를 결정한다.

거리 계산에는 유클리드 거리(Euclidean Distance) 등의 방법을 사용할 수 있다.

두 점의 좌표가 각각 `(x₁, y₁)`, `(x₂, y₂)`라면 유클리드 거리는 다음과 같다.

`d = √((x₂ - x₁)² + (y₂ - y₁)²)`

특성이 여러 개라면 각 특성의 차이를 이용하여 거리를 계산한다.

### 4. 기본 코드

```python
from sklearn.neighbors import KNeighborsClassifier

# 모델 생성
model = KNeighborsClassifier(n_neighbors=5)

# 모델 학습
model.fit(X_train, y_train)

# 클래스 예측
y_pred = model.predict(X_test)
```

| 코드 | 의미 |
|---|---|
| `KNeighborsClassifier()` | KNN 분류 모델 생성 |
| `n_neighbors=5` | 가까운 이웃 5개를 사용 |
| `fit()` | 학습 데이터를 저장하고 예측에 필요한 정보를 준비 |
| `predict()` | 주변 이웃을 바탕으로 클래스 예측 |

KNN은 다른 모델처럼 학습 과정에서 복잡한 회귀 계수나 결정 경계를 명시적으로 학습하는 방식이 아니다. 일반적으로 학습 데이터를 저장하고, 예측할 때 주변 이웃을 검색하여 결과를 계산한다.

### 5. KNN의 특징

**장점**
- 이해하기 쉽고 구현이 간단하다.
- 별도의 복잡한 학습 과정이 필요하지 않다.
- 적절한 데이터에서는 직관적인 분류 결과를 얻을 수 있다.

**단점**
- 데이터가 많으면 예측 시 거리 계산과 이웃 검색에 시간이 많이 걸릴 수 있다.
- 특성의 스케일이 다르면 거리 계산이 특정 특성에 치우칠 수 있다.
- 불필요한 특성이나 노이즈에 영향을 받을 수 있다.
- 적절한 K 값을 선택해야 한다.

**핵심:** KNN은 데이터 사이의 거리를 이용하기 때문에 특성 스케일링이 중요하다.

---

## 📃 e. Feature Scaling (표준화, 정규화)

### 1. Feature Scaling이란?

**Feature Scaling(특성 스케일링)** 은 서로 다른 단위나 범위를 가진 특성들의 값을 일정한 기준으로 변환하는 과정이다.

예를 들어 다음과 같은 데이터가 있다고 가정하자.

| 특성 | 값의 예시 |
|---|---:|
| 나이 | 20 ~ 80 |
| 연봉 | 20,000,000 ~ 100,000,000 |

나이와 연봉은 숫자의 범위가 크게 다르다.

KNN처럼 거리를 이용하는 알고리즘에서는 숫자의 범위가 큰 특성이 거리 계산에 더 큰 영향을 줄 수 있다.

따라서 특성 스케일링을 통해 각 특성의 범위를 조정하면 특정 특성이 거리 계산을 과도하게 지배하는 문제를 줄일 수 있다.

### 2. 표준화 (Standardization)

표준화는 각 특성의 평균을 0, 표준편차를 1로 변환하는 방법이다.

**공식**

`z = (x - 평균) / 표준편차`

표준화를 적용하면 값이 평균에서 얼마나 떨어져 있는지 표준편차 단위로 표현할 수 있다.

**코드 예제**

```python
from sklearn.preprocessing import StandardScaler

# 스케일러 생성
scaler = StandardScaler()

# 학습 데이터로 기준 계산 및 변환
X_train_scaled = scaler.fit_transform(X_train)

# 학습 데이터에서 얻은 기준으로 테스트 데이터 변환
X_test_scaled = scaler.transform(X_test)
```

**특징**
- 평균이 0, 표준편차가 1이 되도록 변환한다.
- 변환된 값이 반드시 0과 1 사이에 존재하는 것은 아니다.
- 이상치가 있으면 평균과 표준편차가 영향을 받을 수 있다.

### 3. 정규화 (Normalization, Min-Max Scaling)

Min-Max Scaling은 데이터의 최솟값과 최댓값을 이용하여 지정된 범위로 변환하는 방법이다.

일반적으로 0에서 1 사이의 범위를 사용한다.

**공식**

`x_scaled = (x - 최솟값) / (최댓값 - 최솟값)`

**코드 예제**

```python
from sklearn.preprocessing import MinMaxScaler

# 스케일러 생성
scaler = MinMaxScaler()

# 학습 데이터로 기준 계산 및 변환
X_train_scaled = scaler.fit_transform(X_train)

# 학습 데이터에서 얻은 기준으로 테스트 데이터 변환
X_test_scaled = scaler.transform(X_test)
```

**특징**
- 일반적으로 학습 데이터의 값을 0과 1 사이로 변환한다.
- 이상치에 영향을 많이 받을 수 있다.
- 테스트 데이터에 학습 데이터의 최솟값보다 작은 값이나 최댓값보다 큰 값이 있으면 변환 결과가 0과 1의 범위를 벗어날 수 있다.

### 4. 표준화와 정규화의 차이

| 구분 | 표준화 (Standardization) | Min-Max Scaling |
|---|---|---|
| 대표 도구 | `StandardScaler` | `MinMaxScaler` |
| 기준 | 평균과 표준편차 | 최솟값과 최댓값 |
| 결과 | 평균 0, 표준편차 1 | 지정한 범위, 일반적으로 0~1 |
| 값의 범위 | 반드시 0~1이 아님 | 일반적으로 학습 데이터가 0~1 범위 |
| 주의점 | 이상치의 영향을 받을 수 있음 | 이상치에 민감할 수 있음 |

### 5. 데이터 누수 (Data Leakage) 방지

스케일링을 적용할 때는 학습 데이터와 테스트 데이터를 구분해야 한다.

**올바른 방법**

```python
scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
```

- `fit_transform()`: 데이터에서 변환 기준을 학습하고 변환한다.
- `transform()`: 이미 학습한 기준을 이용하여 데이터를 변환한다.

학습 데이터에 `fit_transform()`을 적용하고, 테스트 데이터에는 `transform()`만 적용한다.

**잘못된 방법**

```python
# 주의: 데이터 분리 전에 전체 데이터로 스케일러를 학습하는 방식
X_scaled = StandardScaler().fit_transform(X)
```

이렇게 전체 데이터를 먼저 스케일링하면 테스트 데이터의 통계 정보가 변환 기준에 포함될 수 있다.

이는 데이터 누수의 원인이 될 수 있으므로 일반적으로 데이터를 먼저 분리한 뒤 스케일링을 적용한다.

실무에서는 `Pipeline`을 활용하면 전처리와 모델 학습 과정을 안전하게 연결할 수 있다.

**핵심:** KNN처럼 거리 기반인 알고리즘에서는 스케일링이 특히 중요하며, 스케일러는 학습 데이터로만 학습해야 한다.

---

## 📃 f. Project (프로젝트)

### 1. 분류 프로젝트의 기본 진행 순서

1. 데이터 불러오기 및 구조 확인
2. 결측치와 이상치 확인 및 처리
3. 입력 특성 `X`와 타깃 `y` 분리
4. 학습 데이터와 테스트 데이터 분리
5. 필요한 경우 특성 스케일링
6. Logistic Regression 또는 KNN 모델 학습
7. 예측 결과 확인
8. 혼동 행렬과 평가 지표로 성능 평가
9. 모델별 결과 비교 및 개선

### 2. 핵심 실습 코드: 스케일링과 KNN

다음 예제는 데이터 분리, 특성 스케일링, KNN 모델 학습 및 평가를 한 번에 수행한다.

```python
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)

# 1. 입력 특성과 타깃 분리
X = df.drop(columns=['target'])
y = df['target']

# 2. 학습 데이터와 테스트 데이터 분리
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# 3. 특성 스케일링
scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 4. KNN 모델 생성 및 학습
model = KNeighborsClassifier(n_neighbors=5)
model.fit(X_train_scaled, y_train)

# 5. 예측
y_pred = model.predict(X_test_scaled)

# 6. 평가
print("Accuracy:", accuracy_score(y_test, y_pred))

print("Confusion Matrix:")
print(confusion_matrix(y_test, y_pred))

print("Classification Report:")
print(classification_report(y_test, y_pred))
```

> ⚠️ `df`는 Pandas DataFrame이며, `target`은 예시 타깃 컬럼명이다. 실제 데이터에 맞게 변경해야 한다.

### 3. 주요 설정 설명

| 설정 | 의미 |
|---|---|
| `test_size=0.2` | 전체 데이터 중 20%를 테스트 데이터로 사용 |
| `random_state=42` | 데이터 분할 결과를 재현할 수 있도록 설정 |
| `stratify=y` | 분류 클래스의 비율이 학습·테스트 데이터에 가능한 한 비슷하게 유지되도록 설정 |
| `StandardScaler()` | 특성의 평균과 표준편차를 기준으로 스케일링 |
| `n_neighbors=5` | 가까운 이웃 5개를 이용해 예측 |
| `classification_report()` | 정밀도, 재현율, F1-score 등의 평가 결과 출력 |

`stratify=y`는 클래스별 데이터 비율을 유지하는 데 도움이 된다. 다만 각 클래스에 데이터가 너무 적거나 데이터 분할 조건이 적절하지 않으면 사용할 수 없는 경우도 있다.

### 4. Logistic Regression과 KNN 비교 실습

두 모델을 같은 데이터 분할과 동일한 평가 기준으로 비교할 수 있다.

```python
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, f1_score

# 로지스틱 회귀 파이프라인
logistic_model = make_pipeline(
    StandardScaler(),
    LogisticRegression(max_iter=1000)
)

# KNN 파이프라인
knn_model = make_pipeline(
    StandardScaler(),
    KNeighborsClassifier(n_neighbors=5)
)

# 모델 학습
logistic_model.fit(X_train, y_train)
knn_model.fit(X_train, y_train)

# 예측
logistic_pred = logistic_model.predict(X_test)
knn_pred = knn_model.predict(X_test)

# 성능 비교
print("Logistic Regression")
print("Accuracy:", accuracy_score(y_test, logistic_pred))
print("F1-score:", f1_score(y_test, logistic_pred))

print("\nKNN")
print("Accuracy:", accuracy_score(y_test, knn_pred))
print("F1-score:", f1_score(y_test, knn_pred))
```

이 예제에서는 `Pipeline`을 사용하여 스케일링과 모델 학습을 연결했다.

모델을 학습할 때 스케일러는 학습 데이터에 대해서만 변환 기준을 계산하고, 예측할 때는 해당 기준으로 테스트 데이터를 변환한다.

※ 이 예제는 이진 분류를 기준으로 한다. 다중 클래스 분류에서는 `f1_score()`의 `average` 설정 등을 목적에 맞게 지정해야 할 수 있다.

---

## ✅ 핵심 요약

- **분류(Classification)** 는 데이터를 특정 범주로 나누는 문제다.
- **로지스틱 회귀(Logistic Regression)** 는 입력 데이터를 바탕으로 클래스별 확률을 계산하고 클래스를 예측한다.
- **혼동 행렬(Confusion Matrix)** 은 TP, TN, FP, FN을 이용해 실제값과 예측값의 관계를 정리한다.
- **Accuracy**는 전체 예측 중 정답의 비율이다.
- **Precision**은 양성으로 예측한 것 중 실제 양성의 비율이다.
- **Recall**은 실제 양성 중 모델이 찾아낸 비율이다.
- **F1-score**는 Precision과 Recall의 조화평균이다.
- **ROC-AUC**는 다양한 임계값에서 모델의 클래스 구분 능력을 평가한다.
- **KNN**은 가까운 K개의 이웃을 이용하여 클래스를 예측한다.
- **Feature Scaling**은 특성의 단위와 범위를 조정하는 과정이다.
- **StandardScaler**는 평균 0, 표준편차 1을 기준으로 표준화한다.
- **MinMaxScaler**는 일반적으로 데이터를 0~1 범위로 변환한다.
- 스케일러는 학습 데이터로만 학습하고, 테스트 데이터에는 같은 변환 기준을 적용한다.
- `Pipeline`을 활용하면 전처리와 모델 학습을 하나의 흐름으로 연결할 수 있다.

---

## 🎯 학습 목표

- [ ] 분류와 회귀의 차이를 설명할 수 있다.
- [ ] 이진 분류, 다중 클래스 분류, 다중 레이블 분류를 구분할 수 있다.
- [ ] 로지스틱 회귀와 시그모이드 함수의 역할을 이해할 수 있다.
- [ ] `predict()`와 `predict_proba()`의 차이를 설명할 수 있다.
- [ ] 혼동 행렬의 TP, TN, FP, FN을 구분할 수 있다.
- [ ] Accuracy, Precision, Recall, F1-score, ROC-AUC의 의미를 이해할 수 있다.
- [ ] KNN의 K 값이 예측 결과에 미치는 영향을 설명할 수 있다.
- [ ] 표준화와 Min-Max 정규화의 차이를 설명할 수 있다.
- [ ] 데이터 누수를 방지하며 특성 스케일링을 적용할 수 있다.
- [ ] Logistic Regression과 KNN을 학습시키고 평가 지표로 성능을 비교할 수 있다.

**📌 한 줄 정리:** 로지스틱 회귀는 클래스별 확률을 이용해 분류하고, KNN은 주변 데이터와의 거리를 이용해 분류하며, 적절한 평가 지표와 특성 스케일링을 통해 모델의 성능을 확인할 수 있다.
