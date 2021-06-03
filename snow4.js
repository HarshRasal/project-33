class snow4{
    constructor(x,y){
        var options = {
        'friction':0.3,
        'density':1.0
      }
     
      this.snow4 = loadImage("snow4.webp",x,y,50,50,options);
      x=x
      y=y
      World.add(world,this.snow4)
    }

    display(){
        var posX =this.snow4.body.position.x;
        var posY =this.snow4.body.position.y       
      image (this.snow4,posX,posY)  
    }
}