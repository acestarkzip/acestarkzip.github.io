# Self-Taught : 1주차부터 3주차까지 복습

> 날짜: 2026-10-31
> 원본 노션: [링크](https://app.notion.com/p/Self-Taught-1-3-40ad9e129df780d6a5ecf744d584eec3)

---

- [📚 1주차 Linux (2026.10.12 Mon ~ 2026.10.14 Wed) | Total : 3 days](#notion-heading-40ad9e129df7805a9388d88ceebb4635)
  - [📕 A. Linux 기초 (2026.10.12 Mon)](#notion-heading-40ad9e129df78071a627ff226ad841a5)
    - [📃 a. Linux & Ubuntu (리눅스 소개)](#notion-heading-40ad9e129df7805f84cef68c48f261a2)
    - [📃 b. WSL2 (우분투 설치)](#notion-heading-40ad9e129df7802d9d0bc6836bfa4e05)
    - [📃 c. Directory Commands (폴더 이동 커멘드)](#notion-heading-40ad9e129df780ac9bcfd632150d1dd5)
    - [📃 d. File Commands (파일 생성, 작성 커맨드)](#notion-heading-40ad9e129df7803a8e31e81750c0db72)
    - [📃 e. File Edit Commands (파일 수정 커맨드)](#notion-heading-40ad9e129df780f4b980d3951dee6c1e)
    - [📃 f. Search Commands (검색 커맨드)](#notion-heading-40ad9e129df78032bee7da1a9b2a0622)
    - [📃 g. Pipe and Redirection (파이프와 리디렉션)](#notion-heading-40ad9e129df780b2a3efd4efb4dfa9f9)
  - [📕 B. Linux 권한, 프로세스, 패키지 (2026.10.13 Tue)](#notion-heading-40ad9e129df7805c9da4d1611fbe4096)
    - [📃 a. User (유저/사용자)](#notion-heading-40ad9e129df780258970e7fdb24cd8f2)
    - [📃 b. File Permission (파일 권한)](#notion-heading-40ad9e129df780289f3dea2c92351ddc)
    - [📃 c. Group (그룹)](#notion-heading-40ad9e129df780b9ad0dc64dd0230fd9)
    - [📃 d. Processes (프로세스)](#notion-heading-40ad9e129df780358aebef484efab6cc)
    - [📃 e. Package (패키지)](#notion-heading-40ad9e129df780c09093ce457bd4ebb3)
  - [📕 C. Linux Shell Script, Network (2026.10.14 Wed)](#notion-heading-40ad9e129df780c1b1e0c6cd0fdcd6ea)
    - [📃 a. Shell Script (쉘 스크립트)](#notion-heading-40ad9e129df780148121c161816d9595)
    - [📃 b. Variable (변수)](#notion-heading-40ad9e129df780fb8e47fce6ff52ef1b)
    - [📃 c. Conditional (조건문)](#notion-heading-40ad9e129df780c39799cf2586df4718)
    - [📃 d. Loop (반복문)](#notion-heading-40ad9e129df780778f76d9e83ec53dcf)
    - [📃 e. Network (네트워크)](#notion-heading-40ad9e129df7803ab13de8ea3134135d)
    - [📃 f. CRUD (Create, Read, Undo, Delete)](#notion-heading-40ad9e129df780c88e46c6053df07ce2)
    - [📃 g. Automation (자동화)](#notion-heading-40ad9e129df78091bf5bfb7bc59914f0)
- [📚 2주차 Python 기초&심화 문법 (2026.10.15 Thu ~ 2026.10.16 Tue) | Total : 4 days](#notion-heading-40ad9e129df78056a5dad503bb0d9567)
  - [📕 A. Python Intro (2026.10.15 Thu)](#notion-heading-40ad9e129df780a0bbd8fdf189439e87)
    - [📃 a. Python (파이썬 소개 및 IDE 설치)](#notion-heading-40ad9e129df7809d8b81f3cb45f982eb)
    - [📃 b. Visual Studio Code (VS Code 설치와 실행법)](#notion-heading-40ad9e129df7802a9964c0860df03cf1)
    - [📃 c. Input and Output (입력과 출력, 변수와 데이터 타입)](#notion-heading-40ad9e129df780a0ae59fe9026f61f65)
    - [📃 d. Operators (산술, 비교, 논리, 멤버쉽 연산자)](#notion-heading-40ad9e129df780c6962bea524d4c9eab)
    - [📃 e. Conditionals (조건문)](#notion-heading-40ad9e129df7803588d6d1d07bb82db1)
    - [📃 f. Loops (반복문)](#notion-heading-40ad9e129df780f6a967d94e4664de67)
  - [📕 B. Iterables (2026.10.16 Fri)](#notion-heading-40ad9e129df780f59ae6c16ec1bbf284)
    - [📃 a. List (리스트)](#notion-heading-40ad9e129df780a493e9da19e9a85d90)
    - [📃 b. Nested loop (중첩 반복문)](#notion-heading-40ad9e129df7807983b1ec814b2c62df)
    - [📃 c. List Comprehension (리스트 컴프리헨션)](#notion-heading-40ad9e129df7801eaa58c1682950db78)
    - [📃 d. String (문자열)](#notion-heading-40ad9e129df780e8a005cff54aa61873)
    - [📃 e. Tuple, Dictionary, Set (튜플, 딕셔너리, 세트)](#notion-heading-40ad9e129df7802fb084d87c9f720977)
  - [📕 C. Function, Module & File IO (2026.10.19 Mon)](#notion-heading-40ad9e129df780a6b881c94132c76433)
    - [📃 a. Function (함수)](#notion-heading-40ad9e129df7805797bfe73fa6b13e6a)
    - [📃 b. Module & Library (중첩 반복문)](#notion-heading-40ad9e129df78021a73ce48f8abb040c)
    - [📃 c. File I/O (파일 입출력)](#notion-heading-40ad9e129df78050b7e1e595446c72e6)
  - [📕 D. OOP | Object Oriented Programming (2026.10.20 Tue)](#notion-heading-40ad9e129df7808eaf49ddf75b6c1699)
    - [📃 a. OOP (Class&Instance, 상속, 다형성, 캡슐화, 추상화)](#notion-heading-40ad9e129df780e892acdff5ed0c82b9)
- [📚 2주차 Python 데이터 분석 (2026.10.21 Wed ~ 2026.10.23 Fri) | Total : 3 days](#notion-heading-40ad9e129df780c9ac6fe60c041ca7c3)
  - [📕 A. Numpy (2026.10.21 Wed)](#notion-heading-40ad9e129df7805a822cd715dcc343a0)
    - [📃 a. Google Colab (구글 코랩)](#notion-heading-40ad9e129df780e8aa6dc432f1fc046c)
    - [📃 b. Numpy (고속 수치 계산의 기반 | 엄청나게 빠른 속도로 계산)](#notion-heading-40ad9e129df78006b784c82c0e00ee56)
  - [📕 B. Pandas (2026.10.22 Thu)](#notion-heading-40ad9e129df78012881ec93547e361d4)
    - [📃 a. Pandas 기본 (데이터를 표\[Table\] 형태로 만들어 자유자재로 다루기 위해)](#notion-heading-40ad9e129df780dc91acc2fc8681a209)
    - [📃 b. Pandas 심화 (groupby, agg, apply)](#notion-heading-40ad9e129df780f5a686f55f842babee)
  - [📕 C. Data Visualization (2026.10.23 Fri)](#notion-heading-40ad9e129df7808daf6af10b4f203e58)
    - [📃 a. Matplotlib (기본적인 그래프\[선, 바, 산점도 등\]를 그려주는 가장 기초적인 도구)](#notion-heading-40ad9e129df780eaad61c3355070f805)
    - [📃 b. Matplotlib 통계과학 시각화 (histogram, box, heatmap)](#notion-heading-40ad9e129df780e68233d33439c3d7d6)
    - [📃 c. Seaborn (복잡한 통계 그래프를 한 줄의 코드로 예쁘게 그리기 위해)](#notion-heading-40ad9e129df7806f8f9cee75d16d3e1f)
    - [📃 d. Pandas plo (데이터프레임에서 바로 시각화하기)](#notion-heading-40ad9e129df780128f96f6171c57c1f0)
  - [📕 D. EDA (2026.10.23 Fri)](#notion-heading-40ad9e129df780838020c0f55c538d21)
    - [📃 a. EDA 실습1 (Seoul Bike Data)](#notion-heading-40ad9e129df780e0b317f32aedec3dbc)
    - [📃 b. EDA 실습2 (Online Shop)](#notion-heading-40ad9e129df7808bb190cbcb2137a9ed)
    - [📃 c. EDA 실습3 (Video Game Sales)](#notion-heading-40ad9e129df78057a37bc3f438179934)
- [📚 3주차 Python Machine Learning (2026.10.26 Mon ~ 2026.10.30 Fri) | Total : 5 days](#notion-heading-40ad9e129df7807886fbf08ed21206bb)
  - [📕 A. Maching Learning, Linear Regression (2026.10.26 Mon)](#notion-heading-40ad9e129df7809dac17d742e85862bf)
    - [📃 a. Machine Learning (머신 러닝)](#notion-heading-40ad9e129df780269dbdc71730aa4fc3)
    - [📃 b. Linear Regression (선형 회귀)](#notion-heading-40ad9e129df7804dab5dc500e0ed918f)
    - [📃 c. Error Metrics (에러 지표, 평가 지표)](#notion-heading-40ad9e129df78024954ff15c70b3fd13)
    - [📃 d. scikit-learn (사이킷-런)](#notion-heading-40ad9e129df780d69fb7f46b5a9e4dd7)
    - [📃 e. Multiple Linear Regression (다중 선형 회귀)](#notion-heading-40ad9e129df780b0ba03d2de482590bd)
    - [📃 f. Project (프로젝트)](#notion-heading-40ad9e129df78018a4adda562091f563)
  - [📕 B. Logistic Regression, KNN (2026.10.27 Tue)](#notion-heading-40ad9e129df7807a80b1ee6a241df27f)
    - [📃 a. Classification (분류 알고리즘)](#notion-heading-40ad9e129df7802b92f4ddff27f8e730)
    - [📃 b. Logistic Regression (로지스틱 회귀)](#notion-heading-40ad9e129df7809b8394f9a32fbda564)
    - [📃 c. Evaluation (회귀 평가 지표)](#notion-heading-40ad9e129df78019b224d5a0fb0d329f)
    - [📃 d. K-Nearest Neighbors (K-최근접 이웃)](#notion-heading-40ad9e129df780779dcae2428eec7424)
    - [📃 e. Feature Scaling (표준화, 정규화)](#notion-heading-40ad9e129df78026bd9bd82275a74efd)
    - [📃 f. Project (프로젝트)](#notion-heading-40ad9e129df78006a946ff2046651660)
  - [📕 C. Naive Bayes, Decision Tree (2026.10.28 Wed)](#notion-heading-40ad9e129df780e6a5bed2ed406940f6)
    - [📃 a. Naïve Bayes (나이브 베이즈)](#notion-heading-40ad9e129df7804ea3f9cde039d14bd6)
    - [📃 b. Decision Tree (결정 트리)](#notion-heading-40ad9e129df780048121f7bf95553cf6)
    - [📃 c. Hyperparameter Tuning (GridSearch CV, Randomized Search CV)](#notion-heading-40ad9e129df7801b94ddee4d5277f7d0)
    - [📃 d. Project (프로젝트)](#notion-heading-40ad9e129df7806380efce941c7ad522)
  - [📕 D. Ensemble, Boosting (2026.10.29 Thu)](#notion-heading-40ad9e129df78049b022c7432b31d160)
    - [📃 a. Ensemble (앙상블)](#notion-heading-40ad9e129df7807a9124d398082265dd)
    - [📃 b. Boosting (부스팅)](#notion-heading-40ad9e129df78017b741ebd9c4ff9485)
    - [📃 c. Project (프로젝트)](#notion-heading-40ad9e129df78007b84df598a45f6c66)
  - [📕 E. Unsupervised Learning (2026.10.30 Fri)](#notion-heading-40ad9e129df7807b86a6c468a38daa50)
    - [📃 a. Unsupervised Learning (비지도 학습)](#notion-heading-40ad9e129df780039d90e240e21137d3)
    - [📃 b. Clustering (군집화)](#notion-heading-40ad9e129df7800f8a9ae59ec6ca8897)
    - [📃 c. Dimensionality Reduction (자원 축소)](#notion-heading-40ad9e129df78080bc1df53698e28d33)
    - [📃 d. Project (프로젝트)](#notion-heading-40ad9e129df78038b6fede2ebe3719f2)
  - [📕 F. Project (2026.10.30 Fri)](#notion-heading-40ad9e129df7801a9a2fe18153a6b0af)
    - [📃 a. 실습 (타이타닉 생존자)](#notion-heading-40ad9e129df78065a583d80e6b8b5565)

<a name="notion-heading-40ad9e129df7805a9388d88ceebb4635"></a>

# 📚 1주차 Linux (2026.10.12 Mon ~ 2026.10.14 Wed) | Total : 3 days

<a name="notion-heading-40ad9e129df78071a627ff226ad841a5"></a>

## 📕 A. Linux 기초 (2026.10.12 Mon)

<a name="notion-heading-40ad9e129df7805f84cef68c48f261a2"></a>

### 📃 a. Linux & Ubuntu (리눅스 소개)

<a name="notion-heading-40ad9e129df7802d9d0bc6836bfa4e05"></a>

### 📃 b. WSL2 (우분투 설치)

<a name="notion-heading-40ad9e129df780ac9bcfd632150d1dd5"></a>

### 📃 c. Directory Commands (폴더 이동 커멘드)

<a name="notion-heading-40ad9e129df7803a8e31e81750c0db72"></a>

### 📃 d. File Commands (파일 생성, 작성 커맨드)

<a name="notion-heading-40ad9e129df780f4b980d3951dee6c1e"></a>

### 📃 e. File Edit Commands (파일 수정 커맨드)

<a name="notion-heading-40ad9e129df78032bee7da1a9b2a0622"></a>

### 📃 f. Search Commands (검색 커맨드)

<a name="notion-heading-40ad9e129df780b2a3efd4efb4dfa9f9"></a>

### 📃 g. Pipe and Redirection (파이프와 리디렉션)

<a name="notion-heading-40ad9e129df7805c9da4d1611fbe4096"></a>

## 📕 B. Linux 권한, 프로세스, 패키지 (2026.10.13 Tue)

<a name="notion-heading-40ad9e129df780258970e7fdb24cd8f2"></a>

### 📃 a. User (유저/사용자)

<a name="notion-heading-40ad9e129df780289f3dea2c92351ddc"></a>

### 📃 b. File Permission (파일 권한)

<a name="notion-heading-40ad9e129df780b9ad0dc64dd0230fd9"></a>

### 📃 c. Group (그룹)

<a name="notion-heading-40ad9e129df780358aebef484efab6cc"></a>

### 📃 d. Processes (프로세스)

<a name="notion-heading-40ad9e129df780c09093ce457bd4ebb3"></a>

### 📃 e. Package (패키지)

<a name="notion-heading-40ad9e129df780c1b1e0c6cd0fdcd6ea"></a>

## 📕 C. Linux Shell Script, Network (2026.10.14 Wed)

<a name="notion-heading-40ad9e129df780148121c161816d9595"></a>

### 📃 a. Shell Script (쉘 스크립트)

<a name="notion-heading-40ad9e129df780fb8e47fce6ff52ef1b"></a>

### 📃 b. Variable (변수)

<a name="notion-heading-40ad9e129df780c39799cf2586df4718"></a>

### 📃 c. Conditional (조건문)

<a name="notion-heading-40ad9e129df780778f76d9e83ec53dcf"></a>

### 📃 d. Loop (반복문)

<a name="notion-heading-40ad9e129df7803ab13de8ea3134135d"></a>

### 📃 e. Network (네트워크)

<a name="notion-heading-40ad9e129df780c88e46c6053df07ce2"></a>

### 📃 f. CRUD (Create, Read, Undo, Delete)

<a name="notion-heading-40ad9e129df78091bf5bfb7bc59914f0"></a>

### 📃 g. Automation (자동화)

<a name="notion-heading-40ad9e129df78056a5dad503bb0d9567"></a>

# 📚 2주차 Python 기초&심화 문법 (2026.10.15 Thu ~ 2026.10.16 Tue) | Total : 4 days

<a name="notion-heading-40ad9e129df780a0bbd8fdf189439e87"></a>

## 📕 A. Python Intro (2026.10.15 Thu)

<a name="notion-heading-40ad9e129df7809d8b81f3cb45f982eb"></a>

### 📃 a. Python (파이썬 소개 및 IDE 설치)

<a name="notion-heading-40ad9e129df7802a9964c0860df03cf1"></a>

### 📃 b. Visual Studio Code (VS Code 설치와 실행법)

<a name="notion-heading-40ad9e129df780a0ae59fe9026f61f65"></a>

### 📃 c. Input and Output (입력과 출력, 변수와 데이터 타입)

<a name="notion-heading-40ad9e129df780c6962bea524d4c9eab"></a>

### 📃 d. Operators (산술, 비교, 논리, 멤버쉽 연산자)

<a name="notion-heading-40ad9e129df7803588d6d1d07bb82db1"></a>

### 📃 e. Conditionals (조건문)

<a name="notion-heading-40ad9e129df780f6a967d94e4664de67"></a>

### 📃 f. Loops (반복문)

<a name="notion-heading-40ad9e129df780f59ae6c16ec1bbf284"></a>

## 📕 B. Iterables (2026.10.16 Fri)

<a name="notion-heading-40ad9e129df780a493e9da19e9a85d90"></a>

### 📃 a. List (리스트)

<a name="notion-heading-40ad9e129df7807983b1ec814b2c62df"></a>

### 📃 b. Nested loop (중첩 반복문)

<a name="notion-heading-40ad9e129df7801eaa58c1682950db78"></a>

### 📃 c. List Comprehension (리스트 컴프리헨션)

<a name="notion-heading-40ad9e129df780e8a005cff54aa61873"></a>

### 📃 d. String (문자열)

<a name="notion-heading-40ad9e129df7802fb084d87c9f720977"></a>

### 📃 e. Tuple, Dictionary, Set (튜플, 딕셔너리, 세트)

<a name="notion-heading-40ad9e129df780a6b881c94132c76433"></a>

## 📕 C. Function, Module & File IO (2026.10.19 Mon)

<a name="notion-heading-40ad9e129df7805797bfe73fa6b13e6a"></a>

### 📃 a. Function (함수)

<a name="notion-heading-40ad9e129df78021a73ce48f8abb040c"></a>

### 📃 b. Module & Library (중첩 반복문)

<a name="notion-heading-40ad9e129df78050b7e1e595446c72e6"></a>

### 📃 c. File I/O (파일 입출력)

<a name="notion-heading-40ad9e129df7808eaf49ddf75b6c1699"></a>

## 📕 D. OOP | Object Oriented Programming (2026.10.20 Tue)

<a name="notion-heading-40ad9e129df780e892acdff5ed0c82b9"></a>

### 📃 a. OOP (Class&Instance, 상속, 다형성, 캡슐화, 추상화)

<a name="notion-heading-40ad9e129df780c9ac6fe60c041ca7c3"></a>

# 📚 2주차 Python 데이터 분석 (2026.10.21 Wed ~ 2026.10.23 Fri) | Total : 3 days

<a name="notion-heading-40ad9e129df7805a822cd715dcc343a0"></a>

## 📕 A. Numpy (2026.10.21 Wed)

<a name="notion-heading-40ad9e129df780e8aa6dc432f1fc046c"></a>

### 📃 a. Google Colab (구글 코랩)

<a name="notion-heading-40ad9e129df78006b784c82c0e00ee56"></a>

### 📃 b. Numpy (고속 수치 계산의 기반 | 엄청나게 빠른 속도로 계산)

<a name="notion-heading-40ad9e129df78012881ec93547e361d4"></a>

## 📕 B. Pandas (2026.10.22 Thu)

<a name="notion-heading-40ad9e129df780dc91acc2fc8681a209"></a>

### 📃 a. Pandas 기본 (데이터를 표[Table] 형태로 만들어 자유자재로 다루기 위해)

<a name="notion-heading-40ad9e129df780f5a686f55f842babee"></a>

### 📃 b. Pandas 심화 (groupby, agg, apply)

<a name="notion-heading-40ad9e129df7808daf6af10b4f203e58"></a>

## 📕 C. Data Visualization (2026.10.23 Fri)

<a name="notion-heading-40ad9e129df780eaad61c3355070f805"></a>

### 📃 a. Matplotlib (기본적인 그래프[선, 바, 산점도 등]를 그려주는 가장 기초적인 도구)

<a name="notion-heading-40ad9e129df780e68233d33439c3d7d6"></a>

### 📃 b. Matplotlib 통계과학 시각화 (histogram, box, heatmap)

<a name="notion-heading-40ad9e129df7806f8f9cee75d16d3e1f"></a>

### 📃 c. Seaborn (복잡한 통계 그래프를 한 줄의 코드로 예쁘게 그리기 위해)

<a name="notion-heading-40ad9e129df780128f96f6171c57c1f0"></a>

### 📃 d. Pandas plo (데이터프레임에서 바로 시각화하기)

<a name="notion-heading-40ad9e129df780838020c0f55c538d21"></a>

## 📕 D. EDA (2026.10.23 Fri)

<a name="notion-heading-40ad9e129df780e0b317f32aedec3dbc"></a>

### 📃 a. EDA 실습1 (Seoul Bike Data)

<a name="notion-heading-40ad9e129df7808bb190cbcb2137a9ed"></a>

### 📃 b. EDA 실습2 (Online Shop)

<a name="notion-heading-40ad9e129df78057a37bc3f438179934"></a>

### 📃 c. EDA 실습3 (Video Game Sales)

<a name="notion-heading-40ad9e129df7807886fbf08ed21206bb"></a>

# 📚 3주차 Python Machine Learning (2026.10.26 Mon ~ 2026.10.30 Fri) | Total : 5 days

<a name="notion-heading-40ad9e129df7809dac17d742e85862bf"></a>

## 📕 A. Maching Learning, Linear Regression (2026.10.26 Mon)

<a name="notion-heading-40ad9e129df780269dbdc71730aa4fc3"></a>

### 📃 a. Machine Learning (머신 러닝)

<a name="notion-heading-40ad9e129df7804dab5dc500e0ed918f"></a>

### 📃 b. Linear Regression (선형 회귀)

<a name="notion-heading-40ad9e129df78024954ff15c70b3fd13"></a>

### 📃 c. Error Metrics (에러 지표, 평가 지표)

<a name="notion-heading-40ad9e129df780d69fb7f46b5a9e4dd7"></a>

### 📃 d. scikit-learn (사이킷-런)

<a name="notion-heading-40ad9e129df780b0ba03d2de482590bd"></a>

### 📃 e. Multiple Linear Regression (다중 선형 회귀)

<a name="notion-heading-40ad9e129df78018a4adda562091f563"></a>

### 📃 f. Project (프로젝트)

<a name="notion-heading-40ad9e129df7807a80b1ee6a241df27f"></a>

## 📕 B. Logistic Regression, KNN (2026.10.27 Tue)

<a name="notion-heading-40ad9e129df7802b92f4ddff27f8e730"></a>

### 📃 a. Classification (분류 알고리즘)

<a name="notion-heading-40ad9e129df7809b8394f9a32fbda564"></a>

### 📃 b. Logistic Regression (로지스틱 회귀)

<a name="notion-heading-40ad9e129df78019b224d5a0fb0d329f"></a>

### 📃 c. Evaluation (회귀 평가 지표)

<a name="notion-heading-40ad9e129df780779dcae2428eec7424"></a>

### 📃 d. K-Nearest Neighbors (K-최근접 이웃)

<a name="notion-heading-40ad9e129df78026bd9bd82275a74efd"></a>

### 📃 e. Feature Scaling (표준화, 정규화)

<a name="notion-heading-40ad9e129df78006a946ff2046651660"></a>

### 📃 f. Project (프로젝트)

<a name="notion-heading-40ad9e129df780e6a5bed2ed406940f6"></a>

## 📕 C. Naive Bayes, Decision Tree (2026.10.28 Wed)

<a name="notion-heading-40ad9e129df7804ea3f9cde039d14bd6"></a>

### 📃 a. Naïve Bayes (나이브 베이즈)

<a name="notion-heading-40ad9e129df780048121f7bf95553cf6"></a>

### 📃 b. Decision Tree (결정 트리)

<a name="notion-heading-40ad9e129df7801b94ddee4d5277f7d0"></a>

### 📃 c. Hyperparameter Tuning (GridSearch CV, Randomized Search CV)

<a name="notion-heading-40ad9e129df7806380efce941c7ad522"></a>

### 📃 d. Project (프로젝트)

<a name="notion-heading-40ad9e129df78049b022c7432b31d160"></a>

## 📕 D. Ensemble, Boosting (2026.10.29 Thu)

<a name="notion-heading-40ad9e129df7807a9124d398082265dd"></a>

### 📃 a. Ensemble (앙상블)

<a name="notion-heading-40ad9e129df78017b741ebd9c4ff9485"></a>

### 📃 b. Boosting (부스팅)

<a name="notion-heading-40ad9e129df78007b84df598a45f6c66"></a>

### 📃 c. Project (프로젝트)

<a name="notion-heading-40ad9e129df7807b86a6c468a38daa50"></a>

## 📕 E. Unsupervised Learning (2026.10.30 Fri)

<a name="notion-heading-40ad9e129df780039d90e240e21137d3"></a>

### 📃 a. Unsupervised Learning (비지도 학습)

<a name="notion-heading-40ad9e129df7800f8a9ae59ec6ca8897"></a>

### 📃 b. Clustering (군집화)

<a name="notion-heading-40ad9e129df78080bc1df53698e28d33"></a>

### 📃 c. Dimensionality Reduction (자원 축소)

<a name="notion-heading-40ad9e129df78038b6fede2ebe3719f2"></a>

### 📃 d. Project (프로젝트)

<a name="notion-heading-40ad9e129df7801a9a2fe18153a6b0af"></a>

## 📕 F. Project (2026.10.30 Fri)

<a name="notion-heading-40ad9e129df78065a583d80e6b8b5565"></a>

### 📃 a. 실습 (타이타닉 생존자)
