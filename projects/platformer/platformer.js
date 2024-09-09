$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(0, 645, 125, 20); // medium but skinny platform
    createPlatform(225, 510, 125, 20); // medium but skinny platform
    createPlatform(399, 600, 125, 20); //medium but skinny platform
    createPlatform(700, 595, 125, 20); //medium but skinny platform
    createPlatform(500, 400, 125, 20); //medium but skinny platform
    createPlatform(900, 450, 125, 20); //medium but skinny platform
    createPlatform(1250, 600, 125, 20);//medium but skinny platform
    createPlatform(1110, 350, 125, 20);//medium but skinny platform

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("grace", 450, 400, 30, 0.2); // creates a "grace" collectible at the coordinates (500, 300), falling with a high gravity of 30, and bouncing with 20% bounce
    createCollectable("grace", 745, 550, 10, 0.2); // creates a "grace" collectible at the coordinates (745, 550), falling with a high gravity of 10, and bouncing with 20% bounce
    createCollectable("grace", 1110, 315, 2, 0.2); // creates a "grace" collectible at the coordinates (1110, 315), falling with a high gravity of 2, and bouncing with 20% bounce



    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("top", 500, 1000); // cannon on left wall, 500px down, shooting once per second
    createCannon("top", 800, 1000); // cannon on left wall, 800px down, shooting once per second
    createCannon("top", 1110, 1000);// cannon on left wall, 1000px down, shooting once per second



    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
