let userName = prompt('WHO ARe YOU')
let userQuest = prompt('Whay is your quest?')
let userFavColor = prompt('What is your favorite color?')
let swallowAirSpeed = prompt('What is the air speed of an unlaiden sawllow')
console.log(userName)


let myStory = `
<p> Hello ${userName}. Answer me these questions <spam class="loud">three</span>, and the other side you'll work.</p>
<p> I see you have already answered, so your quest is ${userQuest}.</p>
`
console.log(document.getElementById('story'))

document.getElementById('story').innerHTML = myStory