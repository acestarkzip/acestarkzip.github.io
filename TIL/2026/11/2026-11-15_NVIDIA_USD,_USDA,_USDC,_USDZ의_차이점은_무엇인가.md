<!-- notion-to-github-managed -->
<!-- notion-page-id: 419d9e129df78035a681c929e6b93ab9 -->
<!-- notion-last-edited-time: 2026-11-22T03:16:00.000Z -->

# NVIDIA USD, USDA, USDC, USDZ의 차이점은 무엇인가?

> - **날짜 :** 2026-11-15
> - **간단메모 :** 메모 | NVIDIA 기초 EP.02
> - **원본 노션 :** [바로가기 링크](https://app.notion.com/p/NVIDIA-USD-USDA-USDC-USDZ-419d9e129df78035a681c929e6b93ab9)

---

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/01_NVIDIA-USD-USDA-USDC-USDZ%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90.png"><img src="./2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/01_NVIDIA-USD-USDA-USDC-USDZ%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90.png" alt="NVIDIA USD, USDA, USDC, USDZ의 차이점은 무엇인가?" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

• Youtube : <a href="https://www.youtube.com/@sssrobotics"><u>https://www.youtube.com/@sssrobotics</u></a>

<div class="notion-callout" style="box-sizing:border-box;display:block;width:100%;max-width:100%;margin:1.1rem 0;padding:1rem 1.25rem;background:rgba(255,255,255,.075);border:1px solid rgba(255,255,255,.12);border-left:4px solid #76b900;border-radius:10px;color:inherit;line-height:1.55;"><div class="notion-callout-layout" style="display:flex;align-items:flex-start;gap:.65rem;width:100%;min-width:0;"><span aria-hidden="true" style="flex:0 0 auto;line-height:1.55;">📌</span><div class="notion-callout-content" style="box-sizing:border-box;flex:1 1 auto;min-width:0;width:100%;"><strong>안녕하세요, ‘S급 로봇 연구소’ 입니다.<br>
오늘의 주제는 [   NVIDIA USD, USDA, USDC, USDZ의 차이점은 무엇인가?   ] 입니다.</strong><p style="margin:.35rem 0 .75rem;line-height:1.55;"><strong><br>
</strong><span style="background-color:rgba(68,131,97,.25);border-radius:3px;padding:0 .15em;-webkit-box-decoration-break:clone;box-decoration-break:clone"><strong>오늘의 핵심 세 가지</strong></span><strong> :</strong></p>
<ol style="list-style-position:outside;margin:.5rem 0 .75rem;padding-left:1.5rem;"><li style="margin:.30rem 0;line-height:1.5;"><strong>USD</strong> : 3D 장면과 데이터를 표현하고 관리하는 기본 기술입니다.</li><li style="margin:.30rem 0;line-height:1.5;"><strong>USDA / USDC</strong> : USD 데이터를 저장하는 두 가지 방식으로, 하나는 텍스트이고 다른 하나는 바이너리입니다.</li><li style="margin:.30rem 0;line-height:1.5;"><strong>USDZ</strong> : 3D 모델과 텍스처 등의 관련 파일을 하나로 묶어 전달하는 패키지 형식입니다.</li></ol>
</div></div></div>

---

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/02_NVIDIA-USD-USDA-USDC-USDZ%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90.png"><img src="./2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/02_NVIDIA-USD-USDA-USDC-USDZ%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90.png" alt="NVIDIA USD, USDA, USDC, USDZ의 차이점은 무엇인가?" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-419d9e129df78027b503f253253da711"></a>

# 📚 목차 (Contents)

- [📚 목차 (Contents)](#notion-heading-419d9e129df78027b503f253253da711)
- [📖 오늘의 진행 내용 (Today's Topics)](#notion-heading-419d9e129df780d9970add42d0606752)
    - [📕 1. USD란 무엇인가?](#notion-heading-419d9e129df780b49123ca8bb6b6f379)
        - [📄 1-1. USD의 기본 개념](#notion-heading-419d9e129df7809eb96adbfd2179db04)
            - [✏️ 1-1-1. USD가 중요한 이유](#notion-heading-419d9e129df7807c844df27191ffe6a8)
    - [📕 2. USDA란 무엇인가?](#notion-heading-419d9e129df78005b581e432079a7490)
        - [📄 2-1. 사람이 읽을 수 있는 텍스트 형식](#notion-heading-419d9e129df7809a92e8e91985e0648e)
            - [✏️ 2-1-1. USDA의 특징](#notion-heading-419d9e129df7809b82c5c90e5e19f0d2)
    - [📕 3. USDC란 무엇인가?](#notion-heading-419d9e129df7809bbf97f57781b63263)
        - [📄 3-1. 컴퓨터가 효율적으로 읽는 바이너리 형식](#notion-heading-419d9e129df7809fbff3eeb5d1fce8f1)
            - [✏️ 3-1-1. USDC의 특징](#notion-heading-419d9e129df7802285def0f4011bddcc)
    - [📕 4. USDZ란 무엇인가?](#notion-heading-419d9e129df780989675f16a28a64ef9)
        - [📄 4-1. 여러 3D 파일을 하나로 묶는 패키지 형식](#notion-heading-419d9e129df7802f90f8f1345c4708fc)
            - [✏️ 4-1-1. USDZ의 특징](#notion-heading-419d9e129df7803f8c64ee92dc6c3d54)
    - [📕 5. USD, USDA, USDC, USDZ 차이점 비교](#notion-heading-419d9e129df78042a787c63549598662)
        - [📄 5-1. 한눈에 비교하기](#notion-heading-419d9e129df780919e8be14d911f9cb9)
            - [✏️ 5-1-1. 어떤 형식을 선택해야 할까?](#notion-heading-419d9e129df780e6bd4bc069b6beff51)
    - [📕 6. NVIDIA Isaac Sim에서는 어떻게 활용할까?](#notion-heading-419d9e129df7807d8830ce5f530ed6be)
        - [📄 6-1. 로봇 시뮬레이션과 USD](#notion-heading-419d9e129df78061873dc0d895f9b864)
            - [✏️ 6-1-1. 실제 활용 예시](#notion-heading-419d9e129df780a9a5f9c95a1fcb6eeb)
- [📜 회고 및 다음 과제 (Retrospective & Next Steps)](#notion-heading-419d9e129df78084ab36cad56b651c6b)
        - [📝 오늘 배운 내용 정리](#notion-heading-419d9e129df780da9856dd5f4aa84b66)
        - [🎯 다음 과제](#notion-heading-419d9e129df780b4b032e4ac93712d69)
- [👥 참고 문헌 (References)](#notion-heading-419d9e129df7802396efc6da4d7cee54)
- [📨 문의하기 (Contact us)](#notion-heading-419d9e129df780bfb551f523b42b8d5a)

---

<a name="notion-heading-419d9e129df780d9970add42d0606752"></a>

# 📖 오늘의 진행 내용 (Today's Topics)

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/03_%EC%98%A4%EB%8A%98%EC%9D%98-%EC%A7%84%ED%96%89-%EB%82%B4%EC%9A%A9-Todays-Topics.png"><img src="./2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/03_%EC%98%A4%EB%8A%98%EC%9D%98-%EC%A7%84%ED%96%89-%EB%82%B4%EC%9A%A9-Todays-Topics.png" alt="📖 오늘의 진행 내용 (Today&#x27;s Topics)" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-419d9e129df780b49123ca8bb6b6f379"></a>

## 📕 1. USD란 무엇인가?

<a name="notion-heading-419d9e129df7809eb96adbfd2179db04"></a>

### 📄 1-1. USD의 기본 개념

<strong>USD (Universal Scene Description)</strong> 는 3D 장면과 데이터를 표현하고 관리하기 위한 기술입니다.

쉽게 말하면, 3D 세상을 구성하는 여러 가지 정보를 하나의 구조로 관리할 수 있도록 도와주는 기술입니다.

예를 들어 로봇이 있는 가상 공간을 만든다고 가정해 보겠습니다.

- 로봇의 모양과 크기
- 바닥과 벽의 위치
- 카메라와 조명
- 로봇의 움직임
- 각 물체의 재질과 색상

이러한 정보를 USD를 통해 하나의 3D 장면으로 구성하고 관리할 수 있습니다.

<a name="notion-heading-419d9e129df7807c844df27191ffe6a8"></a>

#### ✏️ 1-1-1. USD가 중요한 이유

기존에는 3D 모델이나 장면을 여러 파일로 나누어 관리해야 하는 경우가 많았습니다.

하지만 USD를 사용하면 여러 데이터를 연결하고 조합하여 하나의 장면으로 관리할 수 있습니다.

특히 여러 개발자가 같은 3D 프로젝트를 함께 작업하거나, 복잡한 시뮬레이션 환경을 구성할 때 유용합니다.

<strong>핵심:</strong> USD는 단순한 3D 파일이 아니라 3D 데이터를 구성하고 연결하는 시스템입니다.

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/04_1-1-1-USD%EA%B0%80-%EC%A4%91%EC%9A%94%ED%95%9C-%EC%9D%B4%EC%9C%A0.png"><img src="./2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/04_1-1-1-USD%EA%B0%80-%EC%A4%91%EC%9A%94%ED%95%9C-%EC%9D%B4%EC%9C%A0.png" alt="✏️ 1-1-1. USD가 중요한 이유" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-419d9e129df78005b581e432079a7490"></a>

## 📕 2. USDA란 무엇인가?

<a name="notion-heading-419d9e129df7809a92e8e91985e0648e"></a>

### 📄 2-1. 사람이 읽을 수 있는 텍스트 형식

<strong>USDA (Universal Scene Description ASCII)</strong> 는 USD 데이터를 일반 텍스트 형태로 저장하는 방식입니다.

쉽게 말하면 메모장이나 VS Code로 파일을 열었을 때 내부 내용을 직접 읽을 수 있는 형식입니다.

예를 들어 다음과 같은 내용을 확인할 수 있습니다.

```python
#usda 1.0

def Xform "Robot"
{
    def Cube "Body"
    {
        double size = 2
    }
}
```

위 코드는 Robot이라는 그룹 안에 Body라는 큐브를 만드는 간단한 USD 표현입니다.

<a name="notion-heading-419d9e129df7809b82c5c90e5e19f0d2"></a>

#### ✏️ 2-1-1. USDA의 특징

- 사람이 직접 내용을 읽고 수정할 수 있습니다.
- 데이터 구조를 확인하거나 오류를 분석하기 좋습니다.
- GitHub와 같은 버전 관리 도구에서 변경 사항을 비교하기 쉽습니다.
- 데이터가 많아지면 파일 크기가 커지고 읽는 속도가 느려질 수 있습니다.

<strong>핵심:</strong> USDA는 사람이 읽고 수정하기 편리한 텍스트 형식입니다.

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/05_2-1-1-USDA%EC%9D%98-%ED%8A%B9%EC%A7%95.png"><img src="./2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/05_2-1-1-USDA%EC%9D%98-%ED%8A%B9%EC%A7%95.png" alt="✏️ 2-1-1. USDA의 특징" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-419d9e129df7809bbf97f57781b63263"></a>

## 📕 3. USDC란 무엇인가?

<a name="notion-heading-419d9e129df7809fbff3eeb5d1fce8f1"></a>

### 📄 3-1. 컴퓨터가 효율적으로 읽는 바이너리 형식

<strong>USDC (Universal Scene Description Crate)</strong> 는 USD 데이터를 바이너리 형태로 저장하는 방식입니다.

쉽게 말하면 사람이 직접 읽기 어려운 대신 컴퓨터가 효율적으로 데이터를 읽고 처리할 수 있도록 만든 형식입니다.

<a name="notion-heading-419d9e129df7802285def0f4011bddcc"></a>

#### ✏️ 3-1-1. USDC의 특징

- USDA보다 일반적으로 파일 크기가 작습니다.
- 대용량 3D 데이터 처리에 효율적입니다.
- 데이터를 빠르게 읽을 수 있도록 설계되었습니다.
- 사람이 직접 내용을 수정하거나 확인하기는 어렵습니다.

예를 들어 복잡한 로봇 모델이나 대규모 시뮬레이션 환경을 관리할 때 유용합니다.

<strong>핵심:</strong> USDC는 대용량 3D 데이터를 효율적으로 저장하고 읽기 위한 바이너리 형식입니다.

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/06_3-1-1-USDC%EC%9D%98-%ED%8A%B9%EC%A7%95.png"><img src="./2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/06_3-1-1-USDC%EC%9D%98-%ED%8A%B9%EC%A7%95.png" alt="✏️ 3-1-1. USDC의 특징" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-419d9e129df780989675f16a28a64ef9"></a>

## 📕 4. USDZ란 무엇인가?

<a name="notion-heading-419d9e129df7802f90f8f1345c4708fc"></a>

### 📄 4-1. 여러 3D 파일을 하나로 묶는 패키지 형식

<strong>USDZ (Universal Scene Description Zip)</strong> 는 USD 파일과 관련된 여러 리소스를 하나의 패키지로 묶는 형식입니다.

쉽게 말하면 3D 모델을 다른 사람에게 전달할 때 필요한 파일들을 하나의 상자에 담는 것과 같습니다.

예를 들어 로봇 3D 모델을 다른 컴퓨터로 전달한다고 가정해 보겠습니다.

필요한 파일은 다음과 같습니다.

- 로봇의 3D 모델
- 표면의 색상과 재질
- 이미지 텍스처
- 기타 관련 리소스

이러한 파일들을 USDZ 패키지 하나로 묶어 전달할 수 있습니다.

<a name="notion-heading-419d9e129df7803f8c64ee92dc6c3d54"></a>

#### ✏️ 4-1-1. USDZ의 특징

- 여러 관련 리소스를 하나의 파일로 묶을 수 있습니다.
- 별도의 파일을 하나씩 전달할 필요가 줄어듭니다.
- 3D 콘텐츠 배포와 공유에 유용합니다.
- 일반적인 USD 작업 파일처럼 내부 데이터를 직접 편집하는 용도로는 적합하지 않습니다.

<strong>핵심:</strong> USDZ는 3D 콘텐츠를 하나로 묶어 전달하기 위한 패키지 형식입니다.

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/07_4-1-1-USDZ%EC%9D%98-%ED%8A%B9%EC%A7%95.png"><img src="./2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/07_4-1-1-USDZ%EC%9D%98-%ED%8A%B9%EC%A7%95.png" alt="✏️ 4-1-1. USDZ의 특징" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-419d9e129df78042a787c63549598662"></a>

## 📕 5. USD, USDA, USDC, USDZ 차이점 비교

<a name="notion-heading-419d9e129df780919e8be14d911f9cb9"></a>

### 📄 5-1. 한눈에 비교하기

| 구분 | 저장 방식 | 주요 특징 | 주요 용도 |
| --- | --- | --- | --- |
| USD | 텍스트 또는 바이너리 | 기본 확장자 | 3D 데이터 관리 |
| USDA | 텍스트 | 사람이 읽기 쉬움 | 학습 및 디버깅 |
| USDC | 바이너리 | 효율적인 데이터 처리 | 대용량 데이터 |
| USDZ | 패키지 | 여러 파일을 하나로 묶음 | 배포 및 공유 |

<a name="notion-heading-419d9e129df780e6bd4bc069b6beff51"></a>

#### ✏️ 5-1-1. 어떤 형식을 선택해야 할까?

상황에 따라 적절한 형식을 선택하면 됩니다.

- <strong>USD:</strong> 일반적인 USD 작업 및 데이터 관리
- <strong>USDA:</strong> 내부 구조를 직접 확인하거나 수정할 때
- <strong>USDC:</strong> 복잡하고 많은 3D 데이터를 효율적으로 관리할 때
- <strong>USDZ:</strong> 완성된 3D 콘텐츠를 다른 사람에게 전달할 때

※ 참고로 `.usd` 확장자는 텍스트 형식과 바이너리 형식 모두 사용할 수 있습니다. 따라서 확장자만 보고 내부 저장 방식을 판단하면 안 됩니다.

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/08_5-1-1-%EC%96%B4%EB%96%A4-%ED%98%95%EC%8B%9D%EC%9D%84-%EC%84%A0%ED%83%9D%ED%95%B4%EC%95%BC-%ED%95%A0%EA%B9%8C.png"><img src="./2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/08_5-1-1-%EC%96%B4%EB%96%A4-%ED%98%95%EC%8B%9D%EC%9D%84-%EC%84%A0%ED%83%9D%ED%95%B4%EC%95%BC-%ED%95%A0%EA%B9%8C.png" alt="✏️ 5-1-1. 어떤 형식을 선택해야 할까?" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-419d9e129df7807d8830ce5f530ed6be"></a>

## 📕 6. NVIDIA Isaac Sim에서는 어떻게 활용할까?

<a name="notion-heading-419d9e129df78061873dc0d895f9b864"></a>

### 📄 6-1. 로봇 시뮬레이션과 USD

<strong>NVIDIA Isaac Sim</strong> 은 OpenUSD를 기반으로 로봇과 가상 환경을 구성하고 시뮬레이션할 수 있는 플랫폼입니다.

예를 들어 가상 공간에 로봇을 배치하고 주변 환경을 구성할 때 USD 데이터를 활용할 수 있습니다.

<a name="notion-heading-419d9e129df780a9a5f9c95a1fcb6eeb"></a>

#### ✏️ 6-1-1. 실제 활용 예시

1. USDA를 사용하여 간단한 로봇 구조와 장면을 확인합니다.
1. USDC를 활용하여 복잡한 3D 데이터를 효율적으로 관리합니다.
1. USD를 통해 로봇, 카메라, 조명, 환경 데이터를 구성합니다.
1. USDZ를 활용하여 필요한 3D 콘텐츠를 패키징하고 전달합니다.

이러한 방식으로 OpenUSD는 로봇 시뮬레이션과 디지털 트윈 환경을 구성하는 데 중요한 역할을 합니다.

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/09_6-1-1-%EC%8B%A4%EC%A0%9C-%ED%99%9C%EC%9A%A9-%EC%98%88%EC%8B%9C.png"><img src="./2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/09_6-1-1-%EC%8B%A4%EC%A0%9C-%ED%99%9C%EC%9A%A9-%EC%98%88%EC%8B%9C.png" alt="✏️ 6-1-1. 실제 활용 예시" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-419d9e129df78084ab36cad56b651c6b"></a>

# 📜 회고 및 다음 과제 (Retrospective & Next Steps)

---

<a name="notion-heading-419d9e129df780da9856dd5f4aa84b66"></a>

### 📝 오늘 배운 내용 정리

오늘은 NVIDIA Omniverse와 Isaac Sim에서 활용되는 OpenUSD의 주요 파일 형식 네 가지를 살펴보았습니다.

처음에는 확장자만 달라 보일 수 있지만, 각각 저장 방식과 활용 목적에 차이가 있다는 것을 알 수 있었습니다.

특히 USDA는 사람이 읽기 편하고, USDC는 컴퓨터가 효율적으로 처리하기 좋으며, USDZ는 여러 리소스를 하나로 묶어 전달하는 데 유용하다는 점이 중요합니다.

<a name="notion-heading-419d9e129df780b4b032e4ac93712d69"></a>

### 🎯 다음 과제

- [ ] USDA 파일을 VS Code로 열어 내부 구조 확인하기
- [ ] USDA와 USDC 파일의 차이 직접 비교하기
- [ ] Isaac Sim에서 USD 파일 불러오기
- [ ] 간단한 로봇 모델을 USD 형식으로 저장해 보기

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/10_%EB%8B%A4%EC%9D%8C-%EA%B3%BC%EC%A0%9C.png"><img src="./2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/10_%EB%8B%A4%EC%9D%8C-%EA%B3%BC%EC%A0%9C.png" alt="🎯 다음 과제" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-419d9e129df7802396efc6da4d7cee54"></a>

# 👥 참고 문헌 (References)

---

1. NVIDIA Learn OpenUSD - OpenUSD File Formats
    [https://docs.nvidia.com/learn-openusd/latest/stage-setting/usd-file-formats.html](https://docs.nvidia.com/learn-openusd/latest/stage-setting/usd-file-formats.html)

1. OpenUSD Official Documentation - Frequently Asked Questions
    [https://openusd.org/release/usdfaq.html](https://openusd.org/release/usdfaq.html)

1. NVIDIA Omniverse - OpenUSD Frequently Asked Questions
    [https://docs.omniverse.nvidia.com/usd/latest/learn-openusd/faq.html](https://docs.omniverse.nvidia.com/usd/latest/learn-openusd/faq.html)

1. NVIDIA Omniverse - Learn OpenUSD YouTube
    [https://www.youtube.com/watch?v=Cbx4EkjPe2A](https://www.youtube.com/watch?v=Cbx4EkjPe2A)

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>


<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/11_%EC%B0%B8%EA%B3%A0-%EB%AC%B8%ED%97%8C-References.png"><img src="./2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/11_%EC%B0%B8%EA%B3%A0-%EB%AC%B8%ED%97%8C-References.png" alt="👥 참고 문헌 (References)" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-419d9e129df780bfb551f523b42b8d5a"></a>

# 📨 문의하기 (Contact us)

---

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/12_%EB%AC%B8%EC%9D%98%ED%95%98%EA%B8%B0-Contact-us.png"><img src="./2026-11-15_NVIDIA_USD%2C_USDA%2C_USDC%2C_USDZ%EC%9D%98_%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/12_%EB%AC%B8%EC%9D%98%ED%95%98%EA%B8%B0-Contact-us.png" alt="📨 문의하기 (Contact us)" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<blockquote class="notion-quote" style="box-sizing:border-box;width:100%;max-width:100%;margin:1rem 0 1.25rem;padding:.35rem 0 .35rem 1rem;border-left:3px solid rgba(220,220,220,.72);color:inherit;"><ul style="list-style-position:outside;margin:.5rem 0 .75rem;padding-left:1.5rem;"><li style="margin:.30rem 0;line-height:1.5;">Youtube : <a href="https://www.youtube.com/@sssrobotics">https://www.youtube.com/@sssrobotics</a></li><li style="margin:.30rem 0;line-height:1.5;">Blog : <a href="https://www.sssrobotics.com/">https://www.sssrobotics.com</a></li></ul>
</blockquote>

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

#S급로봇연구소 #로봇연구소 #sssrobotics #sss #OpenUSD #NVIDIA #IsaacSim #Omniverse #Robotics #PhysicalAI #피지컬AI #로봇 #시뮬레이션 #AI #AX #robot #simulation #엔비디아

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>
