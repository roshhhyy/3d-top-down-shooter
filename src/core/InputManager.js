export class InputManager {
    constructor() {
        this.keys = {
            w: false,
            a: false,
            s: false,
            d: false
        };
        this.mousePosition = new THREE.Vector2();
        this.isShooting = false;
        this.raycaster = new THREE.Raycaster();

        this.setupEventListeners();
    }

    setupEventListeners() {
        // Keyboard events
        window.addEventListener('keydown', (e) => {
            if (this.keys.hasOwnProperty(e.key.toLowerCase())) {
                this.keys[e.key.toLowerCase()] = true;
            }
        });

        window.addEventListener('keyup', (e) => {
            if (this.keys.hasOwnProperty(e.key.toLowerCase())) {
                this.keys[e.key.toLowerCase()] = false;
            }
        });

        // Mouse events
        window.addEventListener('mousemove', (e) => {
            this.mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        window.addEventListener('mousedown', (e) => {
            if (e.button === 0) { // Left click
                this.isShooting = true;
            }
        });

        window.addEventListener('mouseup', (e) => {
            if (e.button === 0) { // Left click
                this.isShooting = false;
            }
        });
    }

    update() {
        // Update any per-frame input processing here
    }

    getMovementVector() {
        const vector = new THREE.Vector3();
        
        if (this.keys.w) vector.z -= 1;
        if (this.keys.s) vector.z += 1;
        if (this.keys.a) vector.x -= 1;
        if (this.keys.d) vector.x += 1;

        return vector.normalize();
    }

    getMousePosition() {
        return this.mousePosition;
    }

    isShootingActive() {
        return this.isShooting;
    }
} 