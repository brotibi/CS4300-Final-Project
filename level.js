function degToRad(degrees) {
    return (Math.PI/180) * degrees
}

var wallMaterial = new THREE.MeshBasicMaterial( { color: 0xAA0000 } );
var wallGeometry = new THREE.BoxGeometry( .3, 1, 13 );
var wall1 = new THREE.Mesh( wallGeometry, wallMaterial );
var wall2 = new THREE.Mesh( wallGeometry, wallMaterial );
var wall3 = new THREE.Mesh( wallGeometry, wallMaterial );
var wall4 = new THREE.Mesh( wallGeometry, wallMaterial );


// Plane
var plane = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100, 0, 0 ), new THREE.MeshBasicMaterial( { color: 0xd3d3d3, opacity: 0.25 } ) );
plane.rotation.x = degToRad(-90)
plane.position.y = -1;
plane.visible = true;
scene.add( plane );



//scene.add(wall1)
//scene.add(wall2)
//scene.add(wall3)
//scene.add(wall4)

//Wall 1
//wall1.position.z = -4;
//wall1.position.x = -6;


//Wall 2
//wall2.position.z = -4;
//wall2.position.x = 6;

//Wall 3
wall3.position.z = -10;
wall3.rotation.y = degToRad(90);
/*
//Wall 4
wall4.position.z = 2;
wall4.rotation.y = degToRad(90);
*/