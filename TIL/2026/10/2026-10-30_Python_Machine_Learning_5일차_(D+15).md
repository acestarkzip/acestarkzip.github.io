# Python : Machine Learning 5일차 (D+15)

> 날짜: 2026-10-30
> 원본 노션: [링크](https://app.notion.com/p/Python-Machine-Learning-5-D-15-409d9e129df7800e9903c392c062e486)

---

- [📚 3주차 Python Machine Learning (2026.10.26 Mon ~ 2026.10.30 Fri) | Total : 5 days](#notion-heading-40ad9e129df78076a4cedae725fe7d19)
  - [📕 E. Unsupervised Learning (2026.10.30 Fri)](#notion-heading-40ad9e129df780be81e9f6141b619be1)
    - [📃 a. Unsupervised Learning (비지도 학습)](#notion-heading-40ad9e129df78032a1aafc9f82e9e18e)
    - [📃 b. Clustering (군집화)](#notion-heading-40ad9e129df78007b95dffede95ad5bf)
    - [📃 c. Dimensionality Reduction (차원 축소)](#notion-heading-40ad9e129df78092b021dfa0f1c0d761)
    - [📃 d. Project (비지도 학습 프로젝트)](#notion-heading-40ad9e129df7806bb969e6c74d8a3733)
  - [📕 F. Project (2026.10.30 Fri)](#notion-heading-40ad9e129df7809ba7d7e61da06127a9)
    - [📃 a. 실습 (타이타닉 생존자)](#notion-heading-40ad9e129df780b79d2ce9dda406e89f)
  - [📌 3주차 Python Machine Learning 핵심 복습](#notion-heading-40ad9e129df7804e8f20f008af1980e7)

<a name="notion-heading-40ad9e129df78076a4cedae725fe7d19"></a>

# 📚 3주차 Python Machine Learning (2026.10.26 Mon ~ 2026.10.30 Fri) | Total : 5 days

<a name="notion-heading-40ad9e129df780be81e9f6141b619be1"></a>

## 📕 E. Unsupervised Learning (2026.10.30 Fri)

<a name="notion-heading-40ad9e129df78032a1aafc9f82e9e18e"></a>

### 📃 a. Unsupervised Learning (비지도 학습)

<!-- Notion block type not yet converted: heading_4 -->

- 비지도 학습(Unsupervised Learning)은 정답(Label)이 주어지지 않은 데이터를 이용하여 데이터 내부의 패턴이나 구조를 찾아내는 머신러닝 방법이다.
- 지도 학습은 입력 데이터와 정답을 함께 제공하지만, 비지도 학습은 정답 없이 데이터의 특징과 유사성을 분석한다.
- 데이터에 어떤 유형의 그룹이 존재하는지 미리 알지 못할 때 유용하다.

<!-- Notion block type not yet converted: heading_4 -->

| 구분 | 지도 학습 (Supervised Learning) | 비지도 학습 (Unsupervised Learning) |
| --- | --- | --- |
| 데이터 | 입력 데이터 + 정답(Label) | 입력 데이터 |
| 목적 | 정답 예측 | 데이터의 패턴 및 구조 발견 |
| 대표적인 문제 | 분류, 회귀 | 군집화, 차원 축소 |
| 대표적인 알고리즘 | Linear Regression, Logistic Regression, Random Forest | K-Means, DBSCAN, PCA |
| 예시 | 타이타닉 승객의 생존 여부 예측 | 승객의 특성에 따라 비슷한 그룹 찾기 |

<!-- Notion block type not yet converted: heading_4 -->

| 유형 | 영어 | 설명 | 대표 알고리즘 |
| --- | --- | --- | --- |
| 군집화 | Clustering | 유사한 데이터끼리 그룹으로 묶음 | K-Means, DBSCAN |
| 차원 축소 | Dimensionality Reduction | 데이터의 특성 수를 줄여 중요한 정보를 압축 | PCA |
| 연관 규칙 학습 | Association Rule Learning | 데이터 항목 사이의 연관 관계 발견 | Apriori |
| 이상 탐지 | Anomaly Detection | 일반적인 패턴에서 벗어난 데이터 탐지 | Isolation Forest |

※ 이상 탐지는 비지도 학습 방식으로 수행할 수 있지만, 실제로는 지도 학습이나 준지도 학습 방식도 사용한다.

<!-- Notion block type not yet converted: heading_4 -->

**장점**

- 정답 레이블이 없어도 데이터 분석이 가능하다.
- 데이터에 숨어 있는 패턴이나 그룹을 발견할 수 있다.
- 고객 분류, 이상 탐지, 데이터 시각화 등에 활용할 수 있다.

**한계**

- 발견한 그룹이나 패턴이 실제로 어떤 의미인지 사람이 해석해야 한다.
- 정답이 없기 때문에 결과가 정확한지 평가하기 어렵다.
- 데이터 전처리, 거리 계산 방식, 알고리즘의 설정에 따라 결과가 달라질 수 있다.

<!-- Notion block type not yet converted: heading_4 -->

- 비지도 학습은 정답(Label) 없이 데이터의 구조와 패턴을 찾는 방법이다.
- Clustering은 비슷한 데이터를 그룹으로 묶는다.
- Dimensionality Reduction은 데이터의 차원을 줄인다.
- 비지도 학습의 결과는 실제 목적에 맞는지 별도로 해석하고 평가해야 한다.

---

<a name="notion-heading-40ad9e129df78007b95dffede95ad5bf"></a>

### 📃 b. Clustering (군집화)

<!-- Notion block type not yet converted: heading_4 -->

- 군집화(Clustering)는 데이터의 유사성을 기준으로 비슷한 데이터끼리 그룹을 만드는 비지도 학습 방법이다.
- 군집(Cluster)은 유사한 특성을 가진 데이터들이 모여 있는 그룹을 의미한다.
- 학습 데이터에 정답 레이블이 없어도 수행할 수 있다.

**예시**

쇼핑몰 고객의 구매 금액과 구매 횟수를 분석한다고 가정한다.

- A 그룹: 구매 금액이 높고 구매 횟수가 많음
- B 그룹: 구매 금액이 낮고 구매 횟수가 적음
- C 그룹: 구매 금액은 높지만 구매 횟수가 적음

이처럼 고객의 특성에 따라 그룹을 나누면 고객 유형별 마케팅 전략을 수립하는 데 활용할 수 있다.

<!-- Notion block type not yet converted: heading_4 -->

| 알고리즘 | 특징 | 장점 | 한계 |
| --- | --- | --- | --- |
| K-Means | 데이터를 K개의 군집으로 분류 | 간단하고 계산이 빠름 | 군집 수 K를 미리 지정해야 함 |
| DBSCAN | 데이터 밀도를 기준으로 군집 형성 | 이상치 탐지 및 다양한 형태의 군집 발견에 유용 | 데이터 밀도에 따라 결과가 달라짐 |
| Hierarchical Clustering | 데이터 간 계층적 관계를 구성 | 군집 간 관계를 계층적으로 확인 가능 | 데이터가 많으면 계산 비용이 커질 수 있음 |

<!-- Notion block type not yet converted: heading_4 -->

**개념**

K-Means는 데이터를 K개의 군집으로 나누는 알고리즘이다.

- K: 만들고자 하는 군집의 개수
- Centroid: 군집의 중심점
- Distance: 데이터와 군집 중심점 사이의 거리

**작동 과정**

1. 군집의 개수 K를 설정한다.
1. 초기 군집 중심점을 지정한다.
1. 각 데이터를 가장 가까운 중심점에 할당한다.
1. 각 군집에 속한 데이터의 평균을 계산하여 중심점을 갱신한다.
1. 중심점과 데이터의 할당이 안정화될 때까지 반복한다.

**예시**

고객 데이터가 100개 있고 K=3으로 설정했다면, 알고리즘은 데이터를 세 개의 군집으로 나누려고 한다.

단, K=3이라고 해서 반드시 실제로 의미 있는 고객 유형이 세 개 존재한다는 뜻은 아니다. 적절한 K를 선택하고 결과를 해석해야 한다.

<!-- Notion block type not yet converted: heading_4 -->

**1단계: 라이브러리 불러오기**

```text
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
```

**2단계: 가상 데이터 생성**

```text
X, y = make_blobs(
    n_samples=300,
    centers=3,
    n_features=2,
    random_state=42
)
```

- `n_samples=300`: 데이터 300개 생성
- `centers=3`: 데이터 생성에 사용할 중심점 3개
- `n_features=2`: 각 데이터의 특성 2개
- `random_state=42`: 실행할 때마다 같은 결과를 재현하기 위한 설정

※ `y`는 가상 데이터를 생성할 때 만들어진 기준 레이블이다. 비지도 학습 모델인 K-Means를 학습할 때는 사용하지 않는다.

**3단계: K-Means 모델 학습**

```text
kmeans = KMeans(
    n_clusters=3,
    random_state=42,
    n_init=10
)

kmeans.fit(X)
```

- `n_clusters=3`: 군집을 3개로 설정
- `fit(X)`: 데이터의 군집 구조를 학습
- `n_init=10`: 초기 중심점을 달리하여 여러 번 실행하고 좋은 결과를 선택

**4단계: 군집 결과 시각화**

```text
labels = kmeans.labels_
centers = kmeans.cluster_centers_

plt.scatter(
    X[:, 0],
    X[:, 1],
    c=labels
)

plt.scatter(
    centers[:, 0],
    centers[:, 1],
    marker="X",
    s=200
)

plt.title("K-Means Clustering")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()
```

**코드 해석**

- `X[:, 0]`: 모든 데이터의 첫 번째 특성
- `X[:, 1]`: 모든 데이터의 두 번째 특성
- `labels`: 각 데이터가 할당된 군집 번호
- `cluster_centers_`: 학습된 군집 중심점
- `c=labels`: 군집별로 데이터를 구분하여 표시

※ 군집 번호 0, 1, 2 자체에는 고정된 의미가 없다. 실행 결과의 군집 번호가 바뀌더라도 실제 군집 구조가 비슷할 수 있다.

<!-- Notion block type not yet converted: heading_4 -->

K-Means는 군집 수 K를 미리 지정해야 한다. 따라서 적절한 군집 수를 결정하는 과정이 중요하다.

**Elbow Method (엘보우 방법)**

- K를 여러 값으로 바꾸면서 각 군집 내 데이터와 중심점 사이의 제곱 거리 합을 확인한다.
- 이 값은 일반적으로 K가 증가할수록 감소한다.
- 그래프에서 감소 폭이 크게 줄어드는 지점을 후보로 선택한다.

```text
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

inertias = []

for k in range(1, 11):
    model = KMeans(
        n_clusters=k,
        random_state=42,
        n_init=10
    )

    model.fit(X)
    inertias.append(model.inertia_)

plt.plot(range(1, 11), inertias, marker="o")
plt.xlabel("Number of Clusters (K)")
plt.ylabel("Inertia")
plt.title("Elbow Method")
plt.show()
```

`inertia_`는 각 데이터와 자신이 속한 군집 중심점 사이의 제곱 거리 합이다.

주의할 점은 Elbow Method가 항상 뚜렷한 최적 K를 알려주는 것은 아니라는 것이다. 실루엣 점수와 실제 분석 목적을 함께 고려할 수 있다.

<!-- Notion block type not yet converted: heading_4 -->

실루엣 점수는 데이터가 자신이 속한 군집에는 얼마나 가까운지, 다른 군집과는 얼마나 떨어져 있는지를 평가하는 지표다.

- 값의 범위: -1 ~ 1
- 1에 가까울수록 군집이 잘 분리된 경향이 있다.
- 0에 가까우면 군집 사이의 경계에 있는 데이터일 수 있다.
- 음수이면 다른 군집에 더 가까이 배치되었을 가능성이 있다.

```text
from sklearn.metrics import silhouette_score

score = silhouette_score(X, kmeans.labels_)

print("Silhouette Score:", score)
```

※ 실루엣 점수가 높다고 해서 해당 군집이 반드시 실제 업무에서 의미 있는 그룹이라는 뜻은 아니다.

<!-- Notion block type not yet converted: heading_4 -->

- Clustering은 유사한 데이터끼리 그룹으로 묶는 비지도 학습 방법이다.
- K-Means는 군집 중심점을 이용해 데이터를 K개 그룹으로 나눈다.
- K-Means는 군집 수 K를 미리 지정해야 한다.
- Elbow Method와 Silhouette Score는 군집 결과를 평가하는 데 활용할 수 있다.
- 군집 번호 자체보다 군집별 특성과 실제 의미를 해석하는 것이 중요하다.

---

<a name="notion-heading-40ad9e129df78092b021dfa0f1c0d761"></a>

### 📃 c. Dimensionality Reduction (차원 축소)

<!-- Notion block type not yet converted: heading_4 -->

- 차원 축소(Dimensionality Reduction)는 데이터가 가진 특성(Feature)의 수를 줄이는 방법이다.
- 데이터의 중요한 정보를 최대한 유지하면서 불필요하거나 중복되는 정보를 줄이는 것이 목적이다.
- 특성의 수가 지나치게 많으면 계산 비용이 증가하고 데이터 분석과 시각화가 어려워질 수 있다.
- 차원 축소를 활용하면 고차원 데이터를 2차원 또는 3차원으로 줄여 시각화할 수도 있다.

**예시**

어떤 데이터에 다음과 같은 특성이 있다고 가정한다.

- 키
- 몸무게
- 허리둘레
- 가슴둘레
- 팔 길이
- 다리 길이

이 특성들은 서로 어느 정도 연관되어 있을 수 있다. 차원 축소를 이용하면 여러 특성이 가진 정보를 더 적은 수의 새로운 특성으로 표현할 수 있다.

단, 차원 축소를 한다고 해서 원래 데이터의 모든 정보가 보존되는 것은 아니다.

<!-- Notion block type not yet converted: heading_4 -->

| 목적 | 설명 |
| --- | --- |
| 계산 비용 감소 | 처리해야 할 특성의 수를 줄임 |
| 시각화 | 고차원 데이터를 2차원 또는 3차원으로 표현 |
| 중복 정보 감소 | 서로 상관관계가 높은 특성의 정보를 압축 |
| 데이터 탐색 | 데이터의 주요 패턴을 파악하는 데 도움 |
| 모델링 지원 | 경우에 따라 모델의 학습과 일반화에 도움을 줄 수 있음 |

<!-- Notion block type not yet converted: heading_4 -->

| 알고리즘 | 특징 | 활용 |
| --- | --- | --- |
| PCA | 데이터의 분산을 최대한 보존하는 새로운 축을 찾음 | 데이터 압축, 시각화 |
| t-SNE | 고차원 데이터의 국소적인 이웃 관계를 저차원 공간에 표현 | 데이터 시각화 |
| UMAP | 데이터의 국소 구조와 일부 전역 구조를 저차원으로 표현 | 데이터 시각화 및 탐색 |

※ PCA는 대표적인 선형 차원 축소 방법이다. t-SNE와 UMAP은 시각화에 자주 사용되며, 결과 해석 시 각 방법의 특성과 한계를 고려해야 한다.

<!-- Notion block type not yet converted: heading_4 -->

**개념**

PCA는 주성분 분석이라고 하며, 데이터의 분산을 최대한 보존하는 새로운 축을 찾아 데이터의 차원을 줄이는 방법이다.

주요 용어:

| 용어 | 설명 |
| --- | --- |
| Feature | 데이터가 가진 특성 또는 변수 |
| Variance | 데이터 값이 평균을 중심으로 얼마나 퍼져 있는지를 나타내는 척도 |
| Principal Component | 데이터의 분산을 설명하도록 구성한 새로운 축 |
| Explained Variance Ratio | 각 주성분이 전체 분산에서 설명하는 비율 |
| Scaling | 특성별 값의 범위를 조정하는 전처리 |

**쉽게 이해하기**

두 개의 특성인 키와 몸무게를 이용해 사람을 분석한다고 가정한다.

두 특성은 서로 연관되어 있을 수 있다. PCA는 데이터가 가장 많이 퍼져 있는 방향을 첫 번째 주성분으로 찾고, 그다음으로 남은 분산을 설명하는 방향을 찾는다.

이렇게 얻은 새로운 축을 이용하면 원래 두 개의 특성을 하나의 주성분으로 압축하거나, 여러 특성을 소수의 주성분으로 줄일 수 있다.

단, 주성분은 원래 특성 하나와 반드시 일치하지 않는다. 일반적으로 여러 원래 특성의 선형 결합으로 구성된다.

<!-- Notion block type not yet converted: heading_4 -->

**1단계: 라이브러리 불러오기**

```text
import matplotlib.pyplot as plt

from sklearn.datasets import load_iris
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
```

**2단계: 데이터 불러오기**

```text
iris = load_iris()

X = iris.data
y = iris.target

print("Data Shape:", X.shape)
```

출력 예시:

```text
Data Shape: (150, 4)
```

해석:

- 데이터 수: 150개
- 특성 수: 4개

아이리스 데이터에는 꽃받침과 꽃잎의 길이 및 너비에 해당하는 네 가지 특성이 있다.

**3단계: 데이터 표준화**

```text
scaler = StandardScaler()

X_scaled = scaler.fit_transform(X)
```

표준화는 특성별 평균을 0, 표준편차를 1에 가깝게 변환하는 전처리 방법이다.

PCA는 분산을 기준으로 주성분을 찾기 때문에 특성의 측정 단위와 크기가 크게 다르면 결과에 영향을 줄 수 있다.

**4단계: PCA 적용**

```text
pca = PCA(n_components=2)

X_pca = pca.fit_transform(X_scaled)

print("Original Shape:", X_scaled.shape)
print("Reduced Shape:", X_pca.shape)
```

출력 예시:

```text
Original Shape: (150, 4)
Reduced Shape: (150, 2)
```

해석:

- 기존 데이터: 특성 4개
- 차원 축소 후: 주성분 2개
- 데이터 수는 150개로 유지된다.

**5단계: 설명된 분산 비율 확인**

```text
print(pca.explained_variance_ratio_)

print(
    "Total Explained Variance:",
    pca.explained_variance_ratio_.sum()
)
```

`explained_variance_ratio_`는 각 주성분이 설명하는 분산의 비율을 나타낸다.

두 주성분의 설명된 분산 비율을 합하면, 원래 데이터의 전체 분산 중 두 주성분이 설명하는 비율을 확인할 수 있다.

**6단계: 시각화**

```text
plt.scatter(
    X_pca[:, 0],
    X_pca[:, 1],
    c=y
)

plt.xlabel("Principal Component 1")
plt.ylabel("Principal Component 2")
plt.title("PCA - Iris Dataset")
plt.show()
```

해석:

- X축: 첫 번째 주성분
- Y축: 두 번째 주성분
- 색상: 아이리스 데이터의 품종 레이블

주의: `y`는 시각화에서 품종을 구분하기 위해 사용했다. PCA 자체는 `y`를 사용하지 않고 `X_scaled`만으로 학습했다.

<!-- Notion block type not yet converted: heading_4 -->

- 차원을 줄이면 일부 정보가 손실될 수 있다.
- 설명된 분산 비율이 높다고 해서 모든 예측 작업에서 성능이 좋아지는 것은 아니다.
- PCA의 주성분은 원래 특성을 조합한 값이므로 해석하기 어려울 수 있다.
- 지도 학습 모델에 PCA를 적용할 때는 데이터 누수를 방지해야 한다. 학습 데이터에서만 표준화와 PCA를 학습하고, 테스트 데이터에는 학습된 변환을 적용해야 한다.

<!-- Notion block type not yet converted: heading_4 -->

- 차원 축소는 데이터의 특성 수를 줄이는 방법이다.
- PCA는 분산을 최대한 보존하는 새로운 축을 찾는다.
- `StandardScaler`는 특성의 스케일을 조정한다.
- `PCA(n_components=2)`는 데이터를 두 개의 주성분으로 변환한다.
- `explained_variance_ratio_`를 이용해 주성분이 설명하는 분산의 비율을 확인할 수 있다.

---

<a name="notion-heading-40ad9e129df7806bb969e6c74d8a3733"></a>

### 📃 d. Project (비지도 학습 프로젝트)

<!-- Notion block type not yet converted: heading_4 -->

**목표: 고객 데이터를 군집화하여 비슷한 특성을 가진 고객 그룹을 찾아보기**

- 데이터의 기본 구조를 확인한다.
- 결측치와 특성의 분포를 확인한다.
- 분석에 사용할 특성을 선택한다.
- 데이터를 표준화한다.
- K-Means를 이용해 고객을 군집화한다.
- 군집별 특성을 분석하고 결과를 시각화한다.

<!-- Notion block type not yet converted: heading_4 -->

예시 데이터:

| Customer | Annual Income | Spending Score |
| --- | --- | --- |
| A | 20 | 15 |
| B | 22 | 18 |
| C | 80 | 85 |
| D | 78 | 82 |
| E | 45 | 50 |

- `Annual Income`: 연간 소득
- `Spending Score`: 소비 점수

위 표는 개념을 설명하기 위한 예시 데이터다. 실제 분석에서는 데이터의 출처와 각 변수의 정의를 확인해야 한다.

<!-- Notion block type not yet converted: heading_4 -->

```text
import pandas as pd

data = {
    "Annual Income": [20, 22, 80, 78, 45, 48, 30, 32],
    "Spending Score": [15, 18, 85, 82, 50, 55, 25, 28]
}

df = pd.DataFrame(data)

print(df.head())

print(df.info())

print(df.describe())
```

**주요 확인 항목**

- `head()` : 데이터의 앞부분 확인
- `info()` : 행 수, 컬럼, 자료형, 결측치가 아닌 값의 개수 확인
- `describe()` : 수치형 데이터의 기초 통계량 확인

<!-- Notion block type not yet converted: heading_4 -->

```text
from sklearn.preprocessing import StandardScaler

X = df[["Annual Income", "Spending Score"]]

scaler = StandardScaler()

X_scaled = scaler.fit_transform(X)
```

특성의 범위가 다를 때 표준화를 적용하면 특정 특성의 큰 숫자 범위가 거리 계산에 과도하게 영향을 주는 것을 줄일 수 있다.

<!-- Notion block type not yet converted: heading_4 -->

```text
from sklearn.cluster import KMeans

kmeans = KMeans(
    n_clusters=3,
    random_state=42,
    n_init=10
)

df["Cluster"] = kmeans.fit_predict(X_scaled)

print(df)
```

`fit_predict()`는 모델을 학습한 뒤 각 데이터가 속한 군집 번호를 반환한다.

<!-- Notion block type not yet converted: heading_4 -->

```text
import matplotlib.pyplot as plt

plt.scatter(
    df["Annual Income"],
    df["Spending Score"],
    c=df["Cluster"]
)

plt.xlabel("Annual Income")
plt.ylabel("Spending Score")
plt.title("Customer Clustering")
plt.show()
```

<!-- Notion block type not yet converted: heading_4 -->

```text
cluster_summary = df.groupby("Cluster").mean(numeric_only=True)

print(cluster_summary)
```

군집별 평균 소득과 소비 점수를 확인하면 각 그룹의 특징을 파악할 수 있다.

예를 들어 한 군집의 소득과 소비 점수가 모두 높다면, 해당 그룹을 고소득·고소비 고객 그룹으로 해석할 수 있다.

다만 군집 번호는 고정된 의미가 없으므로 실제 평균값을 확인한 뒤 그룹의 이름을 정해야 한다.

<!-- Notion block type not yet converted: heading_4 -->

프로젝트를 마친 후 다음 내용을 정리한다.

- **문제 정의:** 어떤 데이터를 어떤 목적으로 군집화했는가?
- **데이터 분석:** 데이터의 행과 열, 결측치, 특성의 분포는 어떠했는가?
- **전처리:** 어떤 특성을 사용하고 어떤 전처리를 적용했는가?
- **모델링:** 어떤 군집화 알고리즘과 설정값을 사용했는가?
- **평가:** 군집 수를 어떻게 결정하고 결과를 어떻게 평가했는가?
- **해석:** 각 군집은 어떤 특성을 보였는가?
- **한계:** 데이터의 크기와 특성, 알고리즘 설정이 결과에 어떤 영향을 줄 수 있는가?

<!-- Notion block type not yet converted: heading_4 -->

- 비지도 학습 프로젝트에서는 정답을 맞히는 것보다 데이터의 패턴을 발견하고 해석하는 과정이 중요하다.
- K-Means는 군집 수를 설정해야 한다.
- 표준화는 거리 기반 군집화에서 중요할 수 있다.
- 군집화 결과는 시각화와 군집별 통계량을 통해 해석할 수 있다.

---

<a name="notion-heading-40ad9e129df7809ba7d7e61da06127a9"></a>

## 📕 F. Project (2026.10.30 Fri)

<a name="notion-heading-40ad9e129df780b79d2ce9dda406e89f"></a>

### 📃 a. 실습 (타이타닉 생존자)

<!-- Notion block type not yet converted: heading_4 -->

**목표: 타이타닉 승객 데이터를 이용해 생존 여부를 예측하는 머신러닝 모델 만들기**

- 타이타닉 데이터의 구조와 특징을 파악한다.
- 결측치와 범주형 데이터를 전처리한다.
- 학습 데이터와 테스트 데이터를 분리한다.
- 분류 모델을 학습한다.
- 예측 결과를 평가한다.

**학습 유형: 지도 학습 (Supervised Learning)**

타이타닉 생존자 예측은 승객의 정보와 실제 생존 여부를 이용해 모델을 학습하므로 지도 학습에 해당한다.

<!-- Notion block type not yet converted: heading_4 -->

타이타닉 데이터에는 승객의 정보와 생존 여부가 포함되어 있다.

| 컬럼 | 의미 | 자료 유형 |
| --- | --- | --- |
| `PassengerId` | 승객 식별 번호 | 식별자 |
| `Survived` | 생존 여부 (0: 사망, 1: 생존) | 타깃 변수 |
| `Pclass` | 객실 등급 | 범주형 변수 |
| `Name` | 승객 이름 | 문자열 |
| `Sex` | 성별 | 범주형 변수 |
| `Age` | 나이 | 수치형 변수 |
| `SibSp` | 함께 탑승한 형제자매 및 배우자 수 | 수치형 변수 |
| `Parch` | 함께 탑승한 부모 및 자녀 수 | 수치형 변수 |
| `Ticket` | 티켓 번호 | 문자열 |
| `Fare` | 요금 | 수치형 변수 |
| `Cabin` | 객실 번호 | 문자열 |
| `Embarked` | 승선 항구 | 범주형 변수 |

※ 데이터셋의 버전에 따라 컬럼 구성과 결측치가 다를 수 있다.

<!-- Notion block type not yet converted: heading_4 -->

머신러닝에서는 입력으로 사용하는 변수와 예측할 대상을 구분한다.

| 구분 | 의미 | 타이타닉 예시 |
| --- | --- | --- |
| 독립변수 (Feature) | 예측에 사용하는 입력 데이터 | `Pclass`, `Sex`, `Age`, `Fare` 등 |
| 종속변수 (Target) | 모델이 예측하려는 정답 | `Survived` |

- `X`: 모델의 입력 데이터
- `y`: 모델이 예측할 정답

```text
X = df.drop(columns=["Survived"])
y = df["Survived"]
```

위 코드는 `Survived` 컬럼이 실제로 존재하고, 해당 컬럼을 예측 대상으로 사용한다는 가정하에 작성한 예시다.

<!-- Notion block type not yet converted: heading_4 -->

```text
import pandas as pd

df = pd.read_csv("train.csv")

print(df.head())

print(df.shape)

print(df.info())

print(df.isnull().sum())

print(df.describe())
```

**주요 확인 항목**

- `head()` : 데이터의 앞부분 확인
- `shape` : 행과 열의 개수 확인
- `info()` : 컬럼별 자료형과 결측치가 아닌 값의 개수 확인
- `isnull().sum()` : 컬럼별 결측치 개수 확인
- `describe()` : 수치형 데이터의 기초 통계량 확인

<!-- Notion block type not yet converted: heading_4 -->

**개념**

결측치(Missing Value)는 데이터에서 값이 비어 있는 상태를 의미한다.

타이타닉 데이터에서는 `Age`, `Cabin`, `Embarked` 등의 컬럼에 결측치가 존재할 수 있다.

| 방법 | 설명 |
| --- | --- |
| 삭제 | 결측치가 있는 행 또는 컬럼 제거 |
| 평균 대체 | 수치형 데이터의 결측치를 평균으로 대체 |
| 중앙값 대체 | 수치형 데이터의 결측치를 중앙값으로 대체 |
| 최빈값 대체 | 범주형 데이터의 결측치를 가장 자주 나타나는 값으로 대체 |
| 별도 범주 처리 | 결측치를 별도의 범주로 취급 |

**주의사항**

- 결측치를 무조건 삭제하거나 평균으로 대체하는 것은 적절하지 않을 수 있다.
- 결측치의 비율과 의미, 데이터 분포를 확인한 후 처리 방법을 선택한다.
- 학습 데이터와 테스트 데이터를 분리한 뒤, 대체 기준은 학습 데이터에서 학습해야 데이터 누수를 방지할 수 있다.

<!-- Notion block type not yet converted: heading_4 -->

**개념**

머신러닝 모델은 일반적으로 문자열을 그대로 입력으로 사용할 수 없으므로 범주형 데이터를 숫자 형태로 변환해야 한다.

예를 들어 `Sex` 컬럼이 다음과 같다고 가정한다.

| Sex | 변환 예시 |
| --- | --- |
| male | 0 |
| female | 1 |

단, 모든 범주형 변수에 숫자를 임의로 부여하는 것이 적절한 것은 아니다. 범주 사이에 순서가 없는 경우에는 One-Hot Encoding을 사용할 수 있다.

**주요 인코딩 방법**

| 방법 | 설명 |
| --- | --- |
| Label Encoding | 범주에 정수 레이블을 부여 |
| Ordinal Encoding | 범주 사이의 순서 정보를 반영해 숫자로 변환 |
| One-Hot Encoding | 각 범주를 별도의 0/1 컬럼으로 변환 |

예를 들어 `Embarked`가 `S`, `C`, `Q` 세 범주를 가진다면 One-Hot Encoding으로 세 개의 컬럼을 만들 수 있다.

<!-- Notion block type not yet converted: heading_4 -->

모델을 학습한 데이터만으로 성능을 평가하면 새로운 데이터에 대한 예측 성능을 제대로 판단하기 어렵다.

따라서 데이터를 학습용과 평가용으로 분리한다.

```text
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)
```

| 변수 | 의미 |
| --- | --- |
| `X_train` | 학습에 사용할 입력 데이터 |
| `X_test` | 평가에 사용할 입력 데이터 |
| `y_train` | 학습 데이터의 정답 |
| `y_test` | 평가 데이터의 정답 |

주요 설정:

- `test_size=0.2`: 전체 데이터의 20%를 테스트 데이터로 사용
- `random_state=42`: 분할 결과를 재현할 수 있도록 설정
- `stratify=y`: 가능한 한 학습 데이터와 테스트 데이터의 클래스 비율을 유지

<!-- Notion block type not yet converted: heading_4 -->

타이타닉 생존 여부는 생존(1)과 사망(0)을 예측하는 이진 분류 문제다.

대표적인 알고리즘은 다음과 같다.

| 알고리즘 | 특징 |
| --- | --- |
| Logistic Regression | 분류 문제의 기본 모델로 활용 |
| Decision Tree | 조건에 따라 데이터를 분할하여 예측 |
| Random Forest | 여러 의사결정 트리를 결합 |
| Gradient Boosting | 여러 약한 학습기를 순차적으로 결합 |

모델 학습 예시는 다음과 같다.

```text
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X_train, y_train)
```

※ 위 코드는 입력 데이터가 모두 숫자형이며 결측치가 적절히 처리되었다는 전제하에 동작하는 예시다. 원본 타이타닉 데이터의 문자열 컬럼과 결측치를 그대로 넣으면 오류가 발생할 수 있다.

<!-- Notion block type not yet converted: heading_4 -->

```text
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)

y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))

print(confusion_matrix(y_test, y_pred))

print(classification_report(y_test, y_pred))
```

**평가 지표**

| 지표 | 설명 |
| --- | --- |
| Accuracy | 전체 예측 중 정답을 맞힌 비율 |
| Precision | 양성으로 예측한 데이터 중 실제 양성의 비율 |
| Recall | 실제 양성 데이터 중 양성으로 찾아낸 비율 |
| F1-score | Precision과 Recall의 조화평균 |
| Confusion Matrix | 실제 정답과 예측 결과를 비교한 표 |

※ 생존 여부 예측에서는 Accuracy만으로 모델의 성능을 판단하기보다 Precision, Recall, F1-score와 클래스별 예측 결과도 확인하는 것이 좋다.

<!-- Notion block type not yet converted: heading_4 -->

아래 코드는 일반적인 타이타닉 `train.csv`를 기준으로 전처리부터 모델 평가까지 연결한 예시다.

```text
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)

# 1. 데이터 불러오기
df = pd.read_csv("train.csv")

# 2. 입력 데이터와 타깃 분리
X = df.drop(columns=["Survived", "PassengerId", "Name", "Ticket", "Cabin"])
y = df["Survived"]

# 3. 수치형 / 범주형 컬럼 구분
numeric_features = ["Age", "SibSp", "Parch", "Fare"]
categorical_features = ["Pclass", "Sex", "Embarked"]

# 4. 수치형 전처리
numeric_transformer = Pipeline([
    ("imputer", SimpleImputer(strategy="median"))
])

# 5. 범주형 전처리
categorical_transformer = Pipeline([
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("onehot", OneHotEncoder(handle_unknown="ignore"))
])

# 6. 전처리 결합
preprocessor = ColumnTransformer([
    ("num", numeric_transformer, numeric_features),
    ("cat", categorical_transformer, categorical_features)
])

# 7. 전체 파이프라인 구성
model = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier", RandomForestClassifier(
        n_estimators=100,
        random_state=42
    ))
])

# 8. 학습 데이터와 테스트 데이터 분리
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# 9. 모델 학습
model.fit(X_train, y_train)

# 10. 예측
y_pred = model.predict(X_test)

# 11. 평가
print("Accuracy:", accuracy_score(y_test, y_pred))

print("Confusion Matrix:")
print(confusion_matrix(y_test, y_pred))

print("Classification Report:")
print(classification_report(y_test, y_pred))
```

**코드에서 중요한 부분**

- `SimpleImputer`: 결측치를 대체한다.
- `OneHotEncoder`: 범주형 데이터를 숫자 형태로 변환한다.
- `ColumnTransformer`: 컬럼 유형에 따라 서로 다른 전처리를 적용한다.
- `Pipeline`: 전처리와 모델 학습을 하나의 흐름으로 연결한다.
- `model.fit()`: 학습 데이터에서 전처리 기준과 모델을 학습한다.
- `model.predict()`: 학습된 모델로 생존 여부를 예측한다.

이 코드는 기본적인 실습 예시다. 실제 데이터의 컬럼 구성에 따라 입력 컬럼을 조정해야 하며, 모델 선택과 성능 평가는 별도로 진행해야 한다.

<!-- Notion block type not yet converted: heading_4 -->

실습을 마친 후 다음 내용을 정리한다.

- **문제 정의:** 어떤 정보를 이용해 무엇을 예측했는가?
- **데이터 분석:** 데이터 크기, 변수 유형, 결측치 현황은 어떠했는가?
- **전처리:** 결측치와 범주형 데이터를 어떻게 처리했는가?
- **모델링:** 어떤 알고리즘과 설정값을 사용했는가?
- **평가:** Accuracy, Precision, Recall, F1-score는 어떠했는가?
- **해석:** 어떤 특성이 생존 여부와 관련이 있었는가?
- **개선 방향:** 다른 알고리즘이나 전처리 방법을 적용하면 결과가 달라지는가?

<!-- Notion block type not yet converted: heading_4 -->

- 타이타닉 생존자 예측은 지도 학습의 이진 분류 문제다.
- `Survived`는 예측 대상인 타깃 변수다.
- 결측치 처리와 범주형 데이터 인코딩은 모델 학습 전에 필요한 전처리 작업이다.
- 학습 데이터와 테스트 데이터를 분리해 새로운 데이터에 대한 예측 성능을 평가한다.
- Accuracy뿐 아니라 Precision, Recall, F1-score와 Confusion Matrix도 확인한다.
- `Pipeline`을 활용하면 전처리와 모델 학습을 일관된 방식으로 연결할 수 있다.

---

<a name="notion-heading-40ad9e129df7804e8f20f008af1980e7"></a>

## 📌 3주차 Python Machine Learning 핵심 복습

| 개념 | 핵심 내용 | 대표 도구 |
| --- | --- | --- |
| Unsupervised Learning | 정답 없이 데이터의 구조와 패턴 발견 | `scikit-learn` |
| Clustering | 유사한 데이터끼리 그룹화 | `KMeans`, `DBSCAN` |
| Dimensionality Reduction | 데이터의 특성 수를 줄임 | `PCA` |
| Data Preprocessing | 결측치 처리 및 범주형 데이터 변환 | `SimpleImputer`, `OneHotEncoder` |
| Train/Test Split | 학습 데이터와 평가 데이터 분리 | `train_test_split` |
| Classification | 범주 또는 클래스를 예측 | `RandomForestClassifier` |
| Model Evaluation | 모델의 예측 성능 평가 | `accuracy_score`, `classification_report` |
| Pipeline | 전처리와 모델 학습을 하나의 흐름으로 연결 | `Pipeline` |

**이번 주 학습의 핵심**

머신러닝은 단순히 알고리즘을 실행하는 것만으로 끝나지 않는다.

1. 데이터의 구조를 파악한다.
1. 문제의 유형에 맞는 학습 방법을 선택한다.
1. 결측치와 데이터 유형을 적절하게 처리한다.
1. 모델을 학습하고 예측한다.
1. 평가 지표를 통해 결과를 확인한다.
1. 결과를 해석하고 개선 방향을 찾는다.

비지도 학습에서는 데이터의 숨겨진 구조를 발견하는 것이 중요하고, 타이타닉 프로젝트와 같은 지도 학습에서는 정답을 얼마나 잘 예측하는지 평가하는 것이 중요하다.
