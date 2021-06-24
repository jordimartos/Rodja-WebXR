import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';



let nextCoinIndex =2;
let coinMaxNumber = 3;
let currentCoinIndex = 1;
interface NPCComponentSchema {
  readonly canStart: boolean;
}

export class NPCComponent extends ComponentWrapper<NPCComponentSchema> {
  constructor() {
    super('npc-component', {
      canStart: {
        type: 'boolean',
        default: false,
      },
    });
  }

  init() {
    let el = this.el;
    let startPos = document.getElementById('start'+window.track);
    let nextCoin = document.getElementById('p'+nextCoinIndex.toString()+window.track);
    let isStartVoicePlayed:boolean = false;
   
   
    
    
    console.log('next coin '+nextCoinIndex)
    el.setAttribute('sound','src','#welcome-sound');
    el.setAttribute('sound','playSound');
   
   
    
    el.setAttribute('position', startPos.getAttribute('position'));
    console.log(startPos.getAttribute('position'));
    console.log(el.getAttribute('position',))

  el.addEventListener('movingended',function(){
    nextCoin = document.getElementById('p'+nextCoinIndex.toString()+window.track);
    showNextCoin(nextCoin);
  })
  el.addEventListener('sound-ended',function(){
    if(!isStartVoicePlayed)
    {
      
      console.log('yalla');
      el.setAttribute('sound','src','#ready-sound');
    el.setAttribute('sound','playSound');
    isStartVoicePlayed = true;
    }

  })


  }

  update() {}
 
  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}


function showNextCoin(nextCoin_el:any){
 console.log("npc arrived");
 if(nextCoinIndex < 9)
 {
  let coin = document.getElementById('p'+currentCoinIndex.toString()+window.track);
  coin.setAttribute('animation-mixer','clip:Jewel_pickup_anim');
  coin.setAttribute('animation-mixer','loop:once')
  
  nextCoin_el.setAttribute('visible','true');
  nextCoin_el.setAttribute('coin-component','canStart:true');
  nextCoinIndex ++;
  currentCoinIndex ++;
 }
 else{
  
  let chest = document.getElementById('p'+currentCoinIndex.toString()+window.track);
 chest.setAttribute('animation-mixer','loop:once');
 chest.setAttribute('animation-mixer','clampWhenFinished:true');
  chest.setAttribute('animation-mixer','timeScale:0.5');
  /*
  setTimeout(function () 
  
  {
    
  }, 5000);*/
  
 }
 
   
}

new NPCComponent().register();
