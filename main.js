function challengeBanner(num){
console.log('######### Challenge ' + num + " #########")
}
challengeBanner(1)


function onlyVowels(str){
    // const str = "Regular expressions are for term 2."
    const vowels = 'aeiou';
            let i = 0;
                while(i < str.length){
                    if(vowels.includes(str[i])){
                        console.log(str[i])
                    }   
                            i++
   
}
}
onlyVowels("Regular expressions are for term 2.")