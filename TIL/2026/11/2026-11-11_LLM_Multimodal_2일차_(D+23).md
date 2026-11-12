<!-- notion-to-github-managed -->
<!-- notion-page-id: 414d9e129df7801ab2e7ce2b5d769b6e -->
<!-- notion-last-edited-time: 2026-11-12T11:04:00.000Z -->

# LLM Multimodal 2일차 (D+23)

> - **날짜 :** 2026-11-11
> - **간단메모 :** LLM | 멀티모달 프롬프트 이미지 가공
> - **원본 노션 :** [바로가기 링크](https://app.notion.com/p/LLM-Multimodal-2-D-23-414d9e129df7801ab2e7ce2b5d769b6e)

---

- [1. 멀티모달 예제 “Image-to-Text (이미지 투 텍스트)”](#notion-heading-415d9e129df780c0b445c3ebc0eeb7d6)
  - [결과 : API 호출 후 URL 이미지 설명](#notion-heading-415d9e129df780a09cb2cb4f63057a4b)
  - [코드 : API 호출 후 URL 이미지 설명](#notion-heading-415d9e129df780fca2b7edd926d01300)
- [2. 멀티모달 예제 “Image-to-Text (이미지 투 텍스트)”](#notion-heading-415d9e129df7804a868dd245cf609df6)
  - [예상 : API 호출 후 프롬프트로 출력된 이미지](#notion-heading-415d9e129df7806e9999f18136115316)
  - [결과 : API 호출 후 프롬프트로 출력된 이미지](#notion-heading-415d9e129df780569785c7dbc445fa98)
  - [코드 : API 호출 후 프롬프트로 출력된 이미지](#notion-heading-415d9e129df780dfbe82e6119ebe43fd)
- [3. 멀티모달 예제 “Image-to-Image (이미지 투 이미지)”](#notion-heading-415d9e129df780508094d658a216a53c)
  - [결과 : API 호출 후 프롬프트로 출력된 이미지](#notion-heading-415d9e129df78097963bdd18dd60ab01)
  - [코드 : API 호출 후 프롬프트로 출력된 이미지 투 이미지](#notion-heading-415d9e129df780b48525f6a2b9639333)
  - [결과 : 이미지 흑백 전환하기](#notion-heading-415d9e129df780fa9ccbe7aa07325395)
  - [코드 : 이미지 흑백 전환하기](#notion-heading-415d9e129df7806eabdae6fa186a2d15)
  - [결과 : 이미지 회전 적용하기](#notion-heading-415d9e129df7801c89dcfb7d4c6eeb4f)
  - [코드 : 이미지 회전 적용하기](#notion-heading-415d9e129df78074a611e8087131aa70)
  - [결과 : 그림판에 그린 손그림을 프롬프트와 이미지로 출력](#notion-heading-415d9e129df780e6818eea06f78cd397)
    - [그림판에 손으로 그린 그림](#notion-heading-415d9e129df78033b28dd51a98022425)
    - [출력된 결과물(gpt-image-1-mini)](#notion-heading-415d9e129df780a49c8ce5a19cbf4df5)
  - [코드 : 그림판에 그린 손그림을 프롬프트와 이미지로 출력](#notion-heading-415d9e129df7800a82b9d379096312bc)
  - [코드 : 그림판에 그린 손그림을 이미지로 출력 (GPT-5.6 Luna)](#notion-heading-415d9e129df7807f9184db067e17bb23)
    - [번외 : 그림판에 그린 손그림을 프롬프트와 이미지로 출력](#notion-heading-415d9e129df7803fa021dbb78d5535ea)

<a name="notion-heading-415d9e129df780c0b445c3ebc0eeb7d6"></a>

# 1. 멀티모달 예제 “Image-to-Text (이미지 투 텍스트)”

[![1. 멀티모달 예제 “Image-to-Text (이미지 투 텍스트)”](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/01_%EB%A9%80%ED%8B%B0%EB%AA%A8%EB%8B%AC-%EC%98%88%EC%A0%9C-Image-to-Text-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%88%AC-%ED%85%8D%EC%8A%A4.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/01_%EB%A9%80%ED%8B%B0%EB%AA%A8%EB%8B%AC-%EC%98%88%EC%A0%9C-Image-to-Text-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%88%AC-%ED%85%8D%EC%8A%A4.png)

<a name="notion-heading-415d9e129df780a09cb2cb4f63057a4b"></a>

## 결과 : API 호출 후 URL 이미지 설명

[![결과 : API 호출 후 URL 이미지 설명](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/02_%EA%B2%B0%EA%B3%BC-API-%ED%98%B8%EC%B6%9C-%ED%9B%84-URL-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%84%A4%EB%AA%85.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/02_%EA%B2%B0%EA%B3%BC-API-%ED%98%B8%EC%B6%9C-%ED%9B%84-URL-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%84%A4%EB%AA%85.png)

<a name="notion-heading-415d9e129df780fca2b7edd926d01300"></a>

## 코드 : API 호출 후 URL 이미지 설명 

```python
import os
from dotenv import load_dotenv
from openai import OpenAI

# 1. .env 파일에 정의된 환경변수들을 시스템 환경변수로 로드
load_dotenv()

# 2. 환경변수에서 OpenAI API 키 값을 가져옴
api_key = os.getenv("OPENAI_API_KEY")

# 3. OpenAI 클라이언트 객체 초기화 (API 키 전달)
client = OpenAI(api_key=api_key)

# 4. 멀티모달 처리를 위한 Chat Completions API 호출
response = client.chat.completions.create(
    # 사용할 모델 지정 (GPT-4o 계열은 텍스트 및 이미지 멀티모달 지원)
    model="gpt-4o-mini",
    # 대화 히스토리 및 사용자 요청을 담는 리스트
    messages=[
        {
            # 요청을 보내는 주체 (사용자)
            "role": "user",
            # 텍스트와 이미지 등 여러 유형의 입력을 하나의 content 리스트에 담아 전달
            "content": [
                # (1) 모델에게 내릴 텍스트 지시사항(프롬프트)
                {
                    "type": "text",
                    "text": "지금 내가 준 그림을 3줄 내로 설명해줘.",
                },
                # (2) 분석할 이미지 정보
                {
                    "type": "image_url",
                    # 이미지 URL 객체 전달 (외부 공개 URL 또는 base64 데이터 URI 사용 가능)
                    "image_url": {
                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiOnGbR1fXO1wL5iUyRkwsLQG32u8hz98byL3Y4rU1A&s=10"
                    },
                },
            ],
        }
    ],
)

# 5. 모델이 생성한 최종 텍스트 응답 추출 후 터미널에 출력
# choices[0]: 모델의 첫 번째 응답 후보
# message.content: 응답 본문 텍스트
print(response.choices[0].message.content)
```

<a name="notion-heading-415d9e129df7804a868dd245cf609df6"></a>

# 2. 멀티모달 예제 “Image-to-Text (이미지 투 텍스트)”

<a name="notion-heading-415d9e129df7806e9999f18136115316"></a>

## 예상 : API 호출 후 프롬프트로 출력된 이미지 

[![예상 : API 호출 후 프롬프트로 출력된 이미지](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/03_%EC%98%88%EC%83%81-API-%ED%98%B8%EC%B6%9C-%ED%9B%84-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EB%A1%9C-%EC%B6%9C%EB%A0%A5%EB%90%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/03_%EC%98%88%EC%83%81-API-%ED%98%B8%EC%B6%9C-%ED%9B%84-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EB%A1%9C-%EC%B6%9C%EB%A0%A5%EB%90%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80.png)

<a name="notion-heading-415d9e129df780569785c7dbc445fa98"></a>

## 결과 : API 호출 후 프롬프트로 출력된 이미지 

[![결과 : API 호출 후 프롬프트로 출력된 이미지](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/04_%EA%B2%B0%EA%B3%BC-API-%ED%98%B8%EC%B6%9C-%ED%9B%84-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EB%A1%9C-%EC%B6%9C%EB%A0%A5%EB%90%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/04_%EA%B2%B0%EA%B3%BC-API-%ED%98%B8%EC%B6%9C-%ED%9B%84-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EB%A1%9C-%EC%B6%9C%EB%A0%A5%EB%90%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80.png)

<a name="notion-heading-415d9e129df780dfbe82e6119ebe43fd"></a>

## 코드 : API 호출 후 프롬프트로 출력된 이미지 

```python
import base64
import os
import urllib.request
from dotenv import load_dotenv
from openai import OpenAI

# 1. .env 파일의 환경변수 로드
load_dotenv()

# 2. OpenAI API 키 불러오기
api_key = os.getenv("OPENAI_API_KEY")

# 3. OpenAI 클라이언트 객체 초기화
client = OpenAI(api_key=api_key)

# 4. 이미지 생성 호출
result = client.images.generate(
    model="gpt-image-1-mini",
    prompt="세 마리의 도베르만이 안개 낀 길에 서 있습니다. 왼쪽에는 작은 도베르만, 중앙과 오른쪽에는 더 큰 도베르만이 있습니다. 전체적으로 강렬한 표정을 지니고 있어 경계심을 나타내고 있습니다.",
    size="1024x1024",
)

# 5. 현재 파이썬 파일이 위치한 폴더 경로 가져오기
current_dir = os.path.dirname(os.path.abspath(__file__))

# 6. 현재 폴더 안에 'dobermans.png' 저장 경로 설정 (System32 쓰기 에러 방지)
save_path = os.path.join(current_dir, "dobermans.png")

# 7. 생성된 결과 객체 가져오기
image_data = result.data[0]

# 8. 반환 형식에 맞추어 절대 경로에 저장
if hasattr(image_data, "b64_json") and image_data.b64_json:
    image_bytes = base64.b64decode(image_data.b64_json)
    with open(save_path, "wb") as f:
        f.write(image_bytes)
    print(f"Base64 데이터를 파일로 저장했습니다:\n-> {save_path}")

elif hasattr(image_data, "url") and image_data.url:
    print("생성된 이미지 URL:", image_data.url)
    urllib.request.urlretrieve(image_data.url, save_path)
    print(f"이미지를 다운로드하여 저장했습니다:\n-> {save_path}")
```

<a name="notion-heading-415d9e129df780508094d658a216a53c"></a>

# 3. 멀티모달 예제 “Image-to-Image (이미지 투 이미지)”

<a name="notion-heading-415d9e129df78097963bdd18dd60ab01"></a>

## 결과 : API 호출 후 프롬프트로 출력된 이미지 

[![결과 : API 호출 후 프롬프트로 출력된 이미지](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/05_%EA%B2%B0%EA%B3%BC-API-%ED%98%B8%EC%B6%9C-%ED%9B%84-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EB%A1%9C-%EC%B6%9C%EB%A0%A5%EB%90%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/05_%EA%B2%B0%EA%B3%BC-API-%ED%98%B8%EC%B6%9C-%ED%9B%84-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EB%A1%9C-%EC%B6%9C%EB%A0%A5%EB%90%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80.png)

<a name="notion-heading-415d9e129df780b48525f6a2b9639333"></a>

## 코드 : API 호출 후 프롬프트로 출력된 이미지 투 이미지

```python
import base64
import os
import urllib.request
from dotenv import load_dotenv
from openai import OpenAI

# 1. .env 파일의 환경변수 로드
load_dotenv()

# 2. OpenAI API 키 불러오기
api_key = os.getenv("OPENAI_API_KEY")

# 3. OpenAI 클라이언트 객체 초기화
client = OpenAI(api_key=api_key)

# 4. 현재 스크립트 기준 절대 경로 설정 (경로 에러 방지)
current_dir = os.path.dirname(os.path.abspath(__file__))
input_path = os.path.join(current_dir, "dobermans.png")
output_path = os.path.join(current_dir, "jindo_beach.png")

# 5. 기존 이미지를 바탕으로 수정(Image-to-Image Edit) 호출
with open(input_path, "rb") as image_file:
    result = client.images.edit(
        model="gpt-image-1-mini",
        image=image_file,  # 수정할 원본 이미지 파일
        prompt="캐릭터를 도베르만에서 진돗개로 바꿔주고, 배경을 해변가로 변경해줘.",
        size="1024x1024",
    )

# 6. 생성된 결과 객체 확인 및 저장
image_data = result.data[0]

# (A) Base64 데이터로 온 경우
if hasattr(image_data, "b64_json") and image_data.b64_json:
    image_bytes = base64.b64decode(image_data.b64_json)
    with open(output_path, "wb") as f:
        f.write(image_bytes)
    print(f"이미지가 성공적으로 저장되었습니다:\n-> {output_path}")

# (B) URL 주소로 온 경우
elif hasattr(image_data, "url") and image_data.url:
    urllib.request.urlretrieve(image_data.url, output_path)
    print(f"이미지가 다운로드되어 저장되었습니다:\n-> {output_path}")
```

<a name="notion-heading-415d9e129df780fa9ccbe7aa07325395"></a>

## 결과 : 이미지 흑백 전환하기

[![결과 : 이미지 흑백 전환하기](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/06_%EA%B2%B0%EA%B3%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%9D%91%EB%B0%B1-%EC%A0%84%ED%99%98%ED%95%98%EA%B8%B0.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/06_%EA%B2%B0%EA%B3%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%9D%91%EB%B0%B1-%EC%A0%84%ED%99%98%ED%95%98%EA%B8%B0.png)

<a name="notion-heading-415d9e129df7806eabdae6fa186a2d15"></a>

## 코드 : 이미지 흑백 전환하기

```python
import gradio as gr
from PIL import Image

def greyscale(image):
    # 이미지를 업로드하지 않고 변환 버튼을 눌렀을 때 예외 처리
    if image is None:
        return None
    # PIL 이미지를 흑백/그레이스케일(L 모드)로 변환
    image_grey = image.convert('L')
    return image_grey

with gr.Blocks() as demo:
    with gr.Row():
        # 1번 열: 원본 이미지 업로드 및 변환 버튼
        with gr.Column():
            input_img = gr.Image(type='pil', height=300, width=300, label="원본 이미지")
            btn = gr.Button("변환", variant='primary')

        # 2번 열: 변환 결과 출력 (오타 수정: Cloumn -> Column)
        with gr.Column():
            gallery = gr.Image(type='pil', height=300, width=300, label="흑백 결과")

    # 버튼 클릭 시 함수 실행 및 입출력 연결
    btn.click(
        fn=greyscale, 
        inputs=input_img,
        outputs=gallery
    )

demo.launch()
```

<a name="notion-heading-415d9e129df7801c89dcfb7d4c6eeb4f"></a>

## 결과 : 이미지 회전 적용하기

[![결과 : 이미지 회전 적용하기](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/07_%EA%B2%B0%EA%B3%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%9A%8C%EC%A0%84-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/07_%EA%B2%B0%EA%B3%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%9A%8C%EC%A0%84-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0.png)

<a name="notion-heading-415d9e129df78074a611e8087131aa70"></a>

## 코드 : 이미지 회전 적용하기

```python
import gradio as gr
from PIL import Image

def rotate_img(image):
    # 이미지가 업로드되지 않은 경우 빈 리스트 반환
    if image is None:
        return []
    
    degrees = 0
    output = []
    # 0도부터 315도까지 45도 간격으로 8장의 회전 이미지 생성
    # expand=True: 회전 시 모서리가 잘리지 않고 캔버스 크기를 자동 조절
    while degrees < 360:
        rotated = image.rotate(degrees, expand=True)
        output.append((rotated, f"{degrees}도 회전"))  # 캡션과 함께 튜플로 전달 가능
        degrees += 45
        
    return output

with gr.Blocks() as demo:
    with gr.Row():
        # 1번 열: 원본 이미지 업로드 및 실행 버튼
        with gr.Column():
            input_img = gr.Image(type="pil", height=300, label="원본 이미지")
            btn = gr.Button("회전 생성", variant="primary")

        # 2번 열: 여러 이미지를 격자 형태로 표시하는 Gallery 컴포넌트
        with gr.Column():
            gallery = gr.Gallery(
                label="회전 결과",
                columns=4,           # 한 줄에 4개씩 배치 (45도 간격 8장이면 2줄로 정렬)
                rows=2,
                height=350,
                object_fit="contain"
            )

    # 버튼 클릭 시 rotate_img 실행 및 결과 Gallery에 연결
    btn.click(
        fn=rotate_img, 
        inputs=input_img, 
        outputs=gallery
    )

demo.launch()
```

<a name="notion-heading-415d9e129df780e6818eea06f78cd397"></a>

## 결과 : 그림판에 그린 손그림을 프롬프트와 이미지로 출력

<a name="notion-heading-415d9e129df78033b28dd51a98022425"></a>

### 그림판에 손으로 그린 그림

[![그림판에 손으로 그린 그림](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/08_%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EC%86%90%EC%9C%BC%EB%A1%9C-%EA%B7%B8%EB%A6%B0-%EA%B7%B8%EB%A6%BC.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/08_%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EC%86%90%EC%9C%BC%EB%A1%9C-%EA%B7%B8%EB%A6%B0-%EA%B7%B8%EB%A6%BC.png)

<a name="notion-heading-415d9e129df780a49c8ce5a19cbf4df5"></a>

### 출력된 결과물(gpt-image-1-mini)

[![출력된 결과물(gpt-image-1-mini)](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/09_%EC%B6%9C%EB%A0%A5%EB%90%9C-%EA%B2%B0%EA%B3%BC%EB%AC%BCgpt-image-1-mini.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/09_%EC%B6%9C%EB%A0%A5%EB%90%9C-%EA%B2%B0%EA%B3%BC%EB%AC%BCgpt-image-1-mini.png)

[![출력된 결과물(gpt-image-1-mini)](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/10_%EC%B6%9C%EB%A0%A5%EB%90%9C-%EA%B2%B0%EA%B3%BC%EB%AC%BCgpt-image-1-mini.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/10_%EC%B6%9C%EB%A0%A5%EB%90%9C-%EA%B2%B0%EA%B3%BC%EB%AC%BCgpt-image-1-mini.png)

<a name="notion-heading-415d9e129df7800a82b9d379096312bc"></a>

## 코드 : 그림판에 그린 손그림을 프롬프트와 이미지로 출력

```python
import base64
import io
import os
import urllib.request
from dotenv import load_dotenv
import gradio as gr
from openai import OpenAI
from PIL import Image

# 1. 환경 변수 로드 및 OpenAI 클라이언트 초기화
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)


def pil_to_base64(pil_image):
    """PIL 이미지를 OpenAI API에 보낼 수 있는 base64 문자열로 변환하는 함수"""
    buffered = io.BytesIO()
    # 투명 배경(RGBA)일 수 있으므로 RGB로 변환 후 JPEG로 저장
    pil_image.convert("RGB").save(buffered, format="JPEG")
    return base64.b64encode(buffered.getvalue()).decode("utf-8")


def generate_artist_painting(sketch_image):
    """Gradio에서 스케치 이미지를 받아 멋진 그림으로 변환하는 핵심 함수"""
    if sketch_image is None:
        return None, "그림을 먼저 그리거나 업로드해 주세요."

    # -------------------------------------------------------------
    # 1-1. Image-to-Text: 손그림을 분석하여 화가 스타일 프롬프트 작성 (gpt-4o-mini)
    # -------------------------------------------------------------
    base64_img = pil_to_base64(sketch_image)

    # 손그림을 전문가급 예술 작품 프롬프트로 재해석하도록 유도하는 지시문
    system_instruction = (
        "당신은 손그림을 바탕으로 세계적인 화가의 걸작을 기획하는 아트 디렉터입니다. "
        "사용자가 제공한 단순한 스케치/손그림의 구도, 오브젝트, 배치를 분석한 뒤, "
        "이를 아름답고 웅장한 회화 스타일의 예술 작품(Oil painting or digital painting masterpiece)으로 "
        "재탄생시킬 수 있는 상세한 '영문 프롬프트(Image generation prompt)' 단 하나만 작성해 주세요. "
        "설명 없이 오직 영문 프롬프트만 출력하세요."
    )

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": system_instruction},
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{base64_img}"
                        },
                    },
                ],
            }
        ],
    )

    # gpt-4o-mini가 만들어낸 프롬프트 추출
    generated_prompt = response.choices[0].message.content.strip()

    # -------------------------------------------------------------
    # 1-2. Text-to-Image: 프롬프트를 넘겨받아 최종 이미지 생성 (gpt-image-1-mini)
    # -------------------------------------------------------------
    result = client.images.generate(
        model="gpt-image-1-mini",
        prompt=generated_prompt,
        size="1024x1024",
    )

    # 결과 이미지 추출 (Base64 또는 URL 대응)
    image_data = result.data[0]
    output_image = None

    if hasattr(image_data, "b64_json") and image_data.b64_json:
        image_bytes = base64.b64decode(image_data.b64_json)
        output_image = Image.open(io.BytesIO(image_bytes))
    elif hasattr(image_data, "url") and image_data.url:
        with urllib.request.urlopen(image_data.url) as url_resp:
            output_image = Image.open(io.BytesIO(url_resp.read()))

    return output_image, generated_prompt


# -----------------------------------------------------------------
# 2. Gradio GUI 화면 구성
# -----------------------------------------------------------------
with gr.Blocks(title="그림판 Artist") as demo:
    gr.Markdown("# 🎨 그림판 Artist\n그림판에 간단한 스케치를 그리거나 올리면, AI가 멋진 화가의 작품으로 바꿔줍니다.")

    with gr.Row():
        # 왼쪽 컬럼: 스케치 그리기 / 업로드
        with gr.Column():
            # Gradio에서 캔버스에 직접 그리거나 그림판 이미지를 붙여넣을 수 있는 컴포넌트
            input_sketch = gr.Image(
                type="pil",
                label="스케치를 그리거나 업로드하세요",
                height=400,
            )
            submit_btn = gr.Button("화가의 작품으로 변환하기 🪄", variant="primary")

        # 오른쪽 컬럼: 변환된 예술 작품 및 작성된 프롬프트 표시
        with gr.Column():
            output_artwork = gr.Image(type="pil", label="AI 화가의 완성작", height=400)
            prompt_box = gr.Textbox(label="AI가 추출한 화가 프롬프트", lines=3)

    # 버튼 클릭 시 함수 실행
    submit_btn.click(
        fn=generate_artist_painting,
        inputs=input_sketch,
        outputs=[output_artwork, prompt_box],
    )

demo.launch()
```

<a name="notion-heading-415d9e129df7807f9184db067e17bb23"></a>

## 코드 : 그림판에 그린 손그림을 이미지로 출력 (GPT-5.6 Luna)

[![코드 : 그림판에 그린 손그림을 이미지로 출력 (GPT-5.6 Luna)](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/11_%EC%BD%94%EB%93%9C-%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EA%B7%B8%EB%A6%B0-%EC%86%90%EA%B7%B8%EB%A6%BC%EC%9D%84-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%EC%B6%9C%EB%A0%A5-GPT-56.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/11_%EC%BD%94%EB%93%9C-%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EA%B7%B8%EB%A6%B0-%EC%86%90%EA%B7%B8%EB%A6%BC%EC%9D%84-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%EC%B6%9C%EB%A0%A5-GPT-56.png)

[![코드 : 그림판에 그린 손그림을 이미지로 출력 (GPT-5.6 Luna)](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/12_%EC%BD%94%EB%93%9C-%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EA%B7%B8%EB%A6%B0-%EC%86%90%EA%B7%B8%EB%A6%BC%EC%9D%84-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%EC%B6%9C%EB%A0%A5-GPT-56.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/12_%EC%BD%94%EB%93%9C-%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EA%B7%B8%EB%A6%B0-%EC%86%90%EA%B7%B8%EB%A6%BC%EC%9D%84-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%EC%B6%9C%EB%A0%A5-GPT-56.png)

[![코드 : 그림판에 그린 손그림을 이미지로 출력 (GPT-5.6 Luna)](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/13_%EC%BD%94%EB%93%9C-%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EA%B7%B8%EB%A6%B0-%EC%86%90%EA%B7%B8%EB%A6%BC%EC%9D%84-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%EC%B6%9C%EB%A0%A5-GPT-56.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/13_%EC%BD%94%EB%93%9C-%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EA%B7%B8%EB%A6%B0-%EC%86%90%EA%B7%B8%EB%A6%BC%EC%9D%84-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%EC%B6%9C%EB%A0%A5-GPT-56.png)

<a name="notion-heading-415d9e129df7803fa021dbb78d5535ea"></a>

### 번외 : 그림판에 그린 손그림을 프롬프트와 이미지로 출력

[![번외 : 그림판에 그린 손그림을 프롬프트와 이미지로 출력](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/14_%EB%B2%88%EC%99%B8-%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EA%B7%B8%EB%A6%B0-%EC%86%90%EA%B7%B8%EB%A6%BC%EC%9D%84-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EC%99%80-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%EC%B6%9C%EB%A0%A5.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/14_%EB%B2%88%EC%99%B8-%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EA%B7%B8%EB%A6%B0-%EC%86%90%EA%B7%B8%EB%A6%BC%EC%9D%84-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EC%99%80-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%EC%B6%9C%EB%A0%A5.png)

[![번외 : 그림판에 그린 손그림을 프롬프트와 이미지로 출력](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/15_%EB%B2%88%EC%99%B8-%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EA%B7%B8%EB%A6%B0-%EC%86%90%EA%B7%B8%EB%A6%BC%EC%9D%84-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EC%99%80-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%EC%B6%9C%EB%A0%A5.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/15_%EB%B2%88%EC%99%B8-%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EA%B7%B8%EB%A6%B0-%EC%86%90%EA%B7%B8%EB%A6%BC%EC%9D%84-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EC%99%80-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%EC%B6%9C%EB%A0%A5.png)

[![번외 : 그림판에 그린 손그림을 프롬프트와 이미지로 출력](./2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/16_%EB%B2%88%EC%99%B8-%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EA%B7%B8%EB%A6%B0-%EC%86%90%EA%B7%B8%EB%A6%BC%EC%9D%84-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EC%99%80-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%EC%B6%9C%EB%A0%A5.png)](https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-11_LLM_Multimodal_2%EC%9D%BC%EC%B0%A8_%28D%2B23%29_assets/16_%EB%B2%88%EC%99%B8-%EA%B7%B8%EB%A6%BC%ED%8C%90%EC%97%90-%EA%B7%B8%EB%A6%B0-%EC%86%90%EA%B7%B8%EB%A6%BC%EC%9D%84-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EC%99%80-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C-%EC%B6%9C%EB%A0%A5.png)
