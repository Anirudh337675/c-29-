class Slingshot{
    constructor(bodyA,pointB){
      
        var c_options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.bodyA=bodyA
        this.pointB=pointB
        
        this.sling=Constraint.create(c_options);
        World.add(world,this.sling);
    }
    fly()
      {
          this.sling.bodyA=null;
      }
      display(){

       
        if(this.sling.bodyA){
          var A = this.sling.bodyA.position;
          var B = this.pointB;
       

        stroke ("blue")
        strokeWeight(4)
        line(A.x,A.y, B.x,B.y);
        }
      }
      
      
    }