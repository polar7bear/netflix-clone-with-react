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
