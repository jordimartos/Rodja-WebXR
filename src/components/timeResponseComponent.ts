import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface TimeResponseSchema {
   canStart: boolean;
}

declare global {
    interface Window { TimeResponse: number; }
}



export class TimeResponseComponent extends ComponentWrapper<TimeResponseSchema> {
  constructor() {
    super('response-component', {
        canStart: {
        type: 'boolean',
        default: false,
      },
    });
  }

  init() {
  
    let el = this.el;
    let data = this.data ;
    let timer:any;
  
    
    timer = setInterval(() => { 
      if(data.canStart)
      {
      }
        
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

new TimeResponseComponent().register();
