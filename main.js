
function gameIsOver() {
    /*var hudBitmap = hudCanvas.getContext('2d');
    hudBitmap.font = "Normal 40px Arial";
    hudBitmap.textAlign = 'center';
    hudBitmap.fillStyle = "rgba(0,0,0,1)";
    hudBitmap.fillText('Game Over', width / 2, height / 2); 
    var hudTexture = new THREE.Texture(hudCanvas) 
    hudTexture.needsUpdate = true;
    var material = new THREE.MeshBasicMaterial( {map: hudTexture} );
    material.transparent = true;
    
    sceneHUD.remove(hplane);
        // Create plane to render the HUD. This plane fill the whole screen.
    var planeGeometry = new THREE.PlaneGeometry( width, height );
    hplane = new THREE.Mesh( planeGeometry, material );
    sceneHUD.add( hplane );*/
    alert("Game Over")
    window.location.reload()
    return
}

var animate = function () {


	//cube.rotateX(0.01);
    //cube.rotateY(0.01);
    

    if(gameOver == false) {
        update()

        


    } else {
        gameIsOver()
        return;
        
    }

    renderer.render( scene, camera );
    // Render HUD on top of the scene.
    renderer.render(sceneHUD, cameraHUD);

    
        
    requestAnimationFrame( animate );

};

animate();