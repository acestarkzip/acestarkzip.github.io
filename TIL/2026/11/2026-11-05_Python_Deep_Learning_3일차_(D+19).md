<!-- notion-to-github-managed -->
<!-- notion-page-id: 410d9e129df780bb8df9ce7469c53bd3 -->
<!-- notion-last-edited-time: 2026-11-06T06:09:00.000Z -->

# Python :  Deep Learning 3일차 (D+19)

> - **날짜 :** 2026-11-05
> - **간단메모 :** 딥러닝 | 이미지 처리를 위한 CNN 구조와 주요 비전 모델 이해
> - **원본 노션 :** [바로가기 링크](https://app.notion.com/p/Python-Deep-Learning-3-D-19-410d9e129df780bb8df9ce7469c53bd3)

---

- [📚 4주차 Python Deep Learning (2026.11.03  Tue ~ 2026.11.09 Mon) | Total : 5 days](#notion-heading-410d9e129df780cf8b4fde26df77d331)
  - [📕 C. Convolutional Neural Network (2026.11.05 Thu)](#notion-heading-410d9e129df7802abb59f230d982046e)
    - [📃 a. Convolutional Neural Network (합성곱 신경망)](#notion-heading-410d9e129df78012b039d27ba77da23a)
    - [📃 b. LeNet-5 (CNN의 시초)](#notion-heading-410d9e129df780d79bd0d85bb8eeabb4)
    - [📃 c. AlexNet (ImageNet 우승 모델)](#notion-heading-410d9e129df7808c91e6f88ffdbf4809)
    - [📃 d. Project (Pokemon CNN)](#notion-heading-410d9e129df7802db56bf84db6e942ea)

<a name="notion-heading-410d9e129df780cf8b4fde26df77d331"></a>

# 📚 4주차 Python Deep Learning (2026.11.03  Tue ~ 2026.11.09 Mon) | Total : 5 days

<a name="notion-heading-410d9e129df7802abb59f230d982046e"></a>

## 📕 C. Convolutional Neural Network (2026.11.05 Thu)

<a name="notion-heading-410d9e129df78012b039d27ba77da23a"></a>

### 📃 a. Convolutional Neural Network (합성곱 신경망)

> 💡 <strong>핵심 개념:</strong> Fully Connected Layer(다층 퍼셉트론)의 한계인 '공간적 정보(Spatial Information) 손실'을 해결하기 위해 등장한 아키텍처. 2D 형태의 입력값을 그대로 유지하면서 공간적/지역적 특징을 추출합니다.

- <strong>왜 CNN을 사용하는가?</strong>
  - 일반적인 DNN은 2차원 이미지를 1차원으로 펴서(Flatten) 입력해야 하므로, 인접한 픽셀 간의 공간적 관계(상하좌우 연관성)가 완전히 무시됩니다. CNN은 필터(Filter)를 이용해 이 공간적 특징을 보존합니다.
- <strong>주요 구성 요소</strong>
  - <strong>1. Convolution Layer (합성곱층)</strong>
    - <strong>Filter (Kernel):</strong> 이미지의 특정 패턴(선, 곡선, 질감 등)을 찾는 가중치 행렬.
    - <strong>Feature Map:</strong> 입력 이미지에 필터를 슬라이딩하며 내적(Dot Product) 연산한 결과물.
    - <strong>Stride (보폭):</strong> 필터가 한 번에 이동하는 픽셀 수. Stride가 커지면 출력 크기가 작아집니다.
    - <strong>Padding (패딩):</strong> 출력 크기가 줄어드는 것을 방지하고 가장자리 정보를 보존하기 위해 입력 데이터 외곽에 지정된 값(보통 0, Zero-Padding)을 채워 넣는 기법.
    - 📐 <strong>출력 크기(Output Size) 계산 공식:</strong>`Output = (Input - Filter + 2 * Padding) / Stride + 1`
  - <strong>2. Pooling Layer (풀링층)</strong>
    - Feature Map의 크기를 줄여(Sub-sampling) 연산량을 감소시키고, 미세한 위치 변화에 대한 모델의 불변성(Translation Invariance)을 확보합니다.
    - <strong>Max Pooling:</strong> 해당 영역에서 가장 큰 값만 추출 (가장 뚜렷한 특징을 강조, 현대 CNN에서 주로 사용).
    - <strong>Average Pooling:</strong> 해당 영역의 평균값을 추출.
  - <strong>3. Fully Connected Layer (완전연결층)</strong>
    - 추출된 최종 특징(Feature Map)을 1차원 벡터로 변환(Flatten)한 뒤, Softmax 연산 등을 통해 최종 클래스를 분류합니다.

<a name="notion-heading-410d9e129df780d79bd0d85bb8eeabb4"></a>

### 📃 b. LeNet-5 (CNN의 시초)

> 🏛️ <strong>배경:</strong> 1998년 Yann LeCun이 제안. 우편번호(수표 숫자) 인식을 위해 개발된 모델로, 현대 CNN 아키텍처의 근간(Conv-Pool-FC)을 제시했습니다.

- <strong>네트워크 구조 (입력: 32x32 흑백 이미지)</strong>
  1. <strong>C1 (Conv Layer):</strong> 5x5 필터 6개 사용 ➔ 28x28x6 Feature Map 생성
  1. <strong>S2 (Average Pool):</strong> 2x2 풀링 (Stride 2) ➔ 14x14x6
  1. <strong>C3 (Conv Layer):</strong> 5x5 필터 16개 사용 ➔ 10x10x16
  1. <strong>S4 (Average Pool):</strong> 2x2 풀링 (Stride 2) ➔ 5x5x16
  1. <strong>C5 (Conv Layer):</strong> 5x5 필터 120개 사용 (사실상 FC 역할)
  1. <strong>F6 (FC Layer):</strong> 84개의 노드
  1. <strong>Output:</strong> 10개 클래스 (0~9 숫자 분류)
- <strong>한계점</strong>
  - 활성화 함수로 `Sigmoid`와 `Tanh`를 사용하여 레이어가 깊어질수록 <strong>기울기 소실(Vanishing Gradient)</strong> 문제가 발생했습니다.
  - 복잡한 이미지(ImageNet 등)를 처리하기에는 연산력과 파라미터 수가 부족했습니다.

<a name="notion-heading-410d9e129df7808c91e6f88ffdbf4809"></a>

### 📃 c. AlexNet (ImageNet 우승 모델)

> 🏆 <strong>배경:</strong> 2012년 ILSVRC 대회에서 2위와 압도적인 성능 차이(오차율 15.3% vs 26.2%)로 우승하며 딥러닝의 시대를 연 기념비적인 모델입니다.

- <strong>네트워크 구조 (입력: 227x227 RGB 이미지)</strong>
  - 5개의 Convolutional Layer + 3개의 Max Pooling Layer + 3개의 Fully Connected Layer.
  - 6천만 개의 파라미터를 가짐. 당시 하드웨어 한계로 2개의 GTX 580 GPU에 네트워크를 분할하여 병렬 학습.
- <strong>🌟 3가지 핵심 혁신 요소 (딥러닝 표준이 됨)</strong>
  1. <strong>ReLU (Rectified Linear Unit) 도입:</strong>
     - `f(x) = max(0, x)`
     - 양수 입력에 대해 미분값이 항상 1이므로 <strong>기울기 소실 문제를 완벽히 해결</strong>했으며, 연산 속도가 Tanh 대비 약 6배 빠릅니다.
  1. <strong>Dropout (드롭아웃) 적용:</strong>
     - FC 층에서 학습을 진행할 때, 설정된 확률(예: 0.5)로 뉴런을 무작위로 비활성화하여 특정 뉴런에 대한 의존도를 낮추고 <strong>과적합(Overfitting)을 방지</strong>합니다.
  1. <strong>Data Augmentation (데이터 증강):</strong>
     - 이미지 좌우 반전(Horizontal Flip), 자르기(Random Crop), RGB 채널 강도 조절(Color Jittering)을 통해 제한된 데이터셋의 한계를 극복했습니다.

<a name="notion-heading-410d9e129df7802db56bf84db6e942ea"></a>

### 📃 d. Project (Pokemon CNN)

> 🎯 <strong>프로젝트 목표:</strong> 포켓몬스터 이미지 데이터를 입력받아 어떤 포켓몬인지 분류(Multi-class Classification)하는 커스텀 CNN 모델 구현

<strong>✅ PyTorch 기반 프로젝트 구현 파이프라인</strong>

- <strong>1. Data Preparation &amp; Preprocessing (데이터 준비 및 전처리)</strong>Python
  - `torchvision.transforms`를 이용해 이미지 크기를 통일하고 증강(Augmentation) 기법을 적용합니다.

```python
from torchvision import transforms, datasets
from torch.utils.data import DataLoader

# 데이터 증강 및 텐서 변환
transform = transforms.Compose([
    transforms.Resize((128, 128)),
    transforms.RandomHorizontalFlip(), # 데이터 증강
    transforms.ToTensor(),
    transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5)) # 정규화
])

# ImageFolder를 사용하면 폴더 구조(클래스명)대로 라벨이 자동 부여됨
dataset = datasets.ImageFolder(root='./pokemon_data', transform=transform)
dataloader = DataLoader(dataset, batch_size=32, shuffle=True)
```

- <strong>2. Model Definition (모델 아키텍처 설계) </strong>Python
  - `nn.Module`을 상속받아 직접 Convolution과 Pooling 레이어를 쌓습니다.

```python
import torch.nn as nn
import torch.nn.functional as F

class PokemonCNN(nn.Module):
    def __init__(self, num_classes):
        super(PokemonCNN, self).__init__()
        # Conv Block 1: 3(RGB) -> 16 channels
        self.conv1 = nn.Conv2d(in_channels=3, out_channels=16, kernel_size=3, padding=1)
        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)
        # Conv Block 2: 16 -> 32 channels
        self.conv2 = nn.Conv2d(16, 32, 3, padding=1)

        # FC Layer: 128x128 이미지가 두 번의 MaxPool을 거치면 32x32가 됨
        self.fc1 = nn.Linear(32 * 32 * 32, 512)
        self.dropout = nn.Dropout(0.5)
        self.fc2 = nn.Linear(512, num_classes)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = x.view(-1, 32 * 32 * 32) # Flatten 연산
        x = F.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.fc2(x)
        return x
```

- <strong>3. Training Loop (학습 루프 구현) </strong>Python
  - Forward Propagation -> Loss 계산 -> Backward Propagation -> 최적화(가중치 업데이트)의 4단계를 반복합니다.

```python
import torch.optim as optim
import torch

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = PokemonCNN(num_classes=150).to(device) # 150종의 포켓몬 분류 가정

criterion = nn.CrossEntropyLoss() # 다중 분류용 손실 함수
optimizer = optim.Adam(model.parameters(), lr=0.001)

epochs = 10
for epoch in range(epochs):
    running_loss = 0.0
    for images, labels in dataloader:
        images, labels = images.to(device), labels.to(device)

        optimizer.zero_grad()    # 1. 기울기 초기화
        outputs = model(images)  # 2. 순전파 (Forward)
        loss = criterion(outputs, labels) # 3. Loss 계산
        loss.backward()          # 4. 역전파 (Backward)
        optimizer.step()         # 5. 가중치 업데이트

        running_loss += loss.item()
    print(f"Epoch [{epoch+1}/{epochs}], Loss: {running_loss/len(dataloader):.4f}")
```

- <strong>4. Evaluation (평가)</strong>
  - `torch.no_grad()` 상태에서 Validation/Test 데이터셋으로 모델의 예측 정확도(Accuracy)를 측정하고, 오답 이미지를 분석하여 모델을 개선합니다.
