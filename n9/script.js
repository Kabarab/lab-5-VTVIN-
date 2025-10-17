function silka(a){ 
    let primer="http://";
    for(let i=0; i<6;){
        if(a[i]==primer[i]){
            i++
        }
        else{
            return false
        }
    }
    return true
}
function prverka_html(a){ 
    let primer=".html";
    for(let i=0; i<6;){
        if(a[a.length-i]==primer[primer.length-i]){
            i++
        }
        else{
            return false
        }
    }
    return true
}
