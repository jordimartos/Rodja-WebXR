import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

let coinIndex  = 1;

interface CoinComponentSchema {
   canStart: boolean;
}

export class CoinComponent extends ComponentWrapper<CoinComponentSchema> {
  constructor() {
    super('coin-component', {
      canStart: {
        type: 'boolean',
        default: false,
      },
    });
  }

  init() {
    let el = this.el;
    let data = this.data;
   
    let npc = document.getElementById('npc');
    
   

  el.addEventListener('mousedown',function(){
   if(data.canStart)
   { 
    
     moveToNextCoin(npc , el);
     data.canStart = false;
     
   }
   el.addEventListener('animation-finished',function () {
     if(coinIndex < 9)
     {
      el.setAttribute('visible','false');
      console.log('animation pickup finshed');
     }
    
   })
    
  })


  }

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}

  
}


function moveToNextCoin(npc_el:any,coin_el:any){
  ////console.log("npc :"+npc_el+" coin :"+coin_el);
 
 // console.log("track"+coinIndex+window.track);
  coin_el.setAttribute('material','color','black');
  coin_el.setAttribute('coin-component','canStart','false');
  npc_el.setAttribute('alongpath','curve','#track'+coinIndex.toString()+window.track);
  npc_el.setAttribute('alongpath','dur','8000');
  let nextCoin_el
  coinIndex ++;
  
     nextCoin_el =document.getElementById('p'+coinIndex.toString()+window.track);
 
  
    if(coinIndex < 9 )
    {
      
      nextCoin_el.setAttribute('material','color:blue');
    }
    
  




}

new CoinComponent().register();
