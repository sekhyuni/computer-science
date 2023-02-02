# Computer Structure

* [Encoding and Decoding](#encoding-and-decoding)

## Encoding and Decoding

1. 인코딩
    - 사람이 인지할 수 있는 문자를 약속된 규칙에 따라 컴퓨터가 이해할 수 있는 0과 1로 이루어진 코드로 바꾸는 것을 통틀어 일컫음
    - 정해진 규칙에 따라 암호화하는 것
1. 디코딩
    - 인코딩의 반대되는 개념
    - 정해진 규칙에 따라 복호화하는 것
1. UTF-8
    - 유니코드를 위한 가변 길이 문자 **인코딩 방식(Character Set)** 중 하나
    - 유니코드 한 문자를 나타내기 위해 1~4 byte 사용 (영어: 1 byte, 한글: 3 byte)
1. 웹상에서의 한글 깨짐 이슈
    - Browser와 Web Server가 상호작용을 해야할 때, Browser와 Server는 같은 Character Set을 사용해야 함 (Browser: UTF-8 Character Set 인코딩 방식, Server: UTF-8 Character Set 디코딩 방식)
    - 확인해야할 것들
        - Browser의 Character Set
        - Web Server Character Set
        - Database Character Set
        - Server OS Character Set
            ```shell
            $ echo $LANG    
            ```

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#computer-structure)