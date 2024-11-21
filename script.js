let userName = prompt('What is your name?')
let userPlace = prompt('Give a place')
let userNum = Math.floor(Math.random()*2000)
let userMusic = prompt('Name a song')
let userArtist = prompt('Name a singer/group')
let userEmotion = prompt('How are you feeling right now?')
let userColor = prompt('What is your favorite color?')
let userFood = prompt('Name a fruit/vegetable')
let userVerb = prompt('Give a verb that ends in -ing')
console.log(userName)

let myStory = `
<p> Welcome <i>${userName}</i>! You arrived at <i>${userPlace}</i>  and you arrived with no belongings.</p>
<p> You only have $<i>${userNum}</i> in your bank account.</p>
<p>You hear <i>${userMusic}</i>, by <i>${userArtist}</i> which makes you <i>${userEmotion}</i>.</p> <p>You started to feel a little hungry and you were craving <i> ${userColor} ${userFood}</i>.</p>
<p>You see <i>${userName}</i> oh wait...that's YOU in jail?!?!?</p>
`

console.log(document.getElementById('story'))

document.getElementById('story').innerHTML = myStory