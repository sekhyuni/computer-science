# Network

* [OSI 7 Layers](#osi-7-layers)

## OSI 7 Layers  
![OSI 7 Layers](./assets/img/osi-7-layers.png)
- 구성 요소: Physical - Data Link(MAC) - Network(IP) - Transport(TCP, UDP) - Session - Presentation(SSL, TLS) - Application(HTTP)
- HTTP/HTTPS
    - HTTP: 웹 상에서 클라이언트와 서버가 서로 정보를 주고받을 수 있도록 하는 프로토콜
        ||발표 연도|주요 특징|
        |:---:|:---:|:---:|
        |HTTP/0.9|1991년|단순한 요청과 응답을 위한 최초 버전|
        |HTTP/1.0|1996년|헤더, 메서드, 응답 코드 도입|
        |HTTP/1.1|1997년|가장 널리 사용 중인 버전, 지속적인 연결 가능, 캐시 도입, SSL/TLS에 의한 암호화 통신 지원|
        |HTTP/2|2015년|이진 프레이밍, 헤더 압축, 서버 푸시|
        |HTTP/3|2020년|QUIC 기반, 빠른 연결 설정, 신뢰성 제공|
    - HTTPS: Application 계층과 Transport 계층 사이에 있는 Presentation 계층에서 SSL 또는 TLS 인증서를 통해 보안을 강화한 HTTP 프로토콜
- TCP/UDP
    ||연결 지향|순서 보장|신뢰성|전송 속도|대상 애플리케이션|
    |:---:|:---:|:---:|:---:|:---:|:---:|
    |TCP|O|O|상대적으로 높음|상대적으로 느림|브라우저, 이메일, 파일 전송|
    |UDP|X|X|상대적으로 낮음|상대적으로 빠름|실시간 스트리밍, 온라인 게임|


[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#network)