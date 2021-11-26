# 💙 29th SOPT 합동세미나

## 12조 - Brunch Server

## Developer

[구건모](https://github.com/gunom)

```
- 특정 게시글 조회 구현 (articleGET)
- 좋아요 기능 구현 (likePOST)
```

[조윤서](https://github.com/healing99)

```
- 전체 게시글 조회 구현 (articleListGET)
- 댓글 작성 구현 (commentPOST)
```

## 💻 Code Convention

### 💬 Commit Message Rules

```
[feat] : 새로운 기능 추가
[update] : 기존 파일 수정 및 보완
[fix] : 버그 수정
[docs] : 문서 추가, 수정 및 변경
[style] : 코드 포맷팅, 로직의 변화는 없이 띄어쓰기나 탭 문자 등의 사소한 변화
[refactor] : 리팩토링
[test] : 테스트 코드 수정 및 변경 (로직 변화 없음)
[chore] : 그 외의 변경사항 (주석 추가, 삭제 등)
```

**Example**

```
[feat] : 로그인 api 추가
[fix] : 회원가입 버그 수정
```

### Branches

- `main` : 메인 브랜치
- `main`에 직접적인 commit, push는 가급적 금지합니다
- 작업 전, 반드시 `main` 브랜치를 pull 받고 시작합니다
  ```
  git pull origin main
  ```
- `feature/기능` : 해당 기능 개발 브랜치
  ```
  git branch feature/기능
  ```
- 작은 기능별로 `commit message rules`에 따라 커밋을 진행합니다
- 작업 완료 시 `main` 브랜치로 Pull Request를 보냅니다
- 팀원과 코드리뷰를 진행한 후, 최종적으로 `main` 브랜치로 merge합니다
- 다 쓴 브랜치는 삭제합니다

## 📂 Folder Structure

```
📦functions
┣ 📂api
┃ ┣ 📂routes
┃ ┃ ┣ 📂article
┃ ┃ ┃ ┣ 📜articleListGET.js
┃ ┃ ┃ ┣ 📜articleGET.js
┃ ┃ ┃ ┣ 📜likePOST.js
┃ ┃ ┃ ┣ 📜index.js
┃ ┃ ┣ 📂comment
┃ ┃ ┃ ┣ 📜commentPOST.js
┃ ┃ ┃ ┣ 📜index.js
┣ 📂config
┃ ┣ 📜dbConfig.js
┣ 📂constants
┃ ┣ 📜responseMessage.js
┃ ┣ 📜statusCode.js
┣ 📂db
┃ ┣ 📜db.js
┃ ┣ 📜article.js
┃ ┣ 📜like.js
┃ ┣ 📜comment.js
┃ ┣ 📜index.js
┣ 📂lib
┃ ┣ 📜util.js
┃ ┣ 📜convertSnakeToCamel.js
┣ 📜.eslintrc.js
┣ 📜.prettierrc.js
┣ 📜index.js
```

## 🏁 Dependencies Module

```
{
  "name": "functions",
  "description": "Cloud Functions for Firebase",
  "scripts": {
    "lint": "eslint .",
    "serve": "cross-env NODE_ENV=development firebase emulators:start --only functions",
    "shell": "firebase functions:shell",
    "start": "npm run shell",
    "deploy": "cross-env NODE_ENV=production firebase deploy --only functions",
    "logs": "firebase functions:log"
  },
  "engines": {
    "node": "12"
  },
  "main": "index.js",
  "dependencies": {
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "dayjs": "^1.10.7",
    "dotenv": "^10.0.0",
    "eslint-config-prettier": "^8.3.0",
    "express": "^4.17.1",
    "firebase-admin": "^9.2.0",
    "firebase-functions": "^3.11.0",
    "helmet": "^4.6.0",
    "hpp": "^0.2.3",
    "jsonwebtoken": "^8.5.1",
    "lodash": "^4.17.21",
    "pg": "^8.7.1"
  },
  "devDependencies": {
    "eslint": "^7.6.0",
    "eslint-config-google": "^0.14.0",
    "firebase-functions-test": "^0.2.0"
  },
  "private": true
}
```

## ✨ Base URL

```
https://asia-northeast3-wesopt29-4788e.cloudfunctions.net/api
```

## ERD Diagram

<img src="https://user-images.githubusercontent.com/49135797/143545629-697daaff-dc66-4939-97da-39920b888962.png" width = "400" height = "420">

## API 명세서

### 👉 [API 명세서](https://www.notion.so/storypanda/API-1e4d893dbdf74acf9102518fbdc4075d)
