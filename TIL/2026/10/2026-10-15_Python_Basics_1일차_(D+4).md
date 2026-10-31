# 🐍 Python : 파이썬 프로그래밍 기초 문법 1일차 (D+4)

> 📅 날짜: 2026-10-15  
> 📚 과정: 2주차 Python 기초&심화 문법 (2026.10.15 Thu ~ 2026.10.20 Tue)  
> ⏱️ 학습 기간: Total 4 days

---

## 📑 목차

- [📕 A. Python Intro](#-a-python-intro-20261015-thu)
  - [📃 a. Python (파이썬 소개 및 IDE 설치)](#-a-python-파이썬-소개-및-ide-설치)
  - [📃 b. Visual Studio Code (VS Code 설치와 실행법)](#-b-visual-studio-code-vs-code-설치와-실행법)
  - [📃 c. Input and Output (입력과 출력, 변수와 데이터 타입)](#-c-input-and-output-입력과-출력-변수와-데이터-타입)
  - [📃 d. Operators (산술, 비교, 논리, 멤버십 연산자)](#-d-operators-산술-비교-논리-멤버십-연산자)
  - [📃 e. Conditionals (조건문)](#-e-conditionals-조건문)
  - [📃 f. Loops (반복문)](#-f-loops-반복문)
- [💡 핵심 요약](#-핵심-요약)

---

## 📕 A. Python Intro (2026.10.15 Thu)

### 📃 a. Python (파이썬 소개 및 IDE 설치)

- **Python**: 문법이 간결하고 AI, 데이터 분석, 자동화 등에 널리 사용되는 프로그래밍 언어
- **IDE (Integrated Development Environment)**: 코드 작성, 실행, 디버깅 등을 지원하는 개발 환경
- **주요 활용 분야**
  - AI 및 머신러닝
  - 데이터 분석
  - 로봇 제어 및 시뮬레이션
  - 업무 자동화

### 📃 b. Visual Studio Code (VS Code 설치와 실행법)

- **VS Code**: 확장 기능을 통해 Python 개발 환경을 구성할 수 있는 코드 편집기
- **Python Extension**: Python 코드 실행 및 디버깅 지원
- **Terminal**: 명령어를 입력해 Python 프로그램 실행

**💻 기본 명령어**

```bash
# Python 버전 확인
python --version

# Python 프로그램 실행
python main.py
```

> 💡 Windows 환경에서는 설치 방식에 따라 `python` 대신 `py` 명령어를 사용할 수도 있습니다.

### 📃 c. Input and Output (입력과 출력, 변수와 데이터 타입)

- **변수(Variable)**: 데이터를 저장하는 이름
- **입력(Input)**: `input()`으로 사용자 입력 받기
- **출력(Output)**: `print()`로 결과 출력
- **데이터 타입(Data Type)**: 데이터의 종류를 구분하는 유형

**📌 주요 데이터 타입**

| 타입 | 의미 | 예시 |
|---|---|---|
| `int` | 정수 | `10` |
| `float` | 실수 | `3.14` |
| `str` | 문자열 | `"Robot"` |
| `bool` | 참·거짓 | `True`, `False` |
| `list` | 여러 값을 저장하는 목록 | `[1, 2, 3]` |

**💻 실습 예제**

```python
# 사용자 입력 받기
name = input("이름을 입력하세요: ")
age = int(input("나이를 입력하세요: "))

# 입력값 출력
print(name, age)

# 변수의 데이터 타입 확인
print(type(age))
```

**📌 주요 함수**

| 함수 | 기능 |
|---|---|
| `input()` | 사용자 입력 받기 |
| `print()` | 데이터 출력 |
| `type()` | 데이터 타입 확인 |
| `int()` | 정수형으로 변환 |
| `float()` | 실수형으로 변환 |
| `str()` | 문자열로 변환 |

> 💡 `input()`은 기본적으로 문자열(`str`)을 반환합니다. 입력값을 숫자로 사용하려면 `int()` 또는 `float()`으로 변환해야 합니다.

### 📃 d. Operators (산술, 비교, 논리, 멤버십 연산자)

- **산술 연산자**: 수학적 계산 수행
- **비교 연산자**: 두 값의 크기나 동일 여부 비교
- **논리 연산자**: 여러 조건을 조합하여 판단
- **멤버십 연산자**: 특정 값이 데이터에 포함되어 있는지 확인

**📌 연산자 종류**

| 종류 | 연산자 | 예시 |
|---|---|---|
| 산술 | `+`, `-`, `*`, `/`, `//`, `%`, `**` | `10 % 3 → 1` |
| 비교 | `==`, `!=`, `>`, `<`, `>=`, `<=` | `10 > 5 → True` |
| 논리 | `and`, `or`, `not` | `True and False → False` |
| 멤버십 | `in`, `not in` | `"a" in "cat" → True` |

**💻 실습 예제**

```python
# 산술 연산자
print(10 + 3)   # 13
print(10 / 3)   # 3.333...
print(10 // 3)  # 3
print(10 % 3)   # 1
print(2 ** 3)   # 8

# 비교 연산자
print(10 > 5)   # True
print(10 == 5)  # False

# 논리 연산자
print(True and False)  # False
print(True or False)   # True
print(not True)        # False

# 멤버십 연산자
print("a" in "cat")       # True
print("z" not in "cat")   # True
```

**📌 자주 혼동하는 산술 연산자**

| 연산자 | 의미 | 예시 |
|---|---|---|
| `/` | 나눗셈 | `10 / 3 → 3.333...` |
| `//` | 몫을 구하는 나눗셈 | `10 // 3 → 3` |
| `%` | 나머지 | `10 % 3 → 1` |
| `**` | 거듭제곱 | `2 ** 3 → 8` |

### 📃 e. Conditionals (조건문)

- **조건문(Conditional)**: 조건의 참·거짓에 따라 실행할 코드를 결정
- `if`: 조건이 참일 때 실행
- `elif`: 추가 조건 검사
- `else`: 앞선 조건이 모두 거짓일 때 실행
- **들여쓰기(Indentation)**: Python에서 코드 블록을 구분하는 데 사용

**💻 실습 예제**

```python
score = 85

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")
```

**📌 실행 결과**

```text
B
```

**📌 조건문 구조**

| 키워드 | 기능 |
|---|---|
| `if` | 첫 번째 조건 검사 |
| `elif` | 추가 조건 검사 |
| `else` | 앞선 조건이 모두 거짓일 때 실행 |

> 💡 Python에서는 중괄호 `{}` 대신 들여쓰기를 사용하여 코드 블록을 구분합니다. 일반적으로 공백 4칸을 사용합니다.

### 📃 f. Loops (반복문)

- **반복문(Loop)**: 동일한 작업을 여러 번 실행하는 구조
- `for`: 시퀀스의 항목을 순서대로 반복
- `while`: 조건이 참인 동안 반복
- `range()`: 숫자 범위를 생성하는 함수
- `break`: 반복문 종료
- `continue`: 현재 반복을 건너뛰고 다음 반복으로 이동

**💻 `for` 반복문 실습**

```python
# 0부터 2까지 출력
for i in range(3):
    print(i)
```

**실행 결과**

```text
0
1
2
```

**💻 `while` 반복문 실습**

```python
count = 0

while count < 3:
    print(count)
    count += 1
```

**실행 결과**

```text
0
1
2
```

**💻 `break`와 `continue` 실습**

```python
# break: 반복문 종료
for i in range(5):
    if i == 3:
        break
    print(i)

# continue: 현재 반복 건너뛰기
for i in range(5):
    if i == 2:
        continue
    print(i)
```

**📌 반복문 비교**

| 구분 | 기능 | 활용 예시 |
|---|---|---|
| `for` | 정해진 범위나 데이터의 항목 반복 | 목록의 데이터 처리 |
| `while` | 조건이 참인 동안 반복 | 조건을 만족할 때까지 실행 |
| `break` | 반복문 종료 | 특정 조건에서 작업 중단 |
| `continue` | 현재 반복 건너뛰기 | 특정 항목 제외 |

> ⚠️ `while` 반복문에서는 조건이 언젠가 거짓이 되도록 변수를 갱신하거나 종료 조건을 설정해야 합니다. 그렇지 않으면 무한 반복이 발생할 수 있습니다.

---

## 💡 핵심 요약

- **Python**: AI·데이터 분석·로봇 개발에 활용되는 프로그래밍 언어
- **VS Code**: Python 코드 작성 및 실행 환경
- **Input / Output & Data Types**: 데이터 입력·출력과 자료형 이해
- **Operators**: 계산, 비교, 논리 판단 및 포함 여부 확인
- **Conditionals**: 조건에 따라 코드 실행
- **Loops**: 반복 작업 자동화

### 🎯 학습 목표

Python의 기본 자료형과 연산자를 이해하고, 조건문과 반복문을 활용해 간단한 프로그램을 작성할 수 있다.

### ✅ 학습 체크리스트

- [ ] VS Code에서 Python 파일 생성 및 실행하기
- [ ] `input()`과 `print()`를 사용하여 입력과 출력 처리하기
- [ ] `int`, `float`, `str`, `bool`, `list`의 차이 이해하기
- [ ] `type()`으로 데이터 타입 확인하기
- [ ] 산술·비교·논리·멤버십 연산자 사용하기
- [ ] `if`, `elif`, `else`로 조건문 작성하기
- [ ] `for`, `while`로 반복문 작성하기
- [ ] `break`, `continue`의 차이 이해하기

---
