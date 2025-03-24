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
    mousePosition: new THREE.Vector2(), // Store mouse position globally
    isGameStarted: false,
    startTime: 0, // Add this line to track when the game started
    elapsedTime: 0, // Add this line to track elapsed time
    lastTimeUpdate: 0, // Add this line to track last time update
    currentWeapon: 'normal', // Add current weapon state
    powerWeaponAmmo: 0 // Add power weapon ammo count
};

// Add after gameState declaration
const gameStats = {
    kills: 0,
    score: 0
};

// Add after gameState declaration
const playerTrails = {
    particles: [],
    lastSpawnTime: 0,
    spawnInterval: 50, // Spawn a particle every 50ms
    particleLifetime: 1000, // Particles last for 1 second
    particleCount: 8 // Number of particles per spawn
};

// Add after gameState declaration
const staminaWarning = {
    text: null,
    opacity: 0,
    fadeSpeed: 0.1,
    isVisible: false
};

// Add after gameState declaration
const pickups = {
    health: [],
    weapon: [], // Add weapon pickups array
    spawnInterval: 10000, // Spawn a new health pickup every 10 seconds
    lastSpawnTime: 0,
    weaponSpawnInterval: 10000, // Reduced from 15000 to 10000 for more frequent drops
    lastWeaponSpawnTime: 0
};

// Add after the pickups state declaration and before the lighting setup
function createHealthPickup(x, z) {
    const pickup = new THREE.Group();
    
    // Create the white background cross
    const backGeometry = new THREE.BoxGeometry(1.2, 1.2, 0.1);
    const backMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const background = new THREE.Mesh(backGeometry, backMaterial);
    background.rotation.x = -Math.PI / 2; // Lay flat
    pickup.add(background);
    
    // Create the red cross
    const crossGeometry = new THREE.BoxGeometry(0.8, 0.3, 0.15);
    const crossMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xff0000,
        emissive: 0x330000
    });
    const horizontalCross = new THREE.Mesh(crossGeometry, crossMaterial);
    horizontalCross.rotation.x = -Math.PI / 2;
    horizontalCross.position.y = 0.05;
    pickup.add(horizontalCross);
    
    const verticalCross = new THREE.Mesh(crossGeometry, crossMaterial);
    verticalCross.rotation.x = -Math.PI / 2;
    verticalCross.rotation.z = Math.PI / 2;
    verticalCross.position.y = 0.05;
    pickup.add(verticalCross);
    
    // Add green glow effect
    const glowGeometry = new THREE.CircleGeometry(0.8, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = 0.02;
    pickup.add(glow);
    
    pickup.position.set(x, 0.5, z);
    pickup.userData = {
        type: 'health',
        healAmount: 50,
        rotationSpeed: 0.02,
        bobSpeed: 2,
        bobHeight: 0.2,
        initialY: 0.5,
        spawnTime: Date.now()
    };
    
    scene.add(pickup);
    pickups.health.push(pickup);
    return pickup;
}

function spawnHealthPickup() {
    const currentTime = Date.now();
    if (currentTime - pickups.lastSpawnTime >= pickups.spawnInterval) {
        const spawnRadius = 30;
        const angle = Math.random() * Math.PI * 2;
        const x = player.position.x + Math.cos(angle) * spawnRadius;
        const z = player.position.z + Math.sin(angle) * spawnRadius;
        
        // Check if spawn location is clear of planets
        let canSpawn = true;
        for (const planet of planets) {
            if (new THREE.Vector2(x - planet.position.x, z - planet.position.z).length() < planet.userData.collisionRadius + 2) {
                canSpawn = false;
                break;
            }
        }
        
        if (canSpawn) {
            createHealthPickup(x, z);
            pickups.lastSpawnTime = currentTime;
        }
    }
}

// Add weapon pickup creation function
function createWeaponPickup(x, z) {
    const pickup = new THREE.Group();
    
    // Create the main body of the gun (sleek and angular)
    const bodyGeometry = new THREE.BoxGeometry(0.8, 0.3, 1.5);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x444444,
        specular: 0x666666
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.x = -Math.PI / 2; // Lay flat
    pickup.add(body);
    
    // Create the barrel (longer and more prominent)
    const barrelGeometry = new THREE.CylinderGeometry(0.15, 0.15, 2.0, 8);
    const barrelMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x222222,
        specular: 0x444444
    });
    const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel.rotation.x = -Math.PI / 2;
    barrel.position.z = 0.8;
    pickup.add(barrel);
    
    // Create the energy core (glowing sphere at the back)
    const coreGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const coreMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xff00ff,
        emissive: 0x800080,
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.9
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    core.position.z = -0.5;
    pickup.add(core);
    
    // Add energy rings around the core
    for (let i = 0; i < 3; i++) {
        const ringGeometry = new THREE.TorusGeometry(0.4 + i * 0.1, 0.05, 16, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: 0xff00ff,
            transparent: true,
            opacity: 0.5,
            side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = -Math.PI / 2;
        ring.position.z = -0.5;
        pickup.add(ring);
    }
    
    // Add energy glow at barrel tip
    const glowGeometry = new THREE.SphereGeometry(0.2, 8, 8);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0xff00ff,
        transparent: true,
        opacity: 0.8
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.z = 1.8;
    pickup.add(glow);
    
    pickup.position.set(x, 0.5, z);
    pickup.userData = {
        type: 'weapon',
        ammoAmount: 120,
        rotationSpeed: 0.02,
        bobSpeed: 2,
        bobHeight: 0.2,
        initialY: 0.5,
        spawnTime: Date.now()
    };
    
    scene.add(pickup);
    pickups.weapon.push(pickup);
    return pickup;
}

// Add weapon pickup spawn function
function spawnWeaponPickup() {
    const currentTime = Date.now();
    if (currentTime - pickups.lastWeaponSpawnTime >= pickups.weaponSpawnInterval) {
        const spawnRadius = 30;
        const angle = Math.random() * Math.PI * 2;
        const x = player.position.x + Math.cos(angle) * spawnRadius;
        const z = player.position.z + Math.sin(angle) * spawnRadius;
        
        // Check if spawn location is clear of planets
        let canSpawn = true;
        for (const planet of planets) {
            if (new THREE.Vector2(x - planet.position.x, z - planet.position.z).length() < planet.userData.collisionRadius + 2) {
                canSpawn = false;
                break;
            }
        }
        
        if (canSpawn) {
            createWeaponPickup(x, z);
            pickups.lastWeaponSpawnTime = currentTime;
        }
    }
}

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 20, 0);
scene.add(directionalLight);

// Space background shader
const spaceBackgroundVertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const spaceBackgroundFragmentShader = `
    uniform float time;
    uniform vec2 resolution;
    uniform vec2 cameraOffset;
    varying vec2 vUv;

    // Hash function for randomization
    float hash(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    // Smooth noise function
    float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    void main() {
        // Convert UV to screen space coordinates
        vec2 screenUV = gl_FragCoord.xy / resolution.xy;
        
        // Use screen space coordinates instead of world space
        vec2 uv = screenUV * 2.0 - 1.0;
        vec3 finalColor = vec3(0.0);
        
        // Deep space background - darker and more blue-tinted
        finalColor = vec3(0.01, 0.01, 0.03);
        
        // Add subtle nebula effect with fixed position
        float nebula1 = noise(uv * 1.5);
        float nebula2 = noise(uv * 2.0);
        
        // More muted nebula colors
        vec3 nebulaColor1 = vec3(0.2, 0.1, 0.3) * nebula1 * 0.15;
        vec3 nebulaColor2 = vec3(0.1, 0.2, 0.3) * nebula2 * 0.15;
        finalColor += nebulaColor1 + nebulaColor2;
        
        // Add fewer, larger stars with fixed positions
        float stars = 0.0;
        for(float i = 0.0; i < 2.0; i++) {
            vec2 gridUV = fract(screenUV * (50.0 + i * 25.0));
            float star = step(0.995, hash(gridUV));
            stars += star * (sin(time * 1.0 + i) * 0.3 + 0.7);
        }
        finalColor += vec3(stars) * 0.5;
        
        gl_FragColor = vec4(finalColor, 1.0);
    }
`;

// Ground plane (space background)
const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
const spaceBackgroundMaterial = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        cameraOffset: { value: new THREE.Vector2(0, 0) }
    },
    vertexShader: spaceBackgroundVertexShader,
    fragmentShader: spaceBackgroundFragmentShader
});

const ground = new THREE.Mesh(groundGeometry, spaceBackgroundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.1;
scene.add(ground);

// Add window resize handler update for background resolution
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Update resolution uniform
    ground.material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
});

// Create starfield
function createStarfield() {
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true
    });

    const starVertices = [];
    const starColors = [];

    for (let i = 0; i < 2000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);

        const color = new THREE.Color();
        color.setHSL(Math.random(), 0.5, 0.5 + Math.random() * 0.5);
        starColors.push(color.r, color.g, color.b);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
}

