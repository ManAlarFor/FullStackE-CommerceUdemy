
import { Shape } from './Shape';

export class Circle extends Shape {
    
    constructor(private theX: number ,private theY : number,private _radius: number ){
        super(theX,theY) ;
    }
    
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }
    
    getInfo(): string {
        return super.getInfo() + `, redius = ${this.radius}` ;
    }

    calculateArea(): number {
        return Math.PI*this.radius*this.radius;
    }

}