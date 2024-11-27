let userName = prompt("What is your name?");
let userNum = prompt("Give any number");
let userVerb = prompt("Give a verb");
let userMusic = prompt("Name a song");
let userArtist = prompt("Name a singer/group");
let userEmotion = prompt("How are you feeling right now?");
let userColor = prompt("What is your favorite color?");
let userFood = prompt("Name a food");
let userAnimal = prompt("Name an animal");
let userClothing = prompt("Name a piece of clothing");
let userSong = prompt("Give a song")
let userPerson = prompt("Name any person that's not an artist")
let userKitchen = prompt("Name anything in a kitchen")
// numerical variables
let numPeople = Math.ceil(Math.random() * 100);
let numTop = Math.round(numPeople / 2);
let numRank = Math.floor(Math.random() * 5) +1
let userRank = Math.floor(Math.random() * numTop);
let finalRank = Math.floor(Math.random() * numTop)
console.log(userName);

// story rules
let myStory = `
<p class="welcome"> Welcome <i>${userName}</i>! You entered a survival show where you can earn up to <i>$${userNum}</i>. You are up against <i>${numPeople}</i> people.</p>
<div class="row intro">
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
                    This side will show what rank you are in, how many people you are up against, and how much money you have. You will not see the ranks of other people.<br> Here are the stats you will see while going through the two rounds.
                    <ul>
                    <li>You are up against <i>${numPeople}</i> people.</li>
                    <li>Your current rank is <i>---</i></li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
</div>
`;
console.log(document.getElementById("story"));

document.getElementById("story").innerHTML = myStory;
// round 1
document.getElementById("startBtn").addEventListener("click", function () {
  let roundContainer = document.getElementById("roundOneContainer");
  roundContainer.innerHTML = `
    <div class="round-content row">
    <h2>Round 1: Music Showdown</h2>
    <div class="col-12 col-md-4 mb-3 g-2">
        <div class="card mx-auto" style="width: 18rem;">
            <div class="card-body text-center">
                <h5 class="card-title">Rules</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">(Round 1)</h6>
                <p class="card-text">
                    <ol>
                        <li>There are two songs that were given. Your options were <i>${userMusic}</i> by <i>${userArtist}</i> and ${userSong} by <i>${userPerson}</i>.</li>
                        <li>You will have to ${userVerb} to the song and you will be judged by ${userPerson} and ${userArtist}</li>
                        <li>You have to get top <i>${numTop}</i> in order to survive.</li>
                        <li>If you are below the top <i>${numTop}</i>, you will be <strong>eliminated.</strong></li>
                        <li>Those who rank top <i>${numRank}</i> will have extra time and given better quality materials for the next round.</li>
                        <li>And lastly...good luck!</li>
                    </ol>
                </p>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-4 mb-3 g-2 py-3">
        <div class="card mx-auto" style="width: 18rem;">
            <div class="card-body text-center">
                <h5 class="card-title">Your Results</h5>
                <p class="card-text">
                Welcome ${userName} to Music Showdown!
                    <ul>
                    <li>You were assigned with <i>${userMusic}</i></li>
                    <li>You felt ${userEmotion} this option but you prefered <i>${userSong}</i></li>
                    <li>You have to <i>${userVerb}</i> to ${userMusic} by ${userArtist}</li>
                    <li>You are up against <i>${numPeople}</i> people.</li>
                    <li></li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-4 mb-3 g-2">
        <div class="card mx-auto" style="width: 18rem;">
            <div class="card-body text-center">
                <h5 class="card-title">Your Stats</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">(How to Play)</h6>
                <p class="card-text">
                    <ul>
                    <li>You are up against <i>${numPeople}</i> people.</li>
                    <li>Your current rank is <i>${userRank}</i></li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
    
</div>
    `;
    this.style.display = 'none'
});
// round 2 = final round
document.getElementById("nextRoundBtn").addEventListener("click", function () {
    let roundContainer = document.getElementById("roundTwoContainer");
    roundContainer.innerHTML = `
      <div class="round-content row">
      <h2>Final Round: Cooking Frenzy</h2>
      <div class="col-12 col-md-4 mb-3 g-2">
          <div class="card mx-auto" style="width: 18rem;">
              <div class="card-body text-center">
                  <h5 class="card-title">Rules</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">(Round 1)</h6>
                  <p class="card-text">
                      <ol>
                          <li>This is the final round so give it your all!!!</li>
                          <li>You will have to make 5 servings of the food of your choice</li>
                          <li>The main thing is to NOT burn the kitchen</li>
                          <li>You will be judged (again....) by ${userPerson}</li>
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
                      <ul>
                      <li>You chose to make ${userFood} for this round.</li>
                      <li>You thought you could easily make it but that backfired quickly.</li>
                      <li>Your ${userClothing} caught on fire while using the ${userKitchen}</li>
                      <li>You ran to a ${userColor} ${userAnimal} which actually killed you instead.</li>
                      <li>Your rank would have been <i>${finalRank}</i></li>
                      </ul>
                  </p>
              </div>
          </div>
      </div>
      <div class="col-12 col-md-4 mb-3 g-2">
          <div class="card mx-auto" style="width: 18rem;">
              <div class="card-body text-center">
                  <h5 class="card-title">Your Stats</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">(How to Play)</h6>
                  <p class="card-text">
                      <ul>
                      <li>You are up against <i>${numTop}</i> people.</li>
                      <li>Your current rank is <i>${finalRank}</i></li>
                      </ul>
                  </p>
              </div>
          </div>
      </div>
  </div>
      `;
      this.style.display = 'none'
  });