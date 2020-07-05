var score, roundscore,activeplayer,gamePlaying,input;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){

if(gamePlaying){
     //random number
   var dice=Math.floor(Math.random() * 6)+1;
 
   //display the result
   var dicedom=document.querySelector('.dice');
   dicedom.style.display='block';
   dicedom.src= 'dice-' + dice + '.png';

   //update the score
   if(dice !== 1){
           
    roundscore += dice;
    document.querySelector('#current-' + activeplayer).textContent=roundscore;
   }

   else{
    nextplayer();
    
   }
}
});

document.querySelector('.btn-hold').addEventListener('click' ,function(){
     if(gamePlaying){
        score[activeplayer] += roundscore;

        document.querySelector('#score-' + activeplayer).textContent=score[activeplayer];
         input=document.querySelector('.final-score').value;
        var winingscore;

        if (input){
          winingscore=input;
        }
        else{
          winingscore=100;
        }
    
        if(score[activeplayer] >=winingscore){
                     document.querySelector('#name-' + activeplayer).textContent='WINNER!!'
                     document.querySelector('.dice').style.display='none';
                     document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner')
                     document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
                     gamePlaying=false;
        }
        else{
        nextplayer();
        }
     }
});
function nextplayer(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;

    
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
 

      document.querySelector('.dice').style.display='none'
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    score=[0,0];
roundscore=0;
activeplayer=0;
gamePlaying=true;


// document.querySelector('#current-' + activeplayer).textContent= dice;

// var x= document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent='0';

document.getElementById('score-1').textContent='0';

document.getElementById('current-0').textContent='0';

document.getElementById('current-1').textContent='0';
document.querySelector('.final-score').textContent='0';

document.getElementById('name-0').textContent='Player 1';

document.getElementById('name-1').textContent='Player 2'
document.querySelector('.player-0-panel').classList.remove('winner')
document.querySelector('.player-1-panel').classList.remove('winner')
document.querySelector('.player-0-panel').classList.remove('active')
document.querySelector('.player-1-panel').classList.remove('active')
document.querySelector('.player-0-panel').classList.add('active')

}


























