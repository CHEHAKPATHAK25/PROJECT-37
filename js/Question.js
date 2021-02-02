class Question {
    constructor () {
        //design the game elements, greeting, title, question, options
        this.greeting = createElement("h2");
        this.input1 = createInput("Enter Your Name Here");
        this.input2 = createInput("Enter Correct Option No.")
        this.button = createInput("Submit");
        this.question = createElement(" Which Continent Starts From 'E' & Ends With The Same Letter ? ")
        this.option1 = createElement("Ethiopia")
        this.option2 = createElement("Europe")
        this.option3 = createElement("China")
        this.option4 = createElement("Australia")
    }

    display () {
        //assign positions to the variable mentioned above
        var title = createElement("h2");
        fill("blue");
        title.html("Welcome To My Quiz Gmae!");
        title.position(100,200);
        //assign position to the variables given above in the constructor
        this.input1.position(700,350);
        this.input2.position(700,150);
        this.button.position(750,200);
        this.question.position(400,150);
        this.option1.position(100,200);
        this.option2.position(100,240);
        this.option3.position(100,280);
        this.option4.position(100,320);
        //if game starts, hide some buttons and inputs 
        this.button.mousePressed(()=>{
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            //assign the contestant name to the greeting and increase the contestant count by 1 each contestant joins 
            contestant.name = this.input1.value();
            contestantCount=+1;
            contestant.index = contestantCount;
            //update the contestant and the contestantCount
            contestant.update();
            contestant.updateCount(contestantCount);
            //greet the contestant in the greeting variable and assign the position
            this.greeting.html("Welcome" + contestant.name);
            this.greeting.position(150,200);
        }

        )
    }
}