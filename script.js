let userName = prompt("What is your name?");
let userNum = prompt("Give any number");
let userVerb = prompt("Give a verb");
let repeatVerb = prompt("Give the same verb in -ing form")
let userMusic = prompt("Name a song");
let userSong = prompt("Name another song")
let userArtist = prompt("Name a singer/group");
let userPerson = prompt("Name a person that's not a singer")
let userEmotion = prompt("How are you feeling right now?");
let userColor = prompt("What is your favorite color?");
let userFood = prompt("Name a food");
let userAnimal = prompt("Name an animal");
let userClothing = prompt("Name a piece of clothing");

let userKitchen = prompt("Name anything in a kitchen")
// numerical variables
let numPeople = Math.ceil(Math.random() * 100);
// final round people
let numTop = Math.round(numPeople / 2);
// people in top ranking
let numRank = Math.floor(Math.random() * 5) + 1
// ranking from round 1
let userRank = Math.floor(Math.random() * numTop);
// ranking from final round
let finalRank = Math.floor(Math.random() * numTop)
console.log(userName);

// story rules
let myStory = `
<p class="welcome mx-5"> Welcome <i>${userName}</i>! You entered a survival show where you can earn up to <i>$${userNum}</i>. The choices you entered through the prompts will determine your final destiny. Let luck be by your side. Read the following cards below and click the start button when you are ready.</p>
<div class="row intro py-3">
    <div class="col-12 col-md-6 mb-3 g-2">
        <div class="card mx-auto" style="width: 18rem;">
            <div class="card-body text-center">
                <h5 class="card-title">Rules</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">(How to Play)</h6>
                <p class="card-text">
                    <ol>
                        <li>You have to survive 2 rounds and you have a chance to win <i>$${userNum}</i></li>
                        <li>You have to get in the top half of the amount of participants in order to survive.</li>
                        <li>If you are below the top half, you will be <strong>eliminated.</strong></li>
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
                    This side will show your rank and extra bonuses. You will not see the ranks of other people.<br><br> Here are the stats you will see while going through the two rounds.
                    <ul>
                    <li>You are up against <i>---</i> people.</li>
                    <li>Your current rank is <i>---</i></li>
                    <li>Extra Notes and compliments from the judges will be here</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
</div>
`;
console.log(document.getElementById("story"));

