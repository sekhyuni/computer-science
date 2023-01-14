# Operating System

* [Process and Thread](#process-and-thread)
* [Concurrency vs Parallelism](#concurrency-vs-parallelism)

## Process and Thread
1. 프로세스
    - 컴퓨터에서 실행 중인 프로그램으로 메모리에 적재되어 CPU의 할당을 받을 수 있는 상태
    - 기본적으로 프로세스당 최소 1개의 쓰레드를 가지고 있음
    - 할당받는 시스템 자원: CPU 시간, 운영되기 위해 필요한 주소 공간, 메모리 영역(Code, Data, Stack, Heap)
1. 쓰레드
    - 프로세스가 할당받은 자원을 이용하는 실행의 단위
    - 쓰레드는 프로세스 내에서 Stack을 제외한 모든 시스템 자원을 공유하면서 실행됨
1. Multi Process vs Multi Thread

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
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

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#operating-system)