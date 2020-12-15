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
        var cubeRenderTarget1 = new THREE.WebGLCubeRenderTarget( 128, { format: THREE.RGBFormat, generateMipmaps: true, minFilter:THREE.LinearMipmapLinearFilter } );
        this.cubeCamera1 = new THREE.CubeCamera(.1, 1000, cubeRenderTarget1);

        var pfmaterial = new THREE.MeshPhongMaterial({
            shininess: 100,
            color: 0xffffff,
            specular: 0xffffff,
            envMap: cubeRenderTarget1.texture
        });
        var wallMaterial = new THREE.MeshPhongMaterial( { color: 0xAA0000 } );
        var wallGeometry = new THREE.BoxGeometry( .3, 1, 16 );
        this.mesh  = new THREE.Mesh( wallGeometry, pfmaterial );
        
        this.mesh.position.z = -40;
        this.mesh.rotation.y = degToRad(90);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        //this.mesh.geometry.computeFaceNormals();
        this.mesh.add(cubeCamera1);
        scene.add(this.mesh)
    }

    update() {
        this.move();
        this.cubeCamera1.updateCubeMap(renderer, scene);
        if (this.mesh.position.z >2) {
            this.cubeCamera1
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
        var wallMaterial = new THREE.MeshPhongMaterial( { color: 0xAA0000 } );
        var wallGeometry = new THREE.BoxGeometry( .3, 1, 16 );
        this.mesh  = new THREE.Mesh( wallGeometry, wallMaterial );
        objLoader.load('./demon.obj', (root) => {
            root.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { 
                //node.position.x = -20;
                node.castShadow = true; 
                node.material = doomMat;
                //node.geometry.computeFaceNormals();
            } } );
            scene.remove(this.mesh)
            this.mesh = root;
            //scene.add(root)
            
            this.mesh.position.z = -40;
            this.mesh.position.y = 1.5
            this.mesh.rotation.y = degToRad(270);
            this.mesh.castShadow = true;
            this.mesh.receiveShadow = true;
            scene.add(this.mesh)
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
        this.mesh.position.z += .5;
    }
}

class DemonBrain {
    constructor(xPos) {
        // Plane
        var wallMaterial = new THREE.MeshPhongMaterial( { color: 0xAA0000 } );
        var wallGeometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.mesh  = new THREE.Mesh( wallGeometry, wallMaterial );
        objLoader.load('./demonBrain.obj', (root) => {
            root.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { 
                node.castShadow = true; 
                node.material = doomMat;
                //node.geometry.computeFaceNormals();
                //node.position.z = -40;
            } } );
            scene.remove(this.mesh)
            this.mesh = root
            //scene.add(root)
            this.mesh.material = doomMat;
            this.mesh.position.z = -40;
            this.mesh.position.y = 2.5
            this.mesh.position.x = xPos
            this.mesh.rotation.y = degToRad(270);
            this.mesh.castShadow = true;
            this.mesh.receiveShadow = true;
            //this.mesh.geometry.computeFaceNormals();
            scene.add(this.mesh)
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
        this.mesh.position.z += .5;
    }
}


