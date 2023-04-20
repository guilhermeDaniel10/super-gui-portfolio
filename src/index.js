import { Player } from "./player.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gravity = 1;

const player = new Player();
player.setCanvasContextValue(c);
animate();
addEventListeners();


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update(gravity);
  player.playerSideMovementVelocity();
}



function addEventListeners() {
  addEventListener("keydown", ({ key }) => {
    switch (key) {
      case "a":
        player.moveLeft();
        break;
      case "d":
        player.moveRight();
        break;
      case "w":
        console.log("jump")
        player.jump();
        break;
      case "s":
      //player.duck();
    }
  });

  addEventListener("keyup", ({ key }) => {
    switch (key) {
      case "a":
        player.stopLeft();
        break;
      case "d":
        player.stopRight();
        break;
      case "w":
        //player.jump();
        break;
      case "s":
      //player.duck();
    }
  });
}
