# 3D Top-Down Shooter

A 3D top-down shooter game built with Three.js. Fight off waves of enemies, collect power-ups, and survive as long as possible!

## Live Demo

Play the game here: [3D Top-Down Shooter](https://roshhhyy.github.io/3d-top-down-shooter/)

## Features

- 3D top-down perspective
- Wave-based enemy spawning
- Power weapon system
- Health and stamina management
- Score tracking
- Boss battles
- Visual effects and particle systems

## Controls

- WASD: Move player
- Mouse: Aim and shoot
- Space: Sprint
- Click/Press Space: Start game

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/roshhhyy/3d-top-down-shooter.git
cd 3d-top-down-shooter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- Three.js for 3D graphics
- Vite for build tooling
- JavaScript for game logic

## License

ISC

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