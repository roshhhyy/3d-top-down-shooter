import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Game state
const gameState = {
    isGameOver: false,
    playerHealth: 100,
    playerStamina: 100,
    isShooting: false,
    lastShotTime: 0,
    shootingCooldown: 100, // 100ms between shots for SMG
    staminaPerShot: 2, // Stamina cost per shot
    staminaRechargeRate: 15, // Stamina recovered per second
    mousePosition: new THREE.Vector2() // Store mouse position globally
};

// Add after gameState declaration
const gameStats = {
    kills: 0
};

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 20, 0);
scene.add(directionalLight);

// Ground plane (make it much larger)
const groundGeometry = new THREE.PlaneGeometry(500, 500);
const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x404040 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Player ship
function createPlayerShip() {
    const shipGroup = new THREE.Group();
    
    // Main body (circular base)
    const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 32);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x3366cc });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    shipGroup.add(body);

    // Cockpit (dome)
    const cockpitGeometry = new THREE.SphereGeometry(0.3, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const cockpitMaterial = new THREE.MeshPhongMaterial({ color: 0x66ccff, transparent: true, opacity: 0.7 });
    const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
    cockpit.position.y = 0.1;
    shipGroup.add(cockpit);

    // Health bar
    const healthBarWidth = 1;
    const healthBarHeight = 0.1;
    const healthBarGeometry = new THREE.PlaneGeometry(healthBarWidth, healthBarHeight);
    const healthBarMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00,
        side: THREE.DoubleSide
    });
    const healthBar = new THREE.Mesh(healthBarGeometry, healthBarMaterial);
    healthBar.position.set(0, 1.2, -0.8);
    healthBar.rotation.x = -Math.PI / 4;
    healthBar.userData.initialScale = healthBar.scale.x;
    shipGroup.add(healthBar);
    shipGroup.userData.healthBar = healthBar;

    // Stamina bar (Dark Souls style)
    const staminaBarGeometry = new THREE.PlaneGeometry(healthBarWidth, healthBarHeight);
    const staminaBarMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xE8B71C, // Dark Souls stamina bar color
        side: THREE.DoubleSide
    });
    const staminaBar = new THREE.Mesh(staminaBarGeometry, staminaBarMaterial);
    staminaBar.position.set(0, 1.2, -0.6); // Moved forward on Z-axis to appear below health bar
    staminaBar.rotation.x = -Math.PI / 4;
    staminaBar.userData.initialScale = staminaBar.scale.x;
    shipGroup.add(staminaBar);
    shipGroup.userData.staminaBar = staminaBar;

    shipGroup.position.y = 0.5;
    return shipGroup;
}

const player = createPlayerShip();
scene.add(player);

// Camera setup (initial position)
camera.position.set(0, 15, 0);
camera.lookAt(player.position);

// Function to update camera position
function updateCamera() {
    // Update camera position to follow player while maintaining height
    camera.position.x = player.position.x;
    camera.position.z = player.position.z;
    camera.lookAt(player.position);
}

// Movement controls
const keys = {
    w: false,
    s: false,
    a: false,
    d: false
};

window.addEventListener('keydown', (e) => {
    if (keys.hasOwnProperty(e.key.toLowerCase())) {
        keys[e.key.toLowerCase()] = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (keys.hasOwnProperty(e.key.toLowerCase())) {
        keys[e.key.toLowerCase()] = false;
    }
});

// Shooting controls
window.addEventListener('mousedown', () => gameState.isShooting = true);
window.addEventListener('mouseup', () => gameState.isShooting = false);

// Track mouse position
window.addEventListener('mousemove', (event) => {
    gameState.mousePosition.x = event.clientX;
    gameState.mousePosition.y = event.clientY;
});

// Projectiles
const bullets = [];
const bulletGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 8);
const bulletMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x00ffff,
    emissive: 0x0088ff,
    emissiveIntensity: 0.5
});

function createBullet(position, direction) {
    const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
    bullet.position.copy(position);
    bullet.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
    bullet.userData.velocity = direction.multiplyScalar(0.5);
    scene.add(bullet);
    bullets.push(bullet);
}

function shoot(mousePosition) {
    const currentTime = Date.now();
    if (currentTime - gameState.lastShotTime >= gameState.shootingCooldown && 
        gameState.playerStamina >= gameState.staminaPerShot) {
        
        // Deduct stamina
        gameState.playerStamina = Math.max(0, gameState.playerStamina - gameState.staminaPerShot);

        // Convert screen coordinates to world coordinates
        const vector = new THREE.Vector3(
            (mousePosition.x / window.innerWidth) * 2 - 1,
            -(mousePosition.y / window.innerHeight) * 2 + 1,
            0.5
        );

        // Project mouse position to 3D space
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.y / dir.y;
        const targetPos = new THREE.Vector3()
            .copy(camera.position)
            .add(dir.multiplyScalar(distance));

        // Calculate direction from player to target
        const direction = new THREE.Vector3()
            .subVectors(targetPos, player.position)
            .normalize();

        // Create bullet
        createBullet(player.position.clone(), direction);
        gameState.lastShotTime = currentTime;
    }
}

// Enemies
const enemies = [];

