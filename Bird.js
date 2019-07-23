let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");

let Bird = function (faceImg, fly, xPosition, yPosition, width, height) {
    this.faceImg = faceImg;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
    this.speedDown = 5;
    this.fly = fly;

    this.moveUp = function () {
        if (this.xPosition >= 0) {
            this.yPosition -= this.fly;
        }
    }
    this.moveDown = function () {
        if (this.yPosition < canvas.height) {
            this.yPosition += this.speedDown;
        }
    }
    this.draw = function () {
        let img = new Image();
        img.src = this.faceImg;
        ctx.drawImage(img, this.xPosition, this.yPosition, this.width, this.height);
    }
};