document.getElementById("story").innerHTML = myStory;
// round 1 button to show row of cards
document.getElementById("startBtn").addEventListener("click", function () {
  let roundContainer = document.getElementById("roundOneContainer");
  roundContainer.innerHTML = `
<div class="round-content row">
      <h2 class="py-1">&#127900 Round 1: Music Showdown &#x1F39D</h2>
      <div class="col-12 col-md-4 mb-3 g-2">
          <div class="card mx-auto" style="width: 18rem;">
              <div class="card-body text-center">
                  <h5 class="card-title">Rules</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">(Round 1)</h6>
                  <p class="card-text">
                      <ol>
                        <li>There are two songs that were given. Your options were <i>${userMusic}</i> by <i>${userArtist}</i> and <i>${userSong}</i> by <i>${userPerson}</i>.</li>
                        <li>You will have to <i>${userVerb}</i> the song and you will be judged by <i>${userPerson}</i> and <i>${userArtist}</i></li>
                        <li>You have to get top <i>${numTop}</i> in order to survive.</li>
                        <li>If not, you will be <strong>eliminated.</strong></li>
                        <li>Those who rank top <i>${numRank}</i> will have extra time and given better quality materials for the next round.</li>
                        <li>And lastly...good luck!</li>
                    </ol>
                  </p>
              </div>
          </div>
      </div>
      <div class="col-12 col-md-4 mb-3 g-2">
          <div class="card mx-auto" style="width: 18rem;">
              <div class="card-body text-center">
                  <h5 class="card-title">Your Results</h5>
                  <p class="card-text">
                    Welcome <i>${userName}</i> to Music Showdown!
                      <ul>
                      <li>You were assigned with <i>${userMusic}</i> and you hated it.</li>
                      <li>You tried your best to <i>${userVerb}</i> but it failed</li>
                      <li><i>${userArtist}</i> said that you suck at <i>${repeatVerb}</i>.</li>
                      <li>However, <i>${userPerson}</i> pitied you because you worked so hard.</li>
                      <li>You felt <i>${userEmotion}</i> about the outcome.</li>
                      <li>You made it to the next round.</li>
                      </ul>
                  </p>
              </div>
          </div>
      </div>
      <div class="col-12 col-md-4 mb-3 g-2">
          <div class="card mx-auto" style="width: 18rem;">
              <div class="card-body text-center">
                  <h5 class="card-title">Your Stats</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">(Round 1)</h6>
                  <p class="card-text">
                      <ul>
                      <li>You were up against <i>${numPeople}</i> people.</li>
                      <li>Your rank is <i>${userRank}</i></li>
                      <li>You were lucky that <i>${userPerson}</i> pitied you or else you would have been eliminated...</li>
                      <li>It's funny how you beat everyone on your team.</li>
                      <li>You figured that your <i>${userColor} ${userClothing}</i> gave you luck since you wore it to the competition.</li>
                      </ul>
                  </p>
              </div>
          </div>
      </div>
  </div>
    `;
    this.style.display = 'none'
});
// round 2 = final round, button to show row of cards
document.getElementById("nextRoundBtn").addEventListener("click", function () {
    let roundContainer = document.getElementById("roundTwoContainer");
    roundContainer.innerHTML = `
      <div class="round-content row">
      <h2 class="py-1">Final Round: OverCooked</h2>
      <div class="col-12 col-md-4 mb-3 g-2">
          <div class="card mx-auto" style="width: 18rem;">
              <div class="card-body text-center">
                  <h5 class="card-title">Rules</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">(Final Round)</h6>
                  <p class="card-text">
                  If you were in the top <i>${numRank}</i>, you got an extra 30 minutes in the cooking process and will be placed in an expensive kitchen.
                      <ol>
                          <li>This is the final round so give it your all!!!</li>
                          <li>You will have to make 5 servings of the food of your choice in 2 hours.</li>
                          <li>The main thing is to NOT burn the kitchen</li>
                          <li>You will be judged (again....) by <i>${userPerson}</i></li>
                          <li>It must have a very appetizing look</li>
                          <li>And lastly...good luck!</li>
                      </ol>
                  </p>
              </div>
          </div>
      </div>
      <div class="col-12 col-md-4 mb-3 g-2">
          <div class="card mx-auto dead" style="width: 18rem;">
              <div class="card-body text-center">
                  <h5 class="card-title">Your Results</h5>
                  <p class="card-text">
                      <ul class="died">
                      <li>You chose to make <i>${userFood}</i> for this round.</li>
                      <li>You thought you could easily make it but that backfired quickly.</li>
                      <li>You entered the kitchen and saw the <i>${userKitchen}</i></li>
                      <li>Your <i>${userClothing}</i> caught on fire while using the <i>${userKitchen}</i></li>
                      <li>The first thing you saw was an strange animal.</li>
                      <li>You ran to a <i>${userColor} ${userAnimal}</i>  which actually killed you instead.</li>
                      </ul>
                  </p>
              </div>
          </div>
      </div>
      <div class="col-12 col-md-4 mb-3 g-2">
          <div class="card mx-auto dead" style="width: 18rem;">
              <div class="card-body text-center">
                  <h5 class="card-title">Your Stats</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">(Final Round)</h6>
                  <p class="card-text">
                      <ul class="died">
                      <li>You are up against <i>${numTop}</i> people.</li>
                      <li>Your rank would have been <i>${finalRank}</i></li>
                      <li>You didn't survive long enough as the judge never tried your food.</li>
                      <li>You had so much potential to rank much higher...maybe if you didn't run to <i>${userColor} ${userAnimal}</i></li>
                      <li>May you rest in peace</li>
                      </ul>
                  </p>
              </div>
          </div>
      </div>
  </div>
      `;
      this.style.display = 'none'
  });