// Create a planet instead of a tree
function createPlanet(x, z) {
    const planetGroup = new THREE.Group();
    
    const planetTypes = [
        { 
            radius: 1.5, 
            color: 0x4444ff, 
            emissive: 0x222244,
            hasRings: false,
            moonCount: 2,
            type: 'gas'
        }, // Blue gas giant
        { 
            radius: 0.8, 
            color: 0xff4444, 
            emissive: 0x442222,
            hasRings: true,
            moonCount: 1,
            type: 'rocky'
        }, // Red planet
        { 
            radius: 1.2, 
            color: 0x44ff44, 
            emissive: 0x224422,
            hasRings: true,
            moonCount: 3,
            type: 'ice'
        }, // Green ice planet
        { 
            radius: 0.6, 
            color: 0xffff44, 
            emissive: 0x444422,
            hasRings: false,
            moonCount: 0,
            type: 'desert'
        }  // Yellow desert planet
    ];

    const type = planetTypes[Math.floor(Math.random() * planetTypes.length)];
    
    // Create main planet sphere with surface detail
    const geometry = new THREE.SphereGeometry(type.radius, 32, 32);
    const material = new THREE.MeshStandardMaterial({
        color: type.color,
        emissive: type.emissive,
        roughness: type.type === 'ice' ? 0.3 : 0.7,
        metalness: type.type === 'rocky' ? 0.5 : 0.3
    });

    // Add surface detail based on planet type
    if (type.type === 'rocky' || type.type === 'desert') {
        const bumpGeometry = new THREE.SphereGeometry(type.radius * 1.02, 16, 16);
        const bumpMaterial = new THREE.MeshStandardMaterial({
            color: type.color,
            emissive: type.emissive,
            transparent: true,
            opacity: 0.5,
            roughness: 1.0
        });
        const bumpLayer = new THREE.Mesh(bumpGeometry, bumpMaterial);
        planetGroup.add(bumpLayer);
    }

    const planet = new THREE.Mesh(geometry, material);
    planetGroup.add(planet);

    // Add rings if specified
    if (type.hasRings) {
        const ringGeometry = new THREE.RingGeometry(
            type.radius * 1.5,  // Inner radius
            type.radius * 2.5,  // Outer radius
            64,                 // Segments
            8,                  // Rings
            0,                  // Start angle
            Math.PI * 2        // End angle
        );
        const ringMaterial = new THREE.MeshStandardMaterial({
            color: type.color,
            emissive: type.emissive,
            transparent: true,
            opacity: 0.7,
            side: THREE.DoubleSide,
            depthWrite: false,  // Prevent depth writing issues
            blending: THREE.AdditiveBlending  // Add glow effect
        });
        
        // Create multiple ring layers for better visibility
        for (let i = 0; i < 3; i++) {
            const ring = new THREE.Mesh(ringGeometry, ringMaterial.clone());
            ring.rotation.x = Math.PI / 3;  // Tilt rings
            ring.position.y = i * 0.05;     // Slight vertical offset between layers
            ring.scale.setScalar(1 + i * 0.1);  // Each layer slightly larger
            planetGroup.add(ring);
        }
    }

    // Add moons
    const moons = [];
    for (let i = 0; i < type.moonCount; i++) {
        const moonRadius = type.radius * 0.2;
        const moonGeometry = new THREE.SphereGeometry(moonRadius, 16, 16);
        const moonMaterial = new THREE.MeshStandardMaterial({
            color: 0xcccccc,
            emissive: 0x222222,
            roughness: 0.8,
            metalness: 0.2
        });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        
        // Set up moon's orbit
        const orbitRadius = type.radius * (2 + i * 0.5);
        const orbitSpeed = 0.001 * (1 / (i + 1));
        const orbitOffset = Math.random() * Math.PI * 2;
        
        moon.userData = {
            orbitRadius,
            orbitSpeed,
            orbitOffset,
            time: Math.random() * Math.PI * 2
        };
        
        moons.push(moon);
        planetGroup.add(moon);
    }

    planetGroup.position.set(x, type.radius, z);
    
    // Store properties for collision detection and effects
    planetGroup.userData = {
        type: type.type,
        color: type.color,
        emissive: type.emissive,
        collisionRadius: type.radius,
        moons: moons,
        hasRings: type.hasRings
    };

    return planetGroup;
}

// Replace trees with planets
const planets = [];
for (let i = 0; i < 40; i++) {
    const x = (Math.random() - 0.5) * 400;
    const z = (Math.random() - 0.5) * 400;
    if (Math.abs(x) > 20 || Math.abs(z) > 20) {
        const planet = createPlanet(x, z);
        planets.push(planet);
        scene.add(planet);
    }
}

// Update lighting for space theme
ambientLight.color.setHex(0x333366);
ambientLight.intensity = 0.4;

directionalLight.intensity = 1.0;
directionalLight.position.set(10, 20, 0);

// Add a subtle point light for additional atmosphere
const atmosphereLight = new THREE.PointLight(0x4444ff, 0.5, 100);
atmosphereLight.position.set(0, 20, 0);
scene.add(atmosphereLight);

// Player ship
function createPlayerShip() {
    const shipGroup = new THREE.Group();
    
    // Main hull (sleek and angular)
    const hullGeometry = new THREE.BoxGeometry(0.8, 0.15, 2.2);
    const hullMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xeeeeee, // White base
        shininess: 100,
        specular: 0x666666
    });
    const hull = new THREE.Mesh(hullGeometry, hullMaterial);
    hull.position.set(0, 0, 0);
    shipGroup.add(hull);

    // Front section (sharp nose)
    const noseGeometry = new THREE.CylinderGeometry(0, 0.3, 0.8, 4); // Made more angular with 4 segments
    const noseMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x222222, // Dark accent
        shininess: 90,
        specular: 0x444444
    });
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.rotation.x = Math.PI / 2;
    nose.position.z = -1.0;
    shipGroup.add(nose);

    // Side wings (angled and sharp)
    const wingGeometry = new THREE.BoxGeometry(2.0, 0.05, 1.0);
    const wingMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xdddddd, // Slightly darker white
        shininess: 90,
        specular: 0x666666
    });

    // Left wing
    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
    leftWing.position.set(-0.8, 0, 0);
    leftWing.rotation.z = Math.PI / 12;
    leftWing.rotation.y = -Math.PI / 16;
    shipGroup.add(leftWing);

    // Right wing
    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
    rightWing.position.set(0.8, 0, 0);
    rightWing.rotation.z = -Math.PI / 12;
    rightWing.rotation.y = Math.PI / 16;
    shipGroup.add(rightWing);

    // Wing tips (black accents)
    const tipGeometry = new THREE.BoxGeometry(0.4, 0.1, 0.3);
    const tipMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x111111,
        shininess: 80,
        specular: 0x333333
    });

    // Left tip
    const leftTip = new THREE.Mesh(tipGeometry, tipMaterial);
    leftTip.position.set(-1.8, 0, -0.2);
    leftTip.rotation.z = Math.PI / 12;
    shipGroup.add(leftTip);

    // Right tip
    const rightTip = new THREE.Mesh(tipGeometry, tipMaterial);
    rightTip.position.set(1.8, 0, -0.2);
    rightTip.rotation.z = -Math.PI / 12;
    shipGroup.add(rightTip);

    // Cockpit (sleek and angular)
    const cockpitGeometry = new THREE.BoxGeometry(0.4, 0.1, 0.6);
    const cockpitMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x000000,
        transparent: true, 
        opacity: 0.7,
        shininess: 100,
        specular: 0x666666
    });
    const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
    cockpit.position.set(0, 0.1, -0.4);
    shipGroup.add(cockpit);

    // Engine section (four compact engines)
    const engineGeometry = new THREE.CylinderGeometry(0.12, 0.1, 0.3, 6);
    const engineMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x333333,
        shininess: 90,
        specular: 0x666666
    });

    // Engine positions
    const enginePositions = [
        { x: -0.3, y: 0, z: 0.9 },
        { x: 0.3, y: 0, z: 0.9 },
        { x: -0.1, y: 0, z: 0.9 },
        { x: 0.1, y: 0, z: 0.9 }
    ];

    enginePositions.forEach(pos => {
        const engine = new THREE.Mesh(engineGeometry, engineMaterial);
        engine.position.set(pos.x, pos.y, pos.z);
        engine.rotation.x = Math.PI / 2;
        shipGroup.add(engine);

        // Engine glow (orange-blue gradient effect)
        const innerGlowGeometry = new THREE.CylinderGeometry(0.06, 0.06, 0.05, 6);
        const innerGlowMaterial = new THREE.MeshBasicMaterial({
            color: 0xff6600, // Orange inner
            transparent: true,
            opacity: 0.9,
            side: THREE.DoubleSide
        });
        const innerGlow = new THREE.Mesh(innerGlowGeometry, innerGlowMaterial);
        innerGlow.position.set(pos.x, pos.y, pos.z + 0.15);
        innerGlow.rotation.x = Math.PI / 2;
        shipGroup.add(innerGlow);

        // Outer engine glow (blue)
        const outerGlowGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.02, 6);
        const outerGlowMaterial = new THREE.MeshBasicMaterial({
            color: 0x00aaff, // Light blue outer
            transparent: true,
            opacity: 0.5,
            side: THREE.DoubleSide
        });
        const outerGlow = new THREE.Mesh(outerGlowGeometry, outerGlowMaterial);
        outerGlow.position.set(pos.x, pos.y, pos.z + 0.16);
        outerGlow.rotation.x = Math.PI / 2;
        shipGroup.add(outerGlow);
    });

    // Red accent stripes
    const stripeGeometry = new THREE.BoxGeometry(0.05, 0.01, 1.0);
    const stripeMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xff3333,
        shininess: 90,
        specular: 0x882222
    });

    // Left stripe
    const leftStripe = new THREE.Mesh(stripeGeometry, stripeMaterial);
    leftStripe.position.set(-0.3, 0.08, -0.2);
    shipGroup.add(leftStripe);

    // Right stripe
    const rightStripe = new THREE.Mesh(stripeGeometry, stripeMaterial);
    rightStripe.position.set(0.3, 0.08, -0.2);
    shipGroup.add(rightStripe);

    // Health bar
    const healthBarWidth = 1;
    const healthBarHeight = 0.1;
    const healthBarGeometry = new THREE.PlaneGeometry(healthBarWidth, healthBarHeight);
    const healthBarMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00,
        side: THREE.DoubleSide
    });
    const healthBar = new THREE.Mesh(healthBarGeometry, healthBarMaterial);
    healthBar.position.set(0, 0.8, -0.6);
    healthBar.rotation.x = -Math.PI / 3;
    healthBar.userData.initialScale = healthBar.scale.x;
    shipGroup.add(healthBar);
    shipGroup.userData.healthBar = healthBar;

    // Stamina bar
    const staminaBarGeometry = new THREE.PlaneGeometry(healthBarWidth, healthBarHeight);
    const staminaBarMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xE8B71C,
        side: THREE.DoubleSide
    });
    const staminaBar = new THREE.Mesh(staminaBarGeometry, staminaBarMaterial);
    staminaBar.position.set(0, 0.8, -0.4);
    staminaBar.rotation.x = -Math.PI / 3;
    staminaBar.userData.initialScale = staminaBar.scale.x;
    shipGroup.add(staminaBar);
    shipGroup.userData.staminaBar = staminaBar;

    shipGroup.position.y = 0.5;
    return shipGroup;
}

