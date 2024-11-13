let userName = prompt('What is your name?')
let userQuest = prompt('Give a noun')
let userFavColor = prompt('Give a color')
let userNum = prompt('Give any number over 0')
console.log(userName)


let myStory = `
<p> Welcome <i>${userName}</i>! You just entered a survival show and you have to give it your all in order to make it up the ranks to debut in a group.</p>
<p> You are up against <i>${userNum}<i>.</p>
`
console.log(document.getElementById('story'))

document.getElementById('story').innerHTML = myStory