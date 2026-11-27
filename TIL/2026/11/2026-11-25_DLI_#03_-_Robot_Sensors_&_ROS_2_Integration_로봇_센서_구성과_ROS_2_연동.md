<!-- notion-to-github-managed -->
<!-- notion-page-id: 422d9e129df780f584bae0693319b79e -->
<!-- notion-last-edited-time: 2026-11-27T13:51:00.000Z -->

# DLI #03 - Robot Sensors & ROS 2 Integration | 로봇 센서 구성과 ROS 2 연동

> - **날짜 :** 2026-11-25
> - **간단메모 :** 로봇에 카메라와 LiDAR를 장착하고 ROS 2 및 RViz2를 연동하여 센서 데이터를 확인합니다.
> - **원본 노션 :** [바로가기 링크](https://app.notion.com/p/DLI-03-Robot-Sensors-ROS-2-Integration-ROS-2-422d9e129df780f584bae0693319b79e)

---

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/01_DLI-03-Robot-Sensors-ROS-2-Int.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/01_DLI-03-Robot-Sensors-ROS-2-Int.png" alt="DLI #03 - Robot Sensors &amp; ROS 2 Integration | 로봇 센서 구성과 ROS 2 연동" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<strong>• Youtube :</strong>
<a href="https://www.youtube.com/@sssrobotics"><u>https://www.youtube.com/@sssrobotics</u></a>

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/02_DLI-03-Robot-Sensors-ROS-2-Int.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/02_DLI-03-Robot-Sensors-ROS-2-Int.png" alt="DLI #03 - Robot Sensors &amp; ROS 2 Integration | 로봇 센서 구성과 ROS 2 연동" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<div class="notion-callout" style="box-sizing:border-box;display:block;width:100%;max-width:100%;margin:1.1rem 0;padding:1rem 1.25rem;background:rgba(255,255,255,.075);border:1px solid rgba(255,255,255,.12);border-left:4px solid #76b900;border-radius:10px;color:inherit;line-height:1.55;"><div class="notion-callout-layout" style="display:flex;align-items:flex-start;gap:.65rem;width:100%;min-width:0;"><span class="notion-callout-icon" aria-hidden="true">📌</span><div class="notion-callout-content" style="box-sizing:border-box;flex:1 1 auto;min-width:0;width:100%;"><strong>안녕하세요!<br>
S급 로봇 연구소(SSS Robotics)입니다. 🤖</strong><p style="margin:.35rem 0 .75rem;line-height:1.55;">오늘은 제작한 로봇에 RGB 카메라와 2D LiDAR 센서를 장착하고, 주변 환경을 인식하는 과정을 알아보겠습니다.</p>
<p style="margin:.35rem 0 .75rem;line-height:1.55;">또한 NVIDIA Isaac Sim의 ROS 2 Bridge와 OmniGraph를 활용하여 센서 데이터를 ROS 2 Topic으로 전달하고, RViz2에서 실제 데이터를 확인합니다.</p>
<p style="margin:.35rem 0 .75rem;line-height:1.55;">이를 통해 시뮬레이션 로봇이 단순히 움직이는 것을 넘어 주변 환경을 인식하고 외부 시스템과 데이터를 주고받는 구조를 이해합니다.</p>
</div></div></div>

---

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/03_DLI-03-Robot-Sensors-ROS-2-Int.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/03_DLI-03-Robot-Sensors-ROS-2-Int.png" alt="DLI #03 - Robot Sensors &amp; ROS 2 Integration | 로봇 센서 구성과 ROS 2 연동" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-423d9e129df780e88732efa6c6b65381"></a>

# 📚 목차 (Contents)

- [📚 목차 (Contents)](#notion-heading-423d9e129df780e88732efa6c6b65381)
- [📖 오늘의 진행 내용 (Today's Topics)](#notion-heading-423d9e129df780149eb0d5e62bc6b444)
    - [📕 1. 로봇 센서와 Sensor Mount 구성](#notion-heading-423d9e129df78033ba85c9a1f69f6c72)
        - [📄 1-1. 센서를 장착하는 이유](#notion-heading-423d9e129df78074acbde2587e554461)
        - [📄 1-2. Front_Sensor 구성](#notion-heading-423d9e129df7800ca2c0d579ef8a1299)
    - [📕 2. RGB Camera 장착 및 영상 확인](#notion-heading-423d9e129df7809ab47ed25ae066eb62)
        - [📄 2-1. RGB Camera란?](#notion-heading-423d9e129df78057aa5cec4a049280d8)
        - [📄 2-2. Robot_Camera 구성](#notion-heading-423d9e129df780988227f6cb2e2b1c09)
        - [📄 2-3. 카메라 화면 확인](#notion-heading-423d9e129df7800fbddffb071ca91e7e)
    - [📕 3. 2D LiDAR 장착 및 거리 측정](#notion-heading-423d9e129df780be9eeac8af5c6fbbd7)
        - [📄 3-1. LiDAR란?](#notion-heading-423d9e129df780b2b7a5f3e5281d1ab9)
        - [📄 3-2. PhysX LiDAR 구성](#notion-heading-423d9e129df780e5b85cceca87304d6a)
        - [📄 3-3. Collider와 장애물 인식](#notion-heading-423d9e129df78059a77bdb55c118557b)
    - [📕 4. ROS 2 통신 구조 이해](#notion-heading-423d9e129df780c8b5c5f52a6bdbb517)
        - [📄 4-1. ROS 2의 기본 용어](#notion-heading-423d9e129df780009d41e9cd8db21113)
        - [📄 4-2. ROS 2 Bridge](#notion-heading-423d9e129df780adad3fcb9228a8af9e)
    - [📕 5. OmniGraph를 활용한 센서 데이터 발행](#notion-heading-423d9e129df780c190b9ff4e4f061958)
        - [📄 5-1. LiDAR 데이터 발행](#notion-heading-423d9e129df780fc87f9d1f711207c40)
        - [📄 5-2. Camera 데이터 발행](#notion-heading-423d9e129df780cd8444d2de7fb533e3)
        - [📄 5-3. ROS 2 Topic 확인](#notion-heading-423d9e129df78045b518db12d9284e63)
    - [📕 6. RViz2를 활용한 센서 데이터 시각화](#notion-heading-423d9e129df780ef8bdec9889ca0d9de)
        - [📄 6-1. RViz2란?](#notion-heading-423d9e129df780cbbac1fdb6a6f68ff6)
        - [📄 6-2. LiDAR 데이터 확인](#notion-heading-423d9e129df78026b06af66cf9d0f55f)
        - [📄 6-3. Camera 영상 확인](#notion-heading-423d9e129df780a6a2c5da12fe7f4e67)
    - [📕 7. Isaac Sim 5.1 주요 설정 주의사항](#notion-heading-423d9e129df780038ed3e259c4c02b64)
- [📜 회고 및 다음 과제 (Retropective&Next Steps)](#notion-heading-423d9e129df78064809bd57172b30f8e)
- [👥 참고 문헌 (References)](#notion-heading-423d9e129df780e79b26f52b5531e519)
- [📨 문의하기 (Contact us)](#notion-heading-423d9e129df78009ae68e5188576f1bf)

---

<a name="notion-heading-423d9e129df780149eb0d5e62bc6b444"></a>

# 📖 오늘의 진행 내용 (Today's Topics)

<a name="notion-heading-423d9e129df78033ba85c9a1f69f6c72"></a>

## 📕 1. 로봇 센서와 Sensor Mount 구성

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/04_1-%EB%A1%9C%EB%B4%87-%EC%84%BC%EC%84%9C%EC%99%80-Sensor-Mount-%EA%B5%AC%EC%84%B1.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/04_1-%EB%A1%9C%EB%B4%87-%EC%84%BC%EC%84%9C%EC%99%80-Sensor-Mount-%EA%B5%AC%EC%84%B1.png" alt="📕 1. 로봇 센서와 Sensor Mount 구성" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-423d9e129df78074acbde2587e554461"></a>

### 📄 1-1. 센서를 장착하는 이유

로봇이 자율적으로 움직이려면 주변 환경을 인식할 수 있어야 합니다.

이를 위해 카메라와 LiDAR 등의 센서를 장착하여 주변 물체의 영상 및 거리 정보를 수집합니다.

<a name="notion-heading-423d9e129df7800ca2c0d579ef8a1299"></a>

### 📄 1-2. Front_Sensor 구성

SimpleRobot의 앞쪽에 Xform 객체를 생성하고 Front_Sensor라는 이름으로 구성합니다.

- Front_Sensor: 센서들을 묶는 공간입니다.
- Fixed Joint: 센서 구조물을 로봇 몸체에 고정합니다.
- Sensor_Mount: 카메라와 센서를 장착하는 구조물입니다.

센서는 로봇이 움직이더라도 일정한 위치와 방향을 유지하도록 구성합니다.

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/05_1-2-Front-Sensor-%EA%B5%AC%EC%84%B1.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/05_1-2-Front-Sensor-%EA%B5%AC%EC%84%B1.png" alt="📄 1-2. Front_Sensor 구성" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

---

<a name="notion-heading-423d9e129df7809ab47ed25ae066eb62"></a>

## 📕 2. RGB Camera 장착 및 영상 확인

<a name="notion-heading-423d9e129df78057aa5cec4a049280d8"></a>

### 📄 2-1. RGB Camera란?

RGB Camera는 주변 환경을 색상 정보가 포함된 영상으로 수집하는 센서입니다.

물체의 형태와 색상, 주변 환경을 시각적으로 확인하는 데 활용합니다.

<a name="notion-heading-423d9e129df780988227f6cb2e2b1c09"></a>

### 📄 2-2. Robot_Camera 구성

Sensor_Mount 아래에 Camera 객체를 생성하고 Robot_Camera라는 이름으로 지정합니다.

카메라의 위치와 회전값을 조정하여 로봇의 전방을 바라보도록 설정합니다.

<a name="notion-heading-423d9e129df7800fbddffb071ca91e7e"></a>

### 📄 2-3. 카메라 화면 확인

Isaac Sim의 Viewport를 활용하여 로봇 전체 장면과 카메라가 바라보는 화면을 비교합니다.

이를 통해 로봇의 실제 시점에서 장애물이 어떻게 보이는지 확인합니다.

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/06_2-3-%EC%B9%B4%EB%A9%94%EB%9D%BC-%ED%99%94%EB%A9%B4-%ED%99%95%EC%9D%B8.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/06_2-3-%EC%B9%B4%EB%A9%94%EB%9D%BC-%ED%99%94%EB%A9%B4-%ED%99%95%EC%9D%B8.png" alt="📄 2-3. 카메라 화면 확인" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

---

<a name="notion-heading-423d9e129df780be9eeac8af5c6fbbd7"></a>

## 📕 3. 2D LiDAR 장착 및 거리 측정

<a name="notion-heading-423d9e129df780b2b7a5f3e5281d1ab9"></a>

### 📄 3-1. LiDAR란?

LiDAR(Light Detection and Ranging)는 레이저를 이용하여 주변 물체까지의 거리를 측정하는 센서입니다.

측정한 거리 정보를 활용하여 주변 장애물과 공간 구조를 파악할 수 있습니다.

<a name="notion-heading-423d9e129df780e5b85cceca87304d6a"></a>

### 📄 3-2. PhysX LiDAR 구성

Front_Sensor에 PhysX LiDAR를 추가하고 회전형(Rotating) 센서를 구성합니다.

센서의 높이와 측정 설정을 조정하여 주변 장애물을 탐지할 수 있도록 합니다.

<a name="notion-heading-423d9e129df78059a77bdb55c118557b"></a>

### 📄 3-3. Collider와 장애물 인식

PhysX LiDAR는 물체의 시각적인 모양이 아니라 물리적인 충돌 형상을 기준으로 측정합니다.

따라서 장애물이 화면에 보이더라도 Collider가 설정되어 있지 않으면 LiDAR가 정상적으로 감지하지 못할 수 있습니다.

장애물에 Rigid Body와 Collider를 설정한 뒤 LiDAR의 측정 결과를 비교합니다.

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/07_3-3-Collider%EC%99%80-%EC%9E%A5%EC%95%A0%EB%AC%BC-%EC%9D%B8%EC%8B%9D.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/07_3-3-Collider%EC%99%80-%EC%9E%A5%EC%95%A0%EB%AC%BC-%EC%9D%B8%EC%8B%9D.png" alt="📄 3-3. Collider와 장애물 인식" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

---

<a name="notion-heading-423d9e129df780c8b5c5f52a6bdbb517"></a>

## 📕 4. ROS 2 통신 구조 이해

<a name="notion-heading-423d9e129df780009d41e9cd8db21113"></a>

### 📄 4-1. ROS 2의 기본 용어

ROS 2는 로봇의 여러 기능이 데이터를 주고받을 수 있도록 지원하는 통신 프레임워크입니다.

이번 실습에서 알아야 할 주요 용어는 다음과 같습니다.

- Node: 특정 기능을 수행하는 ROS 2 실행 단위입니다.
- Topic: 노드 간 데이터를 주고받는 통신 경로입니다.
- Message: Topic을 통해 전달되는 데이터 형식입니다.
- Frame ID: 데이터가 기준으로 삼는 좌표 프레임을 나타냅니다.

<a name="notion-heading-423d9e129df780adad3fcb9228a8af9e"></a>

### 📄 4-2. ROS 2 Bridge

Isaac Sim은 ROS 2 Bridge Extension을 통해 ROS 2와 통신할 수 있습니다.

OmniGraph에 ROS 2 관련 노드를 추가하면 시뮬레이션에서 생성한 센서 데이터를 ROS 2 Topic으로 발행할 수 있습니다.

---

<a name="notion-heading-423d9e129df780c190b9ff4e4f061958"></a>

## 📕 5. OmniGraph를 활용한 센서 데이터 발행

<a name="notion-heading-423d9e129df780fc87f9d1f711207c40"></a>

### 📄 5-1. LiDAR 데이터 발행

Action Graph를 생성하고 LiDAR 데이터를 ROS 2 LaserScan 메시지로 변환하는 노드들을 연결합니다.

주요 구성요소는 다음과 같습니다.

- On Playback Tick: 시뮬레이션 실행 시 그래프를 동작시킵니다.
- Isaac Read Lidar Beams: LiDAR 측정 데이터를 읽습니다.
- ROS2 Publish Laser Scan: 측정 데이터를 ROS 2 Topic으로 발행합니다.
- Isaac Read Simulation Time: 시뮬레이션 시간을 가져옵니다.

Topic Name은 `scan_lidar`로 설정하며, Frame ID는 `sim_lidar`를 사용합니다.

<a name="notion-heading-423d9e129df780cd8444d2de7fb533e3"></a>

### 📄 5-2. Camera 데이터 발행

카메라 데이터는 Render Product와 ROS2 Camera Helper 노드를 활용하여 발행합니다.

- Isaac Create Render Product: 카메라의 렌더링 결과를 생성합니다.
- ROS2 Camera Helper: 카메라 영상을 ROS 2 메시지로 발행합니다.

Topic Name은 `rgb`로 설정하며 Frame ID는 `sim_camera`를 사용합니다.

<a name="notion-heading-423d9e129df78045b518db12d9284e63"></a>

### 📄 5-3. ROS 2 Topic 확인

터미널에서 ROS 2 명령어를 사용하여 센서 데이터가 정상적으로 발행되는지 확인합니다.

```bash
ros2 topic list | grep -E 'scan_lidar|rgb'
```

LiDAR Topic의 데이터 발행 주기도 확인할 수 있습니다.

```bash
ros2 topic hz /scan_lidar
```

메시지 내용을 확인하려면 다음 명령어를 사용합니다.

```bash
ros2 topic echo /scan_lidar --once
```

---

<a name="notion-heading-423d9e129df780ef8bdec9889ca0d9de"></a>

## 📕 6. RViz2를 활용한 센서 데이터 시각화

<a name="notion-heading-423d9e129df780cbbac1fdb6a6f68ff6"></a>

### 📄 6-1. RViz2란?

RViz2는 ROS 2에서 전달되는 로봇과 센서 데이터를 시각적으로 확인할 수 있는 3D 시각화 도구입니다.

로봇의 센서 정보와 좌표계, 주변 환경 등을 확인하는 데 활용합니다.

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/08_6-1-RViz2%EB%9E%80.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/08_6-1-RViz2%EB%9E%80.png" alt="📄 6-1. RViz2란?" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-423d9e129df78026b06af66cf9d0f55f"></a>

### 📄 6-2. LiDAR 데이터 확인

RViz2를 실행하고 Global Options의 Fixed Frame을 `sim_lidar`로 설정합니다.

이후 `/scan_lidar` Topic을 LaserScan Display로 추가하여 LiDAR 측정 결과를 확인합니다.

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/09_6-2-LiDAR-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%99%95%EC%9D%B8.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/09_6-2-LiDAR-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%99%95%EC%9D%B8.png" alt="📄 6-2. LiDAR 데이터 확인" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<a name="notion-heading-423d9e129df780a6a2c5da12fe7f4e67"></a>

### 📄 6-3. Camera 영상 확인

`/rgb` Topic을 Image Display로 추가하여 Isaac Sim의 Robot_Camera에서 전달되는 영상을 확인합니다.

이를 통해 시뮬레이터에서 생성한 영상 및 거리 정보가 ROS 2를 통해 RViz2까지 전달되는 것을 확인합니다.

---

<a name="notion-heading-423d9e129df780038ed3e259c4c02b64"></a>

## 📕 7. Isaac Sim 5.1 주요 설정 주의사항

이번 교육은 Isaac Sim 5.1과 ROS 2 Jazzy를 기준으로 진행합니다.

공식 교육 자료의 Isaac Sim 4.5 및 ROS 2 Humble 설정과 다른 부분은 다음과 같습니다.

- Sensor_Mount: Rigid Body를 중복으로 설정하지 않고 Colliders Preset만 적용합니다.
- Robot_Camera: Orient 값을 `(90, -90, 0)`으로 설정합니다.
- ROS 2: Humble 대신 Jazzy 환경을 사용합니다.
- LiDAR: 충돌 형상이 설정된 장애물만 정상적으로 탐지합니다.
- RViz2: Fixed Frame을 센서의 Frame ID와 일치시켜야 합니다.

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

---

<a name="notion-heading-423d9e129df78064809bd57172b30f8e"></a>

# 📜 회고 및 다음 과제 (Retropective&Next Steps)

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/10_%ED%9A%8C%EA%B3%A0-%EB%B0%8F-%EB%8B%A4%EC%9D%8C-%EA%B3%BC%EC%A0%9C-RetropectiveNext-St.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/10_%ED%9A%8C%EA%B3%A0-%EB%B0%8F-%EB%8B%A4%EC%9D%8C-%EA%B3%BC%EC%A0%9C-RetropectiveNext-St.png" alt="📜 회고 및 다음 과제 (Retropective&amp;Next Steps)" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<strong>💡 오늘 배운 핵심 내용</strong>

- RGB Camera는 주변 환경의 영상 정보를 수집합니다.
- LiDAR는 레이저를 활용하여 주변 물체까지의 거리를 측정합니다.
- PhysX LiDAR는 물체의 Collider를 기준으로 장애물을 인식합니다.
- ROS 2 Bridge를 통해 Isaac Sim과 ROS 2를 연결합니다.
- OmniGraph의 ROS 2 노드를 활용하여 카메라와 LiDAR 데이터를 Topic으로 발행합니다.
- RViz2에서는 Fixed Frame과 Topic을 설정하여 센서 데이터를 시각화합니다.

<strong>📝 실습 미션: 장애물 코스 주행</strong>

이번 실습에서는 직접 제작한 로봇을 활용하여 장애물 코스를 주행합니다.

1. 로봇 전방에 장애물 5개 이상을 배치하고 폭 약 2.5m의 좁은 길을 구성합니다.
1. 키보드를 사용하여 목표 상자 앞 1m 이내에 도착합니다.
1. Isaac Sim 화면을 가리고 RViz2만 확인하면서 동일한 코스를 다시 주행합니다.
1. 두 번의 주행 시간과 RViz2의 카메라 및 LiDAR 화면을 기록합니다.

<strong>💡 생각해 볼 내용</strong>

- Isaac Sim 화면을 보면서 조종할 때와 RViz2만 보고 조종할 때 어떤 차이가 있었나요?
- 센서 데이터만으로 장애물의 위치와 거리를 파악하는 데 어려움은 없었나요?
- ScaleLinear와 ScaleAngular 값을 변경하면 로봇의 조종 특성이 어떻게 달라지나요?

<strong>📋 공식 퀴즈</strong>

Google Classroom에서 해당 교육 범위의 공식 퀴즈를 진행합니다.

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

<strong>🚀 다음 시간 (3일차)</strong>

<strong>Ingesting Robot Assets</strong>

이번 시간에는 기본 도형을 이용하여 로봇을 직접 제작했습니다.

다음 시간에는 이미 제작된 로봇 설계 파일인 URDF와 3D 모델을 Isaac Sim으로 가져오는 방법을 학습합니다.

- URDF 구조 이해
- 기존 로봇 모델 Import
- 관절과 물리 속성 확인
- 기존 로봇 에셋과 직접 제작한 로봇 구조 비교

특히 이번 실습에서 직접 구성한 Rigid Body, Joint, Angular Drive 및 Articulation Root가 URDF Importer를 통해 어떻게 구성되는지 비교합니다.

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

---

<a name="notion-heading-423d9e129df780e79b26f52b5531e519"></a>

# 👥 참고 문헌 (References)

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/11_%EC%B0%B8%EA%B3%A0-%EB%AC%B8%ED%97%8C-References.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/11_%EC%B0%B8%EA%B3%A0-%EB%AC%B8%ED%97%8C-References.png" alt="👥 참고 문헌 (References)" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

1. NVIDIA DLI – Building Your First Robot in Isaac Sim
    [https://docs.nvidia.com/learning/physical-ai/getting-started-with-isaac-sim/latest/building-your-first-robot-in-isaac-sim/](https://docs.nvidia.com/learning/physical-ai/getting-started-with-isaac-sim/latest/building-your-first-robot-in-isaac-sim/)

1. NVIDIA Isaac Sim Documentation
    [https://docs.isaacsim.omniverse.nvidia.com/](https://docs.isaacsim.omniverse.nvidia.com/)

1. ROS 2 Documentation
    [https://docs.ros.org/en/jazzy/](https://docs.ros.org/en/jazzy/)

1. RViz2 Documentation
    [https://docs.ros.org/en/jazzy/p/rviz2/](https://docs.ros.org/en/jazzy/p/rviz2/)

1. 교육 참고 자료
    - 센서 달기 – 카메라, 2D LiDAR
    - ROS 2로 데이터 보내기 – LaserScan, 카메라, RViz2
    - 정리 및 미션

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

---

<a name="notion-heading-423d9e129df78009ae68e5188576f1bf"></a>

# 📨 문의하기 (Contact us)

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/12_%EB%AC%B8%EC%9D%98%ED%95%98%EA%B8%B0-Contact-us.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/12_%EB%AC%B8%EC%9D%98%ED%95%98%EA%B8%B0-Contact-us.png" alt="📨 문의하기 (Contact us)" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/13_%EB%AC%B8%EC%9D%98%ED%95%98%EA%B8%B0-Contact-us.png"><img src="./2026-11-25_DLI_%2303_-_Robot_Sensors_%26_ROS_2_Integration_%EB%A1%9C%EB%B4%87_%EC%84%BC%EC%84%9C_%EA%B5%AC%EC%84%B1%EA%B3%BC_ROS_2_%EC%97%B0%EB%8F%99_assets/13_%EB%AC%B8%EC%9D%98%ED%95%98%EA%B8%B0-Contact-us.png" alt="📨 문의하기 (Contact us)" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<blockquote class="notion-quote" style="box-sizing:border-box;width:100%;max-width:100%;margin:1rem 0 1.25rem;padding:.35rem 0 .35rem 1rem;border-left:3px solid rgba(220,220,220,.72);color:inherit;"><ul style="list-style-position:outside;margin:.5rem 0 .75rem;padding-left:1.5rem;"><li style="margin:.30rem 0;line-height:1.5;"><strong>Youtube : </strong><br>
<a href="https://www.youtube.com/@sssrobotics">https://www.youtube.com/@sssrobotics</a></li><li style="margin:.30rem 0;line-height:1.5;"><strong>Blog : </strong><br>
<a href="https://www.sssrobotics.com/">https://www.sssrobotics.com</a></li></ul>
</blockquote>

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

#S급로봇연구소 #로봇연구소 #sssrobotics #sss #OpenUSD #NVIDIA #IsaacSim #Omniverse #Robotics #PhysicalAI #피지컬AI #로봇 #시뮬레이션 #AI #AX #robot #simulation #엔비디아

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>
