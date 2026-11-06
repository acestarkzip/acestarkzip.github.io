<!-- notion-to-github-managed -->
<!-- notion-page-id: 410d9e129df780b3b03eed41d3c9c99d -->
<!-- notion-last-edited-time: 2026-11-06T06:12:00.000Z -->

# Python :  Deep Learning 4일차 (D+20)

> - **날짜 :** 2026-11-06
> - **간단메모 :** 딥러닝 | 시계열 데이터용 RNN 구조와 장기 기억을 위한 LSTM/GRU
> - **원본 노션 :** [바로가기 링크](https://app.notion.com/p/Python-Deep-Learning-4-D-20-410d9e129df780b3b03eed41d3c9c99d)

---

- [📚 4주차 Python Deep Learning (2026.11.03  Tue ~ 2026.11.09 Mon) | Total : 5 days](#notion-heading-410d9e129df7803f8a45fdf658c0250e)
  - [📕 D. Recurrent Neural Network (2026.11.06 Fri)](#notion-heading-410d9e129df7809e8fe2c03fa9f03371)
    - [📃 a. Sequence Data (시계열 데이터의 구조와 특징)](#notion-heading-410d9e129df7802ea462d4eb606ce5e3)
    - [📃 b. Sequence Models의 역사 (시계열 예측 모델들의 역사와 등장이유)](#notion-heading-410d9e129df780cbbe6ffa986c33eb47)
    - [📃 c. SimpleRNN의 구조와 모델학습](#notion-heading-410d9e129df7807ba961f48504919bd3)
    - [📃 d. 장기 문맥과 Gated RNN (장기 의존성 문제와 극복 배경)](#notion-heading-410d9e129df780c9968edd7984ca6abe)
    - [📃 e. LSTM (Long Short-Term Memory)](#notion-heading-410d9e129df780ffa039e20150336f53)
    - [📃 f. RNN variants (다양한 확장 구조)](#notion-heading-410d9e129df7808d89fddbb994f54dce)

<a name="notion-heading-410d9e129df7803f8a45fdf658c0250e"></a>

# 📚 4주차 Python Deep Learning (2026.11.03  Tue ~ 2026.11.09 Mon) | Total : 5 days

<a name="notion-heading-410d9e129df7809e8fe2c03fa9f03371"></a>

## 📕 D. Recurrent Neural Network (2026.11.06 Fri)

<a name="notion-heading-410d9e129df7802ea462d4eb606ce5e3"></a>

### 📃 a. Sequence Data (시계열 데이터의 구조와 특징)

> 💡 **핵심 개념:** 데이터의 **'순서(Order)'** 자체가 중요한 의미를 가지며, 과거의 데이터가 현재와 미래에 영향을 미치는 데이터. 독립적이고 동일한 분포(i.i.d)를 가정하는 일반적인 데이터와 달리, **시간적 의존성(Temporal Dependency)**을 가집니다.

- **주요 특징**
  - **가변적인 길이:** 문장의 길이나 음성 신호의 길이가 제각각이듯, 입력 데이터의 길이가 고정되어 있지 않습니다.
  - **문맥(Context):** "I love ___" 다음에 올 단어가 이전 단어들에 의해 결정되듯, 앞뒤 문맥 정보가 필수적입니다.
- **데이터 구조 (PyTorch 기준)**
  - 일반적으로 `(Batch_size, Sequence_Length, Input_Features)` 형태의 3차원 텐서로 구성됩니다.
- **대표적인 예시**
  - 자연어 텍스트 (NLP), 주식 가격/날씨 등 시계열 데이터, 음성 신호, 비디오 프레임 등.

<a name="notion-heading-410d9e129df780cbbe6ffa986c33eb47"></a>

### 📃 b. Sequence Models의 역사 (시계열 예측 모델들의 역사와 등장이유)

> 🏛️ **배경:** 순차적인 데이터를 처리하기 위해 통계적 기법에서 딥러닝 기법으로 발전해 온 흐름.

- **1. 전통적 통계 모델 (ARIMA, HMM):** 과거 몇 개의 시점만 참고하거나 엄격한 수학적 가정을 바탕으로 예측. 복잡한 비선형 패턴 학습에 한계가 있었습니다.
- **2. Feedforward NN (FNN)의 한계:**
  - 입력 크기가 고정되어 있어 가변적인 길이의 시퀀스를 처리할 수 없습니다.
  - 과거의 정보를 기억하는 '메모리'가 없기 때문에 시계열 처리에 부적합합니다.
- **3. RNN의 등장:** 내부 상태(Hidden State)를 도입하여 이전 타임스텝의 정보를 현재 타임스텝으로 전달하는 구조를 고안. 가변 길이 처리와 과거 정보 기억이 가능해졌습니다.
- **4. LSTM / GRU의 등장:** RNN의 고질적인 '장기 의존성(Long-Term Dependency)' 문제를 해결하기 위해 게이트(Gate) 구조를 도입했습니다.

<a name="notion-heading-410d9e129df7807ba961f48504919bd3"></a>

### 📃 c. SimpleRNN의 구조와 모델학습

> ⚙️ **구조:** 출력된 결과(Hidden State)가 다음 시점의 입력으로 다시 들어가는 순환(Recurrent) 구조를 가집니다.

- **내부 동작 원리**
  - 특정 시점 $t$에서의 은닉 상태 $h_t$는 현재 시점의 입력 $x_t$와 이전 시점의 은닉 상태 $h_{t-1}$을 받아 계산됩니다.
  - 📐 **수식:** $h_t = \tanh(W_{xh} x_t + W_{hh} h_{t-1} + b)$
  - 활성화 함수로 주로 **Tanh**를 사용하여 값을 -1과 1 사이로 정규화합니다.
- **모델 학습 (BPTT: Backpropagation Through Time)**
  - 시계열 데이터의 길이(Sequence Length)만큼 신경망을 시간 순서대로 펼친(Unfold) 후, 역전파를 수행합니다.
  - 매 시점마다 오차(Loss)를 계산하고, 이 오차가 시간을 거슬러 올라가며 가중치($W_{xh}, W_{hh}$)를 업데이트합니다. (모든 시점(Time Step)에서 동일한 가중치를 공유합니다.)

<a name="notion-heading-410d9e129df780c9968edd7984ca6abe"></a>

### 📃 d. 장기 문맥과 Gated RNN (장기 의존성 문제와 극복 배경)

> ⚠️ **문제점:** SimpleRNN은 시퀀스 길이가 길어질수록(Sequence Length가 커질수록) 앞부분의 정보가 뒤로 갈수록 희미해지는 **장기 의존성 문제(Long-Term Dependency)**가 발생합니다.

- **원인 분석 (기울기 소실/폭발)**
  - BPTT 과정에서 시간을 거슬러 역전파를 할 때, 같은 가중치 행렬($W_{hh}$)이 계속 곱해집니다.
  - 행렬의 고윳값이 1보다 작으면 기울기가 0으로 수렴하는 기울기 소실(Vanishing Gradient)이 발생하여 과거의 정보를 학습하지 못합니다. (반대로 1보다 크면 기울기 폭발 발생).
- **극복 배경 (Gated RNN)**
  - 단순히 이전 상태에 가중치를 곱하는 것을 넘어, **"무엇을 기억하고 무엇을 잊을지"** 신경망이 스스로 조절할 수 있는 장치(Gate)가 필요해졌습니다.

<a name="notion-heading-410d9e129df780ffa039e20150336f53"></a>

### 📃 e. LSTM (Long Short-Term Memory)

> 🌟 **핵심 혁신:** 셀 상태(Cell State)라는 덧셈 기반의 정보 고속도로를 도입하여, 기울기 소실 없이 정보가 시퀀스 끝까지 흐르도록 설계된 구조.

- **동작 원리 (3개의 Gate와 Cell State)**
  - **Cell State ($C_t$):** 네트워크를 관통하는 컨베이어 벨트. 정보가 선형적인 덧셈 연산을 통해 전달되므로 기울기가 소실되지 않고 오래 유지됩니다.
  - **1. 망각 게이트 (Forget Gate):** 과거의 정보를 얼마나 버릴지 결정. (Sigmoid 함수 사용, 0에 가까울수록 잊음)
  - **2. 입력 게이트 (Input Gate):** 현재 입력된 새로운 정보를 Cell State에 얼마나 추가할지 결정.
  - **3. 출력 게이트 (Output Gate):** 업데이트된 Cell State를 바탕으로 다음 시점으로 넘길 Hidden State($h_t$)를 결정.
- **💻 PyTorch 코드 실습 구조 **Python
```python
import torch
import torch.nn as nn

class LSTMModel(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super(LSTMModel, self).__init__()
        # batch_first=True 설정 시 (Batch, Seq_len, Feature) 형태로 입력
        self.lstm = nn.LSTM(input_size, hidden_size, batch_first=True)
        self.fc = nn.Linear(hidden_size, num_classes)

    def forward(self, x):
        # x shape: (batch_size, sequence_length, input_size)
        # LSTM은 출력(out)과 마지막 시점의 (hidden_state, cell_state)를 반환
        out, (h_n, c_n) = self.lstm(x)

        # 시퀀스의 가장 마지막 시점(out[:, -1, :])의 출력만 사용하여 분류 예측
        out = self.fc(out[:, -1, :])
        return out
```


<a name="notion-heading-410d9e129df7808d89fddbb994f54dce"></a>

### 📃 f. RNN variants (다양한 확장 구조)

> 🚀 **확장:** 복잡한 시계열 데이터를 더 효율적이고 깊게 학습하기 위해 고안된 변형 모델들.

- **1. GRU (Gated Recurrent Unit)**
  - LSTM의 구조를 경량화한 모델. Cell State와 Hidden State를 하나로 합치고, Gate를 2개(Update Gate, Reset Gate)로 줄였습니다.
  - 파라미터 수가 적어 학습 속도가 빠르면서도 LSTM과 유사한 성능을 냅니다.
- **2. 층첩 구조 (Deep RNN / Stacked RNN)**
  - RNN 층을 수직으로 여러 개 쌓아 올린 구조. (`nn.LSTM(..., num_layers=2)` 형태로 구현)
  - 하위 층에서는 미시적인 패턴을, 상위 층에서는 거시적이고 추상적인 패턴을 학습하여 복잡도를 높입니다.
- **3. 양방향 RNN (Bidirectional RNN)**
  - 데이터의 순방향(과거➔미래)뿐만 아니라 역방향(미래➔과거)으로도 데이터를 처리하여 병합하는 구조.
  - 기계 번역, 텍스트 분석 등 "전체 문맥"을 파악해야 하는 작업에 매우 효과적입니다. (`nn.LSTM(..., bidirectional=True)`)
