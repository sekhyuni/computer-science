# Operating System

* [Process vs Thread](#process-vs-thread)
* [Concurrency vs Parallelism](#concurrency-vs-parallelism)

## Process vs Thread
- Process
    - 정의: 실행 중인 프로그램의 인스턴스
    - 특징
        - 기본적으로 Process당 최소 1개의 Thread를 가지고 있음
        - 특정 Process는 다른 Process의 메모리 공간에 직접 접근할 수 없음
    - 운영체제로부터 할당받는 시스템 자원: CPU 시간, 운영되기 위해 필요한 주소 공간, 메모리 공간(Code, Data, Stack, Heap)
- Thread
    - 정의: 프로세스 내에서 실행되는 작은 작업의 단위
    - 특징: Thread는 Process 내에서 Stack을 제외한 모든 시스템 자원을 공유하면서 실행됨
1. Multi Process vs Multi Thread

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#operating-system)
## Concurrency vs Parallelism
1. 동시성
    - 동시에 여러 작업이 처리되는 것 처럼 보이는 것
    - 싱글 코어에서 멀티 쓰레드를 동작시키는 방식
    - 논리적인 개념
1. 병렬성
    - 실제로 동시에 여러 작업이 처리되는 것
    - 멀티 코어에서 멀티 쓰레드를 동작시키는 방식
    - 물리적인 개념

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#operating-system)