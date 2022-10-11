
var hora=document.getElementById("horas");
var minutos=document.getElementById("minutos");
var segundos=document.getElementById("segundos");

function rel(){
  var data =new Date();
  var hor=data.getHours();
  var min=data.getMinutes();
  var seg=data.getSeconds();

  if(hor<10){
    hor="0"+hor;
  }if(min<10){
    min="0"+min;
  }if(seg<10){
    seg="0"+seg;
  }
  hora.textContent=hor;
  minutos.textContent=min;
  segundos.textContent=seg;

}

const tmp=setInterval(rel ,1000)


