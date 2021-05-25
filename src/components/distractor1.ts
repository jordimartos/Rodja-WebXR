import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface Distractor1ComponentSchema {
   canStart: boolean;
}

export class Distractor1Component extends ComponentWrapper<Distractor1ComponentSchema> {
  constructor() {
    super('distrctor1-component', {
        canStart: {
        type: 'boolean',
        default: true,
      },
    });
  }

  init() {
   //console.log('distractor exist');
   let newpos:any;
   let random:number=0;
     let track:string = sessionStorage.getItem('road');
   let target:string = ".bTarget"+track; 
   //alert(track);
   let box = document.querySelectorAll(target);//Array of targets
   let el =this.el

  if(sessionStorage.getItem('level') =='2' ||sessionStorage.getItem('level') == '3')
  {
    el.setAttribute('visible','true')
  }

   let startDsMovement= function cycle(index:any) 
   {

     setTimeout(function() 
     {


 random++;
 if (random >= box.length) 
 {
      
      random = 0; 
   }  
 
  newpos=box[random].getAttribute("position");// restor next target for distractor
  
 el.setAttribute("animation","property:position; to:"+newpos.x+" 1 "+newpos.z+" dur:15000"); 
    
 

       
      
        // console.log("i'm here 2")

         cycle(random);
   //cycle(++index % 3);
   
     },3000);
 }

 startDsMovement( box.length);
   
  }



  

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new Distractor1Component().register();
