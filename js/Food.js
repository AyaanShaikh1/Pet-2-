class food {
    constructor(){
        this.FoodStock = 0;
        this.LastFed = 0;
        this.image = loadImage("images/Milk.png");
    
    }
    updatefoodStock(FoodStock){
       this.FoodStock = FoodStock;    
         
    }

    deductFood(){
        if(this.FoodStock > 0){
            this.FoodStock = this.FoodStock -1; 
        }
    }
    getfoodStock(){
       return this.FoodStock;
    }
    display(){
     var x=80,y=100;   

     imageMode(CENTER);
     image(this.image,200,600,70,70);

     if(this.FoodStock!=0){
        for(var i=0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
     }
    }



    
}
    
    

