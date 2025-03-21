import * as THREE from 'three';

export class Player {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.health = 100;
        this.score = 0;
        this.speed = 0.1;
        this.shootCooldown = 250; // milliseconds
        this.lastShootTime = 0;

        // Create player mesh
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.y = 0.5; // Lift slightly above ground
        scene.add(this.mesh);

        // Create weapon
        const weaponGeometry = new THREE.BoxGeometry(0.2, 0.2, 1);
        const weaponMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
        this.weapon = new THREE.Mesh(weaponGeometry, weaponMaterial);
        this.weapon.position.set(0.5, 0.5, 0);
        this.mesh.add(this.weapon);

        // Setup raycaster for shooting
        this.raycaster = new THREE.Raycaster();
        this.plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    }

    update(inputManager) {
        // Handle movement
        const movementVector = inputManager.getMovementVector();
        this.mesh.position.x += movementVector.x * this.speed;
        this.mesh.position.z += movementVector.z * this.speed;

        // Handle rotation towards mouse
        const mousePos = inputManager.getMousePosition();
        this.raycaster.setFromCamera(mousePos, this.camera);
        const intersection = new THREE.Vector3();
        this.raycaster.ray.intersectPlane(this.plane, intersection);
        
        // Calculate angle between player and mouse position
        const angle = Math.atan2(
            intersection.x - this.mesh.position.x,
            intersection.z - this.mesh.position.z
        );
        this.mesh.rotation.y = angle;

        // Handle shooting
        if (inputManager.isShootingActive()) {
            this.shoot();
        }

        // Update UI
        this.updateUI();
    }

    shoot() {
        const currentTime = Date.now();
        if (currentTime - this.lastShootTime >= this.shootCooldown) {
            // Create bullet
            const bulletGeometry = new THREE.SphereGeometry(0.1);
            const bulletMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
            const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
            bullet.position.copy(this.mesh.position);

            // Set bullet direction
            const direction = new THREE.Vector3();
            this.raycaster.ray.intersectPlane(this.plane, direction);
            direction.sub(this.mesh.position).normalize();
            bullet.userData.velocity = direction.multiplyScalar(0.5);

            this.scene.add(bullet);
            this.lastShootTime = currentTime;
        }
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        // Handle player death
        console.log('Player died!');
        // You can implement game over logic here
    }

    updateUI() {
        document.getElementById('health').textContent = `Health: ${this.health}`;
        document.getElementById('score').textContent = `Score: ${this.score}`;
    }
} 