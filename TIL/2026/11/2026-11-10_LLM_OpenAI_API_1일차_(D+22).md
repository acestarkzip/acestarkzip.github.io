<!-- notion-to-github-managed -->
<!-- notion-page-id: 414d9e129df78056bd46dae5123cbef0 -->
<!-- notion-last-edited-time: 2026-11-12T08:01:00.000Z -->

# LLM OpenAI API  1일차 (D+22)

> - **날짜 :** 2026-11-10
> - **간단메모 :** LLM | API 호출 후 반응형 챗봇 만들기 진행
> - **원본 노션 :** [바로가기 링크](https://app.notion.com/p/LLM-OpenAI-API-1-D-22-414d9e129df78056bd46dae5123cbef0)

---

- [📚 1. OpenAI API 메일 수령](#notion-heading-414d9e129df780f598cfd86032fe190c)
  - [📕 a. API 초대 수락 후 Secret Key 발급](#notion-heading-414d9e129df780c5a44ae484573fc99c)
  - [📕 b. OpenAI Service Health 체크](#notion-heading-414d9e129df780ee882ecf59a0c63355)
  - [📕 c. Limits 체크](#notion-heading-414d9e129df7804288dbd331647cb1df)
  - [📕 d. 로컬에서 API 호출 후 요청&응답 테스트](#notion-heading-414d9e129df780f092e4cb8d6efcd2d1)
  - [📕 e. 비용확인](#notion-heading-414d9e129df780a7a982cdd000bc045c)
  - [📕 f. API 호출 후 요청&응답 테스트 코드](#notion-heading-414d9e129df780f6ad1af2939e047e06)
  - [📕 g. API 호출 후 실시간 요청&응답 코드](#notion-heading-414d9e129df7804f8553da545079b769)
  - [📕 h. API 호출 후 실시간 요청&응답 결과](#notion-heading-414d9e129df780a2b8a1fd382b17499a)

<a name="notion-heading-414d9e129df780f598cfd86032fe190c"></a>

# 📚 1. OpenAI API 메일 수령

[![📚 1. OpenAI API 메일 수령](./2026-11-10_LLM_OpenAI_API_1%EC%9D%BC%EC%B0%A8_%28D%2B22%29_assets/01_1-OpenAI-API-%EB%A9%94%EC%9D%BC-%EC%88%98%EB%A0%B9.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-10_LLM_OpenAI_API_1%EC%9D%BC%EC%B0%A8_%28D%2B22%29_assets/01_1-OpenAI-API-%EB%A9%94%EC%9D%BC-%EC%88%98%EB%A0%B9.png)

<a name="notion-heading-414d9e129df780c5a44ae484573fc99c"></a>

## 📕 a. API 초대 수락 후 Secret Key 발급

[![📕 a. API 초대 수락 후 Secret Key 발급](./2026-11-10_LLM_OpenAI_API_1%EC%9D%BC%EC%B0%A8_%28D%2B22%29_assets/02_a-API-%EC%B4%88%EB%8C%80-%EC%88%98%EB%9D%BD-%ED%9B%84-Secret-Key-%EB%B0%9C%EA%B8%89.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-10_LLM_OpenAI_API_1%EC%9D%BC%EC%B0%A8_%28D%2B22%29_assets/02_a-API-%EC%B4%88%EB%8C%80-%EC%88%98%EB%9D%BD-%ED%9B%84-Secret-Key-%EB%B0%9C%EA%B8%89.png)

<a name="notion-heading-414d9e129df780ee882ecf59a0c63355"></a>

## 📕 b. OpenAI Service Health 체크

[![📕 b. OpenAI Service Health 체크](./2026-11-10_LLM_OpenAI_API_1%EC%9D%BC%EC%B0%A8_%28D%2B22%29_assets/03_b-OpenAI-Service-Health-%EC%B2%B4%ED%81%AC.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-10_LLM_OpenAI_API_1%EC%9D%BC%EC%B0%A8_%28D%2B22%29_assets/03_b-OpenAI-Service-Health-%EC%B2%B4%ED%81%AC.png)

<a name="notion-heading-414d9e129df7804288dbd331647cb1df"></a>

## 📕 c. Limits 체크

[![📕 c. Limits 체크](./2026-11-10_LLM_OpenAI_API_1%EC%9D%BC%EC%B0%A8_%28D%2B22%29_assets/04_c-Limits-%EC%B2%B4%ED%81%AC.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-10_LLM_OpenAI_API_1%EC%9D%BC%EC%B0%A8_%28D%2B22%29_assets/04_c-Limits-%EC%B2%B4%ED%81%AC.png)

<a name="notion-heading-414d9e129df780f092e4cb8d6efcd2d1"></a>

## 📕 d. 로컬에서 API 호출 후 요청&응답 테스트

[![📕 d. 로컬에서 API 호출 후 요청&응답 테스트](./2026-11-10_LLM_OpenAI_API_1%EC%9D%BC%EC%B0%A8_%28D%2B22%29_assets/05_d-%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-API-%ED%98%B8%EC%B6%9C-%ED%9B%84-%EC%9A%94%EC%B2%AD%EC%9D%91%EB%8B%B5-%ED%85%8C%EC%8A%A4%ED%8A%B8.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-10_LLM_OpenAI_API_1%EC%9D%BC%EC%B0%A8_%28D%2B22%29_assets/05_d-%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-API-%ED%98%B8%EC%B6%9C-%ED%9B%84-%EC%9A%94%EC%B2%AD%EC%9D%91%EB%8B%B5-%ED%85%8C%EC%8A%A4%ED%8A%B8.png)

<a name="notion-heading-414d9e129df780a7a982cdd000bc045c"></a>

## 📕 e. 비용확인

[![📕 e. 비용확인](./2026-11-10_LLM_OpenAI_API_1%EC%9D%BC%EC%B0%A8_%28D%2B22%29_assets/06_e-%EB%B9%84%EC%9A%A9%ED%99%95%EC%9D%B8.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-10_LLM_OpenAI_API_1%EC%9D%BC%EC%B0%A8_%28D%2B22%29_assets/06_e-%EB%B9%84%EC%9A%A9%ED%99%95%EC%9D%B8.png)

<a name="notion-heading-414d9e129df780f6ad1af2939e047e06"></a>

## 📕 f. API 호출 후 요청&응답 테스트 코드

```python
import os
from dotenv import load_dotenv
from openai import OpenAI

# 1. 환경변수 불러오기
load_dotenv()

# 2. API KEY 가져오기
api_key = os.getenv("OPENAI_API_KEY")

# API KEY 확인
if not api_key:
    raise ValueError("OPENAI_API_KEY가 설정되지 않았습니다.")

# 3. OpenAI 클라이언트 생성
client = OpenAI(api_key=api_key)

# 공통 지침
instructions = """
너는 교수님이다.
모든 대답은 신중하고 자세하게 설명해야 한다.
전문적인 용어는 초보자도 이해할 수 있도록 설명한다.
"""

# 4. 첫 번째 Responses API 호출
response1 = client.responses.create(
    model="gpt-4o-mini",
    input="NVIDIA가 왜 로봇 분야로 기술을 발전하고 있는지 얘기해줘.",
    instructions=instructions,
    temperature=1,
    store=True
)

# 5. 두 번째 Responses API 호출
response2 = client.responses.create(
    model="gpt-4o-mini",
    input="그렇다면 NVIDIA가 로봇 분야로 진출하면 미래에는 어떤 결과가 있을지 얘기해줘.",
    instructions=instructions,
    previous_response_id=response1.id,
    store=True
)

# 6. 응답 출력
print("=" * 50)
print("첫 번째 질문")
print(response1.output_text)

print("=" * 50)
print("두 번째 질문")
print(response2.output_text)

# 7. 응답 ID 확인
print("=" * 50)
print("첫 번째 Response ID:", response1.id)
print("두 번째 Response ID:", response2.id)
```

<a name="notion-heading-414d9e129df7804f8553da545079b769"></a>

## 📕 g. API 호출 후 실시간 요청&응답 코드

```python

import os
from dotenv import load_dotenv
from openai import OpenAI

# 1. 환경변수 불러오기
load_dotenv()

# 2. API KEY 가져오기
api_key = os.getenv("OPENAI_API_KEY")

if not api_key:
    raise ValueError("OPENAI_API_KEY가 설정되지 않았습니다.")

# 3. OpenAI 클라이언트 생성
client = OpenAI(api_key=api_key)

# 4. 공통 지침
instructions = """
너는 교수님이다.
모든 대답은 신중하고 자세하게 설명해야 한다.
전문적인 용어는 초보자도 이해할 수 있도록 설명한다.
"""

# 이전 대화 ID 저장
previous_response_id = None

print("GPT 스트리밍 채팅을 시작합니다.")
print("종료하려면 exit를 입력하세요.")
print("=" * 50)

# 5. 대화 반복
while True:

    user_input = input("\nYou >>> ")

    # 종료 명령어
    if user_input.lower() in ["exit", "quit"]:
        print("채팅을 종료합니다.")
        break

    # 빈 질문 방지
    if not user_input.strip():
        continue

    print("\nGPT >>> ", end="", flush=True)

    # 6. Streaming API 호출
    with client.responses.stream(
        model="gpt-4o-mini",
        input=user_input,
        instructions=instructions,
        previous_response_id=previous_response_id,
        temperature=1,
        store=True
    ) as stream:

        # 실시간 응답 출력
        for event in stream:

            if event.type == "response.output_text.delta":
                print(event.delta, end="", flush=True)

        # 최종 응답 가져오기
        response = stream.get_final_response()

        # 다음 대화에 사용할 ID 저장
        previous_response_id = response.id

    print()

```

<a name="notion-heading-414d9e129df780a2b8a1fd382b17499a"></a>

## 📕 h. API 호출 후 실시간 요청&응답 결과

```text
GPT 스트리밍 채팅을 시작합니다.
종료하려면 exit를 입력하세요.
==================================================

You >>> 안녕 너 엔비디아 기술 얼마나 알고있어?

GPT >>> 안녕하세요! 엔비디아(NVIDIA)는 그래픽 처리 장치(GPU)와 인공지능(AI), 게임 및 데이터 센터 기술 등 여러 분야에서 중요한 역할을 하는 회사입니다. 그들의 기술은 주로 다음과 같은 분야에 집중되어 있습니다:

1. **GPU(Graphics Processing Unit)**: GPU는 컴퓨터의 그래픽을 처리하는 데 사용됩니다. 엔비디아는 게임 그래픽을 더 현실감 있게 만들 수 있는 고성능 GPU를 제공합니다. 이러한 GPU는 복잡한 수학적 계산을 빠르게 처리할 수 있도록 설계되어 있습니다.

2. **인공지능(AI) 및 머신러닝**: 엔비디아의 GPU는 대량의 데이터를 빠르게 처리할 수 있어 인공지능 모델을 학습하는 데 매우 유용합니다. 그들의 CUDA(CUDA는 Compute Unified Device Architecture의 약자)는 프로그래머가 GPU를 쉽게 활용하여 병렬 처리할 수 있게 해주는 소프트웨어 플랫폼입니다.

3. **자율주행차**: 엔비디아는 자율주행차용 컴퓨터 비전 및 딥러닝 기술을 개발하고 있습니다. 이 기술은 차량이 주변 환경을 인식하고 안전하게 주행할 수 있도록 돕습니다.

4. **AI 생성 콘텐츠**: NVIDIA의 기술은 이미지나 동영상을 생성하는 데에도 사용됩니다. 예를 들어, GAN(Generative Adversarial Networks)이라는 기술을 통해 새로운 이미지를 생성하는 데까지 사용되고 있습니다.

5. **게임**: 엔비디아의 GeForce 그래픽 카드는 게임을 더욱 사실적으로 즐길 수 있게 해줍니다. 이 카드는 실시간 레이 트레이싱 기술을 통해 빛의 반사와 그림자를 매우 현실감 있게 표현할 수 있습니다.

이 외에도 엔비디아는 데이터 센터, 헬스케어, 클라우드 컴퓨팅 등 여러 분야에서 기술을 활용하고 있습니다. 이해하기 쉽게 설명이 되었길 바랍니다! 궁금한 점이 더 있으시면 말씀해 주세요.



You >>> 내가 로봇에 관심이 많은데, 엔비디아 기술을 활용하면 장점이 뭐가 있어? 

GPT >>> 로봇 기술에 있어 엔비디아의 기술을 활용하는 것은 여러 면에서 많은 장점이 있습니다. 여기서는 몇 가지 주요 이점을 설명하겠습니다.

### 1. **강력한 처리 성능**
- **GPU의 병렬 처리**: 엔비디아의 GPU는 여러 개의 작업을 동시에 처리할 수 있는 능력이 뛰어납니다. 로봇이 환경을 인식하고 데이터를 처리하는 데 필요한 계산을 신속하게 수행할 수 있어, 보다 실시간으로 반응할 수 있습니다.
- 예를 들어, 로봇이 센서를 통해 수집한 데이터를 기반으로 경로를 계획하거나 장애물을 피할 때, 이 병렬 처리 능력이 중요한 역할을 합니다.

### 2. **인공지능 및 머신러닝**
- **딥러닝 모델의 학습**: 엔비디아의 기술을 사용하면 로봇에 딥러닝 모델을 쉽게 적용할 수 있습니다. 이를 통해 로봇은 학습을 통해 점점 더 효율적인 동작을 할 수 있게 됩니다.
- 예를 들어, 로봇이 사람의 행동을 인식하기 위해 이미지 인식 알고리즘을 사용할 수 있으며, 이를 통해 다양한 상황에 적응할 수 있습니다.

### 3. **실시간 비전 처리**
- **컴퓨터 비전**: 엔비디아의 플랫폼은 비주얼 데이터를 빠르고 정확하게 처리할 수 있는 강력한 도구를 제공합니다. 로봇이 카메라를 통해 주변을 인식하고 물체를 탐지하며, 이를 기반으로 의사결정을 내리는 데 큰 도움이 됩니다.
- 이를 통해 자율주행 로봇이나 드론에서 물체를 감지하고 회피하는 데 필요한 기술을 구현할 수 있습니다.

### 4. **시뮬레이션 및 테스트**
- **로보틱스 시뮬레이터**: 엔비디아는 로봇을 가상 환경에서 시뮬레이션할 수 있는 툴(예: Isaac Sim)을 제공합니다. 이를 통해 실제 환경에서 시도하기 전에 다양한 시나리오를 테스트할 수 있어 개발 기간을 단축하고 비용을 절감할 수 있습니다.
- 또한, 이를 통해 로봇의 알고리즘을 안전하게 테스트하고 개선할 수 있습니다.

### 5. **클라우드 통합 및 멀티 디바이스 지원**
- **클라우드 AI**: 엔비디아의 클라우드 기반 서비스를 활용하면 여러 로봇이 상호 연결되고 동시에 작업할 수 있습니다. 이는 대규모 로봇 배치를 관리하거나 정보를 공유하는 데 도움을 줍니다.

### 정리
엔비디아의 기술을 활용하면 로봇의 성능, 처리 속도, 적응력 및 개발 효율성을 높일 수 있습니다. 이러한 장점들은 로봇이 더 스마트하고 유능하게 될 수 있도록 돕습니다. 추가적인 질문이 있다면 언제든지 말씀해 주세요!

You >>> 



```
