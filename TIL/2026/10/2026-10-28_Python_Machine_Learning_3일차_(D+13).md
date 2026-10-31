# Python : Machine Learning 3일차 (D+13)

> 📚 **3주차 Python Machine Learning**  
> 📅 2026.10.26 Mon ~ 2026.10.30 Fri | Total: 5 days

## 📕 C. Naive Bayes, Decision Tree (2026.10.28 Wed)

## 📑 목차

- [a. Naïve Bayes (나이브 베이즈)](#-a-naïve-bayes-나이브-베이즈)
- [b. Decision Tree (결정 트리)](#-b-decision-tree-결정-트리)
- [c. Hyperparameter Tuning (하이퍼파라미터 튜닝)](#-c-hyperparameter-tuning-하이퍼파라미터-튜닝)
- [d. Project (프로젝트)](#-d-project-프로젝트)
- [핵심 요약](#-핵심-요약)

---

## 📃 a. Naïve Bayes (나이브 베이즈)

### 1. 나이브 베이즈란?

**나이브 베이즈(Naive Bayes)** 는 베이즈 정리를 기반으로 데이터가 특정 클래스에 속할 확률을 계산하여 분류하는 알고리즘이다.

특성들이 서로 **조건부 독립(Conditional Independence)** 이라고 가정한다는 점이 특징이다.

실제 데이터에서 특성들이 완전히 독립적이지 않더라도 이 가정을 사용하면 계산을 단순화할 수 있다.

**주요 활용 사례**

- 이메일의 단어를 분석하여 스팸 여부 분류
- 문서의 주제를 자동으로 분류
- 텍스트 감정 분석
- 특정 측정값을 바탕으로 장비 상태 분류

### 2. 베이즈 정리 (Bayes' Theorem)

베이즈 정리는 새로운 증거가 주어졌을 때 어떤 사건이 발생할 확률을 계산하는 방법이다.

**공식**

`P(A|B) = P(B|A) × P(A) / P(B)`

| 기호 | 의미 |
|---|---|
| `P(A|B)` | B라는 증거가 주어졌을 때 A일 확률 |
| `P(B|A)` | A일 때 B라는 증거가 관찰될 확률 |
| `P(A)` | 사전 확률 (Prior Probability) |
| `P(B)` | 증거 B가 관찰될 확률 |

**쉽게 이해하기**

스팸 이메일을 분류하는 상황을 생각해 보자.

- `A`: 이메일이 스팸이다.
- `B`: 이메일에 특정 단어가 포함되어 있다.

이때 `P(A|B)`는 특정 단어가 포함된 이메일이 스팸일 확률이다.

나이브 베이즈는 이러한 확률 관계를 이용하여 새로운 데이터가 어떤 클래스에 속하는지 예측한다.

### 3. 조건부 독립 가정

나이브 베이즈는 각 특성이 클래스가 주어졌을 때 서로 조건부 독립이라고 가정한다.

예를 들어 이메일에 다음과 같은 단어가 포함되어 있다고 가정하자.

- 무료
- 할인
- 당첨

실제 언어에서는 이러한 단어들이 서로 연관되어 나타날 수 있다. 하지만 나이브 베이즈는 스팸 여부가 주어졌을 때 각 단어의 출현 여부를 독립적으로 다룬다.

이 가정 덕분에 여러 특성이 존재하더라도 계산을 비교적 간단하게 수행할 수 있다.

**주의:** 조건부 독립은 모든 데이터에서 실제로 성립한다는 의미가 아니라, 알고리즘이 사용하는 가정이다.

### 4. scikit-learn의 주요 모델

| 모델 | 특징 | 활용 예시 |
|---|---|---|
| `GaussianNB` | 특성의 클래스별 분포가 정규분포를 따른다고 가정 | 연속형 측정 데이터 |
| `MultinomialNB` | 특성값이 빈도나 횟수 형태일 때 적합 | 단어 출현 횟수 |
| `BernoulliNB` | 특성이 0 또는 1의 이진 형태일 때 적합 | 단어 출현 여부 |

**모델 선택 기준**

- 연속형 수치 데이터: `GaussianNB`
- 단어 출현 횟수와 같은 비음수 빈도 데이터: `MultinomialNB`
- 단어의 출현 여부처럼 이진 특성: `BernoulliNB`

### 5. 기본 코드

```python
from sklearn.naive_bayes import GaussianNB

# 모델 생성
model = GaussianNB()

# 모델 학습
model.fit(X_train, y_train)

# 예측
y_pred = model.predict(X_test)
```

| 코드 | 의미 |
|---|---|
| `GaussianNB()` | 가우시안 나이브 베이즈 모델 생성 |
| `fit()` | 학습 데이터에서 클래스별 확률 분포 등을 학습 |
| `predict()` | 학습한 모델을 이용해 클래스 예측 |

### 6. 장점과 주의점

**장점**
- 학습과 예측이 비교적 빠르다.
- 구현이 간단하다.
- 특성이 많더라도 효율적으로 처리할 수 있다.
- 텍스트 분류와 같은 문제에서 유용하다.

**주의점**
- 조건부 독립 가정이 실제 데이터와 맞지 않을 수 있다.
- 데이터의 특성에 맞는 나이브 베이즈 모델을 선택해야 한다.
- 확률 추정이 실제 확률과 정확히 일치한다고 보장할 수 없다.

---

## 📃 b. Decision Tree (결정 트리)

### 1. 결정 트리란?

**결정 트리(Decision Tree)** 는 데이터를 여러 조건으로 나누면서 최종 결과를 예측하는 머신러닝 알고리즘이다.

쉽게 말해, 여러 질문에 답하면서 정답을 찾아가는 의사결정 과정과 비슷하다.

분류 문제에서는 클래스를 예측하고, 회귀 문제에서는 연속적인 숫자를 예측할 수 있다.

이번 학습에서는 분류 모델인 `DecisionTreeClassifier`를 중심으로 살펴본다.

### 2. 예시: 서버 고장 여부 예측

서버의 CPU 사용률, 온도, 과거 오류 기록을 이용하여 고장 여부를 예측한다고 가정하자.

결정 트리는 다음과 같은 조건으로 데이터를 나눌 수 있다.

1. CPU 사용률이 90% 이상인가?
2. 온도가 80°C 이상인가?
3. 과거 오류 기록이 있는가?
4. 조건에 따라 정상 또는 고장으로 분류한다.

실제 모델은 학습 데이터를 바탕으로 어떤 특성과 조건을 이용해 나누는 것이 적절한지 학습한다.

### 3. 결정 트리의 주요 용어

| 용어 | 영어 | 의미 |
|---|---|---|
| 루트 노드 | Root Node | 트리의 가장 처음에 위치한 노드 |
| 결정 노드 | Decision Node | 조건에 따라 데이터를 분할하는 노드 |
| 리프 노드 | Leaf Node | 더 이상 분할하지 않고 최종 예측을 수행하는 노드 |
| 깊이 | Depth | 루트에서 아래쪽으로 얼마나 깊게 분기하는지 나타내는 값 |
| 분할 | Split | 특정 조건에 따라 데이터를 여러 그룹으로 나누는 과정 |
| 과적합 | Overfitting | 학습 데이터에 지나치게 맞춰져 새로운 데이터에서 성능이 떨어지는 현상 |

### 4. 데이터를 나누는 기준

결정 트리는 데이터를 분할할 때 클래스가 얼마나 섞여 있는지 등을 측정하여 적절한 분할 기준을 선택한다.

#### ① Gini Impurity (지니 불순도)

지니 불순도는 한 노드에 서로 다른 클래스가 얼마나 섞여 있는지 측정하는 지표다.

- 불순도가 낮으면 특정 클래스에 데이터가 집중되어 있다는 의미다.
- 불순도가 높으면 여러 클래스가 섞여 있다는 의미다.

#### ② Entropy (엔트로피)

엔트로피는 데이터에 포함된 클래스의 불확실성을 측정하는 지표다.

- 엔트로피가 낮으면 클래스의 불확실성이 낮다.
- 엔트로피가 높으면 클래스가 여러 종류로 섞여 있을 가능성이 크다.

일반적으로 결정 트리는 데이터를 분할한 뒤 불순도나 엔트로피가 얼마나 감소하는지를 고려한다.

### 5. 기본 코드

```python
from sklearn.tree import DecisionTreeClassifier

# 모델 생성
model = DecisionTreeClassifier(
    max_depth=5,
    random_state=42
)

# 모델 학습
model.fit(X_train, y_train)

# 예측
y_pred = model.predict(X_test)
```

**주요 설정**

- `max_depth=5`: 트리의 최대 깊이를 5로 제한한다.
- `random_state=42`: 동일한 조건에서 결과를 재현하기 쉽도록 난수 설정을 고정한다.

### 6. 주요 하이퍼파라미터

**하이퍼파라미터(Hyperparameter)** 는 모델 학습 전에 사용자가 설정하는 값이다.

| 파라미터 | 의미 |
|---|---|
| `max_depth` | 트리의 최대 깊이 |
| `min_samples_split` | 노드를 분할하는 데 필요한 최소 샘플 수 |
| `min_samples_leaf` | 리프 노드에 필요한 최소 샘플 수 |
| `criterion` | 분할 기준. 예: `gini`, `entropy`, `log_loss` |

**각 설정의 효과**

- `max_depth`를 작게 설정하면 트리가 단순해질 수 있다.
- `min_samples_split`을 크게 설정하면 노드가 쉽게 분할되지 않는다.
- `min_samples_leaf`를 크게 설정하면 각 리프 노드가 일정 수 이상의 데이터를 포함하도록 제한할 수 있다.
- `criterion`은 노드를 분할할 때 사용할 기준을 선택한다.

이러한 설정은 트리의 복잡도와 예측 성능에 영향을 준다.

### 7. 장점과 주의점

**장점**
- 조건과 예측 과정을 비교적 이해하기 쉽다.
- 특성 간 비선형 관계를 학습할 수 있다.
- 일반적인 결정 트리는 특성 스케일링이 필수는 아니다.
- 수치형 데이터와 범주형 데이터를 처리하는 방법을 적절히 구성하면 다양한 문제에 적용할 수 있다.

**주의점**
- 트리가 너무 깊으면 과적합이 발생할 수 있다.
- 데이터가 조금 바뀌어도 트리 구조가 달라질 수 있다.
- 트리가 복잡해질수록 전체 의사결정 과정을 해석하기 어려워질 수 있다.

---

## 📃 c. Hyperparameter Tuning (하이퍼파라미터 튜닝)

### 1. 하이퍼파라미터 튜닝이란?

**하이퍼파라미터 튜닝(Hyperparameter Tuning)** 은 여러 모델 설정을 비교하여 성능이 좋은 조합을 찾는 과정이다.

예를 들어 다음과 같은 설정을 변경할 수 있다.

- 결정 트리의 최대 깊이: `max_depth`
- KNN의 이웃 수: `n_neighbors`
- 모델이 학습할 때 사용하는 규제 강도 등

### 2. Parameter와 Hyperparameter의 차이

| 구분 | 의미 | 예시 |
|---|---|---|
| Parameter (모델 파라미터) | 학습 과정에서 모델이 데이터로부터 학습하는 값 | 선형 회귀의 회귀 계수 |
| Hyperparameter (하이퍼파라미터) | 사용자가 설정하거나 탐색하는 값 | 결정 트리의 `max_depth` |

쉽게 말해, 모델 파라미터는 학습 과정에서 모델이 찾는 값이고 하이퍼파라미터는 모델의 학습 방식이나 복잡도 등을 조절하는 값이다.

### 3. GridSearchCV

`GridSearchCV`는 사용자가 지정한 하이퍼파라미터 후보의 **모든 조합을 탐색**하는 도구다.

**코드 예제**

```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV

# 모델 생성
model = DecisionTreeClassifier(random_state=42)

# 탐색할 하이퍼파라미터 지정
param_grid = {
    'max_depth': [3, 5, 10, None],
    'min_samples_split': [2, 5, 10]
}

# 그리드 서치 설정
grid_search = GridSearchCV(
    estimator=model,
    param_grid=param_grid,
    cv=5,
    scoring='accuracy'
)

# 학습 데이터로 탐색
grid_search.fit(X_train, y_train)

# 결과 확인
print("최적 파라미터:", grid_search.best_params_)
print("최고 CV 점수:", grid_search.best_score_)

# 최적 모델
best_model = grid_search.best_estimator_
```

**주요 설정**

| 설정 | 의미 |
|---|---|
| `estimator` | 튜닝할 모델 |
| `param_grid` | 탐색할 하이퍼파라미터 후보 |
| `cv=5` | 5개 폴드를 이용한 교차 검증 |
| `scoring='accuracy'` | 정확도를 기준으로 성능 평가 |
| `best_params_` | 가장 좋은 점수를 얻은 하이퍼파라미터 조합 |
| `best_score_` | 교차 검증에서 얻은 최고 평균 점수 |
| `best_estimator_` | 최적 하이퍼파라미터가 적용된 모델 |

위 예제에서는 다음과 같이 조합 수를 계산할 수 있다.

- `max_depth`: 4개
- `min_samples_split`: 3개
- 전체 조합: `4 × 3 = 12개`

각 조합을 5개 폴드로 교차 검증하므로 일반적으로 총 60회의 모델 학습이 수행된다.

### 4. RandomizedSearchCV

`RandomizedSearchCV`는 지정한 후보 범위에서 **일정 횟수만큼 조합을 무작위로 탐색**하는 도구다.

**코드 예제**

```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import RandomizedSearchCV

# 모델 생성
model = DecisionTreeClassifier(random_state=42)

# 탐색할 하이퍼파라미터 후보
param_distributions = {
    'max_depth': [3, 5, 10, 15, None],
    'min_samples_split': [2, 5, 10, 20],
    'min_samples_leaf': [1, 2, 5, 10]
}

# 랜덤 서치 설정
random_search = RandomizedSearchCV(
    estimator=model,
    param_distributions=param_distributions,
    n_iter=10,
    cv=5,
    scoring='accuracy',
    random_state=42
)

# 학습 데이터로 탐색
random_search.fit(X_train, y_train)

# 결과 확인
print("최적 파라미터:", random_search.best_params_)
print("최고 CV 점수:", random_search.best_score_)

# 최적 모델
best_model = random_search.best_estimator_
```

`n_iter=10`은 10개의 하이퍼파라미터 조합을 탐색한다는 뜻이다.

`cv=5`를 사용하면 일반적으로 10개 조합에 대해 총 50회의 모델 학습이 수행된다.

### 5. GridSearchCV와 RandomizedSearchCV 비교

| 구분 | GridSearchCV | RandomizedSearchCV |
|---|---|---|
| 탐색 방식 | 지정한 모든 조합 | 지정한 횟수만큼 조합을 무작위로 탐색 |
| 계산 비용 | 조합이 많으면 커짐 | 탐색 횟수로 조절 가능 |
| 적합한 상황 | 후보 조합이 적을 때 | 후보가 많고 탐색 범위가 넓을 때 |
| 장점 | 지정된 후보를 빠짐없이 비교 | 제한된 계산 비용으로 넓은 범위를 탐색 가능 |
| 주의점 | 조합 수가 많으면 시간이 오래 걸림 | 지정한 횟수에 따라 좋은 조합을 찾지 못할 수 있음 |

**핵심:** 후보가 적으면 GridSearchCV, 탐색 공간이 넓으면 RandomizedSearchCV를 고려할 수 있다.

### 6. 교차 검증 (Cross-Validation)

**교차 검증(Cross-Validation)** 은 데이터를 여러 부분으로 나누어 학습과 검증을 반복하는 방법이다.

예를 들어 `cv=5`라면 데이터를 5개 폴드로 나눈다.

1. 첫 번째 폴드를 검증용으로 사용하고 나머지 4개로 학습한다.
2. 두 번째 폴드를 검증용으로 사용하고 나머지 4개로 학습한다.
3. 같은 과정을 반복한다.
4. 총 5회의 검증 점수를 계산한다.
5. 각 점수의 평균을 이용해 모델 설정을 비교한다.

이 방법은 특정 데이터 분할에만 의존하지 않고 모델의 성능을 비교하는 데 도움이 된다.

### 7. 하이퍼파라미터 튜닝 시 주의사항

- 하이퍼파라미터 선택에는 학습 데이터 내부의 교차 검증을 사용한다.
- 최종 성능은 튜닝에 사용하지 않은 테스트 데이터로 평가한다.
- 테스트 데이터 성능을 반복해서 확인하며 모델을 조정하면 테스트 데이터에 과도하게 맞출 위험이 있다.
- `best_score_`는 교차 검증 점수이며 최종 테스트 점수와 같지는 않다.
- `scoring`은 문제의 목적에 맞게 선택해야 한다. 예를 들어 클래스 불균형이 심하다면 Accuracy 외에 F1-score나 Recall 등을 고려할 수 있다.

---

## 📃 d. Project (프로젝트)

### 1. 프로젝트 목표

나이브 베이즈와 결정 트리를 사용하여 분류 모델을 만들고, 하이퍼파라미터 튜닝으로 성능을 비교한다.

### 2. 기본 진행 순서

1. 데이터 불러오기 및 구조 확인
2. 결측치와 이상치 확인 및 처리
3. 입력 특성 `X`와 타깃 `y` 분리
4. 학습 데이터와 테스트 데이터 분리
5. 모델 생성 및 학습
6. 예측 및 분류 평가 지표 확인
7. `GridSearchCV` 또는 `RandomizedSearchCV`로 하이퍼파라미터 튜닝
8. 최적 모델을 테스트 데이터로 평가
9. 튜닝 전후 성능 비교

### 3. 모델별 기본 코드

```python
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import (
    accuracy_score,
    classification_report
)

# 1. Naive Bayes 모델
nb_model = GaussianNB()

nb_model.fit(X_train, y_train)

nb_pred = nb_model.predict(X_test)


# 2. Decision Tree 모델
tree_model = DecisionTreeClassifier(
    max_depth=5,
    random_state=42
)

tree_model.fit(X_train, y_train)

tree_pred = tree_model.predict(X_test)


# 3. 성능 비교
print("Naive Bayes Accuracy:", accuracy_score(y_test, nb_pred))
print("Decision Tree Accuracy:", accuracy_score(y_test, tree_pred))


# 4. 결정 트리 평가 보고서
print("Decision Tree Report:")
print(classification_report(y_test, tree_pred))
```

※ `X_train`, `X_test`, `y_train`, `y_test`는 미리 분리한 데이터다. `GaussianNB`는 일반적인 수치형 입력 데이터를 가정하므로 문자열이나 결측치가 있다면 적절한 전처리가 필요할 수 있다.

### 4. 결정 트리 하이퍼파라미터 튜닝 및 최종 평가

```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV
from sklearn.metrics import accuracy_score, classification_report

# 모델 생성
tree_model = DecisionTreeClassifier(random_state=42)

# 탐색할 하이퍼파라미터
param_grid = {
    'max_depth': [3, 5, 10, None],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 5]
}

# GridSearchCV 설정
grid_search = GridSearchCV(
    estimator=tree_model,
    param_grid=param_grid,
    cv=5,
    scoring='accuracy',
    n_jobs=-1
)

# 학습 데이터에서 하이퍼파라미터 탐색
grid_search.fit(X_train, y_train)

# 최적 모델 확인
best_model = grid_search.best_estimator_

print("최적 파라미터:", grid_search.best_params_)
print("최고 CV 점수:", grid_search.best_score_)

# 테스트 데이터로 최종 평가
y_pred = best_model.predict(X_test)

print("Test Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))
```

**코드 해설**

- `param_grid`: 탐색할 하이퍼파라미터 후보를 지정한다.
- `cv=5`: 5개 폴드를 이용해 교차 검증한다.
- `n_jobs=-1`: 사용 가능한 CPU 자원을 활용해 작업을 병렬 처리하도록 설정한다.
- `best_estimator_`: 교차 검증 결과를 바탕으로 선택된 최적 모델이다.
- `best_score_`: 교차 검증에서 얻은 최고 평균 점수다.
- `accuracy_score()`: 최적 모델의 테스트 정확도를 계산한다.

**주의:** 최적 모델을 선택한 뒤 테스트 데이터는 최종 평가에 사용한다. 테스트 결과가 기대에 미치지 못하더라도 테스트 점수만을 기준으로 반복적으로 하이퍼파라미터를 조정하지 않도록 한다.

### 5. 프로젝트 결과 비교 방법

| 비교 항목 | 확인할 내용 |
|---|---|
| Accuracy | 전체 예측 중 정답의 비율 |
| Precision | 양성으로 예측한 데이터의 정확성 |
| Recall | 실제 양성 데이터를 찾아내는 비율 |
| F1-score | Precision과 Recall의 균형 |
| CV Score | 교차 검증에서 얻은 평균 성능 |
| Test Score | 최종 테스트 데이터에서 얻은 성능 |
| 학습 시간 | 모델 학습과 튜닝에 걸린 시간 |

클래스 불균형이 있다면 Accuracy만으로 모델을 비교하지 말고 Precision, Recall, F1-score 등도 함께 확인한다.

---

## ✅ 핵심 요약

- **Naive Bayes**는 베이즈 정리와 조건부 독립 가정을 이용해 확률 기반으로 분류한다.
- `GaussianNB`는 연속형 특성의 정규분포를 가정하고, `MultinomialNB`는 빈도 데이터, `BernoulliNB`는 이진 특성에 적합하다.
- **Decision Tree**는 조건에 따라 데이터를 분할하여 예측한다.
- **Gini Impurity**와 **Entropy**는 결정 트리의 분할 기준으로 사용할 수 있다.
- 트리가 지나치게 복잡하면 과적합이 발생할 수 있다.
- **Parameter**는 모델이 학습하는 값이고, **Hyperparameter**는 사용자가 설정하거나 탐색하는 값이다.
- **GridSearchCV**는 지정한 모든 조합을 탐색한다.
- **RandomizedSearchCV**는 지정한 횟수만큼 조합을 무작위로 탐색한다.
- **Cross-Validation**은 여러 데이터 분할을 이용해 모델 설정을 비교하는 방법이다.
- `best_score_`는 교차 검증 점수이며 최종 테스트 점수와는 다르다.
- 최종 성능 평가는 하이퍼파라미터 튜닝에 사용하지 않은 테스트 데이터로 수행한다.

---

## 🎯 학습 목표

- [ ] 나이브 베이즈의 기본 개념과 베이즈 정리를 설명할 수 있다.
- [ ] 조건부 독립 가정이 무엇인지 이해할 수 있다.
- [ ] `GaussianNB`, `MultinomialNB`, `BernoulliNB`의 차이를 설명할 수 있다.
- [ ] 결정 트리의 루트 노드, 결정 노드, 리프 노드의 차이를 이해할 수 있다.
- [ ] Gini Impurity와 Entropy의 역할을 설명할 수 있다.
- [ ] 결정 트리의 주요 하이퍼파라미터를 이해할 수 있다.
- [ ] Parameter와 Hyperparameter의 차이를 설명할 수 있다.
- [ ] GridSearchCV와 RandomizedSearchCV의 차이를 설명할 수 있다.
- [ ] 교차 검증의 목적과 `cv=5`의 의미를 이해할 수 있다.
- [ ] 하이퍼파라미터 튜닝 후 테스트 데이터로 모델 성능을 평가할 수 있다.

**📌 한 줄 정리:** 나이브 베이즈는 확률을 기반으로 분류하고, 결정 트리는 조건에 따라 데이터를 분할하여 분류하며, 하이퍼파라미터 튜닝과 교차 검증을 이용하면 모델 설정을 체계적으로 비교할 수 있다.
