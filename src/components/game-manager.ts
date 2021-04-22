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
  window.track = "5";
   
  }

  update() {}
 
  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}




new gameManagerComponent().register();
