// Quick Question #1
new Set([1,1,2,2,3,4])
[1,2,3,4]
// Quick Question #2
[...new Set("referee")].join("")
["ref"]
// Quick Question #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// hasDuplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

function hasDuplicate (arr) {
   return new Set(arr).size !== arr.length;
}
// vowelCount
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str){
    const vowels ="aeiou"
    const vowelMap = new Map();
    let lowerStr = str.toLowerCase();
    for(let char of lowerStr){
        if(vowels.indexOf(char)!== -1){
            if(vowelMap.has(char)){
                vowelMap.set(char,vowelMap.get(char)+1);
            }else{
                vowelMap.set(char,1);
            }
        }
    }
    return vowelMap;
}