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
challengeBanner(2)
firstFive("Regular expressions are for term 2.")

function everyThird(str){
    let i = 2;
        while(i < str.length){
           
                console.log(str[i])

            
            i = i +3
        } 
}

challengeBanner(3)
everyThird("I am the alfalfa and the omelette.")