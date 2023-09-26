let myLowerCase = (word)=>{
    let loweralp = (alp)=>{
        let abc = 'abcdefghijklmnopqrstuvwxyz'
        let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for(let i=0; i<26; i++){
            if(alp===abc[i]) return alp;
            if(alp===ABC[i]) return abc[i];
            if(abc.includes(alp)===false&&ABC.includes(alp)===false) return alp;
        }
    }
    let newWord = '';
    for(let i=0; i<word.length; i++) newWord+=loweralp(word[i]);
    return newWord;
}

let test = ["MA", "SA", "I", "SCH", "OOL"]
for(let i=0; i<test.length; i++) test[i]=myLowerCase(test[i]);
console.log(test)