const player = createPlayerShip();
scene.add(player);

// Camera setup (initial position)
camera.position.set(0, 20, 0);
camera.lookAt(player.position);

// Update field of view for better close-up perspective
camera.fov = 60;
camera.updateProjectionMatrix();

// Adjust player health and stamina bar positions for better visibility at new camera height
function updatePlayerBars() {
    const healthBar = player.userData.healthBar;
    const staminaBar = player.userData.staminaBar;
    
    // Position bars closer to player model
    healthBar.position.set(0, 0.8, -0.6);  // Reduced height from 1.2 to 0.8
    staminaBar.position.set(0, 0.8, -0.4); // Reduced height and moved slightly forward
    
    // Adjust rotation for better visibility
    healthBar.rotation.x = -Math.PI / 3;  // Less steep angle
    staminaBar.rotation.x = -Math.PI / 3;
}

// Call updatePlayerBars after creating player
updatePlayerBars();

// Movement controls
const keys = {
    w: false,
    s: false,
    a: false,
    d: false,
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

// Add shooting mode state
const shootingMode = {
    useMouse: true // true for mouse, false for arrow keys
};

// Add key event listeners for arrow keys
window.addEventListener('keydown', (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
    }
    // Toggle shooting mode with Tab key
    if (e.key === 'Tab') {
        e.preventDefault(); // Prevent tab from changing focus
        shootingMode.useMouse = !shootingMode.useMouse;
    }
});

window.addEventListener('keyup', (e) => {
    if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = false;
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
const bulletGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.4, 8); // Increased radius and length
const bulletMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x00ffff,
    emissive: 0x0088ff,
    emissiveIntensity: 0.8,
    transparent: true,
    opacity: 0.9
});

function createBullet(position, direction) {
    // Create bullet group to hold both bullet and trail
    const bulletGroup = new THREE.Group();
    bulletGroup.position.copy(position);
    
    // Main bullet
    const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
    bulletGroup.add(bullet);
    
    // Simple trail (just 3 segments to keep it lightweight)
    const trailMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.5
    });
    
    const trailSegments = [];
    for (let i = 0; i < 3; i++) {
        const trailGeometry = new THREE.CylinderGeometry(0.06, 0.06, 0.3, 8); // Increased from 0.03 to 0.06
        const trail = new THREE.Mesh(trailGeometry, trailMaterial.clone());
        trail.material.opacity = 0.5 - (i * 0.15); // Fade out each segment
        trail.position.z = -(i + 1) * 0.3; // Increased spacing between segments
        bulletGroup.add(trail);
        trailSegments.push(trail);
    }
    
    bulletGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
    bulletGroup.userData.velocity = direction.multiplyScalar(0.5);
    bulletGroup.userData.trailSegments = trailSegments;
    bulletGroup.userData.maxDistance = 15;
    bulletGroup.userData.initialPosition = bulletGroup.position.clone();
    
    scene.add(bulletGroup);
    bullets.push(bulletGroup);
}

function shoot(input) {
    const currentTime = Date.now();
    let direction;

    if (shootingMode.useMouse) {
        // Mouse shooting logic
        const vector = new THREE.Vector3(
            (input.x / window.innerWidth) * 2 - 1,
            -(input.y / window.innerHeight) * 2 + 1,
            0.5
        );
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const horizontalDir = new THREE.Vector3(dir.x, 0, dir.z).normalize();
        const targetPos = new THREE.Vector3()
            .copy(player.position)
            .add(horizontalDir.multiplyScalar(20));
        direction = new THREE.Vector3()
            .subVectors(targetPos, player.position)
            .normalize();
    } else {
        // Arrow key shooting logic
        const arrowDirection = new THREE.Vector3(0, 0, 0);
        
        // Calculate direction based on arrow key combinations
        if (keys.ArrowUp) arrowDirection.z -= 1;
        if (keys.ArrowDown) arrowDirection.z += 1;
        if (keys.ArrowLeft) arrowDirection.x -= 1;
        if (keys.ArrowRight) arrowDirection.x += 1;
        
        // Normalize direction if any arrow keys are pressed
        if (arrowDirection.length() > 0) {
            direction = arrowDirection.normalize();
        } else {
            // If no arrow keys pressed, don't shoot
            return;
        }
    }

    // Check cooldown and stamina after we have a valid direction
    if (currentTime - gameState.lastShotTime >= gameState.shootingCooldown && 
        gameState.playerStamina >= gameState.staminaPerShot) {
        
        if (gameState.currentWeapon === 'power' && gameState.powerWeaponAmmo > 0) {
            // Power weapon shooting (more powerful, faster bullets)
            const powerBulletGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.6, 12); // Larger bullet
            const powerBulletMaterial = new THREE.MeshPhongMaterial({ 
                color: 0xff00ff,
                emissive: 0x800080,
                emissiveIntensity: 0.8,
                transparent: true,
                opacity: 0.9
            });
            const bullet = new THREE.Mesh(powerBulletGeometry, powerBulletMaterial);
            bullet.position.copy(player.position);
            bullet.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
            bullet.userData.velocity = direction.multiplyScalar(0.8); // Faster bullets
            bullet.userData.maxDistance = 20; // Longer range
            bullet.userData.damage = 40; // More damage
            bullet.userData.initialPosition = bullet.position.clone();
            
            // Add power bullet trail
            const trailMaterial = new THREE.MeshBasicMaterial({
                color: 0xff00ff,
                transparent: true,
                opacity: 0.5
            });
            
            const trailSegments = [];
            for (let i = 0; i < 4; i++) { // More trail segments
                const trailGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.4, 8); // Larger trail
                const trail = new THREE.Mesh(trailGeometry, trailMaterial.clone());
                trail.material.opacity = 0.5 - (i * 0.1); // Fade out each segment
                trail.position.z = -(i + 1) * 0.4; // Increased spacing between segments
                bullet.add(trail);
                trailSegments.push(trail);
            }
            
            bullet.userData.trailSegments = trailSegments;
            scene.add(bullet);
            bullets.push(bullet);
            
            // Deduct ammo
            gameState.powerWeaponAmmo--;
            
            // Switch back to normal weapon if out of ammo
            if (gameState.powerWeaponAmmo <= 0) {
                gameState.currentWeapon = 'normal';
                updateHUD();
            }
        } else {
            // Normal weapon shooting
            const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
            bullet.position.copy(player.position);
            bullet.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
            bullet.userData.velocity = direction.multiplyScalar(0.5);
            bullet.userData.maxDistance = 15;
            bullet.userData.damage = 20;
            bullet.userData.initialPosition = bullet.position.clone();
            scene.add(bullet);
            bullets.push(bullet);
        }
        
        // Deduct stamina and update cooldown
        gameState.playerStamina = Math.max(0, gameState.playerStamina - gameState.staminaPerShot);
        gameState.lastShotTime = currentTime;
    }
}

