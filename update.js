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


var spawnInt = setInterval(spawnBlockade, 2000) 

function enemySpawn() {
    
    //spawnBlockade()
}


