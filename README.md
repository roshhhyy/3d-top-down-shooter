# 3D Top-Down Shooter Game

A browser-based 3D top-down shooter game built with Three.js. Features include:

- Player-controlled spaceship with health and stamina systems
- Enemy AI with swaying movement patterns
- Boss enemy with unique attack patterns
- Environmental hazards (light beams and sword walls)
- Destructible enemies and collision systems
- Tree obstacles for tactical gameplay
- Visual effects including explosions and projectile impacts

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm start
```

## Controls

- WASD: Move the ship
- Mouse: Aim
- Left Click (hold): Shoot
- Avoid environmental hazards and enemy projectiles
- Use trees as cover

## Technologies Used

- Three.js for 3D graphics
- JavaScript (ES6+)
- HTML5/CSS3

## Development

This project is currently in development. Future features may include:
- Additional enemy types
- Power-ups and upgrades
- Multiple levels
- Sound effects and music 

## Misc

To properly close the game and prevent resource leaks, you should follow these steps in order:
- First, close the browser tab/window running the game
- Then, stop the Python server by pressing Ctrl + C in the terminal where the server is running
- Finally, close the terminal window

This ensures that:
- The browser releases all WebGL and other game resources
- The Python server is properly terminated
- All system resources are properly cleaned up

If you want to be extra thorough, you can also:

pkill -f "python3 -m http.server" 

The proper shutdown sequence is important because:
- The game uses WebGL resources that need to be properly released
- The Python server needs to clean up its network connections
- The browser needs to free up memory and GPU resources