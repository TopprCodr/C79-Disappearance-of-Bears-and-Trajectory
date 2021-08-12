class Log extends BaseClass{
    constructor(x, y, height, angle){
        super(x, y, 20, height);
        this.image = loadImage("./sprites/wood.png");
        //to set the angle for logs
        Matter.Body.setAngle(this.body, angle);
    }
}
