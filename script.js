//Activity 1
// const logMsg = () => {
//     console.log("Hello CodeNation")
// }
// // logMsg()

// const Multi = (runyoucleverboy) =>{
//     for(let i = 0; i < 5; i++){
//         runyoucleverboy()
//     }
// }
// Multi(logMsg)

//Activity 2
// let numbers = [2, 6, 8, 13, 26];

// let newNums = numbers.map( (num) => {
//        return num * 3;
// } )

// console.log(newNums)

//Activity 3
// const add = (a, b) => {
//     return a + b;
//    };
// const subtract = (a, b) => {
//     return a - b;
//    };
// const multiply = (a, b) => {
//     return a * b;
//    };
// const divide = (a, b) => {
//     return a / b;
//    };
// const doMaths = (num1) => { //also a
//     return (num2, fn) => { //also b, fn = any function name
//     return fn(num1, num2);
//     };
//    }

//    console.log( doMaths(2) (5, multiply) ) //2 = num1 AND a; 5 = b AND num2; Multiply = fn

// Challenge Activity
// const QuoteButton = document.getElementById("QuoteBtn");
// const JokeText = document.getElementById("JokeText");
// const Punch = document.getElementById("Punch")

// QuoteButton.addEventListener("click",() => {
//     const NewQuote = async () =>{
//     try {
//         const FoundQuote = await fetch ('https://official-joke-api.appspot.com/random_jok');
//         if (!FoundQuote.ok){
//             throw new Error("+++OUT OF CHEESE ERROR. REBOOT UNIVERSE+++")
//         }
//         const data = await FoundQuote.json();
//         console.log(data.setup);
//         JokeText.innerText = data.setup
//         setTimeout(() => {
//             Punch.innerText = data.punchline
//             console.log(data.punchline)
//         }, 3000);
        
//         } catch (err) {
//         alert(err)
//     }
//     }
//     NewQuote()
// })
//Challenge Activity 1b
// const FactBtn = document.getElementById("FactBtn");
// const FactInfo = document.getElementById ("FactInfo");

// FactBtn.addEventListener("Click", () => {
//     const NewFact = async () =>{
//     try {
//         const FactFind = await fetch ('https://catfact.ninja/fact');
//         if (!FactFind.ok)
//         {
//             throw new Error ("+++REDO FROM START+++");
//         }
//         const data = await FactFind.json();
//         console.log(data.fact);
//         FactInfo.innerText = data.fact
//     }
//     catch (err){
//         alert(err)

//     }
//     }
//     NewFact()
// })