// Enemies
const enemies = [];

// Add after getRandomEnemyColor function
function createEnemyShip(size = 1, type = 'normal') {
    const enemyGroup = new THREE.Group();
    
    // Create the main body using the new cube sphere design
    const body = createCubeSphere(size * 0.5, 8, type === 'sniper' ? 0x000000 : getRandomEnemyColor());
    enemyGroup.add(body);
    
    // Add red glow effect for sniper enemies
    if (type === 'sniper') {
        const glowGeometry = new THREE.SphereGeometry(size * 0.6, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        enemyGroup.add(glow);
        
        // Add red accent stripes
        const stripeGeometry = new THREE.BoxGeometry(size * 0.8, size * 0.1, size * 0.1);
        const stripeMaterial = new THREE.MeshPhongMaterial({
            color: 0xff0000,
            emissive: 0x800000,
            emissiveIntensity: 0.5
        });
        
        // Add stripes in a cross pattern
        const stripe1 = new THREE.Mesh(stripeGeometry, stripeMaterial);
        stripe1.rotation.z = Math.PI / 4;
        enemyGroup.add(stripe1);
        
        const stripe2 = new THREE.Mesh(stripeGeometry, stripeMaterial);
        stripe2.rotation.z = -Math.PI / 4;
        enemyGroup.add(stripe2);
    }
    
    // Add health bar (single bar, properly colored)
    const healthBarWidth = size * 1.2;
    const healthBarHeight = size * 0.1;
    const healthBarGeometry = new THREE.PlaneGeometry(healthBarWidth, healthBarHeight);
    const healthBarMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00,
        side: THREE.DoubleSide
    });
    const healthBar = new THREE.Mesh(healthBarGeometry, healthBarMaterial);
    healthBar.position.y = size * 0.8;
    healthBar.userData.initialScale = healthBar.scale.x;
    enemyGroup.add(healthBar);
    
    // Set up enemy properties
    const maxHealth = size * 100;
    enemyGroup.userData = {
        isEnemy: true,
        health: maxHealth,
        maxHealth: maxHealth,
        healthBar: healthBar,
        size: size,
        speed: 0.05 / size, // Larger enemies move slower
        type: type, // Add enemy type
        moveParams: {
        offset: Math.random() * Math.PI * 2,
        amplitude: 0.2 + Math.random() * 0.3,
        frequency: 0.5 + Math.random() * 0.5,
        time: 0
        },
        // Add sniper-specific properties
        lastShotTime: 0,
        shootingCooldown: 3000, // 3 seconds between shots
        sniperBullets: [] // Array to store sniper bullets
    };
    
    return enemyGroup;
}

// Add sniper bullet creation function
function createSniperBullet(position, direction) {
    const bulletGroup = new THREE.Group();
    
    // Main bullet (red and larger than normal bullets)
    const bulletGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.6, 12);
    const bulletMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xff0000,
        emissive: 0x800000,
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.9
    });
    const bullet = new THREE.Mesh(bulletGeometry, bulletMaterial);
    bulletGroup.add(bullet);
    
    // Set up bullet group
    bulletGroup.position.copy(position);
    
    // Calculate direction to player
    const directionToPlayer = new THREE.Vector3()
        .subVectors(player.position, position)
        .normalize();
    
    // Set bullet rotation to face player
    bulletGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), directionToPlayer);
    
    // Set up bullet properties
    bulletGroup.userData = {
        velocity: directionToPlayer.multiplyScalar(0.3), // Slower than normal bullets
        damage: 30,
        maxDistance: 20,
        initialPosition: position.clone()
    };
    
    scene.add(bulletGroup);
    return bulletGroup;
}

