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
    var demonBrain = new DemonBrain()
    enemies.push(demonBrain)
}


var spawnInt = setInterval(spawnBlockade, 2000) 

var spawnInt2 = setInterval(spawnDemon, 2000) 

var spawnInt3 = setInterval(spawnDemonBrain, 2000) 

function enemySpawn() {
    
    //spawnBlockade()
}


