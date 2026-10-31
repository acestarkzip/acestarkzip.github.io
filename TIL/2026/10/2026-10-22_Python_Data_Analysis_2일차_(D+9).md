# Python : 데이터 분석 및 실무 활용 2일차 (D+9)

> 📚 **2주차 Python 데이터 분석**  
> **학습 기간:** 2026.10.21 (Wed) ~ 2026.10.23 (Fri)  
> **학습 일차:** D+9  
> **학습 주제:** Pandas  
> **학습 날짜:** 2026.10.22 (Thu)

---

## 📑 목차

- [1. Pandas란?](#1-pandas란)
- [2. Pandas 기본](#2-pandas-기본)
  - [2.1 Series와 DataFrame](#21-series와-dataframe)
  - [2.2 데이터 불러오기와 확인](#22-데이터-불러오기와-확인)
  - [2.3 데이터 선택과 조회](#23-데이터-선택과-조회)
  - [2.4 결측치 처리](#24-결측치-처리)
  - [2.5 데이터 정렬](#25-데이터-정렬)
- [3. Pandas 심화](#3-pandas-심화)
  - [3.1 groupby()](#31-groupby)
  - [3.2 agg()](#32-agg)
  - [3.3 apply()와 lambda](#33-apply와-lambda)
- [4. 핵심 요약](#4-핵심-요약)
- [5. 학습 체크리스트](#5-학습-체크리스트)

---

## 1. Pandas란?

**Pandas**는 표 형태의 데이터를 저장하고 조회·가공·분석할 수 있도록 지원하는 Python 라이브러리다.

엑셀의 표와 비슷한 형태로 데이터를 다룰 수 있어 데이터 분석, 통계, 머신러닝 등의 작업에서 자주 사용된다.

### 📌 주요 활용

- CSV 파일과 같은 데이터 파일 불러오기
- 행과 열을 선택해 필요한 데이터 조회
- 조건에 맞는 데이터 필터링
- 결측치 확인 및 처리
- 데이터 정렬
- 그룹별 통계 계산
- 데이터 변환 및 전처리

### 📌 NumPy와 Pandas의 차이

| 구분 | NumPy | Pandas |
|---|---|---|
| 주요 목적 | 수치 계산 | 표 형태의 데이터 분석 및 가공 |
| 핵심 자료구조 | `ndarray` | `Series`, `DataFrame` |
| 데이터 형태 | 주로 배열과 수치 데이터 | 행과 열로 구성된 표 |
| 주요 기능 | 배열 연산, 수학 계산 | 데이터 조회, 필터링, 결측치 처리, 그룹 분석 |

**핵심:** NumPy가 배열 연산에 강점이 있다면, Pandas는 행과 열로 구성된 데이터를 관리하고 분석하는 데 강점이 있다.

---

## 2. Pandas 기본

### 2.1 Series와 DataFrame

Pandas의 대표적인 자료구조는 `Series`와 `DataFrame`이다.

| 용어 | 의미 | 쉽게 이해하기 |
|---|---|---|
| **Series** | 1차원 데이터 구조 | 표의 한 열 |
| **DataFrame** | 2차원 데이터 구조 | 여러 행과 열로 구성된 표 |

### 📃 Series 예제

```python
import pandas as pd

scores = pd.Series([80, 90, 75])

print(scores)
```

실행 결과:

```text
0    80
1    90
2    75
dtype: int64
```

각 숫자는 데이터의 인덱스이며, 오른쪽 숫자는 실제 값이다.

### 📃 DataFrame 예제

```python
import pandas as pd

df = pd.DataFrame({
    "name": ["A", "B", "C"],
    "score": [80, 90, 75]
})

print(df)
```

실행 결과:

```text
  name  score
0    A     80
1    B     90
2    C     75
```

이 표는 `name`과 `score`라는 두 개의 열로 구성되어 있다.

- `name`: 이름 데이터
- `score`: 점수 데이터
- `0`, `1`, `2`: 각 행의 인덱스

---

### 2.2 데이터 불러오기와 확인

실제 데이터 분석에서는 CSV 파일과 같은 외부 데이터를 불러와 분석하는 경우가 많다.

### 📌 주요 문법

| 문법 | 기능 |
|---|---|
| `pd.read_csv("data.csv")` | CSV 파일 불러오기 |
| `df.head()` | 상위 5행 확인 |
| `df.tail()` | 하위 5행 확인 |
| `df.info()` | 열의 자료형과 데이터 정보 확인 |
| `df.describe()` | 수치형 데이터의 기초 통계 확인 |
| `df.shape` | 행과 열의 개수 확인 |

### 📃 실습 예제

```python
import pandas as pd

df = pd.DataFrame({
    "name": ["A", "B", "C"],
    "score": [80, 90, 75]
})

print(df.head())
print(df.shape)
print(df.describe())
```

### 📌 주요 함수 이해하기

**1. `head()` — 데이터 미리 보기**

```python
df.head()
```

기본적으로 상위 5행을 보여준다. 데이터가 많을 때 일부만 빠르게 확인할 수 있다.

**2. `info()` — 데이터 구조 확인**

```python
df.info()
```

각 열의 자료형, 결측치가 아닌 값의 개수, 메모리 사용량 등을 확인할 수 있다.

**3. `describe()` — 기초 통계 확인**

```python
df.describe()
```

수치형 데이터의 개수, 평균, 표준편차, 최솟값, 사분위수, 최댓값 등을 요약해서 보여준다.

**4. `shape` — 데이터 크기 확인**

```python
print(df.shape)
```

실행 결과:

```text
(3, 2)
```

이는 **행이 3개이고 열이 2개**라는 의미다.

---

### 2.3 데이터 선택과 조회

데이터 분석에서는 전체 데이터 중 필요한 행이나 열만 선택하는 작업이 중요하다.

### 📌 주요 문법

| 문법 | 기능 |
|---|---|
| `df["score"]` | 특정 열 선택 |
| `df.loc[]` | 레이블 기반 행·열 조회 |
| `df.iloc[]` | 정수 위치 기반 행·열 조회 |
| `df[df["score"] >= 80]` | 조건에 맞는 행 조회 |

### 📃 실습 예제

```python
import pandas as pd

df = pd.DataFrame({
    "name": ["A", "B", "C"],
    "score": [80, 90, 75]
})

# 특정 열 선택
print(df["score"])

# 첫 번째 행 조회
print(df.iloc[0])

# 이름이 A인 행 조회
print(df.loc[df["name"] == "A"])

# 점수가 80점 이상인 행 조회
print(df[df["score"] >= 80])
```

### 📌 `loc[]`와 `iloc[]`의 차이

| 구분 | `loc[]` | `iloc[]` |
|---|---|---|
| 기준 | 인덱스 레이블과 열 이름 | 정수 위치 |
| 예시 | `df.loc[0, "name"]` | `df.iloc[0, 0]` |
| 의미 | 인덱스 레이블이 0인 행의 `name` 값 | 첫 번째 행의 첫 번째 열 값 |

**핵심:** `loc[]`는 레이블을 기준으로, `iloc[]`는 정수 위치를 기준으로 데이터를 조회한다.

### 📌 조건으로 데이터 필터링하기

```python
high_scores = df[df["score"] >= 80]

print(high_scores)
```

실행 결과:

```text
  name  score
0    A     80
1    B     90
```

조건에 맞는 행만 선택하므로 원하는 데이터만 추출할 수 있다.

---

### 2.4 결측치 처리

**결측치(Missing Value)** 는 데이터가 비어 있거나 값이 존재하지 않는 상태를 의미한다.

실제 데이터에는 입력 누락이나 수집 오류 등으로 결측치가 포함될 수 있다.

### 📌 주요 문법

| 문법 | 기능 |
|---|---|
| `df.isnull()` | 결측치 여부 확인 |
| `df.isnull().sum()` | 열별 결측치 개수 확인 |
| `df.dropna()` | 결측치가 포함된 행 제거 |
| `df.fillna(value)` | 결측치를 지정한 값으로 대체 |

### 📃 실습 예제

```python
import pandas as pd

df = pd.DataFrame({
    "name": ["A", "B", "C"],
    "score": [80, None, 75]
})

# 열별 결측치 개수 확인
print(df.isnull().sum())

# 결측치가 포함된 행 제거
clean_df = df.dropna()

print(clean_df)
```

결측치 개수 확인 결과:

```text
name     0
score    1
dtype: int64
```

`score` 열에는 결측치가 하나 존재한다.

### 📌 결측치 처리 시 주의사항

- `dropna()`는 기본적으로 결측치가 하나라도 포함된 행을 제거한다.
- `fillna()`는 결측치를 지정한 값으로 대체한다.
- 결측치를 제거하거나 대체하기 전에 데이터가 누락된 이유를 확인하는 것이 좋다.

결측치를 무조건 제거하면 분석에 필요한 데이터까지 사라질 수 있으므로 상황에 맞는 처리 방법을 선택해야 한다.

---

### 2.5 데이터 정렬

`sort_values()`는 특정 열의 값을 기준으로 데이터를 정렬하는 함수다.

### 📃 실습 예제

```python
import pandas as pd

df = pd.DataFrame({
    "name": ["A", "B", "C"],
    "score": [80, 90, 75]
})

# 점수를 오름차순으로 정렬
print(df.sort_values("score"))

# 점수를 내림차순으로 정렬
print(df.sort_values("score", ascending=False))
```

### 📌 주요 옵션

| 문법 | 기능 |
|---|---|
| `df.sort_values("score")` | 점수 오름차순 정렬 |
| `df.sort_values("score", ascending=False)` | 점수 내림차순 정렬 |

기본적으로 오름차순으로 정렬하며, `ascending=False`를 지정하면 내림차순으로 정렬한다.

---

## 3. Pandas 심화

Pandas는 데이터를 단순히 조회하는 것뿐 아니라, 특정 기준으로 그룹화하고 통계를 계산하거나 함수를 적용해 데이터를 변환하는 기능도 제공한다.

이번에 학습할 주요 기능은 다음 세 가지다.

- `groupby()`: 데이터를 특정 기준으로 그룹화
- `agg()`: 그룹별 통계 계산
- `apply()`: 함수 적용을 통한 데이터 처리

### 3.1 `groupby()`

**`groupby()`는 특정 열의 값을 기준으로 데이터를 그룹화하는 기능이다.**

예를 들어 여러 팀의 점수가 저장되어 있다면 팀별로 데이터를 나누어 분석할 수 있다.

```python
import pandas as pd

df = pd.DataFrame({
    "team": ["A", "A", "B", "B"],
    "score": [80, 90, 70, 100]
})

# 팀별 평균 점수
print(df.groupby("team")["score"].mean())
```

실행 결과:

```text
team
A    85.0
B    85.0
Name: score, dtype: float64
```

### 📌 코드 분석

1. `groupby("team")`: `team` 열을 기준으로 데이터를 그룹화한다.
2. `["score"]`: 각 그룹에서 `score` 열을 선택한다.
3. `.mean()`: 그룹별 평균 점수를 계산한다.

| 팀 | 점수 | 평균 |
|---|---|---:|
| A | 80, 90 | 85.0 |
| B | 70, 100 | 85.0 |

**핵심:** `groupby()`는 전체 데이터를 특정 기준으로 나누어 그룹별 분석을 수행할 때 사용한다.

---

### 3.2 `agg()`

**`agg()`는 데이터에 하나 이상의 집계 함수를 적용해 요약 통계를 계산하는 기능이다.**

`groupby()`와 함께 사용하면 각 그룹의 평균, 최댓값, 최솟값 등을 한 번에 계산할 수 있다.

### 📃 실습 예제

```python
import pandas as pd

df = pd.DataFrame({
    "team": ["A", "A", "B", "B"],
    "score": [80, 90, 70, 100]
})

result = df.groupby("team")["score"].agg(["mean", "max", "min"])

print(result)
```

실행 결과:

```text
      mean  max  min
team
A     85.0   90   80
B     85.0  100   70
```

### 📌 코드 분석

| 코드 | 설명 |
|---|---|
| `groupby("team")` | 팀별로 그룹화 |
| `["score"]` | 점수 열 선택 |
| `agg()` | 여러 집계 함수 적용 |
| `"mean"` | 평균 계산 |
| `"max"` | 최댓값 계산 |
| `"min"` | 최솟값 계산 |

### 📌 `groupby()`와 `agg()`의 차이

- `groupby()`는 데이터를 특정 기준으로 그룹화한다.
- `agg()`는 그룹별로 필요한 통계값을 계산한다.

**핵심:** 두 기능을 함께 사용하면 그룹별 데이터를 요약해 비교할 수 있다.

---

### 3.3 `apply()`와 `lambda`

**`apply()`는 지정한 함수를 데이터에 적용하는 기능이다.**

열이나 행에 함수를 적용해 새로운 값을 계산하거나 데이터를 변환할 때 사용할 수 있다.

### 📃 실습 예제

```python
import pandas as pd

df = pd.DataFrame({
    "name": ["A", "B", "C"],
    "score": [80, 90, 75]
})

df["bonus_score"] = df["score"].apply(lambda x: x + 5)

print(df)
```

실행 결과:

```text
  name  score  bonus_score
0    A     80           85
1    B     90           95
2    C     75           80
```

### 📌 코드 분석

```python
df["bonus_score"] = df["score"].apply(lambda x: x + 5)
```

- `df["score"]`: 점수 열을 선택한다.
- `apply()`: 선택한 열의 각 값에 함수를 적용한다.
- `lambda x: x + 5`: 입력값 `x`에 5를 더하는 간단한 함수를 정의한다.
- `df["bonus_score"]`: 계산 결과를 새로운 열에 저장한다.

### 📌 `lambda`란?

`lambda`는 간단한 함수를 한 줄로 작성할 때 사용하는 문법이다.

일반 함수로 작성하면 다음과 같다.

```python
def add_bonus(x):
    return x + 5
```

이를 `lambda`로 표현하면 다음과 같다.

```python
lambda x: x + 5
```

두 코드는 입력값에 5를 더한다는 같은 기능을 수행한다.

### 📌 `apply()` 사용 시 알아둘 점

`apply()`는 데이터를 행이나 열 단위로 처리하거나 사용자 정의 함수를 적용할 때 유용하다. 다만 단순한 수치 연산은 `df["score"] + 5`처럼 직접 연산하는 편이 더 간결하고 효율적일 수 있다.

---

## 4. 핵심 요약

### 📌 Pandas 기본 문법

| 문법 | 핵심 기능 |
|---|---|
| `pd.read_csv()` | CSV 파일 불러오기 |
| `df.head()` | 상위 데이터 확인 |
| `df.info()` | 자료형과 데이터 정보 확인 |
| `df.describe()` | 기초 통계 확인 |
| `df.shape` | 행과 열의 개수 확인 |
| `df["컬럼명"]` | 특정 열 선택 |
| `df.loc[]` | 레이블 기반 조회 |
| `df.iloc[]` | 정수 위치 기반 조회 |
| `df.isnull().sum()` | 열별 결측치 개수 확인 |
| `df.dropna()` | 결측치가 포함된 행 제거 |
| `df.sort_values()` | 특정 열 기준 정렬 |

### 📌 Pandas 심화 문법

| 문법 | 핵심 기능 |
|---|---|
| `groupby()` | 특정 기준으로 데이터 그룹화 |
| `agg()` | 집계 함수를 이용한 통계 요약 |
| `apply()` | 함수 적용을 통한 데이터 처리 |
| `lambda` | 간단한 함수를 한 줄로 정의 |

### 🎯 학습 목표

Pandas로 데이터를 불러오고 정리하며, `groupby()`, `agg()`, `apply()`를 활용해 데이터를 그룹별로 분석할 수 있다.

---

## 5. 학습 체크리스트

- [ ] `Series`와 `DataFrame`의 차이를 설명할 수 있다.
- [ ] CSV 파일을 불러오고 데이터의 구조를 확인할 수 있다.
- [ ] `loc[]`와 `iloc[]`의 차이를 이해한다.
- [ ] 조건을 사용해 필요한 행을 필터링할 수 있다.
- [ ] 결측치를 확인하고 적절한 방법으로 처리할 수 있다.
- [ ] 특정 열을 기준으로 데이터를 정렬할 수 있다.
- [ ] `groupby()`를 사용해 데이터를 그룹화할 수 있다.
- [ ] `agg()`를 사용해 그룹별 통계를 계산할 수 있다.
- [ ] `apply()`와 `lambda`를 사용해 데이터를 변환할 수 있다.

