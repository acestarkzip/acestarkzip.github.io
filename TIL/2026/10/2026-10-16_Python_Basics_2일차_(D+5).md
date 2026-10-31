# 🐍 Python : 파이썬 프로그래밍 기초 문법 2일차 (D+5)

> 📅 날짜: 2026-10-16  
> 📚 과정: 2주차 Python 기초&심화 문법 (2026.10.15 Thu ~ 2026.10.20 Tue)  
> ⏱️ 학습 기간: Total 4 days

---

## 📑 목차

- [📕 B. Iterables](#-b-iterables-20261016-fri)
  - [📃 a. List (리스트)](#-a-list-리스트)
  - [📃 b. Nested Loop (중첩 반복문)](#-b-nested-loop-중첩-반복문)
  - [📃 c. List Comprehension (리스트 컴프리헨션)](#-c-list-comprehension-리스트-컴프리헨션)
  - [📃 d. String (문자열)](#-d-string-문자열)
  - [📃 e. Tuple, Dictionary, Set (튜플, 딕셔너리, 세트)](#-e-tuple-dictionary-set-튜플-딕셔너리-세트)
- [💡 핵심 요약](#-핵심-요약)

---

## 📕 B. Iterables (2026.10.16 Fri)

### 📃 a. List (리스트)

- **List (`list`)**: 여러 데이터를 순서대로 저장하는 자료형
- 순서가 있고, 수정·추가·삭제 가능 (**Mutable**)
- 인덱스는 `0`부터 시작
- 여러 종류의 데이터 타입을 하나의 리스트에 저장할 수도 있음

**📌 자주 사용하는 문법**

| 문법 | 기능 |
|---|---|
| `numbers[0]` | 첫 번째 요소 조회 |
| `numbers.append(x)` | 요소 추가 |
| `numbers.remove(x)` | 특정 값 삭제 |
| `numbers.pop()` | 마지막 요소 삭제 및 반환 |
| `len(numbers)` | 요소 개수 확인 |

**💻 실습 예제**

```python
# 리스트 생성
numbers = [10, 20, 30]

# 요소 추가
numbers.append(40)

# 첫 번째 요소 조회
print(numbers[0])  # 10

# 전체 리스트 출력
print(numbers)  # [10, 20, 30, 40]

# 마지막 요소 삭제 및 반환
last = numbers.pop()
print(last)     # 40
print(numbers)  # [10, 20, 30]

# 리스트 길이 확인
print(len(numbers))  # 3
```

> 💡 `remove(x)`는 값 `x`를 찾아 삭제하고, `pop()`은 지정한 인덱스의 요소를 삭제하면서 그 값을 반환합니다. 인덱스를 생략하면 마지막 요소가 삭제됩니다.

### 📃 b. Nested Loop (중첩 반복문)

- **Nested Loop**: 반복문 안에 또 다른 반복문을 작성하는 구조
- 바깥쪽 반복이 한 번 실행될 때 안쪽 반복이 모두 실행됨
- 표, 좌표, 조합 등 여러 단계의 반복 작업에 활용

**💻 실습 예제**

```python
for i in range(2):
    for j in range(3):
        print(i, j)
```

**📌 실행 결과**

```text
0 0
0 1
0 2
1 0
1 1
1 2
```

**📌 실행 원리**

1. 바깥쪽 반복문에서 `i = 0`으로 시작
2. 안쪽 반복문에서 `j = 0, 1, 2`를 차례로 실행
3. 안쪽 반복문이 끝나면 바깥쪽 반복문으로 이동
4. `i = 1`에서 안쪽 반복문을 다시 실행

> 💡 중첩 반복문은 2차원 데이터 처리, 행렬 연산, 로봇의 좌표 조합 계산 등 다양한 작업에 활용할 수 있습니다.

### 📃 c. List Comprehension (리스트 컴프리헨션)

- **List Comprehension**: 반복문을 활용해 리스트를 간결하게 생성하는 문법
- 조건을 추가해 특정 데이터만 선택 가능
- 일반적인 `for` 반복문보다 짧은 코드로 리스트를 생성할 수 있음

**💻 실습 예제 1 — 제곱 리스트 생성**

```python
# 0부터 4까지의 숫자를 제곱
squares = [x**2 for x in range(5)]

print(squares)  # [0, 1, 4, 9, 16]
```

**💻 실습 예제 2 — 짝수만 선택**

```python
# 0부터 9까지의 숫자 중 짝수만 선택
even = [x for x in range(10) if x % 2 == 0]

print(even)  # [0, 2, 4, 6, 8]
```

**📌 기본 구조**

```python
[표현식 for 변수 in 반복가능한객체 if 조건]
```

| 구성 요소 | 의미 |
|---|---|
| 표현식 | 리스트에 저장할 값 |
| `for 변수 in 반복가능한객체` | 데이터를 하나씩 반복 |
| `if 조건` | 조건을 만족하는 데이터만 선택 |

**📌 일반 반복문과 비교**

```python
# 일반적인 for 반복문
squares = []

for x in range(5):
    squares.append(x**2)

# 리스트 컴프리헨션
squares = [x**2 for x in range(5)]
```

> 💡 리스트 컴프리헨션은 데이터 전처리나 머신러닝 학습용 데이터 구성 등 반복적인 데이터 처리에 유용합니다.

### 📃 d. String (문자열)

- **String (`str`)**: 문자들의 연속된 데이터
- 순서가 있으며 인덱싱과 슬라이싱 가능
- 문자열은 생성 후 개별 문자를 직접 수정할 수 없음 (**Immutable**)

**📌 자주 사용하는 문자열 문법**

| 문법 | 기능 |
|---|---|
| `text[0]` | 첫 번째 문자 조회 |
| `text[0:3]` | 0번부터 2번까지 추출 |
| `text.lower()` | 소문자로 변환 |
| `text.upper()` | 대문자로 변환 |
| `text.strip()` | 양끝 공백 제거 |
| `text.split()` | 문자열 분리 |
| `"-".join(list)` | 문자열 연결 |

**💻 실습 예제**

```python
text = "Hello Python"

# 인덱싱
print(text[0])       # H

# 슬라이싱
print(text[0:5])     # Hello

# 소문자로 변환
print(text.lower())  # hello python

# 대문자로 변환
print(text.upper())  # HELLO PYTHON

# 양끝 공백 제거
message = "  Hello Robot  "
print(message.strip())  # Hello Robot

# 문자열 분리
words = text.split()
print(words)  # ['Hello', 'Python']

# 문자열 연결
result = "-".join(words)
print(result)  # Hello-Python
```

**📌 문자열 인덱싱과 슬라이싱**

문자열 `Hello Python`을 기준으로 살펴보면 다음과 같습니다.

| 표현식 | 결과 | 설명 |
|---|---|---|
| `text[0]` | `'H'` | 첫 번째 문자 |
| `text[1]` | `'e'` | 두 번째 문자 |
| `text[0:5]` | `'Hello'` | 인덱스 0~4 |
| `text[6:]` | `'Python'` | 인덱스 6부터 끝까지 |
| `text[-1]` | `'n'` | 마지막 문자 |

> 💡 문자열은 수정할 수 없는 자료형이지만, `lower()`나 `replace()` 같은 메서드를 사용해 변환된 새로운 문자열을 만들 수 있습니다.

### 📃 e. Tuple, Dictionary, Set (튜플, 딕셔너리, 세트)

Python에서는 여러 종류의 데이터를 목적에 따라 저장할 수 있습니다.

**📌 주요 자료형 비교**

| 자료형 | 특징 | 예시 |
|---|---|---|
| **Tuple (`tuple`)** | 순서 있음, 요소 변경 불가 | `(10, 20, 30)` |
| **Dictionary (`dict`)** | 키와 값으로 데이터 저장 | `{"name": "Robot", "age": 3}` |
| **Set (`set`)** | 중복 제거, 인덱스를 통한 접근 불가 | `{1, 2, 3}` |

#### 1. Tuple (튜플)

- 생성 후 요소 변경 불가 (**Immutable**)
- 순서가 있으며 인덱싱 가능
- 좌표나 변경하지 않을 데이터 저장에 활용

**💻 실습 예제**

```python
# 튜플 생성
point = (10, 20)

# 첫 번째 요소 조회
print(point[0])  # 10

# 전체 튜플 출력
print(point)  # (10, 20)
```

#### 2. Dictionary (딕셔너리)

- `key: value` 형태로 데이터 저장
- 키를 통해 값을 조회하고 수정 가능
- 각 키는 중복될 수 없으며, 일반적으로 문자열을 키로 많이 사용

**💻 실습 예제**

```python
# 딕셔너리 생성
robot = {"name": "Robot", "age": 3}

# 키를 사용해 값 조회
print(robot["name"])  # Robot

# 값 수정
robot["age"] = 4

# 새로운 키와 값 추가
robot["type"] = "Humanoid"

print(robot)
# {'name': 'Robot', 'age': 4, 'type': 'Humanoid'}
```

#### 3. Set (세트)

- 중복된 값을 자동으로 제거
- 인덱스를 이용한 요소 접근 불가
- 합집합(`|`), 교집합(`&`), 차집합(`-`) 연산 가능

**💻 실습 예제**

```python
# 중복된 값이 있는 세트 생성
numbers = {1, 2, 2, 3}

# 중복 제거 결과
print(numbers)  # {1, 2, 3}

# 집합 연산
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)  # 합집합: {1, 2, 3, 4, 5}
print(a & b)  # 교집합: {3}
print(a - b)  # 차집합: {1, 2}
```

> 💡 빈 세트는 `{}`가 아니라 `set()`으로 생성합니다. `{}`는 빈 딕셔너리를 의미합니다.

---

## 💡 핵심 요약

- **List**: 순서가 있고 수정 가능한 데이터 목록
- **Nested Loop**: 반복문 안에서 반복문 실행
- **List Comprehension**: 간결한 문법으로 리스트 생성
- **String**: 문자열 처리와 인덱싱·슬라이싱
- **Tuple**: 순서가 있고 요소를 변경할 수 없는 데이터
- **Dictionary**: 키와 값으로 데이터 관리
- **Set**: 중복 제거 및 집합 연산

### 🎯 학습 목표

Python의 주요 자료형과 반복 가능한 객체(Iterable)를 이해하고, 데이터를 효율적으로 저장·조회·처리할 수 있다.

### ✅ 학습 체크리스트

- [ ] 리스트의 인덱싱, 추가, 삭제 방법 이해하기
- [ ] 중첩 반복문으로 여러 단계의 반복 처리하기
- [ ] 리스트 컴프리헨션으로 새로운 리스트 생성하기
- [ ] 문자열 인덱싱과 슬라이싱 활용하기
- [ ] 문자열 메서드 `lower()`, `upper()`, `strip()`, `split()` 사용하기
- [ ] 튜플과 리스트의 차이 이해하기
- [ ] 딕셔너리에서 키를 이용해 값을 조회하고 수정하기
- [ ] 세트의 중복 제거 및 집합 연산 활용하기

---
