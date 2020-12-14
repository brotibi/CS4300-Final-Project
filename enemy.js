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

        if (this.mesh.position.z >2) {
            scene.remove(this.mesh)
            delete this;
        }
    }

    move() {
        //console.log("hmm")
        this.mesh.position.z += .1;
    }
}

class Demon {
    constructor() {
        // Plane
        var wallMaterial = new THREE.MeshBasicMaterial( { color: 0xAA0000 } );
        var wallGeometry = new THREE.BoxGeometry( .3, 1, 16 );
        this.mesh  = new THREE.Mesh( wallGeometry, wallMaterial );
        objLoader.load('./demon.obj', (root) => {
            scene.remove(this.mesh)
            this.mesh = root;
            //scene.add(root)
            scene.add(this.mesh)
            this.mesh.position.z = -40;
            this.mesh.position.y = 1.5
            this.mesh.rotation.y = degToRad(270);
        });
        

    }

    update() {
        this.move();

        if (this.mesh.position.z >2) {
            scene.remove(this.mesh)
            delete this;
        }
    }

    move() {
        //console.log("hmm")
        this.mesh.position.z += .2;
    }
}

class DemonBrain {
    constructor() {
        // Plane
        var wallMaterial = new THREE.MeshBasicMaterial( { color: 0xAA0000 } );
        var wallGeometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.mesh  = new THREE.Mesh( wallGeometry, wallMaterial );
        objLoader.load('./demonBrain.obj', (root) => {
            scene.remove(this.mesh)
            this.mesh = root
            //scene.add(root)
            scene.add(this.mesh)
            this.mesh.position.z = -40;
            this.mesh.position.y = 2.5
            this.mesh.rotation.y = degToRad(270);
        });
        

    }

    update() {
        this.move();

        if (this.mesh.position.z >2) {
            scene.remove(this.mesh)
            delete this;
        }
    }

    move() {
        //console.log("hmm")
        this.mesh.position.z += .2;
    }
}


