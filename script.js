let userName = prompt('What is your name?')
let userNum = prompt('Give any number')
let userVerb = prompt('Give a verb')
let numPeople = Math.ceil(Math.random() * 100)
let numTop = Math.round(numPeople / 2)
let numRound = Math.floor(Math.random() * 6) +1
let numRank = Math.floor(Math.random()*5)
let userMusic = prompt('Name a song')
let userArtist = prompt('Name a singer/group')
let userEmotion = prompt('How are you feeling right now?')
let userColor = prompt('What is your favorite color?')
let userFood = prompt('Name a fruit/vegetable')
console.log(userName)

let myStory = `
<p> Welcome <i>${userName}</i>! You entered a survival show where you can earn up to <i>$${userNum}</i>. You are up against <i>${numPeople}</i> people.</p>
<h5>Here are the rules:</h5>
<ol>
<li>You have to survive <i>${numRound}</i> rounds and you have a chance to win <i>$${userNum}</i></li>
<li>You have to get top <i>${numTop}</i> in order to survive.</li>
<li>If you are below the top <i>${numTop}</i>, you will be <strong>eliminated.</strong></li>
<li>Those who rank top <i>${numRank}</i> will have special benefits in each round.</li>
<li>And lastly...good luck!</li>
</ol>
`

console.log(document.getElementById('story'))

document.getElementById('story').innerHTML = myStory