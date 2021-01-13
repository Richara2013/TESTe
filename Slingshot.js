class Slingshot{
    constructor(bodyA,pointB){
        var options= {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(options);
        this.pointB=pointB
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        World.add(world,this.chain);
    }
    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.chain.bodyA!=null){
        var pointA= this.chain.bodyA.position;
        var pointB= this.pointB;
        push();
        if(pointA.x<220){
        strokeWeight(8);
        stroke(48,22,8);
        line(pointA.x-20, pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20, pointA.y,pointB.x+30,pointB.y-3);
        image(this.sling3,pointA.x-30,pointA.y-10,15,30);
    } else{
        strokeWeight(3);
        stroke(48,22,8);
        line(pointA.x+25, pointA.y,pointB.x-10,pointB.y);
        line(pointA.x+25, pointA.y,pointB.x+30,pointB.y-3);
        image(this.sling3,pointA.x+25,pointA.y-10,15,30);
    }
        pop();
    }
}
    fly(){
        this.chain.bodyA=null;
    }
}