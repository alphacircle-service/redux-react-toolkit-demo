# reduxjs/toolkit 사용법을 위한 demo project 입니다

### src directory tree

```
│  index.html //root html
│  index.tsx //root tsx
│  App.tsx //app root tsx
│
├─apis //axios api 정의 디렉터리
│      auth.ts //auth 관련 api 정의
│
├─components // ui component들 정의 디렉터리
│  └─Login // Login component 정의 디렉터리
│      │  index.tsx //Login component 정의 (Presentainal Compoment)
│      │  styles.tsx // Login component의 style 정의
│      │
│      └─hooks //Login component 에서 사용하는 hooks 정의 디렉터리
│              useLogin.ts //Login component 의 hooks 정의 (ui 업데이트 로직들)
│
├─models // 전역 Model(type, interface 등) 정의 데릭터리
│      index.ts // 전역 Model(type, interface 등) 정의
│
├─modules //redux modules 정의 디렉터리
│  └─auths //auth 관련 redux module 정의
│          index.ts // Slice 정의
│          reducers.ts //reducer, action 정의
│
├─store //Redux store 정의 디렉터리
│      index.ts //Root Store 정의, 관련 타입들 정의
│
└─utils //기타 유틸 디렉터리
    └─constants //상수값 정의 디렉터리
            strings.ts //문자열 상수값 정의
```
