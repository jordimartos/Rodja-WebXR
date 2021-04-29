import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface CoinDistarctorComponentSchema {
   canStart: boolean,
   myNumber:number,
   myTrack:number;
}

export class CoinDistractorComponent extends ComponentWrapper<CoinDistarctorComponentSchema> {
  constructor() {
    super('coin-distractor', {
        canStart: {
        type: 'boolean',
        default: true,
      },
      myNumber:{
          type:'number',
        default:1
      },
      myTrack:{
        type:'number',
        default:1
      }
    });
  }

  init() {
   console.log('distractor exist');
   let newpos:any;
   let random:number=0;
   let data = this.data;
   let targets = document.querySelectorAll(".target"+data.myNumber.toString()+window.track.toString())
   console.log(targets);
   let el =this.el
   

  if(sessionStorage.getItem('level') == '3')
  {
    el.setAttribute('data','canStart','true');
  }

   let startDsMovement= function cycle(index:any) 
   {

     setTimeout(function() 
     {
console.log('called')


 
  newpos=targets[random].getAttribute("position");
  el.setAttribute("animation","property:position; to:"+newpos.x+" 0.2 "+newpos.z+" dur:2000"); 
 
  
      
       if (random ==0) 
       {
            
            random = 1; 
       }else{
           random = 0
       }
      

         cycle(random);
   
   
     },2000);
 }
 if(data.myTrack == window.track &&sessionStorage.getItem('level') == '3')
 {
  startDsMovement( targets.length);
 }
 
   
  }



  

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new CoinDistractorComponent().register();
