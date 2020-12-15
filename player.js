const HEALTH = 100;
const MANA = 100;

const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

class Player {
    constructor(mesh){
        this.mesh = mesh;
        this.health = HEALTH;
        this.mana = MANA;
        this.direction = DOWN;
        //this.mesh.geometry.computeFaceNormals();
        this.mesh.position.z = -2
        scene.add( this.mesh );
    }

    update() {
       if(this.mesh.position.y > 0) {
           this.mesh.position.y -= .1
       }
       this.checkCollision()
    }
    
    checkCollision() {
        var intos = 0
        var originPoint = this.mesh.position.clone();
        if(enemies.length > 0) {
            console.log(enemies.length)
        for (var vertexIndex = 0; vertexIndex < this.mesh.geometry.vertices.length; vertexIndex++) {       
            var localVertex = this.mesh.geometry.vertices[vertexIndex].clone();
            var globalVertex = localVertex.applyMatrix4(this.mesh.matrix);
            var directionVector = globalVertex.sub( this.mesh.position );

            var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
            var collisionResults = ray.intersectObjects( getEnemyMesh(), true );
            //scene.add(new THREE.ArrowHelper(ray.ray.direction, ray.ray.origin, 300, 0xff0000) );
            if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ) {
                // a collision occurred... do something...
                //console.log("collision")
                scene.add(new THREE.ArrowHelper(ray.ray.direction, ray.ray.origin, 300, 0xff0000) );
                console.log(collisionResults[0])
                intos++;
                //if (collisionResults[0].point.z > -1.6){
                    gameOver = true
                //}
            }
        }
    }
    }
}

var cubeRenderTarget1 = new THREE.WebGLCubeRenderTarget( 128, { format: THREE.RGBFormat, generateMipmaps: true, minFilter:THREE.LinearMipmapLinearFilter } );
cubeCamera1 = new THREE.CubeCamera(.1, 1000, cubeRenderTarget1);
//cubeCamera1.updateCubeMap(renderer, scene);
pmaterial = new THREE.MeshPhongMaterial({
    shininess: 100,
    color: 0xffffff,
    specular: 0xffffff,
    envMap: cubeRenderTarget1.texture
  });

//var material = new THREE.MeshPhongMaterial( { color: 0x000000 } );
var geometry = new THREE.ConeGeometry( 1, 1, 4 );
var playerMesh = new THREE.Mesh( geometry, pmaterial );
//playerMesh.rotation.z = degToRad(90)
playerMesh.receiveShadow = true;
playerMesh.castShadow = true;
playerMesh.add(cubeCamera1);


var player = new Player(playerMesh)





//Updates the player
function updatePlayer() {
    handleInput(player.mesh)
    //console.log("updating player")
    cubeCamera1.updateCubeMap(renderer, scene);
    player.update()
}