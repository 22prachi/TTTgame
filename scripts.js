let container=document.querySelector('.container')

let p=document.querySelector('.result')
let flex=document.querySelector('.flexclass')

let gameActive=true

for (let i=0;i<9;i++){
   container.children[i].addEventListener('click',function(event){
    if(gameActive && (container.children[i].textContent==='')){
       takeTurn(event.target.id)
    } 
   })
}


let isPlayerOneTurn = true;

function takeTurn(value) {
   
  if (isPlayerOneTurn) {
    
     document.querySelector(`#${value}`).innerHTML='O'
    } else {
     document.querySelector(`#${value}`).innerHTML='X'
  }
   isPlayerOneTurn = !isPlayerOneTurn;
   CheckWins()
}



function CheckWins(){
   
   box0= document.querySelector('#box0')
   box1= document.querySelector('#box1')
   box2= document.querySelector('#box2')
   box3= document.querySelector('#box3')
   box4= document.querySelector('#box4')
   box5= document.querySelector('#box5')
   box6= document.querySelector('#box6')
   box7= document.querySelector('#box7')
   box8= document.querySelector('#box8')
   

    if((box0.textContent === 'O') && ( box1.textContent === 'O') && (box2.textContent === 'O' ) ||
       (box3.textContent === 'O') && ( box4.textContent === 'O') && (box5.textContent === 'O' ) ||
       (box6.textContent === 'O') && ( box7.textContent === 'O') && (box8.textContent === 'O' ) ||
       (box0.textContent === 'O') && ( box3.textContent === 'O') && (box6.textContent === 'O' ) ||
       (box1.textContent === 'O') && ( box4.textContent === 'O') && (box7.textContent === 'O' ) ||
       (box2.textContent === 'O') && ( box5.textContent === 'O') && (box8.textContent === 'O' ) ||
       (box0.textContent === 'O') && ( box4.textContent === 'O') && (box8.textContent === 'O' ) ||
       (box2.textContent === 'O') && ( box4.textContent === 'O') && (box6.textContent === 'O' ) 
       
    ){
         p.style.color='rgb(118, 57, 57)'
        p.innerHTML='Congratulations , Winner is O'
        gameActive=false
        restartGame()
    }

    else if(
        (box0.textContent === 'X') && ( box1.textContent === 'X') && (box2.textContent === 'X' ) ||
        (box3.textContent === 'X') && ( box4.textContent === 'X') && (box5.textContent === 'X' ) ||
        (box6.textContent === 'X') && ( box7.textContent === 'X') && (box8.textContent === 'X' ) ||
        (box0.textContent === 'X') && ( box3.textContent === 'X') && (box6.textContent === 'X' ) ||
        (box1.textContent === 'X') && ( box4.textContent === 'X') && (box7.textContent === 'X' ) ||
        (box2.textContent === 'X') && ( box5.textContent === 'X') && (box8.textContent === 'X' ) ||
        (box0.textContent === 'X') && ( box4.textContent === 'X') && (box8.textContent === 'X' ) ||
        (box2.textContent === 'X') && ( box4.textContent === 'X') && (box6.textContent === 'X' ) 
        ){ 
            p.style.color='rgb(19, 75, 172)'
            p.innerHTML='Congratulations , Winner is X'
            gameActive=false
            restartGame()
        }

        else if(checkDraw()){
           p.style.backgroundColor='rgb(225, 152, 41)'
            p.innerHTML='It was Draw'
            gameActive=false
            restartGame()
        }
  
    }

    function checkDraw(){
        for(let i=0;i<9;i++){
            if(container.children[i].textContent===''){
            return false
        }
        }
        return true
    }
 
 
   function restartGame(){

    let existingRestartDiv = document.querySelector('.restart-div');
    if (existingRestartDiv) {
        existingRestartDiv.remove();
    }

    let newgame=document.createElement('div')
    newgame.className = 'restart-div';
    newgame.innerHTML=`<h4 id='newGame'>Click to start New Game</h4>`
    newgame.style.backgroundColor='rgb(182, 39, 113)'
    newgame.style.borderRadius = '5px';
   
    newgame.style.cursor = 'pointer';
    newgame.addEventListener('mouseover',function(){
        newgame.classList.add('hover-effect')
    })
    newgame.addEventListener('mouseout',function(){
        newgame.classList.remove('hover-effect')
    })
   
    flex.append(newgame)
    newgame.addEventListener('click',function(){
        for (let i = 0; i < 9; i++) {
            container.children[i].textContent = '';
        }
        isPlayerOneTurn = true;
        gameActive = true;
        p.innerHTML = 'Result';
        newgame.remove()
      
    })
    
   }
 