function createEnemyShip() {
    const shipGroup = new THREE.Group();
    
    // Randomize enemy size and properties
    const sizeScale = 0.5 + Math.random() * 1.5; // Random size between 0.5x and 2.0x
    const baseHealth = 100;
    const baseSpeed = 0.05;
    
    // Main body
    const bodyGeometry = new THREE.ConeGeometry(0.4 * sizeScale, 1 * sizeScale, 6);
    const hue = 0; // Red base color
    const saturation = 0.7 + Math.random() * 0.3; // Vary saturation
    const lightness = 0.3 + Math.random() * 0.2; // Vary lightness
    const color = new THREE.Color().setHSL(hue, saturation, lightness);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: color });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.x = Math.PI / 2;
    shipGroup.add(body);

    // Wings (vary wing shape)
    const wingWidth = 1 * sizeScale;
    const wingDepth = 0.3 * sizeScale;
    const wingGeometry = new THREE.BoxGeometry(wingWidth, 0.1, wingDepth);
    const wingMaterial = new THREE.MeshPhongMaterial({ color: color.clone().multiplyScalar(0.7) });
    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
    leftWing.position.set(-0.5 * sizeScale, 0, 0);
    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
    rightWing.position.set(0.5 * sizeScale, 0, 0);
    shipGroup.add(leftWing);
    shipGroup.add(rightWing);

    // Health bar (scaled with size)
    const healthBarWidth = 1 * sizeScale;
    const healthBarHeight = 0.1;
    const healthBarGeometry = new THREE.PlaneGeometry(healthBarWidth, healthBarHeight);
    const healthBarMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xff0000,
        side: THREE.DoubleSide
    });
    const healthBar = new THREE.Mesh(healthBarGeometry, healthBarMaterial);
    healthBar.position.set(0, 1.2 * sizeScale, -0.8);
    healthBar.rotation.x = -Math.PI / 4;
    healthBar.userData.initialScale = healthBar.scale.x;
    shipGroup.add(healthBar);
    shipGroup.userData.healthBar = healthBar;

    // Set enemy properties based on size
    shipGroup.userData.health = baseHealth * sizeScale;
    shipGroup.userData.maxHealth = baseHealth * sizeScale;
    shipGroup.userData.speed = baseSpeed * (1.3 - sizeScale * 0.3); // Larger enemies move slower
    shipGroup.userData.moveParams = {
        offset: Math.random() * Math.PI * 2,
        amplitude: 0.2 + Math.random() * 0.3,
        frequency: 0.5 + Math.random() * 0.5,
        time: 0
    };

    return shipGroup;
}

function spawnEnemy() {
    const enemy = createEnemyShip();
    
    // Calculate spawn position relative to camera view
    const spawnRadius = 30; // Distance from camera to spawn
    const angle = Math.random() * Math.PI * 2;
    
    // Calculate spawn position relative to player
    enemy.position.x = player.position.x + Math.cos(angle) * spawnRadius;
    enemy.position.z = player.position.z + Math.sin(angle) * spawnRadius;
    enemy.position.y = 0.5;
    
    enemy.lookAt(player.position);
    scene.add(enemy);
    enemies.push(enemy);
}

// Spawn enemy every 2 seconds
setInterval(spawnEnemy, 2000);

// Explosion particles
function createExplosion(position) {
    const particleCount = 20;
    const particles = new THREE.Group();
    
    for (let i = 0; i < particleCount; i++) {
        const geometry = new THREE.SphereGeometry(0.1);
        const material = new THREE.MeshPhongMaterial({ 
            color: 0xff4400,
            emissive: 0xff2200
        });
        const particle = new THREE.Mesh(geometry, material);
        
        particle.position.copy(position);
        const velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.3,
            Math.random() * 0.2,
            (Math.random() - 0.5) * 0.3
        );
        particle.userData.velocity = velocity;
        particle.userData.lifetime = 1 + Math.random(); // seconds
        particle.userData.age = 0;
        
        particles.add(particle);
    }
    
    scene.add(particles);
    return particles;
}

// Game over screen
function showGameOverScreen() {
    const gameOverDiv = document.createElement('div');
    gameOverDiv.style.position = 'absolute';
    gameOverDiv.style.top = '50%';
    gameOverDiv.style.left = '50%';
    gameOverDiv.style.transform = 'translate(-50%, -50%)';
    gameOverDiv.style.textAlign = 'center';
    gameOverDiv.style.color = 'white';
    gameOverDiv.style.fontSize = '32px';
    gameOverDiv.style.fontFamily = 'Arial, sans-serif';
    gameOverDiv.innerHTML = `
        <h1>Game Over</h1>
        <button id="restartButton" style="font-size: 24px; padding: 10px 20px; margin: 10px;">Restart Game</button>
    `;
    document.body.appendChild(gameOverDiv);

    document.getElementById('restartButton').addEventListener('click', () => {
        location.reload(); // For now, just reload the page
    });
}

// Animation loop
const explosions = [];

// Update the hazards object with longer warning time and reduced frequency
const hazards = {
    lightBeams: [],
    swords: [],
    nextHazardTime: 0,
    hazardCooldown: 3000, // Increased from 2000 to 3000ms
    warningDuration: 1000,
    swordWarningDuration: 3000, // Increased from 2000 to 3000ms to match slower speed
    lastHazardType: null // Track last hazard type to alternate
};

function createLightBeam(position) {
    const group = new THREE.Group();
    
    // Warning indicator (circle on ground)
    const warningGeometry = new THREE.CircleGeometry(1.5, 32);
    const warningMaterial = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0.5
    });
    const warning = new THREE.Mesh(warningGeometry, warningMaterial);
    warning.rotation.x = -Math.PI / 2;
    warning.position.copy(position);
    warning.position.y = 0.1;
    group.add(warning);

    // Light beam (initially invisible)
    const beamGeometry = new THREE.CylinderGeometry(1.5, 1.5, 20, 16);
    const beamMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
    });
    const beam = new THREE.Mesh(beamGeometry, beamMaterial);
    beam.position.copy(position);
    beam.position.y = 10;
    group.add(beam);

    // Add properties
    group.userData = {
        isWarning: true,
        warningTime: Date.now(),
        damage: 80, // Massive damage increase
        lifetime: 2000,
        lastPlayerPos: player.position.clone(), // Store player's position when beam spawns
    };

    scene.add(group);
    hazards.lightBeams.push(group);
}

