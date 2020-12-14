width = window.innerWidth
height = window.innerHeight

// We will use 2D canvas element to render our HUD.  
var hudCanvas = new OffscreenCanvas(width, height); 


// Again, set dimensions to fit the screen.
hudCanvas.width = width;
hudCanvas.height = height;

// Get 2D context and draw something supercool.
hudBitmap = hudCanvas.getContext('2d');
hudBitmap.font = "Normal 40px Arial";
hudBitmap.textAlign = 'center';
hudBitmap.fillStyle = "rgba(0,0,0,1)";
hudBitmap.fillText('Health', width / 1.5, height / 8);

// Create the camera and set the viewport to match the screen dimensions.
cameraHUD = new THREE.OrthographicCamera(-width/2, width/2, height/2, -height/2, 0, 30 );

// Create also a custom scene for HUD.
sceneHUD = new THREE.Scene();

//sceneHUD.background = new THREE.Color( 0xffffff );

// Create texture from rendered graphics.
hudTexture = new THREE.Texture(hudCanvas) 
hudTexture.needsUpdate = true;

// Create HUD material.
hmaterial = new THREE.MeshBasicMaterial( {map: hudTexture} );
hmaterial.transparent = true;

// Create plane to render the HUD. This plane fill the whole screen.
planeGeometry = new THREE.PlaneGeometry( width, height );
 hplane = new THREE.Mesh( planeGeometry, hmaterial );
sceneHUD.add( hplane );
