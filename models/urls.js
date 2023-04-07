////建立MVC中的Model////


////載入模組與套件&連接資料庫
const mongoose = require('mongoose') //連接資料庫
const Schema = mongoose.Schema //使用mongoose的Schema模組


////建立URLs的'資料庫綱要(Schema)'
const URLSchema = new Schema({
    originalURL: {
        type: String,
        required: true
    },
    endingOfTheShortenURL: {
        type: String
    }
}) //使用者傳入原生網址, 我們生成短網址後, 存入資料庫並回傳給使用者, 所以Schema需要'舊網址'與'新網址'

module.exports = mongoose.model('URLs',URLSchema ) //輸出module, 否則app無法呼叫(會出現 URLs is not a constructor)