# [TEST] 노션 기능 테스트 (gif, url, pdf, 등)

> 날짜: 2026-10-30
> 원본 노션: [링크](https://app.notion.com/p/TEST-gif-url-pdf-409d9e129df78052b3aee564985e4101)

---

### 3. 코드/예제

실습한 코드나 예제가 있다면 여기에 추가하세요.


![Image](./2026-10-30_%5BTEST%5D_%EB%85%B8%EC%85%98_%EA%B8%B0%EB%8A%A5_%ED%85%8C%EC%8A%A4%ED%8A%B8_%28gif%2C_url%2C_pdf%2C_%EB%93%B1%29_assets/409d9e129df780e38acacbe77a6bc253_0001_0d4ac42302_IMAGE_%ED%8C%8C%EC%9D%BC.gif)

[🔗 https://blogs.nvidia.com/blog/what-is-robotics-simulation/](https://blogs.nvidia.com/blog/what-is-robotics-simulation/)

- 노션의 URL Bookmark 기능을 통해 ‘샘플 이미지’를 볼 수 있고, 누르면 해당 링크로 이동합니다.  

> 💡 샘플입니다. 참고 부탁 드립니다.

- 노션의 Callout 기능을 통해 강조합니다.  

[📎 PDF 문서 열기](https://resources.nvidia.com/_pfcdn/assets/10412/contents/1071330/ba4bea18-a964-4ab0-a33f-c4930fbda7ec.pdf)

- 노션의 Embed PDF 기능을 통해, PDF를 이 페이지에서 읽어볼 수 있습니다.    

![Image](./2026-10-30_%5BTEST%5D_%EB%85%B8%EC%85%98_%EA%B8%B0%EB%8A%A5_%ED%85%8C%EC%8A%A4%ED%8A%B8_%28gif%2C_url%2C_pdf%2C_%EB%93%B1%29_assets/409d9e129df780208c73f1c244fa2ab9_0003_35fd4f5ee6_IMAGE_%ED%8C%8C%EC%9D%BC.jpg)


![Image](./2026-10-30_%5BTEST%5D_%EB%85%B8%EC%85%98_%EA%B8%B0%EB%8A%A5_%ED%85%8C%EC%8A%A4%ED%8A%B8_%28gif%2C_url%2C_pdf%2C_%EB%93%B1%29_assets/40ad9e129df7808fbc85ff02a88ab4ba_0004_35fd4f5ee6_IMAGE_%ED%8C%8C%EC%9D%BC.jpg)



- 노션의 사진 중첩 기능 덕분에 두 개를 연속으로 볼 수 있습니다.

> 💡 [샘플입니다. 참고 부탁 드립니다.](https://velog.io/@jiiina/YOLO-Object-Detection-YOLO-%EA%B8%B0%EB%B3%B8-%EA%B0%9C%EB%85%90)

> 💡 [https://velog.io/@jiiina/YOLO-Object-Detection-YOLO-기본-개념](https://velog.io/@jiiina/YOLO-Object-Detection-YOLO-%EA%B8%B0%EB%B3%B8-%EA%B0%9C%EB%85%90)

### 4. 느낀 점 & 회고

오늘 학습하면서 느낀 점이나 개선할 점을 작성하세요.

ㅅ[셈플링 입니다. 참고
부탁드립니다 
감샇바니다.

```html
<!-- 헤더 영역 -->
<header>
    <h1>환영합니다!</h1>
</header>

<!-- 본문 콘텐츠 영역 -->
<main>
    <p>이것은 가장 기본적인 <strong>HTML</strong> 샘플 코드입니다.</p>

    <h2>좋아하는 목록</h2>
    <ul>
        <li>사과</li>
        <li>바나나</li>
        <li>오렌지</li>
    </ul>

    <!-- 링크 예시 -->
    <p>더 많은 정보는 <a href="<https://developer.mozilla.org/ko/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content>" target="_blank">MDN 웹 문서</a>에서 확인할 수 있습니다.</p>
</main>

<!-- 푸터 영역 -->
<footer>
    <p>&copy; 2026 나의 웹사이트</p>
</footer>
```

</body>
</html>

### 5. 참고 자료

- 참고한 문서나 링크

![Image](./2026-10-30_%5BTEST%5D_%EB%85%B8%EC%85%98_%EA%B8%B0%EB%8A%A5_%ED%85%8C%EC%8A%A4%ED%8A%B8_%28gif%2C_url%2C_pdf%2C_%EB%93%B1%29_assets/409d9e129df7806c90b8c840439e7fa1_0005_46ec3b52e2_IMAGE_%ED%8C%8C%EC%9D%BC.png)

# 테스트 입니다 .샘플링입니다.

```html
hello sir!
```

![Image](./2026-10-30_%5BTEST%5D_%EB%85%B8%EC%85%98_%EA%B8%B0%EB%8A%A5_%ED%85%8C%EC%8A%A4%ED%8A%B8_%28gif%2C_url%2C_pdf%2C_%EB%93%B1%29_assets/409d9e129df7808e95c5edab142abac7_0006_0d4ac42302_IMAGE_%ED%8C%8C%EC%9D%BC.gif)

```python
print('hello')
```

```cpp
// example.cpp
#include <iostream>

extern "C" {
    // 덧셈 함수
    int add(int a, int b) {
        return a + b;
    }
}
```

```bash
g++ -shared -o example.dll example.cpp
```

```python
import ctypes
import os

# 운영체제에 맞춰 파일명 선택 (.dll 또는 .so)
lib_path = os.path.abspath("./example.dll")  # 리눅스/맥은 example.so
cpp_lib = ctypes.CDLL(lib_path)

# C++ 함수의 인자 타입(argtypes)과 반환 타입(restype) 지정
cpp_lib.add.argtypes = [ctypes.c_int, ctypes.c_int]
cpp_lib.add.restype = ctypes.c_int

# 함수 실행
result = cpp_lib.add(10, 20)
print(f"C++ 함수 호출 결과 (10 + 20): {result}")
```

![Image](./2026-10-30_%5BTEST%5D_%EB%85%B8%EC%85%98_%EA%B8%B0%EB%8A%A5_%ED%85%8C%EC%8A%A4%ED%8A%B8_%28gif%2C_url%2C_pdf%2C_%EB%93%B1%29_assets/409d9e129df780ddb6d5cbfd3fc74d7e_0007_0d4ac42302_IMAGE_%ED%8C%8C%EC%9D%BC.gif)

/
