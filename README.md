## The Movie DB API 요청을 위한 Axios 인스턴스 생성 및 요청 보내기

### Axios란 ?
- Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.
- 쉽게 말해서 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 Ajax와 더불어 사용함.    
- https://axios-http.com/kr/docs/intro

<br><br>
터미널 명령어로 axios 설치하기

```shell
npm install axios --save
```

#### API 서버로부터 데이터 받아오기
ex) axios.get("https://api.themoviedb.org/3/trending/all/week")  

<br>

#### axios 인스턴스화 해주기

```javascript
//axios.js
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: "자신의 api 키 입력",
        language: "ko-KR"
    }
});

export default instance;
```

```javascript
//request.js
const requests = {
    fetchNowPlaying: "movie/now_playing",
    fetchNetflixOriginals: "/discover/tv?with_networks=213",
    fetchTrending: "/trending/all/week",
    fetchTopRated: "/movie/top_rated",
    fetchActionMovie: "/discover/movie?with_genres=28",
    fetchComedyMovies: "/discover/movie?with_genres=35",
    fetchHorrorMovies: "/discover/movie?with_genres=27",
    fetchRomanceMovies: "/discover/movie?with_genres=10749",
    fetchDocumentaries: "/discover/movie?with_genres=99",
}

export default requests;
```


## Styled Component 사용하기
### Sytled Component란?
자바스크립트 파일 안에서 css를 처리할 수 있게 해주는 대표적인 라이브러리이다.  
https://styled-components.com/docs



### 설치 방법
with npm
```shell
npm install --save styled-components
```

with yarn
```
yarn add styled-components
```

## React Router Dom이란?
React Router Dom을 사용하면 웹 앱에서 동적 라우팅을 구현할 수 있다. 라우팅이 실행 중인 앱 외부의 구성에서 처리되는 기존 라우팅 아키텍처와 달리 React Router Dom은 앱 및 플랫폼의 요구 사항에 따라 컴포넌트 기반 라우팅을 용이하게 해준다.

> 리액트는 SPA이기 때문에 하나의 index.html 템플릿 파일을 가지고있음.  
> 이 하나의 템플릿에 자바스크립트를 이용해서 다른 컴포넌트를 이 index.html 템플릿에 넣으므로 페이지를 변경해주게 된다.  
> 이 때 이 Router Router Dom 라이브러리가 새 컴포넌트로 라우팅 / 탐색을 하고 렌더링 하는데 도움을 주게 된다.


### React Router Dom 설치하기
```shell
npm install react-router-dom --save
```
