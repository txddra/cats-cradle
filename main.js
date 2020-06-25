function challengeBanner(num){
console.log('######### Challenge ' + num + " #########")
}
const vowels = 'aeiou';

function onlyVowels(str){
    // const str = "Regular expressions are for term 2."

    let i = 0;
        while(i < str.length){
            if(vowels.includes(str[i])){
                console.log(str[i])
                    }   
                i++

    }
}


// // solution we went over in class
// function onlyVowels(str){
//     let i = 0;
//         while(i < str.length){
//             if(str[i] === 'a' || str[i] === 'e' ||str[i] === 'i' || str[i] ==='o' || str[i] === 'u'){
//                 console.log(str[i];)
//             }
//             i = i + 1;
//         }
// }






challengeBanner(1)
onlyVowels("Regular expressions are for term 2.")

function firstFive(str){
    let i = 0;
        while(i < str.length){
            if(vowels.includes(str[i]) && i < 5){
                    console.log(str[i])
            }
                    i++;
    }
}

//solution we went over in class
// function firstFiveVowels(){
// const vowels ="aeiou";
// let count = 0;
// let i = 0;
// while(i < str.length){
//     if (vowels.includes(str[i] && count < 5)){
//         console.log(str[i]);
//     }
// i = i + i
//   }
// }

challengeBanner(2)
firstFive("Regular expressions are for term 2.")

function everyThird(str){
    let i = 2;
        while(i < str.length){
            // if(i % 3 === 0 ){
                console.log(str[i])

            
            i = i +3
        }
}
// }
challengeBanner(3)
everyThird("I am the alfalfa and the omelette.")

function firstFour(x, str){
    let i = 0;
        while( i < str){
      if(i < 4){
    console.log(str[i]);
    //   } i= i + 1
        }  i++
}
}
challengeBanner(4)
firstFour("Oh hi, I didn't see you there. Welcome.")