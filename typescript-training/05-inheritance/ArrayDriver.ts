import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Shape } from './Shape';

let myShape = new Shape(10, 15) ;
let myCircle = new Circle(5,10,20) ;
let myRectangle = new Rectangle(5,10,20, 30) ;

// declare an array of shapes

let theShapes: Shape[] = [] ;

//adding the shapes

theShapes.push(myShape, myCircle, myRectangle) ;

for (const shape of theShapes) {
    console.log(shape.getInfo()) ;
}