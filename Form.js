class  Form{
    constructor(){
        this.input=createInput("name");
        this.button = createButton('PLAY');
        this.greeting = createElement("h3");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){

        var tittle = createElement("h2");

        tittle.html("CAR RACING GAME");
        tittle.position(130,10);

        
        this.input.position(200,150);

       
       this.button.position(250,200);

       this.button.mousePressed(()=>{
          this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.update();
            player.updateCount(playerCount);

           
           this.greeting.html("HELLO DUDE " +name);
           this.greeting.position(200,200);
        })
    }

}