// Add function to generate random enemy colors
function getRandomEnemyColor() {
    // Array of vibrant colors that will stand out against the dark background
    const colors = [
        0xff4444, // bright red
        0x44ff44, // bright green
        0x4444ff, // bright blue
        0xff44ff, // bright magenta
        0x44ffff, // bright cyan
        0xffff44, // bright yellow
        0xff8844, // bright orange
        0xff4488, // bright pink
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createCubeSphere(radius, detail, color = 0x666666) {
    const group = new THREE.Group();
    const cubeSize = radius / (detail * 0.5);
    
    // Create cubes in a spherical pattern
    for (let phi = 0; phi < Math.PI * 2; phi += Math.PI / detail) {
        for (let theta = 0; theta < Math.PI * 2; theta += Math.PI / detail) {
            const r = radius + (Math.random() - 0.5) * (cubeSize * 0.5); // Add some variation
            
            // Convert spherical to cartesian coordinates
            const x = r * Math.cos(theta) * Math.sin(phi);
            const y = r * Math.sin(theta) * Math.sin(phi);
            const z = r * Math.cos(phi);
            
            // Randomly choose between cube and cylinder for some variation
            let geometry;
            if (Math.random() > 0.3) {
                geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
            } else {
                geometry = new THREE.CylinderGeometry(cubeSize * 0.3, cubeSize * 0.3, cubeSize, 8);
            }
            
            const material = new THREE.MeshPhongMaterial({
                color: color,
                specular: 0x333333,
                shininess: 30,
                flatShading: true
            });
            
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(x, y, z);
            
            // Make cubes face outward from center
            cube.lookAt(0, 0, 0);
            
            // Random rotation for more variety
            cube.rotation.z = Math.random() * Math.PI * 2;
            
            group.add(cube);
        }
    }
    
    return group;
}

// Modify spawnEnemy function
function spawnEnemy() {
    // 20% chance to spawn a sniper
    const isSniper = Math.random() < 0.2;
    const size = isSniper ? 1.5 : (0.5 + Math.pow(Math.random(), 2) * 2.5);
    const enemy = createEnemyShip(size, isSniper ? 'sniper' : 'normal');
    
    const spawnRadius = 20;
    const angle = Math.random() * Math.PI * 2;
    
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
        <div style="font-size: 24px; margin: 20px 0;">
            <div>Final Score: ${Math.round(gameStats.score)}</div>
            <div>Total Kills: ${gameStats.kills}</div>
        </div>
        <button id="restartButton" style="font-size: 24px; padding: 10px 20px; margin: 10px;">Restart Game</button>
    `;
    document.body.appendChild(gameOverDiv);

    document.getElementById('restartButton').addEventListener('click', () => {
        location.reload();
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
    projectiles: [],
    lastShotTime: 0,
    shootingCooldown: 2000,
    lastBossDefeatTime: 0,
    respawnDelay: 30000 // 30 seconds in milliseconds
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
function createProjectileImpact(position, color = 0xff00ff) {
    const impactGroup = new THREE.Group();
    const particleCount = 12;
    const particles = [];
    
    // Create shards that spread outward
    for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2;
        const radius = 0.3;
        
        const shardGeometry = new THREE.ConeGeometry(0.2, 0.4, 4);
        const shardMaterial = new THREE.MeshPhongMaterial({
            color: color,
            emissive: new THREE.Color(color).multiplyScalar(0.5),
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.8
        });
        const shard = new THREE.Mesh(shardGeometry, shardMaterial);
        
        shard.position.set(
            Math.cos(angle) * radius,
            0.5,
            Math.sin(angle) * radius
        );
        
        shard.rotation.x = Math.PI / 2;
        shard.rotation.y = angle;
        
        shard.userData = {
            velocity: new THREE.Vector3(
                Math.cos(angle) * 0.1,
                0.05,
                Math.sin(angle) * 0.1
            ),
            rotationSpeed: (Math.random() - 0.5) * 0.2,
            age: 0,
            lifetime: 1 + Math.random() * 0.5
        };
        
        particles.push(shard);
        impactGroup.add(shard);
    }
    
    // Add a flash effect
    const flashGeometry = new THREE.CircleGeometry(1, 16);
    const flashMaterial = new THREE.MeshBasicMaterial({
        color: color,
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

// Add a specialized cube sphere creation function for the boss
function createBossCubeSphere(radius, detail, color = 0x800080) {
    const group = new THREE.Group();
    const cubeSize = radius / (detail * 0.5);
    
    // Reduce the number of iterations for better performance
    for (let phi = 0; phi < Math.PI * 2; phi += Math.PI / (detail * 0.5)) {
        for (let theta = 0; theta < Math.PI * 2; theta += Math.PI / (detail * 0.5)) {
            const r = radius + (Math.random() - 0.5) * (cubeSize * 0.3);
            
            // Convert spherical to cartesian coordinates
            const x = r * Math.cos(theta) * Math.sin(phi);
            const y = r * Math.sin(theta) * Math.sin(phi);
            const z = r * Math.cos(phi);
            
            // Create main cube with reduced geometry segments
            const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
            const material = new THREE.MeshPhongMaterial({
                color: color,
                specular: 0x440044,
                shininess: 30,
                flatShading: true
            });
            
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(x, y, z);
            cube.lookAt(0, 0, 0);
            
            // Add spikes more selectively (only on outer layer)
            if (Math.random() > 0.7 && r > radius * 0.8) {
                const spikeLength = cubeSize * 1.2;
                const spikeGeometry = new THREE.ConeGeometry(cubeSize * 0.2, spikeLength, 4);
                const spikeMaterial = new THREE.MeshPhongMaterial({
                    color: new THREE.Color(color).multiplyScalar(1.2),
                    specular: 0x440044,
                    shininess: 30,
                    flatShading: true
                });
                
                const spike = new THREE.Mesh(spikeGeometry, spikeMaterial);
                spike.position.set(0, spikeLength/2, 0);
                spike.rotation.x = Math.PI/2;
                
                const spikeContainer = new THREE.Group();
                spikeContainer.add(spike);
                spikeContainer.position.copy(cube.position);
                spikeContainer.lookAt(0, 0, 0);
                
                group.add(spikeContainer);
            }
            
            group.add(cube);
        }
    }
    
    return group;
}

function createBossEnemy() {
    const bossGroup = new THREE.Group();
    
    // Main body (hexagonal shape)
    const mainBodyGeometry = new THREE.CylinderGeometry(2, 2, 1, 6);
    const mainBodyMaterial = new THREE.MeshPhongMaterial({
        color: 0x800080,
        specular: 0x440044,
        shininess: 30,
        flatShading: true
    });
    const mainBody = new THREE.Mesh(mainBodyGeometry, mainBodyMaterial);
    bossGroup.add(mainBody);
    
    // Central core (glowing sphere)
    const coreGeometry = new THREE.SphereGeometry(0.8, 16, 16);
    const coreMaterial = new THREE.MeshPhongMaterial({
        color: 0xff00ff,
        emissive: 0x800080,
        emissiveIntensity: 0.5,
        specular: 0x440044,
        shininess: 100
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    bossGroup.add(core);
    
    // Energy rings (rotating rings around the core)
    for (let i = 0; i < 3; i++) {
        const ringGeometry = new THREE.TorusGeometry(1.2 + i * 0.3, 0.1, 16, 32);
        const ringMaterial = new THREE.MeshPhongMaterial({
            color: 0xff00ff,
            emissive: 0x800080,
        emissiveIntensity: 0.3,
            transparent: true,
            opacity: 0.8
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.userData = {
            rotationSpeed: 0.02 * (i + 1),
            rotationAxis: new THREE.Vector3(0, 1, 0)
        };
        bossGroup.add(ring);
    }
    
    // Weapon pods (6 around the main body)
    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const podGroup = new THREE.Group();
        
        // Pod body
        const podGeometry = new THREE.BoxGeometry(0.8, 0.4, 1.2);
        const podMaterial = new THREE.MeshPhongMaterial({
            color: 0x800080,
            specular: 0x440044,
            shininess: 30
        });
        const pod = new THREE.Mesh(podGeometry, podMaterial);
        pod.position.set(
            Math.cos(angle) * 3,
            0,
            Math.sin(angle) * 3
        );
        pod.rotation.y = angle;
        podGroup.add(pod);
        
        // Weapon barrel
        const barrelGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8);
        const barrelMaterial = new THREE.MeshPhongMaterial({
            color: 0xff00ff,
            emissive: 0x800080,
            emissiveIntensity: 0.3
        });
        const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
        barrel.rotation.x = Math.PI / 2;
        barrel.position.set(
            Math.cos(angle) * 3.8,
            0,
            Math.sin(angle) * 3.8
        );
        podGroup.add(barrel);
        
        // Energy glow at barrel tip
        const glowGeometry = new THREE.SphereGeometry(0.2, 8, 8);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0xff00ff,
            transparent: true,
            opacity: 0.8
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.set(
            Math.cos(angle) * 4.5,
            0,
            Math.sin(angle) * 4.5
        );
        podGroup.add(glow);
        
        bossGroup.add(podGroup);
    }
    
    // Shield panels (floating around the main body)
    for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2;
        const shieldGeometry = new THREE.PlaneGeometry(1.5, 2);
        const shieldMaterial = new THREE.MeshPhongMaterial({
            color: 0x800080,
            specular: 0x440044,
            shininess: 50,
            transparent: true,
            opacity: 0.7,
            side: THREE.DoubleSide
        });
        const shield = new THREE.Mesh(shieldGeometry, shieldMaterial);
        shield.position.set(
            Math.cos(angle) * 2.5,
            0,
            Math.sin(angle) * 2.5
        );
        shield.rotation.y = angle;
        shield.userData = {
            rotationSpeed: 0.01,
            floatSpeed: 0.02,
            floatOffset: Math.random() * Math.PI * 2
        };
        bossGroup.add(shield);
    }
    
    // Health bar
    const healthBarWidth = 4;
    const healthBarHeight = 0.3;
    const healthBarGeometry = new THREE.PlaneGeometry(healthBarWidth, healthBarHeight);
    const healthBarMaterial = new THREE.MeshBasicMaterial({
        color: 0xff00ff,
        side: THREE.DoubleSide
    });
    const healthBar = new THREE.Mesh(healthBarGeometry, healthBarMaterial);
    healthBar.position.set(0, 4.5, 0);
    healthBar.rotation.x = -Math.PI / 4;
    healthBar.userData.initialScale = healthBar.scale.x;
    bossGroup.add(healthBar);
    bossGroup.userData.healthBar = healthBar;

    // Boss properties
    bossGroup.userData.health = 500;
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
    
    const scoreCounter = document.createElement('div');
    scoreCounter.id = 'scoreCounter';
    scoreCounter.textContent = 'Score: 0';
    hudContainer.appendChild(scoreCounter);
    
    const killsCounter = document.createElement('div');
    killsCounter.id = 'killsCounter';
    killsCounter.textContent = 'Kills: 0';
    hudContainer.appendChild(killsCounter);

    const timeCounter = document.createElement('div');
    timeCounter.id = 'timeCounter';
    timeCounter.textContent = 'Time: 0:00';
    hudContainer.appendChild(timeCounter);

    const weaponCounter = document.createElement('div');
    weaponCounter.id = 'weaponCounter';
    weaponCounter.textContent = 'Weapon: Normal';
    hudContainer.appendChild(weaponCounter);
    
    document.body.appendChild(hudContainer);

    // Create top left HUD for health and stamina
    const topLeftHUD = document.createElement('div');
    topLeftHUD.style.position = 'fixed';
    topLeftHUD.style.top = '20px';
    topLeftHUD.style.left = '20px';
    topLeftHUD.style.color = 'white';
    topLeftHUD.style.fontFamily = 'Arial, sans-serif';
    topLeftHUD.style.fontSize = '24px';
    topLeftHUD.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    topLeftHUD.id = 'topLeftHUD';

    // Health display with bar
    const healthContainer = document.createElement('div');
    healthContainer.style.display = 'flex';
    healthContainer.style.alignItems = 'center';
    healthContainer.style.gap = '10px';
    healthContainer.style.marginBottom = '5px';

    const healthDisplay = document.createElement('div');
    healthDisplay.id = 'healthDisplay';
    healthDisplay.style.color = '#00ff00';
    healthDisplay.textContent = 'Health: 100';
    healthContainer.appendChild(healthDisplay);

    const healthBarContainer = document.createElement('div');
    healthBarContainer.style.width = '100px';
    healthBarContainer.style.height = '10px';
    healthBarContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    healthBarContainer.style.border = '2px solid #00ff00';
    healthBarContainer.style.borderRadius = '5px';
    healthBarContainer.style.overflow = 'hidden';

    const healthBar = document.createElement('div');
    healthBar.id = 'healthBar';
    healthBar.style.width = '100%';
    healthBar.style.height = '100%';
    healthBar.style.backgroundColor = '#00ff00';
    healthBar.style.transition = 'width 0.3s ease';
    healthBarContainer.appendChild(healthBar);

    healthContainer.appendChild(healthBarContainer);
    topLeftHUD.appendChild(healthContainer);

    // Stamina display with bar
    const staminaContainer = document.createElement('div');
    staminaContainer.style.display = 'flex';
    staminaContainer.style.alignItems = 'center';
    staminaContainer.style.gap = '10px';

    const staminaDisplay = document.createElement('div');
    staminaDisplay.id = 'staminaDisplay';
    staminaDisplay.style.color = '#E8B71C';
    staminaDisplay.textContent = 'Stamina: 100';
    staminaContainer.appendChild(staminaDisplay);

    const staminaBarContainer = document.createElement('div');
    staminaBarContainer.style.width = '100px';
    staminaBarContainer.style.height = '10px';
    staminaBarContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    staminaBarContainer.style.border = '2px solid #E8B71C';
    staminaBarContainer.style.borderRadius = '5px';
    staminaBarContainer.style.overflow = 'hidden';

    const staminaBar = document.createElement('div');
    staminaBar.id = 'staminaBar';
    staminaBar.style.width = '100%';
    staminaBar.style.height = '100%';
    staminaBar.style.backgroundColor = '#E8B71C';
    staminaBar.style.transition = 'width 0.3s ease';
    staminaBarContainer.appendChild(staminaBar);

    staminaContainer.appendChild(staminaBarContainer);
    topLeftHUD.appendChild(staminaContainer);

    document.body.appendChild(topLeftHUD);
}

// Update the updateHUD function to include bar updates
function updateHUD() {
    let scoreCounter = document.getElementById('scoreCounter');
    let killsCounter = document.getElementById('killsCounter');
    let timeCounter = document.getElementById('timeCounter');
    let weaponCounter = document.getElementById('weaponCounter');
    let healthDisplay = document.getElementById('healthDisplay');
    let staminaDisplay = document.getElementById('staminaDisplay');
    let healthBar = document.getElementById('healthBar');
    let staminaBar = document.getElementById('staminaBar');
    
    if (!scoreCounter || !killsCounter || !timeCounter || !weaponCounter || 
        !healthDisplay || !staminaDisplay || !healthBar || !staminaBar) {
        createHUD();
        scoreCounter = document.getElementById('scoreCounter');
        killsCounter = document.getElementById('killsCounter');
        timeCounter = document.getElementById('timeCounter');
        weaponCounter = document.getElementById('weaponCounter');
        healthDisplay = document.getElementById('healthDisplay');
        staminaDisplay = document.getElementById('staminaDisplay');
        healthBar = document.getElementById('healthBar');
        staminaBar = document.getElementById('staminaBar');
    }
    
    if (scoreCounter) {
        scoreCounter.textContent = `Score: ${Math.round(gameStats.score)}`;
    }
    if (killsCounter) {
        killsCounter.textContent = `Kills: ${gameStats.kills}`;
    }
    if (timeCounter) {
        const minutes = Math.floor(gameState.elapsedTime / 60);
        const seconds = Math.floor(gameState.elapsedTime % 60);
        timeCounter.textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    if (weaponCounter) {
        if (gameState.currentWeapon === 'power') {
            weaponCounter.textContent = `Power Weapon: ${gameState.powerWeaponAmmo}`;
            weaponCounter.style.color = '#00ffff';
        } else {
            weaponCounter.textContent = 'Weapon: Normal';
            weaponCounter.style.color = '#ffffff';
        }
    }
    if (healthDisplay) {
        healthDisplay.textContent = `Health: ${Math.round(gameState.playerHealth)}`;
    }
    if (staminaDisplay) {
        staminaDisplay.textContent = `Stamina: ${Math.round(gameState.playerStamina)}`;
    }
    if (healthBar) {
        healthBar.style.width = `${Math.max(0, gameState.playerHealth)}%`;
    }
    if (staminaBar) {
        staminaBar.style.width = `${Math.max(0, gameState.playerStamina)}%`;
    }
}

createHUD();

function animate() {
    requestAnimationFrame(animate);

    // Only update game logic if the game has started and isn't over
    if (gameState.isGameStarted && !gameState.isGameOver) {
        // Update elapsed time every second
        const timeNow = Date.now();
        if (timeNow - gameState.lastTimeUpdate >= 1000) {
            gameState.elapsedTime = Math.floor((timeNow - gameState.startTime) / 1000);
            gameState.lastTimeUpdate = timeNow;
            updateHUD();
        }
        
        // Update space background time uniform
        ground.material.uniforms.time.value += 0.001;

        const deltaTime = 0.016; // Assuming 60fps
        updatePlanets(deltaTime);

    // Player movement (slower speed)
    const moveSpeed = 0.1;
    const newPosition = player.position.clone();

    if (keys.w) newPosition.z -= moveSpeed;
    if (keys.s) newPosition.z += moveSpeed;
    if (keys.a) newPosition.x -= moveSpeed;
    if (keys.d) newPosition.x += moveSpeed;

        // Check for planet collisions before applying movement
    let canMove = true;
        for (const planet of planets) {
            if (newPosition.distanceTo(planet.position) < planet.userData.collisionRadius + 0.5) {
            canMove = false;
            break;
        }
    }

    // Only update position if no collision
    if (canMove) {
        player.position.copy(newPosition);
    }

        // Update player trails
        const currentTime = Date.now();
        if (currentTime - playerTrails.lastSpawnTime >= playerTrails.spawnInterval) {
            // Spawn new particles
            for (let i = 0; i < playerTrails.particleCount; i++) {
                const offset = new THREE.Vector3(
                    (Math.random() - 0.5) * 0.5,
                    0,
                    (Math.random() - 0.5) * 0.5
                );
                createTrailParticle(player.position.clone().add(offset));
            }
            playerTrails.lastSpawnTime = currentTime;
        }

        // Update existing trail particles
        for (let i = playerTrails.particles.length - 1; i >= 0; i--) {
            const particle = playerTrails.particles[i];
            particle.userData.age += 16; // Assuming 60fps

            if (particle.userData.age >= particle.userData.lifetime) {
                scene.remove(particle);
                playerTrails.particles.splice(i, 1);
            } else {
                const lifePercent = 1 - (particle.userData.age / particle.userData.lifetime);
                particle.material.opacity = lifePercent * 0.6;
                particle.scale.setScalar(lifePercent * particle.userData.initialScale);
            }
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
        if (shootingMode.useMouse) {
    if (gameState.isShooting) {
        shoot(gameState.mousePosition);
            }
        } else {
            // For arrow key shooting, check if any arrow keys are pressed
            if (keys.ArrowUp || keys.ArrowDown || keys.ArrowLeft || keys.ArrowRight) {
                shoot();
            }
    }

    // Update stamina
        if (!gameState.isShooting && !(keys.ArrowUp || keys.ArrowDown || keys.ArrowLeft || keys.ArrowRight)) {
            gameState.playerStamina = Math.min(100, gameState.playerStamina + gameState.staminaRechargeRate * 0.016);
    }
    
    // Update stamina bar
    player.userData.staminaBar.scale.x = (gameState.playerStamina / 100) * player.userData.staminaBar.userData.initialScale;

        // Update stamina warning
        updateStaminaWarning();

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

            // Update trail opacity
            if (bullet.userData.trailSegments) {
                bullet.userData.trailSegments.forEach((trail, index) => {
                    trail.material.opacity = Math.max(0, 0.5 - (index * 0.15));
                });
            }

            // Remove bullets that exceed fixed distance
            if (bullet.position.distanceTo(bullet.userData.initialPosition) > bullet.userData.maxDistance) {
            scene.remove(bullet);
            bullets.splice(i, 1);
            continue;
        }

        // Check for enemy collisions
        for (let j = enemies.length - 1; j >= 0; j--) {
            const enemy = enemies[j];
            if (bullet.position.distanceTo(enemy.position) < 1.5) { // Increased from 1.0 to 1.5
                // Get enemy color from its first mesh component
                const enemyColor = enemy.userData.type === 'sniper' ? 0xff0000 : enemy.children[0].children[0].material.color.getHex();
                // Create impact effect with enemy color
                const impact = createProjectileImpact(bullet.position.clone(), enemyColor);
                explosions.push(impact);
                
                // Deal damage to enemy based on weapon type
                enemy.userData.health -= bullet.userData.damage;

                // Update enemy health bar
                const healthPercent = enemy.userData.health / enemy.userData.maxHealth;
                enemy.userData.healthBar.scale.x = Math.max(0, healthPercent) * enemy.userData.healthBar.userData.initialScale;

                // Remove bullet
                scene.remove(bullet);
                bullets.splice(i, 1);
                
                // Only remove enemy if health is depleted
                if (enemy.userData.health <= 0) {
                    explosions.push(createExplosion(enemy.position.clone()));
                    scene.remove(enemy);
                    enemies.splice(enemies.indexOf(enemy), 1);
                    
                    // Update stats
                    gameStats.kills++;
                    gameStats.score += enemy.userData.maxHealth;
                    updateHUD();
                }
                break;
            }
        }

        // Check for boss collision
        if (bossState.boss && bullet.position.distanceTo(bossState.boss.position) < 3) {
                // Get boss color
                const bossColor = bossState.boss.children[0].material.color.getHex();
                // Create impact effect with boss color
                const impact = createProjectileImpact(bullet.position.clone(), bossColor);
                explosions.push(impact);
                
                // Deal damage to boss based on weapon type
                bossState.boss.userData.health -= bullet.userData.damage;
            scene.remove(bullet);
            bullets.splice(i, 1);

            // Update boss health bar
            const healthPercent = bossState.boss.userData.health / bossState.boss.userData.maxHealth;
            bossState.boss.userData.healthBar.scale.x = Math.max(0, healthPercent) * bossState.boss.userData.healthBar.userData.initialScale;

            if (bossState.boss.userData.health <= 0) {
                    // Create explosion effect
                    explosions.push(createExplosion(bossState.boss.position.clone()));
                    
                    // Spawn 5 random enemies at boss death location in a ring formation
                    const numEnemies = 5;
                    const spawnRadius = 3; // Increased from 2 to 3 for better spacing
                    const bossDeathPos = bossState.boss.position.clone();
                    
                    for (let i = 0; i < numEnemies; i++) {
                        const size = 0.5 + Math.pow(Math.random(), 2) * 2.5;
                        const enemy = createEnemyShip(size);
                        
                        // Calculate position in a perfect circle
                        const angle = (i / numEnemies) * Math.PI * 2;
                        const offsetX = Math.cos(angle) * spawnRadius;
                        const offsetZ = Math.sin(angle) * spawnRadius;
                        
                        // Position enemy with offset from boss death location
                        enemy.position.set(
                            bossDeathPos.x + offsetX,
                            0.5,
                            bossDeathPos.z + offsetZ
                        );
                        
                        // Make enemy face outward from the center
                        const outwardDirection = new THREE.Vector3(offsetX, 0, offsetZ).normalize();
                        enemy.lookAt(new THREE.Vector3(
                            enemy.position.x + outwardDirection.x,
                            enemy.position.y,
                            enemy.position.z + outwardDirection.z
                        ));
                        
                        scene.add(enemy);
                        enemies.push(enemy);
                    }
                    
                    // Update stats
                    gameStats.score += bossState.boss.userData.maxHealth;
                    
                    // Remove current boss
                scene.remove(bossState.boss);
                bossState.boss = null;
                    bossState.isSpawned = false;
                    bossState.lastBossDefeatTime = Date.now();
            }
            break;
        }

            // Check for planet collisions
            for (const planet of planets) {
                if (bullet.position.distanceTo(planet.position) < planet.userData.collisionRadius) {
                    const planetColor = planet.children[0].material.color.getHex();
                    const impact = createProjectileImpact(bullet.position.clone(), planetColor);
                explosions.push(impact);
                scene.remove(bullet);
                bullets.splice(i, 1);
                break;
            }
        }
    }

    // Update enemies (clean up enemies that are too far from player)
        const maxEnemyDistance = 200;
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

        // Check for nearby planets and adjust direction
        let avoidanceVector = new THREE.Vector3();
        planets.forEach(planet => {
            const distanceToPlanet = enemy.position.distanceTo(planet.position);
            if (distanceToPlanet < planet.userData.collisionRadius + enemyRadius + 1) {
                const awayFromPlanet = new THREE.Vector3()
                    .subVectors(enemy.position, planet.position)
                    .normalize()
                    .multiplyScalar(1 / Math.max(0.1, distanceToPlanet));
                avoidanceVector.add(awayFromPlanet);
            }
        });
        
        // Add avoidance to direction
        direction.add(avoidanceVector);
        direction.normalize();

        // Calculate perpendicular vector for sideways movement
        const perpendicular = new THREE.Vector3(-direction.z, 0, direction.x);
        
        // Apply artistic swaying motion with planet avoidance
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

        // Sniper-specific behavior
        if (enemy.userData.type === 'sniper') {
            const currentTime = Date.now();
            if (currentTime - enemy.userData.lastShotTime >= enemy.userData.shootingCooldown) {
                // Create sniper bullet
                const sniperBullet = createSniperBullet(enemy.position.clone(), direction);
                enemy.userData.sniperBullets.push(sniperBullet);
                enemy.userData.lastShotTime = currentTime;
            }

            // Update sniper bullets
            for (let j = enemy.userData.sniperBullets.length - 1; j >= 0; j--) {
                const bullet = enemy.userData.sniperBullets[j];
                
                // Move bullet
                bullet.position.add(bullet.userData.velocity);
                
                // Check for player collision
                if (bullet.position.distanceTo(player.position) < 1) {
                    // Create neon red impact effect
                    const impact = createProjectileImpact(bullet.position.clone(), 0xff0000);
                    explosions.push(impact);
                    
                    // Deal damage to player
                    gameState.playerHealth -= bullet.userData.damage;
                    
                    // Update player health bar
                    const healthPercent = gameState.playerHealth / 100;
                    player.userData.healthBar.scale.x = Math.max(0, healthPercent) * player.userData.healthBar.userData.initialScale;
                    
                    // Remove bullet
                    scene.remove(bullet);
                    enemy.userData.sniperBullets.splice(j, 1);
                    
                    // Check for game over
                    if (gameState.playerHealth <= 0 && !gameState.isGameOver) {
                        gameState.isGameOver = true;
                        showGameOverScreen();
                    }
                    continue;
                }
                
                // Remove bullets that are too far
                if (bullet.position.distanceTo(bullet.userData.initialPosition) > bullet.userData.maxDistance) {
                    scene.remove(bullet);
                    enemy.userData.sniperBullets.splice(j, 1);
                }
            }
        }

        // Check collision with player
        if (enemy.position.distanceTo(player.position) < 1) {
            // Get enemy's remaining health and apply it as damage
            const damageAmount = enemy.userData.health;
            gameState.playerHealth -= damageAmount;
            
            // Update player health bar
            const healthPercent = gameState.playerHealth / 100;
            player.userData.healthBar.scale.x = Math.max(0, healthPercent) * player.userData.healthBar.userData.initialScale;

            // Create explosion effect for the enemy
            explosions.push(createExplosion(enemy.position.clone()));
            
            // Remove the enemy and its bullets
            if (enemy.userData.type === 'sniper') {
                enemy.userData.sniperBullets.forEach(bullet => scene.remove(bullet));
            }
            scene.remove(enemy);
            enemies.splice(i, 1);
            
            // Update stats
            gameStats.kills++;
            gameStats.score += enemy.userData.maxHealth;
            updateHUD();

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
        // spawnRandomHazard(); // Temporarily disabled

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
            const currentTime = Date.now();
            if (!bossState.lastBossDefeatTime || currentTime - bossState.lastBossDefeatTime >= bossState.respawnDelay) {
        bossState.boss = createBossEnemy();
        scene.add(bossState.boss);
        bossState.isSpawned = true;
            }
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
            const targetDistance = 20;
        
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
                    
                    // Update stats
                    gameStats.kills++;
                    gameStats.score += enemy.userData.maxHealth; // Add enemy's max health to score
                    updateHUD();
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
            
                // Check for planet collisions
                for (const planet of planets) {
                    if (projectile.position.distanceTo(planet.position) < planet.userData.collisionRadius) {
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

        // Update health pickups
        spawnHealthPickup();
        
        // Update existing health pickups
        for (let i = pickups.health.length - 1; i >= 0; i--) {
            const pickup = pickups.health[i];
            
            // Rotate and bob the pickup
            pickup.rotation.y += pickup.userData.rotationSpeed;
            const bobOffset = Math.sin(Date.now() * 0.003 * pickup.userData.bobSpeed) * pickup.userData.bobHeight;
            pickup.position.y = pickup.userData.initialY + bobOffset;
            
            // Check for player collision
            if (pickup.position.distanceTo(player.position) < 3.0) { // Increased from 1.5 to 3.0
                // Heal player
                gameState.playerHealth = Math.min(100, gameState.playerHealth + pickup.userData.healAmount);
                
                // Update health bar
                const healthPercent = gameState.playerHealth / 100;
                player.userData.healthBar.scale.x = healthPercent * player.userData.healthBar.userData.initialScale;
                
                // Remove pickup
                scene.remove(pickup);
                pickups.health.splice(i, 1);
                
                // Create a larger flash effect to match the increased pickup radius
                const flashGeometry = new THREE.CircleGeometry(3.0, 16); // Increased from 1.5 to 3.0
                const flashMaterial = new THREE.MeshBasicMaterial({
                    color: 0x00ff00,
                    transparent: true,
                    opacity: 0.5,
                    side: THREE.DoubleSide
                });
                const flash = new THREE.Mesh(flashGeometry, flashMaterial);
                flash.position.copy(pickup.position);
                flash.rotation.x = -Math.PI / 2;
                flash.userData = { age: 0, lifetime: 0.3 };
                scene.add(flash);
                explosions.push(flash);
            }
            
            // Remove pickups that are too far from player
            if (pickup.position.distanceTo(player.position) > 100) {
                scene.remove(pickup);
                pickups.health.splice(i, 1);
            }
        }

        // Update weapon pickups
        spawnWeaponPickup();
        
        // Update existing weapon pickups
        for (let i = pickups.weapon.length - 1; i >= 0; i--) {
            const pickup = pickups.weapon[i];
            
            // Rotate and bob the pickup
            pickup.rotation.y += pickup.userData.rotationSpeed;
            const bobOffset = Math.sin(Date.now() * 0.003 * pickup.userData.bobSpeed) * pickup.userData.bobHeight;
            pickup.position.y = pickup.userData.initialY + bobOffset;
            
            // Check for player collision
            if (pickup.position.distanceTo(player.position) < 3.0) {
                // Give player power weapon
                gameState.currentWeapon = 'power';
                gameState.powerWeaponAmmo = pickup.userData.ammoAmount;
                
                // Update HUD
                updateHUD();
                
                // Remove pickup
                scene.remove(pickup);
                pickups.weapon.splice(i, 1);
                
                // Create flash effect
                const flashGeometry = new THREE.CircleGeometry(3.0, 16);
                const flashMaterial = new THREE.MeshBasicMaterial({
                    color: 0x00ffff,
                    transparent: true,
                    opacity: 0.5,
                    side: THREE.DoubleSide
                });
                const flash = new THREE.Mesh(flashGeometry, flashMaterial);
                flash.position.copy(pickup.position);
                flash.rotation.x = -Math.PI / 2;
                flash.userData = { age: 0, lifetime: 0.3 };
                scene.add(flash);
                explosions.push(flash);
            }
            
            // Remove pickups that are too far from player
            if (pickup.position.distanceTo(player.position) > 100) {
                scene.remove(pickup);
                pickups.weapon.splice(i, 1);
            }
        }
    }
    
    // Always render the scene
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();

function createTrailParticle(position) {
    const particle = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 8),
        new THREE.MeshBasicMaterial({
            color: 0x3366cc,
            transparent: true,
            opacity: 0.6,
            side: THREE.DoubleSide
        })
    );
    
    particle.position.copy(position);
    particle.rotation.x = -Math.PI / 2; // Lay flat on the ground
    particle.userData = {
        age: 0,
        lifetime: playerTrails.particleLifetime,
        initialScale: particle.scale.x
    };
    
    scene.add(particle);
    playerTrails.particles.push(particle);
    return particle;
}

// Add function to manage stamina warning
function updateStaminaWarning() {
    let warningElement = document.getElementById('staminaWarning');
    
    if (gameState.playerStamina <= 20) {
        // Create warning if it doesn't exist
        if (!warningElement) {
            warningElement = document.createElement('div');
            warningElement.id = 'staminaWarning';
            warningElement.textContent = 'Low stamina!';
            warningElement.style.position = 'fixed';
            warningElement.style.left = '50%';
            warningElement.style.top = '55%'; // Position it slightly below center
            warningElement.style.transform = 'translate(-50%, -50%)'; // Center the element
            warningElement.style.color = '#E8B71C';
            warningElement.style.fontWeight = 'bold';
            warningElement.style.animation = 'pulse 1s infinite';
            warningElement.style.zIndex = '1000'; // Ensure it appears above other elements
            warningElement.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)'; // Add shadow for better visibility
            document.body.appendChild(warningElement); // Append to body instead of HUD container
        }
    } else {
        // Remove warning if it exists
        if (warningElement) {
            warningElement.remove();
        }
    }
}

// Add after the planets creation, before the animation loop
function updatePlanets(deltaTime) {
    planets.forEach(planetGroup => {
        // Update moon positions
        if (planetGroup.userData.moons) {
            planetGroup.userData.moons.forEach(moon => {
                moon.userData.time += moon.userData.orbitSpeed;
                
                // Calculate new position
                const x = Math.cos(moon.userData.time + moon.userData.orbitOffset) * moon.userData.orbitRadius;
                const z = Math.sin(moon.userData.time + moon.userData.orbitOffset) * moon.userData.orbitRadius;
                
                moon.position.set(x, 0, z);
            });
        }

        // Rotate rings if present
        if (planetGroup.userData.hasRings) {
            const ring = planetGroup.children.find(child => child.geometry instanceof THREE.RingGeometry);
            if (ring) {
                ring.rotation.z += 0.0001;
            }
        }
    });
}

// Update the far plane of the camera to prevent clipping
camera.far = 2000; // Increased from 1000
camera.updateProjectionMatrix();

// Function to update camera position
function updateCamera() {
    // Update camera position to follow player while maintaining height
    camera.position.x = player.position.x;
    camera.position.z = player.position.z;
    camera.lookAt(player.position);
}

// Add start screen creation function
function createStartScreen() {
    const startScreen = document.createElement('div');
    startScreen.id = 'startScreen';
    startScreen.style.position = 'fixed';
    startScreen.style.top = '0';
    startScreen.style.left = '0';
    startScreen.style.width = '100%';
    startScreen.style.height = '100%';
    startScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    startScreen.style.display = 'flex';
    startScreen.style.flexDirection = 'column';
    startScreen.style.justifyContent = 'center';
    startScreen.style.alignItems = 'center';
    startScreen.style.zIndex = '1000';
    startScreen.style.color = '#ffffff';
    startScreen.style.fontFamily = 'Arial, sans-serif';
    
    const title = document.createElement('h1');
    title.textContent = '3D Top Down Shooter';
    title.style.fontSize = '48px';
    title.style.marginBottom = '20px';
    title.style.color = '#ff0000';
    title.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    
    // Create controls container
    const controlsContainer = document.createElement('div');
    controlsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    controlsContainer.style.padding = '30px';
    controlsContainer.style.borderRadius = '15px';
    controlsContainer.style.marginBottom = '30px';
    controlsContainer.style.border = '2px solid #444';
    
    // Create controls title
    const controlsTitle = document.createElement('h2');
    controlsTitle.textContent = 'Controls';
    controlsTitle.style.marginBottom = '20px';
    controlsTitle.style.color = '#00ff00';
    controlsTitle.style.textAlign = 'center';
    controlsTitle.style.fontSize = '28px';
    
    // Create controls list
    const controlsList = document.createElement('div');
    controlsList.style.display = 'flex';
    controlsList.style.flexDirection = 'column';
    controlsList.style.gap = '15px';
    
    // Add control items
    const controls = [
        { key: 'WASD', action: 'Move' },
        { key: 'Mouse', action: 'Aim' },
        { key: 'Left Click', action: 'Shoot' }
    ];
    
    controls.forEach(control => {
        const controlItem = document.createElement('div');
        controlItem.style.display = 'flex';
        controlItem.style.alignItems = 'center';
        controlItem.style.gap = '15px';
        
        const keyElement = document.createElement('span');
        keyElement.textContent = control.key;
        keyElement.style.backgroundColor = '#333';
        keyElement.style.padding = '5px 10px';
        keyElement.style.borderRadius = '5px';
        keyElement.style.fontFamily = 'monospace';
        keyElement.style.color = '#00ff00';
        
        const actionElement = document.createElement('span');
        actionElement.textContent = control.action;
        actionElement.style.color = '#fff';
        
        controlItem.appendChild(keyElement);
        controlItem.appendChild(actionElement);
        controlsList.appendChild(controlItem);
    });
    
    controlsContainer.appendChild(controlsTitle);
    controlsContainer.appendChild(controlsList);
    
    const startPrompt = document.createElement('div');
    startPrompt.textContent = 'Click or Press Space to Start';
    startPrompt.style.fontSize = '24px';
    startPrompt.style.animation = 'pulse 1.5s infinite';
    startPrompt.style.marginTop = '20px';
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    startScreen.appendChild(title);
    startScreen.appendChild(controlsContainer);
    startScreen.appendChild(startPrompt);
    document.body.appendChild(startScreen);
    
    // Add event listeners for starting the game
    function startGame() {
        gameState.isGameStarted = true;
        gameState.startTime = Date.now(); // Add this line to set the start time
        gameState.lastTimeUpdate = Date.now();
        startScreen.style.display = 'none';
        // Initialize player position and game state
        resetGame();
    }
    
    startScreen.addEventListener('click', startGame);
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space' && !gameState.isGameStarted) {
            startGame();
        }
    });
}

// Add reset game function
function resetGame() {
    // Reset player position
    player.position.set(0, 2, 0);
    
    // Reset game state
    gameState.playerHealth = 100;
    gameState.playerStamina = 100;
    gameState.isGameOver = false;
    
    // Reset score
    gameStats.score = 0;
    gameStats.kills = 0;
    
    // Update HUD
    updateHUD();
    
    // Clear existing enemies
    while(enemies.length > 0) {
        const enemy = enemies.pop();
        scene.remove(enemy);
    }
    
    // Clear boss if it exists
    if (bossState.boss) {
        scene.remove(bossState.boss);
        bossState.boss = null;
    }
    
    // Clear projectiles
    while(bossState.projectiles.length > 0) {
        const projectile = bossState.projectiles.pop();
        scene.remove(projectile);
    }

    // Spawn a sniper enemy near the player for debugging
    const sniper = createEnemyShip(1.5, 'sniper');
    const spawnRadius = 10; // Spawn 10 units away from player
    const angle = Math.random() * Math.PI * 2;
    sniper.position.x = player.position.x + Math.cos(angle) * spawnRadius;
    sniper.position.z = player.position.z + Math.sin(angle) * spawnRadius;
    sniper.position.y = 0.5;
    sniper.lookAt(player.position);
    scene.add(sniper);
    enemies.push(sniper);
}

// Call createStartScreen after scene setup
// Find where you initialize the scene and add:
createStartScreen();

// After scene setup and before animation loop
initScene();
setupLighting();
createGround();
createPlayer();
createHUD();
createStartScreen(); // Add start screen
animate(); 