// Update createSwordWall for better telegraphing
function createSwordWall(startPosition, endPosition) {
    const group = new THREE.Group();
    const swordCount = 5;
    
    // Create path indicator with improved visibility
    const pathLength = new THREE.Vector3().subVectors(endPosition, startPosition).length();
    const pathWidth = 4; // Increased width for better visibility
    const pathGeometry = new THREE.PlaneGeometry(pathLength, pathWidth);
    const pathMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
    });
    const pathIndicator = new THREE.Mesh(pathGeometry, pathMaterial);
    
    // Add arrow indicators along the path
    const arrowCount = 5;
    const arrowGroup = new THREE.Group();
    for (let i = 0; i < arrowCount; i++) {
        const arrowGeometry = new THREE.ConeGeometry(0.3, 0.6, 4);
        const arrowMaterial = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 0.5
        });
        const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
        arrow.position.set(
            (i - arrowCount/2) * (pathLength/arrowCount),
            0.2,
            0
        );
        arrow.rotation.x = Math.PI / 2;
        arrowGroup.add(arrow);
    }
    group.add(arrowGroup);
    
    // Position and rotate path indicator
    pathIndicator.position.copy(startPosition);
    pathIndicator.position.y = 0.1;
    const direction = new THREE.Vector3().subVectors(endPosition, startPosition).normalize();
    const angle = Math.atan2(direction.x, direction.z);
    pathIndicator.rotation.set(-Math.PI / 2, 0, -angle);
    arrowGroup.rotation.y = angle;
    
    group.add(pathIndicator);
    
    // Create swords (initially invisible)
    for (let i = 0; i < swordCount; i++) {
        const swordGeometry = new THREE.BoxGeometry(0.2, 2, 0.2);
        const swordMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffcc,
            transparent: true,
            opacity: 0
        });
        const sword = new THREE.Mesh(swordGeometry, swordMaterial);
        sword.position.set(0, 1, i * 3 - (swordCount * 3) / 2);
        group.add(sword);
    }

    group.position.copy(startPosition);
    group.userData = {
        velocity: direction.multiplyScalar(0.1), // Reduced from 0.3 to 0.1 for much slower movement
        damage: 80,
        isWarning: true,
        warningTime: Date.now(),
        pathIndicator: pathIndicator,
        arrowGroup: arrowGroup
    };

    scene.add(group);
    hazards.swords.push(group);
    return group;
}

// Update spawnRandomHazard to include end position for sword walls
function spawnRandomHazard() {
    const currentTime = Date.now();
    if (currentTime < hazards.nextHazardTime) return;

    // Alternate between beam and sword, or force beam if we've had two swords in a row
    const shouldSpawnBeam = hazards.lastHazardType === 'sword' || Math.random() < 0.6;
    
    if (shouldSpawnBeam) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 10 + 5;
        const position = new THREE.Vector3(
            player.position.x + Math.cos(angle) * radius,
            0,
            player.position.z + Math.sin(angle) * radius
        );

        // Check if player is moving
        const playerVelocity = new THREE.Vector2(
            keys.d ? 0.1 : (keys.a ? -0.1 : 0),
            keys.s ? 0.1 : (keys.w ? -0.1 : 0)
        );

        if (playerVelocity.length() < 0.01) {
            position.copy(player.position);
            position.y = 0;
        }

        createLightBeam(position);
        hazards.lastHazardType = 'beam';
    } else {
        const side = Math.floor(Math.random() * 4);
        const distance = 30;
        let startPos, endPos;
        
        switch(side) {
            case 0: // North to South
                startPos = new THREE.Vector3(player.position.x, 0, player.position.z + distance);
                endPos = new THREE.Vector3(player.position.x, 0, player.position.z - distance);
                break;
            case 1: // South to North
                startPos = new THREE.Vector3(player.position.x, 0, player.position.z - distance);
                endPos = new THREE.Vector3(player.position.x, 0, player.position.z + distance);
                break;
            case 2: // East to West
                startPos = new THREE.Vector3(player.position.x + distance, 0, player.position.z);
                endPos = new THREE.Vector3(player.position.x - distance, 0, player.position.z);
                break;
            case 3: // West to East
                startPos = new THREE.Vector3(player.position.x - distance, 0, player.position.z);
                endPos = new THREE.Vector3(player.position.x + distance, 0, player.position.z);
                break;
        }
        
        createSwordWall(startPos, endPos);
        hazards.lastHazardType = 'sword';
    }

    hazards.nextHazardTime = currentTime + hazards.hazardCooldown;
}

// Update boss state to spawn immediately for testing
const bossState = {
    boss: null,
    isSpawned: false,
    spawnTime: 0, // Set to 0 for immediate spawn during testing
    projectiles: [],
    lastShotTime: 0,
    shootingCooldown: 1000,
    hasGameStarted: true // Set to true for immediate spawn
};

function createBossProjectile(position, direction) {
    const projectileGroup = new THREE.Group();
    
    // Main projectile sphere
    const geometry = new THREE.SphereGeometry(0.5, 16, 16);
    const material = new THREE.MeshPhongMaterial({
        color: 0xff00ff,
        emissive: 0x800080,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.8
    });
    const projectile = new THREE.Mesh(geometry, material);
    projectileGroup.add(projectile);

    // Trail particles (make them larger and more visible)
    const trailCount = 12; // Increased from 8
    const trails = [];
    for (let i = 0; i < trailCount; i++) {
        const trailGeometry = new THREE.SphereGeometry(0.4 - (i * 0.03), 8, 8);
        const trailMaterial = new THREE.MeshBasicMaterial({
            color: 0xff00ff,
            transparent: true,
            opacity: 0.6 - (i * 0.05)
        });
        const trail = new THREE.Mesh(trailGeometry, trailMaterial);
        trails.push(trail);
        projectileGroup.add(trail);
    }

    projectileGroup.position.copy(position);
    projectileGroup.userData = {
        velocity: direction.multiplyScalar(0.1), // Reduced from 0.2 to 0.1
        damage: 15,
        time: 0,
        trails: trails,
        basePosition: position.clone()
    };

    scene.add(projectileGroup);
    bossState.projectiles.push(projectileGroup);
}

