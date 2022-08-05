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


### Redux Toolkit 주요 api 

configureStore : 일반 Redux 의 createStore 에 대한 추상화. 스토어 설정에 좋은 기본 값을 추가하여 더 좋은 개발자 경험을 제공한다. 

configureStore 의 parameter 
- reducer : store의 root reducer로 사용되는 single function, 만약 reducer가 sliceReducer의 객체(ex. {users : usersReducer, posts : postsReducer})라면 configureStore는 
    이 객체를 자동으로 Redux combineReducers utility 에 전달해서 root reducer를 생성한다. 

- middleware : 
    - Redux middleware function의 optional array 여기에 store에 추가하기를 원하는 모든 middleware를 포함해야 한다. 
    - configureStore는 자동으로 추가한 middleware를 applyMiddleware를 전달한다.  
    - 만약 middleware 를 전달하지 않으면, configureStore는 getDefaultMiddleware를 호출하고 getDefaultMiddleware 가 반환하는 middleware의 배열을 사용한다. 
    - default middleware에 (middleware를?) 추가하거나 커스텀하려는 경우, 인자로 getDefaultMiddleware를 받는 callback 함수를 전달하고, middleware 배열을 반환할 수 있다. 
- devTools : 
    - 값이 boolean type 인 경우, configureStore 가 자동으로 Redux DevTools browser extension 에 대한 지원 활성화해야하는지 여부를 나타내는데 사용된다.
    - 값이 object type 인 경우, DevTools extension 을 사용하고, options 객체들을 composeWithDevtools에 전달한다. 
    - default : true
- 