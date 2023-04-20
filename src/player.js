export class Player {
  constructor() {
    // x:0 e y:0 é o canto superior esquerdo
    // x:100 e y:100 é o canto superior esquerdo
    this.canvas = document.querySelector("canvas");

    this.position = { x: 100, y: 100 };
    this.velocity = { x: 0, y: 0 };

    this.width = 30;
    this.height = 30;

    this.keys = {
      right: {
        pressed: false,
      },
      left: {
        pressed: false,
      },
    };
  }

  setCanvasContextValue(c) {
    this.canvasContext = c;
  }

  draw() {
    this.canvasContext.fillStyle = "red";
    this.canvasContext.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(gravity) {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }

  playerSideMovementVelocity() {
    if (this.keys.right.pressed) {
      this.velocity.x = 5;
    } else if (this.keys.left.pressed) {
      this.velocity.x = -5;
    } else {
      this.velocity.x = 0;
    }
  }

  jump() {
    this.velocity.y -= 20;
  }

  moveRight() {
    this.keys.right.pressed = true;
  }

  stopRight() {
    this.keys.right.pressed = false;
  }

  moveLeft() {
    this.keys.left.pressed = true;
  }

  stopLeft() {
    this.keys.left.pressed = false;
  }
}
