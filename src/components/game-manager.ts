import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

let nextCoinIndex =2;
let coinMaxNumber = 3;
interface gameManagerSchema {
  readonly canStart: boolean;
}


declare global {
    interface Window { track: any; }
}

window.track = window.track || {};

export class gameManagerComponent extends ComponentWrapper<gameManagerSchema> {
  constructor() {
    super('game-manager', {
      canStart: {
        type: 'boolean',
        default: false,
      },
    });
  }

  init() {
   console.log('game manager')
   let enviroment:string = sessionStorage.getItem('enviroment');
   let enviroment_el;
   let road_el;
   let firstCoin;
   try
   {
    enviroment_el = document.getElementById(enviroment+'-el');
      enviroment_el.setAttribute('visible','true');
   }
   catch
   {
      alert("enviroment not selected");
   }
   
  window.track = sessionStorage.getItem('road');
   console.log('track selected ='+window.track);
   try{
     road_el = document.getElementById('road'+window.track+'-el');
    road_el.setAttribute('visible','true');
   }
  catch{
    alert('road not selected');
  }

   firstCoin = document.getElementById('1'+window.track);
   firstCoin.setAttribute('visible','true');

  }

  update() {}
 
  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}




new gameManagerComponent().register();
