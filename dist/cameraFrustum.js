
AFRAME.registerComponent('camera-head', {
    schema: {
      event: { type: 'string', default: '' },
      canSee: { type: 'boolean', default: true },
    },
  
    
  
    tick: function (time) {
      let el = this.el;
      let data = this.data;
      
     
     
        if (this.el.sceneEl.camera) {
          let cam = this.el.sceneEl.camera;
          
         let newCamera = cam.clone();
         newCamera.fov = 35;
         newCamera.updateProjectionMatrix(); 
          let jewlery = document.getElementById('p'+window.coin.toString()+window.track);
          let frustum = new THREE.Frustum();
          frustum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(newCamera.projectionMatrix,
            cam.matrixWorldInverse));
  
          // Your 3d point to check
          let pos = new THREE.Vector3(jewlery.object3D.position.x, jewlery.object3D.position.y, jewlery.object3D.position.z);
  
         
  
          
  
          if (frustum.containsPoint(pos)) {
          
              
              console.log("looking at jewlery");
          window.isLooking = true;
  
          }
          else {
  
            
              console.log('player Looks away');
              window.isLooking = false;
           
  
          }
  
        
      }
    }
  })