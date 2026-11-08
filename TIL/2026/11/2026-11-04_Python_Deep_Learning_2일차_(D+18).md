<!-- notion-to-github-managed -->
<!-- notion-page-id: 410d9e129df7803ba8b1cd16629d97f4 -->
<!-- notion-last-edited-time: 2026-11-08T06:14:00.000Z -->

# Python :  Deep Learning 2일차 (D+18)

> - **날짜 :** 2026-11-04
> - **간단메모 :** 딥러닝 | 이미지 처리를 위한 CNN 구조와 주요 비전 모델 이해
> - **원본 노션 :** [바로가기 링크](https://app.notion.com/p/Python-Deep-Learning-2-D-18-410d9e129df7803ba8b1cd16629d97f4)

---

- [📚 4주차 Python Deep Learning (2026.11.03 Tue ~ 2026.11.09 Mon) | Total : 5 days](#notion-heading-410d9e129df78072be2ef0776b6441e2)
  - [📕 B. Deep Learning Advanced (2026.11.04 Wed)](#notion-heading-410d9e129df780359571fe97e5434f6f)
    - [📃 a. PyTorch – torch.nn](#notion-heading-410d9e129df7801e9230eeed8f28c1c1)
    - [📃 b. nn.Module 활용법](#notion-heading-410d9e129df780018859c5de5d25fb65)
    - [📃 c. Data Loading](#notion-heading-410d9e129df780628e7ec201711488fa)
    - [📃 d. Optimizer](#notion-heading-410d9e129df7807a86f0ea4117666af5)
    - [📃 e. Normalization (정규화)](#notion-heading-410d9e129df78050acfccbaf8bdf263a)
    - [📃 f. Regularization (규제) 및 과적합 방지](#notion-heading-410d9e129df780709e69cfec805d9f15)
    - [📃 f. Weight Initialization (가중치 초기화)](#notion-heading-410d9e129df780a29cabd9462056dc6c)

<a name="notion-heading-410d9e129df78072be2ef0776b6441e2"></a>

# 📚 4주차 Python Deep Learning (2026.11.03 Tue ~ 2026.11.09 Mon) | Total : 5 days

<a name="notion-heading-410d9e129df780359571fe97e5434f6f"></a>

## 📕 B. Deep Learning Advanced (2026.11.04 Wed)

<a name="notion-heading-410d9e129df7801e9230eeed8f28c1c1"></a>

### 📃 a. PyTorch – torch.nn

> 💡 <strong>핵심 개념:</strong> 딥러닝 모델을 구축하는 데 필요한 모든 기본 구성 요소(Layer, 활성화 함수, 손실 함수 등)를 제공하는 PyTorch의 핵심 모듈입니다.

- <strong>주요 특징</strong>
  - `torch.nn` 패키지 안에는 신경망 구축에 필요한 다양한 클래스가 이미 구현되어 있습니다.
  - 가중치(Weight)와 편향(Bias) 같은 학습 가능한 파라미터를 내부적으로 자동으로 관리해 줍니다.
- <strong>자주 사용되는 클래스</strong>
  - `nn.Linear`: Fully Connected Layer (선형 변환)
  - `nn.Conv2d`: 2D Convolution Layer (합성곱)
  - `nn.CrossEntropyLoss`, `nn.MSELoss`: 손실 함수(Loss Function)

<a name="notion-heading-410d9e129df780018859c5de5d25fb65"></a>

### 📃 b. nn.Module 활용법

> 🛠️ <strong>구조:</strong> PyTorch에서 모든 신경망 모델의 <strong>기본(Base) 클래스</strong>입니다. 사용자 정의 모델을 만들 때 반드시 이 클래스를 상속받아야 합니다.

- <strong>모델 정의의 2가지 필수 메서드</strong>
  1. `__init__(self)`: 모델에서 사용할 레이어와 컴포넌트들을 정의하고 초기화합니다. (가중치를 갖는 층은 반드시 여기서 정의)
  1. `forward(self, x)`: 입력 데이터 `x`가 모델을 통과하며 연산되는 과정(순전파)을 정의합니다.
- 💻 <strong>구현 예시:</strong>Python
```python
import torch.nn as nn
import torch.nn.functional as F

class CustomMLP(nn.Module):
    def __init__(self):
        super(CustomMLP, self).__init__() # 부모 클래스 초기화 필수
        self.fc1 = nn.Linear(784, 256)
        self.fc2 = nn.Linear(256, 10)

    def forward(self, x):
        x = F.relu(self.fc1(x)) # fc1 통과 후 ReLU 활성화
        x = self.fc2(x)         # 출력층 통과
        return x
```


<a name="notion-heading-410d9e129df780628e7ec201711488fa"></a>

### 📃 c. Data Loading

> 📦 <strong>개념:</strong> 대용량의 데이터를 메모리에 효율적으로 적재하고, 모델에 병렬로 공급하기 위한 파이프라인 구축 과정입니다.

- <strong>1. Dataset (</strong>`torch.utils.data.Dataset`<strong>)</strong>
  - 데이터의 특징(Feature)과 정답(Label)을 정의하는 클래스입니다.
  - 상속받아 커스텀 시, 데이터의 전체 길이를 반환하는 `__len__`과 특정 인덱스의 데이터를 반환하는 `__getitem__`을 반드시 오버라이딩(재정의)해야 합니다.
- <strong>2. DataLoader (</strong>`torch.utils.data.DataLoader`<strong>)</strong>
  - `Dataset` 객체를 감싸서 네트워크에 데이터를 배치(Batch) 단위로 공급해 주는 순회 가능한(Iterable) 객체입니다.
  - <strong>주요 파라미터:</strong>
    - `batch_size`: 한 번에 모델에 집어넣을 데이터의 개수
    - `shuffle`: 에폭(Epoch)마다 데이터를 섞을지 여부 (Train 시 보통 True)
    - `num_workers`: 데이터를 불러올 때 사용할 서브 프로세스(CPU 코어) 개수 (병렬 처리로 속도 향상)

<a name="notion-heading-410d9e129df7807a86f0ea4117666af5"></a>

### 📃 d. Optimizer

> ⚙️ <strong>개념:</strong> 오차(Loss)를 줄이기 위해 역전파(Backpropagation)를 통해 계산된 기울기(Gradient)를 바탕으로 <strong>가중치를 어떻게 업데이트할지 결정하는 알고리즘</strong>입니다.

- <strong>주요 Optimizer 알고리즘</strong>
  - <strong>SGD (Stochastic Gradient Descent):</strong> 가장 기본적인 최적화 기법. 학습 방향이 흔들리는 단점을 보완하기 위해 관성(Momentum)을 추가하여 자주 사용합니다.
  - <strong>Adam (Adaptive Moment Estimation):</strong> 현재 딥러닝에서 가장 기본적으로(Default) 선택되는 알고리즘. 방향(Momentum)과 보폭(RMSProp)을 모두 적응적으로 조절하여 빠르고 안정적으로 수렴합니다.
- <strong>PyTorch 최적화 3단계 프로세스</strong>
  1. `optimizer.zero_grad()`: 이전 배치의 기울기가 누적되지 않도록 0으로 초기화.
  1. `loss.backward()`: 오차를 역전파하여 각 파라미터의 기울기(Gradient) 계산.
  1. `optimizer.step()`: 계산된 기울기를 바탕으로 가중치 업데이트 반영.

<a name="notion-heading-410d9e129df78050acfccbaf8bdf263a"></a>

### 📃 e. Normalization (정규화)

> ⚖️ <strong>개념:</strong> 신경망 내부 레이어의 입력 데이터 분포가 학습 진행에 따라 계속 변하는 현상(Internal Covariate Shift)을 방지하여 학습을 안정화하고 속도를 높이는 기법입니다.

- <strong>Batch Normalization (배치 정규화)</strong>
  - 미니 배치(Mini-batch) 단위로 데이터의 평균을 0, 분산을 1로 정규화한 뒤, 학습 가능한 스케일(Gamma)과 시프트(Beta) 파라미터를 적용합니다.
  - 기울기 소실/폭발을 크게 완화해주어 더 큰 학습률(Learning Rate)을 사용할 수 있게 해줍니다.
  - 통상적으로 `Conv/Linear Layer ➔ Batch Norm ➔ Activation Function` 순서로 배치합니다.
  - PyTorch 클래스: `nn.BatchNorm1d`, `nn.BatchNorm2d`

<a name="notion-heading-410d9e129df780709e69cfec805d9f15"></a>

### 📃 f. Regularization (규제) 및 과적합 방지

> 🛡️ <strong>개념:</strong> 모델이 훈련 데이터에만 과도하게 맞춰져 새로운 데이터에 대한 예측력이 떨어지는 <strong>과적합(Overfitting)을 방지</strong>하는 일반화(Generalization) 기법들입니다.

- <strong>1. L2 Regularization (Weight Decay / 가중치 감소)</strong>
  - 손실 함수에 가중치의 제곱합(L2 Norm)을 페널티로 추가하여, 특정 가중치가 비정상적으로 커지는 것을 억제합니다.
  - PyTorch에서는 Optimizer의 파라미터로 설정합니다. (예: `optim.Adam(..., weight_decay=1e-4)`)
- <strong>2. Dropout (드롭아웃)</strong>
  - 학습 과정(Train)에서 은닉층의 뉴런을 설정한 확률(예: `p=0.5`)로 무작위로 비활성화하여 학습시킵니다.
  - 뉴런 간의 상호 의존도(Co-adaptation)를 낮추고, 앙상블(Ensemble) 효과를 내어 강력한 과적합 방지 성능을 보입니다. (평가 시에는 `model.eval()`을 호출하여 모든 뉴런을 활성화해야 함).
- <strong>3. Early Stopping (조기 종료)</strong>
  - 검증 데이터(Validation Data)의 오차가 더 이상 줄어들지 않고 증가하기 시작하는 시점에 학습을 강제로 멈추는 기법입니다.

<a name="notion-heading-410d9e129df780a29cabd9462056dc6c"></a>

### 📃 f. Weight Initialization (가중치 초기화)

> 🎲 <strong>개념:</strong> 딥러닝 모델 학습을 시작할 때, <strong>가중치(Weight)의 초깃값을 어떻게 설정하느냐에 따라 기울기 소실(Vanishing)이나 폭발(Exploding)을 방지</strong>하고 학습 성공 여부가 결정됩니다. (초기 가중치를 0으로 설정하면 모든 뉴런이 똑같이 업데이트되므로 절대 안 됩니다.)

- <strong>1. Xavier (Glorot) Initialization</strong>
  - 이전 층의 노드 수와 다음 층의 노드 수를 모두 고려하여 균등 또는 정규 분포로 가중치를 초기화합니다.
  - 활성화 함수로 <strong>Sigmoid</strong>나 <strong>Tanh</strong>를 사용할 때 가장 최적화된 방법입니다.
- <strong>2. He (Kaiming) Initialization</strong>
  - Xavier 초기화가 ReLU 계열 활성화 함수에서 층이 깊어질수록 출력값이 0으로 수렴하는 문제를 해결하기 위해 등장했습니다.
  - 이전 층의 노드 수만을 고려하여 분산을 2배로 키워 초기화합니다.
  - 활성화 함수로 <strong>ReLU</strong>나 <strong>Leaky ReLU</strong>를 사용할 때 필수적으로 적용하는 표준 초기화 기법입니다.
