# so_short
A website to shorten your URL

# URL Shortener
![image](/public/images/demo.png)

## Features - 功能

1. 使用者可以輸入網址
2. 使用者點擊 Convert 後可轉換成短網址
3. 使用者可以點擊 Copy 複製短網址，並跳出複製成功訊息
4. 使用者輸入短網址可跳轉回原網址
5. 使用者輸入同樣的網址，將會產生同樣的短網址
6. 若沒有輸入 URL，則會顯示錯誤訊息


## Installation and execution - 安裝與執行步驟

1. Clone the project

2. Install the required dependencies

```
npm install
```

3. Install nodemon

```
npm i nodemon
```

4. Start the server

```
npm run dev
```

5. Execute successfully if seeing following message

```
Express is listening on localhost:3000
```

## Set Up - 環境建置

- Runtime: node @ 18.14.0
- Framework: express @ 4.18.2
- Template Engine: express-handlebars @ 4.0.2
- Database: MongoDB / mongoose @ 5.13.16
- Check package.json for other dependencies
