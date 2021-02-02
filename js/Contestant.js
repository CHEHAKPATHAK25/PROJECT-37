class Constestant {
    constructor () {
        this.index = null;
        this.name = null;
        this.distance = null;
    }
    //read contestantCount from firebase 
    getCount() {
        var contestantref = database.ref("contestantCount");
        contestantref.on("value",(data)=>{
            contestantCount = data.val();
        })
    }
    //write the cont of contestant stored in a var contestantCount
    updateCount(count) {
        database.ref("/").update({
            contestantCount : count
        })
    }
    //store the value of contestant's score in contestantIndex
    update() {
        var contestantIndex = "players/player"+this.index;
        //write the name and 
        database.ref(contestantIndex).set({
            name : this.name,
            distance : this.distance
        })
    }
    //get the values of the contestant stored in a var contestantInfo
    static getContestantinfo () {
        var contestantinfo = database.ref("contestant")
        contestant.on("value", (data)=> {
            allContestants = data.val();
        })
    }

    display() {
        //
        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hid();
            this.input2.hid();
            this.button.hide();
            //write contestant name from the input1 of question class stored in a var contestant.name
            contestant.name = this.input1.value();
            //increase the contestant count by 1 stored in a var contestantCount
            contestantCount+=1;
            //contestant.index is the contestantCount
            contestant.index = contestantCount;
            //here, update the contestant variable in the firebase
            contestant.update();
            //update the contestant count in the firebase
            contestant.updateCount(contestantCount);
        }
        ) 
    }
}