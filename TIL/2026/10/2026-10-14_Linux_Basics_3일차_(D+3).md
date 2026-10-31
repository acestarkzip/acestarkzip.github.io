# 🐧 Linux : 리눅스 기초 3일차 (D+3)

> 📅 날짜: 2026-10-14  
> 📚 과정: 1주차 Linux (2026.10.12 Mon ~ 2026.10.14 Wed)  
> ⏱️ 학습 기간: Total 3 days

---

## 📑 목차

- [📕 C. Linux Shell Script, Network](#-c-linux-shell-script-network-20261014-wed)
  - [📃 a. Shell Script (쉘 스크립트)](#-a-shell-script-쉘-스크립트)
  - [📃 b. Variable (변수)](#-b-variable-변수)
  - [📃 c. Conditional (조건문)](#-c-conditional-조건문)
  - [📃 d. Loop (반복문)](#-d-loop-반복문)
  - [📃 e. Network (네트워크)](#-e-network-네트워크)
  - [📃 f. CRUD (Create, Read, Update, Delete)](#-f-crud-create-read-update-delete)
  - [📃 g. Automation (자동화)](#-g-automation-자동화)
- [💡 핵심 요약](#-핵심-요약)

---

## 📕 C. Linux Shell Script, Network (2026.10.14 Wed)

### 📃 a. Shell Script (쉘 스크립트)

- **Shell**: 사용자가 입력한 명령어를 해석하고 실행하는 프로그램
- **Shell Script**: 여러 명령어를 파일에 작성하여 순서대로 실행하는 스크립트
- 반복 작업을 자동화하고 시스템 관리에 활용

**💻 실습 예제**

```bash
#!/bin/bash

# 문자열 출력
echo "Hello, Linux!"

# 현재 경로 확인
pwd

# 파일 및 디렉터리 목록 확인
ls
```

**📌 주요 명령어 및 문법**

- `#!/bin/bash`: Bash로 스크립트를 실행하도록 지정하는 셔뱅(Shebang)
- `echo`: 문자열이나 값을 출력
- `pwd`: 현재 작업 디렉터리 출력
- `ls`: 파일 및 디렉터리 목록 출력

**▶️ 실행 방법**

```bash
# 스크립트 파일 생성
nano script.sh

# 실행 권한 부여
chmod +x script.sh

# 스크립트 실행
./script.sh
```

> 💡 `./script.sh`는 현재 디렉터리에 있는 스크립트를 실행한다는 의미입니다.

### 📃 b. Variable (변수)

- **변수(Variable)**: 데이터나 값을 저장하는 이름
- Bash에서는 `변수명=값` 형태로 선언하며, `=` 앞뒤에 공백을 넣지 않음
- `$변수명` 또는 `${변수명}`으로 변수 값을 사용
- `$?`: 직전 명령어의 종료 상태 확인 (`0`은 일반적으로 성공, 0이 아닌 값은 오류 또는 기타 상태를 의미)

**💻 실습 예제**

```bash
#!/bin/bash

# 변수 선언
name="Robot"

# 변수 값 출력
echo "$name"

# 중괄호를 사용한 변수 표현
echo "${name}"

# 직전 명령어의 종료 상태 확인
echo "Exit status: $?"
```

**📌 변수 사용 시 주의사항**

```bash
# 올바른 변수 선언
name="Robot"

# 잘못된 변수 선언: 등호 앞뒤에 공백이 있음
# name = "Robot"
```

> 💡 변수에 값을 대입할 때는 `name="Robot"`처럼 작성합니다. `name = "Robot"`은 Bash에서 변수 대입으로 처리되지 않습니다.

### 📃 c. Conditional (조건문)

- **조건문(Conditional)**: 조건에 따라 서로 다른 명령어를 실행하는 구조
- Bash에서는 `if`, `elif`, `else`를 사용
- `$1`: 스크립트 실행 시 전달한 첫 번째 인자
- `-gt`: 숫자가 크다는 의미
- `fi`: `if` 문 종료

**💻 실습 예제**

```bash
#!/bin/bash

# 첫 번째 인자가 10보다 큰지 확인
if [ "$1" -gt 10 ]; then
    echo "10보다 큽니다."
else
    echo "10 이하입니다."
fi
```

**▶️ 실행 방법**

```bash
chmod +x condition.sh

# 15를 전달하여 실행
./condition.sh 15

# 5를 전달하여 실행
./condition.sh 5
```

**📌 자주 사용하는 숫자 비교 연산자**

| 연산자 | 의미 |
|---|---|
| `-eq` | 같다 (Equal) |
| `-ne` | 같지 않다 (Not Equal) |
| `-gt` | 크다 (Greater Than) |
| `-ge` | 크거나 같다 (Greater than or Equal) |
| `-lt` | 작다 (Less Than) |
| `-le` | 작거나 같다 (Less than or Equal) |

> ⚠️ 위 예제는 숫자를 입력한다고 가정합니다. 숫자가 아닌 값을 전달하면 오류가 발생할 수 있으므로 실제 스크립트에서는 입력값 검증이 필요합니다.

### 📃 d. Loop (반복문)

- **반복문(Loop)**: 같은 작업을 여러 번 실행하는 구조
- **`for`**: 정해진 대상이나 범위를 반복
- **`while`**: 조건이 참인 동안 반복

**💻 `for` 반복문 예제**

```bash
#!/bin/bash

# 1부터 3까지 순서대로 출력
for i in 1 2 3; do
    echo "$i"
done
```

**💻 `while` 반복문 예제**

```bash
#!/bin/bash

count=1

# count가 3 이하인 동안 반복
while [ "$count" -le 3 ]; do
    echo "$count"

    # count를 1씩 증가
    count=$((count + 1))
done
```

**📌 반복문 비교**

| 반복문 | 기능 | 활용 예시 |
|---|---|---|
| `for` | 정해진 대상이나 범위를 반복 | 여러 파일 처리 |
| `while` | 조건이 참인 동안 반복 | 특정 조건까지 작업 수행 |

> 💡 반복문을 사용하면 같은 명령어를 여러 번 작성하지 않고도 반복 작업을 수행할 수 있습니다.

### 📃 e. Network (네트워크)

- **Network**: 컴퓨터와 장치가 데이터를 주고받는 연결 구조
- **IP Address**: 네트워크에서 장치를 식별하는 주소
- **Port**: 장치 내에서 통신 대상 프로그램이나 서비스를 구분하는 번호
- **DNS (Domain Name System)**: 도메인 이름을 IP 주소로 변환하는 시스템

**📌 자주 사용하는 네트워크 명령어**

| 명령어 | 기능 |
|---|---|
| `ip addr` | 네트워크 인터페이스 및 IP 주소 확인 |
| `ping 주소` | 네트워크 연결 상태 확인 |
| `curl 주소` | 서버에 요청을 보내 응답 확인 |
| `ss -tuln` | 열려 있는 TCP/UDP 포트 확인 |
| `hostname` | 컴퓨터 이름 확인 |

**💻 실습 예제**

```bash
# 네트워크 인터페이스 및 IP 주소 확인
ip addr

# google.com에 ping 요청을 4회 전송
ping -c 4 google.com

# 웹 서버에 HTTP 응답 헤더 요청
curl -I https://www.google.com

# 열려 있는 TCP/UDP 포트 확인
ss -tuln

# 컴퓨터 이름 확인
hostname
```

**📌 네트워크 명령어 이해하기**

- `ip addr`: 현재 시스템의 네트워크 인터페이스와 IP 주소를 확인
- `ping -c 4 google.com`: 대상 서버에 ICMP 요청을 4회 전송
- `curl -I`: HTTP 응답 헤더를 요청하여 서버 응답을 확인
- `ss -tuln`: TCP/UDP 소켓의 리스닝 상태를 확인
- `hostname`: 현재 시스템의 호스트 이름을 출력

> 💡 `ping`은 대상 서버나 네트워크에서 ICMP 요청을 차단하면 응답하지 않을 수 있습니다. 따라서 ping 응답이 없다고 해서 반드시 인터넷 연결이 끊어진 것은 아닙니다.

### 📃 f. CRUD (Create, Read, Update, Delete)

- **CRUD**: 데이터를 생성·조회·수정·삭제하는 기본 작업
- 파일 관리, 데이터베이스, API 등에서 널리 사용되는 개념

**📌 CRUD와 Linux 명령어 비교**

| 작업 | 의미 | Linux 예시 |
|---|---|---|
| Create | 생성 | `touch file.txt` |
| Read | 조회 | `cat file.txt` |
| Update | 수정 | `nano file.txt` |
| Delete | 삭제 | `rm file.txt` |

**💻 실습 예제**

```bash
# Create: 파일 생성
touch file.txt

# Read: 파일 내용 확인
cat file.txt

# Update: 파일 내용 수정
nano file.txt

# Delete: 파일 삭제
rm file.txt
```

> 💡 CRUD는 데이터 처리의 기본 개념으로, 파일 관리뿐 아니라 데이터베이스와 웹 API 개발에서도 널리 사용됩니다.

### 📃 g. Automation (자동화)

- **Automation**: 반복적인 작업을 자동으로 실행하도록 구성하는 것
- Shell Script와 반복문을 활용하면 여러 명령어를 한 번에 실행할 수 있음
- **cron**: 특정 시간이나 주기에 맞춰 작업을 실행하는 스케줄러

**💻 자동화 스크립트 예제**

```bash
#!/bin/bash

# 작업 시작 시간 출력
echo "작업 시작: $(date)"

# logs 디렉터리가 없으면 생성
mkdir -p logs

# 작업 완료 메시지 출력
echo "작업 완료"
```

**📌 주요 문법 이해하기**

- `$(date)`: `date` 명령어의 실행 결과를 문자열에 삽입
- `mkdir -p logs`: `logs` 디렉터리가 없으면 생성하고, 이미 존재해도 오류 없이 진행
- `cron`: 지정한 시간이나 주기에 따라 스크립트 등을 자동 실행

**▶️ 실행 방법**

```bash
# 스크립트 파일 생성
nano automation.sh

# 실행 권한 부여
chmod +x automation.sh

# 스크립트 실행
./automation.sh
```

**💡 자동화 활용 예시**

- 로그 파일 정리
- 시스템 상태 점검
- 파일 백업
- 개발 환경 초기 설정
- 정기적인 스크립트 실행

---

## 💡 핵심 요약

- **Shell Script**: 여러 Linux 명령어를 하나의 파일로 실행
- **Variable**: 데이터 저장 및 재사용
- **Conditional & Loop**: 조건에 따른 실행과 반복 작업 구현
- **Network**: IP, 포트, DNS 및 연결 상태 이해
- **CRUD**: 데이터 생성·조회·수정·삭제
- **Automation**: 스크립트와 스케줄러를 활용한 반복 작업 자동화

### 🎯 학습 목표

Shell Script로 변수·조건문·반복문을 활용하고, 기본적인 네트워크 상태를 확인하며, 반복 작업을 자동화할 수 있다.

### ✅ 학습 체크리스트

- [ ] Bash 스크립트를 생성하고 실행하기
- [ ] 변수를 선언하고 값을 출력하기
- [ ] `$?`를 활용하여 명령어의 종료 상태 확인하기
- [ ] `if`, `else`를 사용하여 조건에 따라 실행하기
- [ ] `for`, `while` 반복문 작성하기
- [ ] `ip addr`, `ping`, `curl`로 네트워크 상태 확인하기
- [ ] CRUD의 의미와 파일 관리 명령어 연결하기
- [ ] Shell Script로 반복 작업 자동화하기

---
