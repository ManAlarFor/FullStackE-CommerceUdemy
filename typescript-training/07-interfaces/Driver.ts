import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach() ;
let myGolfCoach = new GolfCoach() ;

//declare an array for coaches

let theCoaches: Coach[] = [] ;

theCoaches.push(myCricketCoach, myGolfCoach) ;

for (const coach of theCoaches) {

    console.log(coach.getDailyWorkout())

}