<!-- notion-to-github-managed -->
<!-- notion-page-id: 419d9e129df780b9ba8dfb888755bacf -->
<!-- notion-last-edited-time: 2026-11-18T05:47:00.000Z -->

# NVIDIA OpenUSD 는 무엇인가?

> - **날짜 :** 2026-11-15
> - **간단메모 :** 메모 | NVIDIA 기초 EP.01
> - **원본 노션 :** [바로가기 링크](https://app.notion.com/p/NVIDIA-OpenUSD-419d9e129df780b9ba8dfb888755bacf)

---

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_OpenUSD_%EB%8A%94_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/01_NVIDIA-OpenUSD-%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80.png"><img src="./2026-11-15_NVIDIA_OpenUSD_%EB%8A%94_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/01_NVIDIA-OpenUSD-%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80.png" alt="NVIDIA OpenUSD 는 무엇인가?" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

• Youtube : <a href="https://www.youtube.com/@sssrobotics"><u>https://www.youtube.com/@sssrobotics</u></a>

<div class="notion-callout" style="box-sizing:border-box;display:block;width:100%;max-width:100%;margin:1.1rem 0;padding:1rem 1.25rem;background:rgba(255,255,255,.075);border:1px solid rgba(255,255,255,.12);border-left:4px solid #76b900;border-radius:10px;color:inherit;line-height:1.55;"><div class="notion-callout-layout" style="display:flex;align-items:flex-start;gap:.65rem;width:100%;min-width:0;"><span aria-hidden="true" style="flex:0 0 auto;line-height:1.55;">📌</span><div class="notion-callout-content" style="box-sizing:border-box;flex:1 1 auto;min-width:0;width:100%;"><span style="background-color:rgba(160,160,155,.20);border-radius:3px;padding:0 .15em;-webkit-box-decoration-break:clone;box-decoration-break:clone"><strong>안녕하세요, ‘S급 로봇 연구소’ 입니다.<br>
오늘의 기술 블로그 주제는 [   </strong></span><span style="background-color:rgba(160,160,155,.20);border-radius:3px;padding:0 .15em;-webkit-box-decoration-break:clone;box-decoration-break:clone">NVIDIA OpenUSD 는 무엇인가?</span><span style="background-color:rgba(160,160,155,.20);border-radius:3px;padding:0 .15em;-webkit-box-decoration-break:clone;box-decoration-break:clone"><strong>   ] 입니다</strong></span><div class="notion-spacer" aria-hidden="true" style="display:block;width:100%;height:1.5rem;min-height:1.5rem;"></div>
<p style="margin:.35rem 0 .75rem;line-height:1.55;"><span style="background-color:rgba(68,131,97,.25);border-radius:3px;padding:0 .15em;-webkit-box-decoration-break:clone;box-decoration-break:clone"><strong>오늘의 핵심 세 가지</strong></span><strong> :</strong></p>
<ol style="list-style-position:outside;margin:.5rem 0 .75rem;padding-left:1.5rem;"><li style="margin:.30rem 0;line-height:1.5;">OpenUSD가 무엇인지 이해하기</li><li style="margin:.30rem 0;line-height:1.5;">OpenUSD의 주요 특징 알아보기</li><li style="margin:.30rem 0;line-height:1.5;">NVIDIA Omniverse와 Isaac Sim에서 어떻게 활용되는지 알아보기</li></ol>
</div></div></div>

---

<a name="notion-heading-419d9e129df780639c94ed4daf7b1573"></a>

# 📚 목차 (Today's Topics)

- [📚 목차 (Today's Topics)](#notion-heading-419d9e129df780639c94ed4daf7b1573)
- [📖 오늘의 진행 내용﻿ (Today's Topics)﻿](#notion-heading-419d9e129df780e3b26ada7a3c1357d0)
    - [📕 1. NVIDIA OpenUSD란 무엇인가?](#notion-heading-419d9e129df7807db1bacce3d8f32425)
        - [📄 1-1. OpenUSD의 개념](#notion-heading-419d9e129df780c589bbd9a6de335386)
            - [✏️ 1-1-1. OpenUSD는 어디에서 시작되었을까?](#notion-heading-419d9e129df7801b99a3ec16bf52c48c)
    - [📕 2. OpenUSD는 어떻게 구성되어 있을까?](#notion-heading-419d9e129df7809e9f78f0826bc55b43)
        - [📄 2-1. Stage : 전체 가상환경](#notion-heading-419d9e129df780ed889ffb4fa08448b7)
        - [📄 2-2. Prim : 개별 객체](#notion-heading-419d9e129df7802fa27ddcb7e0c83b59)
        - [📄 2-3. Layer : 데이터 관리](#notion-heading-419d9e129df7808bb627e13c134cf320)
        - [📄 2-4. Composition : 데이터 조합](#notion-heading-419d9e129df7801aa7ecebf9c3441952)
            - [✏️ 2-4-1. 간단한 예시](#notion-heading-419d9e129df780fdbe6df370dd663dad)
    - [📕 3. USD 파일의 종류](#notion-heading-419d9e129df780ea8a86d6f0c8499f2c)
        - [📄 3-1. USD (.usd)](#notion-heading-419d9e129df780f99bd2f386a35811e0)
        - [📄 3-2. USDA (.usda)](#notion-heading-419d9e129df78041b7bfccc68c6ed84c)
        - [📄 3-3. USDC (.usdc)](#notion-heading-419d9e129df7804d82ceccf2e73f33da)
        - [📄 3-4. USDZ (.usdz)](#notion-heading-419d9e129df780e982f8d18aea9b9ef8)
            - [✏️ 3-4-1. 간단하게 비교하기](#notion-heading-419d9e129df780dca628f9210cbddf0c)
    - [📕 4. OpenUSD는 어디에 활용될까?](#notion-heading-419d9e129df78066b4bdde750487369c)
        - [📄 4-1. 영화 및 애니메이션](#notion-heading-419d9e129df780bfb63be939b6b21571)
        - [📄 4-2. 자동차 및 제조업](#notion-heading-419d9e129df78029bf19f159e4f0fd19)
        - [📄 4-3. 디지털 트윈](#notion-heading-419d9e129df780bbb0c9da24452fd8a6)
        - [📄 4-4. 로봇 시뮬레이션](#notion-heading-419d9e129df780b3b65ecc1fa29957d9)
    - [📕 5. NVIDIA와 로봇 시뮬레이션](#notion-heading-419d9e129df780e185b0f761b76b6000)
        - [📄 5-1. NVIDIA Omniverse](#notion-heading-419d9e129df780efac7beb3b025ada75)
        - [📄 5-2. NVIDIA Isaac Sim](#notion-heading-419d9e129df780c3aee2cbf0f1daa805)
            - [✏️ 5-2-1. OpenUSD와 Isaac Sim의 관계](#notion-heading-419d9e129df7806dac50c836aa095561)
- [📜 회고 및 다음 과제 (Retrospective & Next Steps)](#notion-heading-419d9e129df78010bd0fd147911296e0)
- [👥 참고 문헌 (References)](#notion-heading-419d9e129df780e1abddc77f7dc5b29b)
- [📨 문의하기 (Contact us)](#notion-heading-419d9e129df780a8b534dd8538e256ec)

---

<a name="notion-heading-419d9e129df780e3b26ada7a3c1357d0"></a>

# 📖 오늘의 진행 내용﻿ (Today's Topics)﻿

<a name="notion-heading-419d9e129df7807db1bacce3d8f32425"></a>

## 📕 1. NVIDIA OpenUSD란 무엇인가?

<a name="notion-heading-419d9e129df780c589bbd9a6de335386"></a>

### 📄 1-1. OpenUSD의 개념

OpenUSD(Universal Scene Description)는 다양한 3D 데이터를 하나의 구조로 관리하고 연결할 수 있도록 만든 기술입니다.

쉽게 말하면, 서로 다른 프로그램에서 만든 3D 모델과 가상환경을 하나로 연결해 주는 공통 언어라고 생각하면 됩니다.

예를 들어 로봇을 개발한다고 가정해 보겠습니다.

로봇의 몸체는 하나의 프로그램에서 만들고, 주변 환경은 다른 프로그램에서 만들 수 있습니다. 이때 OpenUSD를 활용하면 각각의 데이터를 하나의 가상환경으로 통합할 수 있습니다.

<a name="notion-heading-419d9e129df7801b99a3ec16bf52c48c"></a>

#### ✏️ 1-1-1. OpenUSD는 어디에서 시작되었을까?

OpenUSD는 원래 영화와 애니메이션 제작사인 Pixar에서 개발했습니다.

여러 작업자가 복잡한 3D 장면을 함께 제작하고 관리하기 위해 만들어졌으며, 2016년 오픈소스로 공개되었습니다.

이후 NVIDIA, Apple, Adobe 등 다양한 기업이 참여하면서 로봇, 자동차, 제조, 디지털 트윈 등 여러 산업으로 활용 범위가 넓어졌습니다.

<a name="notion-heading-419d9e129df7809e9f78f0826bc55b43"></a>

## 📕 2. OpenUSD는 어떻게 구성되어 있을까?

OpenUSD는 여러 3D 객체와 데이터를 조합하여 하나의 가상환경을 만듭니다.

대표적인 개념 네 가지를 알아보겠습니다.

<a name="notion-heading-419d9e129df780ed889ffb4fa08448b7"></a>

### 📄 2-1. Stage : 전체 가상환경

Stage는 3D 장면 전체를 의미합니다.

예를 들어 로봇 시뮬레이션 환경에는 로봇, 바닥, 벽, 카메라, 조명 등이 들어갑니다.

이 모든 요소를 포함하는 전체 공간이 Stage입니다.

<a name="notion-heading-419d9e129df7802fa27ddcb7e0c83b59"></a>

### 📄 2-2. Prim : 개별 객체

Prim은 Stage 안에 들어가는 개별 구성 요소입니다.

예를 들어 로봇, 카메라, 조명, 장애물 등이 각각 Prim이 될 수 있습니다.

즉, Stage가 전체 공간이라면 Prim은 그 공간을 구성하는 개별 객체입니다.

<a name="notion-heading-419d9e129df7808bb627e13c134cf320"></a>

### 📄 2-3. Layer : 데이터 관리

Layer는 3D 장면의 데이터를 나누어 관리하는 단위입니다.

예를 들어 로봇 모델과 주변 환경을 별도의 Layer로 관리할 수 있습니다.

이렇게 하면 원본 데이터를 유지하면서 필요한 부분만 수정할 수 있습니다.

<a name="notion-heading-419d9e129df7801aa7ecebf9c3441952"></a>

### 📄 2-4. Composition : 데이터 조합

Composition은 여러 데이터를 조합하여 하나의 완성된 장면을 만드는 방식입니다.

이미 만들어진 로봇 모델과 가상환경을 연결하거나, 기존 모델을 재사용할 때 활용할 수 있습니다.

<a name="notion-heading-419d9e129df780fdbe6df370dd663dad"></a>

#### ✏️ 2-4-1. 간단한 예시

로봇 시뮬레이션을 만든다고 가정해 보겠습니다.

- Stage : 로봇이 활동하는 전체 가상공간
- Prim : 로봇, 카메라, 장애물
- Layer : 로봇과 환경 데이터를 구분하여 관리
- Composition : 여러 데이터를 하나의 환경으로 통합

이 네 가지 개념을 이해하면 OpenUSD의 기본 구조를 파악하는 데 도움이 됩니다.

<a name="notion-heading-419d9e129df780ea8a86d6f0c8499f2c"></a>

## 📕 3. USD 파일의 종류

OpenUSD를 공부하다 보면 다양한 파일 확장자를 만나게 됩니다.

대표적으로 USD, USDA, USDC, USDZ가 있습니다.

<a name="notion-heading-419d9e129df780f99bd2f386a35811e0"></a>

### 📄 3-1. USD (.usd)

USD 데이터를 저장하는 일반적인 파일 확장자입니다.

내부적으로 텍스트 또는 바이너리 형식으로 저장될 수 있습니다.

<a name="notion-heading-419d9e129df78041b7bfccc68c6ed84c"></a>

### 📄 3-2. USDA (.usda)

텍스트 기반 파일입니다.

사람이 직접 내용을 읽을 수 있기 때문에 USD의 구조를 공부하거나 수정할 때 유용합니다.

<a name="notion-heading-419d9e129df7804d82ceccf2e73f33da"></a>

### 📄 3-3. USDC (.usdc)

바이너리 기반 파일입니다.

텍스트로 직접 읽기는 어렵지만 데이터를 효율적으로 저장하고 처리할 수 있습니다.

<a name="notion-heading-419d9e129df780e982f8d18aea9b9ef8"></a>

### 📄 3-4. USDZ (.usdz)

여러 USD 관련 데이터와 리소스를 하나로 묶은 패키지 형식입니다.

3D 콘텐츠를 다른 환경으로 전달하거나 배포할 때 활용할 수 있습니다.

<a name="notion-heading-419d9e129df780dca628f9210cbddf0c"></a>

#### ✏️ 3-4-1. 간단하게 비교하기

| 파일 형식 | 특징 |
| --- | --- |
| USD | 일반적인 USD 파일 |
| USDA | 사람이 읽을 수 있는 텍스트 형식 |
| USDC | 바이너리 저장 형식 |
| USDZ | 관련 데이터를 묶은 패키지 형식 |

<a name="notion-heading-419d9e129df78066b4bdde750487369c"></a>

## 📕 4. OpenUSD는 어디에 활용될까?

OpenUSD는 다양한 3D 데이터를 통합하고 관리할 수 있기 때문에 여러 산업에서 활용됩니다.

<a name="notion-heading-419d9e129df780bfb63be939b6b21571"></a>

### 📄 4-1. 영화 및 애니메이션

여러 작업자가 하나의 복잡한 3D 장면을 함께 제작하고 관리할 수 있습니다.

<a name="notion-heading-419d9e129df78029bf19f159e4f0fd19"></a>

### 📄 4-2. 자동차 및 제조업

자동차나 공장의 3D 모델을 구성하고 실제 환경과 유사한 가상공간을 만드는 데 활용할 수 있습니다.

<a name="notion-heading-419d9e129df780bbb0c9da24452fd8a6"></a>

### 📄 4-3. 디지털 트윈

실제 공장이나 시설을 가상공간에 구현하여 설비 배치, 운영 상황, 작업 환경 등을 확인할 수 있습니다.

<a name="notion-heading-419d9e129df780b3b65ecc1fa29957d9"></a>

### 📄 4-4. 로봇 시뮬레이션

로봇과 주변 환경을 가상공간에 구성하고, 실제 로봇을 제작하기 전에 다양한 상황을 테스트할 수 있습니다.

<a name="notion-heading-419d9e129df780e185b0f761b76b6000"></a>

## 📕 5. NVIDIA와 로봇 시뮬레이션

NVIDIA는 OpenUSD를 기반으로 다양한 3D 및 시뮬레이션 기술을 개발하고 있습니다.

대표적으로 Omniverse와 Isaac Sim이 있습니다.

<a name="notion-heading-419d9e129df780efac7beb3b025ada75"></a>

### 📄 5-1. NVIDIA Omniverse

Omniverse는 OpenUSD를 기반으로 다양한 3D 애플리케이션과 가상환경을 연결하는 플랫폼입니다.

여러 프로그램에서 만든 3D 데이터를 통합하고, 디지털 트윈이나 시뮬레이션 환경을 구축하는 데 활용됩니다.

<a name="notion-heading-419d9e129df780c3aee2cbf0f1daa805"></a>

### 📄 5-2. NVIDIA Isaac Sim

Isaac Sim은 로봇을 가상환경에서 테스트하고 개발할 수 있는 시뮬레이션 플랫폼입니다.

예를 들어 실제 모바일 로봇을 제작하기 전에 가상환경에서 다음과 같은 테스트를 진행할 수 있습니다.

- 로봇의 이동 및 주행 테스트
- 장애물 회피 테스트
- 카메라 및 LiDAR 센서 테스트
- 충돌 및 물리적 움직임 테스트

<a name="notion-heading-419d9e129df7806dac50c836aa095561"></a>

#### ✏️ 5-2-1. OpenUSD와 Isaac Sim의 관계

OpenUSD는 로봇과 주변 환경을 구성하는 데이터를 관리하는 기반 기술입니다.

Isaac Sim은 이러한 데이터를 활용하여 로봇이 가상환경에서 어떻게 움직이고 반응하는지 테스트할 수 있도록 지원합니다.

쉽게 정리하면 다음과 같습니다.

<strong>OpenUSD = 가상환경과 3D 데이터를 구성하는 기반</strong>

<strong>Isaac Sim = 구성된 가상환경에서 로봇을 시뮬레이션하는 도구</strong>

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

<a name="notion-heading-419d9e129df78010bd0fd147911296e0"></a>

# 📜 회고 및 다음 과제 (Retrospective & Next Steps)

---

이번 학습에서는 OpenUSD의 기본 개념과 활용 분야를 알아보았습니다.

OpenUSD는 단순한 3D 파일 형식이 아니라 다양한 3D 데이터를 통합하고 관리할 수 있는 기술이라는 점이 핵심입니다.

특히 NVIDIA Omniverse와 Isaac Sim에서 활용되는 만큼 로봇 시뮬레이션과 Physical AI를 공부하기 위해 알아야 할 중요한 기술 중 하나입니다.

<strong>다음 학습 과제</strong>

- [ ] OpenUSD 공식 문서 살펴보기
- [ ] USD와 USDA 파일 직접 확인하기
- [ ] Stage와 Prim 구조 이해하기
- [ ] Isaac Sim에서 간단한 3D 환경 구성하기

<strong>다음 기술 블로그 주제 :</strong>

NVIDIA USD, USDA, USDC, USDZ의 차이점은 무엇인가?

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

<a name="notion-heading-419d9e129df780e1abddc77f7dc5b29b"></a>

# 👥 참고 문헌 (References)

---

- NVIDIA Learn OpenUSD
    [https://docs.nvidia.com/learn-openusd/latest/](https://docs.nvidia.com/learn-openusd/latest/)

- NVIDIA Developer - OpenUSD
    [https://developer.nvidia.com/openusd](https://developer.nvidia.com/openusd)

- NVIDIA Isaac Sim Documentation
    [https://docs.isaacsim.omniverse.nvidia.com/latest/](https://docs.isaacsim.omniverse.nvidia.com/latest/)

- Pixar OpenUSD
    [https://openusd.org/](https://openusd.org/)

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>


<a name="notion-heading-419d9e129df780a8b534dd8538e256ec"></a>

# 📨 문의하기 (Contact us)

---

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-15_NVIDIA_OpenUSD_%EB%8A%94_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/02_%EB%AC%B8%EC%9D%98%ED%95%98%EA%B8%B0-Contact-us.png"><img src="./2026-11-15_NVIDIA_OpenUSD_%EB%8A%94_%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80_assets/02_%EB%AC%B8%EC%9D%98%ED%95%98%EA%B8%B0-Contact-us.png" alt="📨 문의하기 (Contact us)" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<blockquote class="notion-quote" style="box-sizing:border-box;width:100%;max-width:100%;margin:1rem 0 1.25rem;padding:.35rem 0 .35rem 1rem;border-left:3px solid rgba(220,220,220,.72);color:inherit;"><ul style="list-style-position:outside;margin:.5rem 0 .75rem;padding-left:1.5rem;"><li style="margin:.30rem 0;line-height:1.5;">Youtube : <a href="https://www.youtube.com/@sssrobotics">https://www.youtube.com/@sssrobotics</a></li><li style="margin:.30rem 0;line-height:1.5;">Blog : <a href="https://www.sssrobotics.com/">https://www.sssrobotics.com</a></li></ul>
</blockquote>

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

#S급로봇연구소 #로봇연구소 #sssrobotics #sss #OpenUSD #NVIDIA #IsaacSim #Omniverse #Robotics #PhysicalAI #로봇시뮬레이션 #robot #simulation #엔비디아

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>
