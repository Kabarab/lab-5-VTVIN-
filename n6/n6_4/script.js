function week(a){ 
    if(a>0 && a<7){
    week=["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    return week[a-1];
}
    else{
        return "Неверный ввод";
    }

}
console.log(week(9))