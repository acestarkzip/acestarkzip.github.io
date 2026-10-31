# 🐧 Linux : 리눅스 기초 1일차 (D+1)

> 📅 날짜: 2026-10-12  
> 📚 과정: 1주차 Linux (2026.10.12 Mon ~ 2026.10.14 Wed)  
> ⏱️ 학습 기간: Total 3 days

---

## 📑 목차

- [📕 A. Linux 기초](#-a-linux-기초-20261012-mon)
  - [📃 a. Linux & Ubuntu (리눅스 소개)](#-a-linux--ubuntu-리눅스-소개)
  - [📃 b. WSL2 (우분투 설치)](#-b-wsl2-우분투-설치)
  - [📃 c. Directory Commands (폴더 이동 명령어)](#-c-directory-commands-폴더-이동-명령어)
  - [📃 d. File Commands (파일 생성 및 관리)](#-d-file-commands-파일-생성-및-관리)
  - [📃 e. File Edit Commands (파일 수정 명령어)](#-e-file-edit-commands-파일-수정-명령어)
  - [📃 f. Search Commands (검색 명령어)](#-f-search-commands-검색-명령어)
  - [📃 g. Pipe and Redirection (파이프와 리디렉션)](#-g-pipe-and-redirection-파이프와-리디렉션)
- [💡 핵심 요약](#-핵심-요약)

---

## 📕 A. Linux 기초 (2026.10.12 Mon)

### 📃 a. Linux & Ubuntu (리눅스 소개)

- **Linux**: 서버, 클라우드, 로봇 등 다양한 환경에서 사용되는 오픈소스 운영체제 커널
- **Ubuntu**: Linux 커널을 기반으로 만들어진 운영체제 배포판
- **Terminal**: 명령어를 입력하여 시스템을 제어하는 인터페이스

### 📃 b. WSL2 (우분투 설치)

- **WSL2 (Windows Subsystem for Linux 2)**: Windows에서 Linux 환경을 실행할 수 있도록 지원하는 기능
- Windows를 유지하면서 Ubuntu의 개발 환경을 사용할 수 있음
- **활용 분야**
  - Python 개발
  - ROS 2 학습
  - Linux 명령어 실습

### 📃 c. Directory Commands (폴더 이동 명령어)

| 명령어 | 기능 |
|---|---|
| `pwd` | 현재 경로 확인 |
| `ls` | 파일 및 폴더 목록 확인 |
| `cd 폴더명` | 해당 폴더로 이동 |
| `cd ..` | 상위 폴더로 이동 |
| `cd ~` | 홈 디렉터리로 이동 |
| `mkdir 폴더명` | 폴더 생성 |

**💻 실습 예제**

```bash
# 현재 경로 확인
pwd

# 파일 및 폴더 목록 확인
ls

# projects 폴더 생성
mkdir projects

# projects 폴더로 이동
cd projects

# 상위 폴더로 이동
cd ..

# 홈 디렉터리로 이동
cd ~
```

### 📃 d. File Commands (파일 생성 및 관리)

| 명령어 | 기능 |
|---|---|
| `touch file.txt` | 빈 파일 생성 |
| `cat file.txt` | 파일 내용 출력 |
| `cp 원본 복사본` | 파일 복사 |
| `mv 기존 새이름` | 파일 이동 또는 이름 변경 |
| `rm file.txt` | 파일 삭제 |

**💻 실습 예제**

```bash
# 빈 파일 생성
touch example.txt

# 파일 내용 확인
cat example.txt

# 파일 복사
cp example.txt copy.txt

# 파일 이름 변경
mv copy.txt renamed.txt

# 파일 삭제
rm renamed.txt
```

> ⚠️ `rm` 명령어는 파일을 삭제하므로 실행하기 전에 대상 파일을 확인하세요.

### 📃 e. File Edit Commands (파일 수정 명령어)

| 명령어 | 기능 |
|---|---|
| `nano file.txt` | Nano 편집기로 파일 편집 |
| `vim file.txt` | Vim 편집기로 파일 수정 |
| `cat > file.txt` | 파일에 내용을 입력하고 저장 |
| `cat >> file.txt` | 기존 파일 내용 뒤에 추가 |

**💻 실습 예제**

```bash
# Nano 편집기로 파일 열기
nano example.txt

# Vim 편집기로 파일 열기
vim example.txt

# 파일에 내용 입력 (기존 내용 덮어쓰기)
cat > example.txt
Hello Linux!
# 입력 후 Ctrl + D를 눌러 저장 및 종료

# 기존 파일 내용 뒤에 추가
cat >> example.txt
Welcome to Ubuntu!
# 입력 후 Ctrl + D를 눌러 저장 및 종료

# 파일 내용 확인
cat example.txt
```

> 💡 `>`는 기존 내용을 덮어쓰고, `>>`는 기존 내용 뒤에 추가합니다.

### 📃 f. Search Commands (검색 명령어)

| 명령어 | 기능 |
|---|---|
| `find . -name "*.py"` | 현재 경로에서 Python 파일 검색 |
| `grep "문자열" file.txt` | 파일에서 특정 문자열 검색 |
| `which python` | 실행 파일 경로 확인 |

**💻 실습 예제**

```bash
# 현재 디렉터리에서 Python 파일 검색
find . -name "*.py"

# example.txt에서 Linux 문자열 검색
grep "Linux" example.txt

# Python 실행 파일 경로 확인
which python
```

### 📃 g. Pipe and Redirection (파이프와 리디렉션)

- **Pipe (`|`)**: 앞 명령어의 결과를 뒤 명령어의 입력으로 전달
- **Output Redirection (`>`, `>>`)**: 명령어의 결과를 파일에 저장하거나 기존 파일에 추가
- **Input Redirection (`<`)**: 파일 내용을 명령어의 입력으로 전달

**💻 실습 예제**

```bash
# Python 파일 검색
ls | grep ".py"

# 명령어 실행 결과를 파일에 저장 (기존 내용 덮어쓰기)
ls > list.txt

# 명령어 실행 결과를 기존 파일에 추가
ls >> list.txt

# 파일 내용을 입력으로 전달하여 정렬
sort < names.txt
```

**📌 핵심 비교**

| 기호 | 이름 | 기능 |
|---|---|---|
| `|` | Pipe | 앞 명령어의 출력을 뒤 명령어로 전달 |
| `>` | Output Redirection | 파일에 출력 저장 (기존 내용 덮어쓰기) |
| `>>` | Append Redirection | 파일 끝에 출력 내용 추가 |
| `<` | Input Redirection | 파일 내용을 명령어의 입력으로 전달 |

---

## 💡 핵심 요약

- **Linux**: 명령어 기반 시스템 환경의 기본 이해
- **WSL2 + Ubuntu**: Windows에서 Linux 개발 환경 구축
- **Directory Commands**: 디렉터리 이동 및 탐색
- **File Commands**: 파일 생성, 복사, 이동 및 삭제
- **File Edit Commands**: 터미널에서 파일 편집
- **Search Commands**: 파일 및 문자열 검색
- **Pipe & Redirection**: 명령어 연결 및 입출력 제어

### 🎯 학습 목표

Linux 터미널에서 디렉터리 이동, 파일 관리, 검색 및 명령어 입출력을 스스로 수행할 수 있다.

### ✅ 학습 체크리스트

- [ ] `pwd`, `ls`, `cd` 명령어로 디렉터리 탐색하기
- [ ] `mkdir`, `touch` 명령어로 폴더와 파일 생성하기
- [ ] `cp`, `mv`, `rm` 명령어로 파일 관리하기
- [ ] `nano` 또는 `vim`으로 파일 편집하기
- [ ] `find`, `grep`, `which` 명령어로 검색하기
- [ ] `|`, `>`, `>>`, `<`의 차이 이해하기
