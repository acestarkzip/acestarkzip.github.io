# 🐍 Python : 파이썬 프로그래밍 심화 문법 1일차 (D+6)

> 📅 날짜: 2026-10-19  
> 📚 과정: 2주차 Python 기초&심화 문법 (2026.10.15 Thu ~ 2026.10.20 Tue)  
> ⏱️ 학습 기간: Total 4 days

---

## 📑 목차

- [📕 C. Function, Module & File I/O](#-c-function-module--file-io-20261019-mon)
  - [📃 a. Function (함수)](#-a-function-함수)
  - [📃 b. Module & Library (모듈과 라이브러리)](#-b-module--library-모듈과-라이브러리)
  - [📃 c. File I/O (파일 입출력)](#-c-file-io-파일-입출력)
- [💡 핵심 요약](#-핵심-요약)

---

## 📕 C. Function, Module & File I/O (2026.10.19 Mon)

### 📃 a. Function (함수)

- **Function**: 특정 작업을 수행하도록 코드를 묶어 놓은 기능
- `def`로 정의하고 필요할 때 호출하여 재사용
- **Parameter (매개변수)**: 함수가 전달받은 값을 저장하는 변수
- **Argument (인자)**: 함수를 호출할 때 실제로 전달하는 값
- **Return (반환값)**: 함수 실행 결과를 호출한 곳으로 돌려주는 값

**💻 실습 예제 1 — 기본 함수**

```python
# 두 숫자를 더하는 함수
def add(a, b):
    return a + b

# 함수 호출
result = add(3, 5)

print(result)  # 8
```

**📌 주요 문법**

| 문법 | 기능 |
|---|---|
| `def` | 함수 정의 |
| `return` | 함수 실행 결과 반환 |
| `()` | 함수 호출 및 매개변수 지정 |
| `return` 생략 | 기본적으로 `None` 반환 |

**💻 실습 예제 2 — 기본값이 있는 함수**

```python
def greet(name="Robot"):
    return f"Hello, {name}!"

print(greet())          # Hello, Robot!
print(greet("Python"))  # Hello, Python!
```

**💻 실습 예제 3 — 여러 값 반환**

```python
def calculate(a, b):
    return a + b, a - b

result = calculate(10, 3)

print(result)  # (13, 7)
```

> 💡 Python에서 여러 값을 `return`하면 일반적으로 튜플 형태로 반환됩니다.

### 📃 b. Module & Library (모듈과 라이브러리)

- **Module**: Python 코드가 작성된 하나의 `.py` 파일
- **Library**: 특정 기능을 활용할 수 있도록 모아 놓은 코드와 도구
- `import`로 모듈을 불러와 기능 사용
- **표준 라이브러리**는 Python 설치 시 기본 제공되며, 외부 라이브러리는 별도 설치가 필요할 수 있음

**💻 실습 예제 1 — 표준 라이브러리**

```python
# math 모듈 불러오기
import math

# 제곱근 계산
print(math.sqrt(16))  # 4.0
```

**💻 실습 예제 2 — 외부 라이브러리 설치**

```bash
# NumPy 설치
python -m pip install numpy
```

**💻 실습 예제 3 — NumPy 사용**

```python
# NumPy 모듈 불러오기
import numpy as np

# 배열 생성
numbers = np.array([1, 2, 3])

print(numbers)  # [1 2 3]
```

**📌 주요 개념**

| 개념 | 설명 | 예시 |
|---|---|---|
| Module | Python 코드가 작성된 파일 | `math` |
| Library | 특정 기능을 제공하는 코드 모음 | NumPy |
| `import` | 모듈 불러오기 | `import math` |
| `as` | 별칭 지정 | `import numpy as np` |
| `pip` | Python 패키지 설치 및 관리 도구 | `python -m pip install numpy` |

**📌 대표적인 라이브러리**

| 라이브러리 | 주요 기능 |
|---|---|
| `math` | 수학 관련 기능 |
| `NumPy` | 배열 및 수치 계산 |
| `pandas` | 데이터 분석 및 처리 |
| `matplotlib` | 데이터 시각화 |
| `scikit-learn` | 머신러닝 모델 및 데이터 분석 |

> 💡 AI와 로봇 시뮬레이션 분야에서는 NumPy를 활용한 수치 계산과 pandas를 활용한 데이터 처리가 자주 사용됩니다.

### 📃 c. File I/O (파일 입출력)

- **File I/O (Input/Output)**: 파일에서 데이터를 읽거나 파일에 데이터를 저장하는 작업
- `open()`으로 파일을 열고 `with`를 사용하면 작업이 끝난 뒤 파일이 자동으로 닫힘
- 파일을 열 때 읽기, 쓰기, 추가 등의 모드를 지정할 수 있음

**📌 파일 열기 모드**

| 모드 | 기능 |
|---|---|
| `r` | 읽기 (Read) |
| `w` | 쓰기 (Write), 기존 내용 덮어쓰기 |
| `a` | 추가 (Append), 기존 내용 뒤에 추가 |

**💻 실습 예제 1 — 파일 쓰기**

```python
# data.txt 파일에 문자열 저장
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("Hello Python\n")

print("파일 저장 완료")
```

**💻 실습 예제 2 — 파일 읽기**

```python
# data.txt 파일의 내용 읽기
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()

print(content)
```

**실행 결과**

```text
Hello Python
```

**💻 실습 예제 3 — 기존 내용 뒤에 추가**

```python
# 기존 파일의 끝에 새로운 내용 추가
with open("data.txt", "a", encoding="utf-8") as f:
    f.write("Welcome to Python!\n")

# 파일 전체 내용 확인
with open("data.txt", "r", encoding="utf-8") as f:
    print(f.read())
```

**실행 결과**

```text
Hello Python
Welcome to Python!
```

**📌 자주 사용하는 파일 처리 메서드**

| 메서드 | 기능 |
|---|---|
| `read()` | 파일 전체 내용 읽기 |
| `readline()` | 한 줄 읽기 |
| `readlines()` | 모든 줄을 리스트로 읽기 |
| `write()` | 문자열 쓰기 |

**💡 파일 입출력 시 주의사항**

- `w` 모드는 기존 파일이 있으면 내용을 덮어쓰므로 주의해야 함
- `r` 모드는 파일이 존재하지 않으면 오류가 발생함
- `a` 모드는 파일이 없으면 새 파일을 생성함
- `encoding="utf-8"`을 지정하면 한글 등 유니코드 텍스트를 처리할 때 도움이 됨
- `with open()`을 사용하면 작업이 끝난 뒤 파일을 자동으로 닫을 수 있음

---

## 💡 핵심 요약

- **Function**: 코드를 기능별로 나누어 재사용
- **Parameter & Return**: 함수에 값을 전달하고 실행 결과 반환
- **Module & Library**: 다른 파일이나 라이브러리의 기능 활용
- **File I/O**: 파일 읽기·쓰기·추가를 통한 데이터 관리

### 🎯 학습 목표

함수를 정의하고 모듈을 활용하며, 파일 입출력을 통해 데이터를 저장하고 불러올 수 있다.

### ✅ 학습 체크리스트

- [ ] `def`를 사용해 함수 정의하기
- [ ] 매개변수와 인자의 차이 이해하기
- [ ] `return`으로 결과 반환하기
- [ ] 기본값이 있는 함수 작성하기
- [ ] `import`로 모듈 불러오기
- [ ] `pip`를 사용해 외부 라이브러리 설치하기
- [ ] `open()`과 `with`를 사용해 파일 읽고 쓰기
- [ ] `r`, `w`, `a` 모드의 차이 이해하기

---
