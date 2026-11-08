<!-- notion-to-github-managed -->
<!-- notion-page-id: 410d9e129df78078b299e80ccee1ba56 -->
<!-- notion-last-edited-time: 2026-11-08T06:07:00.000Z -->

# Python :  Deep Learning 5일차 (D+21)

> - **날짜 :** 2026-11-09
> - **간단메모 :** 딥러닝 | 자연어 처리(NLP) 기초와 트랜스포머(Transformer) 아키텍처 흐름 파악
> - **원본 노션 :** [바로가기 링크](https://app.notion.com/p/Python-Deep-Learning-5-D-21-410d9e129df78078b299e80ccee1ba56)

---

- [📚 4주차 Python Deep Learning (2026.11.03  Tue ~ 2026.11.09 Mon) | Total : 5 days](#notion-heading-410d9e129df78093901dd0537e706fce)
  - [📕 E. Deep Learning Basics (2026.11.09 Mon)](#notion-heading-410d9e129df7805895fbe5ef006327a1)
    - [📃 a. Natural Language Processing (자연어 처리)](#notion-heading-410d9e129df780ac89e4d489f49a72ee)
    - [📃 b. NLP 입문 (Corpus, Tokenization, Vocabulary, Embedding)](#notion-heading-410d9e129df78013ab3ed55b17fb39e7)
    - [📃 c. Word2Vec (Vector, Cosine Similarity)](#notion-heading-410d9e129df780c4afa3fa7e9878bbee)
    - [📃 d. Seq2Seq (Encoder, Decoder)](#notion-heading-410d9e129df7807bb50fcb9b5cc736d2)
    - [📃 e. Attention (어텐션)](#notion-heading-410d9e129df780bd9070e61208969038)
    - [📃 f. Transformer (Self Attention, Multi-head Attention, BERT)](#notion-heading-410d9e129df780d7a258cbbbdca1122e)
  - [📕 번외. 각 라이브러리는 무엇인가요?](#notion-heading-410d9e129df780af820de5203cf2fdf8)

<a name="notion-heading-410d9e129df78093901dd0537e706fce"></a>

# 📚 4주차 Python Deep Learning (2026.11.03  Tue ~ 2026.11.09 Mon) | Total : 5 days

<a name="notion-heading-410d9e129df7805895fbe5ef006327a1"></a>

## 📕 E. Deep Learning Basics (2026.11.09 Mon)

<a name="notion-heading-410d9e129df780ac89e4d489f49a72ee"></a>

### 📃 a. Natural Language Processing (자연어 처리)

> 💡 <strong>핵심 개념:</strong> 텍스트, 음성 등 비정형 자연어 데이터를 컴퓨터가 연산 가능한 수학적 벡터로 변환하여, 언어의 의미적/통사적 규칙을 모델링하는 분야입니다.

- <strong>주요 태스크 분류</strong>
  - <strong>NLU (자연어 이해):</strong> 감성 분석, 개체명 인식(NER), 텍스트 분류, 기계 독해(MRC)
  - <strong>NLG (자연어 생성):</strong> 기계 번역(MT), 텍스트 요약, 언어 모델링(LLM)

<a name="notion-heading-410d9e129df78013ab3ed55b17fb39e7"></a>

### 📃 b. NLP 입문 (Corpus, Tokenization, Vocabulary, Embedding)

> 🛠️ <strong>파이프라인:</strong> 텍스트 데이터 ➔ 토큰화 ➔ 정수 인코딩 ➔ 밀집 벡터(Dense Vector) 변환

- <strong>1. Corpus (말뭉치) &amp; Preprocessing:</strong>
  - 모델 학습을 위해 수집된 텍스트 원본. 노이즈 제거(정규 표현식), 불용어(Stopword) 처리 수행.
- <strong>2. Tokenization (토큰화):</strong>
  - 텍스트를 연산의 기본 단위(Token)로 분할.
  - <strong>OOV (Out-Of-Vocabulary) 문제:</strong> 사전에 없는 미등록 단어가 등장하면 모델이 처리하지 못하는 현상.
  - <strong>Subword Tokenization (BPE 기법):</strong> OOV 문제를 해결하기 위해 단어를 더 작은 단위(subword)로 쪼개는 현대 NLP의 표준 기법. (예: `playing` ➔ `play` + `##ing`)
- <strong>3. Vocabulary (단어 사전):</strong>
  - 고유 토큰들에 고유한 정수 인덱스를 매핑한 해시 테이블. (`{"apple": 1, "banana": 2}`)
- <strong>4. Embedding (임베딩):</strong>
  - 희소 벡터(One-hot Vector)의 차원의 저주와 단어 간 의미적 단절 문제를 해결하기 위해, 단어를 고정된 차원의 연속형 실수 벡터(Dense Vector)로 맵핑.
  - 💻 <strong>PyTorch 구현:</strong> `nn.Embedding(vocab_size, embedding_dim)` 레이어 사용. 내부적으로 `(vocab_size × embedding_dim)` 크기의 가중치 행렬(Lookup Table)을 가지며 역전파를 통해 학습됨.

<a name="notion-heading-410d9e129df780c4afa3fa7e9878bbee"></a>

### 📃 c. Word2Vec (Vector, Cosine Similarity)

> 🌐 <strong>개념:</strong> "분포 가설(Distributional Hypothesis) - 문맥에서 같이 등장하는 단어는 의미도 비슷하다"를 기반으로 단어 벡터를 학습하는 초기 임베딩 아키텍처.

- <strong>학습 아키텍처</strong>
  - <strong>CBOW (Continuous Bag of Words):</strong> 주변 단어(Context)들의 임베딩 평균을 내어 중심 단어(Target)를 예측. (속도가 빠름)
  - <strong>Skip-gram:</strong> 중심 단어 하나를 입력받아 주변 단어들을 예측. (역전파 업데이트 횟수가 많아 희귀 단어 처리에 유리하며 성능이 더 우수함).
  - <strong>Negative Sampling:</strong> 연산량 감소를 위해 전체 단어 집합이 아닌, 정답 단어 1개와 오답 단어(Negative) K개만 샘플링하여 이진 분류(Sigmoid) 문제로 바꾸어 학습하는 최적화 기법.
- <strong>Cosine Similarity (코사인 유사도)</strong>
  - 벡터의 크기(Magnitude)를 무시하고 두 단어 벡터가 이루는 각도(방향)만으로 유사도를 측정.
  - 📐 <strong>수식:</strong> `cos(θ) = (A · B) / (||A|| × ||B||)`
    - `1`: 완전 동일 (방향이 같음)
    - `0`: 직교/무관 (관련성 없음)
    - `1`: 반대 의미 (방향이 정반대)

$$
cos(θ) = (A · B) / (||A|| × ||B||)
$$

- <strong>한계 (Static Embedding):</strong>
  - 동음이의어/다의어 구분 불가. "사과(Apple)"가 과일인지 회사인지 문맥에 상관없이 항상 동일한 벡터값을 가짐.

<a name="notion-heading-410d9e129df7807bb50fcb9b5cc736d2"></a>

### 📃 d. Seq2Seq (Encoder, Decoder)

> 🔄 <strong>구조:</strong> 가변 길이의 입력 시퀀스를 가변 길이의 출력 시퀀스로 매핑하는 아키텍처. (기계 번역에 주로 사용)

- <strong>1. Encoder (인코더):</strong>
  - 입력 시퀀스의 토큰들을 RNN(LSTM/GRU)으로 순차적으로 읽어들임.
  - 마지막 타임스텝의 은닉 상태(Hidden State)가 전체 문장의 정보를 압축한 Context Vector(문맥 벡터)가 됨.
- <strong>2. Decoder (디코더):</strong>
  - 인코더에서 넘어온 Context Vector를 초기 은닉 상태로 설정.
  - 시작 토큰 `<SOS>`를 입력받아 첫 단어를 예측하고, 예측한 단어를 다음 타임스텝의 입력으로 재사용(Autoregressive)하여 종료 토큰 `<EOS>`가 나올 때까지 반복.
- <strong>학습 기법 (Teacher Forcing, 교사 강요):</strong>
  - 학습 시 디코더의 이전 출력값을 다음 입력으로 주지 않고, <strong>실제 정답(Ground Truth) 시퀀스를 다음 입력으로 강제 주입</strong>하여 초기 학습 속도와 안정성을 높이는 기법.
- <strong>근본적 한계 (Bottleneck):</strong>
  - 인코더가 아무리 긴 문장을 읽어도 최종 Context Vector라는 <strong>고정된 크기의 벡터 하나에 모든 정보를 압축</strong>해야 하므로 앞부분의 정보 손실이 발생함.

<a name="notion-heading-410d9e129df780bd9070e61208969038"></a>

### 📃 e. Attention (어텐션)

> 🎯 <strong>핵심 혁신:</strong> Seq2Seq의 병목 현상을 해결하기 위해, 디코더가 매 시점 단어를 생성할 때마다 인코더의 <strong>전체 타임스텝 출력을 다시 스캔하여 현재 예측에 중요한 부분에 가중치(Attention)를 두는 메커니즘</strong>.

- <strong>Q, K, V (Query, Key, Value) 개념</strong>
  - <strong>Query (질의):</strong> 현재 시점 디코더의 Hidden State (지금 예측해야 할 상황)
  - <strong>Key (키):</strong> 모든 시점 인코더의 Hidden State들 (각 입력 단어의 특징)
  - <strong>Value (값):</strong> 모든 시점 인코더의 Hidden State들 (실제 가져올 정보의 값, 보통 Key와 동일)
- <strong>어텐션 메커니즘 연산 과정 (Dot-Product Attention)</strong>
  1. <strong>Score 계산:</strong> Query 벡터와 모든 Key 벡터를 각각 내적(Dot Product)하여 어텐션 스코어 산출. (어떤 단어와 유사한가?)
  1. <strong>Softmax 적용:</strong> 스코어 벡터를 Softmax에 통과시켜 총합이 1이 되는 확률값(Attention Weight)으로 변환.
  1. <strong>Context Vector 생성:</strong> Attention Weight와 각 Value 벡터를 가중합(Weighted Sum)하여 디코더의 현재 연산에 융합.

<a name="notion-heading-410d9e129df780d7a258cbbbdca1122e"></a>

### 📃 f. Transformer (Self Attention, Multi-head Attention, BERT)

> 🚀 <strong>배경:</strong> "Attention Is All You Need (2017)". 순차적 연산(RNN)을 완전히 배제하고, 어텐션 메커니즘만으로 병렬 연산을 구현하여 시퀀스를 처리하는 현대 딥러닝의 표준 아키텍처.

- <strong>1. Positional Encoding (위치 인코딩)</strong>
  - RNN을 제거했기 때문에 모델이 단어의 '순서(Sequence)'를 알 수 없음.
  - 이를 해결하기 위해 입력 임베딩 벡터에 사인(Sine)과 코사인(Cosine) 함수 기반의 주기적인 위치 값을 더해주어 단어의 상대적/절대적 위치 정보를 주입함.
- <strong>2. Self Attention (셀프 어텐션)</strong>
  - Seq2Seq의 어텐션(디코더가 인코더를 참조)과 달리, <strong>입력 문장 내부의 단어들끼리 서로 Attention을 계산</strong>하여 문맥을 파악함.
  - "The animal didn't cross the street because it was too tired."에서 `it`이 `animal`인지 `street`인지 모델 스스로 문맥적 가중치를 계산.
  - 📐 <strong>수식 연산 과정:</strong> `Attention(Q, K, V) = softmax( (Q · K^T) / √d_k ) × V`
$$
Attention(Q, K, V) = softmax( (Q · K^T) / √d_k ) × V
$$

    - $Q, K, V$는 모두 동일한 입력 문장에서 파생됨.
    - `√d_k` 로 나누는 이유(Scaled Dot-Product): 내적 값이 너무 커져 Softmax 기울기가 소실되는 것을 방지하기 위한 스케일링.
- <strong>3. Multi-head Attention (멀티 헤드 어텐션)</strong>
  - Self Attention을 한 번만 수행하는 것이 아니라, 여러 개의 헤드로 나누어 서로 다른 관점(문법, 의미, 구조 등)에서 동시에 병렬로 어텐션을 수행한 후 결과를 이어 붙임(Concat).
- <strong>4. BERT (Bidirectional Encoder Representations from Transformers)</strong>
  - Transformer 아키텍처에서 <strong>Encoder(인코더) 부분만 독립적으로 떼어내어</strong> 대규모 코퍼스로 사전 학습(Pre-training)한 모델.
  - <strong>MLM (Masked Language Modeling):</strong> 입력 문장의 단어 15%를 `[MASK]`로 가리고 이를 양방향 문맥을 통해 예측하는 방식으로 학습.
  - 단어의 문맥에 따라 임베딩 벡터가 동적으로 변하기 때문에 Word2Vec의 다의어 문제를 완벽히 해결함.

---

> 💡 gradio, fastmcp, openai, requests, python-dotenv  왜 사용하는건가요?

<a name="notion-heading-410d9e129df780af820de5203cf2fdf8"></a>

## 📕 번외. 각 라이브러리는 무엇인가요?

① Gradio

사용자 인터페이스 (UI)

Python 코드로 웹 화면을 쉽게 만들어주는 라이브러리입니다.

- AI 챗봇 화면 제작
- 이미지 업로드 및 분석 화면
- 음성 입력 및 출력
- 모델 테스트용 웹 인터페이스

쉽게 말하면, AI와 대화할 수 있는 화면을 만들어주는 도구입니다.

② FastMCP

AI 도구 연결 (MCP)

Python 함수나 프로그램을 MCP 서버로 쉽게 만들어주는 프레임워크입니다.

- AI가 Python 함수를 실행하도록 연결
- 파일 읽기 및 쓰기 기능 제공
- 데이터베이스 조회
- 외부 프로그램과 AI 연결

쉽게 말하면, AI에게 사용할 수 있는 도구와 기능을 제공하는 연결 통로입니다.

③ OpenAI Python SDK

AI 모델 연결

Python 프로그램에서 OpenAI API를 사용할 수 있도록 해주는 공식 라이브러리입니다.

- GPT 모델 호출
- 질문과 답변 처리
- 이미지 분석
- AI 에이전트 기능 구현

쉽게 말하면, 내 Python 프로그램과 GPT를 연결해주는 통신 도구입니다.

④ Requests

인터넷 통신

Python에서 HTTP 요청을 쉽게 보내고 응답을 받을 수 있게 해주는 라이브러리입니다.

- 웹사이트 데이터 가져오기
- REST API 호출
- 서버에 데이터 전송
- 외부 서비스와 통신

쉽게 말하면, Python 프로그램이 인터넷을 통해 다른 서버와 대화하도록 해주는 도구입니다.

⑤ python-dotenv

환경변수 및 보안

`.env` 파일에 저장한 환경변수를 Python에서 불러오는 라이브러리입니다.

- OpenAI API Key 관리
- 비밀번호 및 인증 정보 관리
- 개발 환경 설정
- 민감한 정보의 코드 분리

쉽게 말하면, API Key와 같은 비밀 정보를 소스 코드에 직접 적지 않도록 관리하는 도구입니다.
