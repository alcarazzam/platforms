let totalCoins, coinsTaken = 0, level, platforms, cursors, player, enemies, coins, movingEnemies;

function preload() {
    this.load.image('player', 'assets/player.png');
    this.load.image('wall', 'assets/wall.png');
    this.load.image('coin', 'assets/coin.png');
    this.load.image('enemy', 'assets/enemy.png');

    level = levels[levelNumber][1];
    totalCoins = levels[levelNumber][0];
}

function create() {
    player = this.physics.add.sprite(70, 100, 'player');
    player.setGravityY(300);
    player.setCollideWorldBounds(true);

    this.physics.world.bounds.width = level[0].length * 20 + 55;
    this.cameras.main.setBounds(0, 0, level[0].length * 20 + 55, 600);
    this.cameras.main.startFollow(player);

    cursors = this.input.keyboard.createCursorKeys();

    platforms = this.physics.add.staticGroup();
    this.physics.add.collider(player, platforms);

    coins = this.physics.add.group();
    this.physics.add.collider(player, coins, takeCoin, null, this);

    enemies = this.physics.add.staticGroup();
    this.physics.add.collider(player, enemies, restart, null, this);

    movingEnemies = this.physics.add.group();
    this.physics.add.collider(movingEnemies, platforms, enemyCollide, null, this);
    this.physics.add.collider(player, movingEnemies, restart, null, this);

    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level[i].length; j++) {
            if (level[i][j] === 'x') {
                platforms.create(30 + 20 * j, 30 + 20 * i, 'wall');
            } else if (level[i][j] === 'o') {
                const coin = coins.create(30 + 20 * j, 30 + 20 * i, 'coin');
                coin.body.setAllowGravity(false);
                this.tweens.add({
                    targets: coin,
                    duration: 300,
                    repeat: -1,
                    y: {
                        from: 30 + 20 * i - 3,
                        to: 30 + 20 * i + 3
                    },
                    yoyo: true
                });
            } else if (level[i][j] === '!') {
                enemies.create(30 + 20 * j, 30 + 20 * i, 'enemy');
            } else if (level[i][j] === 'v') {
                const enemy = movingEnemies.create(30 + 20 * j, 30 + 20 * i, 'enemy');
                enemy.body.setAllowGravity(false);
                enemy.body.setVelocityY(-100);
            } else if (level[i][j] === 'h') {
                const enemy = movingEnemies.create(30 + 20 * j, 30 + 20 * i, 'enemy');
                enemy.body.setAllowGravity(false);
                enemy.body.setVelocityX(-100);
            }
        }
    }
}

function update() {
    if (cursors.left.isDown) {
        player.body.setVelocityX(-150)
    } else if (cursors.right.isDown) {
        player.body.setVelocityX(150)
    } else {
        player.body.setVelocityX(0)
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.body.setVelocityY(-300)
    }
}

function takeCoin(player, coin) {
    coin.disableBody(true, true);

    coinsTaken++;

    if (coinsTaken === totalCoins) {
        if (levelNumber === (levels.length - 1)) {
            console.log("End game");
            levelNumber = 0;
        } else
            levelNumber++;
        nextLevel.call(this);
    }
}

function restart() {
    player.setPosition(70, 100);

    coinsTaken = 0;
    coins.children.iterate((coin) => {
        coin.enableBody(true, coin.x, coin.y, true, true)
    });
}

function nextLevel() {
    this.registry.destroy();
    this.events.off();
    this.scene.restart();
}

function enemyCollide(enemy) {
    if (enemy.body.facing === Phaser.Physics.Arcade.FACING_DOWN) {
        enemy.body.setVelocityY(-100);
    } else if (enemy.body.facing === Phaser.Physics.Arcade.FACING_UP) {
        enemy.body.setVelocityY(100);
    } else if (enemy.body.facing === Phaser.Physics.Arcade.FACING_LEFT) {
        enemy.body.setVelocityX(100);
    } else if (enemy.body.facing === Phaser.Physics.Arcade.FACING_RIGHT) {
        enemy.body.setVelocityX(-100);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 200
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
