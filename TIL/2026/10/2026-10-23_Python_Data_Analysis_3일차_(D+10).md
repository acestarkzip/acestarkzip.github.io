# Python : 데이터 분석 및 실무 활용 3일차 (D+10)

> 📚 **2주차 Python 데이터 분석**  
> **학습 기간:** 2026.10.21 (Wed) ~ 2026.10.23 (Fri)  
> **학습 일차:** D+10  
> **학습 주제:** Data Visualization & EDA  
> **학습 날짜:** 2026.10.23 (Fri)

---

## 📑 목차

- [1. 데이터 시각화란?](#1-데이터-시각화란)
- [2. Matplotlib](#2-matplotlib)
  - [2.1 기본 그래프](#21-기본-그래프)
  - [2.2 통계 시각화](#22-통계-시각화)
- [3. Seaborn](#3-seaborn)
- [4. Pandas Plot](#4-pandas-plot)
- [5. EDA란?](#5-eda란)
- [6. EDA 실습](#6-eda-실습)
  - [6.1 Seoul Bike Data](#61-seoul-bike-data)
  - [6.2 Online Shop](#62-online-shop)
  - [6.3 Video Game Sales](#63-video-game-sales)
- [7. 핵심 요약](#7-핵심-요약)
- [8. 학습 체크리스트](#8-학습-체크리스트)

---

## 1. 데이터 시각화란?

**데이터 시각화(Data Visualization)** 는 데이터를 그래프나 차트로 표현해 데이터의 특징과 패턴을 쉽게 파악하는 방법이다.

표에 있는 숫자만 확인하면 데이터의 변화나 변수 간 관계를 파악하기 어려울 수 있다. 그래프를 사용하면 이러한 특징을 직관적으로 확인할 수 있다.

### 📌 데이터 시각화의 주요 목적

- 시간에 따른 데이터 변화 확인
- 항목별 수치 비교
- 데이터의 분포와 편중 확인
- 변수 간 관계 탐색
- 이상치 후보 발견
- 분석 결과를 다른 사람에게 효과적으로 전달

### 📌 주요 시각화 도구

| 라이브러리 | 특징 | 주요 활용 |
|---|---|---|
| **Matplotlib** | 그래프의 요소와 형태를 세밀하게 설정 | 기본 그래프 작성 및 세부 설정 |
| **Seaborn** | 통계적 특성을 시각화하기 편리함 | 분포, 변수 간 관계, 상관관계 |
| **Pandas Plot** | DataFrame이나 Series에서 바로 그래프 생성 | 빠른 데이터 탐색 |

---

## 2. Matplotlib

### 2.1 기본 그래프

**Matplotlib**은 Python에서 그래프를 생성하고 세부 요소를 설정할 수 있는 기본 시각화 라이브러리다.

```python
import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [10, 20, 15])

plt.title("Simple Line Graph")
plt.xlabel("X")
plt.ylabel("Y")

plt.show()
```

이 코드는 세 개의 데이터 점을 선으로 연결한 그래프를 생성한다.

### 📌 주요 함수

| 함수 | 기능 |
|---|---|
| `plt.plot()` | 선 그래프 |
| `plt.bar()` | 막대 그래프 |
| `plt.scatter()` | 산점도 |
| `plt.xlabel()` | X축 이름 설정 |
| `plt.ylabel()` | Y축 이름 설정 |
| `plt.title()` | 그래프 제목 설정 |
| `plt.show()` | 그래프 출력 |
| `plt.figure()` | 그래프의 크기 등 설정 |
| `plt.legend()` | 범례 표시 |

### 📃 1. 선 그래프 (Line Plot)

선 그래프는 시간이나 순서에 따른 데이터의 변화를 확인할 때 유용하다.

```python
import matplotlib.pyplot as plt

days = [1, 2, 3, 4, 5]
sales = [10, 15, 12, 20, 25]

plt.plot(days, sales, marker="o")

plt.title("Daily Sales")
plt.xlabel("Day")
plt.ylabel("Sales")

plt.show()
```

**활용 예시**
- 날짜별 매출 변화
- 시간대별 자전거 대여량
- 로봇의 시간에 따른 이동 거리 변화

### 📃 2. 막대 그래프 (Bar Plot)

막대 그래프는 카테고리별 값을 비교할 때 사용한다.

```python
import matplotlib.pyplot as plt

categories = ["A", "B", "C"]
scores = [80, 90, 75]

plt.bar(categories, scores)

plt.title("Scores by Category")
plt.xlabel("Category")
plt.ylabel("Score")

plt.show()
```

**활용 예시**
- 상품별 판매량 비교
- 플랫폼별 게임 판매량 비교
- 팀별 평균 점수 비교

### 📃 3. 산점도 (Scatter Plot)

산점도는 두 수치형 변수 사이의 관계를 탐색할 때 사용한다.

```python
import matplotlib.pyplot as plt

age = [20, 25, 30, 35, 40]
price = [100, 150, 180, 220, 260]

plt.scatter(age, price)

plt.title("Age and Price")
plt.xlabel("Age")
plt.ylabel("Price")

plt.show()
```

각 점은 하나의 관측값을 나타낸다.

점들이 어떤 방향으로 분포하는지 확인하면 두 변수 사이에 관계가 있는지 탐색할 수 있다. 다만 산점도에서 관계가 관찰되더라도 한 변수가 다른 변수의 원인이라고 단정할 수는 없다.

---

### 2.2 통계 시각화

Matplotlib은 데이터의 분포나 통계적 특징을 살펴보는 데도 사용할 수 있다.

주요 그래프는 다음과 같다.

- Histogram: 데이터의 분포 확인
- Box Plot: 중앙값, 사분위수, 이상치 후보 확인
- Heatmap: 색상으로 수치의 크기 표현

### 📃 1. 히스토그램 (Histogram)

**히스토그램은 데이터를 일정한 구간으로 나누고, 각 구간에 속하는 데이터의 개수를 막대로 표현하는 그래프다.**

```python
import matplotlib.pyplot as plt

ages = [21, 22, 23, 25, 25, 27, 30, 31, 35, 40]

plt.hist(ages, bins=5)

plt.title("Age Distribution")
plt.xlabel("Age")
plt.ylabel("Frequency")

plt.show()
```

### 📌 주요 개념

- `bins`: 데이터를 나눌 구간의 개수 또는 경계
- `Frequency`: 각 구간에 포함된 데이터의 개수
- 막대의 높이: 해당 구간에 속하는 데이터의 빈도

**활용 예시**
- 고객 연령 분포
- 상품 가격 분포
- 자전거 대여량 분포

### 📃 2. 박스 플롯 (Box Plot)

**박스 플롯은 데이터의 중앙값, 사분위수, 분포 범위 및 이상치 후보를 확인하는 그래프다.**

```python
import matplotlib.pyplot as plt

prices = [10, 12, 13, 15, 16, 18, 20, 22, 100]

plt.boxplot(prices)

plt.title("Price Distribution")
plt.ylabel("Price")

plt.show()
```

### 📌 주요 개념

| 용어 | 의미 |
|---|---|
| **Q1 (제1사분위수)** | 데이터의 하위 25% 지점 |
| **Q2 (제2사분위수)** | 중앙값, 데이터의 50% 지점 |
| **Q3 (제3사분위수)** | 데이터의 하위 75% 지점 |
| **IQR** | 제3사분위수에서 제1사분위수를 뺀 값 |
| **이상치 후보** | 일반적인 데이터 분포에서 벗어난 것으로 표시되는 값 |

일반적인 박스 플롯에서는 `Q1 - 1.5 × IQR`보다 작거나 `Q3 + 1.5 × IQR`보다 큰 값이 이상치 후보로 표시될 수 있다.

**주의:** 이상치 후보라고 해서 반드시 잘못된 데이터인 것은 아니다. 실제로 발생한 극단적인 값일 수도 있으므로 원인을 확인해야 한다.

### 📃 3. 히트맵 (Heatmap)

**히트맵은 수치의 크기를 색상으로 표현하는 그래프다.**

변수 간 상관관계나 행렬 형태의 데이터를 시각적으로 비교할 때 사용할 수 있다.

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.DataFrame({
    "age": [20, 25, 30, 35, 40],
    "price": [100, 150, 180, 220, 260],
    "score": [60, 70, 75, 85, 90]
})

corr = df.corr(numeric_only=True)

sns.heatmap(corr, annot=True, cmap="coolwarm")

plt.title("Correlation Heatmap")
plt.show()
```

### 📌 코드 분석

- `df.corr(numeric_only=True)`: 수치형 열 사이의 상관계수를 계산한다.
- `sns.heatmap()`: 상관계수 행렬을 색상으로 표현한다.
- `annot=True`: 각 셀에 수치도 표시한다.
- `cmap="coolwarm"`: 색상 표현 방식을 지정한다.

상관계수는 일반적으로 -1에서 1 사이의 값을 가진다.

| 상관계수 | 일반적인 해석 |
|---|---|
| 1에 가까움 | 강한 양의 선형 관계 |
| 0에 가까움 | 선형 관계가 약하거나 관찰되지 않음 |
| -1에 가까움 | 강한 음의 선형 관계 |

상관관계가 높다고 해서 인과관계가 성립하는 것은 아니다.

---

## 3. Seaborn

**Seaborn**은 Matplotlib을 기반으로 동작하며, 통계 데이터의 분포와 변수 간 관계를 쉽게 시각화할 수 있는 Python 라이브러리다.

### 📌 주요 특징

- 통계적 데이터 시각화에 적합
- 그래프를 비교적 간결한 코드로 작성 가능
- DataFrame의 열 이름을 직접 지정해 시각화 가능
- Matplotlib과 함께 사용해 그래프를 세부적으로 설정 가능

### 📌 주요 함수

| 함수 | 기능 |
|---|---|
| `sns.histplot()` | 데이터 분포 확인 |
| `sns.boxplot()` | 분포와 이상치 후보 확인 |
| `sns.scatterplot()` | 두 변수의 관계 확인 |
| `sns.heatmap()` | 수치 행렬을 색상으로 표현 |
| `sns.pairplot()` | 여러 수치형 변수 사이의 관계 비교 |

### 📃 1. 데이터 분포 확인

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.DataFrame({
    "age": [21, 22, 23, 25, 25, 27, 30, 31, 35, 40],
    "price": [100, 110, 120, 140, 150, 170, 190, 210, 250, 300]
})

sns.histplot(data=df, x="age", kde=True)

plt.title("Age Distribution")
plt.show()
```

- `data=df`: 시각화에 사용할 DataFrame 지정
- `x="age"`: X축에 사용할 열 지정
- `kde=True`: 데이터 분포를 부드러운 곡선으로 함께 표시

### 📃 2. 변수 간 관계 확인

```python
sns.scatterplot(data=df, x="age", y="price")

plt.title("Age and Price")
plt.show()
```

`age`와 `price`의 관계를 점으로 표현해 두 변수의 분포와 관계를 살펴볼 수 있다.

### 📃 3. 박스 플롯

```python
sns.boxplot(data=df, x="age")

plt.title("Age Box Plot")
plt.show()
```

박스 플롯을 사용하면 데이터의 중앙값과 사분위수, 이상치 후보를 확인할 수 있다.

### 📃 4. 여러 변수의 관계 비교

```python
sns.pairplot(df)

plt.show()
```

`pairplot()`은 여러 수치형 변수의 조합을 비교할 때 유용하다. 변수가 많아질수록 그래프 수도 늘어나므로 데이터의 크기와 변수 개수를 고려해 사용하는 것이 좋다.

---

## 4. Pandas Plot

**Pandas Plot**은 Pandas의 `DataFrame`이나 `Series`에서 직접 그래프를 생성하는 기능이다.

Matplotlib을 기반으로 동작하며, 데이터를 빠르게 탐색하거나 기초적인 그래프를 만들 때 편리하다.

### 📌 주요 문법

| 문법 | 기능 |
|---|---|
| `df["sales"].plot(kind="line")` | 선 그래프 |
| `df["category"].value_counts().plot(kind="bar")` | 카테고리별 개수를 막대 그래프로 표현 |
| `df["sales"].plot(kind="hist")` | 히스토그램 |
| `df["sales"].plot(kind="box")` | 박스 플롯 |

### 📃 실습 예제

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({
    "day": [1, 2, 3, 4, 5],
    "sales": [100, 150, 120, 200, 250],
    "category": ["A", "B", "A", "C", "B"]
})

# 선 그래프
df.plot(x="day", y="sales", kind="line")

plt.show()

# 카테고리별 개수
df["category"].value_counts().plot(kind="bar")

plt.show()
```

### 📌 `kind` 옵션

| 옵션 | 그래프 |
|---|---|
| `"line"` | 선 그래프 |
| `"bar"` | 막대 그래프 |
| `"hist"` | 히스토그램 |
| `"box"` | 박스 플롯 |
| `"scatter"` | 산점도 |

산점도를 생성할 때는 일반적으로 X축과 Y축에 사용할 열을 지정해야 한다.

```python
df.plot(kind="scatter", x="day", y="sales")

plt.show()
```

**핵심:** 빠른 탐색에는 Pandas Plot을 활용하고, 그래프를 세밀하게 구성하거나 통계적 시각화가 필요할 때는 Matplotlib과 Seaborn을 활용할 수 있다.

---

## 5. EDA란?

### 📃 5.1 EDA의 개념

**EDA(Exploratory Data Analysis, 탐색적 데이터 분석)** 는 본격적인 분석이나 머신러닝 모델링을 진행하기 전에 데이터의 구조, 분포, 특징 및 문제점을 탐색하는 과정이다.

데이터를 바로 모델에 입력하기보다는 먼저 데이터를 살펴보면서 어떤 특징이 있는지, 어떤 문제가 있는지 확인하는 것이 중요하다.

### 📌 EDA의 주요 목적

- 데이터의 구조와 자료형 확인
- 결측치 확인
- 이상치 후보 탐색
- 데이터의 분포 확인
- 변수 간 관계 탐색
- 분석할 만한 패턴과 가설 발견
- 데이터 전처리 및 후속 분석 방향 결정

### 📌 EDA의 일반적인 과정

```text
1. 데이터 불러오기
        ↓
2. 데이터 구조 및 자료형 확인
        ↓
3. 결측치와 이상치 후보 점검
        ↓
4. 기초 통계 확인
        ↓
5. 그래프를 통한 시각화
        ↓
6. 변수 간 관계와 패턴 탐색
        ↓
7. 분석 결과 정리 및 다음 단계 결정
```

이 순서는 일반적인 예시이며, 실제 분석에서는 결과에 따라 앞선 단계로 돌아가거나 여러 단계를 반복할 수 있다.

### 📌 EDA에서 자주 사용하는 도구

| 도구 | 활용 |
|---|---|
| Pandas | 데이터 불러오기, 조회, 필터링, 결측치 확인 |
| NumPy | 수치 연산 |
| Matplotlib | 기본 그래프 생성 |
| Seaborn | 분포 및 변수 간 관계 시각화 |

### 📃 5.2 EDA 기본 코드 예제

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 데이터 불러오기
df = pd.read_csv("data.csv")

# 데이터 구조 확인
print(df.head())
print(df.info())
print(df.shape)

# 결측치 확인
print(df.isnull().sum())

# 기초 통계 확인
print(df.describe())

# 수치형 변수의 상관관계 확인
corr = df.corr(numeric_only=True)

sns.heatmap(corr, annot=True, cmap="coolwarm")
plt.show()
```

위 코드는 EDA에서 자주 사용하는 기본적인 작업을 보여준다. 실제 데이터의 열 이름과 특성에 따라 분석 코드를 추가하거나 수정해야 한다.

---

## 6. EDA 실습

이번 학습에서는 서로 다른 세 가지 데이터셋을 이용해 EDA를 수행하는 방법을 익힌다.

### 6.1 Seoul Bike Data

**분석 목표:** 서울 자전거 대여량과 시간·날씨 등 환경 변수의 관계를 탐색한다.

#### 📌 주요 분석 항목

- 시간대별 자전거 대여량
- 기온과 대여량의 관계
- 계절별 이용 패턴
- 날씨 조건에 따른 대여량 차이

#### 📌 활용 기법

| 분석 목적 | 활용 방법 |
|---|---|
| 시간대별 대여량 변화 | 선 그래프 |
| 기온과 대여량의 관계 | 산점도 |
| 계절별 대여량 비교 | 그룹별 평균 및 막대 그래프 |
| 수치형 변수 간 관계 | 상관관계 분석 및 히트맵 |

#### 📃 분석 예제

아래 코드는 데이터에 `hour`와 `rentals`라는 열이 있다고 가정한 예제다.

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("seoul_bike.csv")

# 시간대별 평균 대여량
hourly_rentals = df.groupby("hour")["rentals"].mean()

hourly_rentals.plot(kind="line", marker="o")

plt.title("Average Bike Rentals by Hour")
plt.xlabel("Hour")
plt.ylabel("Average Rentals")

plt.show()
```

실제 데이터셋의 열 이름이 다르다면 해당 열 이름에 맞게 수정해야 한다.

**분석 시 생각해 볼 질문**
- 자전거 대여량이 많은 시간대는 언제인가?
- 기온이 높을수록 대여량이 증가하는가?
- 계절에 따라 이용 패턴이 달라지는가?

---

### 6.2 Online Shop

**분석 목표:** 온라인 쇼핑 데이터에서 구매 패턴과 매출 특성을 탐색한다.

#### 📌 주요 분석 항목

- 상품별 판매량
- 고객별 구매 패턴
- 매출 분포
- 결측치와 이상치 후보
- 상품 카테고리별 매출 차이

#### 📌 활용 기법

| 분석 목적 | 활용 방법 |
|---|---|
| 상품별 판매량 비교 | `groupby()` 및 막대 그래프 |
| 고객별 구매 횟수 확인 | 그룹별 집계 |
| 매출 분포 확인 | 히스토그램 |
| 데이터 누락 확인 | `isnull().sum()` |
| 비정상적으로 큰 거래 금액 탐색 | 기초 통계 및 박스 플롯 |

#### 📃 분석 예제

아래 코드는 데이터에 `product`와 `quantity`라는 열이 있다고 가정한 예제다.

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("online_shop.csv")

# 상품별 판매 수량 합계
product_sales = df.groupby("product")["quantity"].sum()

# 판매량이 많은 순서대로 정렬
product_sales = product_sales.sort_values(ascending=False)

product_sales.plot(kind="bar")

plt.title("Sales Quantity by Product")
plt.xlabel("Product")
plt.ylabel("Quantity")

plt.show()
```

**분석 시 생각해 볼 질문**
- 가장 많이 판매된 상품은 무엇인가?
- 매출이 특정 상품이나 카테고리에 집중되어 있는가?
- 구매 금액에 비정상적으로 큰 값이 존재하는가?
- 결측치가 분석 결과에 영향을 줄 수 있는가?

---

### 6.3 Video Game Sales

**분석 목표:** 비디오 게임 판매 데이터에서 시장과 판매 특성을 탐색한다.

#### 📌 주요 분석 항목

- 플랫폼별 판매량
- 장르별 판매량
- 출시 연도별 판매 변화
- 지역별 판매 비교
- 판매량과 다른 수치형 변수 사이의 관계

#### 📌 활용 기법

| 분석 목적 | 활용 방법 |
|---|---|
| 플랫폼별 판매량 비교 | 그룹별 집계 및 막대 그래프 |
| 장르별 판매량 비교 | `groupby()` 및 정렬 |
| 연도별 판매 변화 | 선 그래프 |
| 지역별 판매량 비교 | 그룹별 집계 |
| 수치형 변수 간 관계 탐색 | 상관관계 분석 및 히트맵 |

#### 📃 분석 예제

아래 코드는 데이터에 `Genre`와 `Global_Sales`라는 열이 있다고 가정한 예제다.

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("video_game_sales.csv")

# 장르별 글로벌 판매량 합계
genre_sales = df.groupby("Genre")["Global_Sales"].sum()

# 판매량이 많은 순서대로 정렬
genre_sales = genre_sales.sort_values(ascending=False)

genre_sales.plot(kind="bar")

plt.title("Global Sales by Genre")
plt.xlabel("Genre")
plt.ylabel("Global Sales")

plt.show()
```

**분석 시 생각해 볼 질문**
- 글로벌 판매량이 높은 장르는 무엇인가?
- 플랫폼에 따라 판매량 차이가 존재하는가?
- 출시 연도에 따라 시장 규모가 어떻게 변화했는가?
- 지역별 판매 패턴은 서로 다른가?

※ 실제 데이터 파일에 따라 열 이름, 결측치, 판매량의 단위가 다를 수 있으므로 분석 전에 데이터 구조를 확인해야 한다.

---

## 7. 핵심 요약

### 📌 데이터 시각화

| 개념 | 핵심 내용 |
|---|---|
| **Matplotlib** | 그래프를 생성하고 세부 요소를 설정하는 기본 시각화 라이브러리 |
| **Seaborn** | 통계적 분포와 변수 간 관계를 쉽게 시각화하는 라이브러리 |
| **Pandas Plot** | DataFrame이나 Series에서 직접 그래프를 생성하는 기능 |
| **Histogram** | 데이터의 구간별 분포 확인 |
| **Box Plot** | 중앙값, 사분위수, 이상치 후보 확인 |
| **Heatmap** | 색상으로 수치의 크기를 표현 |
| **Scatter Plot** | 두 수치형 변수의 관계 탐색 |
| **Line Plot** | 시간이나 순서에 따른 변화 확인 |
| **Bar Plot** | 카테고리별 값 비교 |

### 📌 EDA

| 개념 | 핵심 내용 |
|---|---|
| **EDA** | 데이터를 탐색해 특징과 문제점을 파악하는 과정 |
| **결측치 분석** | 데이터가 비어 있는 부분 확인 |
| **이상치 탐색** | 일반적인 분포에서 벗어난 값 탐색 |
| **기초 통계** | 평균, 표준편차, 최솟값, 최댓값 등 확인 |
| **변수 간 관계 분석** | 데이터의 패턴과 관계 탐색 |
| **인사이트 도출** | 분석 결과를 바탕으로 다음 분석 방향 결정 |

### 🎯 학습 목표

Pandas로 데이터를 정리하고 Matplotlib과 Seaborn으로 시각화하여 실제 데이터에서 패턴과 문제점을 발견할 수 있다.

또한 EDA의 기본 절차를 이해하고, 데이터의 특성에 맞는 분석 방법을 선택할 수 있다.

---

## 8. 학습 체크리스트

- [ ] Matplotlib으로 선 그래프, 막대 그래프, 산점도를 생성할 수 있다.
- [ ] 히스토그램으로 데이터의 분포를 확인할 수 있다.
- [ ] 박스 플롯으로 중앙값과 이상치 후보를 확인할 수 있다.
- [ ] 히트맵으로 상관관계 행렬을 시각화할 수 있다.
- [ ] Seaborn의 주요 시각화 함수를 사용할 수 있다.
- [ ] Pandas Plot으로 간단한 그래프를 생성할 수 있다.
- [ ] EDA의 목적과 일반적인 절차를 설명할 수 있다.
- [ ] Pandas로 결측치와 기초 통계를 확인할 수 있다.
- [ ] 실제 데이터셋에서 분석 질문을 설정하고 적절한 그래프를 선택할 수 있다.