// Add projectile impact effect function
function createProjectileImpact(position) {
    const impactGroup = new THREE.Group();
    const particleCount = 12;
    const particles = [];
    
    // Create shards that spread outward
    for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2;
        const radius = 0.3;
        
        // Create shard geometry (flat and visible from above)
        const shardGeometry = new THREE.ConeGeometry(0.2, 0.4, 4);
        const shardMaterial = new THREE.MeshPhongMaterial({
            color: 0xff00ff,
            emissive: 0x800080,
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.8
        });
        const shard = new THREE.Mesh(shardGeometry, shardMaterial);
        
        // Position shard in a circle
        shard.position.set(
            Math.cos(angle) * radius,
            0.5, // Slightly above ground
            Math.sin(angle) * radius
        );
        
        // Rotate shard to face outward
        shard.rotation.x = Math.PI / 2;
        shard.rotation.y = angle;
        
        // Add velocity for animation
        shard.userData = {
            velocity: new THREE.Vector3(
                Math.cos(angle) * 0.1,
                0.05, // Slight upward velocity
                Math.sin(angle) * 0.1
            ),
            rotationSpeed: (Math.random() - 0.5) * 0.2,
            age: 0,
            lifetime: 1 + Math.random() * 0.5
        };
        
        particles.push(shard);
        impactGroup.add(shard);
    }
    
    // Add a flash effect (flat circle on the ground)
    const flashGeometry = new THREE.CircleGeometry(1, 16);
    const flashMaterial = new THREE.MeshBasicMaterial({
        color: 0xff00ff,
        transparent: true,
        opacity: 0.7
    });
    const flash = new THREE.Mesh(flashGeometry, flashMaterial);
    flash.rotation.x = -Math.PI / 2;
    flash.position.y = 0.1;
    flash.userData = {
        age: 0,
        lifetime: 0.3
    };
    impactGroup.add(flash);
    
    impactGroup.position.copy(position);
    impactGroup.userData = {
        particles: particles,
        flash: flash,
        age: 0
    };
    
    scene.add(impactGroup);
    return impactGroup;
}

function createBossEnemy() {
    const bossGroup = new THREE.Group();
    
    // Main body (slightly smaller purple sphere)
    const bodyGeometry = new THREE.SphereGeometry(2.5, 32, 32); // Reduced from 3
    const bodyMaterial = new THREE.MeshPhongMaterial({
        color: 0x800080,
        emissive: 0x400040,
        emissiveIntensity: 0.3,
        shininess: 50
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    bossGroup.add(body);

    // Spikes around the body (adjusted for smaller size)
    const spikeCount = 8;
    for (let i = 0; i < spikeCount; i++) {
        const angle = (i / spikeCount) * Math.PI * 2;
        const spikeGeometry = new THREE.ConeGeometry(0.4, 1.6, 4); // Reduced size
        const spikeMaterial = new THREE.MeshPhongMaterial({
            color: 0xff00ff,
            emissive: 0x800080,
            emissiveIntensity: 0.3
        });
        const spike = new THREE.Mesh(spikeGeometry, spikeMaterial);
        spike.position.set(
            Math.cos(angle) * 2.5, // Adjusted radius
            0,
            Math.sin(angle) * 2.5
        );
        spike.lookAt(new THREE.Vector3(
            Math.cos(angle) * 5,
            0,
            Math.sin(angle) * 5
        ));
        bossGroup.add(spike);
    }

    // Health bar (same size for visibility)
    const healthBarWidth = 4;
    const healthBarHeight = 0.3;
    const healthBarGeometry = new THREE.PlaneGeometry(healthBarWidth, healthBarHeight);
    const healthBarMaterial = new THREE.MeshBasicMaterial({
        color: 0xff00ff,
        side: THREE.DoubleSide
    });
    const healthBar = new THREE.Mesh(healthBarGeometry, healthBarMaterial);
    healthBar.position.set(0, 3.5, 0); // Adjusted height
    healthBar.rotation.x = -Math.PI / 4;
    healthBar.userData.initialScale = healthBar.scale.x;
    bossGroup.add(healthBar);
    bossGroup.userData.healthBar = healthBar;

    // Reduced boss properties
    bossGroup.userData.health = 500; // Reduced from 1000
    bossGroup.userData.maxHealth = 500;
    bossGroup.userData.moveSpeed = 0.05;
    bossGroup.position.set(0, 2, -40);
    
    return bossGroup;
}

// Add HUD creation after renderer setup
function createHUD() {
    const hudContainer = document.createElement('div');
    hudContainer.style.position = 'fixed';
    hudContainer.style.bottom = '20px';
    hudContainer.style.left = '20px';
    hudContainer.style.color = 'white';
    hudContainer.style.fontFamily = 'Arial, sans-serif';
    hudContainer.style.fontSize = '24px';
    hudContainer.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    hudContainer.id = 'hudContainer';
    
    const killsCounter = document.createElement('div');
    killsCounter.id = 'killsCounter';
    killsCounter.textContent = 'Kills: 0';
    hudContainer.appendChild(killsCounter);
    
    document.body.appendChild(hudContainer);
}

createHUD();

// Add tree creation function after createEnemyShip function
function createTree(position) {
    const treeGroup = new THREE.Group();
    
    // Tree trunk (brown cylinder)
    const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.4, 1.5, 8);
    const trunkMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x8B4513,
        flatShading: true 
    });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 0.75;
    treeGroup.add(trunk);
    
    // Tree top (green cone for top-down perspective)
    const topGeometry = new THREE.ConeGeometry(1.5, 2, 8);
    const topMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x228B22,
        flatShading: true 
    });
    const top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 2;
    treeGroup.add(top);
    
    // Set position
    treeGroup.position.copy(position);
    treeGroup.position.y = 0;
    
    // Add slight tilt for isometric feel (rotate around X and Z slightly)
    const tiltAngle = Math.PI / 12; // 15 degrees
    const randomRotation = Math.random() * Math.PI * 2; // Random rotation around Y
    treeGroup.rotation.x = (Math.random() * 0.2 - 0.1) * tiltAngle; // Subtle random tilt
    treeGroup.rotation.z = (Math.random() * 0.2 - 0.1) * tiltAngle; // Subtle random tilt
    treeGroup.rotation.y = randomRotation; // Random rotation for variety
    
    // Add collision radius
    treeGroup.userData.collisionRadius = 1.2;
    
    return treeGroup;
}

