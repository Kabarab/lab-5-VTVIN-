
while(true){
let time = prompt("Введите время")
if(Number(time)<=60/4 && Number(time)>=0){
    alert("Это первая четверть часа")
    break
}
else if(Number(time)<=120/4 && Number(time)>60/4){
    alert("Это вторая четверть часа")
    break
}
else if(Number(time)<=180/4 && Number(time)>120/4){
    alert("Это третья четверть часа")
    break
}
else if(Number(time)<=240/4 && Number(time)>180/4){
    alert("Это четвертая четверть часа")
    break
}
else{
    alert("Неверное значение")
}
}
