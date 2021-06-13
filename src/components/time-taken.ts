import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface TimeTakenSchema {
   canStart: boolean;
}

declare global {
    interface Window { timeTaken: number;startTime:any }
}



export class timeTakenComponent extends ComponentWrapper<TimeTakenSchema> {
  constructor() {
    super('time-taken', {
        canStart: {
        type: 'boolean',
        default: false,
      },
    });
  }

  init() {
  
    let el = this.el;
    let data = this.data ;
    let timer:any ;
    let current = new Date();
  
    
   timer = setInterval(() => { 
     
}, 1000);

 
el.addEventListener('stop',function(){
  clearInterval(timer);
})
    
  
 
   
  }

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new timeTakenComponent().register();