// Add tree spawning after ground creation
const trees = [];
function spawnTrees() {
    const numberOfTrees = 20;
    const mapSize = 100; // Adjust based on your game area
    
    for (let i = 0; i < numberOfTrees; i++) {
        const x = (Math.random() - 0.5) * mapSize;
        const z = (Math.random() - 0.5) * mapSize;
        const position = new THREE.Vector3(x, 0, z);
        
        // Check distance from other trees to prevent overlap
        let tooClose = false;
        for (const tree of trees) {
            if (position.distanceTo(tree.position) < 5) {
                tooClose = true;
                break;
            }
        }
        
        if (!tooClose) {
            const tree = createTree(position);
            scene.add(tree);
            trees.push(tree);
        }
    }
}

spawnTrees();

function animate() {
    requestAnimationFrame(animate);

    if (gameState.isGameOver) return;

    // Player movement (slower speed)
    const moveSpeed = 0.1;
    const newPosition = player.position.clone();

    if (keys.w) newPosition.z -= moveSpeed;
    if (keys.s) newPosition.z += moveSpeed;
    if (keys.a) newPosition.x -= moveSpeed;
    if (keys.d) newPosition.x += moveSpeed;

    // Check for tree collisions before applying movement
    let canMove = true;
    for (const tree of trees) {
        if (newPosition.distanceTo(tree.position) < tree.userData.collisionRadius + 0.5) {
            canMove = false;
            break;
        }
    }

    // Only update position if no collision
    if (canMove) {
        player.position.copy(newPosition);
    }

    // Update camera to follow player
    updateCamera();

    // Update player rotation to face mouse (keep this working with camera movement)
    if (gameState.mousePosition.x !== undefined) {
        const vector = new THREE.Vector3(
            (gameState.mousePosition.x / window.innerWidth) * 2 - 1,
            -(gameState.mousePosition.y / window.innerHeight) * 2 + 1,
            0.5
        );
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.y / dir.y;
        const targetPos = new THREE.Vector3()
            .copy(camera.position)
            .add(dir.multiplyScalar(distance));

        // Make player face the mouse position
        player.lookAt(new THREE.Vector3(targetPos.x, player.position.y, targetPos.z));
    }

    // Automatic shooting
    if (gameState.isShooting) {
        shoot(gameState.mousePosition);
    }

    // Update stamina
    if (!gameState.isShooting) {
        gameState.playerStamina = Math.min(100, gameState.playerStamina + gameState.staminaRechargeRate * 0.016); // 0.016 is roughly 60 FPS
    }
    
    // Update stamina bar
    player.userData.staminaBar.scale.x = (gameState.playerStamina / 100) * player.userData.staminaBar.userData.initialScale;

    // Update health bars to always face camera
    player.userData.healthBar.quaternion.copy(camera.quaternion);
    player.userData.staminaBar.quaternion.copy(camera.quaternion);
    enemies.forEach(enemy => {
        enemy.userData.healthBar.quaternion.copy(camera.quaternion);
        
        // Update enemy health bar position to avoid overlapping with the model
        const toCamera = new THREE.Vector3().subVectors(camera.position, enemy.position).normalize();
        const offsetDistance = 1.2;
        enemy.userData.healthBar.position.set(
            0,
            1.2,
            -0.8
        );
    });

    // Update bullets (adjust max distance for larger play area)
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        bullet.position.add(bullet.userData.velocity);

        // Remove bullets that are too far from player
        if (bullet.position.distanceTo(player.position) > 50) {
            scene.remove(bullet);
            bullets.splice(i, 1);
            continue;
        }

        // Check for enemy collisions
        for (let j = enemies.length - 1; j >= 0; j--) {
            const enemy = enemies[j];
            if (bullet.position.distanceTo(enemy.position) < 1) {
                enemy.userData.health -= 34;
                scene.remove(bullet);
                bullets.splice(i, 1);

                // Update enemy health bar
                const healthPercent = enemy.userData.health / enemy.userData.maxHealth;
                enemy.userData.healthBar.scale.x = Math.max(0, healthPercent) * enemy.userData.healthBar.userData.initialScale;

                if (enemy.userData.health <= 0) {
                    explosions.push(createExplosion(enemy.position.clone()));
                    scene.remove(enemy);
                    enemies.splice(j, 1);
                    // Increment kills counter
                    gameStats.kills++;
                    document.getElementById('killsCounter').textContent = `Kills: ${gameStats.kills}`;
                }
                break;
            }
        }

        // Check for boss collision
        if (bossState.boss && bullet.position.distanceTo(bossState.boss.position) < 3) {
            bossState.boss.userData.health -= 10;
            scene.remove(bullet);
            bullets.splice(i, 1);

            // Update boss health bar
            const healthPercent = bossState.boss.userData.health / bossState.boss.userData.maxHealth;
            bossState.boss.userData.healthBar.scale.x = Math.max(0, healthPercent) * bossState.boss.userData.healthBar.userData.initialScale;

            if (bossState.boss.userData.health <= 0) {
                // Create large explosion
                for (let i = 0; i < 3; i++) {
                    explosions.push(createExplosion(bossState.boss.position.clone()));
                }
                scene.remove(bossState.boss);
                bossState.boss = null;
                gameState.isGameOver = true;
                showGameOverScreen();
            }
            break;
        }

        // Check for tree collisions
        for (const tree of trees) {
            if (bullet.position.distanceTo(tree.position) < tree.userData.collisionRadius) {
                const impact = createProjectileImpact(bullet.position.clone());
                explosions.push(impact);
                scene.remove(bullet);
                bullets.splice(i, 1);
                break;
            }
        }
    }

    // Update enemies (clean up enemies that are too far from player)
    const maxEnemyDistance = 100;
    const enemySpeed = 0.05;
    const enemyRadius = 1.0;

    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        
        // Remove enemies that are too far from player
        if (enemy.position.distanceTo(player.position) > maxEnemyDistance) {
            scene.remove(enemy);
            enemies.splice(i, 1);
            continue;
        }

        // Update sway movement parameters
        const moveParams = enemy.userData.moveParams;
        moveParams.time += 0.016;

        // Calculate base direction to player
        const direction = new THREE.Vector3()
            .subVectors(player.position, enemy.position)
            .normalize();

        // Check for nearby trees and adjust direction
        let avoidanceVector = new THREE.Vector3();
        trees.forEach(tree => {
            const distanceToTree = enemy.position.distanceTo(tree.position);
            if (distanceToTree < tree.userData.collisionRadius + enemyRadius + 1) {
                const awayFromTree = new THREE.Vector3()
                    .subVectors(enemy.position, tree.position)
                    .normalize()
                    .multiplyScalar(1 / Math.max(0.1, distanceToTree));
                avoidanceVector.add(awayFromTree);
            }
        });
        
        // Add avoidance to direction
        direction.add(avoidanceVector);
        direction.normalize();

        // Calculate perpendicular vector for sideways movement
        const perpendicular = new THREE.Vector3(-direction.z, 0, direction.x);
        
        // Apply artistic swaying motion with tree avoidance
        const swayAmount = Math.sin(moveParams.time * moveParams.frequency + moveParams.offset) * moveParams.amplitude;
        const finalDirection = new THREE.Vector3()
            .addVectors(
                direction.multiplyScalar(enemy.userData.speed),
                perpendicular.multiplyScalar(swayAmount * enemy.userData.speed)
            );

        // Apply movement
        enemy.position.add(finalDirection);

        // Smooth rotation to face movement direction
        const targetRotation = Math.atan2(finalDirection.x, finalDirection.z);
        enemy.rotation.y = targetRotation;

        // Check collision with player
        if (enemy.position.distanceTo(player.position) < 1) {
            gameState.playerHealth -= 0.5;
            
            // Update player health bar
            const healthPercent = gameState.playerHealth / 100;
            player.userData.healthBar.scale.x = Math.max(0, healthPercent) * player.userData.healthBar.userData.initialScale;

            if (gameState.playerHealth <= 0 && !gameState.isGameOver) {
                gameState.isGameOver = true;
                showGameOverScreen();
            }
        }
    }

    // Then handle enemy-enemy collisions
    for (let i = 0; i < enemies.length; i++) {
        const enemy1 = enemies[i];
        for (let j = i + 1; j < enemies.length; j++) {
            const enemy2 = enemies[j];
            const distance = enemy1.position.distanceTo(enemy2.position);
            
            // If enemies are too close, push them apart
            if (distance < enemyRadius * 2) {
                const overlap = enemyRadius * 2 - distance;
                const direction = new THREE.Vector3()
                    .subVectors(enemy1.position, enemy2.position)
                    .normalize();
                
                // Move each enemy half the overlap distance
                enemy1.position.add(direction.multiplyScalar(overlap * 0.5));
                enemy2.position.add(direction.multiplyScalar(-overlap * 0.5));
            }
        }
    }

    // Update explosions
    for (let i = explosions.length - 1; i >= 0; i--) {
        const explosion = explosions[i];
        
        if (explosion.userData.particles) {
            // This is an impact effect
            explosion.userData.age += 0.016;
            let allParticlesExpired = true;
            
            // Update particles
            explosion.userData.particles.forEach(shard => {
                shard.position.add(shard.userData.velocity);
                shard.userData.velocity.y -= 0.003; // Gentle gravity
                shard.rotation.z += shard.userData.rotationSpeed;
                shard.userData.age += 0.016;
                
                if (shard.userData.age < shard.userData.lifetime) {
                    allParticlesExpired = false;
                    const lifePercent = 1 - (shard.userData.age / shard.userData.lifetime);
                    shard.scale.setScalar(lifePercent);
                    shard.material.opacity = lifePercent * 0.8;
                }
            });
            
            // Update flash
            if (explosion.userData.flash) {
                const flash = explosion.userData.flash;
                flash.userData.age += 0.016;
                if (flash.userData.age < flash.userData.lifetime) {
                    const lifePercent = 1 - (flash.userData.age / flash.userData.lifetime);
                    flash.material.opacity = lifePercent * 0.7;
                    flash.scale.setScalar(1 + (1 - lifePercent) * 2);
                }
            }
            
            if (allParticlesExpired) {
                scene.remove(explosion);
                explosions.splice(i, 1);
            }
        } else {
            // This is a regular explosion
            let allParticlesExpired = true;
            explosion.children.forEach(particle => {
                particle.position.add(particle.userData.velocity);
                particle.userData.velocity.y -= 0.01; // Gravity
                particle.userData.age += 0.016;

                if (particle.userData.age < particle.userData.lifetime) {
                    allParticlesExpired = false;
                    const lifePercent = 1 - (particle.userData.age / particle.userData.lifetime);
                    particle.scale.setScalar(lifePercent);
                    particle.material.opacity = lifePercent;
                }
            });

            if (allParticlesExpired) {
                scene.remove(explosion);
                explosions.splice(i, 1);
            }
        }
    }

    // Update hazards
    spawnRandomHazard();

    // Update light beams
    for (let i = hazards.lightBeams.length - 1; i >= 0; i--) {
        const beam = hazards.lightBeams[i];
        const elapsed = Date.now() - beam.userData.warningTime;

        if (elapsed < hazards.warningDuration) {
            // Warning phase - pulse the warning indicator
            const warning = beam.children[0];
            warning.material.opacity = 0.3 + Math.sin(elapsed * 0.01) * 0.2;
        } else if (beam.userData.isWarning) {
            // Activate beam
            beam.userData.isWarning = false;
            const beamMesh = beam.children[1];
            beamMesh.material.opacity = 0.8;
            
            // Add glow effect
            const glowGeometry = new THREE.CylinderGeometry(2, 2, 20, 16);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: 0xffff88,
                transparent: true,
                opacity: 0.3
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            glow.position.copy(beamMesh.position);
            beam.add(glow);
        }

        // Check player collision with active beam
        if (!beam.userData.isWarning) {
            const beamPos2D = new THREE.Vector2(beam.position.x, beam.position.z);
            const playerPos2D = new THREE.Vector2(player.position.x, player.position.z);
            
            // Calculate player movement since beam spawned
            const lastPos2D = new THREE.Vector2(beam.userData.lastPlayerPos.x, beam.userData.lastPlayerPos.z);
            const playerMovement = playerPos2D.distanceTo(lastPos2D);
            
            if (beamPos2D.distanceTo(playerPos2D) < 1.5 || playerMovement < 0.1) {
                // Calculate damage as percentage of current health
                const damageAmount = Math.max(gameState.playerHealth * 0.8, 20); // At least 20 damage
                gameState.playerHealth -= damageAmount;
                const healthPercent = gameState.playerHealth / 100;
                player.userData.healthBar.scale.x = Math.max(0, healthPercent) * player.userData.healthBar.userData.initialScale;

                if (gameState.playerHealth <= 0 && !gameState.isGameOver) {
                    gameState.isGameOver = true;
                    showGameOverScreen();
                }
            }
        }

        // Remove expired beams
        if (elapsed > beam.userData.lifetime) {
            scene.remove(beam);
            hazards.lightBeams.splice(i, 1);
        }
    }

    // Update sword walls
    for (let i = hazards.swords.length - 1; i >= 0; i--) {
        const swordWall = hazards.swords[i];
        const elapsed = Date.now() - swordWall.userData.warningTime;

        if (elapsed < hazards.swordWarningDuration) {
            // Warning phase - enhanced visual feedback
            const warningProgress = elapsed / hazards.swordWarningDuration;
            const pulseIntensity = 0.3 + Math.sin(elapsed * 0.01) * 0.2;
            swordWall.userData.pathIndicator.material.opacity = pulseIntensity;
            
            // Animate warning arrows
            if (swordWall.userData.arrowGroup) {
                swordWall.userData.arrowGroup.children.forEach((arrow, index) => {
                    arrow.material.opacity = pulseIntensity;
                    // Make arrows "flow" in the direction of movement
                    arrow.position.y = 0.2 + Math.sin(elapsed * 0.01 + index) * 0.1;
                });
            }
            
            // Keep swords invisible during warning
            swordWall.children.forEach((child, index) => {
                if (child.geometry instanceof THREE.BoxGeometry) {
                    child.material.opacity = 0;
                }
            });
        } else if (swordWall.userData.isWarning) {
            // Activate swords with a flash effect
            swordWall.userData.isWarning = false;
            swordWall.userData.pathIndicator.material.opacity = 0;
            
            if (swordWall.userData.arrowGroup) {
                swordWall.userData.arrowGroup.children.forEach(arrow => {
                    arrow.material.opacity = 0;
                });
            }
            
            swordWall.children.forEach((child, index) => {
                if (child.geometry instanceof THREE.BoxGeometry) {
                    child.material.opacity = 1;
                    child.material.color.setHex(0xffff00);
                }
            });
        }

        // Move swords after warning phase
        if (!swordWall.userData.isWarning) {
            swordWall.position.add(swordWall.userData.velocity);
        }

        // Improved collision detection for individual swords
        if (!swordWall.userData.isWarning) {
            let collisionDetected = false;
            
            // Check each sword in the wall individually
            swordWall.children.forEach((child) => {
                if (child.geometry instanceof THREE.BoxGeometry) {
                    // Create a tighter bounding box for each sword
                    const swordBox = new THREE.Box3().setFromObject(child);
                    // Create a smaller bounding box for the player
                    const playerCenter = player.position.clone();
                    const playerBox = new THREE.Box3().setFromCenterAndSize(
                        playerCenter,
                        new THREE.Vector3(0.8, 1.0, 0.8) // Smaller collision box for player
                    );
                    
                    if (swordBox.intersectsBox(playerBox)) {
                        collisionDetected = true;
                    }
                }
            });

            if (collisionDetected) {
                const damageAmount = Math.max(gameState.playerHealth * 0.8, 20);
                gameState.playerHealth -= damageAmount;
                const healthPercent = gameState.playerHealth / 100;
                player.userData.healthBar.scale.x = Math.max(0, healthPercent) * player.userData.healthBar.userData.initialScale;

                if (gameState.playerHealth <= 0 && !gameState.isGameOver) {
                    gameState.isGameOver = true;
                    showGameOverScreen();
                }
            }
        }

        // Remove swords that are too far
        if (swordWall.position.distanceTo(player.position) > 50) {
            scene.remove(swordWall);
            hazards.swords.splice(i, 1);
        }
    }

    // Boss spawn check (simplified for testing)
    if (!bossState.isSpawned) {
        bossState.boss = createBossEnemy();
        scene.add(bossState.boss);
        bossState.isSpawned = true;
    }

    // Boss update logic
    if (bossState.boss && !gameState.isGameOver) {
        const boss = bossState.boss;
        
        // Boss movement (circle around player)
        const angleToPlayer = Math.atan2(
            player.position.z - boss.position.z,
            player.position.x - boss.position.x
        );
        const distanceToPlayer = boss.position.distanceTo(player.position);
        const targetDistance = 20; // Desired distance from player
        
        // Calculate movement
        const moveSpeed = boss.userData.moveSpeed;
        if (distanceToPlayer > targetDistance + 1) {
            boss.position.x += Math.cos(angleToPlayer) * moveSpeed;
            boss.position.z += Math.sin(angleToPlayer) * moveSpeed;
        } else if (distanceToPlayer < targetDistance - 1) {
            boss.position.x -= Math.cos(angleToPlayer) * moveSpeed;
            boss.position.z -= Math.sin(angleToPlayer) * moveSpeed;
        }
        
        // Rotate boss to face player
        boss.lookAt(player.position);
        
        // Boss shooting
        const currentTime = Date.now();
        if (currentTime - bossState.lastShotTime > bossState.shootingCooldown) {
            const direction = new THREE.Vector3()
                .subVectors(player.position, boss.position)
                .normalize();
            createBossProjectile(boss.position.clone(), direction);
            bossState.lastShotTime = currentTime;
        }

        // Update boss health bar to face camera
        boss.userData.healthBar.quaternion.copy(camera.quaternion);
    }

    // Update boss projectiles with sinusoidal movement
    for (let i = bossState.projectiles.length - 1; i >= 0; i--) {
        const projectile = bossState.projectiles[i];
        
        // Add enemy collision check before player collision
        for (let j = enemies.length - 1; j >= 0; j--) {
            const enemy = enemies[j];
            if (projectile.position.distanceTo(enemy.position) < 1.5) {
                // Create separate explosion effects
                const enemyExplosion = createExplosion(enemy.position.clone());
                const projectileImpact = createProjectileImpact(enemy.position.clone());
                explosions.push(enemyExplosion);
                explosions.push(projectileImpact);
                
                // Remove enemy and projectile
                scene.remove(enemy);
                enemies.splice(j, 1);
                scene.remove(projectile);
                bossState.projectiles.splice(i, 1);
                break;
            }
        }

        // Rest of projectile update logic...
        if (projectile && projectile.parent) {
            projectile.userData.time += 0.1;
            
            // Calculate base movement
            const baseMovement = projectile.userData.velocity.clone();
            
            // Add sinusoidal movement perpendicular to direction
            const perpendicular = new THREE.Vector3(-baseMovement.z, 0, baseMovement.x).normalize();
            const sineOffset = perpendicular.multiplyScalar(Math.sin(projectile.userData.time) * 0.1);
            
            // Apply combined movement
            projectile.position.add(baseMovement);
            projectile.position.add(sineOffset);
            
            // Update trail positions
            projectile.userData.trails.forEach((trail, index) => {
                const timeOffset = index * 0.2;
                trail.position.copy(new THREE.Vector3(
                    -baseMovement.x * index * 0.5,
                    0,
                    -baseMovement.z * index * 0.5
                ));
                trail.position.add(perpendicular.multiplyScalar(
                    Math.sin(projectile.userData.time - timeOffset) * 0.1
                ));
            });

            // Check collision with player
            if (projectile.position.distanceTo(player.position) < 1) {
                // Create impact effect before removing projectile
                const impact = createProjectileImpact(projectile.position.clone());
                explosions.push(impact); // Add to explosions array to be updated

                gameState.playerHealth -= projectile.userData.damage;
                const healthPercent = gameState.playerHealth / 100;
                player.userData.healthBar.scale.x = Math.max(0, healthPercent) * player.userData.healthBar.userData.initialScale;
                
                scene.remove(projectile);
                bossState.projectiles.splice(i, 1);
                
                if (gameState.playerHealth <= 0 && !gameState.isGameOver) {
                    gameState.isGameOver = true;
                    showGameOverScreen();
                }
                continue;
            }
            
            // Check for tree collisions
            for (const tree of trees) {
                if (projectile.position.distanceTo(tree.position) < tree.userData.collisionRadius) {
                    const impact = createProjectileImpact(projectile.position.clone());
                    explosions.push(impact);
                    scene.remove(projectile);
                    bossState.projectiles.splice(i, 1);
                    break;
                }
            }
            
            // Remove projectiles that are too far
            if (projectile.position.distanceTo(player.position) > 50) {
                scene.remove(projectile);
                bossState.projectiles.splice(i, 1);
            }
        }
    }

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate(); 