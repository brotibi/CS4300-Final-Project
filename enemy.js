const EHEALTH = 100;
const EMANA = 100;

class Enemy {
    constructor(enemyMesh){
        this.mesh = enemyMesh;
        this.health = EHEALTH;
        this.mana = EMANA;

        scene.add(this.mesh);
    }

    update() {

    }

    move() {
        this.mesh.position.z += 0.05;
    }
}

class Blockade {
    constructor() {
        // Plane
        var wallMaterial = new THREE.MeshBasicMaterial( { color: 0xAA0000 } );
        var wallGeometry = new THREE.BoxGeometry( .3, 1, 16 );
        this.mesh  = new THREE.Mesh( wallGeometry, wallMaterial );
        scene.add(this.mesh)
        this.mesh.position.z = -40;
        this.mesh.rotation.y = degToRad(90);
    }

    update() {
        this.move();

        if (this.mesh.position.z >5) {
            scene.remove(this.mesh)
            delete this;
        }
    }

    move() {
        //console.log("hmm")
        this.mesh.position.z += .1;
    }
}



