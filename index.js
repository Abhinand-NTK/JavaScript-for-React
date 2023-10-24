// Es6 Concepts : - Lexical Scope of the java script
// var , let and const declared variables
// let => a variable declaced with let datatype it is scope is limited only in the block
// Const => a variable declaced with Const datatype it is scope is limited only in the block
//(the varible which is defined by the const key word is not reassingable)
// var => a variable declaced with Var datatype it is scope is  Entire in the function 

// change the date type of the i and find the diffrence 

function testing(){
    for( i = 0 ; i < 5 ;i ++)
    {
        console.log(i)

    }
console.log(i) // will give result 

}

testing()

console.log(i) // will give result 
console.log('\n\n') // will give result 


//We can define a function inside a object,
//so the function name is the key value and function can define in the value side of the respective key


const person = {
    name :'Alex',
    job:function(){
        console.log("i am a software engineer \n\n")
    },
    desigination:()=>console.log('Lead for cloud production \n\n')
}

person.job()
person.desigination()


// the above can re write using simply in the es6 concept like the below

const Employee = {
    name :'Alex',
    job() {
        console.log("i am a Mechanical engineer")
    },
}

Employee.job()


//This keyword in javascript. it will allways return a value that the current object.

const example = {
    name : "Alice",
    fun() {
        console.log(this)
        console.log("I am return a value of the current object means the instance of the current object")

    }
}

example.fun()
const temp = example.fun.bind(example)
console.log(temp);
console.log('\n\n')
temp();

//Arrow funtions in the javascript

const squre = function(number) {
    return number * number
}  // ordinery Function

console.log("\n\n")

console.log("The are of the squre is :-",squre(5))

const squre1 = (number)=>  (number * number)
  // Arrow Functions
console.log('\n\n')
console.log("I used here arrow funtion for finding the area oiof the sqaure",squre1(8))

// Filter with the arrow functions :- 

//filter method is used to return a array a modified one according to some condition,
//it will not alter the the parent array
//the result is purely depend upon the experssion that we write for filert the array

const state =[
    {id:1,status:true},
    {id:2,status:false},
    {id:3,status:true},
    {id:4,status:true},
    {id:5,status:false}
]

// if i need to find the id that is true we can use the filter with a arrow function may it will be the easeir approch for the same.
console.log("\n")
const status_of_id = state.filter((obj)=>obj.status)
console.log(status_of_id)

//Stand alone function a

function test(){
console.log(this)


}
test()

console.log(this)


//React Map Method for showing: by simple itetrate each we are modifying  array and return a new it 

const arr = ['Red','White','Yellow','Black']

const item = arr.map((i)=>"The color is  :- " + i )

console.log(item)


//objet Destructuring 

const address = {
                name : '',
                adresss:''    
}



// to change the above one method is calling the each varible by object name 

address.name = "Abhinand"
address.adresss = "kinfra"

console.log(address)

// The another method is that array destructing at that time we dont need to use the object name serveral times insted of that it is 
//easy to destruture the items and change the values like the below

const { name:a,adresss:b } = address;

console.log("\n\n")

console.log(a,b)

// Spread Operator 

const first = [1,2,3,4,5]
const second = [6,7,8,9,10]

// for combine the each array we can use spread operator 

const comabined = [...first,...second]

console.log(comabined)

// We can spered the elemnts very easily for diffent purpose