// class Point {
    
//     // private x: number;
//     // private y: number;

//     constructor(private _x?: number, private _y?: number){
//         // this.x = x;
//         // this.y = y;
//     }

//     draw(){
//         if (this._x == undefined){
//             this._x = 10;
//         }

//         console.log('X: ' + this._x + ', Y: ' + this._y);
//     };

//     get x(){
//         return this._x;
//     }

//     get y(){
//         return this._y;
//     }

//     set x(value){
//         if (value < 1) 
//             throw new Error('value cannot be less than 0');

//         this._x = value;
//     }

// }

import { Point } from './point';

let point = new Point(1,2);
let point2 = new Point();
// point.x = 10;
point.draw();
point2.draw();