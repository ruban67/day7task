class uber{
    constructor(distance,rate,waitingcharge){
        this.distance=distance;
        this.rate=rate;
        this.waitingcharge=waitingcharge;
    }
    setdistance(dist){
        this.distance=dist;
    }
    getridedetails(){
        return(`distance of a ride is${this.distance}and rate of ${this.rate}with waitingcharge of ${this.waitingcharge}`);
    }

getprice(){
let totalprice =(this.rate * this.distance)+(this.waitingcharge*5);
return totalprice;
}
}
let uber1 =new uber(150,16,10);
console.log(uber1.getprice());
uber1.setdistance(70);
console.log(uber1.getprice());
