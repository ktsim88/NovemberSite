let userName = prompt('What is your name?')
let userNum = prompt('Give any number')
let userVerb = prompt('Give a verb')
let userMusic = prompt('Name a song')
let userArtist = prompt('Name a singer/group')
let userEmotion = prompt('How are you feeling right now?')
let userColor = prompt('What is your favorite color?')
let userFood = prompt('Name a food')
let userAnimal = prompt('Name an animal')
let userPlace = prompt('Name a place')
let userClothing = prompt('Name a piece of clothing')
// numerical variables
let numPeople = Math.ceil(Math.random() * 100)
let numTop = Math.round(numPeople / 2)
let numRank = Math.floor(Math.random()*5)
console.log(userName)

// story rules
let myStory = `
<p> Welcome <i>${userName}</i>! You entered a survival show where you can earn up to <i>$${userNum}</i>. You are up against <i>${numPeople}</i> people.</p>
<div class="row">
    <div class="col-12 col-md-6 mb-3 g-2">
        <div class="card mx-auto" style="width: 18rem;">
            <div class="card-body text-center">
                <h5 class="card-title">Rules</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">(How to Play)</h6>
                <p class="card-text">
                    <ol>
                        <li>You have to survive 2 rounds and you have a chance to win <i>$${userNum}</i></li>
                        <li>You have to get top <i>${numTop}</i> in order to survive.</li>
                        <li>If you are below the top <i>${numTop}</i>, you will be <strong>eliminated.</strong></li>
                        <li>Those who rank top <i>${numRank}</i> will have special benefits in each round.</li>
                        <li>And lastly...good luck!</li>
                    </ol>
                </p>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 mb-3 g-2">
        <div class="card mx-auto" style="width: 18rem;">
            <div class="card-body text-center">
                <h5 class="card-title">Your Stats</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">(How to Play)</h6>
                <p class="card-text">
                    This side will show what rank you are in, how many people you are up against, and how much money you have. Currently you have <i>$${userNum}</i> and you are up against <i>${numPeople}</i> people.
                </p>
            </div>
        </div>
    </div>
</div>
`

console.log(document.getElementById('story'))

document.getElementById('story').innerHTML = myStory

console.log(document.getElementById('story'))

document.getElementById('story').innerHTML = myStory