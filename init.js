
    // your code here



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


renderer.setClearColor( 0xffffff, 1 );
renderer.autoClear = false;


keyboard = new THREEx.KeyboardState();
gameOver = false;

camera.position.z = 5;
camera.position.y = 5;

camera.rotation.x = 125;

//renderer.setClearColor( 0xffffff, 1);

scene.background = new THREE.Color( 0xffffff );

function degToRad(degrees) {
    return (Math.PI/180) * degrees
}

//window.addEventListener('load', function() {
    //import {OBJLoader2} from 'https://raw.githack.com/mrdoob/three.js/master/examples/jsm/loaders/OBJLoader2.js';

const objLoader = new THREE.OBJLoader();



//});

/*const objLoader = new OBJLoader2();
  objLoader.load('./demon.obj', (root) => {
    scene.add(root);
    root.position.y = 4
    root.position.z = 2
    root.size.x = 10
  }, null, null, null);*/
/*
const geometryCube = new THREE.Geometry();
geometryCube.vertices.push(
  new THREE.Vector3(-1, -1,  1),  // 0
  new THREE.Vector3( 1, -1,  1),  // 1
  new THREE.Vector3(-1,  1,  1),  // 2
  new THREE.Vector3( 1,  1,  1),  // 3
  new THREE.Vector3(-1, -1, -1),  // 4
  new THREE.Vector3( 1, -1, -1),  // 5
  new THREE.Vector3(-1,  1, -1),  // 6
  new THREE.Vector3( 1,  1, -1),  // 7
);*/