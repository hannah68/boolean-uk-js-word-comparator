let firstWord = prompt('Please Enter your first word/sentense?')
let secondWord = prompt('Please Enter your second word/sentense?')



// challenge1
if(!firstWord.trim().includes(' ') && !secondWord.trim().includes(' ')){
    
    if(firstWord.length > secondWord.length){
        console.log(`The first word you entered: "${firstWord}" is longer than the second word you entered: "${secondWord}"`);
        console.log(`The ${firstWord} is ${firstWord.length} letter`);
        console.log(`The ${secondWord} is ${secondWord.length} letter`);
    }else{
        console.log(`The second word you entered: "${secondWord}" is longer than the first word you entered: "${firstWord}"`);
        console.log(`The ${firstWord} is ${firstWord.length} letter`);
        console.log(`The ${secondWord} is ${secondWord.length} letter`);
    }
}else{
    // challenge2
    let firstS = firstWord;
    let secondS = secondWord;

    let firstSentence = firstS.split(' ').join('');
    let secondSentence = secondS.split(' ').join('');

    if(firstSentence.length > secondSentence.length){
        console.log(`The first sentence you entered: "${firstS}" is longer than the second sentence you entered: "${secondS}"`);
        console.log(`The "${firstS}" is ${firstSentence.length} letter`);
        console.log(`The "${secondS}" is ${secondSentence.length} letter`);
    }else{
        console.log(`The second sentence you entered: "${secondS}" is longer than the first sentence you entered: "${firstS}"`);
        console.log(`The "${firstS}" is ${firstSentence.length} letter`);
        console.log(`The "${secondS}" is ${secondSentence.length} letter`);
    }
}


