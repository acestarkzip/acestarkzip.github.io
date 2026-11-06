<!-- notion-to-github-managed -->
<!-- notion-page-id: 40ad9e129df7803999f8fc34404d7760 -->
<!-- notion-last-edited-time: 2026-11-06T06:14:00.000Z -->

# Self-Taught : 4주차 진행될 내용 선행학습

> - **날짜 :** 2026-10-31
> - **간단메모 :** 메모 | 딥러닝 간단히 탐색
> - **원본 노션 :** [바로가기 링크](https://app.notion.com/p/Self-Taught-4-40ad9e129df7803999f8fc34404d7760)

---

- [📚 4주차 Python Deep Learning (2026.11.02 Mon ~ 2026.11.06 Fri) | Total : 5 days](#notion-heading-40ad9e129df780c08978c9bfd833e2ba)
  - [📕 A. Deep Learning Basics (2026.11.02 Mon)](#notion-heading-40ad9e129df780a993bee994f7e773ab)
    - [📃 a. Deep Learning (딥러닝)](#notion-heading-40ad9e129df780c7b297f4b17e893d5b)
    - [📃 b. Perceptron (퍼셉트론)](#notion-heading-40ad9e129df780c7a891fadeab2162c4)
    - [📃 c. Activation Function (활성화 함수)](#notion-heading-40ad9e129df78039aadefa15871b08bf)
    - [📃 d. Multi Layer Perceptron | MLP (다중 퍼셉트론)](#notion-heading-40ad9e129df780079ff2cb97f756d0aa)
    - [📃 e. forward & back propagation (순전파와 역전파)](#notion-heading-40ad9e129df780bfa448d56b87a47469)
    - [📃 f. Pytorch (tensor와 autograd)](#notion-heading-40ad9e129df7807e9747f81562a26e9f)
  - [📕 B. Deep Learning Advanced(2026.11.03 Tue)](#notion-heading-40ad9e129df780dfb0bece55697de79c)
    - [📃 a. PyTorch – torch.nn](#notion-heading-40ad9e129df78084aef8c3d56b342012)
    - [📃 b. nn.Module 활용법](#notion-heading-40ad9e129df7808c996ad1402669eda1)
    - [📃 c. Data Loading](#notion-heading-40ad9e129df780608700f3db14a84dff)
    - [📃 d. Optimizer](#notion-heading-40ad9e129df78084999cdb9bc9a4c024)
    - [📃 e. Normalization (정규화)](#notion-heading-40ad9e129df7808a969bdcbcdf498eda)
    - [📃 f. Regularization (규제) 및 과적합 방지](#notion-heading-40ad9e129df780888acaf868781fde69)
    - [📃 f. Weight Initialization (가중치 초기화)](#notion-heading-40ad9e129df7806fbaefc8730b57e4f7)
  - [📕 C. Convolutional Neural Network (2026.11.04 Wed)](#notion-heading-40ad9e129df78081a008f268004eb1fa)
    - [📃 a. Convolutional Neural Network (합성곱 신경망)](#notion-heading-40ad9e129df7804f8296f47f0502f14c)
    - [📃 b. LeNet-5 (CNN의 시초)](#notion-heading-40ad9e129df780a28b0cfee806181d4c)
    - [📃 c. AlexNet (ImageNet 우승 모델)](#notion-heading-40ad9e129df780f59bfbc6fea1b9217e)
    - [📃 d. Project (Pokemon CNN)](#notion-heading-40ad9e129df780fc884bce382c949124)
  - [📕 D. Recurrent Neural Network (2026.11.05 Thu)](#notion-heading-40ad9e129df7806f9088eea6af7f63a6)
    - [📃 a. Sequence Data (시계열 데이터의 구조와 특징)](#notion-heading-40ad9e129df78064a050fea83d174db4)
    - [📃 b. Sequence Models의 역사 (시계열 예측 모델들의 역사와 등장이유)](#notion-heading-40ad9e129df780f39be7ec5dc86e2690)
    - [📃 c. SimpleRNN의 구조와 모델학습 (SimpleRNN의 구조와 모델학습)](#notion-heading-40ad9e129df7807f94d9cbac45fb1d60)
    - [📃 d. 장기 문맥과 Gated RNN (RNN이 지닌 장기 의존성 문제와 기울기 등 분석, 극복 배경)](#notion-heading-40ad9e129df780e6991bc46768339124)
    - [📃 e. LSTM (덧셈 기반 기억 통로와 망각, 입력, 등 구조를 도입 정보 유지 원리, 실습)](#notion-heading-40ad9e129df7800598b6d68897d98839)
    - [📃 f. RNN variants (GRU, 층첩 구조, 양방향, 등 다양한 확장 구조 소개)](#notion-heading-40ad9e129df7806d9a30e63684af0977)
  - [📕 E. Deep Learning Basics (2026.11.06 Fri)](#notion-heading-40ad9e129df7801ea0b8fb63028d64fe)
    - [📃 a. Natural Language Processing (자연어 처리)](#notion-heading-40ad9e129df780af8691c5822a8bc51d)
    - [📃 b. NLP 입문 (Corpus, Tokenization, Vocabulary, Embedding)](#notion-heading-40ad9e129df780eb9a64f7892dee4eda)
    - [📃 c. Word2Vec (Vector, Cosine Similarity)](#notion-heading-40ad9e129df7803dafadf57051612712)
    - [📃 d. Seq2Seq (Encoder, Decoder)](#notion-heading-40ad9e129df7801d9bc0c18b021de1db)
    - [📃 e. Attention (어텐션)](#notion-heading-40ad9e129df780919f83c3e1190d0c3a)
    - [📃 f. Transformer (Self Attention, Multi-head Attention, BERT)](#notion-heading-40ad9e129df780988cfcca532526b214)

<a name="notion-heading-40ad9e129df780c08978c9bfd833e2ba"></a>

# 📚 4주차 Python Deep Learning (2026.11.02 Mon ~ 2026.11.06 Fri) | Total : 5 days

<a name="notion-heading-40ad9e129df780a993bee994f7e773ab"></a>

## 📕 A. Deep Learning Basics (2026.11.02 Mon)

<a name="notion-heading-40ad9e129df780c7b297f4b17e893d5b"></a>

### 📃 a. Deep Learning (딥러닝)

<a name="notion-heading-40ad9e129df780c7a891fadeab2162c4"></a>

### 📃 b. Perceptron (퍼셉트론)

<a name="notion-heading-40ad9e129df78039aadefa15871b08bf"></a>

### 📃 c. Activation Function (활성화 함수)

<a name="notion-heading-40ad9e129df780079ff2cb97f756d0aa"></a>

### 📃 d. Multi Layer Perceptron | MLP (다중 퍼셉트론)

<a name="notion-heading-40ad9e129df780bfa448d56b87a47469"></a>

### 📃 e. forward & back propagation (순전파와 역전파)

<a name="notion-heading-40ad9e129df7807e9747f81562a26e9f"></a>

### 📃 f. Pytorch (tensor와 autograd)

<a name="notion-heading-40ad9e129df780dfb0bece55697de79c"></a>

## 📕 B. Deep Learning Advanced(2026.11.03 Tue)

<a name="notion-heading-40ad9e129df78084aef8c3d56b342012"></a>

### 📃 a. PyTorch – torch.nn

<a name="notion-heading-40ad9e129df7808c996ad1402669eda1"></a>

### 📃 b. nn.Module 활용법

<a name="notion-heading-40ad9e129df780608700f3db14a84dff"></a>

### 📃 c. Data Loading

<a name="notion-heading-40ad9e129df78084999cdb9bc9a4c024"></a>

### 📃 d. Optimizer

<a name="notion-heading-40ad9e129df7808a969bdcbcdf498eda"></a>

### 📃 e. Normalization (정규화)

<a name="notion-heading-40ad9e129df780888acaf868781fde69"></a>

### 📃 f. Regularization (규제) 및 과적합 방지

<a name="notion-heading-40ad9e129df7806fbaefc8730b57e4f7"></a>

### 📃 f. Weight Initialization (가중치 초기화)

<a name="notion-heading-40ad9e129df78081a008f268004eb1fa"></a>

## 📕 C. Convolutional Neural Network (2026.11.04 Wed)

<a name="notion-heading-40ad9e129df7804f8296f47f0502f14c"></a>

### 📃 a. Convolutional Neural Network (합성곱 신경망)

<a name="notion-heading-40ad9e129df780a28b0cfee806181d4c"></a>

### 📃 b. LeNet-5 (CNN의 시초)

<a name="notion-heading-40ad9e129df780f59bfbc6fea1b9217e"></a>

### 📃 c. AlexNet (ImageNet 우승 모델)

<a name="notion-heading-40ad9e129df780fc884bce382c949124"></a>

### 📃 d. Project (Pokemon CNN)

<a name="notion-heading-40ad9e129df7806f9088eea6af7f63a6"></a>

## 📕 D. Recurrent Neural Network (2026.11.05 Thu)

<a name="notion-heading-40ad9e129df78064a050fea83d174db4"></a>

### 📃 a. Sequence Data (시계열 데이터의 구조와 특징)

<a name="notion-heading-40ad9e129df780f39be7ec5dc86e2690"></a>

### 📃 b. Sequence Models의 역사 (시계열 예측 모델들의 역사와 등장이유)

<a name="notion-heading-40ad9e129df7807f94d9cbac45fb1d60"></a>

### 📃 c. SimpleRNN의 구조와 모델학습 (SimpleRNN의 구조와 모델학습)

<a name="notion-heading-40ad9e129df780e6991bc46768339124"></a>

### 📃 d. 장기 문맥과 Gated RNN (RNN이 지닌 장기 의존성 문제와 기울기 등 분석, 극복 배경)

<a name="notion-heading-40ad9e129df7800598b6d68897d98839"></a>

### 📃 e. LSTM (덧셈 기반 기억 통로와 망각, 입력, 등 구조를 도입 정보 유지 원리, 실습)

<a name="notion-heading-40ad9e129df7806d9a30e63684af0977"></a>

### 📃 f. RNN variants (GRU, 층첩 구조, 양방향, 등 다양한 확장 구조 소개)

<a name="notion-heading-40ad9e129df7801ea0b8fb63028d64fe"></a>

## 📕 E. Deep Learning Basics (2026.11.06 Fri)

<a name="notion-heading-40ad9e129df780af8691c5822a8bc51d"></a>

### 📃 a. Natural Language Processing (자연어 처리)

<a name="notion-heading-40ad9e129df780eb9a64f7892dee4eda"></a>

### 📃 b. NLP 입문 (Corpus, Tokenization, Vocabulary, Embedding)

<a name="notion-heading-40ad9e129df7803dafadf57051612712"></a>

### 📃 c. Word2Vec (Vector, Cosine Similarity)

<a name="notion-heading-40ad9e129df7801d9bc0c18b021de1db"></a>

### 📃 d. Seq2Seq (Encoder, Decoder)

<a name="notion-heading-40ad9e129df780919f83c3e1190d0c3a"></a>

### 📃 e. Attention (어텐션)

<a name="notion-heading-40ad9e129df780988cfcca532526b214"></a>

### 📃 f. Transformer (Self Attention, Multi-head Attention, BERT)
