const HEIGHT_NUMBER_RANDOM = Math.floor(Math.random() * 400);
const width = 100;
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const COLUM_TOP_IMG = "cot_3.png";
const COLUM_BOTTOM_IMG = "cot_2.png";
const KHOANG_CACH_WIDTH = 400;
const KHOANG_CACH_HEIGHT = 50;
const NUMBER = 50;
let arrColumnTop = [];
let arrColumnBottom = [];

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let GameBoad = function () {
    this.startBird = function () {
        this.bird = new Bird("chim.png", 50, 200, 300, 100, 70);
        this.bird.draw();
    };

    this.birdRun = function () {
        this.bird.moveDown();
        this.bird.draw();
    };

    this.birdMoveUp = function (evt) {
        switch (evt.key) {
            case 'ArrowUp':
                this.bird.moveUp();
                break;
        }
    }
    this.creatColumn = function () {
        this.xColumn = canvas.width / 2;
        for (let i = 0; i < NUMBER; i++) {
            this.randomHeight = Math.random() * canvas.height / 2;
            this.columnTop = new Column(COLUM_TOP_IMG, this.xColumn + KHOANG_CACH_WIDTH * i, 0, width, this.randomHeight);
            this.columnBottom = new Column(COLUM_BOTTOM_IMG, this.xColumn + KHOANG_CACH_WIDTH * i, this.randomHeight + KHOANG_CACH_HEIGHT , width, canvas.height);
            arrColumnTop.push(this.columnTop);
            arrColumnBottom.push(this.columnBottom);
        }
    };
    this.drawAllColumn = function () {
        for (let i = 0; i < arrColumnTop.length; i++) {
            arrColumnTop[i].moveLeft();
            arrColumnTop[i].draw();
            arrColumnBottom[i].moveLeft();
            arrColumnBottom[i].draw();
            this.bird.draw();
        }
    }
    this.isTouch = function () {
        for (let i = 0; i<arrColumnTop.length;i++){
            if(this.checkCrash(this.bird,arrColumnTop[i],arrColumnBottom[i])){
                this.checkWin(true);
            }
        }
    };
    this.checkCrash = function (obj1,obj2,obj3) {
        let left1 = obj1.xPosition;
        let right1 = obj1.xPosition + obj1.width;
        let top1 = obj1.yPosition;
        let bottom1 = obj1.yPosition + obj1.height;

        let left2 = obj2.xPosition;
        let right2 = obj2.xPosition + obj2.width;
        let top2 = obj2.yPosition;
        let bottom2 = obj2.yPosition + obj2.height;

        let left3 = obj3.xPosition;
        let right3 = obj3.xPosition + obj3.width;
        let top3 = obj3.yPosition;
        let bottom3 = obj3.yPosition + obj3.height;
        if (right1 < left2 || left1 > right2 || (top1 > bottom2  && bottom1 < top3)) {
            return false;
        } else {
            return true;
        }
    };

    this.checkWin = function (value) {
        if (value){
            alert('Bạn đã thua');
        }
    }
};

let game = new GameBoad();
game.startBird();
game.creatColumn();
main();


function control(evt) {
    game.birdMoveUp(evt);
}

function docReady() {
    window.addEventListener('keydown', control);
}

function main() {
    clearCanvas();
    game.drawAllColumn();
    game.birdRun();
    game.isTouch();
    requestAnimationFrame(main);
};


