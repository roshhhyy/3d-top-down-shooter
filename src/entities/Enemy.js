import * as THREE from 'three';

export class Enemy {
    constructor(scene, position) {
        this.scene = scene;
        this.health = 30;
        this.speed = 0.05;
        this.damage = 10;
        this.attackCooldown = 1000; // 1 second between attacks
        this.lastAttackTime = 0;

        // Create enemy mesh
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.copy(position);
        this.mesh.position.y = 0.5; // Lift slightly above ground
        scene.add(this.mesh);

        // Create health bar
        this.createHealthBar();
    }

    createHealthBar() {
        const healthBarGeometry = new THREE.PlaneGeometry(1, 0.1);
        const healthBarMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.healthBar = new THREE.Mesh(healthBarGeometry, healthBarMaterial);
        this.healthBar.position.y = 1.5;
        this.mesh.add(this.healthBar);
    }

    update() {
        // Find player in scene
        const player = this.findPlayer();
        if (player) {
            // Move towards player
            const direction = new THREE.Vector3()
                .subVectors(player.mesh.position, this.mesh.position)
                .normalize();
            
            this.mesh.position.add(direction.multiplyScalar(this.speed));

            // Rotate to face player
            const angle = Math.atan2(
                player.mesh.position.x - this.mesh.position.x,
                player.mesh.position.z - this.mesh.position.z
            );
            this.mesh.rotation.y = angle;

            // Check for collision with player
            this.checkPlayerCollision(player);
        }

        // Update health bar
        this.updateHealthBar();
    }

    findPlayer() {
        let player = null;
        this.scene.traverse((object) => {
            if (object instanceof THREE.Mesh && object.userData.isPlayer) {
                player = object;
            }
        });
        return player;
    }

    checkPlayerCollision(player) {
        const distance = this.mesh.position.distanceTo(player.mesh.position);
        if (distance < 1) {
            const currentTime = Date.now();
            if (currentTime - this.lastAttackTime >= this.attackCooldown) {
                player.userData.takeDamage(this.damage);
                this.lastAttackTime = currentTime;
            }
        }
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        // Remove enemy from scene
        this.scene.remove(this.mesh);
    }

    updateHealthBar() {
        const healthPercentage = this.health / 30;
        this.healthBar.scale.x = healthPercentage;
        this.healthBar.material.color.setHex(
            healthPercentage > 0.5 ? 0x00ff00 :
            healthPercentage > 0.2 ? 0xffff00 : 0xff0000
        );
    }
} 