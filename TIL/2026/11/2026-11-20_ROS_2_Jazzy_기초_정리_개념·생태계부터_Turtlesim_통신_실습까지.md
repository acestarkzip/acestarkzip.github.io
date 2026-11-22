<!-- notion-to-github-managed -->
<!-- notion-page-id: 41ed9e129df78011ab7feb62bdba070b -->
<!-- notion-last-edited-time: 2026-11-22T12:33:00.000Z -->

# ROS 2 Jazzy 기초 정리: 개념·생태계부터 Turtlesim 통신 실습까지

> - **날짜 :** 2026-11-20
> - **간단메모 :** ROS 2 Jazzy 핵심 개념과 Turtlesim 5대 통신(Node·Topic·Service·Parameter·Action) 정리
> - **원본 노션 :** [바로가기 링크](https://app.notion.com/p/ROS-2-Jazzy-Turtlesim-41ed9e129df78011ab7feb62bdba070b)

---

- [ROS 2 기초 정리 (Jazzy & Turtlesim)](#notion-heading-41ed9e129df78034863bc25774ac2caa)
    - [1. ROS 2란 무엇인가?](#notion-heading-41ed9e129df780c1b2a5ce8218aaab85)
    - [2. ROS 2 생태계 및 대표 패키지](#notion-heading-41ed9e129df78028b0beea681b155465)
    - [3. 설치 및 환경 세팅 (Ubuntu 24.04 / Jazzy)](#notion-heading-41ed9e129df78065b470d9b27ca16dc7)
    - [4. ROS 2 Graph 핵심 5대 요소](#notion-heading-41ed9e129df78094b6f5cb3d50faf315)
        - [① Node (노드)](#notion-heading-41ed9e129df7808cba0dcdaa5c6c0b1b)
        - [② Topic (토픽)](#notion-heading-41ed9e129df780e880e7f98a43ab1c58)
        - [③ Service (서비스)](#notion-heading-41ed9e129df780878783e653204a9688)
        - [④ Parameter (파라미터)](#notion-heading-41ed9e129df78029b575c24248f1c9d4)
        - [⑤ Action (액션)](#notion-heading-41ed9e129df78014a90cecef812bce4c)
    - [5. 통신 방식 한눈에 비교](#notion-heading-41ed9e129df7802e93d1d0bb308fc4be)
- [터틀봇 그리기 실행](#notion-heading-41ed9e129df780188636fbcd18effa50)

<a name="notion-heading-41ed9e129df78034863bc25774ac2caa"></a>

# ROS 2 기초 정리 (Jazzy & Turtlesim)

<blockquote class="notion-quote" style="box-sizing:border-box;width:100%;max-width:100%;margin:1rem 0 1.25rem;padding:.35rem 0 .35rem 1rem;border-left:3px solid rgba(220,220,220,.72);color:inherit;"><p style="margin:.25rem 0 .5rem;"><strong>한 줄 요약:</strong> 하나의 거대한 프로그램 대신 각자 역할을 맡은 <code>Node</code>들이 <code>Topic</code>, <code>Service</code>, <code>Parameter</code>, <code>Action</code>으로 통신하며 시뮬레이터(<code>turtlesim</code>, <code>Isaac Sim</code>)에서 실제 로봇(<code>Nav2</code>, <code>MoveIt 2</code>, <code>ros2_control</code>)까지 일관되게 제어할 수 있게 해주는 오픈 소스 로봇 개발 프레임워크입니다.</p></blockquote>

<a name="notion-heading-41ed9e129df780c1b2a5ce8218aaab85"></a>

## 1. ROS 2란 무엇인가?

- 운영체제(OS)가 아니라 로봇 애플리케이션 개발을 돕는 <strong>오픈 소스 프레임워크</strong>입니다.
- 로봇 시스템 내부 및 여러 장치·로봇 간 <strong>메시징, 표준 인터페이스, 멀티 언어(</strong>`rclcpp`<strong> C++, </strong>`rclpy`<strong> Python), 멀티 플랫폼</strong>을 지원합니다.
- <strong>ROS 1 대비 핵심 변화:</strong> 중앙 `Master` 노드 없이 <strong>DDS</strong> 기반 자동 탐색을 사용하고, <strong>QoS</strong> 설정으로 신뢰성·지연을 조절하며, 멀티 로봇·현장·제품화 단계까지 확장하도록 설계되었습니다.

| <strong>구분</strong> | <strong>ROS 1</strong> | <strong>ROS 2</strong> |
| --- | --- | --- |
| <strong>중심 서버</strong> | `Master` 필요 (꺼지면 통신 마비)    | 중앙 서버 없음 (`DDS` 기반 자동 탐색)    |
| <strong>통신 품질 조절</strong> | 제한적    | `QoS` 옵션으로 신뢰성·지연 등 제어    |
| <strong>멀티 로봇·확장</strong> | 설정 까다로움 / 연구·시제품 중심    | 여러 로봇·장치 연동 및 제품·양산 지향    |

<a name="notion-heading-41ed9e129df78028b0beea681b155465"></a>

## 2. ROS 2 생태계 및 대표 패키지

- <strong>생태계 계층:</strong> `① OS·HW(Ubuntu, 센서·모터)` → `② 통신 기반(DDS)` → `③ 클라이언트 라이브러리(rclcpp, rclpy)` → `④ 핵심 개념(Node, Topic, Service, Parameter, Action)` → `⑤ 도구·패키지` → `⑥ 응용(실제 로봇·시스템)`.
- <strong>대표 패키지:</strong>
    - `Nav2`: 지도 작성(SLAM), 위치 인식, 경로 계획, 장애물 회피 기반 자율주행
    - `MoveIt 2`: 로봇팔 움직임 계획 및 물건 집기·조립
    - `ros2_control`: 모터·관절 등 하드웨어를 일관된 방식으로 제어하는 프레임워크
    - `micro-ROS`: 소형 마이크로컨트롤러(MCU)와 ROS 2 연동
    - `Open-RMF`: 서로 다른 제조사의 로봇과 엘리베이터·문 등 시설 연동 및 교통 정리
    - `Autoware`: ROS 2 기반 오픈소스 자율주행 소프트웨어

<a name="notion-heading-41ed9e129df78065b470d9b27ca16dc7"></a>

## 3. 설치 및 환경 세팅 (Ubuntu 24.04 / Jazzy)

- <strong>배포판 매칭:</strong> Ubuntu `24.04` → `ROS 2 Jazzy Jalisco` (LTS), Ubuntu `26.04` → `ROS 2 Lyrical Luth`.
- <strong>필수 세팅:</strong>
    - `lsb_release -a`로 `24.04` (`noble`) 확인
    - `UTF-8` 로케일(`en_US.UTF-8`) 설정
    - ROS 2 저장소 등록 후 `ros-jazzy-desktop`, `ros-dev-tools` 설치
    - 새 터미널마다 `source /opt/ros/jazzy/setup.bash` 적용 (또는 `~/.bashrc`에 등록)

<a name="notion-heading-41ed9e129df78094b6f5cb3d50faf315"></a>

## 4. ROS 2 Graph 핵심 5대 요소

<a name="notion-heading-41ed9e129df7808cba0dcdaa5c6c0b1b"></a>

### ① Node (노드)

- 하나의 독립된 기능을 담당하는 실행 단위(예: `/turtlesim`, `/teleop_turtle`).
- `-ros-args --remap __node:=my_turtle`로 노드 이름을 바꿀 수 있습니다.
- 주요 CLI: `ros2 node list`, `ros2 node info <node_name>`.

<a name="notion-heading-41ed9e129df780e880e7f98a43ab1c58"></a>

### ② Topic (토픽)

- <strong>단방향 연속 스트리밍(Publish–Subscribe)</strong> 통신. 응답이 없으며 주기적·연속적 데이터에 적합합니다.
- 좌표계 기준: `linear.x`는 전진(`>0`)/후진(`<0`), `angular.z`는 반시계(`>0`)/시계(`<0`) 회전 속도(`rad/s`).
- 주요 토픽: `/turtle1/cmd_vel` (`geometry_msgs/msg/Twist`), `/turtle1/pose` (`turtlesim/msg/Pose`), `/turtle1/color_sensor` (`turtlesim/msg/Color`).
- 주요 CLI: `ros2 topic list -t`, `ros2 topic echo <topic_name>`, `ros2 topic info <topic_name> --verbose`, `ros2 topic pub`.

<a name="notion-heading-41ed9e129df780878783e653204a9688"></a>

### ③ Service (서비스)

- <strong>단발성 요청–응답(Request–Response)</strong> 통신. 필요할 때 한 번 호출하고 결과를 받습니다.
- 주요 서비스: `/clear`, `/reset`, `/spawn` (`turtlesim/srv/Spawn`), `/turtle1/set_pen`, `/turtle1/teleport_absolute`, 및 노드별 파라미터 서비스 7종.
- 주요 CLI: `ros2 service list`, `ros2 service type <service_name>`, `ros2 interface show <service_type>`, `ros2 service call`.

<a name="notion-heading-41ed9e129df78029b575c24248f1c9d4"></a>

### ④ Parameter (파라미터)

- 노드의 <strong>설정 값</strong>(정수, 실수, 불리언, 문자열, 리스트 등)을 런타임에 읽고 바꾸는 기능.
- `ros2 param set` 변경은 재시작 시 유지되지 않으므로 `ros2 param dump`로 `.yaml` 파일로 저장하고 `ros2 param load` 또는 `-params-file`로 불러옵니다.
- 주요 CLI: `ros2 param list`, `ros2 param get`, `ros2 param set`, `ros2 param dump`, `ros2 param load`.

<a name="notion-heading-41ed9e129df78014a90cecef812bce4c"></a>

### ⑤ Action (액션)

- 목표(Goal) → 중간 피드백(Feedback) → 최종 결과(Result)로 이어지는 <strong>장시간 작업</strong> 통신. 중간에 취소(Cancel)하거나 새 목표로 선점(Abort)할 수 있습니다.
- 주요 액션: `/turtle1/rotate_absolute` (`turtlesim/action/RotateAbsolute`) — `turtle_teleop_key`에서 `g, b, v, c, d, e, r, t` 키로 호출하고 `f` 키로 취소 가능.
- 주요 CLI: `ros2 action list`, `ros2 action type <action_name>`, `ros2 action info <action_name>`, `ros2 action send_goal`.

<a name="notion-heading-41ed9e129df7802e93d1d0bb308fc4be"></a>

## 5. 통신 방식 한눈에 비교

| <strong>구분</strong> | <strong>방향·모델</strong> | <strong>특징</strong> | <strong>대표 활용 예</strong> |
| --- | --- | --- | --- |
| <strong>Topic</strong> | 단방향 (`Pub` → `Sub`)    | 지속적 스트리밍, 응답 없음    | 속도 명령(`/cmd_vel`), 로봇 위치(`/pose`), 센서 데이터    |
| <strong>Service</strong> | 양방향 (`Client` ↔ `Server`)    | 1회 요청·응답, 즉시 처리    | 캔버스 초기화(`/clear`), 개체 생성(`/spawn`)    |
| <strong>Parameter</strong> | 노드 설정값 조회·변경    | YAML 저장·로드 가능    | 배경 RGB(`background_r/g/b`), 속도 배율    |
| <strong>Action</strong> | 목표·피드백·결과 비동기 제어    | 진행률 피드백, 취소·선점 지원    | 절대 각도 회전(`/rotate_absolute`), 이동·파지 작업    |

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>

<a name="notion-heading-41ed9e129df780188636fbcd18effa50"></a>

# 터틀봇 그리기 실행

<p class="notion-image" style="box-sizing:border-box;width:100%;max-width:100%;margin:.75rem 0;"><a href="https://raw.githubusercontent.com/acestarkzip/acestarkzip.github.io/main/TIL/2026/11/2026-11-20_ROS_2_Jazzy_%EA%B8%B0%EC%B4%88_%EC%A0%95%EB%A6%AC_%EA%B0%9C%EB%85%90%C2%B7%EC%83%9D%ED%83%9C%EA%B3%84%EB%B6%80%ED%84%B0_Turtlesim_%ED%86%B5%EC%8B%A0_%EC%8B%A4%EC%8A%B5%EA%B9%8C%EC%A7%80_assets/01_%ED%84%B0%ED%8B%80%EB%B4%87-%EA%B7%B8%EB%A6%AC%EA%B8%B0-%EC%8B%A4%ED%96%89.png"><img src="./2026-11-20_ROS_2_Jazzy_%EA%B8%B0%EC%B4%88_%EC%A0%95%EB%A6%AC_%EA%B0%9C%EB%85%90%C2%B7%EC%83%9D%ED%83%9C%EA%B3%84%EB%B6%80%ED%84%B0_Turtlesim_%ED%86%B5%EC%8B%A0_%EC%8B%A4%EC%8A%B5%EA%B9%8C%EC%A7%80_assets/01_%ED%84%B0%ED%8B%80%EB%B4%87-%EA%B7%B8%EB%A6%AC%EA%B8%B0-%EC%8B%A4%ED%96%89.png" alt="터틀봇 그리기 실행" style="display:block;width:100%;max-width:100%;height:auto;border-radius:8px;"></a></p>

<div class="notion-spacer" aria-hidden="true" style="height:1.5rem;min-height:1.5rem;"></div>
