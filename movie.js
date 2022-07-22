class movie{
    constructor(moviename,studio,rating){
        this.moviename=moviename;
        this.studio=studio;
        //this.rating=rating;
       if(rating==null){
        return this.rating="PG"
       }
       else{
        return this.rating=rating;
       }
    }
    getPG(array){
        var result=array.filter((element)=>element.rating=="PG")
        return result
    }

}
let movie1=new movie("casino royale","eon productions","PG13");

const array=[movie1];
console.log(array);
