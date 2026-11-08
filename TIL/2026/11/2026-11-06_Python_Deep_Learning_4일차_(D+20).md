<!-- notion-to-github-managed -->
<!-- notion-page-id: 410d9e129df780b3b03eed41d3c9c99d -->
<!-- notion-last-edited-time: 2026-11-08T06:15:00.000Z -->

# Python :  Deep Learning 4일차 (D+20)

> - **날짜 :** 2026-11-06
> - **간단메모 :** 딥러닝 | 시계열 데이터용 RNN 구조와 장기 기억을 위한 LSTM/GRU
> - **원본 노션 :** [바로가기 링크](https://app.notion.com/p/Python-Deep-Learning-4-D-20-410d9e129df780b3b03eed41d3c9c99d)

---

- [📚 4주차 Python Deep Learning (2026.11.03 Tue ~ 2026.11.09 Mon) | Total : 5 days](#notion-heading-410d9e129df780a28f6bf55f83b213e8)
  - [📕 D. Recurrent Neural Network (2026.11.06 Fri)](#notion-heading-410d9e129df7805583f5f3bb4465c7e8)
    - [📃 a. Sequence Data (시계열 데이터의 구조와 특징)](#notion-heading-410d9e129df7808597cdfbe090a699bc)
    - [📃 b. Sequence Models의 역사 (시계열 예측 모델들의 역사와 등장이유)](#notion-heading-410d9e129df7809daf9ed1836c984d46)
    - [📃 c. SimpleRNN의 구조와 모델학습](#notion-heading-410d9e129df780c49595eb0023aa5ad3)
    - [📃 d. 장기 문맥과 Gated RNN (장기 의존성 문제와 극복 배경)](#notion-heading-410d9e129df780af91c5f8b1ea9d2c9f)
    - [📃 e. LSTM (Long Short-Term Memory)](#notion-heading-410d9e129df780d1918ee2fac2fcace4)
    - [📃 f. RNN variants (다양한 확장 구조)](#notion-heading-410d9e129df78030a243d85d57e98056)
  - [📌 D. Recurrent Neural Network 핵심 요약](#notion-heading-410d9e129df7800b8887c632e554e00a)
    - [💡 오늘의 핵심 학습 포인트](#notion-heading-410d9e129df780c78406fea8241276a2)

<a name="notion-heading-410d9e129df780a28f6bf55f83b213e8"></a>

# 📚 4주차 Python Deep Learning (2026.11.03 Tue ~ 2026.11.09 Mon) | Total : 5 days

<a name="notion-heading-410d9e129df7805583f5f3bb4465c7e8"></a>

## 📕 D. Recurrent Neural Network (2026.11.06 Fri)

<a name="notion-heading-410d9e129df7808597cdfbe090a699bc"></a>

### 📃 a. Sequence Data (시계열 데이터의 구조와 특징)

<strong>Sequence Data (순차 데이터)</strong>

- 데이터가 특정한 순서에 따라 나열된 형태이다.
- 이전 데이터가 현재 데이터에 영향을 줄 수 있다.
- 예시: 문장, 음성, 주가, 날씨, 센서 데이터

<strong>Time Series Data (시계열 데이터)</strong>

- 시간의 흐름에 따라 수집된 데이터이다.
- Sequence Data의 한 종류이다.

<strong>주요 특징</strong>

| 특징 | 설명 |
| --- | --- |
| 순서 의존성 | 데이터의 순서가 중요함 |
| 시간적 의존성 | 과거 데이터가 현재에 영향을 줌 |
| 가변 길이 | 데이터마다 길이가 다를 수 있음 |
| 시간적 패턴 | 추세, 계절성, 순환성 등이 존재 |

<strong>활용 분야:</strong> 주가 예측, 날씨 예측, 음성 인식, 서버 자원 사용량 예측

---

<a name="notion-heading-410d9e129df7809daf9ed1836c984d46"></a>

### 📃 b. Sequence Models의 역사 (시계열 예측 모델들의 역사와 등장이유)

순차 데이터의 관계를 효과적으로 학습하기 위해 다양한 모델이 발전했다.

| 모델 | 등장 배경 및 특징 |
| --- | --- |
| ARIMA | 과거의 통계적 패턴을 활용한 시계열 예측 |
| RNN | 이전 시점의 정보를 다음 시점으로 전달 |
| LSTM (1997) | RNN의 장기 의존성 문제 완화 |
| GRU (2014) | LSTM의 구조를 간소화 |
| Seq2Seq | 입력 시퀀스를 출력 시퀀스로 변환 |
| Attention | 중요한 정보에 집중 |
| Transformer (2017) | Self-Attention 기반 병렬 처리 |

<strong>핵심:</strong> RNN에서 시작하여 LSTM, GRU, Attention, Transformer로 발전했다.

---

<a name="notion-heading-410d9e129df780c49595eb0023aa5ad3"></a>

### 📃 c. SimpleRNN의 구조와 모델학습

<strong>RNN (Recurrent Neural Network)</strong>

- 이전 시점의 정보를 현재 시점으로 전달하는 순환 신경망이다.
- 순차 데이터의 시간적 관계를 학습한다.

<strong>주요 구성 요소</strong>

| 구성 요소 | 설명 |
| --- | --- |
| Input | 현재 입력 데이터 |
| Hidden State | 이전 정보를 저장하고 전달하는 내부 상태 |
| Weight | 학습에 사용되는 가중치 |
| Output | 모델의 예측 결과 |

<strong>작동 과정</strong>

1. 현재 입력 데이터 전달
1. 이전 Hidden State 전달
1. 두 정보를 결합하여 계산
1. 새로운 Hidden State 생성
1. 다음 시점으로 정보 전달

<strong>주요 특징</strong>

- 시간 단계마다 동일한 가중치 사용 (Weight Sharing)
- BPTT(Backpropagation Through Time)를 이용한 역전파 학습
- 순차 데이터의 패턴 학습

<strong>입력 데이터 구조 (PyTorch)</strong>

`(Batch Size, Sequence Length, Input Features)`

| 항목 | 설명 |
| --- | --- |
| Batch Size | 한 번에 학습하는 데이터 개수 |
| Sequence Length | 하나의 데이터에 포함된 시간 단계 |
| Input Features | 시간 단계마다 입력되는 변수 개수 |

---

<a name="notion-heading-410d9e129df780af91c5f8b1ea9d2c9f"></a>

### 📃 d. 장기 문맥과 Gated RNN (장기 의존성 문제와 극복 배경)

<strong>Long-Term Dependency (장기 의존성)</strong>

- 오래전의 정보가 현재 결과에 영향을 주는 현상이다.
- 기존 RNN은 긴 시퀀스에서 과거 정보를 유지하기 어렵다.

<strong>주요 문제점</strong>

| 문제 | 설명 |
| --- | --- |
| Vanishing Gradient | 역전파 과정에서 기울기가 지나치게 작아짐 |
| Exploding Gradient | 역전파 과정에서 기울기가 지나치게 커짐 |

<strong>BPTT (Backpropagation Through Time)</strong>

- RNN의 시간 방향으로 오차를 역전파하는 학습 방식이다.

<strong>Gated RNN (게이트 기반 RNN)</strong>

- Gate를 통해 정보를 기억하거나 제거하는 구조이다.
- 장기 의존성 문제를 완화하기 위해 개발되었다.
- 대표 모델: LSTM, GRU

---

<a name="notion-heading-410d9e129df780d1918ee2fac2fcace4"></a>

### 📃 e. LSTM (Long Short-Term Memory)

<strong>LSTM이란?</strong>

- 기존 RNN의 장기 의존성 문제를 완화하기 위해 개발된 순환 신경망이다.
- 1997년 제안되었다.
- Cell State와 Gate를 이용해 정보를 선택적으로 기억한다.

<strong>주요 구성 요소</strong>

| 구성 요소 | 역할 |
| --- | --- |
| Cell State | 장기 기억 정보 전달 |
| Hidden State | 현재 시점의 정보 전달 |
| Forget Gate | 불필요한 기존 정보 제거 |
| Input Gate | 새로운 정보 저장 |
| Output Gate | 외부로 전달할 정보 결정 |

<strong>LSTM의 작동 과정</strong>

1. Forget Gate: 기존 정보 중 버릴 내용 결정
1. Input Gate: 새로운 정보 중 저장할 내용 결정
1. Cell State: 기존 기억과 새로운 정보 업데이트
1. Output Gate: 현재 기억 중 출력할 정보 결정
1. Hidden State: 새로운 상태 생성

<strong>핵심:</strong> 중요한 정보는 기억하고 불필요한 정보는 잊도록 학습하는 구조이다.

---

<a name="notion-heading-410d9e129df78030a243d85d57e98056"></a>

### 📃 f. RNN variants (다양한 확장 구조)

기본 RNN의 단점을 보완하거나 특정 작업에 적합하도록 발전한 구조이다.

| 모델 | 핵심 특징 |
| --- | --- |
| SimpleRNN | 기본적인 순환 신경망 |
| LSTM | 3개의 Gate와 Cell State 활용 |
| GRU | 2개의 Gate를 사용하는 간소화된 구조 |
| Bidirectional RNN | 과거와 미래 양방향 정보 활용 |
| Stacked RNN | 여러 RNN 계층을 쌓은 구조 |
| Encoder-Decoder | 입력 시퀀스를 출력 시퀀스로 변환 |
| Attention | 중요한 정보에 집중 |
| Transformer | Self-Attention 기반 정보 처리 |

<strong>주요 개념</strong>

- <strong>GRU:</strong> LSTM보다 구조가 단순하며 별도의 Cell State를 사용하지 않는다.
- <strong>Bidirectional RNN:</strong> 양방향의 문맥 정보를 함께 활용한다.
- <strong>Stacked RNN:</strong> 여러 계층을 연결하여 복잡한 특징을 학습한다.
- <strong>Encoder-Decoder:</strong> 번역과 같은 시퀀스 변환 작업에 활용한다.
- <strong>Attention:</strong> 중요한 입력 정보에 더 높은 가중치를 부여한다.
- <strong>Transformer:</strong> RNN의 순환 구조 없이 Attention을 중심으로 처리한다.

---

<a name="notion-heading-410d9e129df7800b8887c632e554e00a"></a>

## 📌 D. Recurrent Neural Network 핵심 요약

| 핵심 용어 | 반드시 기억할 내용 |
| --- | --- |
| Sequence Data | 순서가 중요한 데이터 |
| Time Series | 시간에 따라 수집된 데이터 |
| RNN | 이전 정보를 다음 시점으로 전달 |
| Hidden State | 이전 정보를 담는 내부 상태 |
| BPTT | 시간 방향 역전파 |
| Vanishing Gradient | 기울기 소실 |
| LSTM | 장기 기억을 위한 Gate 구조 |
| GRU | LSTM의 간소화된 구조 |
| Attention | 중요한 정보에 집중 |
| Transformer | Self-Attention 기반 모델 |

<a name="notion-heading-410d9e129df780c78406fea8241276a2"></a>

### 💡 오늘의 핵심 학습 포인트

1. RNN은 이전 정보를 기억하여 다음 데이터 처리에 활용한다.
1. 기존 RNN은 긴 시퀀스에서 기울기 소실 문제가 발생할 수 있다.
1. LSTM과 GRU는 Gate를 이용하여 정보의 흐름을 조절한다.
1. Transformer는 순환 구조 대신 Attention을 활용한다.

<strong>최종 목표:</strong> 순차 데이터가 무엇인지 이해하고, RNN에서 Transformer까지 발전한 이유와 각 모델의 차이를 설명할 수 있어야 한다.
