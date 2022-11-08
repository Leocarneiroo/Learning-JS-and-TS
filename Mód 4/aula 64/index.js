const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//const a3 = a1.concat(a2);
// pode usar a concatenação com rest operator no caso os 3 pontinhos ...
const a3 = [...a1, ...a2];
console.log(a3);