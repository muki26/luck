var pop = 0;
document.addEventListener('mouseover',function(e){
    if(e.target.className == "balloon" && pop == 0){
        e.target.style.backgroundColor = "#ededed";
        pop++;
        var check = document.getElementById('check');
        check.style.display = "none";
        luck();
    }
});
function luck(){
    if(pop == 1){
        var lucky = document.getElementById('lucky');
        var content = document.getElementById('content');

      lucky = (Math.random()*99);
     lucky = lucky | 0;
     var luckyS = lucky;
     lucky = lucky + "%";
     content.style.display = "block";
     document.getElementById('lucky').innerHTML = lucky; 
     }
     if(luckyS <=40){
        document.getElementById('lucky1').innerHTML = "Dont Depend on Luck..";
     }
     else if(luckyS >40 && luckyS <90)
     document.getElementById('lucky1').innerHTML = "Remember LUCK comes nd go!!!";
     else
     document.getElementById('lucky1').innerHTML = "YOU ARE THE LUCKIEST PERSON";
}
