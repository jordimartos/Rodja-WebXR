
import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

let currentCoinIndex = 1;
interface NPCRotattionSchema {
  readonly canStart: boolean;
}

export class NPCRotation extends ComponentWrapper<NPCRotattionSchema> {
  constructor() {
    super('npc-rotation', {
      canStart: {
        type: 'boolean',
        default: false,
      },
    });
  }

  init() {
    let el = this.el;
 
    let nextCoin:any;
   
    let magnitude :number;
    el.setAttribute('look-at','#p11');
   

  el.addEventListener('movingended',function(){
    
    currentCoinIndex ++;
   if (currentCoinIndex < 9)
   {
    el.setAttribute('look-at','#p'+currentCoinIndex.toString()+window.track);
    console.log('rotation updated');
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

   
}

new NPCRotation().register();
