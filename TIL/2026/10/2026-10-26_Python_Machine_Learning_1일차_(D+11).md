# Python : Machine Learning 1일차 (D+11)

> 날짜: 2026-10-26
> 원본 노션: [링크](https://app.notion.com/p/Python-Machine-Learning-1-D-11-409d9e129df78005bbc6e2ed35c1246d)

---

- [📚 3주차 Python Machine Learning](#notion-heading-40ad9e129df780ed8fe5ffadb4269dd2)
  - [📕 A. Machine Learning, Linear Regression (2026.10.26 Mon)](#notion-heading-40ad9e129df780ad8532f03150143f9f)
    - [📃 a. Machine Learning (머신러닝)](#notion-heading-40ad9e129df78094b208e8fe757c805d)
    - [📃 b. Linear Regression (선형 회귀)](#notion-heading-40ad9e129df780e7b8b2c3ac05bbd1a3)
    - [📃 c. Error Metrics (에러 지표, 평가 지표)](#notion-heading-40ad9e129df780b5839fe72b7406641c)
    - [📃 d. scikit-learn (사이킷런)](#notion-heading-40ad9e129df780b39056e6eec8437c24)
    - [📃 e. Multiple Linear Regression (다중 선형 회귀)](#notion-heading-40ad9e129df78081b22bd3248ddcc3b0)
    - [📃 f. Project (프로젝트)](#notion-heading-40ad9e129df780ebb6ceda3621719bc7)
  - [✅ 핵심 요약](#notion-heading-40ad9e129df78020b309c4daafb911f1)

<a name="notion-heading-40ad9e129df780ed8fe5ffadb4269dd2"></a>

# 📚 3주차 Python Machine Learning

**2026.10.26 Mon ~ 2026.10.30 Fri | Total: 5 days**

<a name="notion-heading-40ad9e129df780ad8532f03150143f9f"></a>

## 📕 A. Machine Learning, Linear Regression (2026.10.26 Mon)

<a name="notion-heading-40ad9e129df78094b208e8fe757c805d"></a>

### 📃 a. Machine Learning (머신러닝)

**머신러닝(Machine Learning)** 은 데이터를 학습하여 새로운 데이터의 결과를 예측하는 기술이다.

- **데이터(Data)**: 모델이 학습하는 자료
- **특성(Feature, X)**: 예측에 사용하는 입력값
- **타깃(Target, y)**: 예측하고자 하는 정답
- **모델(Model)**: 데이터의 패턴을 학습한 결과물
- **학습(Training)**: 데이터에서 패턴을 찾는 과정
- **예측(Prediction)**: 학습한 모델로 새로운 결과를 추정하는 과정

**머신러닝의 대표적인 유형**

- 지도학습(Supervised Learning): 정답이 있는 데이터로 학습
  - 회귀(Regression): 가격, 온도 등 연속적인 값 예측
  - 분류(Classification): 합격/불합격, 정상/고장 등 범주 예측
- 비지도학습(Unsupervised Learning): 정답 없이 데이터의 패턴이나 군집 탐색
- 강화학습(Reinforcement Learning): 보상을 바탕으로 행동 전략 학습

**일반적인 머신러닝 과정**

1. 데이터 수집
1. 데이터 전처리
1. 학습 데이터와 테스트 데이터 분리
1. 모델 선택 및 학습
1. 예측 및 성능 평가
1. 모델 개선

<a name="notion-heading-40ad9e129df780e7b8b2c3ac05bbd1a3"></a>

### 📃 b. Linear Regression (선형 회귀)

**선형 회귀(Linear Regression)** 는 입력값과 결과값 사이의 선형 관계를 학습하여 연속적인 값을 예측하는 회귀 모델이다.

예: 공부 시간으로 시험 점수 예측, 주택 면적으로 집값 예측

**단순 선형 회귀 공식**

`ŷ = b₀ + b₁x`

- `x`: 입력값(독립변수)
- `ŷ`: 모델이 예측한 값
- `b₀`: 절편(Intercept)
- `b₁`: 기울기 또는 회귀 계수(Coefficient)

모델은 실제값과 예측값의 차이가 작아지도록 적절한 계수를 찾는다.

- **실제값(y)**: 데이터에 기록된 정답
- **예측값(ŷ)**: 모델이 계산한 값
- **잔차(Residual)**: 실제값과 예측값의 차이

<a name="notion-heading-40ad9e129df780b5839fe72b7406641c"></a>

### 📃 c. Error Metrics (에러 지표, 평가 지표)

회귀 모델이 얼마나 정확하게 예측하는지 평가하는 지표이다.

| 지표 | 의미 | 특징 |
| --- | --- | --- |
| MAE | 실제값과 예측값 차이의 절댓값 평균 | 직관적으로 이해하기 쉬움 |
| MSE | 오차를 제곱한 값의 평균 | 큰 오차에 더 큰 페널티 |
| RMSE | MSE에 제곱근을 적용 | 타깃과 같은 단위로 해석 가능 |
| R² Score | 모델이 데이터의 변동을 얼마나 설명하는지 나타내는 지표 | 일반적으로 1에 가까울수록 좋음 |

**핵심**

- MAE, MSE, RMSE는 일반적으로 **작을수록 좋다**.
- R² Score는 일반적으로 **1에 가까울수록 좋다**.
- R²가 음수라면 테스트 데이터에서 평균값만 예측하는 기준 모델보다 성능이 나쁠 수 있다.

<a name="notion-heading-40ad9e129df780b39056e6eec8437c24"></a>

### 📃 d. scikit-learn (사이킷런)

**scikit-learn** 은 Python에서 머신러닝 모델을 만들고 학습·예측·평가할 때 사용하는 라이브러리이다.

주요 기능:

- 데이터 분리: `train_test_split()`
- 모델 생성: `LinearRegression()`
- 모델 학습: `fit()`
- 예측: `predict()`
- 성능 평가: `mean_absolute_error()`, `mean_squared_error()`, `r2_score()`

**기본 예제**

```text
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

# 입력 특성과 정답 분리
X = df[['area']]
y = df['price']

# 학습 데이터와 테스트 데이터 분리
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 모델 생성 및 학습
model = LinearRegression()
model.fit(X_train, y_train)

# 예측
y_pred = model.predict(X_test)

# 평가
print("MAE:", mean_absolute_error(y_test, y_pred))
print("RMSE:", np.sqrt(mean_squared_error(y_test, y_pred)))
print("R²:", r2_score(y_test, y_pred))
```

※ `df`는 데이터프레임이며, `area`와 `price`는 예시 컬럼명이다. 실제 데이터에 맞게 변경해야 한다.

**주요 용어**

- `X_train`, `y_train`: 모델 학습에 사용하는 데이터
- `X_test`, `y_test`: 학습에 사용하지 않고 성능 평가에 사용하는 데이터
- `test_size=0.2`: 전체 데이터의 20%를 테스트용으로 사용
- `random_state=42`: 데이터 분할 결과를 재현하기 위한 설정
- `fit()`: 모델 학습
- `predict()`: 학습한 모델로 예측

<a name="notion-heading-40ad9e129df78081b22bd3248ddcc3b0"></a>

### 📃 e. Multiple Linear Regression (다중 선형 회귀)

**다중 선형 회귀** 는 여러 개의 입력 특성을 사용하여 하나의 연속적인 값을 예측하는 모델이다.

예: 집값을 예측할 때 면적, 방 개수, 건물 연식 등을 함께 사용한다.

**공식**

`ŷ = b₀ + b₁x₁ + b₂x₂ + ... + bₙxₙ`

- `x₁, x₂, ...`: 여러 입력 특성
- `b₁, b₂, ...`: 각 특성에 대한 회귀 계수
- `b₀`: 절편

**코드 예제**

```text
from sklearn.linear_model import LinearRegression

# 여러 특성 사용
X = df[['area', 'rooms', 'building_age']]
y = df['price']

model = LinearRegression()
model.fit(X, y)

y_pred = model.predict(X)
```

※ 위 예제는 개념을 보여주기 위한 코드이다. 실제 모델 평가에서는 학습 데이터와 테스트 데이터를 분리해야 한다.

**단순 선형 회귀와 다중 선형 회귀의 차이**

| 구분 | 단순 선형 회귀 | 다중 선형 회귀 |
| --- | --- | --- |
| 입력 특성 개수 | 1개 | 2개 이상 |
| 예시 | 면적으로 집값 예측 | 면적, 방 개수, 연식으로 집값 예측 |
| 장점 | 구조가 단순하고 이해하기 쉬움 | 여러 특성을 함께 고려 가능 |

<a name="notion-heading-40ad9e129df780ebb6ceda3621719bc7"></a>

### 📃 f. Project (프로젝트)

머신러닝 프로젝트는 실제 데이터를 이용해 모델을 만들고 성능을 평가하는 과정이다.

**기본 진행 순서**

1. 데이터 불러오기
1. 데이터 구조 확인: `head()`, `info()`, `describe()`
1. 결측치 및 이상치 확인
1. 입력 특성 `X`와 타깃 `y` 분리
1. 학습 데이터와 테스트 데이터 분리
1. 모델 생성 및 학습
1. 예측값 계산
1. 평가 지표로 성능 확인
1. 결과 해석 및 모델 개선

**프로젝트에서 주의할 점**

- 타깃값이나 정답에 해당하는 정보를 입력 특성에 포함하지 않는다.
- 데이터 분리 후 테스트 데이터는 모델 학습에 사용하지 않는다.
- 평가 지표 하나만 보지 말고 여러 지표를 함께 확인한다.
- 특성 간 상관관계가 높으면 다중공선성 문제가 생길 수 있다.
- 학습 데이터 성능만 좋고 테스트 데이터 성능이 나쁘다면 과적합 가능성을 의심한다.

---

<a name="notion-heading-40ad9e129df78020b309c4daafb911f1"></a>

## ✅ 핵심 요약

- 머신러닝은 데이터에서 패턴을 학습하여 예측하는 기술이다.
- 회귀는 연속적인 값을 예측하고, 분류는 범주를 예측한다.
- 선형 회귀는 입력 특성과 결과 사이의 선형 관계를 학습한다.
- MAE, MSE, RMSE, R² Score로 회귀 모델의 성능을 평가할 수 있다.
- `scikit-learn`의 `fit()`은 학습, `predict()`는 예측을 담당한다.
- 단순 선형 회귀는 입력 특성 1개, 다중 선형 회귀는 여러 개를 사용한다.
- 모델을 평가할 때는 학습 데이터와 테스트 데이터를 구분해야 한다.

**🎯 학습 목표:** 데이터를 전처리하고 선형 회귀 모델을 학습시킨 뒤, 평가 지표를 사용해 예측 성능을 해석할 수 있다.
