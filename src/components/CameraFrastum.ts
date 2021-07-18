
import THREE = require('three');
import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface CameraFrustumComponentSchema {
    canSee: string;
}

export class CameraFrustumComponent extends ComponentWrapper<CameraFrustumComponentSchema> {
  constructor() {
    super('camera-frustum-component', {
        canSee: {
        type: 'boolean',
        default: "true",
      },
    });
  }

  init () {
    const countDown = setInterval(() => {
        if (this.el.sceneEl.camera) {
          const cam = this.el.sceneEl.camera;
          const frustum = new THREE.Frustum();
          frustum.setFromProjectionMatrix(
            new THREE.Matrix4().multiplyMatrices(
              cam.projectionMatrix,
              cam.matrixWorldInverse
            )
          );
          let jewlery:any = document.getElementById('p'+window.coin.toString()+window.track).getAttribute('position');
  
          const jewleryVectorx = jewlery.x;
          const jewleryVectory = jewlery.y;
          const jewleryVectorz = jewlery.z;
  
          const treePosition = new THREE.Vector3(
            jewleryVectorx ,
            jewleryVectory,
            jewleryVectorz
          );
  
        //  console.log(this.data.index);
  
          if (frustum.containsPoint(treePosition)) 
          {
           console.log('can see jowellery');
          }
          else{
            console.log('cant see jowellery');
          }
          
        }
      }, 1000);
      countDown;
    }
  

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new CameraFrustumComponent().register();
