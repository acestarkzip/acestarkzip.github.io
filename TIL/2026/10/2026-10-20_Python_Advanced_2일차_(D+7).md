# Python : 파이썬 프로그래밍 심화 문법 2일차 (D+7)

> 📚 **2주차 Python 기초 & 심화 문법**  
> **학습 기간:** 2026.10.15 (Thu) ~ 2026.10.20 (Tue)  
> **학습 일차:** D+7  
> **학습 주제:** OOP (Object-Oriented Programming)  
> **학습 날짜:** 2026.10.20 (Tue)

---

## 📑 목차

- [1. OOP란?](#1-oop란)
- [2. 클래스와 인스턴스](#2-클래스와-인스턴스)
- [3. 주요 OOP 개념](#3-주요-oop-개념)
  - [3.1 상속](#31-상속-inheritance)
  - [3.2 다형성](#32-다형성-polymorphism)
  - [3.3 캡슐화](#33-캡슐화-encapsulation)
  - [3.4 추상화](#34-추상화-abstraction)
- [4. 핵심 요약](#4-핵심-요약)
- [5. 학습 체크리스트](#5-학습-체크리스트)

---

## 1. OOP란?

**OOP(Object-Oriented Programming, 객체지향 프로그래밍)** 는 데이터와 기능을 하나의 객체로 묶어 프로그램을 설계하는 방식이다.

예를 들어 로봇을 프로그램으로 표현한다면 다음과 같이 생각할 수 있다.

- **데이터:** 로봇 이름, 배터리 잔량, 이동 속도
- **기능:** 이동하기, 충전하기, 작업하기

이처럼 관련 데이터와 기능을 하나의 객체로 묶으면 프로그램을 더 체계적으로 설계하고 관리할 수 있다.

### 📌 OOP의 주요 용어

| 용어 | 의미 | 예시 |
|---|---|---|
| **Class (클래스)** | 객체를 만들기 위한 설계도 | `Robot` |
| **Instance (인스턴스)** | 클래스를 기반으로 생성한 실제 객체 | `Robot("R1")` |
| **Attribute (속성)** | 객체가 가지는 데이터 | `name`, `battery` |
| **Method (메서드)** | 객체가 수행하는 기능 | `move()`, `charge()` |

---

## 2. 클래스와 인스턴스

### 📃 2.1 클래스 정의하기

Python에서는 `class` 키워드를 사용해 클래스를 정의한다.

```python
class Robot:
    def __init__(self, name):
        self.name = name

    def move(self):
        print(f"{self.name} is moving")


robot = Robot("R1")
robot.move()

# 출력:
# R1 is moving
```

### 📌 코드 분석

| 코드 | 설명 |
|---|---|
| `class Robot:` | `Robot` 클래스 정의 |
| `__init__()` | 인스턴스가 생성될 때 초기화 작업을 수행하는 메서드 |
| `self` | 메서드가 호출된 인스턴스 자신을 가리키는 매개변수 |
| `self.name = name` | 전달받은 이름을 인스턴스의 속성으로 저장 |
| `def move(self):` | 로봇이 이동하는 기능을 메서드로 정의 |
| `Robot("R1")` | `Robot` 클래스를 기반으로 인스턴스 생성 |
| `robot.move()` | 생성한 인스턴스의 `move()` 메서드 호출 |

### 📌 `self` 이해하기

`self`는 현재 메서드를 호출한 인스턴스를 가리킨다.

```python
class Robot:
    def __init__(self, name):
        self.name = name


robot1 = Robot("R1")
robot2 = Robot("R2")

print(robot1.name)  # R1
print(robot2.name)  # R2
```

같은 클래스로 객체를 여러 개 생성하더라도 각 인스턴스는 서로 다른 속성값을 가질 수 있다.

- `robot1.name` → `"R1"`
- `robot2.name` → `"R2"`

**핵심:** 클래스는 설계도이고, 인스턴스는 그 설계도를 바탕으로 생성한 개별 객체다.

---

## 3. 주요 OOP 개념

객체지향 프로그래밍의 대표적인 네 가지 핵심 개념은 다음과 같다.

| 개념 | 영어 | 의미 |
|---|---|---|
| **상속** | Inheritance | 기존 클래스의 속성과 기능을 물려받음 |
| **다형성** | Polymorphism | 같은 인터페이스를 사용해도 객체에 따라 다르게 동작 |
| **캡슐화** | Encapsulation | 데이터와 기능을 묶고 내부 데이터에 대한 접근을 관리 |
| **추상화** | Abstraction | 핵심 기능과 인터페이스를 정의하고 세부 구현을 감춤 |

### 3.1 상속 (Inheritance)

**상속은 기존 클래스의 속성과 메서드를 물려받아 재사용하거나 확장하는 개념이다.**

예를 들어 모든 동물은 소리를 내는 기능을 가질 수 있다. `Animal` 클래스에 공통 기능을 정의하고, `Dog` 클래스가 이를 상속받도록 만들 수 있다.

```python
class Animal:
    def speak(self):
        print("소리를 냅니다.")


class Dog(Animal):
    pass


dog = Dog()
dog.speak()

# 출력:
# 소리를 냅니다.
```

### 📌 코드 분석

- `Animal`: 부모 클래스
- `Dog`: 자식 클래스
- `class Dog(Animal):`: `Animal` 클래스를 상속
- `pass`: 아직 구현할 코드가 없을 때 사용하는 자리 채움 문장
- `dog.speak()`: 부모 클래스에서 정의한 메서드를 호출

**핵심:** 상속을 사용하면 기존 코드를 반복해서 작성하지 않고도 기능을 재사용할 수 있다.

---

### 3.2 다형성 (Polymorphism)

**다형성은 같은 메서드 호출이 객체의 종류에 따라 서로 다른 동작을 수행하는 개념이다.**

```python
class Dog:
    def speak(self):
        print("멍멍")


class Cat:
    def speak(self):
        print("야옹")


animals = [Dog(), Cat()]

for animal in animals:
    animal.speak()

# 출력:
# 멍멍
# 야옹
```

### 📌 코드 분석

- `Dog`와 `Cat`은 모두 `speak()` 메서드를 가지고 있다.
- 반복문에서 동일하게 `animal.speak()`를 호출한다.
- 하지만 실제 객체가 `Dog`인지 `Cat`인지에 따라 결과가 달라진다.

**핵심:** 같은 방식으로 기능을 호출하면서 객체마다 서로 다른 동작을 수행할 수 있다.

로봇 시뮬레이션에서도 로봇 종류마다 `move()` 메서드의 동작을 다르게 구현하는 방식으로 응용할 수 있다.

---

### 3.3 캡슐화 (Encapsulation)

**캡슐화는 데이터와 기능을 하나로 묶고, 객체 내부의 데이터에 대한 접근을 관리하는 개념이다.**

```python
class Robot:
    def __init__(self):
        self.__battery = 100

    def get_battery(self):
        return self.__battery


robot = Robot()

print(robot.get_battery())

# 출력:
# 100
```

### 📌 코드 분석

- `self.__battery`: 이름 앞에 밑줄 두 개(`__`)를 붙인 속성
- `get_battery()`: 배터리 값을 반환하는 메서드
- `robot.get_battery()`: 메서드를 통해 배터리 값에 접근

Python에서 `__battery`처럼 이름 앞에 밑줄 두 개를 붙이면 **이름 변경(Name Mangling)** 이 적용된다. 이는 속성에 대한 직접적인 접근을 어렵게 만들지만, 완전한 보안 기능은 아니다.

또한 Python의 캡슐화는 단순히 속성 이름을 숨기는 것뿐 아니라, 메서드와 속성을 통해 데이터의 접근 및 변경 방식을 관리하는 데 목적이 있다.

**핵심:** 객체의 내부 데이터를 무분별하게 변경하지 않도록 접근 방식을 설계할 수 있다.

---

### 3.4 추상화 (Abstraction)

**추상화는 공통적으로 필요한 기능의 형태를 정의하고, 구체적인 동작 방식은 구현 단계에서 결정하도록 하는 개념이다.**

Python에서는 `abc` 모듈을 사용해 추상 클래스를 정의할 수 있다.

```python
from abc import ABC, abstractmethod


class Robot(ABC):
    @abstractmethod
    def move(self):
        pass


class WheeledRobot(Robot):
    def move(self):
        print("바퀴로 이동합니다.")


robot = WheeledRobot()
robot.move()

# 출력:
# 바퀴로 이동합니다.
```

### 📌 코드 분석

| 코드 | 설명 |
|---|---|
| `from abc import ABC, abstractmethod` | 추상 클래스 구현에 필요한 기능을 가져옴 |
| `class Robot(ABC):` | 추상 클래스로 사용할 `Robot` 클래스 정의 |
| `@abstractmethod` | 하위 클래스에서 구현해야 하는 추상 메서드 지정 |
| `def move(self):` | 로봇의 이동 기능에 대한 인터페이스 정의 |
| `class WheeledRobot(Robot):` | `Robot` 추상 클래스를 상속 |
| `def move(self):` | 바퀴형 로봇의 구체적인 이동 방식 구현 |

`Robot`은 이동 기능이 필요하다는 사실만 정의하고, 실제 이동 방식은 `WheeledRobot`에서 구현한다.

추상 메서드를 구현하지 않은 하위 클래스는 일반적으로 인스턴스를 생성할 수 없다.

**핵심:** 공통 기능의 규칙을 먼저 정의하고, 각 객체가 자신의 방식으로 세부 기능을 구현하도록 설계할 수 있다.

---

## 4. 핵심 요약

### 📌 OOP 핵심 개념 정리

| 개념 | 쉽게 이해하기 | 핵심 목적 |
|---|---|---|
| **Class** | 설계도 | 객체의 구조와 기능 정의 |
| **Instance** | 설계도로 만든 실제 제품 | 클래스 기반 객체 생성 |
| **Inheritance** | 부모의 기능 물려받기 | 코드 재사용 및 확장 |
| **Polymorphism** | 같은 명령, 다른 동작 | 다양한 객체를 일관된 방식으로 사용 |
| **Encapsulation** | 내부 데이터를 관리하는 보호막 | 데이터 접근 및 변경 방식 관리 |
| **Abstraction** | 필요한 기능의 규칙만 먼저 정의 | 구현 세부사항과 인터페이스 분리 |

### 📌 로봇을 예시로 이해하기

- **Class:** `Robot`이라는 로봇 설계도를 정의한다.
- **Instance:** `Robot("R1")`로 실제 로봇 객체를 생성한다.
- **Inheritance:** `WheeledRobot`이 `Robot`의 공통 기능을 물려받는다.
- **Polymorphism:** 바퀴형 로봇과 보행형 로봇이 각자의 방식으로 `move()`를 실행한다.
- **Encapsulation:** 배터리 잔량을 속성과 메서드로 관리한다.
- **Abstraction:** 모든 로봇이 `move()` 기능을 제공하도록 규칙을 정의한다.

---

## 5. 학습 체크리스트

- [ ] `class`를 사용해 클래스를 정의할 수 있다.
- [ ] 클래스로 인스턴스를 생성할 수 있다.
- [ ] `__init__()`과 `self`의 역할을 설명할 수 있다.
- [ ] 속성과 메서드의 차이를 이해한다.
- [ ] 상속을 사용해 기존 기능을 재사용할 수 있다.
- [ ] 다형성이 무엇인지 코드로 설명할 수 있다.
- [ ] 캡슐화와 `__` 속성 이름의 의미를 이해한다.
- [ ] `ABC`와 `@abstractmethod`를 사용해 추상 클래스를 작성할 수 있다.

---

## 🎯 학습 목표

클래스를 사용해 객체를 생성하고, 객체지향 프로그래밍의 네 가지 핵심 원리인 **상속, 다형성, 캡슐화, 추상화**를 이해한다.

이를 바탕으로 로봇과 시뮬레이션 환경의 구성 요소를 객체 단위로 설계하는 기초를 익힌다.

