////產生短網址////

////利用函式隨機產生用於短網址的5碼
function generateShortenURL(){
    let collection = []
    const NUM = '0123456789'
    const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz'
    const UPPER_CASE = LOWER_CASE.toUpperCase()

    collection = collection.concat(NUM.split(''))
    collection = collection.concat(LOWER_CASE.split(''))
    collection = collection.concat(UPPER_CASE.split(''))

    shortenURL = ''
    for (let i = 0; i < 5; i++) {
        shortenURL += collection[Math.floor(Math.random()*collection.length)]
      }

    return shortenURL
}

module.exports = generateShortenURL //輸出函式