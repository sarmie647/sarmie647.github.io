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
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100); 
    createPlatform(600, 600, 700, 250); 
    createPlatform(200, 240, 200, 20); 
    createPlatform(150, 360, 200, 20);
    createPlatform(100, 480, 200, 20);
    createPlatform(100, 600, 200, 250);
    createPlatform(605, 480, 800, 20);
    createPlatform(605, 360, 800, 20);
    createPlatform(605, 240, 800, 20)
    //create Collectibales
    createCollectable("max", 485, 70); 
    createCollectable("grace", 1070, 197); 
    createCollectable("kennedi", 605, 317);
    createCollectable("database", 1333, 700)
    //create Cannons
    createCannon("bottom", 500, 1700, 20, 100);
    createCannon("bottom", 400, 1700, 20, 100);
    createCannon("right", 570, 5000, 20, 10)



    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create Platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatforms(1050, 750, 350, 375);
    createPlatforms(700, 500, 200, 20);
    createPlatforms(200, 1050, 200, 20);
    createPlatforms(100, 500, 200, 20);
    createPlatforms(100, 700, 200, 20);


    // TODO 2
    // Creat Collectable
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("steve", 500, 300, 20, 0.5); 
    createCollectable("grace", 500, 300); 
    createCollectable("diamond", 500, 300);

    // TODO 3
    // Create Cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannons("left", 6, 10);
    createCannons("left", 6, 10); 
    createCannons("left", 6, 10); 
    createCannons("left", 6, 10); 
    createCannons("left", 6, 10); 
    createCannons("left", 6, 10); 
    createCannons("left", 6, 10);  


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
