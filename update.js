enemies = []

function updateEnemies(enemies) {
    enemies.forEach(enem => {
        enem.update()
    });
};

function getEnemyMesh() {
    meshes = []
    enemies.forEach(enem => {
        meshes.push(enem.mesh)
    })

    return meshes;
}


function update() {
    updatePlayer()
    updateEnemies(enemies)
    enemySpawn()
    
}


function spawnBlockade() {
    var blockade = new Blockade()
    enemies.push(blockade)
}

function spawnDemon() {
    var demon = new Demon()
    enemies.push(demon)
}

function spawnDemonBrain() {
    var demonBrain1 = new DemonBrain(-3.5)
    var demonBrain2 = new DemonBrain(3.5)
    enemies.push(demonBrain1)
    enemies.push(demonBrain2)
}


var spawnInt = setInterval(spawnBlockade, 4000) 

var spawnInt2 = setInterval(spawnDemon, 7000) 

var spawnInt3 = setInterval(spawnDemonBrain, 9000) 

function enemySpawn() {
    
    //spawnBlockade()
}


