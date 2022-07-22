class person{
    constructor(firstname,lastname,age,district,place,){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.district=district;
        this.place=place;
    }
    getdetails(){
        return(`the name of  a person is ${this.firstname} ${this.lastname} with age ${this.age} born at ${this.district} state ${this.place}`);
    }
}
let person1= new  person("guvi","geek","10","chennai","tamilnadu",);
let person2= new  person("p","ruban","23","karaikal","puducherry",);
let person3= new  person("rohit","sharma","35","mumbai","maharastra",);
let person4= new  person("ms","dhoni","41","ranchi","jharkand",);
console.log(person1.getdetails(),person2.getdetails(),person3.getdetails(),person4.getdetails());