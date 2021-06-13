import THREE = require('three');
import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface CameraComponentSchema {
    canSee: boolean;
}

export class CameraComponent extends ComponentWrapper<CameraComponentSchema> {
  constructor() {
    super('camera-component', {
        canSee: {
        type: 'boolean',
        default: false,
      },
    });
  }

  init() {
    let el = this.el;
    let data = this.data;
    el.addEventListener('mouseenter',function () {
        
       // console.log('I can see npc ');
        
    })
    el.addEventListener('mouseleave',function(){
       // console.log('No longer can see npc ');
    })

  }

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new CameraComponent().register();
