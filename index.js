// The number of words in the sentence (assuming that the words are separated by a single space).
let sentences="put any sentences to try."
// ******************This two methode to count the number of words***
const numword=(sentence) => {return sentence.match(/\w+/g).length;};
function WordCount(str) { return str.split(" ").length;}
// ******************This to count the legth of characters*** // only count letters and numbers
console.log("number of charchter="+sentences.match(/\w/g).length);
// ******************This to count the vowels of words in sentences***
var z=0
var vowel
for(var i=0; i<sentences.length; i++)
{ vowel=sentences[i]
    if (vowel==="e" || vowel==="a" || vowel==="i" || vowel==="o") z=z+1
}
