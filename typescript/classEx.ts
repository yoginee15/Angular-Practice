class Test{
    constructor(private _x?:number,private y?:number){
        this.x=_x;
        this.y=y;
    }
    set x(x:number){
        this._x =x;
    }
    get x(){
        return this._x;
    }
}

let test = new Test(2,3);
console.log(test.x);
test.x = 10;