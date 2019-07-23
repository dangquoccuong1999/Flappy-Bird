let Column = function (faceImg, xPosition, yPosition, width, height) {
    this.faceImg = faceImg;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
    this.speed = 3;

    this.draw = function () {
        let ctx = document.getElementById('myCanvas').getContext("2d");
        let img = new Image();
        img.src = this.faceImg;
        ctx.beginPath();
        ctx.drawImage(img, this.xPosition, this.yPosition, this.width, this.height);
    };

    this.moveLeft = function () {
        this.xPosition -= this.speed;
    };
};

