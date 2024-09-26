// const palindromes = function (str) {
//   let reversed = str
//     .toLowerCase()
//     .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
//     .split("")
//     .reverse()
//     .join("");
//   let original = str
//     .toLowerCase()
//     .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
//     .split("")
//     .join("");

//   return reversed === original ? true : false;
// };
function palindromes(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  console.log(cleanStr);
  return cleanStr === cleanStr.split("").reverse().join("");
}
console.log(palindromes("hello world"));
// Do not edit below this line
module.exports = palindromes;
