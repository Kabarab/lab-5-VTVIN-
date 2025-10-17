let n = '12345'; 
let sum = 1; 
for (let i = 0; i < n.length; i++) {
let x = n[i];
sum = sum * Number(x);
}
alert(sum);
