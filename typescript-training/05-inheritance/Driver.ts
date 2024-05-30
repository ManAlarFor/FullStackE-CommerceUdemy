import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Shape } from './Shape';

let myShape = new Shape(10, 15) ;
console.log(myShape.getInfo()) ;

let myCircle = new Circle(5,10,20) ;
console.log(myCircle.getInfo())


let myRectangle = new Rectangle(5,10,20, 30) ;
console.log(myRectangle.getInfo())