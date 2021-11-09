const word = document.getElementById('word')
const lyrics = document.getElementById('lyrics')
const tran = document.getElementById('tran')
const next = document.getElementById('next')
const back = document.getElementById('back')
const num = document.getElementById('num')
let count = 0

next.addEventListener('click',()=>{
    count++
    load()
})
back.addEventListener('click',()=>{
    count--
    load()
})

load()
function load() {
    word.innerHTML = dataW[count].word
    lyrics.innerHTML = dataW[count].lyrics
    tran.innerHTML = dataW[count].trans
    num.innerHTML = `${count + 1} / ${dataW.length}`
}