////建立MVC中的Controller////
////建立伺服器////


////載入框架與套件
const express = require('express') //import express
const app = express() //用app來呼叫express函式
const mongoose = require('mongoose') //import mongoose
const exphbs = require('express-handlebars') //import handlebars
const URLs = require('./models/urls') //import urls model
const generateShortenURL = require('./utils/shorten')
let endingOfTheShortenURL = '' //用於暫存'產生的5碼亂碼'


////設定埠口
const port = process.env.PORT||3000


////連接資料庫
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  } //僅在非正式環境時, 使用'dotenv'

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) //connect to mongoDB


////設定樣板引擎
app.engine('hbs', exphbs({defaultLayout: 'main', extname:'.hbs'})) //建立樣板引擎'hbs', 使用'布局(main.hbs)'
app.set('view engine', 'hbs') //啟用樣板引擎'hbs'


////取得資料庫連線狀態
const db = mongoose.connection

db.on('error', () =>{
    console.log('mongodb error!!!')
}) //report connection error

db.once('open', () =>{
    console.log('mongodb connected!!!')
}) //report successful connection


////取得表單內容
app.use(express.urlencoded({extended: true})) //使用express內建的 body-parser


////建立路由
app.get('/', (req, res) => {
    res.render('index')
}) //建立根目錄(首頁)

app.post('/shorten', (req, res) => {
    URLs.find({originalURL: req.body.originalURL}, (error, result) => {
        if(error){
            console.log(error)
            //若錯誤則報錯
        }else if(result.length === 0 ){
            const theOriginalURL = req.body.originalURL
            endingOfTheShortenURL = generateShortenURL()
            const newURL = new URLs({ originalURL: theOriginalURL, endingOfTheShortenURL: endingOfTheShortenURL })
            return newURL.save()
            //若DB沒資料,新產生短網址
        }else{
            endingOfTheShortenURL = result[0].endingOfTheShortenURL
            //若DB有資料,則使用舊的短網址
        }
    })
    .then(() => res.redirect('/shorten'))
    .catch(error => console.log(error))
}) //蒐集表單內容, 導向短網址網頁 //先到資料庫搜尋有無短網址可以回傳,如果沒有,才產生短網址

 app.get('/shorten', (req, res) => {
    res.render('shorten', {port, endingOfTheShortenURL})
}) //建立shorten頁面(提供短網址的頁面) 


app.get('/r/:endingOfTheShortenURL', (req,res) => {
    URLs.find({endingOfTheShortenURL: req.params.endingOfTheShortenURL}, (error, result) => {
        if(error){
            console.log(error)
        }else if(result.length === 0 ){
            res.redirect('/no_such_URL')
            //若DB沒有,則回覆該網址不存在
        }else{
            res.redirect(result[0].originalURL)
            //若有該短網址,則導向原始網站
        }
    })
    .catch(error => console.log(error))
}) //使用者輸入短網址,可導向原始網站

app.get('/no_such_URL', (req,res) => {
    res.render('no_such_URL')
})


////監聽port
app.listen(port,() => {
    console.log(`App is running on port http://localhost:${port}`) //不重要,已經佈屬至Railway
}) 