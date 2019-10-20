const choices = document.querySelectorAll('.choice');
const score =document.getElementById('score') ; 
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal =document.querySelector('.modal');
const btn = document.querySelector('.restart-btn');
const scoreboard = {
    player : 0 ,
    computer :0 
}
 //Play game 
 function play(el)
 {
     restart.style.display = 'inline-block' ; 
     const playerChoice = el.target.id ; 
     const computerChoice = getComputerChoice() ; 
     
     const winner = getWinner(playerChoice,computerChoice) ; 
     console.log(playerChoice,computerChoice,winner) ; 
     showWinner(winner,computerChoice);
      
 }
 //Get computer's choice
 function getComputerChoice()
 {
     const rand = Math.random() ; 
     if (rand<0.34)
     {
         return 'grab' ; 
     }
     else if (rand <=0.67)
     {
         return 'paper' ; 
     }
     else 
     {
         return 'scissors' ; 
     }
 }

 function getWinner(p,c)
 {
    if (p === c)
    {
        return 'draw' ; 
    }
    else if (p === 'grab' && c === 'scissors')
    {
        return 'Player' ; 
    }
    else if (p=== 'grab' && c=== 'paper')
    {
        return 'Computer' ; 
    }
    else if (p==='paper' && c==='grab')
    {
        return 'Player' ; 
    }
    else if (p==='paper' && c==='scissors') 
    {
        return 'Computer' ; 
    }
    else if (p==='scissors' && c==='grab')
    {
        return 'Computer' ; 
    }
    else 
    {
        return 'Player' ; 
    }
 }

 //to show winner 
 function showWinner(winner,computerChoice)
 {
    if (winner === 'Player')
    {
        scoreboard.player++ ; 
        result.innerHTML=`<h1 class='text-win'>You Win !</h1>
        <i class= "fa fa-hand-${computerChoice}-o" style="font-size:80px"></i>
        <p>Computer choose <strong>${computerChoice}</strong></p>`;
    }
    else if (winner ==='Computer')
    {
        scoreboard.computer++ ; 
        result.innerHTML=`<h1 class='text-lose'>You Lose !</h1>
        <i class= "fa fa-hand-${computerChoice}-o" style="font-size:80px"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>`;
    }
    else 
    {
        result.innerHTML=`<h1>It's a draw !</h1>
        <i class= "fa fa-hand-${computerChoice}-o" style="font-size:80px"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>`;
    }

    //show score 
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer : ${scoreboard.computer}</p>
    ` ;

    modal.style.display="block";

 }

 function clearModal(e)
 {
    if (e.target == modal)
    {
        modal.style.display = 'none' ; 
    }
 }
 function restartGame ()
 {
     scoreboard.player = 0 ; 
     scoreboard.computer = 0 ; 
     score.innerHTML=`
     <p>Player : 0</p>
     <p>Computer : 0</p>
     `;
     btn.style.display = 'none' ;

 }
 choices.forEach(choice => choice.addEventListener('click', play)) ;  
 window.addEventListener('click',clearModal);
 restart.addEventListener('click',restartGame); 