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
        scene.add( this.mesh );
    }

    update() {
       if(this.mesh.position.y > 0) {
           this.mesh.position.y -= .1
       }
       this.checkCollision()
    }

    checkCollision() {
        if(enemies.length > 0) {
            console.log(enemies.length)
        for (var vertexIndex = 0; vertexIndex < this.mesh.geometry.vertices.length; vertexIndex++) {       
            var localVertex = this.mesh.geometry.vertices[vertexIndex].clone();
            var globalVertex = this.mesh.matrix.multiplyVector3(localVertex);
            var directionVector = globalVertex.sub( this.mesh.position );

            var ray = new THREE.Raycaster( this.mesh.position, directionVector.clone().normalize() );
            var collisionResults = ray.intersectObjects( getEnemyMesh() );
            if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length()/2 ) {
                // a collision occurred... do something...
                console.log("collision")
                gameOver = true
            }
        }
    }
    }
}

var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var playerMesh = new THREE.Mesh( geometry, material );


var player = new Player(playerMesh)





//Updates the player
function updatePlayer() {
    handleInput(player.mesh)
    //console.log("updating player")
    player.update()
}