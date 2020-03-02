// Assignment
// MERN_JSHoisting

// 1.Rewrite the given code as it is seen by the interpreter
// 2.Predict the outputs
// 3.Run the original code and compare the outputs to your predictions

1. 
console.log(hello);                                   
var hello = 'world';  

//Prediction:
// var needle = 'haystack';
// var needle = 'magnet';
// test();
// function test(){
// 	console.log(needle); // 'magnet'
// }

// OUTPUT:
// console.log(hello);
// Thrown:
// ReferenceError: hello is not defined
// > var hello = 'world';



2. 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//Prediction:
// var needle = 'haystack';
// var needle = 'magnet';
// test();
// function test(){
// 	console.log(needle); // 'magnet'
// }


// Output:
// > var needle = 'haystack';
// undefined
// > test();
// Thrown:
// ReferenceError: test is not defined
// > function test(){
// ...     var needle = 'magnet';
// ...     console.log(needle);
// ... }




3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//Prediction:
// var brendan = 'super cool';
// console.log(brendan);// super cool

// Output:
// > var brendan = 'super cool';
// undefined
// > function print(){
// ...     brendan = 'only okay';
// ...     console.log(brendan);
// ... }
// undefined
// > console.log(brendan);
// super cool
// undefined

4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// Prediction:
// var food = 'chicken';
// console.log(food);//chicken
// eat();
// food = 'half-chicken';
    // console.log(food); // half-chicken


// OUTPUT:
// > var food = 'chicken';
// undefined
// > console.log(food);
// chicken
// undefined
// > eat();
// Thrown:
// ReferenceError: eat is not defined
// > function eat(){
// ...     food = 'half-chicken';
// ...     console.log(food);
// ...     var food = 'gone';
// ... }


// 5.
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// PREDICTION:
// mean(); // ERROR mean is not defined
// console.log(food);//ERROR food is not defined
// console.log(food); //ERROR food is not defined

// OUTPUT:
// > mean();
// Thrown:
// ReferenceError: mean is not defined
// > console.log(food);
// Thrown:
// ReferenceError: food is not defined
// > var mean = function() {
// ...     food = "chicken";
// ...     console.log(food);
// ...     var food = "fish";
// ...     console.log(food);
// ... }
// undefined
// > console.log(food);
// Thrown:
// ReferenceError: food is not defined

6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// PREDICTION:
// console.log(genre);//GEnge is not defined
// var genre = "disco";
// rewind();
// genre = "rock";
// console.log(genre); //rock
// var genre = "r&b";
// console.log(genre); // r&b
// console.log(genre);//disco

// OUTPUT:
// rock
// r&b
// disco

7. 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// PREDICTION:
// dojo = "san jose";
// console.log(dojo);// san jose
// learn();
// dojo = "seattle";
// console.log(dojo);//seattle
// var dojo = "burbank";
// console.log(dojo);//burbank
// console.log(dojo);//seattle  ---- WRONG!

// OUTPUT:
// san jose
// seattle
// burbank
// san jose
console.log("----------");

8. 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// PREDICTION:
// console.log(makeDojo("Chicago", 65));//"Chicago", 65  --- WRONG!
// console.log(makeDojo("Berkeley", 0));//closed for now ----WRONG!
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }


// OUTPUT:
// { name: 'Chicago', students: 65, hiring: true }
// dojo = "closed for now";
// ^

// TypeError: Assignment to constant variable.; 