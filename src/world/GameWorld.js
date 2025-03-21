import * as THREE from 'three';
import { Enemy } from '../entities/Enemy';

export class GameWorld {
    constructor(scene) {
        this.scene = scene;
        this.enemies = [];
        this.bullets = [];
        this.spawnTimer = 0;
        this.spawnInterval = 2000; // Spawn enemy every 2 seconds
        this.lastSpawnTime = 0;

        this.setupEnvironment();
    }

    setupEnvironment() {
        // Create ground plane
        const groundGeometry = new THREE.PlaneGeometry(50, 50);
        const groundMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x333333,
            side: THREE.DoubleSide
        });
        this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
        this.ground.rotation.x = -Math.PI / 2;
        this.scene.add(this.ground);

        // Add some visual boundaries
        this.createBoundaries();
    }

    createBoundaries() {
        const boundaryMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x666666,
            transparent: true,
            opacity: 0.5
        });

        // Create walls
        const wallGeometry = new THREE.BoxGeometry(50, 1, 1);
        const walls = [
            { position: [0, 0.5, 25], rotation: [0, 0, 0] }, // North
            { position: [0, 0.5, -25], rotation: [0, 0, 0] }, // South
            { position: [25, 0.5, 0], rotation: [0, Math.PI / 2, 0] }, // East
            { position: [-25, 0.5, 0], rotation: [0, Math.PI / 2, 0] } // West
        ];

        walls.forEach(wall => {
            const mesh = new THREE.Mesh(wallGeometry, boundaryMaterial);
            mesh.position.set(...wall.position);
            mesh.rotation.set(...wall.rotation);
            this.scene.add(mesh);
        });
    }

    spawnEnemy() {
        const currentTime = Date.now();
        if (currentTime - this.lastSpawnTime >= this.spawnInterval) {
            // Randomly choose a spawn point on the edges
            const side = Math.floor(Math.random() * 4); // 0: North, 1: South, 2: East, 3: West
            let position;
            
            switch(side) {
                case 0: // North
                    position = new THREE.Vector3(
                        (Math.random() - 0.5) * 48,
                        0.5,
                        24
                    );
                    break;
                case 1: // South
                    position = new THREE.Vector3(
                        (Math.random() - 0.5) * 48,
                        0.5,
                        -24
                    );
                    break;
                case 2: // East
                    position = new THREE.Vector3(
                        24,
                        0.5,
                        (Math.random() - 0.5) * 48
                    );
                    break;
                case 3: // West
                    position = new THREE.Vector3(
                        -24,
                        0.5,
                        (Math.random() - 0.5) * 48
                    );
                    break;
            }

            const enemy = new Enemy(this.scene, position);
            this.enemies.push(enemy);
            this.lastSpawnTime = currentTime;
        }
    }

    update() {
        // Spawn enemies
        this.spawnEnemy();

        // Update enemies
        this.enemies.forEach((enemy, index) => {
            enemy.update();
            
            // Remove dead enemies
            if (enemy.health <= 0) {
                this.scene.remove(enemy.mesh);
                this.enemies.splice(index, 1);
            }
        });

        // Update bullets
        this.updateBullets();
    }

    updateBullets() {
        // Find all bullet meshes in the scene
        this.scene.traverse((object) => {
            if (object instanceof THREE.Mesh && object.userData.isBullet) {
                // Update bullet position
                object.position.add(object.userData.velocity);

                // Check for collisions with enemies
                this.enemies.forEach(enemy => {
                    if (this.checkCollision(object, enemy.mesh)) {
                        enemy.takeDamage(10);
                        this.scene.remove(object);
                    }
                });

                // Remove bullets that are too far
                if (object.position.length() > 50) {
                    this.scene.remove(object);
                }
            }
        });
    }

    checkCollision(bullet, enemy) {
        const distance = bullet.position.distanceTo(enemy.position);
        return distance < 1; // Simple sphere collision
    }
} 