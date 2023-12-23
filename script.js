let PointsPlayer = document.querySelector('#PlayerPoints');
let PointsMachine = document.querySelector('#MachinePoints');
let Trof_player = document.querySelector('.img_Trof_player')
let Trof_Nemesys = document.querySelector('.img_Trof_Nemesys')
let playergam = document.querySelector('#play')

let Jogador = prompt("Nome do Jogador ?")

function music(){         
let audioArr=document.getElementsByTagName('audio');
console.log(audioArr);
audioArr[0].play()
}setInterval(music,500); 


const infor ="Quem chegar a 5 pontos será o novo Campeão.";
alert("Atenção as Regras :" + infor )

const music_ganhou=()=>{
let audioArr=document.getElementsByTagName('audio');
audioArr[1].play()
}
const music_Derrota=()=>{  
let audioArr=document.getElementsByTagName('audio');
audioArr[2].play()
}
const music_acertt=()=>{ 
let audioArr=document.getElementsByTagName('audio');
audioArr[3].play()
}
const music_Empate=()=>{  
let audioArr=document.getElementsByTagName('audio');
audioArr[4].play()
}
const erro=()=>{    
let audioArr=document.getElementsByTagName('audio');
audioArr[5].play()
}


let scoreplayer = 0;       // Player points
let scoreMachine = 0;     // Stitches Machine


// ultilizado para altações futuras sem comprometer a aplicação
// const GAME_OPTION = {
//    PEDRA: ' Stone',
//    PAPEL: ' Paper',
//    TESOURA: 'scissors',
// }

// arrow function pegando a escolha do usuario. 
// aqui esta armazendo a opção do jogador com a opção da machine e a logica do game ao clicar no onclick
const OpcaoPlayer = (optionchosen) => {
   PlayGame(optionchosen, MachinePlay())
   EventWinner()
  
}
// sorteio da opção escolhida da maquina de 0 a 3
const MachinePlay = () => {
   let PlayMachine = document.querySelector('#PlayMachine')
   const move = ['Stone', 'Paper', 'scissors',]
   const RaffleMachine = Math.floor(Math.random() * 3);
   
   if(RaffleMachine== 0){
      PlayMachine.src="arsset/rock.png";
   }else if( RaffleMachine==1){
      PlayMachine.src="arsset/paper.png";
   }else{
      PlayMachine.src="arsset/tesoura.png";
   }
   return move[RaffleMachine]




}
// logica do jogo
const PlayGame = (Player, Machine) => {
   // console.log('Player:' + Player + 'Machine:' + Machine)

   if (Player === Machine) {
      Trof_player.src = "arsset/cubodeempat-.png";
      Trof_Nemesys.src = "arsset/cubodeempat-.png";
      music_Empate()

   } else if ((Player == 'Paper' && Machine == 'Stone')
      || (Player == 'Stone' && Machine == 'scissors')
      || (Player == 'scissors' && Machine == 'Paper')) {
      scoreplayer++;
      PointsPlayer.innerHTML = `Pts: ${scoreplayer}`;
      Trof_player.src = "arsset/mario.happy.png";
      Trof_Nemesys.src = "arsset/casco.Broser.png";
      music_acertt()
     

   } else {
      scoreMachine++;
      PointsMachine.innerHTML = `Pts: ${scoreMachine}`;
      Trof_player.src = "arsset/mario.cry.png";
      Trof_Nemesys.src = "arsset/boss.atack.png";
      erro()

   }
}


// exibe para o vencedor
const EventWinner = () => {
   let Game = document.querySelector('.box');
   let scoreMax = scoreplayer;


   if (scoreMax === 5) {
      PointsPlayer.innerHTML = `${Jogador} Champions`;
      Trof_player.src = "arsset/mario.png";
      Trof_Nemesys.src = "arsset/casco.Broser.png";

      Game.innerHTML = `  <button>
      <img src="arsset/mario.png" class="imgGame2" />
                    </button>
                    </br>
                    <button type="submit" id="Restart">Play</button>
                    `
                    music_ganhou();
                    reniciar()
   } else {
      let scoreMax = scoreMachine;

      if (scoreMax === 5) {
         PointsMachine.innerHTML = `Enemy Champions`;
         Trof_Nemesys.src = "arsset/amigodoboss.png";
         Trof_player.src = "arsset/mario.derrotado.png";
        
         Game.innerHTML = `  <button>
         <img src="arsset/boss.victoria.png" class="imgGame2" />
                       </button>
                       </br>  </br>
                       <button type="submit" id="Restart">Play</button>
                 
                      `      
                     music_Derrota()
                     reniciar()
         
      }

   }
}


function reniciar(){
   
let BtnStart = document.querySelector('#Restart');
BtnStart.addEventListener('click',()=>{
location.reload();  
})
}