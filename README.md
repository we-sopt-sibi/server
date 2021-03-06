# ๐ 29th SOPT ํฉ๋์ธ๋ฏธ๋

## 12์กฐ - Brunch Server

## Developer

[๊ตฌ๊ฑด๋ชจ](https://github.com/gunom)

```
- ํน์  ๊ฒ์๊ธ ์กฐํ ๊ตฌํ (articleGET)
- ์ข์์ ๊ธฐ๋ฅ ๊ตฌํ (likePOST)
```

[์กฐ์ค์](https://github.com/healing99)

```
- ์ ์ฒด ๊ฒ์๊ธ ์กฐํ ๊ตฌํ (articleListGET)
- ๋๊ธ ์์ฑ ๊ตฌํ (commentPOST)
```

## ๐ป Code Convention

### ๐ฌ Commit Message Rules

```
[feat] : ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ
[update] : ๊ธฐ์กด ํ์ผ ์์  ๋ฐ ๋ณด์
[fix] : ๋ฒ๊ทธ ์์ 
[docs] : ๋ฌธ์ ์ถ๊ฐ, ์์  ๋ฐ ๋ณ๊ฒฝ
[style] : ์ฝ๋ ํฌ๋งทํ, ๋ก์ง์ ๋ณํ๋ ์์ด ๋์ด์ฐ๊ธฐ๋ ํญ ๋ฌธ์ ๋ฑ์ ์ฌ์ํ ๋ณํ
[refactor] : ๋ฆฌํฉํ ๋ง
[test] : ํ์คํธ ์ฝ๋ ์์  ๋ฐ ๋ณ๊ฒฝ (๋ก์ง ๋ณํ ์์)
[chore] : ๊ทธ ์ธ์ ๋ณ๊ฒฝ์ฌํญ (์ฃผ์ ์ถ๊ฐ, ์ญ์  ๋ฑ)
```

**Example**

```
[feat] : ๋ก๊ทธ์ธ api ์ถ๊ฐ
[fix] : ํ์๊ฐ์ ๋ฒ๊ทธ ์์ 
```

### Branches

- `main` : ๋ฉ์ธ ๋ธ๋์น
- `main`์ ์ง์ ์ ์ธ commit, push๋ ๊ฐ๊ธ์  ๊ธ์งํฉ๋๋ค
- ์์ ์ , ๋ฐ๋์ `main` ๋ธ๋์น๋ฅผ pull ๋ฐ๊ณ  ์์ํฉ๋๋ค
  ```
  git pull origin main
  ```
- `feature/๊ธฐ๋ฅ` : ํด๋น ๊ธฐ๋ฅ ๊ฐ๋ฐ ๋ธ๋์น
  ```
  git branch feature/๊ธฐ๋ฅ
  ```
- ์์ ๊ธฐ๋ฅ๋ณ๋ก `commit message rules`์ ๋ฐ๋ผ ์ปค๋ฐ์ ์งํํฉ๋๋ค
- ์์ ์๋ฃ ์ `main` ๋ธ๋์น๋ก Pull Request๋ฅผ ๋ณด๋๋๋ค
- ํ์๊ณผ ์ฝ๋๋ฆฌ๋ทฐ๋ฅผ ์งํํ ํ, ์ต์ข์ ์ผ๋ก `main` ๋ธ๋์น๋ก mergeํฉ๋๋ค
- ๋ค ์ด ๋ธ๋์น๋ ์ญ์ ํฉ๋๋ค

## ๐ Folder Structure

```
๐ฆfunctions
โฃ ๐api
โ โฃ ๐routes
โ โ โฃ ๐article
โ โ โ โฃ ๐articleListGET.js
โ โ โ โฃ ๐articleGET.js
โ โ โ โฃ ๐likePOST.js
โ โ โ โฃ ๐index.js
โ โ โฃ ๐comment
โ โ โ โฃ ๐commentPOST.js
โ โ โ โฃ ๐index.js
โฃ ๐config
โ โฃ ๐dbConfig.js
โฃ ๐constants
โ โฃ ๐responseMessage.js
โ โฃ ๐statusCode.js
โฃ ๐db
โ โฃ ๐db.js
โ โฃ ๐article.js
โ โฃ ๐like.js
โ โฃ ๐comment.js
โ โฃ ๐index.js
โฃ ๐lib
โ โฃ ๐util.js
โ โฃ ๐convertSnakeToCamel.js
โฃ ๐.eslintrc.js
โฃ ๐.prettierrc.js
โฃ ๐index.js
```

## ๐ Dependencies Module

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

## โจ Base URL

```
https://asia-northeast3-wesopt29-4788e.cloudfunctions.net/api
```

## ERD Diagram

<img src="https://user-images.githubusercontent.com/49135797/143545629-697daaff-dc66-4939-97da-39920b888962.png" width = "400" height = "420">

## API ๋ช์ธ์

### ๐ [API ๋ช์ธ์](https://www.notion.so/storypanda/API-1e4d893dbdf74acf9102518fbdc4075d)
